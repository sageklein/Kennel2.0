import React, { useState, useEffect } from "react";
import LocationManager from "../modules/LocationManager";

const LocationDetail = (props) => {
	const [location, setLocation] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	// delete function
	const deleteLocation = (id) => {
		setIsLoading(true);
		LocationManager.delete(id).then(props.history.push("/locations"));
	};

	useEffect(() => {
		LocationManager.get(props.locationId).then((data) => {
			setLocation(data);
		});
		setIsLoading(false);
	}, [props.locationId]);

	return (
		<div className="card">
			<div className="card-content">
				<h3>
					Name:{" "}
					<span>
						{location.name}
					</span>
				</h3>
				<p>Address: {location.address}</p>
				<button
					disabled={isLoading}
					type="button"
					onClick={() => {
						deleteLocation(location.id);
					}}
				>
					Close
				</button>
				{console.log(location.name, location.id, location)}
			</div>
		</div>
	);
};

export default LocationDetail;
