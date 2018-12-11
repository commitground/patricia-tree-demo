const PatriciaTree = artifacts.require("PatriciaTree");
const MerkleTree = artifacts.require("MerkleTree");

module.exports = function(deployer) {
  deployer.deploy(PatriciaTree);
  deployer.link(PatriciaTree, MerkleTree);
  deployer.deploy(MerkleTree);
};