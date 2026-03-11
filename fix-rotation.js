import sharp from "sharp";
import fs from "fs";

const dir = "./public/images";

fs.readdirSync(dir).forEach(file => {
  if (/\.(jpe?g|png)$/i.test(file)) {
    sharp(`${dir}/${file}`)
      .rotate() // auto-rotate based on EXIF
      .toFile(`${dir}/rotated-${file}`);
  }
});
