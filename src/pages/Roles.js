import React, { useState } from "react";
import List from "../components/List/List";
import Data from "../company.json";

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const roleArray = Data.map(result => {
  return result.role
})
const roles = [...new Set(roleArray)];

const managerArray = Data.map(result => {
  return {
    role: result.role,
    manager: result.manager
  }
})
function getUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}
const managers = getUniqueListBy(managerArray, 'role').map(result => {
  return result.manager
})

const employeesByrole = Data.reduce((acc, result) => {
  acc[result.role] = acc[result.role] + 1 || 1;
  return acc;
}, {});
const roleNumber = Object.keys(employeesByrole).map(function(key) { 
  // Using obj[key] to retrieve key value 
  return [employeesByrole[key]]; 
}); 
const roleNumberArray = roleNumber.reduce((acc, it)=> [...acc, ...it], [])

const wage = getUniqueListBy(Data, 'role').map(result => {
  return result.salary
})

const rolesArray = []

for (var i = 0; i < roles.length; i++) {
    rolesArray[i] = {
    name: roles[i],
    number: roleNumberArray[i],
    manager: managers[i],
    salary: numberWithCommas(wage[i])
  }
}

// console.log(roles)
// console.log(managers)
// console.log(roleNumberArray)
// console.log(wage)
// console.log(rolesArray)

function Roles() {
  const initialState = {
    role: rolesArray
  } 
  const [state] = useState(initialState);

  return (
    <div className="mb-2">
      <div className="border-gray-600 border-b-2">
      <h1 className="text-3xl font-mono">{"//"}ROLES: {rolesArray.length}</h1>
      <p className="font-mono text-right leading-loose text-lg text-blue-600"><span className="text-gray-500">2020</span>{"//"}DIRECTORY</p>
     </div>
     {state.role.map(result => (
     <List
     key = {result.name}
     manager= {result.manager}
     salary= {result.salary}
     >
    <h1><strong>Role:</strong> {result.name}</h1>
    <p><strong>Positions:</strong> {result.number}</p>
     </List>
       ))}
      </div>
    )
}

export default Roles;