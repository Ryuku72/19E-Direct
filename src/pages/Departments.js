import React, { useState } from "react";
import Data from "../company.json";
import List from "../components/List/List";

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const departArray = Data.map(result => {
  return result.department
})
const departments = [...new Set(departArray)];

const managerArray = Data.map(result => {
  return result.manager
})
const managers = [...new Set(managerArray)];

const employeesByDepartment = Data.reduce((acc, result) => {
  acc[result.department] = acc[result.department] + 1 || 1;
  return acc;
}, {});
//console.log(employeesByDepartment)

const employeeNumber = Object.keys(employeesByDepartment).map(function(key) { 
  // Using obj[key] to retrieve key value 
  return [employeesByDepartment[key]]; 
}); 

const employeeNumberArray = employeeNumber.reduce((acc, it)=> [...acc, ...it], [])
//console.log(departments)
//console.log(employeeNumberArray)
//console.log(managers)

const salaryArray = []

const reducer = (accumulator, currentValue) => accumulator + currentValue;
function average(array){
  return array.reduce((reducer))/array.length 
} 

const dep1 = "Common";
const commonArray = Data.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(dep1));
  }).map(result => {
    return parseInt(result.salary, 10)
  })
salaryArray.push(average(commonArray).toFixed(0))

const dep2 = "Marketing"
const markArray = Data.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(dep2));
  }).map(result => {
    return parseInt(result.salary, 10)
  })
salaryArray.push(average(markArray).toFixed(0))

const dep3 = "Legal"
const legalArray = Data.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(dep3));
  }).map(result => {
    return parseInt(result.salary, 10)
  })
salaryArray.push(average(legalArray).toFixed(0))

const dep4 = "Research and Development"
const rndArray = Data.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(dep4));
  }).map(result => {
    return parseInt(result.salary, 10)
  })
salaryArray.push(average(rndArray).toFixed(0))

const dep5 = "Information Technology"
const itArray = Data.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(dep5));
  }).map(result => {
    return parseInt(result.salary, 10)
  })
salaryArray.push(average(itArray).toFixed(0))

const dep6 = "Enquiries"
const enqArray = Data.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(dep6));
  }).map(result => {
    return parseInt(result.salary, 10)
  })
salaryArray.push(average(enqArray).toFixed(0))

const dep7 = "Security"
const secArray = Data.filter((item)=>{
  return Object.keys(item).some((key)=>item[key].includes(dep7));
  }).map(result => {
    return parseInt(result.salary, 10)
  })
salaryArray.push(average(secArray).toFixed(0))

//console.log(salaryArray)

const departmentArray = []

for (var i = 0; i < departments.length; i++) {
  departmentArray[i] = {
    name: departments[i],
    number: employeeNumberArray[i],
    manager: managers[i],
    salary: numberWithCommas(salaryArray[i])
  }
}

//console.log(departmentArray)

function Departments() {
  const initialState = {
    department: departmentArray
  }
 
  const [state] = useState(initialState);

    return (
      <div className="mb-2">
        <div className="border-gray-600 border-b-2">
    <h1 className="text-3xl font-mono">{"//"}DEPARTMENTS: {departmentArray.length}</h1>
        <p className="font-mono text-right leading-loose text-lg text-blue-600"><span className="text-gray-500">2020</span>{"//"}DIRECTORY</p>
       </div>
       <div>
        {state.department.map(result => (
          <List 
          key = {result.name}
          manager= {result.manager}
          salary= {result.salary}
          >
          <h1><strong>Department:</strong> {result.name}</h1>
          <p><strong>Employees:</strong> {result.number}</p>
          </List>
        ))}
        </div>
      </div>
     
    )
}

export default Departments;