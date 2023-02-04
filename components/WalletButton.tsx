import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useEffect } from "react";

export default function WalletButton() {
  const wallet = useWallet();
  const walletModal = useWalletModal();

  useEffect(() => {
    // @ts-ignore
    console.log(window?.phantom);
  }, []);

  if (wallet?.connected) {
    return <button onClick={wallet?.disconnect}>Disconnect</button>;
  }

  return <button onClick={() => walletModal.setVisible(true)}>Connect</button>;
}
