pragma solidity ^0.4.24;

import "solidity-patricia-tree/contracts/tree.sol";
import "solidity-patricia-tree/contracts/implementation.sol";

contract MerkleTree is PatriciaTreeImplementation {
    constructor() {
    }
    function insertString(string memory key, string memory val) public {
        super.insert(bytes(key), bytes(val));
    }
}