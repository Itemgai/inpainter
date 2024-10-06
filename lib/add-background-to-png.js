const PNG = require("pngjs").PNG;
const dataUriToBuffer = require("lib/data-uri-to-buffer");
import bufferToDataUrl from "buffer-to-data-url";

module.exports = function addBackgroundToPNG(dataUrl) {
  const options = {
    colorType: 2,
    bgColor: {
      red: 255,
      green: 255,
      blue: 255,
    },
  };

  const png = PNG.sync.read(dataUriToBuffer(dataUrl));
  const buffer = PNG.sync.write(png, options);

  return bufferToDataUrl("image/png", buffer);
};
