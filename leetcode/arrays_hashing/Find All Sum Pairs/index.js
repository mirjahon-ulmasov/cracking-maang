function findSumPairs(arr, num) {
    var result = [];
    var set = new Set();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var n = arr_1[_i];
        var diff = num - n;
        if (set.has(diff)) {
            result.push([diff, n]);
        }
        set.add(n);
    }
    return result;
}
console.log(findSumPairs([1, -9, 2, 4, 6, 4, -11], 8));
