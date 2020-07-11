import React, { useState, useEffect} from "react";
import List from "../components/List/List";
import Data from "../company.json";
import JPN from "../japanese.json";
import Button from "../components/Button/Button"
import Number from "../components/Number/Number"
import Filter from "../utils/filter"
import {useSpring, animated } from 'react-spring'

const eArray = Data.map(result => {
  return {
    name: result.name,
    department: result.department,
    role: result.role,
    manager: result.manager,
    salary: JSON.parse(result.salary),
    email: result.email
  }
});

function Employees() {
  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  const initialState = {
    results: eArray,
    sort: "Sort By",
    order: "Order By"
  }
  const [searchState, setSearchState] = useState(initialState);

  const [toggled, setToggled] = useState({
    name: false,
    roles: false,
    department: false,
    manager: false,
    salary: false,
  })
  const [toggledTwo, setToggledTwo] = useState({
    ascend: false,
    descend: false
  })

  useEffect(() => {
    if (searchState.sort === "Sort By" && searchState.order === "Order By") {
      setSearchState({
        ...searchState,
        results: eArray,
        error: "",
      })
    } else if ((searchState.sort === "Sort By" && searchState.order === "Name") || (searchState.sort === "Ascend" && searchState.order === "Order By") || (searchState.sort === "Ascend" && searchState.order === "Name")) {
      let repArray = eArray.sort(Filter.compareValues('name'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else if ((searchState.sort === "Descend" && searchState.order === "Order By") || (searchState.sort === "Descend" && searchState.order === "Name")) {
      let repArray = eArray.sort(Filter.compareValues('name', 'desc'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else if (searchState.sort === "Descend" && searchState.order === "Department") {
      let repArray = eArray.sort(Filter.compareValues('department', 'desc'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else if ((searchState.sort === "Ascend" && searchState.order === "Department") || (searchState.sort === "Sort By" && searchState.order === "Department")) {
      let repArray = eArray.sort(Filter.compareValues('department'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else if (searchState.sort === "Descend" && searchState.order === "Role") {
      let repArray = eArray.sort(Filter.compareValues('role', 'desc'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else if ((searchState.sort === "Ascend" && searchState.order === "Role") || (searchState.sort === "Sort By" && searchState.order === "Role")) {
      let repArray = eArray.sort(Filter.compareValues('role'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else if (searchState.sort === "Descend" && searchState.order === "Manager") {
      let repArray = eArray.sort(Filter.compareValues('manager', 'desc'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else if ((searchState.sort === "Ascend" && searchState.order === "Manager") || (searchState.sort === "Sort By" && searchState.order === "Manager")) {
      let repArray = eArray.sort(Filter.compareValues('manager'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else if (searchState.sort === "Descend" && searchState.order === "Salary") {
      let repArray = eArray.sort(Filter.compareValues('salary', 'desc'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    } else {
      let repArray = eArray.sort(Filter.compareValues('salary'))
      setSearchState({
        ...searchState,
        results: repArray,
        error: "",
      })
    }
  }, [searchState.sort, searchState.order])

  function onHandleSort(event) {
    event.preventDefault();

    setSearchState({
      ...searchState,
      sort: event.target.name
    })
    if (event.target.name === "Descend") {
      setToggledTwo({
        descend: !false
      })
    }
    if (event.target.name === "Ascend") {
      setToggledTwo({
        ascend: !false
      })
    }
  }

  function clearForm() {
    document.getElementById("create-course-form").reset();
    setSearchState(initialState)
    setToggled(false)
    setToggledTwo(false)
  }

  function onHandleOrder(event) {
    event.preventDefault();

    setSearchState({
      ...searchState,
      order: event.target.name
    })
    if (event.target.name === "Name") {
      setToggled({
        name: !false
      })
    }
    if (event.target.name === "Department") {
      setToggled({
        department: !false
      })
    }
    if (event.target.name === "Role") {
      setToggled({
        role: !false
      })
    }
    if (event.target.name === "Manager") {
      setToggled({
        manager: !false
      })
    }
    if (event.target.name === "Salary") {
      setToggled({
        salary: !false
      })
    }
  }

    return (
      <animated.div style={fade} className="transition duration-700 ease-out">
        <div className="border-gray-600 border-b-2">
    <h1 className="text-3xl font-mono">{JPN[3].name} {'//'} EMPLOYEES: {eArray.length}</h1>
    <div className="flex w-full z-20">
    <form id="create-course-form" className="w-full inline-flex justify-end pb-2">
    <Button style={{backgroundColor:"#90cdf4"}} title={searchState.order}>
            <ul className="Button-menu absolute text-gray-700 pt-2 z-50">
            <li>
                <a href="/" className="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Name" onClick={onHandleOrder} style={{color: toggled.name ? "#f56565": "#4a5568"}}>
                <i className="fas fa-font mx-2" name="Name"></i>Name
                  </a></li>
              <li>
                <a href="/" className="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Department" onClick={onHandleOrder} style={{color: toggled.department ? "#f56565": "#4a5568"}}>
                <i className="far fa-building mx-2" name="Department"></i>Department
                  </a></li>
              <li>
                <a href="/" className="w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Role" style={{color: toggled.role ? "#f56565": "#4a5568"}}>
                <i className="fas fas fa-tools mx-2" name="Role"></i>Role</a></li>
              <li>
                <a href="/" className="w-full rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Manager" style={{color: toggled.manager ? "#f56565": "#4a5568"}}>
                <i className="fas fa-user-tie mx-2" name="Manager"></i>Manager</a></li>
                <li>
                <a href="/" className="w-full rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Salary" style={{color: toggled.salary ? "#f56565": "#4a5568"}}>
                <i className="fas fa-wallet mx-2" name="Salary"></i>Salary</a></li>
            </ul>
            </Button>
            <Button style={{backgroundColor:"#a0aec0"}} title={searchState.sort}>

            <ul className="Button-menu absolute text-gray-700 pt-2 z-50">
              <li>
                <a href="/" className="w-full rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleSort} name="Ascend" style={{color: toggledTwo.ascend ? "#f56565": "#4a5568"}}>
                  <i className="fas fa-arrow-up mx-2" aria-hidden="true" name="Ascend"></i>Ascend
                  </a></li>
              <li>
                <a href="/" className="w-full rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleSort} name="Descend" style={{color: toggledTwo.descend ? "#f56565": "#4a5568"}}>
                <i className="fas fa-arrow-down mx-2" aria-hidden="true" name="Descend"></i>Descend</a></li>
            </ul>
            </Button>
          <button type="reset" onClick={clearForm}
        className="mr-2 w-32 bg-purple-300 text-gray-700 font-semibold text- py-2 px-4 rounded inline-block items-center">
          Reset</button>
        </form>
        </div>
      </div>
      {searchState.results.map(result => (
     <List className="mb-2"
     key = {result.name}
     manager= {result.manager}
     salary= {result.salary}
     >
    <h1><strong>Name:</strong> {result.name}</h1>
    <p><strong>Department:</strong> {result.department}</p>
    <p><strong>Role: </strong>{result.role}</p>
    <p><strong>Manager: </strong> {result.manager}</p>
    <p><strong>Salary: </strong> <Number value={result.salary} /></p>
    <p><strong>Email: </strong>{result.email}</p>
     </List>
       ))}
       </animated.div>
    )
}

export default Employees;