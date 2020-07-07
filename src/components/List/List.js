import React from "react";

function List(props) {
  return (
      <div>
          <ul className="content p-1 capitalize text-lg">
         <li className="border-b-2 mt-1 mb-">
          {props.children}
          <p><strong>Manager:</strong> {props.manager}</p>
          <p className="mb-2"><strong>Average Salary:</strong> ${props.salary}</p>
        </li>
        </ul>
      </div>
  )
}

export default List