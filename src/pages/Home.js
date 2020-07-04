import React, {useState} from "react";
import Card from "../components/Card/Card"
import Data from "../company.json"

function Home() {
  const [search, setSearch] = useState(Data);
  function removeEmployee(key) {
    console.log(key)
    const employees = search.filter(result => result.name !== key);
    setSearch(employees);
  };
    return (
        <div>
          {search.map(result => (
            <Card
            removeEmployee={removeEmployee}
            key={result.name}
            name={result.name}
            department={result.department}
            role={result.role}
            manager={result.manager}
            salary={result.salary}
            email={result.email}
          />
          ))}
      </div>
    )
}

export default Home;
