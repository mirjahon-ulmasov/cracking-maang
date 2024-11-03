var MHashSet = /** @class */ (function () {
    function MHashSet() {
        this.set = [];
        for (var i = 0; i < 1000; i++) {
            this.set.push(new MListNode(0));
        }
    }
    MHashSet.prototype.getCurrentNode = function (key) {
        var index = key % this.set.length;
        return this.set[index];
    };
    MHashSet.prototype.add = function (key) {
        var currentNode = this.getCurrentNode(key);
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = new MListNode(key);
    };
    MHashSet.prototype.remove = function (key) {
        var currentNode = this.getCurrentNode(key);
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    };
    MHashSet.prototype.contains = function (key) {
        var currentNode = this.getCurrentNode(key);
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };
    return MHashSet;
}());
var MListNode = /** @class */ (function () {
    function MListNode(key) {
        this.key = key;
        this.next = null;
    }
    return MListNode;
}());
var MSet = new MHashSet();
MSet.add(7);
MSet.add(17);
MSet.add(24);
MSet.add(707);
MSet.add(70007);
console.log('24:', MSet.contains(24)); // true
console.log('70007:', MSet.contains(70007)); // true
MSet.remove(15);
MSet.remove(23);
MSet.remove(24);
console.log('24:', MSet.contains(24)); // false
console.log('17:', MSet.contains(17)); // true
