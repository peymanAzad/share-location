import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

interface RouterProps {}

const Router: React.FC<RouterProps> = ({}) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/create" element={<Create />}></Route>
				<Route path="/edit/:locationId" element={<Edit />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
