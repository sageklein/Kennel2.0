import ApplicationViews from "../ApplicationViews";
import React from "react";

const OwnerCard = (props) => {
	return (
		<div className="card">
			<div className="card-content">
				{/* <picture>
					<img src={require("./dog.svg")} alt="My Dog" />
				</picture> */}
				<h3>
					Name:{" "}
					<span className="card-ownername">{props.owner.name}</span>
				</h3>
				<p>Breed: {props.owner.breed}</p>
			</div>
		</div>
	);
};
export default OwnerCard;
