/* Closure.js*/
var str = "abcdefg";
var newstr = "";
for (var i = str.length - 1; i >= 0; i--) {
    newstr += str.charAt(i);
}
//console.log(newstr);
//var a = "abc";
//function b(){
//    console.log(a);
//    return function(arg0){return a + "defg" + arg0}
//}
//var c = b();
//console.log( c('xyz') );
function a() {
    this.b = 2;
}
function b() {
    this.c = 3;
}
//b.prototype = new a();
//var i = new b();
//console.log(i.b) //2
function p(){
    this.i = 2;
}
function c(){
    this.j =8;
    p.call(this);
}
// /c.prototype = Object.create(p.prototype );
// var d = new p();
// console.log(d.i);


function fib(n){
    var p = 0;
    var c = 1;
    var arr = [p, c];
    while(c<=n){
        var t  =c;
        c = p +c;
        p = t;
        arr.push(p);
    }
    console.log(arr.join());
}


//fib(3);