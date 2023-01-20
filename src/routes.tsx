import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
