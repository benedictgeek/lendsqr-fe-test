import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/login/login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
