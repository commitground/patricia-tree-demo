const MerkluxTree = artifacts.require("MerkluxTree");

module.exports = function(deployer) {
  deployer.deploy(MerkluxTree);
};