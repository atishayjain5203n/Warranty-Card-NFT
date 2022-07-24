import { useContext,useState } from "react";
import { WarrantyCardContext } from "../context/WarrantyCardContext";
import Button from "./Button";

const Welcome = () => {
  const { connectWallet, connectedWallet, totalSupply } =
    useContext(WarrantyCardContext);
  const [res, setRes] = useState(false);
  const getTotalSupply = async() => {
    console.log(totalSupply);
    setRes(totalSupply);
  } 
  return (
    <div>
      <h2 className="text-white">Warranty Card NFT App</h2>
      <p className="text-white">
        Your Only Place to Check your Product Authencticity, warranty expiry and
        get your warranty card.
      </p>
      {!connectedWallet && (
        <Button
          text="Conntect to Wallet"
          className="btn-primary text-white btn-style"
          onClick={connectWallet}
        />
      )}
      {connectedWallet && (
        <p className="text-muted">
          Connected Wallet Address is: {connectedWallet}
          <br />
          <Button
            text="Get Total Supply"
            className="btn-primary text-white btn-style"
            onClick={getTotalSupply}
          />
        </p>
      )}
      {res && <p className="text-white">Total Supply is: {res}</p>}
    </div>
  );
};

export default Welcome;
