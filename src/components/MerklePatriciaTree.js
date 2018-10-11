import React, { Component } from 'react'
import Tree from 'react-d3-tree'
import styled from 'styled-components'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'
import { fetchTree } from './../fetches/merkluxTree'
import { fromJS } from 'immutable'

const TreeStyler = styled.div`
tspan {
  fill: white;
  stroke: white;
  stroke-width: 1;
}
circle {
  fill: white;
  stroke: black;
  stroke-width: 3;
}
.nodeNameBase {
  fill: white;
  stroke: white;
  font-weight: bold;
  stroke-width: 1;
}
`

class NodeLabel extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      collapse: true
    }
  }

  collapsedLabel () {
    const { nodeData } = this.props
    return (
      <div>
        <h5>{nodeData.name && `${nodeData.name.substr(0, 6)}...`}</h5>
      </div>
    )
  }

  expandedLabel () {
    const { nodeData } = this.props
    return (
      <div className={"wrapper"}>
        <h5>{nodeData.name && `${nodeData.name.substr(0, 6)}...`}</h5>
        <h6>Node Hash: {nodeData.name}</h6>
        {nodeData.attributes && Object.keys(nodeData.attributes).map(
          key=>(<h6>{key}: {nodeData.attributes[key]}</h6>)
        )}
      </div>
    )
  }

  render () {
    const { className, nodeData } = this.props
    return (
      <div className={className}
           onMouseOver={() => this.setState({ collapse: false })}
           onMouseOut={() => this.setState({ collapse: true })}
      >
        {this.state.collapse ? this.collapsedLabel() : this.expandedLabel()}
      </div>
    )
  }
}

class MerklePatriciaTree extends Component {
  state = {}

  constructor (props, context) {
    super(props)
    this.drizzle = context.drizzle
  }

  componentDidMount () {
    const dimensions = this.treeContainer.getBoundingClientRect()
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 5
      }
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (fromJS(this.props).equals(fromJS(nextProps))) {
      return false
    } else {
      return true
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.root !== prevProps.root) {
      console.log('FETCH')
      this.props.fetchTree(this.drizzle)
    }
  }

  render () {
    return (
      <TreeStyler>
        <div style={{ width: '100%', height: '100vh' }} ref={tc => (this.treeContainer = tc)}>
          <Tree
            data={[this.props.data]}
            translate={this.state.translate}
            orientation={'vertical'}
            allowForeignObjects
            nodeLabelComponent={{
              render: <NodeLabel className='myLabelComponentInSvg'/>,
              foreignObjectWrapper: { x: 10, y: 10 }
            }}
          />
        </div>
      </TreeStyler>
    )
  }
}

MerklePatriciaTree.contextTypes = {
  drizzle: PropTypes.object
}

const mapStateToProps = state => ({
  data: state.tree,
  root: state.contracts.MerkluxTree.getRootHash
})

const mapDispatchToProps = (dispatch) => ({
  fetchTree: drizzle => dispatch(fetchTree(drizzle))
})

export default drizzleConnect(MerklePatriciaTree, mapStateToProps, mapDispatchToProps)
