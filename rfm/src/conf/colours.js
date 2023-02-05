import { palette, choices } from "./pallets/ef6461-e4b363-e8e9eb-e0dfd5-313638";

// https://dev.to/devtronic/javascript-map-an-array-of-objects-to-a-dictionary-3f42
export const RGBs = Object.assign(
  {},
  ...Object.keys(choices).map(function (key) {
    return {
      [key]: palette[choices[key]].rgb,
    };
  })
);
