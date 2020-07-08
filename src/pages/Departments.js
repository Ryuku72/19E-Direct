import React, { useState } from "react";
import Data from "../company.json";
import Dropdown from "../components/Dropdown/Dropdown"
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
const showArray = []

for (let i = 0; i < departments.length; i++) {
  departmentArray[i] = {
    name: departments[i],
    number: employeeNumberArray[i],
    manager: managers[i],
    salary:  JSON.parse(salaryArray[i])
  }
}

for (let i = 0; i < departments.length; i++) {
  showArray[i] = {
    name: departments[i],
    number: employeeNumberArray[i],
    manager: managers[i],
    salary: numberWithCommas(salaryArray[i])
  }
}

//console.log(departmentArray)

function Departments() {
  const initialState = {
    department: showArray,
    sort: "Sort By",
    order: "Order By"
  }
 
  const [state, setSearchState] = useState(initialState);
  function onHandleSort(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    //console.log(state)
    setSearchState({ ...state, sort: event.target.name })
  }

  function clearForm(){
    document.getElementById("create-course-form").reset();
    setSearchState(initialState)
  }
  
  function onHandleOrder(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    //console.log(state)
    setSearchState({ ...state, order: event.target.name})
  }

  function onHandleFormSubmit(event) {
    event.preventDefault();
    //console.log("submitted")
    
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
  if (state.sort === "Sort By" && state.order === "Order By"){
    setSearchState({ ...state, department: showArray})
  }
  else if (state.sort === "Ascend" && state.order === "Order By"){
    //console.log("Ascend Triggered")
    let repArray = departmentArray.sort(compareValues('name')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Order By"){
    //console.log("Descend Triggered")
    let repArray = departmentArray.sort(compareValues('name', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
    //console.log(repArray)
  }
  else if (state.sort === "Ascend" && state.order === "Department"){
    //console.log("Ascend Triggered")
    let repArray = departmentArray.sort(compareValues('name')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Department"){
    //console.log("Descend Triggered")
    let repArray = departmentArray.sort(compareValues('name', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
    //console.log(repArray)
  }
  else if (state.sort === "Ascend" && state.order === "Manager"){
    //console.log("Ascend Triggered")
    let repArray = departmentArray.sort(compareValues('manager')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Manager"){
    //console.log("Descend Triggered")
    let repArray = departmentArray.sort(compareValues('manager', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
    //console.log(repArray)
  }
  else if (state.sort === "Ascend" && state.order === "Salary"){
    //console.log("Ascend Triggered")
    let repArray = departmentArray.sort(compareValues('salary')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Salary"){
    //console.log("Descend Triggered")
    let repArray = departmentArray.sort(compareValues('salary', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
    //console.log(repArray)
  }
  else if (state.sort === "Ascend" && state.order === "Employees"){
    //console.log("Ascend Triggered")
    let repArray = departmentArray.sort(compareValues('number')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Employees"){
    //console.log("Descend Triggered")
    let repArray = departmentArray.sort(compareValues('number', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, department: repArray})
    //console.log(repArray)
  }
  
  }
    return (
      <div className="mb-2 transition duration-700 ease-out">
        <div className="border-gray-600 border-b-2">
    <h1 className="text-3xl font-mono">{"//"}DEPARTMENTS: {departmentArray.length}</h1>
    <div className="flex w-full z-20">
    <form id="create-course-form" className="w-full inline-flex justify-end pb-2">
    <Dropdown style={{backgroundColor:"#a0aec0"}} title={state.sort}>

            <ul className="dropdown-menu absolute text-gray-700 pt-2 z-50">
              <li>
                <a href="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleSort} name="Ascend">
                  <i className="fas fa-arrow-up mx-2" aria-hidden="true" name="Ascend"></i>Ascend
                  </a></li>
              <li>
                <a href="/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleSort} name="Descend">
                <i className="fas fa-arrow-down mx-2" aria-hidden="true" name="Descend"></i>Descend</a></li>
            </ul>
    </Dropdown>
    <Dropdown style={{backgroundColor:"#90cdf4"}} title={state.order}>
            <ul className="dropdown-menu absolute text-gray-700 pt-2 z-50">
              <li>
                <a href="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Department" onClick={onHandleOrder}>
                <i className="far fa-building mx-2" name="Department"></i>Department
                  </a></li>
              <li>
                <a href="/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Employees">
                <i className="fas fas fa-user-cog mx-2" name="Employees"></i>Employees</a></li>
              <li>
                <a href="/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Manager">
                <i className="fas fa-user-tie mx-2" name="Manager"></i>Manager</a></li>
                <li>
                <a href="/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Salary">
                <i className="fas fa-wallet mx-2" name="Salary"></i>Salary</a></li>
            </ul>
            </Dropdown>
            <button type="submit" onClick={onHandleFormSubmit} 
        className="mr-2 w-32 bg-green-300 text-gray-700 font-semibold py-2 px-4 rounded inline-block items-center">
          Submit</button>
          <button type="reset" onClick={clearForm}
        className="mr-2 w-32 bg-purple-300 text-gray-700 font-semibold text- py-2 px-4 rounded inline-block items-center">
          Reset</button>
        </form>
        </div>
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