// Defining a function called RemoveLocalStorage
const RemoveLocalStorage = function (name) {
  // Removing the item with the specified key from local storage
  localStorage.removeItem(name);
};

// Exporting the RemoveLocalStorage function as the default export of the module
export default RemoveLocalStorage;
