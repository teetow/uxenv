import { style } from "@vanilla-extract/css";

export const menubar = style({
  display: "grid",
  gridAutoFlow: "column",
});

export const menubaritem = style({
  display: "block",
});
