export const randomInt = (limit = 1) => Math.round(Math.random() * limit);

export const randomRGB = (limit = 255) =>
  `rgb(${randomInt(limit)}, ${randomInt(limit)}, ${randomInt(limit)})`;
