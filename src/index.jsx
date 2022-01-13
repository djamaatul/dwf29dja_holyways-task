import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-bootstrap.scss';
import './index.css';

import ShowProvider from './contexts/ShowProvider';
import LoginProvider from './contexts/LoginProvider';
import LoadingProvider from './contexts/LoadingProvider';

import App from './App';
import Dashboard from './pages/Dashboard';
import Detailfund from './pages/Detailfund';
import DetailDonate from './pages/DetailDonate';
import Formfund from './pages/Formfund';
import Myfund from './pages/Myfund';
import Profile from './pages/Profile';

ReactDOM.render(
	<React.StrictMode>
		<LoginProvider>
			<ShowProvider>
				<LoadingProvider>
					<Router>
						<Routes>
							<Route path='/' element={<App />}>
								<Route index element={<Dashboard />} />
								<Route path='profile' element={<Profile />} />
								<Route path='myfund' element={<Myfund />} />
								<Route path='detailfund'>
									<Route path=':id' element={<Detailfund />} />
								</Route>
								<Route path='detaildonate'>
									<Route path=':id' element={<DetailDonate />} />
								</Route>
								<Route path='makefund' element={<Formfund />} />
							</Route>
							{/* <Route
								path='*'
								element={
									<div
										style={{
											backgroundColor: 'white',
											height: '100vh',
											width: '100vw',
											padding: '20px',
										}}
									>
										<div
											style={{
												padding: '20px',
												border: `1px solid #D0D0D0`,
												boxShadow: `0 0 8px #D0D0D0`,
											}}
											id='container'
										>
											<h1>404 Page Not Found</h1>
											<p>The page you requested was not found.</p>{' '}
										</div>
									</div>
								}
							/> */}
						</Routes>
					</Router>
				</LoadingProvider>
			</ShowProvider>
		</LoginProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
