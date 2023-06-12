import { wrapperContractMap } from "../constants/addresses";

export const getNetworkContract = (chain: number) => {
  const contract = wrapperContractMap[chain];

  return contract;
}