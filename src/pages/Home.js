import React, { useState } from "react";
import Card from "../components/Card/Card";
import SearchForm from "../components/Searchform/SearchForm";
import Hero from "../components/Hero/Hero"
import Data from "../company.json";
import Background from "../assets/wallpaper.jpg"

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
  length: 0,
  sort: "Sort",
  order: "Order"
 }

  const [searchState, setSearchState] = useState(initialState);

 
  function onHandleInputChange(event) {
    event.preventDefault();
    console.log(event.target)
    setSearchState({ ...searchState, search: JSON.stringify(event.target.value.trim().toLowerCase()) });
  }

  function cancelCourse(){ 
    document.getElementById("create-course-form").reset();
  }

  function clearForm(){
    document.getElementById("create-course-form").reset();
    setSearchState(initialState)
  }

  function onHandleSort(event){
    event.preventDefault();
    console.log(event.target.innerText)
    setSearchState({ ...searchState, sort: event.target.innerText })
  }

  function onHandleOrder(event){
    event.preventDefault();
    console.log(event.target.innerText)
    setSearchState({ ...searchState, order: event.target.innerText})
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
      setSearchState({ ...searchState, error: "Alert: No Results Found", length: 0
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
        style={{ opacity: searchState.length ? "1" : "0" }}
        length={searchState.length}
        alert={{ opacity: searchState.error ? "1" : "0"}}
        order={searchState.order}
        onHandleOrder={onHandleOrder}
        sort={searchState.sort}
        onHandleSort={onHandleSort}
        >  
        {searchState.error}
        </ SearchForm>
       <Hero className="h-screen" 
        pStyle={{ opacity: searchState.length ? "0" : "1", height: searchState.length ? "0vh" : "75vh", padding: searchState.length ? "0em" : "2.5rem", width: "100%"}}
        style={{ opacity: searchState.length ? "0" : "1", width: "100%",
        height: searchState.length ? "0vh" : "75vh",
        backgroundImage: `url(${Background})` }}
        />
      <div className="grid grid-cols-3 gap-3">
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
          style={{ display: searchState.length ? "block" : "none", opacity: searchState.length ? "1" : "0"  }}
        />
      ))}
      </div>
    </div>
  );
}

export default Home;
