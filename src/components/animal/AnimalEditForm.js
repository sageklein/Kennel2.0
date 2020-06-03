import React, { useState, useEffect } from "react";

import AnimalManager from "../modules/AnimalManager";
import EmployeeManager from "../modules/EmployeeManager";

const AnimalEditForm = (props) => {
	let [animal, setAnimal] = useState({
		name: "",
		animalId: "",
		breed: "",
		employeeId: "",
	});
	let [isLoading, setIsLoading] = useState(false);
	let [employees, setEmployees] = useState([]);

	const getAnimal = (id) => {
		return AnimalManager.get(id).then((data) => setAnimal(data));
	};

	const handleFieldChange = (evt) => {
		let stateOfChange = { ...animal };
		stateOfChange[evt.target.id] = evt.target.value;
		setAnimal(stateOfChange);
	};

	const getEmployees = () => {
		return EmployeeManager.get().then((data) => setEmployees(data));
	};

	const upadteAnimal = (evt) => {
		evt.preventDefault();
		console.log(animal);
		if (!animal.name || !animal.breed || !animal.employeeId) {
			window.alert("Please input an animal name and breed");
		} else {
			setIsLoading(true);
			AnimalManager.put(props.animalId, animal).then(() =>
				props.history.push("/animals")
			);
		}
	};

	useEffect(() => {
		getAnimal(props.animalId).then((data) => setIsLoading(false));
	}, [props.animalId]);

	useEffect(() => {
		getEmployees();
	}, []);

	return (
		<>
			<form>
				<fieldset>
					<div className="formgrid">
						<input
							type="text"
							required
							onChange={handleFieldChange}
							id="name"
							placeholder="Animal name"
							value={animal.name}
						/>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							required
							onChange={handleFieldChange}
							id="breed"
							placeholder="Breed"
							value={animal.breed}
						/>
						<label htmlFor="breed">Breed</label>
					</div>
					<div>
						<select id="employeeId" onChange={handleFieldChange}>
							<option>Select carer</option>
							{employees.map((e) => (
								<option key={e.id} value={e.id}>
									{e.name}
								</option>
							))}
						</select>
					</div>
					<div className="alignRight">
						<button
							type="button"
							disabled={isLoading}
							onClick={upadteAnimal}
						>
							Submit
						</button>
					</div>
				</fieldset>
			</form>
		</>
	);
};

export default AnimalEditForm;
