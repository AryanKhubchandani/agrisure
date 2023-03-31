import react from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  // modal to confirm tier selection, show available balance and payment
  // options, and allow user to confirm or cancel
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-title">Confirm Tier Selection</div>
        <div className="modal-content">
          <div className="modal-content-left">
            <div className="modal-content-left-title">Tier</div>
            <div className="modal-content-left-content">
              <div className="modal-content-left-content-tier">
                <div className="modal-content-left-content-tier-title">
                  Silver Tier
                </div>
                <div className="modal-content-left-content-tier-amount">
                  20000 AGC
                </div>
              </div>
            </div>
          </div>
          <div className="modal-content-right">
            <div className="modal-content-right-title">Balance</div>
            <div className="modal-content-right-content">
              <div className="modal-content-right-content-balance">
                <div className="modal-content-right-content-balance-title">
                  Available Balance
                </div>
                <div className="modal-content-right-content-balance-amount">
                  0.1 BTC
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="modal-footer-btns">
            <Link to="/account">
              <button className="modal-footer-btns-cancel">Cancel</button>
            </Link>
            <Link to="/account">
              <button className="modal-footer-btns-confirm">Confirm</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
