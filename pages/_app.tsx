import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout';
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { mainnet, polygon, optimism, arbitrum, gnosis, avalanche, bsc, arbitrumGoerli, goerli, polygonMumbai, optimismGoerli, avalancheFuji } from "wagmi/chains";

const alchemyId = process.env.ALCHEMY_ID;

const chains = [mainnet, polygon, optimism, arbitrum, gnosis, avalanche, bsc, arbitrumGoerli, goerli, polygonMumbai, optimismGoerli, avalancheFuji];

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

