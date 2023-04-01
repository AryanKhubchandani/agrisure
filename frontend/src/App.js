import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landing/Landing";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Form from "./Components/Form/Form";
import Account from "./Components/Account/Account";
import Package from "./Components/Package/Package";

import { Provider } from "react-redux";
import store from "./Components/Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="mb-24" />
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/signup" element={<Signup />} exact />
            {/* <Route path="/login" element={<Login />} exact /> */}
            <Route path="/form" element={<Form />} exact />
            <Route path="/account" element={<Account />} exact />
            <Route path="/package" element={<Package />} exact />
            {/* <Route path="/profile" element={<Profile />} exact /> */}
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
