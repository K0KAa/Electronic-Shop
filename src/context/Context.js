import React, { Component } from "react";
import { linkData } from "./linkData";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    cart: [],
  };

  // handle Sidebar
  handleSidebar = () => {
    const neg = !this.state.sidebarOpen;
    return this.setState({
      sidebarOpen: neg,
    });
  };

  //handle Cart
  handleCart = () => {
    return this.setState({
      cartOpen: !this.state.cartOpen,
    });
  };

  closeCart() {
    return this.setState({
      cartOpen: false,
    });
  }

  openCart() {
    return this.setState({
      cartOpen: true,
    });
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleCart: this.handleCart,
          handleSidebar: this.handleSidebar,
          closeCart: this.closeCart,
          cloaseCart: this.openCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
