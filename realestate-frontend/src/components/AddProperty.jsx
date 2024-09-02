import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddProperty = () => {
	const [property, setProperty] = useState({
		title: '',
		description: '',
		price: '',
		image: '',
	});
	const navigate = useNavigate(); // Initialize useNavigate

	const handleChange = (e) => {
		const { name, value } = e.target;
		setProperty({ ...property, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:8080/api/properties', property)
			.then((response) => {
				alert('Property added successfully');
				navigate('/'); // Redirect to home page
			})
			.catch((error) => console.error('Error adding property', error));
	};

	return (
		<div className="container">
			<h2>Add New Property</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
						className="form-control"
						name="title"
						value={property.title}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<textarea
						className="form-control"
						name="description"
						value={property.description}
						onChange={handleChange}
						required
					></textarea>
				</div>
				<div className="form-group">
					<label>Price</label>
					<input
						type="text"
						className="form-control"
						name="price"
						value={property.price}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<label>Image URL</label>
					<input
						type="text"
						className="form-control"
						name="image"
						value={property.image}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Add Property
				</button>
			</form>
		</div>
	);
};

export default AddProperty;
