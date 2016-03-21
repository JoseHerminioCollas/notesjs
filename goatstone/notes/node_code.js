/*Sample code to read in test cases:
 var fs  = require("fs");
 fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
 if (line != "") {
 //do something here
 //console.log(answer_line);
 }
 });*//* node_code.js */

var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var arr = line.split(" "); // Splits the string by space
        var diff = arr[0] - arr[1];
        console.log(diff);
    }
});

