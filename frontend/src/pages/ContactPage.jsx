import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Map from "../components/Map/Map";
import "./form.css";

const ContactScreen = () => {
  /*useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. 
    If you pass a ref object to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM node whenever that node changes.*/
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault() /*Prevents page from reloading once email is sent*/;
    emailjs
      .sendForm(
        "service_wovwx47",
        "template_fjuaifc",
        form.current,
        "9EFMMNwkoGjGFwC1p"
      )
      .then(
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );
    e.target.reset(); /*clears form once sent*/
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} /*triggers sendEmail function*/>
        <div className="contact-container">
          <div className="contact-box">
            <div className="left"> </div>
            <div className="right">
              <h2>Contact Us</h2>
              <label>Name</label>
              <input
                type="text"
                className="field"
                placeholder="name"
                name="user_name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                className="field"
                placeholder="email"
                name="user_email"
                required
              />
              <label>Message</label>
              <input
                type="text"
                className="field area"
                placeholder="How Can We Help?"
                name="message"
                required
              />
              <button className="btn" type="submit" value="Send">
                {" "}
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
      <Map />
    </div>
  );
};
export default ContactScreen;
