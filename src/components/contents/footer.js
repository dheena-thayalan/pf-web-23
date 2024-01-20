/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import InputTextArea from "../ui/inputbox";
import Button from "../ui/button";
import DataHelper from "../../utils/DataHelper";
import Media from "../ui/socialmedia/index";
import location from "../../assets/images/location.svg";
import email from "../../assets/images/email.svg";
import phone from "../../assets/images/phone.svg";
import { biography } from "../../utils/biography";

export const defaultFormKey = {
  name: "",
  email: "",
  mob: "",
  msg: "",
};

const keyLabel = {
  name: "Name",
  email: "Email",
  mob: "Mobile No",
  msg: "Message",
};

const Footer = () => {
  const [form, setForm] = useState(defaultFormKey);
  const [validation, setValidation] = useState(defaultFormKey);

  // eslint-disable-next-line no-shadow
  const everyCheck = (form, func) =>
    Object.entries(form).every(([key, value]) => func(key, value));

  const sendEmail = (e) => {
    const isValueLengthGreaterThan2 = (key, value) => value.length > 2;
    const isValueValidationCheck = (key, value) => Boolean(!value);
    if (everyCheck(form, isValueLengthGreaterThan2) && isValueValidationCheck) {
      DataHelper.sendEmail(form);
      setForm(defaultFormKey);
      e.Stoppropagation();
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e?.target?.name]: e?.target?.value || "" });
    e.Stoppropagation();
  };

  const handleValidation = (value, key) => {
    setValidation({ ...validation, [key]: value });
  };

  return (
      <section id="contact" className="footer-continuer">
        <Row>
          <Col md={6}>
            <div className="footer-heading">
              <h3>Get in touch</h3>
              <h4>Let's talk with me</h4>
            </div>
            {Object.entries(form).map(([key, value], index) => (
              <InputTextArea
                // label={key.toUpperCase()}
                mode={key === "msg" ? "textarea" : "text"}
                type={key === "email" ? "email" : "text"}
                placeholder={`Enter your ${keyLabel[key]}`}
                value={value || ""}
                name={key}
                key={index}
                validation={(vl) => handleValidation(vl, key)}
                onChange={(e)=>handleInputChange(e)}
                className="custom-input"
                maxLength={50}
              />
            ))}
            <div className="email-send-box">
              <Button
                label="Send"
                className="send-btn"
                type="button"
                onClick={(e) => sendEmail(e)}
              />
            </div>
          </Col>
          <Col md={6}>
            <h3>Do you want to collaborate with me?</h3>
            <h4>We can work together to build more awesome things.</h4>
            <div className="personal-info">
              {/* <div> */}
              <div className="phone">
               <h4>Phone</h4>
                <a href={`tel:${biography?.mobile_no}`}>
                <img src={phone} />
                <h5>{biography?.mobile_no||""}</h5>
                </a>
              </div>
              <div className="email">
                <h4>Email</h4>
                <a href={`mailto:${biography?.email||""}`}>
                  <img src={email} />
                   <h5>{biography?.email||""}</h5>
                </a>
              </div>
              <div className="location">
                <img src={location} />
                <h4>{biography?.location||""}</h4>
              </div>
              <Media />
              {/* </div> */}
            </div>
          </Col>
        </Row>
      </section>
  );
};

export default Footer;
