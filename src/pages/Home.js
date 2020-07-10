import React, { useState } from "react";
import Card from "../components/Card/Card";
import SearchForm from "../components/Searchform/SearchForm";
import Hero from "../components/Hero/Hero"
import Data from "../company.json";
import Background from "../assets/wallpaper.jpg"
import { useSpring, animated} from 'react-spring'

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

const newArray = Data.map(result => {
  return {
      name: result.name.toLowerCase(),
      department: result.department.toLowerCase(),
      role: result.role.toLowerCase(),
      manager: result.manager.toLowerCase(),
      salary: JSON.parse(result.salary),
      email: result.email.toLowerCase()
  };
});

//console.log(salaryArray)

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

 const fade = useSpring({ from: { opacity: 0}, opacity: 1})

 const Items = ["#9062aa", "#3fb4e9", "#6fc063", "#d94949", "#f8951e", "#7a564a", "#029688", "#2d2f79", "#e81f63"]

 const initialState = {
  search: JSON.stringify(""),
  employees: database,
  results: [],
  color: Items,
  error: "",
  length: 0,
  sort: "Sort By",
  order: "Order By",
 }
 console.log(initialState)

 const orderState = {
  ascend: false,
  descend: false
 }

 const sortState = {
  entry: false,
  roles: false,
  department: false,
  manager: false,
  salary: false,
 }

  const [searchState, setSearchState] = useState(initialState);

  const [toggled, setToggled] = useState(sortState)
  const [toggledTwo, setToggledTwo] = useState(orderState)
 
  function onHandleInputChange(event) {
    event.preventDefault();
    //console.log(event.target)
    setSearchState({ ...searchState, search: JSON.stringify(event.target.value.trim().toLowerCase()) });
  }

  function clearForm(){
    document.getElementById("create-course-form").reset();
    setSearchState(initialState)
    setToggledTwo(orderState)
    setToggled(sortState)
  }

  function onHandleSort(event){
    event.preventDefault();
    //console.log("clicked")
    //console.log(event.target.name)
    setSearchState({ ...searchState, sort: event.target.name })
    setSearchState({ ...searchState, sort: event.target.name })
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
    setSearchState({ ...searchState, order: event.target.name})
    if (event.target.name === "Name"){
      setToggled({entry:!false})
    } 
    if (event.target.name === "Department"){
      setToggled({department:!false})
    }
    if (event.target.name === "Role"){
      setToggled({role:!false})
    } 
    if (event.target.name === "Manager"){
      setToggled({manager:!false}) 
    } 
    if (event.target.name === "Salary"){
      setToggled({salary:!false})
    }
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

  let searchArray = newArray.filter(obj => {
    var flag = false;
    Object.values(obj).forEach(val => {
      if(String(val).indexOf(JSON.parse(searchState.search)) > -1) {
        flag = true;
        return;
      }
      return null;   
    });
    if(flag) return obj;
  });

  //console.log(searchArray)

  //console.log(salaryResult.sort(compareValues('salary', 'desc')))

  if (searchArray.length === 0 || searchArray === undefined ){
    setSearchState({ ...searchState, error: "Alert: No Results Found", length: 0
  })
}

else if (searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Order By"){
  //console.log("All Triggered")
  let repArray = searchArray.map(result => {
    return {
        name: result.name.toLowerCase(),
        department: result.department.toLowerCase(),
        role: result.role.toLowerCase(),
        manager: result.manager.toLowerCase(),
        salary: numberWithCommas((result.salary)),
        email: result.email.toLowerCase()
    };
  });
  setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
})
 }

else if (
searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Order By" || 
searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Order By" || 
searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Name" || 
searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Name" ||
searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Name" || 
searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Name"
) {
  //console.log("Ascend Triggered")
  let repArray = searchArray.sort(compareValues('name')).map(result => {
    return {
        name: result.name.toLowerCase(),
        department: result.department.toLowerCase(),
        role: result.role.toLowerCase(),
        manager: result.manager.toLowerCase(),
        salary: numberWithCommas((result.salary)),
        email: result.email.toLowerCase()
    };
  });
  setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
})
} 

