// Mainnet proxy contract addresses for supertoken factory

export const supertoken_factory_mainnet_proxy: string = '0x0422689cc4087b6B7280e0a7e7F655200ec86Ae1';
export const supertoken_factory_polygon_proxy: string = '0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34';
export const supertoken_factory_gnosis_proxy: string = '0x23410e2659380784498509698ed70E414D384880';
export const supertoken_factory_optimism_proxy: string = '0x8276469A443D5C6B7146BED45e2abCaD3B6adad9';
export const supertoken_factory_arbitrum_proxy: string = '0x1C21Ead77fd45C84a4c916Db7A6635D0C6FF09D6';
export const supertoken_factory_avalanche_proxy: string = '0x464AADdBB2B80f3Cb666522EB7381bE610F638b4';
export const supertoken_factory_bnb_proxy: string = '0x8bde47397301F0Cd31b9000032fD517a39c946Eb';

// Testnet proxy contract addresses for supertoken factory

export const supertoken_factory_goerli_proxy: string = '0x94f26B4c8AD12B18c12f38E878618f7664bdcCE2';
export const supertoken_factory_mumbai_proxy: string = '0x200657E2f123761662567A1744f9ACAe50dF47E6';
export const supertoken_factory_optimism_goerli_proxy: string = '0x9aCc39d15e3f168c111a1D4F80271a9E526c9a9F';
export const supertoken_factory_arbitrum_goerli_proxy: string = '0x9aCc39d15e3f168c111a1D4F80271a9E526c9a9F';
export const supertoken_factory_avalanche_fuji_proxy: string = '0xA25dbEa94C5824892006b30a629213E7Bf238624';

export const contractMap: { [key: number]: string } = {
  1: supertoken_factory_mainnet_proxy,
  10: supertoken_factory_arbitrum_proxy,
  137: supertoken_factory_polygon_proxy,
  42161: supertoken_factory_arbitrum_proxy,
}
