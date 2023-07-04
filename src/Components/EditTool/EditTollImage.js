import { Fragment, useEffect, useState } from "react";
import "./EditTool.scss";

const EditTollImage = ({ handler, style, id, editText, elements }) => {
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
        <label className="editTool_text">Src:</label>
        <input
          className="editTool_number"
          type="text"
          name="src"
          onChange={(event) => editText(id, event.target.value)}
          defaultValue={currentElement && currentElement.src}
        />
      </div>

      {/* width */}
      <div className="editToolColumn">
        <label className="editTool_text">Width: (Pixels)</label>
        <input
          className="editTool_number"
          type="number"
          min={0}
          name="width"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["width"]) || ""}
        />
      </div>

      {/* hight */}
      <div className="editToolColumn">
        <label className="editTool_text">Height: (Pixels)</label>
        <input
          className="editTool_number"
          type="number"
          min={0}
          name="height"
          onChange={EditStyleHandler}
          defaultValue={(elementStyle && elementStyle["height"]) || ""}
        />
      </div>

      <div className="editToolColumn">
        <label className="editTool_text">Display:</label>
        <select
          className="editTool_select"
          type="url"
          name="display"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["display"] ? elementStyle["display"] : "700"}
        >
          <option value="inline">Inline</option>
          <option value="block">Block</option>
        </select>
      </div>

      {elementStyle && elementStyle["display"] === "block" && (
        <Fragment>
          {/* center element wrapper */}
          <div className="editToolColumn">
            <label className="editTool_text">Center Element:</label>
            <select
              className="editTool_select"
              type="url"
              name="center-element"
              onChange={EditStyleHandler}
              defaultValue={
                elementStyle && elementStyle["center-element"] ? elementStyle["center-element"] : ""
              }
            >
              <option value="none">None</option>
              <option value="center">Center</option>
            </select>
          </div>
          {/* sticky */}
          <div className="editToolColumn">
            <label className="editTool_text">Sticky Left:</label>
            <input
              className="editTool_number"
              type="number"
              min={0}
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
              min={0}
              name="sticky-right"
              onChange={EditStyleHandler}
              defaultValue={(elementStyle && elementStyle["sticky-right"]) || ""}
            />
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

export default EditTollImage;
