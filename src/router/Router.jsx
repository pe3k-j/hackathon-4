import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { Layout } from "../layout/Layout";
import { useContext } from "react";
import Context from "../context/Context";
import { Author } from "../components/Author";
import { Image } from "../components/Image";

export const Routers = () => {
  const { state } = useContext(Context);

  return (
    <div className={state.theme === "light" ? "container_light" : undefined}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/author/:id" element={<Author />} />
          <Route path="/image/:id" element={<Image />} />
          <Route path="*" element="404 page not found" />
        </Route>
      </Routes>
    </div>
  );
};
