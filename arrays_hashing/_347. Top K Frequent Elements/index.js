/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
function topKFrequent(nums, k) {
    var result = new Array(k).fill(0);
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (var i = 0; i < k; i++) {
        var localKey = 0, localValue = 0;
        for (var _a = 0, _b = map.entries(); _a < _b.length; _a++) {
            var _c = _b[_a], key = _c[0], value = _c[1];
            if (localValue < value) {
                localValue = value;
                localKey = key;
            }
        }
        result[i] = localKey;
        map.delete(localKey);
    }
    return result;
}
/*
Using Bucket Sort
P: [1,1,1,2,2,3]
S: after HashMap, we have 1 -> 3, 2 -> 2, 3 -> 1
we create array length of input array, in each arr[i] has another array, where i is value of HashMap
[[], [3], [2], [1], [], [], []]
*/
function topKFrequent2(nums, k) {
    var result = [];
    var map = new Map();
    var frequent = new Array(nums.length + 1).fill([]);
    console.log(frequent);
    for (var _i = 0, nums_2 = nums; _i < nums_2.length; _i++) {
        var num = nums_2[_i];
        map.set(num, (map.get(num) || 0) + 1);
    }
    console.log(map);
    map.forEach(function (value, key) {
        console.log(value);
        frequent[value].push(key);
        console.log(frequent);
    });
    for (var i = frequent.length - 1; i > 0; i--) {
        for (var j = 0; i < frequent[i].length; j++) {
            result.push(frequent[i][j]);
            console.log(result);
            if (result.length == k) {
                return result;
            }
        }
    }
    return result;
}
console.log(topKFrequent2([1], 1));
