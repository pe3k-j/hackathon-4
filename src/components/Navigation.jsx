import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav>
        <Link
          to="/"
          className={"link" + (location === "/" ? " link--highlighted" : "")}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={
            "link" + (location === "/about" ? " link--highlighted" : "")
          }
        >
          About
        </Link>
      </nav>
    </>
  );
};
