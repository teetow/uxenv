import { createVar, style } from "@vanilla-extract/css";

const bgColor = createVar();

export const menubar = style({
  display: "grid",
  gridAutoFlow: "column",
  userSelect: "none",
  vars: {
    [bgColor]: "#333",
  },
});

export const menubaritem = style({
  backgroundColor: bgColor,
  borderRadius: "2px",
  fontSize: "14px",
  padding: "0.25rem 0.5rem",
  position: "relative",

  selectors: {
    "&:is-active": {},
    "&:hover, &.is-active": {
      backgroundColor: "#444",
    },
  },
});

export const menubarmenu = style({
  position: "absolute",
  top: "2rem",
  left: 0,
});
