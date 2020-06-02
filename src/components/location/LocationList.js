import React, { useState, useEffect } from "react";
//import the components we will need
import LocationCard from "../location/LocationCard";
import AnimalManager from "../modules/AnimalManager";

const LocationList = () => {
	// The initial state is an empty array
	const [locations, setLocation] = useState([]);

	const getLocations = () => {
		// After the data comes back from the API, we
		//  use the setEmployees function to update state
		return AnimalManager.getAll().then((locationsFromAPI) => {
			setLocation(locationsFromAPI);
		});
	};

	// got the employees from the API on the component's first render
	useEffect(() => {
		getLocations();
	}, []);

	// Finally we use map() to "loop over" the animals array to show a list of location cards
	return (
		<div className="container-cards">
			{locations.map((location) => (
				<LocationCard key={location.id} location={location} />
			))}
		</div>
	);
};
export default LocationList;
