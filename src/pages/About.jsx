import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
    <div className="container">
      <h1>About Page</h1>
      <section id="about" className="py-5">
        <div className="container">
          <div className="row gy-lg-5 align-items-center">
            <div className="col-lg-6 order-lg-1 text-center text-lg-start">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block ms-4">
                  About Us
                </h2>
              </div>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                ipsam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem fuga blanditiis, modi exercitationem quae quam
                eveniet! Minus labore voluptatibus corporis recusandae
                accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.
              </p>
            </div>
            <div className="col-lg-6 order-lg-0">
              <img src="./images/about us 1.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default About;
