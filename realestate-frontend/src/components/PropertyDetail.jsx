import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PropertyDetail = () => {
	const [property, setProperty] = useState(null);
	const [liked, setLiked] = useState(false);
	const [likesCount, setLikesCount] = useState(0);
	const { id } = useParams(); // Extract 'id' from URL

	useEffect(() => {
		const fetchProperty = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/properties/${id}`);
				setProperty(response.data);
				setLikesCount(response.data.likes || 0);
				// Optionally check if the user has liked this property
				// setLiked(response.data.likedByCurrentUser);
			} catch (error) {
				console.error('Error fetching property details', error);
			}
		};

		if (id) {
			fetchProperty();
		}
	}, [id]);

	const handleLike = () => {
		axios
			.post(`http://localhost:8080/api/properties/${id}/like`)
			.then(() => {
				setLiked(true);
				setLikesCount((prevCount) => prevCount + 1);
			})
			.catch((error) => console.error('Error liking property', error));
	};

	if (!property) return <div>Loading...</div>;

	return (
		<div className="container">
			<h2>{property.title}</h2>
			<img src={property.image} alt={property.title} className="img-fluid" />
			<p>{property.description}</p>
			<p>
				<strong>Price:</strong> ${property.price}
			</p>
			<div className="like-section">
				<button
					className={`btn ${liked ? 'btn-secondary' : 'btn-primary'}`}
					onClick={handleLike}
					disabled={liked}
				>
					{liked ? 'Liked' : 'Like'}
				</button>
				<p>
					{likesCount} {likesCount === 1 ? 'Like' : 'Likes'}
				</p>
			</div>
		</div>
	);
};

export default PropertyDetail;
