import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import { Layout } from "../layout/Layout";
import { useContext } from "react";
import Context from "../context/Context";
import { Author } from "../components/Author";
import { Image } from "../components/Image";
import { About } from "../components/About";

export const Router = () => {
	const { state } = useContext(Context);

	return (
		<div className={state.theme === "dark" ? "theme_dark" : undefined}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/author/:id" element={<Author />} />
					<Route path="/image/:id" element={<Image />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element="404 page not found" />
				</Route>
			</Routes>
		</div>
	);
};
