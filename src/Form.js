import React, { useState, link } from "react";
import "./Css/Form.css";
import whiteLogo from "./images/availityWhite.jpeg";
import useForm from "./useForm";
import validate from "./ValidateForm";

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="formContainer">
      <div className="info1">
        <h1>Hello Provider,</h1>
        <h1>Register Here</h1>
        <p>
          Already have an Account? <a href={"#"}>Click Here</a>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="formLogo">
          <h1>Create Your Account</h1>
          <img src={whiteLogo}></img>
        </div>

        <div className="inputs">
          <div className="name">
            <div>
              <label>First Name:</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={values.firstName}
                onChange={handleChange}
              ></input>
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div>
              <label>Last Name:</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
              ></input>
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>

            <div>
              <label>Email Address:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={values.email}
                onChange={handleChange}
              ></input>
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
              <label>Confrim Email:</label>
              <input
                id="confirmEmail"
                type="email"
                name="confirmEmail"
                placeholder="Confirm Email"
                value={values.confirmEmail}
                onChange={handleChange}
              ></input>
              {errors.confirmEmail && <p>{errors.confirmEmail}</p>}
            </div>

            <div>
              <label>Phone Number:</label>
              <input
                id="phoneNumber"
                type="tel"
                name="phoneNumber"
                placeholder="Phone #"
                value={values.phoneNumber}
                onChange={handleChange}
              ></input>
              {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            </div>
          </div>

          <div className="location">
            <div>
              <label>Business Address:</label>
              <input
                id="street"
                type="text"
                name="street"
                className="street"
                placeholder="Street Address"
                value={values.street}
                onChange={handleChange}
              ></input>
              {errors.street && <p>{errors.street}</p>}
            </div>

            <div>
              <label>City:</label>
              <input
                id="city"
                type="text"
                name="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
              ></input>
              {errors.city && <p>{errors.city}</p>}
            </div>

            <div>
              <label>State:</label>
              <input
                id="state"
                type="text"
                name="state"
                placeholder="State"
                value={values.state}
                onChange={handleChange}
              ></input>
              {errors.state && <p>{errors.state}</p>}
            </div>

            <div>
              <label>Zip Code:</label>
              <input
                id="zipCode"
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={values.zipCode}
                onChange={handleChange}
              ></input>
              {errors.zipCode && <p>{errors.zipCode}</p>}
            </div>

            <div>
              <label>Suite:</label>
              <input
                id="ste"
                type="text"
                name="ste"
                placeholder="Suite?"
                value={values.ste}
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="npi">
            <div>
              <label>National Provider Identifier:</label>
              <input
                id="npinum"
                type="tel"
                name="npinum"
                placeholder="NPI #"
                value={values.npinum}
                onChange={handleChange}
              ></input>
              {errors.npinum && <p>{errors.npinum}</p>}
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
      <div className="info2">
        <p>Protect your information.</p>
        <p>Don't share your user ID or password.</p>
        <p>
          We need your email address to validate your account and send you
          temporary passwords.
        </p>
      </div>
    </div>
  );
};

export default Form;