else if (
  searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Order By" || 
  searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Order By" || 
  searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Name" || 
  searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Name"
  ) {
    //console.log("Ascend Triggered")
    let repArray = searchArray.sort(compareValues('name', 'desc')).map(result => {
      return {
          name: result.name.toLowerCase(),
          department: result.department.toLowerCase(),
          role: result.role.toLowerCase(),
          manager: result.manager.toLowerCase(),
          salary: numberWithCommas((result.salary)),
          email: result.email.toLowerCase()
      };
    });
    setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
  })
  } 

  else if (
    searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Department" || 
    searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Department" ||
    searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Department" || 
    searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Department"
    ) {
      //console.log("Ascend Triggered")
      let repArray = searchArray.sort(compareValues('department')).map(result => {
        return {
            name: result.name.toLowerCase(),
            department: result.department.toLowerCase(),
            role: result.role.toLowerCase(),
            manager: result.manager.toLowerCase(),
            salary: numberWithCommas((result.salary)),
            email: result.email.toLowerCase()
        };
      });
      setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
    })
    } 
    
    else if (
      searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Department" || 
      searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Department"
      ) {
        //console.log("Ascend Triggered")
        let repArray = searchArray.sort(compareValues('department', 'desc')).map(result => {
          return {
              name: result.name.toLowerCase(),
              department: result.department.toLowerCase(),
              role: result.role.toLowerCase(),
              manager: result.manager.toLowerCase(),
              salary: numberWithCommas((result.salary)),
              email: result.email.toLowerCase()
          };
        });
        setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
      })
      } 

      else if (
        searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Role" || 
        searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Role" ||
        searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Role" || 
        searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Role"
        ) {
          //console.log("Ascend Triggered")
          let repArray = searchArray.sort(compareValues('role')).map(result => {
            return {
                name: result.name.toLowerCase(),
                department: result.department.toLowerCase(),
                role: result.role.toLowerCase(),
                manager: result.manager.toLowerCase(),
                salary: numberWithCommas((result.salary)),
                email: result.email.toLowerCase()
            };
          });
          setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
        })
        } 
        
        else if (
          searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Role" || 
          searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Role"
          ) {
            //console.log("Ascend Triggered")
            let repArray = searchArray.sort(compareValues('role', 'desc')).map(result => {
              return {
                  name: result.name.toLowerCase(),
                  department: result.department.toLowerCase(),
                  role: result.role.toLowerCase(),
                  manager: result.manager.toLowerCase(),
                  salary: numberWithCommas((result.salary)),
                  email: result.email.toLowerCase()
              };
            });
            setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
          })
          } 

          else if (
            searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Manager" || 
            searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Manager" ||
            searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Manager" || 
            searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Manager"
            ) {
              //console.log("Ascend Triggered")
              let repArray = searchArray.sort(compareValues('manager')).map(result => {
                return {
                    name: result.name.toLowerCase(),
                    department: result.department.toLowerCase(),
                    role: result.role.toLowerCase(),
                    manager: result.manager.toLowerCase(),
                    salary: numberWithCommas((result.salary)),
                    email: result.email.toLowerCase()
                };
              });
              setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
            })
            } 
            
            else if (
              searchState.search === entry && searchState.sort === "Descend" && searchState.order === "Manager" || 
              searchState.search !== entry && searchState.sort === "Descend" && searchState.order === "Manager"
              ) {
                //console.log("Ascend Triggered")
                let repArray = searchArray.sort(compareValues('manager', 'desc')).map(result => {
                  return {
                      name: result.name.toLowerCase(),
                      department: result.department.toLowerCase(),
                      role: result.role.toLowerCase(),
                      manager: result.manager.toLowerCase(),
                      salary: numberWithCommas((result.salary)),
                      email: result.email.toLowerCase()
                  };
                });
                setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
              })
              } 

              else if (
                searchState.search === entry && searchState.sort === "Sort By" && searchState.order === "Salary" || 
                searchState.search !== entry && searchState.sort === "Sort By" && searchState.order === "Salary" ||
                searchState.search === entry && searchState.sort === "Ascend" && searchState.order === "Salary" || 
                searchState.search !== entry && searchState.sort === "Ascend" && searchState.order === "Salary"
                ) {
                  //console.log("Ascend Triggered")
                  let repArray = searchArray.sort(compareValues('salary')).map(result => {
                    return {
                        name: result.name.toLowerCase(),
                        department: result.department.toLowerCase(),
                        role: result.role.toLowerCase(),
                        manager: result.manager.toLowerCase(),
                        salary: numberWithCommas((result.salary)),
                        email: result.email.toLowerCase()
                    };
                  });
                  setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
                })
                } 
                
                else {
                    //console.log("Ascend Triggered")
                    let repArray = searchArray.sort(compareValues('salary', 'desc')).map(result => {
                      return {
                          name: result.name.toLowerCase(),
                          department: result.department.toLowerCase(),
                          role: result.role.toLowerCase(),
                          manager: result.manager.toLowerCase(),
                          salary: numberWithCommas((result.salary)),
                          email: result.email.toLowerCase()
                      };
                    });
                    setSearchState({ ...searchState, results: repArray, error: "", length: searchArray.length
                  })
                  } 
  }

  function onHandleRemove(key) {
    const employees = searchState.results.filter((result) => result.name !== key);
    setSearchState({...searchState, results: employees});
  }
  
  return (
    <animated.div style={fade}>
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
        department={{color: toggled.department ? "#f56565": "#4a5568"}}
        role={{color: toggled.role ? "#f56565": "#4a5568"}}
        entry={{color: toggled.entry ? "#f56565": "#4a5568"}}
        salary={{color: toggled.salary ? "#f56565": "#4a5568"}}
        manager={{color: toggled.manager ? "#f56565": "#4a5568"}}
        ascend={{color: toggledTwo.ascend ? "#f56565": "#4a5568"}}
        descend={{color: toggledTwo.descend ? "#f56565": "#4a5568"}}
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
          color={result.color}
          name={result.name}
          key={result.name}
          department={result.department}
          role={result.role}
          manager={result.manager}
          salary={result.salary}
          email={result.email}
          onHandleRemove={onHandleRemove}
          style={{ display: searchState.length ? "block" : "none", opacity: searchState.length ? "1" : "0"}}
        />
      ))}
      </div>
    </animated.div>
  );
}

export default Home;
