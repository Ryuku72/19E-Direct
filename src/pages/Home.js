import React, { useState } from "react";
import Card from "../components/Card/Card";
import SearchForm from "../components/Searchform/SearchForm";
import Alert from "../components/Alert/Alert";
import Data from "../company.json";

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const newArray = Data.map(function(result, i) {
  return {
      name: result.name.toLowerCase(),
      department: result.department.toLowerCase(),
      role: result.role.toLowerCase(),
      manager: result.manager.toLowerCase(),
      salary: numberWithCommas((result.salary)),
      email: result.email.toLowerCase()
  };
});

const nameArray = Data.map(result => {
  return result.name
})
const departArray = Data.map(result => {
  return result.department
})
const departments = [...new Set(departArray)];


const roleArray = Data.map(result => {
  return result.role
})
const roles = [...new Set(roleArray)];

const database = nameArray.concat(departments, roles)

function Home() {

 const initialState = {
  search: "",
  employees: database,
  results: [],
  error: "",
  length: 0
 }

 const unknownUser = [{
    name: "Unknown",
    department: "Unknown",
    role: "Unknown",
    salary: "0",
    manager: "Unknown",
    email: ""
  }];

  const [searchState, setSearchState] = useState(initialState);

  function onHandleInputChange(event) {
    event.preventDefault();
    setSearchState({ ...searchState, search: JSON.stringify(event.target.value.trim().toLowerCase()) });
  }

  function cancelCourse(){ 
    document.getElementById("create-course-form").reset();
  }

  function clearForm(){
    document.getElementById("create-course-form").reset();
    setSearchState(initialState)
  }
  
  function onHandleFormSubmit(event) {
    event.preventDefault();
    
    let searchResult = newArray.filter(function(obj){
      //loop through each object
        for (Object.key in obj) {
          //check if object value contains value you are looking for
          if (obj[Object.key].includes(JSON.parse(searchState.search))) {
            //add this object to the filtered array
            return obj;
            }
        }
        cancelCourse()
        return null;
    });
  
    if (searchResult.length === 0 || searchResult === undefined){
      console.log("empty")
      setSearchState({ ...searchState, error: "No Employee // Role // Department Found !!!", results: unknownUser
    })
    } else {
      setSearchState({ ...searchState, results: searchResult, error: "", length: searchResult.length})
    }   

  }

  function onHandleRemove(key) {
    const employees = searchState.results.filter((result) => result.name !== key);
    setSearchState({...searchState, results: employees});
  }

  return (
    <div>
      <SearchForm
        onHandleFormSubmit={onHandleFormSubmit}
        onHandleInputChange={onHandleInputChange}
        clearForm={clearForm}
        name={searchState.employees}
        style={{ display: searchState.length ? "flex" : "none" }}
        length={searchState.length}
      />
       <Alert
        style={{ height: searchState.error ? "3rem" : "0"}}
       >
      {searchState.error}
      
       </Alert>
      <div className="p-6 grid grid-cols-3 gap-3">
      {searchState.results.map(result => (
        <Card
          name={result.name}
          key={result.name}
          department={result.department}
          role={result.role}
          manager={result.manager}
          salary={result.salary}
          email={result.email}
          onHandleRemove={onHandleRemove}
          style={{ display: searchState.length ? "block" : "none" }}
        />
      ))}
      </div>
    </div>
  );
}

export default Home;
