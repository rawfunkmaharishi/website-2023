import { palette, choices } from "./pallets/820263-d90368-eadeda-2e294e-ffd400";

// https://dev.to/devtronic/javascript-map-an-array-of-objects-to-a-dictionary-3f42
export const RGBs = Object.assign(
  {},
  ...Object.keys(choices).map(function (key) {
    return {
      [key]: palette[choices[key]].rgb,
    };
  })
);

RGBs.background = [255, 255, 255];
