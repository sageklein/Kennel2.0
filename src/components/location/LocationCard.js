// import ApplicationViews from "../ApplicationViews";
import { Link } from "react-router-dom";
import React from "react";

const LocationCard = (props) => {
	return (
		<div className="card">
			<div className="card-content">
				<picture>
					{/* <img src={require("./dog.svg")} alt="My Dog" /> */}
				</picture>
				<h3>
					Name:{" "}
					<span className="card-petname">{props.location.name}</span>
				</h3>
				<p>Breed: {props.location}</p>
				<button
					type="button"
					onClick={() => props.deleteAnimal(props.location.id)}
				>
					Discharge
				</button>
				<Link to={`/locations/${props.location.id}`}>
					<button>Details</button>
				</Link>
			</div>
		</div>
	);
};


export default LocationCard;
