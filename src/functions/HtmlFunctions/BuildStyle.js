const BuildStyle = (state) => {
  let styleSheet = "";
  for (const key in state) {
    if (styleSheet !== "" || styleSheet.trim() !== "" || styleSheet.length > 0) styleSheet += "\n } \n";
    styleSheet += `${key} {`;
    for (const [keyStyle, value] of Object.entries(state[key])) {
      // if is img
      if (keyStyle === "background-image") styleSheet += `\n ${keyStyle}:url(${value});`;
      // center element
      else if (keyStyle === "center-element" && value === "center") {
        styleSheet += `\n margin-left:auto !important;`;
        styleSheet += `\n margin-right:auto !important;`;
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
        keyStyle === "max-width"
      )
        styleSheet += `\n ${keyStyle}:${value}px;`;
      else styleSheet += `\n ${keyStyle}:${value};`;
    }
  }

  if (styleSheet !== "" || styleSheet.trim() !== "" || styleSheet.length > 0) styleSheet += "\n } \n";
  return styleSheet;
};

export default BuildStyle;
