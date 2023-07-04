import uuid from "react-uuid";

const BuildHtml = (tag) => {
  const id = "title-" + uuid();

  if (tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4" || tag === "h5" || tag === "h6")
    return {
      id,
      tag,
      text: "Example text",
      status: 1,
    };

  if (tag === "p") {
    return {
      id,
      tag,
      text: "Example text",
      status: 2,
    };
  }

  if (tag === "img") {
    return {
      id,
      tag,
      src: "img",
      status: 3,
    };
  }

  if (tag === "link") {
    return {
      id,
      tag,
      text: "Example text",
      href: "#",
      target: "none",
      status: 4,
    };
  }

  if (tag === "button") {
    return {
      id,
      tag,
      text: "Example text",
      status: 5,
      function: false,
    };
  }
};

export default BuildHtml;
