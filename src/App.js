import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer"
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
      <div>
        <Wrapper>
          <Home />
        </Wrapper>
        <Footer />
      </div>
  );
}

export default App;
