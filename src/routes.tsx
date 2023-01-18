import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>Some stuff here </p>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
