import React, { useState } from "react";
import Data from "../company.json";

const departArray = Data.map(result => {
  return result.department
})
const departments = [...new Set(departArray)];

console.log(departments)

function Departments() {
  const initialState = {
    departments: departments,
   }
  
  const [state] = useState(initialState);

  console.log(state.departments)

    return (
        <div className="border-gray-600 border-b-2">
        <h1 className="text-3xl font-mono">{'//'}DEPARTMENTS</h1>
        <p className="font-mono text-right leading-loose text-lg text-blue-600"><span className="text-gray-500">2020</span>{'//'}DIRECTORY</p>
        <ul>
        {state.departments.map(result => (
        <li>
          <h1>{result}</h1>
        </li>
        ))}
      </ul>
      </div>
     
    )
}

export default Departments;