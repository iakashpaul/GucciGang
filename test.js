var fs = require('fs')
const request = require('request');


var url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNyNAOSpi2Y_RoE-IK74rbQmsQpUuoD1PEBrmt0fXTU9HGyma&s'
pieces=url.split('/')

var filename=pieces[pieces.length-1]
console.log(filename)
var picStream = fs.createWriteStream(filename);
picStream.on('close', function() {
  console.log('file done');
});
request(url).pipe(picStream); 
console.log('check');