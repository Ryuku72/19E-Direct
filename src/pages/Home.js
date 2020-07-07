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

const salaryArray = Data.map(function(result, i) {
  return {
      name: result.name.toLowerCase(),
      department: result.department.toLowerCase(),
      role: result.role.toLowerCase(),
      manager: result.manager.toLowerCase(),
      salary: JSON.parse(result.salary),
      email: result.email.toLowerCase()
  };
});

console.log(salaryArray)

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
  search: JSON.stringify(""),
  employees: database,
  results: [],
  error: "",
  length: 0,
  sort: "Sort By",
  order: "Order By"
 }

  const [searchState, setSearchState] = useState(initialState);
 
  function onHandleInputChange(event) {
    event.preventDefault();
    //console.log(event.target)
    setSearchState({ ...searchState, search: JSON.stringify(event.target.value.trim().toLowerCase()) });
  }

  function clearForm(){
    document.getElementById("create-course-form").reset();
    setSearchState(initialState)
  }

  function onHandleSort(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    setSearchState({ ...searchState, sort: event.target.name })
  }

  function onHandleOrder(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    setSearchState({ ...searchState, order: event.target.name})
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

  function onHandleFormSubmit(event) {
    event.preventDefault();

  const entry = JSON.stringify("")

  let searchResult = newArray.filter(function(obj){
    //loop through each object
      for (Object.key in obj) {
        //check if object value contains value you are looking for
        if (obj[Object.key].includes(JSON.parse(searchState.search))) {
          //add this object to the filtered array
          return obj;
        }
      }
      return null;
  });

  let salaryResult = salaryArray.filter(function(obj){
    //loop through each object
      for (Object.key in obj) {
        //check if object value contains value you are looking for
        if (obj[Object.key].includes(JSON.parse(searchState.search))) {
          //add this object to the filtered array
          return obj;
        }
        return null;
      }
      clearForm()
      return null;
  });

  //console.log(salaryResult.sort(compareValues('salary', 'desc')))

  if (searchResult.length === 0 || searchResult === undefined ){
    setSearchState({ ...searchState, error: "Alert: No Results Found", length: 0
  })
}
else if (searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Order By"){
  //console.log("All Triggered")
  setSearchState({ ...searchState, results: searchResult, error: "", length: searchResult.length
})
 }
   else if (searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Order By"){
    //console.log("Descend Triggered")
    let repArray = searchResult.sort(compareValues('name', 'desc'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
   }
  else if (searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Order By"){
    //console.log("Ascend Triggered")
    let repArray = searchResult.sort(compareValues('name'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  } 
  else if (searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Department"){
    //console.log("Department Descend Triggered")
    let repArray = searchResult.sort(compareValues('department', 'desc'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
   }
  else if (searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Department"){
    //console.log("Department Ascend Triggered")
    let repArray = searchResult.sort(compareValues('department'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  } 
  else if (searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Department"){
    //console.log("Department Ascend Triggered")
    let repArray = searchResult.sort(compareValues('department'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  } 
  else if (searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Role"){
    //console.log("Role Descend Triggered")
    let repArray = searchResult.sort(compareValues('role', 'desc'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
   }
  else if (searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Role"){
    //console.log("Role Ascend Triggered")
    let repArray = searchResult.sort(compareValues('role'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  }
  else if (searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Role"){
    //console.log("Role Ascend Triggered")
    let repArray = searchResult.sort(compareValues('role'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  }
  else if (searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Manager"){
    //console.log("Manager Descend Triggered")
    let repArray = searchResult.sort(compareValues('manager', 'desc'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
   }
  else if (searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Manager"){
    //console.log("Manager Ascend Triggered")
    let repArray = searchResult.sort(compareValues('manager'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  }
  else if (searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Manager"){
    //console.log("Manager Ascend Triggered")
    let repArray = searchResult.sort(compareValues('manager'))
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  }
  else if (searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Salary"){
    //console.log("Manager Descend Triggered")
    let repArray = salaryResult.sort(compareValues('salary', 'desc')).map(function(result, i) {
      return {
          name: result.name.toLowerCase(),
          department: result.department.toLowerCase(),
          role: result.role.toLowerCase(),
          manager: result.manager.toLowerCase(),
          salary: numberWithCommas((result.salary)),
          email: result.email.toLowerCase()
      };
    });
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
   }
  else if (searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Salary"){
    //console.log("Manager Ascend Triggered")
    let repArray = salaryResult.sort(compareValues('salary')).map(function(result, i) {
      return {
          name: result.name.toLowerCase(),
          department: result.department.toLowerCase(),
          role: result.role.toLowerCase(),
          manager: result.manager.toLowerCase(),
          salary: numberWithCommas((result.salary)),
          email: result.email.toLowerCase()
      };
    });
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  }
  else if (searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Salary"){
    //console.log("Manager Ascend Triggered")
    let repArray = salaryResult.sort(compareValues('salary')).map(function(result, i) {
      return {
          name: result.name.toLowerCase(),
          department: result.department.toLowerCase(),
          role: result.role.toLowerCase(),
          manager: result.manager.toLowerCase(),
          salary: numberWithCommas((result.salary)),
          email: result.email.toLowerCase()
      };
    });
    setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
  })
  }
     else if (searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Order By"){
      //console.log("Descend Triggered")
      let repArray = searchResult.sort(compareValues('name', 'desc'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
     }
    else if (searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Order By"){
      //console.log("Ascend Triggered")
      let repArray = searchResult.sort(compareValues('name'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    } 
    else if (searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Order By"){
      //console.log("Ascend Triggered")
      let repArray = searchResult.sort(compareValues('name'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    } 
    else if (searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Department"){
      //console.log("Department Descend Triggered")
      let repArray = searchResult.sort(compareValues('department', 'desc'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
     }
    else if (searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Department"){
      //console.log("Department Ascend Triggered")
      let repArray = searchResult.sort(compareValues('department'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    } 
    else if (searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Department"){
      //console.log("Department Ascend Sort Triggered")
      let repArray = searchResult.sort(compareValues('department'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    } 
    else if (searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Role"){
      //console.log("Role Descend Triggered")
      let repArray = searchResult.sort(compareValues('role', 'desc'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
     }
    else if (searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Role"){
      //console.log("Role Ascend Triggered")
      let repArray = searchResult.sort(compareValues('role'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    }
    else if (searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Role"){
      //console.log("Role Ascend Sort Triggered")
      let repArray = searchResult.sort(compareValues('role'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    }
    else if (searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Manager"){
      //console.log("Manager Descend Triggered")
      let repArray = searchResult.sort(compareValues('manager', 'desc'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
     }
    else if (searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Manager"){
      //console.log("Manager Ascend Triggered")
      let repArray = searchResult.sort(compareValues('manager'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    }
    else if (searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Manager"){
      //console.log("Manager Ascend Sort Triggered")
      let repArray = searchResult.sort(compareValues('manager'))
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    }
    else if (searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Salary"){
      //console.log("Manager Descend Triggered")
      let repArray = searchResult.sort(compareValues('salary', 'desc')).map(function(result, i) {
        return {
            name: result.name.toLowerCase(),
            department: result.department.toLowerCase(),
            role: result.role.toLowerCase(),
            manager: result.manager.toLowerCase(),
            salary: numberWithCommas((result.salary)),
            email: result.email.toLowerCase()
        };
      });
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
     }
    else if (searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Salary"){
      //console.log("Manager Ascend Triggered")
      let repArray = searchResult.sort(compareValues('salary')).map(function(result, i) {
        return {
            name: result.name.toLowerCase(),
            department: result.department.toLowerCase(),
            role: result.role.toLowerCase(),
            manager: result.manager.toLowerCase(),
            salary: numberWithCommas((result.salary)),
            email: result.email.toLowerCase()
        };
      });
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    }
    else if (searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Salary"){
      //console.log("Manager Ascend Triggered")
      let repArray = searchResult.sort(compareValues('salary')).map(function(result, i) {
        return {
            name: result.name.toLowerCase(),
            department: result.department.toLowerCase(),
            role: result.role.toLowerCase(),
            manager: result.manager.toLowerCase(),
            salary: numberWithCommas((result.salary)),
            email: result.email.toLowerCase()
        };
      });
      setSearchState({ ...searchState, results: repArray, error: "", length: searchResult.length
    })
    }
    else{
      //console.log("! All Triggered")
      setSearchState({ ...searchState, results: searchResult, error: "", length: searchResult.length
    })
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
        style={{ opacity: searchState.length ? "0" : "1", width: searchState.length ? "0%" : "100%",
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
