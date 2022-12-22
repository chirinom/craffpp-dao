// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Winners {
    address public  owner;

    constructor() {
        owner = msg.sender;
    }

    event Winner(
        string amount,
        string winnerAddress,
        string pool_code,
        string pool_standing,
        string pool_type
    );

    struct WinnerStruct {
        string amount;
        string winner_address;
        string pool_code;
        string pool_standing;
        string pool_type;
    }

    WinnerStruct[] winners;

    function addWinnerStructToBlockchain(
        string memory amount,
        string memory winner_address,
        string memory pool_code,
        string memory pool_standing,
        string memory pool_type
    ) public {
        require(owner == msg.sender, 'Not Owner');
        
        winners.push(
            WinnerStruct(
                amount,
                winner_address,
                pool_code,
                pool_standing,
                pool_type
            )
        );

        emit Winner(amount, winner_address, pool_code, pool_standing, pool_type);
    }

    function getAllWinners() public view returns (WinnerStruct[] memory) {
        return winners;
    }
}
