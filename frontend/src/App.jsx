import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Jobs from "./pages/Jobs";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/jobs" element={<Jobs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
