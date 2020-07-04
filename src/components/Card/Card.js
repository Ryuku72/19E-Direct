import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card border-green-400 border-2 m-2 ">
      <div className="content p-4">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Department:</strong> {props.department}
          </li>
          <li>
            <strong>Role:</strong> {props.role}
          </li>
          <li>
            <strong>Manager:</strong> {props.manager}
          </li>
          <li>
            <strong>Salary:</strong> ${props.salary}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        
        </ul>
      </div>
      <div className="flex justify-end mx-2 mb-1">
      <button onClick={() => props.handleRemove(props.name)} className="text-red-700 text-xl m-1 border-red-600 border-2 w-10 flex justify-center ">
      &times;</button>
      </div>
    </div>
  );
}

export default Card;