import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductItem from "./components/ProductItem";
import Navbar from "./Navbar";

const RouteConfig = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/product/:id" component={ProductItem} />
          <Route path="*" component={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouteConfig;
