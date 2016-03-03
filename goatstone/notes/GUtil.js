/* Goatstone Utility */

G = {};
window.addEventListener("load", function(){
	G.init();	
});

G.toHTML = function(msg){
	var tn = document.createTextNode(msg);
	var elmToAdd = document.createElement('span');
	elmToAdd.appendChild(tn);
//	elmToAdd.className  = "g-info";
    this.elm.appendChild(elmToAdd);
};
G.log = function(msg){
    console.log(msg);
};
G.init = function(){
    this.elm = document.createElement("div");
    this.elm.className = "g-info";
    document.body.appendChild(this.elm);    
};

