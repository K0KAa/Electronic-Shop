import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div>
            <Title title="about us" center="something" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "1rem",
              }}
            >
              <img
                src={aboutBcg}
                alt="about company"
                className="img-fluid img-thumbnail"
                style={{
                  background: "var(--darkGrey)",
                  width: "17rem",
                  height: "15rem",
                  display: "inline-block",
                  placeItems: "center",
                }}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                padding: "1rem",
                color: "grey",
                margin: "3rem 0rem 3rem 0rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                rerum, officia dolor reprehenderit quisquam similique laboriosam
                nesciunt odit natus atque!
              </p>
              <button
                className="main-link"
                style={{ display: "inline-block", margin: "2rem auto" }}
              >
                more info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>Info component</div>
    </section>
  );
}
