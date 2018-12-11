import { updateTree } from '../actions/tree'
import { hexToString } from 'web3-utils'

const ZERO = '0x0000000000000000000000000000000000000000000000000000000000000000'

export const fetchTree = (drizzle) => async (dispatch) => {
  let rootEdge = await drizzle.contracts.MerkleTree.methods.getRootEdge().call()
  console.log(rootEdge)
  let tree = await getNodeRecursively(
    rootEdge[0],
    rootEdge[1],
    rootEdge[2],
    drizzle.contracts.MerkleTree.methods.getNode,
    drizzle.contracts.MerkleTree.methods.getValue,
  )
  dispatch(updateTree(tree))
}

const getNodeRecursively = (
  labelLength, label, hash, getNode, getValue) => new Promise(async res => {
  const obj = {
    name: hash,
    attributes: {
      label,
      labelLength,
    },
    children: [],
  }

  let result = await getNode(hash).call()
  if (result[2] !== ZERO) {
    obj.children.push(
      await getNodeRecursively(result[0], result[1], result[2], getNode,
        getValue),
    )
  } else {
    obj.attributes.value = await getValue(hash).call()
  }

  if (result[5] !== ZERO) {
    obj.children.push(
      await getNodeRecursively(result[3], result[4], result[5], getNode,
        getValue),
    )
  } else if (!obj.attributes.value) {
    obj.attributes.value = await getValue(hash).call()
  }

  // If it is a leaf node, convert hex bytes to a utf8 string
  if (obj.attributes.value) {
    obj.attributes.value = hexToString(obj.attributes.value)
  }

  res(obj)
})

