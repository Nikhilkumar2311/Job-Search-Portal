import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDescription from "./components/Jobs/JobDescription";
import SignUp from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Profiles from "./pages/Profiles";

import Companies from "./components/Admin/Companies";
import CompanyCreate from "./components/Admin/CompanyCreate";
import CompanySetup from "./components/Admin/CompanySetup";
import AdminJobs from "./components/Admin/AdminJobs";
import PostJob from "./components/Admin/PostJob";
import Applicants from "./components/Admin/Applicants";
import JobSetup from "./components/Admin/JobSetup";
import ProtectedRoute from "./components/Admin/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/description/:id" element={<JobDescription />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/companies" element={<Companies />} />
            <Route path="/admin/companies/create" element={<CompanyCreate />} />
            <Route path="/admin/companies/:id" element={<CompanySetup />} />
            <Route path="/admin/jobs" element={<AdminJobs />} />
            <Route path="/admin/jobs/create" element={<PostJob />} />
            <Route path="/admin/jobs/:id" element={<JobSetup />} />
            <Route path="/admin/jobs/:id/applicants" element={<Applicants />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
