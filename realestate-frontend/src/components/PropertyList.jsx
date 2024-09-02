import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PropertyList = () => {
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/properties')
			.then((response) => setProperties(response.data))
			.catch((error) => console.error('Error fetching properties', error));
	}, []);

	return (
		<div className="container">
			<h2>Property Listings</h2>
			<div className="row">
				{properties.map((property) => (
					<div className="col-md-4" key={property.property_id}>
						<div className="card mb-4">
							<img
								className="card-img-top"
								src={property.image}
								alt={property.title}
							/>
							<div className="card-body">
								<h5 className="card-title">{property.title}</h5>
								<p className="card-text">{property.description}</p>
								<Link
									to={`/property/${property.property_id}`}
									className="btn btn-primary"
								>
									View Details
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PropertyList;
