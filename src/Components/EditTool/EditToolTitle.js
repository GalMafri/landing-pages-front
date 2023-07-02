import { Fragment, useEffect, useState } from "react";
import "./EditTool.scss";

const EditToolTitle = ({ handler, style, id, editText, elements }) => {
  const element = `#${id}`;
  const currentElement = elements.find((item) => item.id === id);
  const [maxWidth, setMaxWidth] = useState(false);
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

  useEffect(() => {
    if (elementStyle && elementStyle["max-width"] && elementStyle["max-width"].trim().length > 0) setMaxWidth(elementStyle["max-width"]);
  }, [elementStyle]);

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

      {/* text align */}
      <div className="editToolColumn">
        <label className="editTool_text">Text Align:</label>
        <select
          className="editTool_select"
          type="url"
          name="text-align"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["text-align"] ? elementStyle["text-align"] : "left"}
        >
          <option value="center">center</option>
          <option value="left">left</option>
          <option value="right">right</option>
        </select>
      </div>

      {/* max width */}
      <div className="editToolColumn">
        <label className="editTool_text">Max Width: (Pixels)</label>
        <input
          className="editTool_number"
          type="number"
          name="max-width"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["max-width"]) || ""}
        />
      </div>

      {/* center element wrapper */}
      {maxWidth && (
        <div className="editToolColumn">
          <label className="editTool_text">Center Element:</label>
          <select
            className="editTool_select"
            type="url"
            name="center-element"
            onChange={EditStyleHandler}
            defaultValue={elementStyle && elementStyle["center-element"] ? elementStyle["center-element"] : ""}
          >
            <option value="none">None</option>
            <option value="center">Center</option>
          </select>
        </div>
      )}

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

      {/* padding */}
      <div className="editToolColumn">
        <label className="editTool_text">Padding Top:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-top"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["padding-top"]) || ""}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Bottom:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-bottom"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["padding-bottom"]) || ""}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Left:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-left"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["padding-left"]) || ""}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Right:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-right"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["padding-right"]) || ""}
        />
      </div>

      {/* margin */}
      <div className="editToolColumn">
        <label className="editTool_text">Margin Top:</label>
        <input
          className="editTool_number"
          type="number"
          name="margin-top"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["margin-top"]) || ""}
        />
      </div>

      <div className="editToolColumn">
        <label className="editTool_text">Margin Bottom:</label>
        <input
          className="editTool_number"
          type="number"
          name="margin-bottom"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["margin-bottom"]) || ""}
        />
      </div>

      {elementStyle["center-element"] !== "center" && (
        <Fragment>
          <div className="editToolColumn">
            <label className="editTool_text">Margin Left:</label>
            <input
              className="editTool_number"
              type="number"
              name="margin-left"
              onChange={EditStyleHandler}
              defaultValue={(elementStyle && elementStyle["margin-left"]) || ""}
            />
          </div>
          <div className="editToolColumn">
            <label className="editTool_text">Margin Right:</label>
            <input
              className="editTool_number"
              type="number"
              name="margin-right"
              onChange={EditStyleHandler}
              defaultValue={(elementStyle && elementStyle["margin-right"]) || ""}
            />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default EditToolTitle;
