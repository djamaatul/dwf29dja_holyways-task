import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import { loginContext } from './contexts/LoginProvider';
import { setAuthToken } from './config/api';
import { API } from './config/api';

const App = () => {
	const [state, dispatch] = useContext(loginContext);
	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
	}, []);

	useEffect(async () => {
		if (localStorage.token) {
			try {
				const response = await API.get('/check-auth');

				if (response.status === 401) {
					localStorage.removeItem('token');
					return dispatch({
						type: 'RELOGIN_FAILED',
					});
				}
				localStorage.removeItem('token');
				dispatch({
					type: 'RELOGIN_SUCCESS',
					payload: response.data,
				});
			} catch (error) {
				localStorage.removeItem('token');
			}
		} else {
			return dispatch({
				type: 'RELOGIN_FAILED',
			});
		}
	}, []);

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default App;
