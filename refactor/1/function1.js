const request = require('request');
const fs = require('fs');

let saveWebPage = (url, filename, callback) => {
    request.get(url, (err, response, html) => {
        if (err) { return console.log(err.message) }
        fs.writeFile(filename, html, (err) => {
            if (err) { return console.log(err.message) }
            console.log('It worked');
            callback();
        });
    });
}

module.exports = { saveWebPage };
