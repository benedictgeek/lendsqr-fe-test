import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import Users from "./pages/users/users";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
