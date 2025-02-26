import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/home";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
