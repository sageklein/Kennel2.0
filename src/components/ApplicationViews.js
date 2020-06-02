import { Route } from "react-router-dom";
import React from "react";
import Home from "../home/Home";
import Login from "./auth/Login"
import AnimalList from "./animal/AnimalList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import LocationList from "./location/LocationList";

const ApplicationViews = () => {
	return (
		<React.Fragment>
			<Route
				exact
				path="/"
				render={(props) => {
					return <Home />;
				}}
			/>
			<Route
				path="/animals"
				render={(props) => {
					return <AnimalList />;
				}}
			/>
			<Route
				path="/locations"
				render={(props) => {
					return <LocationList />;
				}}
			/>

			<Route
				path="/employees"
				render={(props) => {
					return <EmployeeList />;
				}}
			/>

			<Route
				path="/owners"
				render={(props) => {
					return <OwnerList />;
				}}
			/>

			 <Route path="/login" 
			 component={Login} />

		</React.Fragment>
	);
};

export default ApplicationViews;
