import React, {useState} from "react";
import Home from "./pages/Home";
import Card from "./components/Card/Card"
import Footer from "./components/Footer/Footer"
import Wrapper from "./components/Wrapper/Wrapper";
import data from "./company.json"

function App() {

  const [developerState] = useState(data);

  return (
      <div>
        <Wrapper>
          <Home />
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
        <Footer />
        </Wrapper>
      </div>
  );
}

export default App;
