import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import user from '../assets/icon/user.svg';
import fund from '../assets/icon/fund.svg';
import logout from '../assets/icon/logout.svg';

import { loginContext } from '../contexts/LoginProvider';

function DropDown(props) {
	const { setIsLogin, setUserData } = useContext(loginContext);
	return (
		<div style={{ display: props.show ? 'inline-block' : 'none' }} className='dropdown '>
			<ul>
				<li>
					<Link to='/profile'>
						<img width='30px' height='30px' src={user} alt='' /> Profile
					</Link>
				</li>
				<li>
					<Link to='/myfund'>
						<img width='30px' height='30px' src={fund} alt='' /> Raise Fund
					</Link>
				</li>
			</ul>
			<hr />
			<ul>
				<li>
					<Link
						to='/'
						onClick={() => {
							setIsLogin(false);
							setUserData({});
						}}
					>
						<img width='30px' height='30px' src={logout} alt='' /> Logout
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default DropDown;
