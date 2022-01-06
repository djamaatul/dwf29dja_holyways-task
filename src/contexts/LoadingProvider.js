import React, { createContext, useState } from 'react';

export const loadingContext = createContext();

function LoadingProvider(props) {
	const [progress, setProgress] = useState(10);

	return <loadingContext.Provider value={{ progress, setProgress }}>{props.children}</loadingContext.Provider>;
}

export default LoadingProvider;
