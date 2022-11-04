// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Tickets{

    address public owner;
     
    constructor(){
        owner = msg.sender;    
    }

    event buy(
        string ticket_owner,
        uint256 amount,
        string month,
        string pool_type,
        uint256 timestamp,
        string keyword
    );

    struct TicketStruct {
        string ticket_owner;
        uint256 amount;
        string month;
        string pool_type;
        uint256 timestamp;
        string keyword;
    }

    TicketStruct[] tickets;

    function buyTicket(
        uint256 amount,
        string memory ticket_owner,
        string memory month,
        string memory pool_type,
        string memory keyword
    ) public payable {
        tickets.push(
            TicketStruct(
                ticket_owner,
                amount,
                month,
                pool_type,
                block.timestamp,
                keyword
            )
        );

        emit buy(
            ticket_owner,
            amount,
            month,
            pool_type,
            block.timestamp,
            keyword
        );
    }

    function getAllTickets() public view returns (TicketStruct[] memory) {
        return tickets;
    }
     
     function getBalance() public view returns(uint){
         return address(this).balance;
     }
     
 
    function transferEther(address payable recipient, uint amount) public returns(bool){
        require(owner == msg.sender, "Transfer failed, you are not the owner!!");
        
        if (amount <= getBalance()){
            recipient.transfer(amount);
            return true;
        }else{
            return false;
        }
    }
 } 