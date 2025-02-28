import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/Home";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Profiles from "./pages/Profiles";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profiles />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
