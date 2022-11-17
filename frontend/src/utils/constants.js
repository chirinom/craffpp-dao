import ticketsContract from './Tickets.json'
import winnersContract from './Winners.json'

export const ticketsAbi = ticketsContract.abi
export const winnersAbi = winnersContract.abi

export const ticketsContractAddress = process.env.VUE_APP_TICKETS_CONTRACT_ADDRESS
export const winnersContractAddress = process.env.VUE_APP_WINNERS_CONTRACT_ADDRESS
