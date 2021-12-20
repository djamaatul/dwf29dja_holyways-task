import React, { useState, createContext } from "react";

export const loginContext = createContext();
function ShowProvider(props) {
	const [isLogin, setIsLogin] = useState(false);
	const [userData, setUserData] = useState({});
	return (
		<>
			<loginContext.Provider value={{ isLogin, setIsLogin, userData, setUserData }}>
				{props.children}
			</loginContext.Provider>
		</>
	);
}

export default ShowProvider;
