import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import './custom-bootstrap.scss';

import App from './App';
import Dashboard from './pages/Dashboard';
import Detailfund from './pages/Detailfund';
import Formfund from './pages/Formfund';
import Myfund from './pages/Myfund';
import Profile from './pages/Profile';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/' element={<App />}>
					<Route index element={<Dashboard />} />
					<Route path='profile' element={<Profile />} />
					<Route path='myfund' element={<Myfund />} />
					<Route path='detailfund' element={<Detailfund />} />
					<Route path='makefund' element={<Formfund />} />
				</Route>
				<Route path='*' element={<h1 style={{ textAlign: 'center', lineHeight: '100vh' }}>404 NULL</h1>} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
