import { useContext } from "react";
import Context from "../context/Context.js";
import { Navigation } from "../components/Navigation";

export const Header = () => {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({
      type: "theme/set",
      payload: state.theme === "dark" ? "light" : "dark",
    });
  };

  return (
    <>
      <header>
        <h1>Title of Our App</h1>
        <button onClick={handleClick}>
          Dark Mode {state.theme === "dark" ? "ON" : "OFF"}
        </button>
        <Navigation />
      </header>
    </>
  );
};
