import { Fragment, useEffect, useState } from "react";
import "./EditTool.scss";

const EditToolTitle = ({ handler, style, id }) => {
  const element = `#${id}`;
  let elementStyle = false;

  for (const key in style) {
    if (key === element) {
      elementStyle = style[key];
      break;
    }
  }

  const EditStyleHandler = (event) => {
    handler(event.target.value, event.target.name, element);
  };

  return (
    <Fragment>
      {/* defualt text color */}
      <div className="editTool">
        <label className="editTool_text">Text Color:</label>
        <input className="editTool_input" type="color" name="color" onChange={EditStyleHandler} />
      </div>

      {/* padding */}
      <div className="editToolColumn">
        <label className="editTool_text">Padding Top:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-top"
          onChange={EditStyleHandler}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Bottom:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-bottom"
          onChange={EditStyleHandler}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Left:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-left"
          onChange={EditStyleHandler}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Right:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-right"
          onChange={EditStyleHandler}
        />
      </div>

      {/* margin */}
      <div className="editToolColumn">
        <label className="editTool_text">Margin Left:</label>
        <input
          className="editTool_number"
          type="number"
          name="margin-left"
          onChange={EditStyleHandler}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Margin Right:</label>
        <input
          className="editTool_number"
          type="number"
          name="margin-right"
          onChange={EditStyleHandler}
        />
      </div>
    </Fragment>
  );
};

export default EditToolTitle;
