import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/dashboard/dashboard";
import Login from "./screens/login/login";
import Users from "./screens/users/users";

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
