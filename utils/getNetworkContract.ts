import { contractMap } from "../constants/addresses"

export const getNetworkContract = (chain: number) => {
  const contract = contractMap[chain];

  return contract;
}