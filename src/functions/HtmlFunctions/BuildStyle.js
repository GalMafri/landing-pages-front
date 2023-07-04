const BuildStyle = (state) => {
  let styleSheet = "";
  for (const key in state) {
    if (styleSheet !== "" || styleSheet.trim() !== "" || styleSheet.length > 0)
      styleSheet += "\n } \n";
    styleSheet += `${key} {`;
    for (const [keyStyle, value] of Object.entries(state[key])) {
      if (!value || value === "") continue;
      // if is img
      if (keyStyle === "background-image") styleSheet += `\n ${keyStyle}:url(${value});`;
      // center element
      else if (keyStyle === "center-element" && value === "center") {
        styleSheet += `\n margin-left:auto !important;`;
        styleSheet += `\n margin-right:auto !important;`;
      } else if (keyStyle === "center-element" && value === "none") {
      } else if (keyStyle === "sticky-left") {
        styleSheet += `\n margin-left:calc(50% - ${value}px) !important;`;
      } else if (keyStyle === "sticky-right") {
        styleSheet += `\n margin-right:calc(50% - ${value}px) !important;`;
      } else if (keyStyle === "border") {
        styleSheet += `\n border:${value}px solid;`;
      }

      // include px
      else if (
        keyStyle === "padding-top" ||
        keyStyle === "padding-bottom" ||
        keyStyle === "padding-left" ||
        keyStyle === "padding-right" ||
        keyStyle === "margin-top" ||
        keyStyle === "margin-bottom" ||
        keyStyle === "margin-left" ||
        keyStyle === "margin-right" ||
        keyStyle === "font-size" ||
        keyStyle === "max-width" ||
        keyStyle === "width" ||
        keyStyle === "height" ||
        keyStyle === "border-radius"
      )
        styleSheet += `\n ${keyStyle}:${value}px;`;
      else styleSheet += `\n ${keyStyle}:${value};`;
    }
  }

  if (styleSheet !== "" || styleSheet.trim() !== "" || styleSheet.length > 0)
    styleSheet += "\n } \n";
  return styleSheet;
};

export default BuildStyle;
