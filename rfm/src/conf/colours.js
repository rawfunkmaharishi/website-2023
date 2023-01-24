const RGBs = {
  background: [255, 255, 255],
  primary: [161, 25, 25],
  link: [112, 80, 176],
  hover: [176, 80, 155],
  border: [82, 82, 82],
};

const colours = {};
for (var key in RGBs) {
  colours[key] = "rgb(" + RGBs[key].join(", ") + ")";
}

export { RGBs, colours };
