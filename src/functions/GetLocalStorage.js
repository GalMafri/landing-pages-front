// Defining a function called GetLocalStorage
const GetLocalStorage = function (name) {
  // Retrieving the value of the specified key from local storage and parsing it as JSON
  // before returning it
  return JSON.parse(localStorage.getItem(name));
};

// Exporting the GetLocalStorage function as the default export of the module
export default GetLocalStorage;
