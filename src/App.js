import React, {useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Roles from "./pages/Roles";
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar/Navbar"
import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import Wrapper from "./components/Wrapper/Wrapper";
import data from "./company.json"

function App() {
  const [developerState] = useState(data);
  return (
    <Router>
      <div>
          <Navbar />
        <Wrapper> 
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/roles" component={Roles} />
          <Route exact path="/employees" component={Employees} />
          {developerState.map(result => (
            <Card
            key={result.name}
            name={result.name}
            department={result.department}
            role={result.role}
            manager={result.manager}
            salary={result.salary}
            email={result.email}
          />
          ))}
        </Wrapper>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
