import "./App.css";
import React, { Component } from "react";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Default from "./pages/Default";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        {/* navbar,sidebar,cart,footer */}
        <Navbar />
        <Sidebar />
        <SideCart />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/product:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}
