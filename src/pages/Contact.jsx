import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
    <Navbar />

    <div className="container">

{/* Contact us Cover Page start*/}

<div className="container-fluid bg-success mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: '300px'}}>
          <h1 className="font-weight-semi-bold text-uppercase mb-3">Contact Us</h1>
          <div className="d-inline-flex">
            <p className="m-0 text-danger">
            <Link to={"/"}>     {" "} Home {" "}     </Link>
      </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Contact</p>
          </div>
        </div>
      </div>

{/* Contact us Cover Page end */}


      <div className="row px-xl-5">
        <div className="col-lg-7 mb-5">
          <div className="contact-form">
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <textarea
                  className="form-control"
                  rows={6}
                  id="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                  defaultValue={""}
                />
                <p className="help-block text-danger" />
              </div>
              <div>
                <button
                  className="btn btn-primary py-2 px-4"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 mb-5">
          <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
          <p>
            Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed
            duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat
            clita ipsum justo sed.
          </p>
          <div className="d-flex flex-column mb-3">
            <h5 className="font-weight-semi-bold mb-3">Store </h5>
            <p className="mb-2 pr-3">
              <i className="fa fa-map-marker-alt text-primary" />
              Pakistan, Postal Code 47040
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3" />
              akashrizi308@gmail.com
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-primary mr-3" />
              + 92 307 5093029
            </p>
          </div>
         
        </div>
      </div>

      <Link to={"/"}>
        {" "}
        <button className="btn btn-success"> GO Back </button>{" "}
      </Link>
    </div>
    </>
  );
}

export default Contact;
