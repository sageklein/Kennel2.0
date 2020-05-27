import ApplicationViews from "../ApplicationViews";
import React from "react";

const LocationCard = (props) => {
	return (
		<div className="card">
			<div className="card-content">
				{/* <picture>
					<img src={require("./dog.svg")} alt="My Dog" />
				</picture> */}
				<h3>
					Name:{" "}
					<span className="card-locationname">{props.location.name}</span>
				</h3>
				<p>Location: {props.location}</p>
			</div>
		</div>
	);
};
export default LocationCard;
