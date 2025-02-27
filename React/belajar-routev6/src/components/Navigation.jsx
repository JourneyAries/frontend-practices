// import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<ul>
				<li>
					<Link
						to='/'
						reloadDocument>
						Home
					</Link>
				</li>
				<li>
					<NavLink
						to='/cars'
						className={({ isActive }) => {
							return isActive ? 'active' : '';
						}}>
						Cars
					</NavLink>
				</li>
				<li>
					<Link
						to='/contact'
						replace>
						Contact
					</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</>
	);
};

export default Navigation;
