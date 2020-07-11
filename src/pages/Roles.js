import React, { useState, useEffect } from "react";
import List from "../components/List/List";
import Data from "../company.json";
import Button from "../components/Button/Button"
import Number from "../components/Number/Number";
import Filter from "../utils/filter";
import { useSpring, animated } from "react-spring";
import JPN from "../japanese.json";

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

for (let i = 0; i < roles.length; i++) {
  roleArray[i] = {
  name: roles[i],
  number: roleNumberArray[i],
  manager: managers[i],
  salary: JSON.parse(wage[i])
}}

function Roles() {
  const fade = useSpring({from:{opacity:0}, opacity:1})
  
  const initialState = {
    role: roleArray,
    sort: "Sort By",
    order: "Order By"
  } 
  const [state, setSearchState] = useState(initialState);

  const [toggled, setToggled] = useState({
    roles: false,
    position: false,
    manager: false,
    salary: false,
  })
  const [toggledTwo, setToggledTwo] = useState({
    ascend: false,
    descend: false
  })

useEffect(() => {
  if (state.sort === "Sort By" && state.order === "Order By"){
    setSearchState({ ...state, role: roleArray})
  }
  else if ((state.sort === "Sort By" && state.order === "Roles") || (state.sort === "Ascend" && state.order === "Order By") || (state.sort === "Ascend" && state.order === "Roles")){
    let repArray = roleArray.sort(Filter.compareValues('name'))
    setSearchState({ ...state, role: repArray})
  }

  else if ((state.sort === "Descend" && state.order === "Order By") || (state.sort === "Descend" && state.order === "Roles")){
    let repArray = roleArray.sort(Filter.compareValues('name', 'desc'))
    setSearchState({ ...state, role: repArray})
  }


  else if ((state.sort === "Sort By" && state.order === "Position") || (state.sort === "Ascend" && state.order === "Position")){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(Filter.compareValues('number'))
    setSearchState({...state, role: repArray})
  }

  else if (state.sort === "Descend" && state.order === "Position"){
    //console.log("Descend Triggered")
    let repArray = roleArray.sort(Filter.compareValues('number', 'desc'))
    setSearchState({ ...state, role: repArray})
    //console.log(repArray)
  }

  else if ((state.sort === "Sort By" && state.order === "Manager") || (state.sort === "Ascend" && state.order === "Manager")){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(Filter.compareValues('manager'))
    setSearchState({ ...state, role: repArray})
  }

  else if (state.sort === "Descend" && state.order === "Manager"){
    //console.log("Descend Triggered")
    let repArray = roleArray.sort(Filter.compareValues('manager', 'desc'))
    setSearchState({ ...state, role: repArray})
    //console.log(repArray)
  }

  else if ((state.sort === "Sort By" && state.order === "Salary") || (state.sort === "Ascend" && state.order === "Salary")){
    //console.log("Ascend Triggered")
    let repArray = roleArray.sort(Filter.compareValues('salary'))
    setSearchState({ ...state, role: repArray})
  }

  else {
    //console.log("Descend Triggered")
    let repArray = roleArray.sort(Filter.compareValues('salary', 'desc'))
    setSearchState({ ...state, role: repArray})
    //console.log(repArray)
  }

},[state.sort, state.order])
 
  function onHandleSort(event){
    event.preventDefault();
    setSearchState({ ...state, sort: event.target.name })
    if  (event.target.name === "Descend"){
      setToggledTwo({descend:!false})
    }
    if  (event.target.name === "Ascend"){
      setToggledTwo({ascend:!false})
    }
  }

  function onHandleOrder(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    //console.log(state)
    setSearchState({ ...state, order: event.target.name})
    if (event.target.name === "Roles"){
      setToggled({roles:!false})
    }
    if (event.target.name === "Position"){
      setToggled({position:!false})
    } 
    if (event.target.name === "Manager"){
      setToggled({manager:!false}) 
    } 
    if (event.target.name === "Salary"){
      setToggled({salary:!false})
    }
  }

  function clearForm(){
    document.getElementById("create-course-form").reset();
    setSearchState(initialState)
    setToggled(false)
    setToggledTwo(false)
  }

  return (
    <animated.div style={fade} className="mb-2">
      <div className="border-gray-600 border-b-2 transition duration-700 ease-out">
      <h1 className="text-3xl font-mono">{JPN[2].name} {"//"} ROLES: {roles.length}</h1>
      <form id="create-course-form" className="w-full inline-flex justify-end pb-2">  
          <Button style={{backgroundColor:"#90cdf4"}} title={state.order}>
            <ul className="Button-menu absolute text-gray-700 pt-2 z-50">
              <li>
                <a href="/" className="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Roles" onClick={onHandleOrder} style={{color: toggled.roles ? "#f56565": "#4a5568"}}>
                <i className="fas fa-tools mx-2" name="Roles"></i>Roles
                  </a></li>
              <li>
                <a href="/" className="w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Position" style={{color: toggled.position ? "#f56565": "#4a5568"}}>
                <i className="fas fa-sort-numeric-up mx-2" name="Position"></i>Position</a></li>
              <li>
                <a href="/" className="w-full rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Manager" style={{color: toggled.manager ? "#f56565": "#4a5568"}}>
                <i className="fas fa-user-tie mx-2" name="Manager"></i>Manager</a></li>
                <li>
                <a href="/" className="w-full rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Salary" style={{color: toggled.salary ? "#f56565": "#4a5568"}}>
                <i className="fas fa-wallet mx-2" name="Salary"></i>Salary</a></li>
            </ul>
            </Button>
            <Button style={{backgroundColor:"#a0aec0"}} title={state.sort}>

<ul className="Button-menu absolute  pt-2 z-50">
  <li>
    <a href="/" className="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleSort} name="Ascend" style={{color: toggledTwo.ascend ? "#f56565": "#4a5568"}}>
      <i className="fas fa-arrow-up mx-2" aria-hidden="true" name="Ascend"></i>Ascend
      </a></li>
  <li>
    <a href="/" className="w-full bg-gray-200 rounded-b hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleSort} name="Descend" style={{color: toggledTwo.descend ? "#f56565": "#4a5568"}}>
    <i className="fas fa-arrow-down mx-2" aria-hidden="true" name="Descend"></i>Descend</a></li>
</ul>
</Button>
          <button type="reset" onClick={clearForm}
        className="mr-2 w-32 bg-purple-300 text-gray-700 font-semibold text- py-2 px-4 rounded inline-block items-center">
          Reset</button>
        </form>
        </div>
     {state.role.map(result => (
     <List key = {result.name}>
    <h1><strong>Role:</strong> {result.name}</h1>
    <p><strong>Positions:</strong> {result.number}</p>
    <p><strong>Manager: </strong> {result.manager}</p>
    <p><strong>Salary </strong> <Number value= {result.salary}/></p>
     </List>
       ))}
      </animated.div>
    )
}

export default Roles;