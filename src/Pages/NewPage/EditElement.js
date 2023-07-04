import EditTollImage from "../../Components/EditTool/EditTollImage";
import EditToolHome from "../../Components/EditTool/EditToolHome";
import EditToolSpan from "../../Components/EditTool/EditToolSpan";
import EditToolTitle from "../../Components/EditTool/EditToolTitle";
import "./EditElement.scss";

const EditElement = ({ status, handler, style, currentElement, editText, elements }) => {
  return (
    <div className="editElement">
      {status === -1 && <EditToolHome handler={handler} style={style} />}
      {status === 1 && (
        <EditToolTitle
          handler={handler}
          style={style}
          id={currentElement}
          editText={editText}
          elements={elements}
        />
      )}
      {status === 2 && (
        <EditToolTitle
          handler={handler}
          style={style}
          id={currentElement}
          editText={editText}
          elements={elements}
        />
      )}
      {status === 3 && (
        <EditTollImage
          handler={handler}
          style={style}
          id={currentElement}
          editText={editText}
          elements={elements}
        />
      )}
    </div>
  );
};

export default EditElement;
