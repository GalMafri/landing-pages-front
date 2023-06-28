import { Fragment, useEffect, useState } from "react";
import "./EditTool.scss";

const EditToolHome = ({ handler, style }) => {
  const element = ".newPage_html";
  const [url, setUrl] = useState(false);
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

  const EditStyleUrlHandler = (event) => {
    if (event.target.value) setUrl(event.target.value);
    else setUrl(false);
    handler(event.target.value, event.target.name, element);
  };

  useEffect(() => {
    if (
      elementStyle &&
      elementStyle["background-image"] &&
      elementStyle["background-image"].trim().length > 0
    )
      setUrl(elementStyle["background-image"]);
  }, []);

  return (
    <Fragment>
      {/* defualt text color */}
      <div className="editTool">
        <label className="editTool_text">Text Color:</label>
        <input
          className="editTool_input"
          type="color"
          name="color"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["color"]}
        />
      </div>

      {/* padding */}
      <div className="editToolColumn">
        <label className="editTool_text">Padding Top:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-top"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["padding-top"]}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Bottom:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-bottom"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["padding-bottom"]}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Left:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-left"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["padding-left"]}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Padding Right:</label>
        <input
          className="editTool_number"
          type="number"
          name="padding-right"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["padding-right"]}
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
          defaultValue={elementStyle && elementStyle["margin-left"]}
        />
      </div>
      <div className="editToolColumn">
        <label className="editTool_text">Margin Right:</label>
        <input
          className="editTool_number"
          type="number"
          name="margin-right"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["margin-right"]}
        />
      </div>

      {/* background */}
      <div className="editTool">
        <label className="editTool_text">Background Color:</label>
        <input
          className="editTool_input"
          type="color"
          name="background-color"
          onChange={EditStyleHandler}
          defaultValue={elementStyle && elementStyle["background-color"]}
        />
      </div>

      {/* image background */}
      <div className="editToolColumn">
        <label className="editTool_text">Background Image:</label>
        <input
          className="editTool_url"
          type="url"
          name="background-image"
          onChange={EditStyleUrlHandler}
          defaultValue={
            elementStyle && elementStyle["background-image"] ? elementStyle["background-image"] : ""
          }
        />
      </div>

      {/* background options */}
      {url && (
        <Fragment>
          <div className="editToolColumn">
            <label className="editTool_text">Background Size:</label>
            <select
              className="editTool_select"
              type="url"
              name="background-size"
              onChange={EditStyleUrlHandler}
              defaultValue={
                elementStyle && elementStyle["background-size"]
                  ? elementStyle["background-size"]
                  : ""
              }
            >
              <option value="auto">Auto</option>
              <option value="cover">Cover</option>
              <option value="contain">Contain</option>
              <option value="100% 100%">100% Width & Height</option>
            </select>
          </div>

          <div className="editToolColumn">
            <label className="editTool_text">Background Repeat:</label>
            <select
              className="editTool_select"
              type="url"
              name="background-repeat"
              onChange={EditStyleUrlHandler}
              defaultValue={
                elementStyle && elementStyle["background-repeat"]
                  ? elementStyle["background-repeat"]
                  : ""
              }
            >
              <option value="repeat">Repeat</option>
              <option value="repeat-x">Repeat Horizontally</option>
              <option value="repeat-y">Repeat Vertically</option>
              <option value="no-repeat">No Repeat</option>
              <option value="space">Space</option>
              <option value="round">Round</option>
            </select>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default EditToolHome;
