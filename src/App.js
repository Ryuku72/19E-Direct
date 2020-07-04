import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Roles from "./pages/Roles";
import Employees from "./pages/Employees";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Wrapper from "./components/Wrapper/Wrapper";


function App() {
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
        </Wrapper>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
