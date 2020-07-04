import React, {useState} from "react";
import Card from "../components/Card/Card"
import Data from "../company.json"
import SearchForm from "../components/Searchform/SearchForm"

function Home() {
  const [dataState, setDataState] = useState({
    name:"Unknown",
    department: "Unknown",
    role: "Unknown",
    role: "Unknown",
    manager: "Unknown",
    salary: 0,
    email: "Unknown",
  });

  const [searchState, setSearchState] = useState({
    search:"",
    name: "",
    results: {},
    error: ""
  })

  function handleInputChange(event){
    event.preventDefault();
    setSearchState({search: JSON.stringify(event.target.value)})
    console.log(searchState.search)
  }
  
  function handleFormSubmit(event){
    event.preventDefault();
    let newArray = Data.some(result => {
      return JSON.stringify( searchState.search === JSON.stringify(result));
    });
    if (newArray){
      console.log('yes')
    } else {
      console.log('no')
    }

//WORKSSSS!!!!!
    
  }

  function handleRemove(key) {
    console.log(key)
    const employees = dataState.filter(result => result.name !== key);
    setDataState(employees);
  };


    return (
      <div>
        <SearchForm
          handleFormSubmit = {handleFormSubmit}
          handleInputChange = {handleInputChange}
          name = {dataState.name}
        />
        <div className="grid grid-cols-3 gap-3">
            <Card
            handleRemove={handleRemove}
            key={dataState.name}
            name={dataState.name}
            department={dataState.department}
            role={dataState.role}
            manager={dataState.manager}
            salary={dataState.salary}
            email={dataState.email}
          />
      </div>
      </div>
    )
}

export default Home;
