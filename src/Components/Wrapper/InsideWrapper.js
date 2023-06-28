import "./InsideWrapper.scss";

const InsideWrapper = (props) => {
  return <div className={"InsideWrapper " + props.classProps}>{props.children}</div>;
};

export default InsideWrapper;
