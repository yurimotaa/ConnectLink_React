import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import DashBoard from "../pages/dashBoard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  );
};
