import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import ShowProvider from './contexts/ShowProvider';
import LoginProvider from './contexts/LoginProvider';

const App = () => {
	return (
		<>
			<LoginProvider>
				<ShowProvider>
					<Header />
					<Outlet />
				</ShowProvider>
			</LoginProvider>
		</>
	);
};

export default App;
