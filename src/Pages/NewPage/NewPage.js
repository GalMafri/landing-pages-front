import { Fragment, useEffect, useState } from "react";
import InsideWrapper from "../../Components/Wrapper/InsideWrapper";
import { useDispatch } from "react-redux";
import { changeMenuHandler } from "../../Store/Menu";
import isEmptyObjHandler from "./../../functions/isEmptyObjHandler";
import FetchData from "../../functions/FetchData";
import uuid from "react-uuid";
import EditElement from "./EditElement";
import BuildStyle from "../../functions/HtmlFunctions/BuildStyle";
import BuildHtml from "../../functions/HtmlFunctions/BuildHtml";

import "./NewPage.scss";

const NewPage = () => {
  const dispatch = useDispatch();
  const [elements, setElements] = useState(false);
  const [status, setStatus] = useState(1);
  const [edit, setEdit] = useState(-1);
  const [style, setStyle] = useState({});
  const [styleHtml, setStyleHtml] = useState(false);
  const [currentElement, setCurrentElement] = useState(-1);

  const changeStatusHandler = (value) => {
    setStatus(value);
  };

  const changeEditHandler = (value) => {
    setEdit(value);
  };

  const editStyleHandler = (value, name, element) => {
    setStyle((prev) => {
      if (isEmptyObjHandler(prev[element])) prev[element] = {};
      prev[element][name] = value;
      return { ...prev };
    });
  };

  const buildHtmlHandler = (tag) => {
    const objHtml = BuildHtml(tag);
    const parent = document.querySelector(".newPage_html");
    parent.insertAdjacentHTML("beforeend", objHtml.element);
    setEdit(1);
    setStatus(2);
    setCurrentElement(objHtml.id);
  };

  useEffect(() => {
    if (!isEmptyObjHandler(style)) setStyleHtml(BuildStyle(style));
    setTimeout(() => {
      dispatch(changeMenuHandler({ menu: false }));
    }, 0);
    const getHtmlEelements = async () => {
      try {
        const data = await FetchData(process.env.REACT_APP_FETCH_URL + "elements/html");
        setElements(data.elements);
      } catch (error) {}
    };
    if (!elements) getHtmlEelements();
  }, [style, currentElement]);

  return (
    <Fragment>
      <style>{styleHtml && styleHtml}</style>
      <div className="newPage">
        <div className="newPage_wrapper">
          {/* the menu */}
          <div className="newPage_menu">
            {/* btns for change status */}
            <InsideWrapper classProps={"newPage_menu-btns"}>
              <button
                className={
                  "newPage_menu-elements " + (status === 1 ? "newPage_menu-elements-active" : "")
                }
                onClick={() => changeStatusHandler(1)}
              >
                Elements
              </button>
              <button
                className={
                  "newPage_menu-elements " + (status === 2 ? "newPage_menu-elements-active" : "")
                }
                onClick={() => changeStatusHandler(2)}
              >
                Edit
              </button>
            </InsideWrapper>
            {/* menu of elements */}
            {elements && status === 1 && (
              <InsideWrapper classProps={"newPage_menu-wrapper"}>
                {elements.map((element) => (
                  <button
                    key={uuid()}
                    className="newPage_menu-element"
                    onClick={() => buildHtmlHandler(element.title)}
                  >
                    {element.title}
                  </button>
                ))}
              </InsideWrapper>
            )}

            {/* menu of edit */}
            {status === 2 && (
              <InsideWrapper>
                <EditElement
                  status={edit}
                  handler={editStyleHandler}
                  style={style}
                  currentElement={currentElement}
                />
              </InsideWrapper>
            )}
          </div>
          {/* the html builder */}
          <div className="newPage_html"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewPage;
