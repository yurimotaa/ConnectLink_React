import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import DashBoard from "../pages/dashBoard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  );
};
