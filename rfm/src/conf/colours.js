// https://coolors.co/a31621-fcf7f8-ced3dc-4e8098-90c2e7
const palette = [
  {
    name: "Onyx",
    hex: "393e41",
    rgb: [57, 62, 65],
    cmyk: [12, 5, 0, 75],
    hsb: [203, 12, 25],
    hsl: [203, 7, 24],
    lab: [26, -1, -3],
  },
  {
    name: "Timberwolf",
    hex: "d3d0cb",
    rgb: [211, 208, 203],
    cmyk: [0, 1, 4, 17],
    hsb: [38, 4, 83],
    hsl: [38, 8, 81],
    lab: [84, 0, 3],
  },
  {
    name: "Platinum",
    hex: "e7e5df",
    rgb: [231, 229, 223],
    cmyk: [0, 1, 3, 9],
    hsb: [45, 3, 91],
    hsl: [45, 14, 89],
    lab: [91, 0, 3],
  },
  {
    name: "Keppel",
    hex: "44bba4",
    rgb: [68, 187, 164],
    cmyk: [64, 0, 12, 27],
    hsb: [168, 64, 73],
    hsl: [168, 47, 50],
    lab: [69, -39, 2],
  },
  {
    name: "Maize Crayola",
    hex: "e7bb41",
    rgb: [231, 187, 65],
    cmyk: [0, 19, 72, 9],
    hsb: [44, 72, 91],
    hsl: [44, 78, 58],
    lab: [78, 4, 65],
  },
];

const choices = {
  background: "Onyx",
  primary: "Maize Crayola",
  link: "Keppel",
  hover: "Timberwolf",
  border: "Platinum",
};

// https://dev.to/devtronic/javascript-map-an-array-of-objects-to-a-dictionary-3f42
export const RGBs = Object.assign(
  {},
  ...Object.keys(choices).map(function (key) {
    return {
      [key]: palette.filter((member) => member.name == choices[key])[0].rgb,
    };
  })
);
