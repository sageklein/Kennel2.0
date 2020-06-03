import React from "react";
import { Link } from "react-router-dom";
import "./Animal.css";


const AnimalCard = (props) => {
	return (
		<div className="card">
			<div className="card-content">
				<picture>
					<img
						src={
							props.animal.picture
								? props.animal.picture
								: require("./dog.jpg")
						}
						alt="My Dog"
						className="pictoreDog"
					/>
				</picture>
				<h3>
					Name:{" "}
					<span className="card-petname">{props.animal.name}</span>
				</h3>
				<p>Breed: {props.animal.breed}</p>
			</div>
			<div>
				<h4>
					Caretaker: <span>{props.animal.employee.name}</span>{" "}
				</h4>
			</div>
			<button
				type="button"
				onClick={() => {
					props.delete(props.animal.id);
				}}
			>
				Send Home
			</button>
			<Link to={`/animals/${props.animal.id}`}>
				<button>Details</button>
			</Link>
			<button
				type="button"
				onClick={() => {
					props.history.push(`/animals/edit/${props.animal.id}`);
				}}
			>
				Edit
			</button>
		</div>
	);
};
export default AnimalCard;
