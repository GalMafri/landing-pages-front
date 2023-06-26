// Defining a function called Validation
const Validation = function (name, value) {
  // If the name parameter is "email", return whether the value parameter matches the regular expression for an email address
  if (name === "email") {
    return {
      status: /.+@.+\.[A-Za-z]+$/.test(value),
      msg: "Invalid Email",
    };
  }

  // If the name parameter is "password" or "username", return whether the value parameter has a length greater than or equal to 1
  if (name === "password" || name === "fullName" || name === "confirmPassword") {
    return {
      status: value.length >= 5,
      msg: "Invalid " + name,
    };
  }
  // Otherwise, return true (i.e., validation is not required for the specified name parameter)
  else
    return {
      status: true,
    };
};

// Exporting the Validation function as the default export of the module
export default Validation;
