import { createVar, style } from "@vanilla-extract/css";

const bgColor = createVar();

export const menu = style({
  backgroundColor: bgColor,
  display: "grid",
  fontSize: "14px",
  gridAutoFlow: "row",
  position: "relative",
  padding: "0.25rem 0.5rem",
  borderRadius: "2px",

  vars: {
    [bgColor]: "transparent",
  },

  selectors: {
    "&:hover, &.is-active": {
      vars: {
        [bgColor]: "#ffffff30",
      },
    },
  },
});

export const submenu = style({
  backgroundColor: "#fff1",
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
      transition: "opacity 120ms ease-in-out",
    },
  },
});
