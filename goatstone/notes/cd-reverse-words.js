/*Sample code to read in test cases:
 */
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {

    if (line !== "") {
        var answer_line = line.split(' ').reverse().join(' ').replace(/^\s*/, '').replace(/\s*$/, '')
        console.log(answer_line);
    }

});
