import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Map from "../components/Map/Map";

const ContactScreen = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
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
    e.target.reset();
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <input type="text" name="message" />
        <input type="submit" value="Send" />
      </form>
      <Map />
    </>
  );
};
export default ContactScreen;
