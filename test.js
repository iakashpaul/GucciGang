var fs = require('fs')
const request = require('request');


var url='https://images-na.ssl-images-amazon.com/images/I/31TsfgL0mzL._AC_SY200_.jpg'
pieces=url.split('/')

var filename=pieces[pieces.length-1]
console.log(filename)
var picStream = fs.createWriteStream(filename);
picStream.on('close', function() {
  console.log('file done');
});
request(url).pipe(picStream); 