import { Fragment, useEffect, useState } from "react";
import "./EditTool.scss";

const EditToolLink = ({ handler, style, id, editText, elements }) => {
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
    if (elementStyle && elementStyle["max-width"] && elementStyle["max-width"].trim().length > 0)
      setMaxWidth(elementStyle["max-width"]);
    else setMaxWidth(false);
  }, [elementStyle, style]);

  if (!currentElement) return;

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

      {/* Url */}
      <div className="editToolColumn">
        <label className="editTool_text">Url:</label>
        <input
          className="editTool_number"
          type="text"
          name="href"
          onChange={(event) => editText(id, event.target.value, "href")}
          defaultValue={currentElement && currentElement.href}
        />
      </div>

      {/* target */}
      <div className="editToolColumn">
        <label className="editTool_text">Target:</label>
        <select
          className="editTool_select"
          type="url"
          name="target"
          onChange={(event) => editText(id, event.target.value, "target")}
          defaultValue={currentElement && currentElement.target}
        >
          <option value="none">None</option>
          <option value="_blank">New tab</option>
        </select>
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

      {/* background color */}
      <div className="editTool">
        <label className="editTool_text">Background Color:</label>
        <input
          className="editTool_input"
          type="color"
          name="background-color"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["background-color"]) || ""}
        />
      </div>

      {/* border color */}
      <div className="editTool">
        <label className="editTool_text">Border Color:</label>
        <input
          className="editTool_input"
          type="color"
          name="border-color"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["border-color"]) || ""}
        />
      </div>

      {/* border */}
      <div className="editToolColumn">
        <label className="editTool_text">Border:</label>
        <input
          className="editTool_number"
          type="number"
          name="border"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["border"]) || ""}
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
        <label className="editTool_text">Text Decoration:</label>
        <select
          className="editTool_select"
          type="url"
          name="text-decoration"
          onChange={EditStyleHandler}
          defaultValue={
            elementStyle && elementStyle["text-decoration"]
              ? elementStyle["text-decoration"]
              : "underline"
          }
        >
          <option value="none">None</option>
          <option value="underline">Underline</option>
          <option value="overline">Overline</option>
          <option value="line-through">Line-through</option>
          <option value="underline overline">Underline Overline</option>
          <option value="underline line-through">Underline Line-through</option>
          <option value="overline line-through">Overline Line-through</option>
          <option value="underline overline line-through">Underline Overline Line-through</option>
        </select>
      </div>

      <div className="editToolColumn">
        <label className="editTool_text">Border Radius:</label>
        <input
          className="editTool_number"
          type="number"
          min={0}
          name="border-radius"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["border-radius"]) || ""}
        />
      </div>

      <div className="editToolColumn">
        <label className="editTool_text">Display:</label>
        <select
          className="editTool_select"
          type="url"
          name="display"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["display"] ? elementStyle["display"] : ""}
        >
          <option value="inline">Inline</option>
          <option value="block">Block</option>
        </select>
      </div>

      {/* font wight */}
      <div className="editToolColumn">
        <label className="editTool_text">Font Weight:</label>
        <select
          className="editTool_select"
          type="url"
          name="font-weight"
          onChange={EditStyleHandler}
          defaultValue={
            elementStyle && elementStyle["font-weight"] ? elementStyle["font-weight"] : "400"
          }
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
          min={0}
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
          min={0}
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
          min={0}
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
          min={0}
          name="padding-right"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["padding-right"]) || ""}
        />
      </div>

      {/* max width */}
      <div className="editToolColumn">
        <label className="editTool_text">Max Width: (Pixels)</label>
        <input
          className="editTool_number"
          type="number"
          min={0}
          name="max-width"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["max-width"]) || ""}
        />
      </div>

      {elementStyle && elementStyle["display"] === "block" && (
        <Fragment>
          {/* center element wrapper */}
          {maxWidth && (
            <div className="editToolColumn">
              <label className="editTool_text">Center Element:</label>
              <select
                className="editTool_select"
                type="url"
                name="center-element"
                onChange={EditStyleHandler}
                defaultValue={
                  elementStyle && elementStyle["center-element"]
                    ? elementStyle["center-element"]
                    : ""
                }
              >
                <option value="none">None</option>
                <option value="center">Center</option>
              </select>
            </div>
          )}
          {/* text align */}
          <div className="editToolColumn">
            <label className="editTool_text">Text Align:</label>
            <select
              className="editTool_select"
              type="url"
              name="text-align"
              onChange={EditStyleHandler}
              defaultValue={
                elementStyle && elementStyle["text-align"] ? elementStyle["text-align"] : "left"
              }
            >
              <option value="center">center</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
          {/* sticky */}
          <div className="editToolColumn">
            <label className="editTool_text">Sticky Left:</label>
            <input
              className="editTool_number"
              type="number"
              name="sticky-left"
              onChange={EditStyleHandler}
              defaultValue={(elementStyle && elementStyle["sticky-left"]) || ""}
            />
          </div>
          <div className="editToolColumn">
            <label className="editTool_text">Sticky Right:</label>
            <input
              className="editTool_number"
              type="number"
              name="sticky-right"
              onChange={EditStyleHandler}
              defaultValue={(elementStyle && elementStyle["sticky-right"]) || ""}
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
      )}
    </Fragment>
  );
};

export default EditToolLink;
