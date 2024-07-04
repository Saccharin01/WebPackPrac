const path = require('path')
module.exports = {
  entry : "./dist/tutor.js",
  output : {
    path : path.resolve(__dirname,"dist"),
    filename: "menu.bundle.js"
  }
}