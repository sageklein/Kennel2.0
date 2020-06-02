import React, { useState, useEffect } from "react";
//import the components we will need
import OwnerCard from "../owner/OwnerCard";
import AnimalManager from "../modules/AnimalManager";

const OwnerList = () => {
	// The initial state is an empty array
	const [owners, setOwners] = useState([]);

	const getOwners = () => {
		// After the data comes back from the API, we
		//  use the setEmployees function to update state
		return AnimalManager.getAll().then((ownersFromAPI) => {
			setOwners(ownersFromAPI);
		});
	};

	// got the employees from the API on the component's first render
	useEffect(() => {
		getOwners();
	}, []);

	// Finally we use map() to "loop over" the animals array to show a list of owner cards
	return (
		<div className="container-cards">
			{owners.map((owner) => (
				<OwnerCard
					key={owner.id}
					owner={owner}
				/>
			))}
		</div>
	);
};
export default OwnerList;
