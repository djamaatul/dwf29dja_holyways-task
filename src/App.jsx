import React from "react";
import Header from "./components/Header"
import Login from "./components/Login";
import Register from "./components/Register";
import ModalComponent from "./components/ModalComponent";
import Modalapprove from "./components/ModalApprove"
import Cards from "./components/Cards"
import List from "./components/List";
import History from './components/History'
import Dashboard from "./routes/Dashboard";

import pic1 from './assets/horizontal1.svg'

const App = () => {
  return (
    <div>
      <Dashboard />
      {/* <Header /> */}
      {/* <List total="2000" name="dika" day="Monday" date="2 mei 2001" /> */}
      {/* <History total="2000" donateTo="Fakir miskin" date={{day:"kamis",date:"20 mei 2001"}} view="s" /> */}
      {/* <List total="2000" name="dika" day="Monday" date="2 mei 2001" /> */}
      {/* <Cards title="siap" p="lorem ipsum" src={pic1} /> */}
      {/* <Modalapprove /> */}
      {/* <ModalComponent /> */}
      {/* <Login />
      <Register /> */}
    </div>
  );
};

export default App;
