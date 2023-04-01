import react from "react";
import Web3 from "web3";
import { ABI } from "./artifacts";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Login.css";

const Login = ({ account, setAccount, contract, setContract }) => {
  // function here
  // how to send this account to

  const [acc, setAcc] = useState("");
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
      const abi = ABI;
      const Address = "0x20615775860Ac35864d1ac8B0EbbcA0eb5Fa47f2";
      window.web3 = await new Web3(window.ethereum);
      window.contract = await new window.web3.eth.Contract(ABI, Address);
      setContract(window.contract);
      console.log("connected");
      setAccount(account);
      setAcc(account);
    }
    return account;
  }

  useEffect(() => {
    if (acc != "") {
      const disable = document.getElementById("btnbtn");
      disable.disabled = true;
      disable.style.opacity = "0.5";
    }
  }, [acc]);

  return (
    <div className="bgbg">
      <div>
        <div>
          <button id="btnbtn" onClick={connectMetamask}>
            CONNECT
          </button>
        </div>
        {acc != "" ? (
          <div className="font-bold">Connected to: {acc}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    account: state.account,
    contract: state.contract,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAccount: (account) =>
      dispatch({ type: "SET_ACCOUNT", payload: account }),
    setContract: (contract) =>
      dispatch({ type: "SET_CONTRACT", payload: contract }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
