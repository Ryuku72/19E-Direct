import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card border-blue-900 border-2 m-2 rounded-lg">
      <div className="content p-4 capitalize">
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
            <strong>Email:</strong><span className="lowercase"> {props.email}</span>
          </li>
        
        </ul>
      </div>
      <div className="flex justify-end mx-2 mb-1">
        <button onClick={() => props.onHandleRemove(props.name)} className="text-red-700 text-xl m-1 w-10 flex justify-center ">
      <i className="fas fa-trash-alt"></i></button>
      </div>
    </div>
  );
}

export default Card;