var express = require('express'); 
var app = express(); 
var path = require('path');
var fs = require('fs')
const request = require('request');

// Creates a server which runs on port 3000 and  
// can be accessed through localhost:3000 
app.listen(3000, function() { 
    console.log('server running on port 3000'); 
} ) 
  
// Function callName() is executed whenever  
// url is of the form localhost:3000/name 
command_string=`python run_swap.py --gpu_ids 0 --model imitator --output_dir ./outputs/results/ --src_path      ./assets/src_imgs/imper_A_Pose/024_8_2_0000.jpg  --tgt_path      ./assets/src_imgs/fashion_man/Sweatshirts_Hoodies-id_0000680701_4_full.jpg  --bg_ks 13  --ft_ks 3 --has_detector  --post_tune  --front_warp --swap_part body  --save_res --ip http://localhost --port 8097`

command_string_2="ls"
app.use(express.static(__dirname + '/outputs'));
app.use(express.static(__dirname + '/assets'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use(express.json());


// Swap generator

app.post('/name', callName); 
  
function callName(req, res) {
    // console.log(req.body.first_url)
    first_url=req.body.first_url
    second_url=req.body.second_url

    var picStream1 = fs.createWriteStream("1.jpg");
    picStream1.on('close', function() {
      console.log('First Image file saved, second Image will be downloaded now');

    var picStream2 = fs.createWriteStream("2.jpg");
    picStream2.on('close', function() {
      console.log('Second Image downloaded, processing begins');
      var child_process = require("child_process");
        child_process.exec(command_string_2, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                res.status(200).send('exec error: ' + error + " ")
            }
            console.log("Standard Output: " + stdout + " ");
            console.log("Error Output: " + stderr + " ");
            
        });
    });
    request(second_url).pipe(picStream2); 
        
    });
    request(first_url).pipe(picStream1); 
        


    res.status(200).send("Processing is underway")
} 

// View generator

app.post('/pose', callName_pose); 
  
function callName_pose(req, res) {
    third_url=req.body.third_url
    var picStream2 = fs.createWriteStream("3.jpg");
    picStream2.on('close', function() {
      console.log('Second Image downloaded, processing begins');
      var child_process = require("child_process");
        child_process.exec(command_string_3, function(error, stdout, stderr) {
            if (error !== null) {
                console.log('exec error: ' + error);
                res.status(200).send('exec error: ' + error + " ")
            }
            console.log("Standard Output: " + stdout + " ");
            console.log("Error Output: " + stderr + " ");
            
        });
    });
    request(second_url).pipe(picStream2); 
        

    res.status(200).send("Processing is underway")
} 

