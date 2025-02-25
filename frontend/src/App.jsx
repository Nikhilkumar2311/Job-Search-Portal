import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Jobs from "./pages/Jobs";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/jobs" element={<Jobs />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
