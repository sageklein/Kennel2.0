import ApplicationViews from "../ApplicationViews";
import React from "react";

const EmployeeCard = (props) => {
	return (
		<div className="card">
			<div className="card-content">
				{/* <picture>

				</picture> */}
				<h3>
					Name:{" "}
					<span className="card-employeename">{props.employee.name}</span>
				</h3>
				<p>Employee: {props.employee}</p>
			</div>
		</div>
	);
};
export default EmployeeCard;
