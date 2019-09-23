// Generate all array subsets:
function* subsets(array, offset = 0) {
  while (offset < array.length) {
    let first = array[offset++];
    for (let subset of subsets(array, offset)) {
      subset.push(first);
      yield subset;
    }
  }
  yield [];
}

// Example:
for (let subset of subsets([1, 2, 3])) {
   console.log(subset);
}
/*
class Solution(object):
    def subsets(self, nums):
        answer = [[]]
        for n in nums:
            new_subs = []
            for sub in answer:
                new_subs.append(sub+[n])
            answer.extend(new_subs)
        return answer
        */