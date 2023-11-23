import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about">
      <section className="top-section"></section>

      <section className="container">
        <h1 className="aboutTitle" style={{ width: "100%" }}>
          About Us
        </h1>

        <p
          style={{
            // put a 50% width on the paragraph on screens that are 600px or larger

            "@media (max-width: 600px)": {
              width: "50%",
            },
          }}
        >
          Welcome to Zanpakto! At Zanpakto, we are passionate about bringing you
          the latest trends and styles in fashion. Our online store is your
          destination for fashion-forward clothing and accessories that embody
          your unique personality and elevate your style.
        </p>
      </section>
    </div>
  );
};

export default About;
