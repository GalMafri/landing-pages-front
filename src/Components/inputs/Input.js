import { useState, memo, Fragment } from "react";
import Validation from "./../../functions/Validation";

import "./Input.scss";

// Defining a functional component named Input
const Input = function (props) {
  // Initializing state variables with the useState hook
  const [isTouchClass, setIsTouchClass] = useState(false); // Tracks whether the input label has been touched or not
  const [isError, setIsError] = useState(false); // Tracks whether the input has an error or not
  const [error, setError] = useState(false); // Tracks whether the input has an error or not

  // Function that checks whether the input label has been touched or not, and whether there is an error or not
  const checkIfIsTouch = function (event) {
    // Invoking the Validation function to check for errors and updating the isError state variable accordingly
    if (Validation(event.target.name, event.target.value).status) {
      setIsError(false); // No error
      setError(false);
    } else {
      setIsError("error-border"); // There's an error
      setError(Validation(event.target.name, event.target.value).msg);
    }

    // Updating the isTouchClass state variable if the input value has changed
    if (event.target.value.length > 0) {
      setIsTouchClass("input_lableTouch"); // Label has been touched
      return;
    }
    setIsTouchClass(false); // Label has not been touched
  };

  // Rendering the input and label elements
  return (
    <Fragment>
      <div className="input">
        <input
          name={props.name}
          className={"input_type " + isError}
          type={props.type}
          onKeyUp={checkIfIsTouch}
          onChange={props.change}
          required={Boolean(props.req)}
        ></input>
        <label className={"input_text " + isTouchClass}>{props.labelText}</label>
      </div>
    </Fragment>
  );
};

// Exporting the Input component with memoization for performance optimization
export default memo(Input);
