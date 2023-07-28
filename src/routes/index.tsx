import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import DashBoard from "../pages/dashBoard";
import RegisterPage from "../pages/registerPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  );
};
