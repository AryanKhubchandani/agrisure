import react from "react";

import "./Account.css";

const Account = () => {
  // get coins in account
  const getCoins = () => {
    return 14;
    // fetch coins from backend
    // set coins in state
  };

  return (
    <div className="account-container">
      <div className="account-title">ACCOUNT</div>
      <div className="account-section">
        <div className="username-section">
          <div className="account-image">
            <img src="https://i.imgur.com/6kzYQ2x.png"></img>
          </div>
          <div className="account-username">Username</div>
        </div>
        <div className="account-balance">
          <div className="account-balance-title">Total Balance</div>
          <div className="account-balance-amount">{getCoins()} AGC</div>
        </div>
        <div className="buy-withdraw">
          <button className="add-btn">Add</button>
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
          <div className="txn-history-table-body">
            <div className="txn-history-table-body-row">
              <div className="txn-history-table-body-row-amount">0</div>
              <div className="txn-history-table-body-row-date">0</div>
              <div className="txn-history-table-body-row-status">0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
