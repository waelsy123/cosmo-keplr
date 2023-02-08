import type { NextPage } from "next";
import { FaucetSender } from "../components/FaucetSender";

const Home: NextPage = () => {
  return (
    <FaucetSender
      faucetAddress="cosmos1mtcu5jdedfts4xygp3qrrnaeq5d5zuz2ddywld"
      rpcUrl="http://127.0.0.1:26657"
    />
  );
};

export default Home;
