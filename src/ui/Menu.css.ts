import { createVar, style } from "@vanilla-extract/css";
import { menubar } from "./MenuBar.css";

const bgColor = createVar();

export const menu = style({
  backgroundColor: bgColor,
  display: "grid",
  fontSize: "14px",
  gridAutoFlow: "row",
  position: "relative",
  padding: "0.25rem 0.5rem",
  borderRadius: "2px",
  userSelect: "none",

  vars: {
    [bgColor]: "#333",
  },

  selectors: {
    "&:hover, &.is-active": {
      backgroundColor: "#444",
    },
    [`${menubar} > &`]: {
      backgroundColor: "#333",
    },
    [`${menubar} > &:hover, ${menubar} > &.is-active`]: {
      backgroundColor: "#444",
    },
  },
});

export const submenu = style({
  backgroundColor: bgColor,
  left: 0,
  lineHeight: "2em",
  padding: "2px",
  position: "absolute",
  top: "100%",
  transition: "opacity 60ms ease-in-out",
  border: "1px solid #fff2",
  borderRadius: "2px",

  selectors: {
    [`${menu}:not(.is-active) &`]: {
      opacity: 0,
      display: "none",
      transition: "opacity 120ms ease-in-out",
    },
  },
});
