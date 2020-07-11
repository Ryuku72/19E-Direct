import React, { useState, useEffect } from "react";
import Data from "../company.json";
import Button from "../components/Button/Button";
import List from "../components/List/List";
import Number from "../components/Number/Number";
import Filter from "../utils/filter";
import { useSpring, animated } from "react-spring";

const departArray = Data.map((result) => {
  return result.department;
});
const departments = [...new Set(departArray)];

const managerArray = Data.map((result) => {
  return result.manager;
});
const managers = [...new Set(managerArray)];

const employeesByDepartment = Data.reduce((acc, result) => {
  acc[result.department] = acc[result.department] + 1 || 1;
  return acc;
}, {});

const employeeNumber = Object.keys(employeesByDepartment).map(function (key) {
  return [employeesByDepartment[key]];
});

const employeeNumberArray = employeeNumber.reduce(
  (acc, it) => [...acc, ...it],
  []
);

const salaryArray = [];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
function average(array) {
  return array.reduce(reducer) / array.length;
}

const dep1 = "Common";
const commonArray = Data.filter((item) => {
  return Object.keys(item).some((key) => item[key].includes(dep1));
}).map((result) => {
  return parseInt(result.salary, 10);
});
salaryArray.push(average(commonArray).toFixed(0));

const dep2 = "Marketing";
const markArray = Data.filter((item) => {
  return Object.keys(item).some((key) => item[key].includes(dep2));
}).map((result) => {
  return parseInt(result.salary, 10);
});
salaryArray.push(average(markArray).toFixed(0));

const dep3 = "Legal";
const legalArray = Data.filter((item) => {
  return Object.keys(item).some((key) => item[key].includes(dep3));
}).map((result) => {
  return parseInt(result.salary, 10);
});
salaryArray.push(average(legalArray).toFixed(0));

const dep4 = "Research and Development";
const rndArray = Data.filter((item) => {
  return Object.keys(item).some((key) => item[key].includes(dep4));
}).map((result) => {
  return parseInt(result.salary, 10);
});
salaryArray.push(average(rndArray).toFixed(0));

const dep5 = "Information Technology";
const itArray = Data.filter((item) => {
  return Object.keys(item).some((key) => item[key].includes(dep5));
}).map((result) => {
  return parseInt(result.salary, 10);
});
salaryArray.push(average(itArray).toFixed(0));

const dep6 = "Enquiries";
const enqArray = Data.filter((item) => {
  return Object.keys(item).some((key) => item[key].includes(dep6));
}).map((result) => {
  return parseInt(result.salary, 10);
});
salaryArray.push(average(enqArray).toFixed(0));

const dep7 = "Security";
const secArray = Data.filter((item) => {
  return Object.keys(item).some((key) => item[key].includes(dep7));
}).map((result) => {
  return parseInt(result.salary, 10);
});
salaryArray.push(average(secArray).toFixed(0));

//console.log(salaryArray)

const departmentArray = [];

for (let i = 0; i < departments.length; i++) {
  departmentArray[i] = {
    name: departments[i],
    number: employeeNumberArray[i],
    manager: managers[i],
    salary: JSON.parse(salaryArray[i]),
  };
}

