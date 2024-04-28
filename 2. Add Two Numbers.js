var addTwoNumbers = function(l1, l2) {
    let sum = BigInt(recursivelySumList(l1)) + BigInt(recursivelySumList(l2));
  sum += '';
  return new ListNode(BigInt(sum[sum.length-1]),recursivelyBuildNode(sum,sum.length-1),10);
};
var recursivelySumList = function(l1){
  if (l1.next){
      return recursivelySumList(l1.next)+''+l1.val;
  } else {
      return l1.val;
  }
};
var recursivelyBuildNode = function(l1,index){
  if (index > 0){
      index--;
      return new ListNode(l1[index],recursivelyBuildNode(l1,index));
  }
  return undefined;
};