import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import UserDetails from "./pages/userDetails/userDetails";
import Users from "./pages/users/users";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
