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
import $ from "jquery";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./NewPage.scss";
import { element } from "prop-types";

const NewPage = () => {
  const dispatch = useDispatch();
  const [elements, setElements] = useState(false);
  const [status, setStatus] = useState(1);
  const [edit, setEdit] = useState(-1);
  const [style, setStyle] = useState({});
  const [styleHtml, setStyleHtml] = useState(false);
  const [currentElement, setCurrentElement] = useState(-1);
  const [htmlElements, setHtmlElements] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const htmlElementsArray = Array.from(htmlElements);
    const [reorderedItem] = htmlElementsArray.splice(result.source.index, 1);
    htmlElementsArray.splice(result.destination.index, 0, reorderedItem);
    setHtmlElements(htmlElementsArray);
  };

  const changeStatusHandler = (value) => {
    setStatus(value);
  };

  const changeEditHandler = (value) => {
    setEdit(value);
  };

  const editTextHandler = (id, text) => {
    const newHtmlElements = [...htmlElements];
    const index = newHtmlElements.findIndex((item) => item.id === id);
    if (newHtmlElements[index]["tag"] === "img") {
      newHtmlElements[index]["src"] = text;
    } else {
      newHtmlElements[index]["text"] = text;
    }
    setHtmlElements(newHtmlElements);
  };

  const editStyleHandler = (value, name, element) => {
    setStyle((prev) => {
      if (isEmptyObjHandler(prev[element])) prev[element] = {};
      prev[element][name] = value.length > 0 ? value : false;
      return { ...prev };
    });
  };

  const buildHtmlHandler = (tag, editElement) => {
    const objHtml = BuildHtml(tag);
    setHtmlElements((prev) => [...prev, objHtml]);
    setEdit(editElement);
    setStatus(2);
    setCurrentElement(objHtml.id);
  };

  // change edit item on click
  $(".newPage_html").on("click", function () {
    setStatus(2);
    setEdit(-1);
  });
  $(document).on("click", ".item", function (event) {
    setStatus(2);
    setCurrentElement($(this).attr("id"));
    setEdit(Number($(this).attr("data-status")));
  });

  // remove element
  const removeElementHandler = (id) => {
    const index = htmlElements.findIndex((element) => element.id === id);
    let newHtmlElements = [...htmlElements];
    delete newHtmlElements[index];
    newHtmlElements = newHtmlElements.filter((element) => element !== undefined);
    setHtmlElements(newHtmlElements);
    setTimeout(() => {
      setStatus(1);
    }, 0);
  };

  const buildElementHandler = (provided, item) => {
    if (item && item.tag === "img") {
      return (
        <div>
          <button
            className="newPage_html-x"
            style={{ display: "none" }}
            data-id={item.id}
            onClick={() => removeElementHandler(item.id)}
          >
            x
          </button>
          <item.tag
            className="item"
            id={item.id}
            data-status={item.status}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            src={item.src ?? ""}
            title={"This is an img"}
          />
        </div>
      );
    }
    return (
      <item.tag
        className="item"
        id={item.id}
        data-status={item.status}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Fragment>
          {item.text}
          <button
            className="newPage_html-x"
            style={{ display: "none" }}
            data-id={item.id}
            onClick={() => removeElementHandler(item.id)}
          >
            x
          </button>
        </Fragment>
      </item.tag>
    );
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

    // show and hide remove element
    $(".item").on("mouseenter", function (e) {
      const id = $(this).attr("id");
      $(`.newPage_html-x[data-id=${id}]`).show();
    });
    $(".item").on("mouseleave", function (e) {
      const id = $(this).attr("id");
      $(`.newPage_html-x[data-id=${id}]`).hide();
    });

    // get the elements
    if (!elements) getHtmlEelements();
  }, [style, currentElement, elements, dispatch]);

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
                    onClick={() => buildHtmlHandler(element.title, element.status)}
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
                  editText={editTextHandler}
                  elements={htmlElements}
                />
              </InsideWrapper>
            )}
          </div>
          {/* the html builder */}
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div className="newPage_html" {...provided.droppableProps} ref={provided.innerRef}>
                  {htmlElements &&
                    htmlElements.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => buildElementHandler(provided, item)}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </Fragment>
  );
};

export default NewPage;
