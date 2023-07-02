import { Fragment } from "react";
import "./EditTool.scss";

const EditToolSpan = ({ handler, style, id, editText, elements }) => {
  const element = `#${id}`;
  const currentElement = elements.find((item) => item.id === id);
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
      <h3 className="editTool_title">{currentElement.tag}</h3>
      {/* Edit text */}
      <div className="editToolColumn">
        <label className="editTool_text">Text:</label>
        <input
          className="editTool_number"
          type="text"
          name="padding-top"
          onChange={(event) => editText(id, event.target.value)}
          defaultValue={currentElement && currentElement.text}
        />
      </div>

      {/* defualt text color */}
      <div className="editTool">
        <label className="editTool_text">Text Color:</label>
        <input
          className="editTool_input"
          type="color"
          name="color"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["color"]) || ""}
        />
      </div>

      {/* font size */}
      <div className="editToolColumn">
        <label className="editTool_text">Font Size:</label>
        <input
          className="editTool_number"
          type="number"
          name="font-size"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["font-size"]) || ""}
        />
      </div>

      {/* font wight */}
      <div className="editToolColumn">
        <label className="editTool_text">Font Weight:</label>
        <select
          className="editTool_select"
          type="url"
          name="font-weight"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["font-weight"] ? elementStyle["font-weight"] : "700"}
        >
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option value="600">600</option>
          <option value="700">700</option>
          <option value="800">800</option>
          <option value="900">900</option>
        </select>
      </div>
    </Fragment>
  );
};

export default EditToolSpan;
