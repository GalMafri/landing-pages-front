import uuid from "react-uuid";

const BuildHtml = (tag) => {
  const id = "title-" + uuid();

  if (tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4" || tag === "h5" || tag === "h6")
    return {
      id,
      element: `<${tag} id="${id}"">example text</${tag}>`,
    };
};

export default BuildHtml;
