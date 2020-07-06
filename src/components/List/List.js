import React from "react";


function List(props) {
  return (
      <div>
          <ul className="content p-1 capitalize text-lg">
         <li className="border-b-2 mt-1 mb-1">
          {props.children}
          <p><strong>Manager:</strong> {props.manager}</p>
          <p><strong>Employees:</strong> {props.employees}</p>
          <p><strong>Average Salary:</strong> ${props.salary}</p>
        </li>
        </ul>
      </div>
  )
}

export default List