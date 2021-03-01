import React from "react";
import "./App.css";
import NavBarItem from "./Component/NavBarItem";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Component/Home";
import "./index.css";
import Products from "./Component/Products";
import AboutUs from "./Component/AboutUs";
import FloatingButton from "./Component/FloatingButton";
import ContactUs from "./Component/ContactUs";

function App() {
  return (
    <div className="App">
      <FloatingButton></FloatingButton>
      <NavBarItem></NavBarItem>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about_us" component={AboutUs} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact_us" component={ContactUs} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;
