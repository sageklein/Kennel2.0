// import ApplicationViews from "../ApplicationViews";
import { Link } from "react-router-dom";
import React from "react";

const EmployeeCard = (props) => {
	return (
		<div className="card">
			<div className="card-content">
				<picture>
					{/* <img src={require("./dog.svg")} alt="My Dog" /> */}
				</picture>
				<h3>
					Name:{" "}
					<span className="card-petname">{props.employee.name}</span>
				</h3>
				<p>Breed: {props.employee.breed}</p>
				<button
					type="button"
					onClick={() => props.deleteAnimal(props.employee.id)}
				>
					Discharge
				</button>
				<Link to={`/employees/${props.employee.id}`}>
					<button>Details</button>
				</Link>
			</div>
		</div>
	);
};

export default EmployeeCard;