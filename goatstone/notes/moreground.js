//
// window.onload= function(){
// 	var b = document.body;
// 	walkD(n);
// };

function N(v){
	this.value = v;
	this.children = [];
}
// var n = new N('n');
// var o = new N('o');
// var p = new N('p');
// var q = new N('q');
// var r = new N('r');

// n.children.push(o, p);
// p.children.push(q, r);

function walkD(node){
	// check for search success
	console.log(' n n n n ',node);
	for(var i=0; i<node.children.length; i++ ){
		var n = node.children[i];
		//if(n.children.length > 0 ){			 
		//	 setTimeout(function(){
				walkD(n);
		//	 }.bind(n), 1000);
		//}
		// if(n.tagName){visit(n);}
		// else{
		// 	console.log('--',n);
		// }
	}
}
function visit(e){
	e.style.border = "14px solid red";
}

/*
var a = [9, 5, 4, 6, 74, 42];
console.log(a);
// insertion sort
for (var i = 0; i < a.length; i++) {
    var t = a[i];
    for (var j = i - 1; j > -1 && a[j] > t; j--) {
        a[j+1] = a[j];
    }
    a[j+1] = t;
}

console.log(a);
*/
// insertion
//for (var i = 0; i < a.length; i++) {
//    var t = a[i];
//    // shift
//    for (var j = i - 1; j > -1 && a[j] > t; j--) {
//        a[j + 1] = a[j];
//    }
//    a[j + 1] = t;
//}
//console.log(a);
/*
 function N(d) {
 this.data = d;
 this.next;
 }
 var ll = new N(1);
 ll.next = new N(2);
 ll.next = new N(4);

 var h = {data:1, next:null};
 h.next = {data:2, next:null};
 h.next.next = {data:3, next:null};

 console.log(h)

 // selection
 for (var i = 0; i < a.length; i++) {
 for (var j = i + 1; j < a.length; j++) {
 if (a[i] > a[j]) {
 var t = a[i];
 a[i] = a[j];
 a[j] = t;
 }
 }

 }
 */
//console.log(a);

// palindrone check
// reverse string
// print out alphabet
// insertion sort
// hello(2)(3)

//console.log('hello'.repeatify(3));

/*
 var fullname = 'John Doe';
 var obj = {
 fullname: 'Colin Ihrig',
 prop: {
 fullname: 'Aurelio De Rosa',
 getFullname: function() {
 return this.fullname;
 }
 }
 };

 console.log(obj.prop.getFullname());

 var test = obj.prop.getFullname;

 console.log(test());
 */

/*
 a restricted variant of JavaScript

 First, strict mode eliminates some JavaScript silent errors by changing them to throw errors.
 Second, strict mode fixes mistakes that make it difficult for JavaScript engines
 to perform optimizations:
 Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
 */


/*
 var myObject = {
 foo: "bar",
 func: function() {
 var self = this;
 console.log("outer func:  this.foo = " + this.foo);
 console.log("outer func:  self.foo = " + self.foo);
 (function() {
 console.log("inner func:  this.foo = " + this.foo);
 console.log("inner func:  self.foo = " + self.foo);
 }());
 }
 };
 myObject.func();
 */