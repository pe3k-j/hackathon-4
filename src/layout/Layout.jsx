import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <Header />
      <div className="layout_content">
        <Outlet />
      </div>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
};
