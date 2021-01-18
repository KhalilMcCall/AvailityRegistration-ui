export default function validateForm(values) {
  let errors = {};

  //First Name
  if (!values.firstName.trim()) {
    errors.firstName = "First Name Required";
  }
  //Last Name
  if (!values.lastName.trim()) {
    errors.lastName = "Last Name Required";
  }

  //Email
  if (!values.email) {
    errors.email = "Email Required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Enter a valid Email Address";
  }
  //Confirm Email
  if (!values.confirmEmail) {
    errors.confirmEmail = "Please Confirm Email";
  } else if (values.confirmEmail !== values.email) {
    errors.confirmEmail = "Email Addresses do not Match";
  }

  //Phone Number
  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone Number Required";
  } else if (
    !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
      values.phoneNumber
    )
  ) {
    errors.phoneNumber = "Enter a valid Number eg: xxx-xxx-xxxx";
  }

  //Street Address
  if (!values.street.trim()) {
    errors.street = "Street Address Required";
  }

  //City
  if (!values.city.trim()) {
    errors.city = "City Required";
  }

  //State
  if (!values.state.trim()) {
    errors.state = "State Required";
  }

  //Zip Code
  if (!values.zipCode.trim()) {
    errors.zipCode = "Zip Code Required";
  } else if (!/^\d{5}[-\s]?(?:\d{4})?$/gm.test(values.zipCode)) {
    errors.zipCode = "Enter a valid Zip Code eg: xxxxx";
  }

  //Phone Number
  if (!values.npinum.trim()) {
    errors.npinum = "NPI Number Required";
  } else if (
    !/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
      values.npinum
    )
  ) {
    errors.npinum = "Invalid NPI Number: 10 digits";
  }

  return errors;
}
