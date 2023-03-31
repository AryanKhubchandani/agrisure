import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Form from "./Components/Form/Form";
import Account from "./Components/Account/Account";
import Package from "./Components/Package/Package";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/signup" element={<Signup />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/form" element={<Form />} exact />
          <Route path="/account" element={<Account />} exact />
          <Route path="/package" element={<Package />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
