import react from "react";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-title">Signup Form</div>
      {/* Sign up form for farm insurance */}
      <div className="form-content">
        <div className="form-content-left">
          <div className="form-content-left-title">Farm Details</div>
          <div className="form-content-left-content">
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Farm Name
              </div>
              <div className="form-content-left-content-farm-input">
                <input
                  type="text"
                  className="form-content-left-content-farm-input-field"
                />
              </div>
            </div>
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Farm Address
              </div>
              <div className="form-content-left-content-farm-input">
                <input
                  type="text"
                  className="form-content-left-content-farm-input-field"
                />
              </div>
            </div>
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Farm Area
              </div>
              <div className="form-content-left-content-farm-input">
                <input
                  type="text"
                  className="form-content-left-content-farm-input-field"
                />
              </div>
            </div>
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Farm Type
              </div>
              <div className="form-content-left-content-farm-input">
                <select className="form-content-left-content-farm-input-field">
                  <option value="1">Select</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
            </div>
            <div className="form-content-left-content-farm">
              <div className="form-content-left-content-farm-title">
                Farm Crop
              </div>
              <div className="form-content-left-content-farm-input">
                <select className="form-content-left-content-farm-input-field">
                  <option value="1">Select</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="form-content-right">
          <div className="form-content-right-title">Farm Owner Details</div>

          <div className="form-content-right-content">
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">Name</div>
              <div className="form-content-right-content-farm-input">
                <input
                  type="text"
                  className="form-content-right-content-farm-input-field"
                />
              </div>
            </div>
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">Email</div>
              <div className="form-content-right-content-farm-input">
                <input
                  type="text"
                  className="form-content-right-content-farm-input-field"
                />
              </div>
            </div>
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">Phone</div>
              <div className="form-content-right-content-farm-input">
                <input
                  type="text"
                  className="form-content-right-content-farm-input-field"
                />
              </div>
            </div>
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">
                Address
              </div>
              <div className="form-content-right-content-farm-input">
                <input
                  type="text"
                  className="form-content-right-content-farm-input-field"
                />
              </div>
            </div>
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">State</div>
              <div className="form-content-right-content-farm-input">
                <select className="form-content-right-content-farm-input-field">
                  <option value="1">Select</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
            </div>
            <div className="form-content-right-content-farm">
              <div className="form-content-right-content-farm-title">City</div>
              <div className="form-content-right-content-farm-input">
                <select className="form-content-right-content-farm-input-field">
                  <option value="1">Select</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-footer">
        <div className="form-footer-button">
          <button className="form-footer-button-submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
