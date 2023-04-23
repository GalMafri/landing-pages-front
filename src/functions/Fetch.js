// Defining an asynchronous function called Fetch
const Fetch = async function (url, options = {}) {
  try {
    // Using the fetch API to make a request to the specified URL with the given options
    const call = await fetch(url, options);
    // Parsing the response body as JSON and returning it
    const response = await call.json();
    return response;
  } catch (err) {
    // Logging any errors that occur
    console.log(err);
    // return the error state
    return err;
  }
};

// Exporting the Fetch function as the default export of the module
export default Fetch;
