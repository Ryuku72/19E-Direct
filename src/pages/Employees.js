import React, { useState, useEffect} from "react";
import List from "../components/List/List";
import Data from "../company.json";
import Dropdown from "../components/Dropdown/Dropdown"
import { useSpring, animated} from 'react-spring'

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

const showArray = Data.sort(compareValues('name')).map(result => {
  return {
    name: result.name,
    department: result.department,
    role: result.role,
    manager: result.manager,
    salary: numberWithCommas(result.salary),
    email: result.email
  }
});

const eArray = Data.sort(compareValues('name')).map(result => {
  return {
    name: result.name,
    department: result.department,
    role: result.role,
    manager: result.manager,
    salary: JSON.parse(result.salary),
    email: result.email
  }
});

//console.log(eArray)


function Employees() {
  const fade = useSpring({ from: {opacity: 0}, opacity:1 })
 
  const initialState = {
    results: showArray,
    sort: "Sort By",
    order: "Order By"
  }
  const [searchState, setSearchState] = useState(initialState);
  
  useEffect(()=>{
    if (searchState.sort === "Sort By" && searchState.order === "Order By"){
      //console.log("All Triggered")
      setSearchState({ ...searchState, results: showArray, error: "", length: eArray.length
    })
     }
     else if (searchState.sort === "Sort By" && searchState.order === "Name"){
      // console.log(searchState)
       let repArray = eArray.sort(compareValues('name')).map(result => {
         return {
           name: result.name,
           department: result.department,
           role: result.role,
           manager: result.manager,
           salary: numberWithCommas(result.salary),
           email: result.email
         }
       });
       setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
     })
      }
       else if (searchState.sort === "Descend" && searchState.order === "Order By"){
       // console.log(searchState)
        let repArray = eArray.sort(compareValues('name', 'desc')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
       }
      else if (searchState.sort === "Ascend" && searchState.order === "Order By"){
        //console.log("Ascend Triggered")
        let repArray = eArray.sort(compareValues('name')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
      } 
      else if (searchState.sort === "Descend" && searchState.order === "Name"){
       // console.log(searchState)
        let repArray = eArray.sort(compareValues('name', 'desc')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
       }
      else if (searchState.sort === "Ascend" && searchState.order === "Name"){
        //console.log("Ascend Triggered")
        let repArray = eArray.sort(compareValues('name')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
      } 
      else if (searchState.sort === "Descend" && searchState.order === "Department"){
        //console.log("Department Descend Triggered")
        let repArray = eArray.sort(compareValues('department', 'desc')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
       }
      else if (searchState.sort === "Ascend" && searchState.order === "Department"){
        //console.log("Department Ascend Triggered")
        let repArray = eArray.sort(compareValues('department')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
      } 
      else if (searchState.sort === "Sort By" && searchState.order === "Department"){
        //console.log("Department Ascend Triggered")
        let repArray = eArray.sort(compareValues('department')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
      } 
      else if (searchState.sort === "Descend" && searchState.order === "Role"){
        //console.log("Role Descend Triggered")
        let repArray = eArray.sort(compareValues('role', 'desc')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
       }
      else if (searchState.sort === "Ascend" && searchState.order === "Role"){
        //console.log("Role Ascend Triggered")
        let repArray = eArray.sort(compareValues('role')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
      }
      else if (searchState.sort === "Sort By" && searchState.order === "Role"){
        //console.log("Role Ascend Triggered")
        let repArray = eArray.sort(compareValues('role')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
      }
      else if (searchState.sort === "Descend" && searchState.order === "Manager"){
        //console.log("Manager Descend Triggered")
        let repArray = eArray.sort(compareValues('manager', 'desc')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
       }
      else if (searchState.sort === "Ascend" && searchState.order === "Manager"){
        //console.log("Manager Ascend Triggered")
        let repArray = eArray.sort(compareValues('manager')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
      }
      else if (searchState.sort === "Sort By" && searchState.order === "Manager"){
        //console.log("Manager Ascend Triggered")
        let repArray = eArray.sort(compareValues('manager')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length
      })
      }
    
      else if (searchState.sort === "Descend" && searchState.order === "Salary"){
        //console.log("Manager Descend Triggered")
        let repArray = eArray.sort(compareValues('salary', 'desc')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length})
       // console.log(repArray)
       }
    
       else if (searchState.sort === "Ascend" && searchState.order === "Salary"){
        //console.log("Manager Descend Triggered")
        let repArray = eArray.sort(compareValues('salary')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length})
        //console.log(repArray)
       }
    
       else if (searchState.sort === "Sort By" && searchState.order === "Salary"){
        //console.log("Manager Descend Triggered")
        let repArray = eArray.sort(compareValues('salary')).map(result => {
          return {
            name: result.name,
            department: result.department,
            role: result.role,
            manager: result.manager,
            salary: numberWithCommas(result.salary),
            email: result.email
          }
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: eArray.length})
       // console.log(repArray)
       }
  }, [searchState.sort, searchState.order])

  function onHandleSort(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    //console.log(state)
    setSearchState({ ...searchState, sort: event.target.name })
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
    setSearchState({ ...searchState, order: event.target.name})
  }

    return (
      <animated.div style={fade} className="transition duration-700 ease-out">
        <div className="border-gray-600 border-b-2">
    <h1 className="text-3xl font-mono">{'//'}EMPLOYEES: {showArray.length}</h1>
    <div className="flex w-full z-20">
    <form id="create-course-form" className="w-full inline-flex justify-end pb-2">
    <Dropdown style={{backgroundColor:"#90cdf4"}} title={searchState.order}>
            <ul className="dropdown-menu absolute text-gray-700 pt-2 z-50">
            <li>
                <a href="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Name" onClick={onHandleOrder}>
                <i className="fas fa-font mx-2" name="Name"></i>Name
                  </a></li>
              <li>
                <a href="/" className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" name="Department" onClick={onHandleOrder}>
                <i className="far fa-building mx-2" name="Department"></i>Department
                  </a></li>
              <li>
                <a href="/" className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Role">
                <i className="fas fas fa-tools mx-2" name="Role"></i>Role</a></li>
              <li>
                <a href="/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Manager">
                <i className="fas fa-user-tie mx-2" name="Manager"></i>Manager</a></li>
                <li>
                <a href="/" className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={onHandleOrder} name="Salary">
                <i className="fas fa-wallet mx-2" name="Salary"></i>Salary</a></li>
            </ul>
            </Dropdown>
            <Dropdown style={{backgroundColor:"#a0aec0"}} title={searchState.sort}>

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
      </div>
      {searchState.results.map(result => (
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
       </animated.div>
    )
}

export default Employees;