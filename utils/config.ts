
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
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
import { createClient } from 'viem';
const alchemyId = process.env.ALCHEMY_ID;

const chains = [
  mainnet,
  polygon,
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
  base,
];

export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains,

    client({ chain }) {
      return createClient({ chain, transport: http() })
    },


    // Required API Keys
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "",


    // Required App Info
    appName: "Your App Name",

    // Optional App Info
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);
