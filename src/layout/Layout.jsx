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
      <footer
        style={{ width: "100%", backgroundColor: "darkgrey", height: "45px" }}
      >
        <div style={{ textAlign: "center" }}>&copy; non-existant footer</div>
      </footer>
    </div>
  );
};
