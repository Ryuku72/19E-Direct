import React, { useState, useEffect } from "react";
import List from "../components/List/List";
import Data from "../company.json";
import Dropdown from "../components/Dropdown/Dropdown"

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

const rolesArray = Data.map(result => {
  return result.role
})
const roles = [...new Set(rolesArray)];
//console.log(roles)

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

const roleArray = []
const showArray = []

for (var i = 0; i < roles.length; i++) {
    showArray[i] = {
    name: roles[i],
    number: roleNumberArray[i],
    manager: managers[i],
    salary: numberWithCommas(wage[i])
  }
}
//console.log(showArray)

for (let i = 0; i < roles.length; i++) {
  roleArray[i] = {
  name: roles[i],
  number: roleNumberArray[i],
  manager: managers[i],
  salary: JSON.parse(wage[i])
}
}

// console.log(roles)
// console.log(managers)
// console.log(roleNumberArray)
// console.log(wage)
// console.log(rolesArray)


function Roles() {
  const initialState = {
    role: showArray,
    sort: "Sort By",
    order: "Order By"
  } 
  const [state, setSearchState] = useState(initialState);


useEffect(() => {

  if (state.sort === "Sort By" && state.order === "Order By"){
    setSearchState({ ...state, role: showArray})
  }

  else if (state.sort === "Sort By" && state.order === "Roles"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('name')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }
  else if (state.sort === "Sort By" && state.order === "Position"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('number')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }
  else if (state.sort === "Sort By" && state.order === "Manager"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('manager')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }
  else if (state.sort === "Sort By" && state.order === "Salary"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('salary')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }

  else if (state.sort === "Ascend" && state.order === "Order By"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('name')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Order By"){
    //console.log("Descend Triggered")
    let repArray = roleArray.sort(compareValues('name', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
    //console.log(repArray)
  }
  else if (state.sort === "Ascend" && state.order === "Roles"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('name')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Roles"){
    //console.log("Descend Triggered")
    let repArray = roleArray.sort(compareValues('name', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
    console.log(repArray)
  }
  else if (state.sort === "Ascend" && state.order === "Manager"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('manager')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Manager"){
    //console.log("Descend Triggered")
    let repArray = roleArray.sort(compareValues('manager', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
    //console.log(repArray)
  }
  else if (state.sort === "Ascend" && state.order === "Salary"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('salary')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Salary"){
    //console.log("Descend Triggered")
    let repArray = roleArray.sort(compareValues('salary', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
    //console.log(repArray)
  }
  else if (state.sort === "Ascend" && state.order === "Position"){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(compareValues('number')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
  }
  else if (state.sort === "Descend" && state.order === "Position"){
    //console.log("Descend Triggered")
    let repArray = roleArray.sort(compareValues('number', 'desc')).map(result => {
      return{
        name: result.name,
        number: result.number,
        manager: result.manager,
        salary: numberWithCommas(result.salary)
      }
    });
    setSearchState({ ...state, role: repArray})
    //console.log(repArray)
  }
  
},[state.sort, state.order])
 
  function onHandleSort(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    //console.log(state)
    setSearchState({ ...state, sort: event.target.name })
  }

  function onHandleOrder(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    //console.log(state)
    setSearchState({ ...state, order: event.target.name})
  }

  function clearForm(){
    document.getElementById("create-course-form").reset();
    setSearchState(initialState)
  }

  return (
    <div className="mb-2">
      <div className="border-gray-600 border-b-2 transition duration-700 ease-out">
      <h1 className="text-3xl font-mono">{"//"}ROLES: {roles.length}</h1>
      <form id="create-course-form" className="w-full inline-flex justify-end pb-2">
    <Dropdown style={{backgroundColor:"#90cdf4"}} title={state.order}>
            <ul className="dropdown-menu absolute text-gray-700 pt-2 z-50">
              <li>
                <a href="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Roles" onClick={onHandleOrder} >
                <i className="fas fa-tools mx-2" name="Roles"></i>Roles
                  </a></li>
              <li>
                <a href="/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Position">
                <i className="fas fa-sort-numeric-up mx-2" name="Position"></i>Position</a></li>
              <li>
                <a href="/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Manager">
                <i className="fas fa-user-tie mx-2" name="Manager"></i>Manager</a></li>
                <li>
                <a href="/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Salary">
                <i className="fas fa-wallet mx-2" name="Salary"></i>Salary</a></li>
            </ul>
            </Dropdown>
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
          <button type="reset" onClick={clearForm}
        className="mr-2 w-32 bg-purple-300 text-gray-700 font-semibold text- py-2 px-4 rounded inline-block items-center">
          Reset</button>
        </form>
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