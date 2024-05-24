function getAllCombinationsOfASet(text) {
  var results = [];
  for (var i = 0; i < text.length; i++) {
    // Record size as the list will change
    var resultsLength = results.length;
    for (var j = 0; j < resultsLength; j++) {
      results.push(text[i] + results[j]);
    }
    results.push(text[i]);
  }
  return results;
}
var letters = ["a", "b", "c", "d"];
const aS = 'ABC'
const bS = 'ZAX'

console.log(getAllCombinationsOfASet(aS))
console.log(getAllCombinationsOfASet(bS))
