// Defining a function called FixTitle
const FixTitle = (name) => {
  // Using the replaceAll method to replace various HTML entities with their corresponding characters
  // and returning the modified string
  return name
    .replaceAll("&#8211;", "-")
    .replaceAll("&#8217;", "'")
    .replaceAll("&#8216;", "'")
    .replaceAll("&#038;", "&")
    .replaceAll("&#8220;", '"')
    .replaceAll("&#8221;", '"');
};

// Exporting the FixTitle function as the default export of the module
export default FixTitle;
