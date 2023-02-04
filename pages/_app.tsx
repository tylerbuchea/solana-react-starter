import type { AppProps } from "next/app";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  BraveWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import React from "react";

import "@solana/wallet-adapter-react-ui/styles.css";
import "@/styles/globals.css";

const wallets = [new PhantomWalletAdapter(), new BraveWalletAdapter()];
const endpoint = process.env.NEXT_PUBLIC_RPC_URL!;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
