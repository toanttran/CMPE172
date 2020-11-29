import React,{useState} from "react";
import AddFlight from "./Components/AddFlight";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./Components/Table";
import Analytic from "./Components/analytic";
import someContexts from "./Components/makeContext";

function App() {
  const [numberFlight,setNumber]=useState([]);
  return (
    <Router>
      <someContexts.Provider value={{numberFlight,setNumber}}>
        <Route exact path="/" component={Table} />
        <Route path="/addFlight" component={AddFlight} />
        <Route path="/analytic" component={Analytic} />
      </someContexts.Provider>
     </Router>
  );
}

export default App;
