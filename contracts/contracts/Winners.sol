// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Winners {

    event Winner(
        string amount,
        string winnerAddress,
        string pool_code,
        string pool_standing,
        uint256 timestamp
    );

    struct WinnerStruct {
        string amount;
        string winner_address;
        string pool_code;
        string pool_standing;
        uint256 timestamp;
    }

    WinnerStruct[] winners;

    function addWinnerStructToBlockchain(
        string memory amount,
        string memory winner_address,
        string memory pool_code,
        string memory pool_standing
    ) public {
        winners.push(
            WinnerStruct(
                amount,
                winner_address,
                pool_code,
                pool_standing,
                block.timestamp
            )
        );

        emit Winner(
            amount,
            winner_address,
            pool_code,
            pool_standing,
            block.timestamp
        );
    }


    function getAllWinners()
        public
        view
        returns (WinnerStruct[] memory)
    {
        return winners;
    }
}
