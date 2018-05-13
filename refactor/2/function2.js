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
let url = 'https://imgflip.com/s/meme/Batman-Slapping-Robin.jpg';
let filename = 'batman-slap.jpg';
let thumbnailFilename = 'batman-slap-thumbnail.jpg';

downloadAndCreateThumbnail(url, filename, thumbnailFilename, (err) => {
  if (err) { return console.log(err.message) }
  console.log('It worked');
});

module.exports = { downloadAndCreateThumbnail };