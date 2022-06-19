var package = require('./../../package.json');
var images = require('./images.js');

module.exports = {
    "_comment": "Application data made available to handlebars.",
    "name": "Whites Creek Block Party 2022",
    "description": "",
    "version": package.version || "",
    "environment": process.env.NODE_ENV || "development",
    "production": (process.env.NODE_ENV === "production"),
    "images": JSON.stringify(images.get()),
    "download_url": "https://spklein-share.s3.us-east-2.amazonaws.com/fowc-block-party-2022-exports.zip"
}
