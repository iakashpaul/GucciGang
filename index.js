var express = require('express'); 
var app = express(); 
  
// Creates a server which runs on port 3000 and  
// can be accessed through localhost:3000 
app.listen(3000, function() { 
    console.log('server running on port 3000'); 
} ) 
  
// Function callName() is executed whenever  
// url is of the form localhost:3000/name 
command_string=`python run_swap.py --gpu_ids 0 --model imitator --output_dir ./outputs/results/ --src_path      ./assets/src_imgs/imper_A_Pose/024_8_2_0000.jpg  --tgt_path      ./assets/src_imgs/fashion_man/Sweatshirts_Hoodies-id_0000680701_4_full.jpg  --bg_ks 13  --ft_ks 3 --has_detector  --post_tune  --front_warp --swap_part body  --save_res --ip http://localhost --port 8097`

app.use(express.static(__dirname + '/outputs'));
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/name', callName); 
  
function callName(req, res) {
      
    var child_process = require("child_process");
    child_process.exec(command_string, function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
            res.send('exec error: ' + error + " ")
        }
        console.log("Standard Output: " + stdout + " ");
        console.log("Error Output: " + stderr + " ");
        
    });
    res.send("Processing is underway")
} 




app.get('/test', callName); 
  
function callName(req, res) {
    stream('https://images-na.ssl-images-amazon.com/images/I/31TsfgL0mzL._AC_SY200_.jpg');
    console.log("Kick off");
    var child_process = require("child_process");
    child_process.exec("ls", function(error, stdout, stderr) {
        if (error !== null) {
            console.log('exec error: ' + error);
            res.send('exec error: ' + error + " ")
        }
        console.log("Standard Output: " + stdout + " ");
        console.log("Error Output: " + stderr + " ");
        
    });
    res.send("Processing is underway")
} 
