import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function WalletButton() {
  const wallet = useWallet();
  const walletModal = useWalletModal();

  if (wallet?.connected) {
    return <button onClick={wallet?.disconnect}>Disconnect</button>;
  }

  return <button onClick={() => walletModal.setVisible(true)}>Connect</button>;
}
