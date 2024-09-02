import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
				<a className="navbar-brand" href="#">
					Real Estate
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
                        <br />
						<li className="nav-item">
							<Link className="nav-link" to="/add-property">
								Add Property
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;
