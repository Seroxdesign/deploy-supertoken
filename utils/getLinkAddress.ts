export const getLink = (network: number, address: string) => {
  const scanMap: any = {
    1: 'https://etherscan.io/',
    10: 'https://optimistic.ethereum.io/',
    137: 'https://polygonscan.com/',
    42161: 'https://arbiscan.io/',
  }

  const scanLink = `${scanMap[network!]}/${address}`;
  return scanLink;
}