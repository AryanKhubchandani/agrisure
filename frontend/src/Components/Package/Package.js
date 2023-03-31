import react from "react";
import Card from "./Card/Card";

import "./Package.css";

const Package = () => {
  const hasPackage = false;

  const buyPackage = () => {
    console.log("Buy Package");
  };

  //   get values from form and send it to backend
  const claimPackage = () => {
    // take a value from form
    const name = document.querySelector(".claim-name").value;
    const date = document.querySelector(".claim-date").value;
    const time = document.querySelector(".claim-time").value;
    const incident = document.querySelector(".claim-incident").value;
    const damage = document.querySelector(".claim-damage").value;
    // const image = document.querySelector(".claim-image");
    // const description = document.querySelector(".claim-description");

    console.log(name, date, time, incident, damage);
  };

  const validUntil = () => {
    return "31/12/2023";
  };

  return (
    <div className="main-package-container">
      {hasPackage ? (
        <div className="package-container">
          <div className="package-title">Insurance Package</div>
          <div className="packages">
            <Card
              tier="Bronze"
              price="Rs. 10000"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam"
              image=""
              link={buyPackage}
            />
            <Card
              tier="Silver"
              price="Rs. 20000"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam"
              image=""
              link={buyPackage}
            />
            <Card
              tier="Gold"
              price="Rs. 30000"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam"
              image=""
              link={buyPackage}
            />
            <Card
              tier="Platinum"
              price="Rs. 40000"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam"
              image=""
              link={buyPackage}
            />
          </div>
          {/* <div className="package-tier">
          <div className="package-tier-title">Bronze</div>
          <div className="package-tier-price">Rs. 10000</div>
          <div className="package-tier-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquam
          </div>
          <div className="package-tier-btn">
            <button className="package-tier-btn-buy">Buy</button>
          </div>
        </div> */}
        </div>
      ) : (
        <div className="claim-container">
          {/* Validity of insurance */}
          <div className="vd-title">Validity</div>
          <div className="vd-container">
            <div className="vd-body-title">Valid until: {validUntil()}</div>
          </div>
          {/* Claim form */}
          <div className="claim-title">Claim</div>
          <div className="claim-form">
            <div className="claim-form-title">Claim Form</div>
            <div className="claim-form-input">
              <div className="claim-form-input-label">Name</div>
              <input
                type="text"
                className="claim-form-input-field claim-name"
              />
            </div>
            <div className="claim-form-input">
              <div className="claim-form-input-label">
                When did the incident occur?
              </div>
              <input
                type="date"
                className="claim-form-input-field"
                id="claim-date"
              />
            </div>
            <div className="claim-form-input">
              <div className="claim-form-input-label">
                What time did the incident occur?
              </div>
              <input
                type="time"
                className="claim-form-input-field"
                id="claim-time"
              />
            </div>
            <div className="claim-form-input">
              <div className="claim-form-input-label">
                How did the incident occur?
              </div>
              {/* input of selecting one option from a dropdown menu */}
              <select className="claim-form-input-field">
                <option value="option1">Flood</option>
                <option value="option2">Heavy Rainfall</option>
                <option value="option3">Drought</option>
                {/* <option value="option4">Option 4</option> */}
              </select>
            </div>
            <div className="claim-form-input">
              <div className="claim-form-input-label">
                What is the estimated crop damage?
              </div>
              {/* Slider from 0% to 100% along with percentage*/}
              <div className="claim-form-input-field">
                <input
                  type="range"
                  min="0"
                  max="100"
                  name="slider"
                  id="claim-damage"
                />
                <div className="claim-form-input-field-percentage">
                  slider.value
                </div>
              </div>
            </div>
            <div className="claim-form-input">
              <div className="claim-form-input-label">
                Upload a picture of the damage
              </div>
              <input type="file" className="claim-form-input-field" />
            </div>
            <div className="claim-form-input"></div>
          </div>
          <div className="claim-btn">
            <button className="claim-btn-submit" onClick={claimPackage}>
              Claim
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Package;
