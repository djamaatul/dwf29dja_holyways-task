import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

import { loginContext } from './contexts/LoginProvider';

import { setAuthToken } from './config/api';
import { API } from './config/api';

const App = () => {
	const [state, dispatch] = useContext(loginContext);

	useEffect(async () => {
		if (localStorage.token) {
			try {
				setAuthToken(localStorage.token);
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
					payload: response.data.data,
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
