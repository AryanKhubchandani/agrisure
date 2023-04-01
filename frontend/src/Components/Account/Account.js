import react from "react";
import Razorpay from "./razorpay";

import "./Account.css";

import { connect } from "react-redux";
import { useState } from "react";

import user from "../../assets/images/user.png";

const Account = ({ account, contract }) => {
  const [check, setCheck] = useState(false);
  // get coins in account
  const [data, setData] = useState();
  let d = 0;
  const getCoins = async () => {
    setData(await contract.methods.balanceOf(account).call());
    console.log(data);
    d = data;
    return data;
  };

  const buyAGS = async () => {
    const amount = 10000; //input from frontend
    const data = await contract.methods.buyAGS(amount).send({ from: account });
    console.log(data);
    setCheck(true);
  };

  return (
    <div className="account-container">
      <div className="account-title">ACCOUNT</div>
      <div className="account-section">
        <div className="username-section">
          <div className="account-image">
            <img className="w-14 h-14" src={user}></img>
          </div>
          <div className="account-username">Aryan</div>
        </div>
        <div className="account-balance">
          <div className="account-balance-title">Total Balance</div>
          <div className="account-balance-amount">{data} AGC</div>
          <button className="get-balance" onClick={getCoins}>
            {" "}
            Get Balance
          </button>
        </div>
        <div className="buy-withdraw">
          <div className="flex-row">
            <button className="add-btn" onClick={buyAGS}>
              Buy AGC
            </button>
            <input type="text"></input>
          </div>
          {/* <Razorpay /> */}
          <button className="withdraw-btn">Withdraw</button>
        </div>
      </div>

      <div className="txn-history">
        <div className="txn-history-title">Transaction History</div>
        <div className="txn-history-table">
          <div className="txn-history-table-header">
            <div className="txn-history-table-header-amount">Amount</div>
            <div className="txn-history-table-header-date">Date</div>
            <div className="txn-history-table-header-status">Status</div>
          </div>
          {check == true ? (
            <div className="txn-history-table-body">
              <div className="txn-history-table-body-row">
                <div className="txn-history-table-body-row-amount">10000</div>
                <div className="txn-history-table-body-row-date">
                  &nbsp;&nbsp;&nbsp;&nbsp;1/4/2022
                </div>
                <div className="txn-history-table-body-row-status">
                  Buy&nbsp;&nbsp;&nbsp;
                </div>
              </div>
            </div>
          ) : null}
        </div>
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

export default connect(mapStateToProps)(Account);
