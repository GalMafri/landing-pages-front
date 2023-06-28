import EditToolHome from "../../Components/EditTool/EditToolHome";
import EditToolTitle from "../../Components/EditTool/EditToolTitle";
import "./EditElement.scss";

const EditElement = ({ status, handler, style, currentElement }) => {
  return (
    <div className="editElement">
      {status === -1 && <EditToolHome handler={handler} style={style} />}
      {status === 1 && <EditToolTitle handler={handler} style={style} id={currentElement} />}
    </div>
  );
};

export default EditElement;
