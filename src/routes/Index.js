import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";

export const AppContext = createContext({
	user: {},
	setUser: () => {},
});

export const useAppContext = () => useContext(AppContext);

const Index = () => {
	const [user, setUser] = useState();
	return (
		<div>
			<AppContext.Provider
				value={{
					user,
					setUser,
				}}>
				<Router>
					<div>
						<Routes>
							<Route exact path='/' element={<Home />} />
						</Routes>
					</div>
				</Router>
			</AppContext.Provider>
		</div>
	);
};

export default Index;
