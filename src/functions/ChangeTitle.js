// Change the page title
const ChangeTitle = (title) => {
  if (title) document.title = title + " | " + process.env.REACT_APP_Name;
  else document.title = process.env.REACT_APP_Name;
};

// Exporting the ChangeTitle function as the default export of the module
export default ChangeTitle;
