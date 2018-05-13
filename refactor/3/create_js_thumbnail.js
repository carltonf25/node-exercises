const fs = require('fs');
const gm = require('gm');
const request = require('request');

const downloadAndCreateThumbnail = (imageUrl, filename, thumbnailFilename, callback) => {
  
  // request image at given url
  request({ url: url, encoding: null }, (err, response, data) => {
    if (err) { return console.log(err.message) }
   
    // write request data to given file
    fs.writeFile(filename, data, (err) => {
      if (err) { return console.log(err.message) }

      // create thumbnail image w/ specified filename
      gm(filename)
      .resize(240, 240)
      .write(thumbnailFilename, (err) => {
        if (err) { return console.log(err.message) }
        console.log('It worked');
      });
    });
  });
}

// set vars to grab JS logo
let url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
let filename = 'js-logo.jpg';
let thumbnailFilename = 'js-logo-thumbnail.jpg';

// use downloadAndCreateThumbnail to download the JS logo and create the thumbnail image
let jsThumbnail = downloadAndCreateThumbnail(url, filename, thumbnailFilename, (err) => {
  if (err) { return console.log(err.message) }
  console.log('It worked');
});

module.exports = { downloadAndCreateThumbnail };