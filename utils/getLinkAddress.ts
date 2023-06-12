const scanMap: any = {
  //Mainnet scans
  1: 'https://etherscan.io/',
  10: 'https://optimistic.etherscan.io/',
  56: 'https://bscscan.com/',
  100: 'https://gnosisscan.io/',
  137: 'https://polygonscan.com/',
  42161: 'https://arbiscan.io/',
  43114: 'https://snowtrace.io/',

  //Testnet scans

  5: 'https://goerli.etherscan.io/',
  420: 'https://goerli-optimism.etherscan.io/',
  43113: 'https://avascan.info/',
  80001: 'https://mumbai.polygonscan.com/',
  421613: 'https://goerli.arbiscan.io/',
  
}

export const getTokenLink = (network: number, address: string) => {
  const scanLink = `${scanMap[network!]}token/${address}`;
  return scanLink;
}

export const getTransactionLink = (network: number, address: string) => {
  const scanLink = `${scanMap[network!]}tx/${address}`;
  return scanLink;
}