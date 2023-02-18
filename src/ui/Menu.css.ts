import { createVar, style } from "@vanilla-extract/css";

const bgColor = createVar();

export const menuitem = style({
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

export const menu = style({
  display: "grid",
  gridAutoFlow: "row",
  position: "relative",
  userSelect: "none",

  vars: {
    [bgColor]: "#333",
  },
});

export const menu__strip = style({
  display: "flex",
  justifyContent: "space-between",
});

export const menu__list = style({
  backgroundColor: bgColor,
  border: "1px solid #fff2",
  borderRadius: "2px",
  isolation: "isolate",
  left: "100%",
  lineHeight: "2em",
  minWidth: "10em",
  padding: "2px",
  position: "absolute",
  top: 0,
  transition: "opacity 60ms ease-in-out",

  selectors: {
    [`& > ${menu} > &`]: {
      left: "100%",
      top: 0,
    },

    [`${menuitem}:not(.is-active) &`]: {
      opacity: 0,
      display: "none",
      transition: "opacity 120ms ease-in-out",
    },
  },
});
