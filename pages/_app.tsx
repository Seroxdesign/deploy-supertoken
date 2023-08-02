import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout';
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { mainnet, polygon, optimism, arbitrum, gnosis, avalanche, bsc, arbitrumGoerli, goerli, polygonMumbai, optimismGoerli, avalancheFuji } from "wagmi/chains";
import { Chain } from '@wagmi/core'
 
export const base = {
  id: 8453,
  name: "base",
  network: "Base Mainnet",
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://mainnet.base.org'] },
    default: { http: ['https://mainnet.base.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'BaseScan', url: 'https://basescan.org' },
    default: { name: 'BaseScan', url: 'https://basescan.org' },
  },
} as Chain

const alchemyId = process.env.ALCHEMY_ID;

const chains = [mainnet, polygon, optimism, arbitrum, gnosis, avalanche, bsc, arbitrumGoerli, goerli, polygonMumbai, optimismGoerli, avalancheFuji, base];

const client = createClient(
  getDefaultClient({
    appName: "Deploy Supertoken",
    alchemyId,
    chains
  }),
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Layout Component={ <Component {...pageProps} />} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

