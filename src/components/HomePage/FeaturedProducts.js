import React from "react";
import Product from "../Product";
import { Link } from "react-router-dom";
import Title from "../Title";
import { ProductConsumer } from "../../context/Context";

export default function FeaturedProducts() {
  return (
    <section className="py-5">
      <div className="container">
        {/* Title */}
        <Title title="featured products" center="true" />
        <div className="row">
          <ProductConsumer>
            {(value) => {
              const { featuredProducts } = value;
              return featuredProducts.map((item) => {
                return <Product key={item.id} product={item} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}
