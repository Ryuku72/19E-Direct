import React, { useState } from "react";
import List from "../components/List/List";
import Data from "../company.json";

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

// array is sorted by department, in ascending order by default
//console.log(Data.sort(compareValues('department')));

// array is sorted by band in descending order
//console.log(Data.sort(compareValues('roles', 'desc')));

// array is sorted by name in ascending order
//console.log(Data.sort(compareValues('name')));

// array is sorted by date if birth in descending order
//console.log(Data.sort(compareValues('salary', 'desc')));

const employee = Data.sort(compareValues('name')).map(result => {
  return {
    name: result.name,
    department: result.department,
    role: result.role,
    manager: result.manager,
    salary: numberWithCommas(result.salary),
    email: result.email
  }
});

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