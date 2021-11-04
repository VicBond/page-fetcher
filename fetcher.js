const domain = process.argv[2];
const path = process.argv[3];
const request = require('request');
const fs = require('fs');

request(`${domain}`, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  fs.writeFile(`${path}`, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${path}`);
  });
});


