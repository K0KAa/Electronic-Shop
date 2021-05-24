import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max>
        <Link to="/products" className="main-link" style={{ margin: "2px" }}>
          Our Products
        </Link>
      </Hero>
    </>
  );
}
