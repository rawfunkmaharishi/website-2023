import { palette, choices } from "./pallets/ffbf00-e83f6f-2274a5-32936f-ffffff";

console.log(palette);

// https://dev.to/devtronic/javascript-map-an-array-of-objects-to-a-dictionary-3f42
export const RGBs = Object.assign(
  {},
  ...Object.keys(choices).map(function (key) {
    return {
      [key]: palette.filter((member) => member.name == choices[key])[0].rgb,
    };
  })
);
