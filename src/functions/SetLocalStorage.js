// Defining a function called SetLocalStorage
const SetLocalStorage = function (name, data) {
  // Serializing the data as JSON and storing it in local storage with the specified key
  localStorage.setItem(name, JSON.stringify(data));
};

// Exporting the SetLocalStorage function as the default export of the module
export default SetLocalStorage;
