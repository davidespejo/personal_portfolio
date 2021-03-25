import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';
import RouteElement from '../../interfaces/route.interface';
import { useLocation } from 'react-router-dom';
import './menu.scss';

export default function Menu() {
	const location = useLocation();
	return (
		<nav className="menu">
			{routes.map((route: RouteElement) => {
				return route.inMenu ? (
					<Link
						to={route.path}
						className={`menu__element ${location.pathname === route.path ? 'menu__element--active' : ''}`}
						key={`menu-element-${route.path}`}
					>
						{route.name}
					</Link>
				) : null;
			})}
		</nav>
	);
}
