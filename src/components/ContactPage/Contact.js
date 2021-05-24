import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="col-10 mx-auto col-6 my-3">
        <Title title="Contact us" />
        <form
          action="http://formspree.io/kushalkattel0@gmail.com"
          style={{ marginTop: "5px" }}
          method="POST"
        >
          {/*first*/}
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="Joe Baker"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="email@email.com"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="important!!!"
              className="form-control"
            />
          </div>

          {/*message*/}

          <div className="form">
            <textarea
              name="message"
              className="form-control"
              rows="10"
              placeholder="hello there.."
            ></textarea>
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              value="'Send"
              className="form-control bg-primary textx-white"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
