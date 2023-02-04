import WalletButton from "@/components/WalletButton";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useState, useCallback } from "react";

import styles from "./index.module.css";

export default function IndexPage() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number>();

  const fetchUserBalance = useCallback(async () => {
    if (wallet?.publicKey && connection) {
      const SOL_DECIMALS = 9;
      const data = await connection.getBalance(wallet.publicKey);
      setBalance(data / 10 ** SOL_DECIMALS);
    }
  }, [wallet, connection]);

  return (
    <div className={styles.container}>
      <h2>Example</h2>
      <div>Balance: {balance}</div>
      <div className={styles.sideBySide}>
        <button onClick={fetchUserBalance}>Update</button>
        <WalletButton />
      </div>
    </div>
  );
}
