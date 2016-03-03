/* goatstone/tools/data.js */

function MakeData(){
	this.randMax = 900 // max random number value
	this.arrLength = 10 // default array size to return	
}
MakeData.prototype.getArray = function(){
	return [1,2,3]
}
MakeData.prototype.getRandArray = function( length ){
	var l = length || this.arrLength
	return new Array( l ).join('x').split('x').map( x => {
		return Math.floor( Math.random() * this.randMax )
	})
}

module.exports = MakeData