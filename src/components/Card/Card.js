import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="content">
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
      <span onClick={() => props.removeEmployee(props.name)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Card;