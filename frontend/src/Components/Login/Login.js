import react from "react";
import Web3 from 'web3';
import { ABI} from "./artifacts"
const Login = () => {

  // function here
  let account;
      let ac;
      async function connectMetamask() {
        if (window.ethereum !== "undefined") {
          //   await window.ethereum.enable()
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          account = accounts[0];
          console.log(account);
          ac = account;
          console.log(typeof account);
          const abi = ABI
          const Address = "0x7AC810c2b7Ef3dE8F2541b3a8e5fa5db85096992";
          window.web3 = await new Web3(window.ethereum);
          window.contract = await new window.web3.eth.Contract(ABI, Address);
          console.log("connected");
        }
        
        return account;
      }
  return (
    <div>
      <div>Login</div>
      <div>
        <div>
          <button onClick={connectMetamask}>CONNECT</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