function Departments() {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
  });

  const initialState = {
    department: departmentArray,
    sort: "Sort By",
    order: "Order By",
  };

  const [state, setSearchState] = useState(initialState);
  const [toggled, setToggled] = useState({
    department: false,
    employees: false,
    manager: false,
    salary: false,
  });

  const [toggledTwo, setToggledTwo] = useState({
    ascend: false,
    descend: false,
  });

  useEffect(() => {
    if (
      (state.sort === "Sort By" && state.order === "Department") ||
      (state.sort === "Ascend" && state.order === "Department") ||
      (state.sort === "Ascend" && state.order === "Order By")
    ) {
      let repArray = departmentArray.sort(Filter.compareValues("name"));
      setSearchState({ ...state, department: repArray });
    } else if (
      (state.sort === "Descend" && state.order === "Department") ||
      (state.sort === "Descend" && state.order === "Order By")
    ) {
      let repArray = departmentArray.sort(Filter.compareValues("name", "desc"));
      setSearchState({ ...state, department: repArray });
    } else if (
      (state.sort === "Sort By" && state.order === "Employees") ||
      (state.sort === "Ascend" && state.order === "Employees")
    ) {
      let repArray = departmentArray.sort(Filter.compareValues("number"));
      setSearchState({ ...state, department: repArray });
    } else if (state.sort === "Descend" && state.order === "Employees") {
      let repArray = departmentArray.sort(
        Filter.compareValues("number", "desc")
      );
      setSearchState({ ...state, department: repArray });
    } else if (
      (state.sort === "Sort By" && state.order === "Manager") ||
      (state.sort === "Ascend" && state.order === "Manager")
    ) {
      let repArray = departmentArray.sort(Filter.compareValues("manager"));
      setSearchState({ ...state, department: repArray });
    } else if (state.sort === "Descend" && state.order === "Manager") {
      let repArray = departmentArray.sort(
        Filter.compareValues("manager", "desc")
      );
      setSearchState({ ...state, department: repArray });
    } else if (
      (state.sort === "Sort By" && state.order === "Salary") ||
      (state.sort === "Ascend" && state.order === "Salary")
    ) {
      let repArray = departmentArray.sort(Filter.compareValues("salary"));
      setSearchState({ ...state, department: repArray });
    } else {
      let repArray = departmentArray.sort(
        Filter.compareValues("salary", "desc")
      );
      setSearchState({ ...state, department: repArray });
    }
  }, [state.sort, state.order]);

  function onHandleSort(event) {
    event.preventDefault();

    setSearchState({ ...state, sort: event.target.name });
    if (event.target.name === "Descend") {
      setToggledTwo({ descend: !false });
    }
    if (event.target.name === "Ascend") {
      setToggledTwo({ ascend: !false });
    }
  }

  function clearForm() {
    document.getElementById("create-course-form").reset();
    setSearchState(initialState);
    setToggled(false);
    setToggledTwo(false);
  }

  function onHandleOrder(event) {
    event.preventDefault();
    console.log(event.target.name);

    setSearchState({ ...state, order: event.target.name });
    if (event.target.name === "Department") {
      setToggled({ department: !false });
    }
    if (event.target.name === "Employees") {
      setToggled({ employees: !false });
    }
    if (event.target.name === "Manager") {
      setToggled({ manager: !false });
    }
    if (event.target.name === "Salary") {
      setToggled({ salary: !false });
    }
  }

  return (
    <animated.div className="mb-2" style={fade}>
      <div className="border-gray-600 border-b-2">
        <h1 className="text-3xl font-mono">
          {"//"}DEPARTMENTS: {departmentArray.length}
        </h1>
        <div className="flex w-full z-20">
          <form
            id="create-course-form"
            className="w-full inline-flex justify-end pb-2"
          >
            <Button style={{ backgroundColor: "#90cdf4" }} title={state.order}>
              <ul className="dropdown-menu absolute pt-2 z-50">
                <li>
                  <a
                    href="/"
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="Department"
                    onClick={onHandleOrder}
                    style={{
                      color: toggled.department ? "#f56565" : "#4a5568",
                    }}
                  >
                    <i className="far fa-building mx-2" name="Department"></i>
                    Department
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={onHandleOrder}
                    name="Employees"
                    style={{ color: toggled.employees ? "#f56565" : "#4a5568" }}
                  >
                    <i
                      className="fas fas fa-user-cog mx-2"
                      name="Employees"
                    ></i>
                    Employees
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={onHandleOrder}
                    name="Manager"
                    style={{ color: toggled.manager ? "#f56565" : "#4a5568" }}
                  >
                    <i className="fas fa-user-tie mx-2" name="Manager"></i>
                    Manager
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={onHandleOrder}
                    name="Salary"
                    style={{ color: toggled.salary ? "#f56565" : "#4a5568" }}
                  >
                    <i className="fas fa-wallet mx-2" name="Salary"></i>Salary
                  </a>
                </li>
              </ul>
            </Button>
            <Button style={{ backgroundColor: "#a0aec0" }} title={state.sort}>
              <ul className="dropdown-menu absolute  pt-2 z-50">
                <li>
                  <a
                    href="/"
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={onHandleSort}
                    name="Ascend"
                    style={{ color: toggledTwo.ascend ? "#f56565" : "#4a5568" }}
                  >
                    <i
                      className="fas fa-arrow-up mx-2"
                      aria-hidden="true"
                      name="Ascend"
                    ></i>
                    Ascend
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={onHandleSort}
                    name="Descend"
                    style={{
                      color: toggledTwo.descend ? "#f56565" : "#4a5568",
                    }}
                  >
                    <i
                      className="fas fa-arrow-down mx-2"
                      aria-hidden="true"
                      name="Descend"
                    ></i>
                    Descend
                  </a>
                </li>
              </ul>
            </Button>
            <button
              type="reset"
              onClick={clearForm}
              className="mr-2 w-32 bg-purple-300 text-gray-700 font-semibold text- py-2 px-4 rounded inline-block items-center"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
      <div>
        {state.department.map((result) => (
          <List key={result.name}>
            <h1>
              <strong>Department:</strong> {result.name}
            </h1>
            <p>
              <strong>Employees:</strong> {result.number}
            </p>
            <p>
              <strong>Manager:</strong> {result.manager}
            </p>
            <p>
              <strong>Avg. Salary:</strong> <Number value={result.salary} />
            </p>
          </List>
        ))}
      </div>
    </animated.div>
  );
}

export default Departments;