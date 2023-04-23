// Defining a function called Validation
const Validation = function (name, value) {
  // If the name parameter is "email", return whether the value parameter matches the regular expression for an email address
  if (name === "email") return /.+@.+\.[A-Za-z]+$/.test(value);

  // If the name parameter is "password" or "username", return whether the value parameter has a length greater than or equal to 1
  if (name === "password" || name === "username") return value.length >= 1;
  // Otherwise, return true (i.e., validation is not required for the specified name parameter)
  else return true;
};

// Exporting the Validation function as the default export of the module
export default Validation;
