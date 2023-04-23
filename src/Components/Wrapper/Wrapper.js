// The main wrapper in the project

import "./Wrapper.scss";

const Wrapper = (props) => {
  return <div className={"wrapper " + props.classProps}>{props.children}</div>;
};

export default Wrapper;
