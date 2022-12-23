import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout';
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Deploy Supertoken",
    alchemyId,
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

