import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import {
  mainnet,
  polygon,
  base,
  optimism,
  arbitrum,
  gnosis,
  avalanche,
  bsc,
  arbitrumGoerli,
  goerli,
  polygonMumbai,
  optimismGoerli,
  avalancheFuji,
} from "wagmi/chains";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";
import { config } from "../utils/config";


const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>
            <Layout Component={<Component {...pageProps} />} />
          </ConnectKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
