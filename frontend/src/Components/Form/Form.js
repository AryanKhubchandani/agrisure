import react from "react";
import { Link } from "react-router-dom";

import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-title">
        <h1>
          <b>SIGNUP FORM</b>{" "}
        </h1>
      </div>
      <br />
      <div className="font-bold">
        Sign up for Agrisure-farm insurance from here:
      </div>

      <div className="form-content">
        <div className="form-content-left">
          <h2 align="center">
            <b>FARMER PERSONAL DETAILS</b>
          </h2>

          <div className="form-content-left-title">Aadhar Number</div>
          <div className="form-content-left-content">
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-input">
                <input
                  type="text"
                  className="form-content-left-content-farm-input-field"
                />
              </div>
            </div>
            <br />
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Farmer Name
              </div>
              <div className="form-content-left-content-farm-input">
                <input
                  type="text"
                  className="form-content-left-content-farm-input-field"
                />
              </div>
            </div>
            <br />
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                District
              </div>
              <div className="form-content-left-content-farm-input">
                <input
                  type="text"
                  className="form-content-left-content-farm-input-field"
                />
              </div>
            </div>
            <br />
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Farmer Category
              </div>
              <div className="form-content-left-content-farm-input">
                <select className="form-content-left-content-farm-input-field">
                  <option value="1">Select</option>
                  <option value="2">Small</option>
                  <option value="3">Marginal</option>
                  <option value="4">Big</option>
                </select>
              </div>
            </div>
            <br />
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Bank Account Number
              </div>
              <div className="form-content-left-content-farm-input">
                <input
                  type="text"
                  className="form-content-left-content-farm-input-field"
                />
              </div>
              <br />
              <div className="form-content-left-content-farm">
                <div className="form-content-left-content-farm-title">
                  Village/Ward of Farmer
                </div>
                <div className="form-content-left-content-farm-input">
                  <input
                    type="text"
                    className="form-content-left-content-farm-input-field"
                  />
                </div>
                <br />
                <div className="form-content-left-content-farm">
                  <div className="form-content-left-content-farm-title">
                    Mobile Number
                  </div>
                  <div className="form-content-left-content-farm-input">
                    <input
                      type="text"
                      className="form-content-left-content-farm-input-field"
                    />
                  </div>
                  <br />
                  <div className="form-content-left-content-farm">
                    <div className="form-content-left-content-farm-title">
                      Community Category
                    </div>
                    <br />
                    <div className="form-content-left-content-farm-input">
                      <select className="form-content-left-content-farm-input-field">
                        <option value="1">Select</option>
                        <option value="2">SC/ST</option>
                        <option value="3">OBC</option>
                        <option value="4">General</option>
                      </select>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-content-right">
          <h2 className="font-bold">
            LAND HOLDING PARTICULARS(AS PER PASSBOOK)
          </h2>
          <div className="form-content-right-title">District</div>
          <input
            type="text"
            className="form-content-right-content-farm-input-field"
          />
          <br />

          <div className="form-content-right-content">
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">
                Mandal
              </div>
              <div className="form-content-right-content-farm-input">
                <input
                  type="text"
                  className="form-content-right-content-farm-input-field"
                />
              </div>
            </div>
            <br />
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">
                Survey Number
              </div>
              <div className="form-content-right-content-farm-input">
                <input
                  type="text"
                  className="form-content-right-content-farm-input-field"
                />
              </div>
            </div>
            <br />
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">
                Extent
              </div>
              <div className="form-content-right-content-farm-input">
                <input
                  type="text"
                  className="form-content-right-content-farm-input-field"
                />
                <select className="form-content-left-content-farm-input-field">
                  <option value="1">Acres</option>
                  <option value="2">Cents</option>
                  <option value="3">Guntas</option>
                </select>
              </div>
            </div>
            <br />
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Name of Existing Insurance on Farm,if any:
              </div>
              <div className="form-content-left-content-farm-input">
                <input
                  type="text"
                  className="form-content-left-content-farm-input-field"
                />
              </div>
            </div>
            <br />
            <h2 className="font-bold" align="center">
              CROP DETAILS
            </h2>
            <div className="form-content-left-title">Name of the Crop:</div>
            <div className="form-content-left-content">
              <div className="form-content-left-content-farm">
                <div className="form-content-left-content-farm-title"></div>
                <div className="form-content-left-content-farm-input">
                  <input
                    type="text"
                    className="form-content-left-content-farm-input-field"
                  />
                </div>
              </div>
              <br />
              <div className="form-content-left-content-farm">
                <div className="form-content-left-content-farm-title">
                  Area grown(in acres)
                </div>
                <div className="form-content-left-content-farm-input">
                  <input
                    type="text"
                    className="form-content-left-content-farm-input-field"
                  />
                </div>
              </div>
              <br />
              <div className="form-content-left-content-farm">
                <div className="form-content-left-content-farm-title">
                  Time Period of Sowing
                </div>
                <div className="form-content-left-content-farm-input">
                  <input
                    type="text"
                    className="form-content-left-content-farm-input-field"
                  />
                </div>
              </div>
              <br />
              <div className="form-content-left-content-farm">
                <div className="form-content-left-content-farm-title">
                  Type of Crop
                </div>
                <div className="form-content-left-content-farm-input">
                  <select className="form-content-left-content-farm-input-field">
                    <option value="1">Select</option>
                    <option value="2">Rabi</option>
                    <option value="3">Kharif</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="form-footer">
        <div className="form-footer-button">
          <Link to="/account">
            <button className="form-footer-button-submit">Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
