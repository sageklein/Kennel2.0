// import ApplicationViews from "../ApplicationViews";
// import { Link } from "react-router-dom";
import React from "react";

const EmployeeCard = (props) => {
return <>

        <div>
            <h3>Name: { props.employee.name }</h3>
            <h5>Postion: { props.employee.position }</h5>
            <button type="button" onClick={() => {props.delete(props.employee.id)}}>Fire Employee</button>
        </div>
    </>
}

export default EmployeeCard;