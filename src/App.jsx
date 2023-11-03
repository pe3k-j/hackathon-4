import { BrowserRouter } from "react-router-dom";
import "./style/App.scss";
import { useReducer } from "react";
import reducer from "./store/reducer";
import Context from "./context/Context";

export default function App() {
  const [contextValue, setContextValue] = useReducer(reducer, {
    theme: "light",
  });

  return (
    <BrowserRouter>
      <Context.Provider
        value={{ state: contextValue, dispatch: setContextValue }}
      >
        <>
          <h1>Name of website</h1>
        </>
      </Context.Provider>
    </BrowserRouter>
  );
}
