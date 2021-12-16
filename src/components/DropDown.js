import React from 'react'
import user from '../assets/icon/user.svg'
import fund from '../assets/icon/fund.svg'
import logout from '../assets/icon/logout.svg'
import './styles.css'

function DropDown() {
	return (
		<div id="dpdown" className='dropdown '>
			<ul>
				<li><a href=""><img  width="30px" height="30px" src={user} alt="" /> Profile</a></li>
				<li><a href=""><img width="30px" height="30px" src={fund} alt="" />Raise Fund</a></li>
			</ul>
			<hr />
			<ul>
				<li><a href=""><img width="30px" height="30px" src={logout} alt="" />Logout</a></li>
			</ul>
		</div>
	)
}

export default DropDown