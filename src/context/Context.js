import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./SocialData";
import { items } from "./productData";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: socialData,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false,
  };

  componentDidMount() {
    //from Contentful items
    this.setProducts(items);
  }

  //set products method
  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    //featured products
    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false,
    });
  };

  //get cart from local storage
  getStorageCart = () => {
    return [];
  };

  //get product  from local storage
  getStorageProduct = () => {
    return {};
  };

  //get total
  getTotal = () => {};

  //add total
  addTotal = () => {};

  //sync storage
  syncStorage = () => {};

  //add to cart
  addToCart = (id) => {
    console.log(`add to cart ${id}`);
  };

  //set single product
  setSingleProduct = (id) => {
    console.log9(`set single product ${id}`);
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
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
        }}
      >
        {this.props.children}{" "}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductConsumer, ProductProvider };
