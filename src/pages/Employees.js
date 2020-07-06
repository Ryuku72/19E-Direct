import React, { useState } from "react";
import List from "../components/List/List";
import Data from "../company.json";

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

const employee = Data.sort(compare).map(result => {
  return {
    name: result.name,
    department: result.department,
    role: result.role,
    manager: result.manager,
    salary: numberWithCommas(result.salary),
    email: result.email
  }
});
console.log(employee)
function Employees() {
  const initialState = {
    employees: employee
  } 
  const [state] = useState(initialState);
    return (
      <div className="mb-2">
        <div className="border-gray-600 border-b-2">
    <h1 className="text-3xl font-mono">{'//'}EMPLOYEES: {employee.length}</h1>
        <p className="font-mono text-right leading-loose text-lg text-blue-600"><span className="text-gray-500">2020</span>{'//'}DIRECTORY</p>
      </div>
      {state.employees.map(result => (
     <List className="mb-2"
     key = {result.name}
     manager= {result.manager}
     salary= {result.salary}
     >
    <h1><strong>Name:</strong> {result.name}</h1>
    <p><strong>Email: </strong>{result.email}</p>
    <p><strong>Department:</strong> {result.department}</p>
    <p><strong>Role: </strong>{result.role}</p>
     </List>
       ))}
       </div>
    )
}

export default Employees;