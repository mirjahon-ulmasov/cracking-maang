// const rootElement = document.querySelector(".foods");

const foodData = [
    {
        id: 1,
        name: "apple",
        image: "🍏",
    },
    {
        id: 2,
        name: "orange",
        image: "🍊",
    },
    {
        id: 3,
        name: "lemon",
        image: "🍋",
    },
    {
        id: 4,
        name: "banana",
        image: "🍌",
    },
    {
        id: 5,
        name: "kiwi",
        image: "🥝",
    },
    {
        id: 6,
        name: "strawberry",
        image: "🍓",
    },
];

class Foods {
    constructor(root, list) {
        this._root = root;
        this._data = list;
    }

    renderList() {
        this._root.addEventListener("click", (event) => {
            const { target } = event;
            target.remove();
        });

        const fragment = document.createDocumentFragment();
        this._data.forEach((el) => {
            fragment.appendChild(this.createFoodItem(el));
        });
        this._root?.appendChild(fragment);
    }

    createFoodItem(item) {
        const li = document.createElement("li");
        li.textContent = item.image;
        li.classList.add(item.name);
        li.style.listStyle = "none";
        return li;
    }
}

// const foods = new Foods(rootElement, foodData);
// foods.renderList();

// --------------------------------------------------
// Create custom array map method using reduce method
Array.prototype.myMap = function (callback) {
    console.log(this);
    return this.reduce(function (acc, cur, index, arr) {
        acc.push(callback(cur, index, arr));
        return acc;
    }, []);
};

const newFoods = foodData.map((el) => el.name + "!!!");
const newFoods2 = foodData.myMap((el) => el.name + "!!!");

// ----------------------------------------------
// Create function to remove duplicates in string
function removeDuplicates(str) {
    const strArr = str.split(" ");
    const set = new Set(strArr);
    return Array.from(set).join(" ");
}

// console.log(removeDuplicates("This is a is test test string"));

// ----------------------------------------------
// Without using .flat() create function to flatten an array
function flatten(arr) {
    const newArr = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            newArr.push(...flatten(item));
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

const arr = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
// console.log(flatten(arr)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// ----------------------------------------------
// call(), apply(), bind()

Function.prototype.bind = function (context) {
    const fn = this;
    return function () {
        return fn.call(context);
    };
};

function a() {
    console.log(this.name);
}

const b = a.bind({ name: "Johon" });

b();

// ----------------------------------------------
// Implement debounce

// Q: What is Debounce ?
// A: Debounce is the way of delaying fn execution for certain amount of time after the last time it was called
// This can be useful for scenarios where we want to avoid unnecarry or repeated fn call
// which might be expensive and time-comsuming
// Example: We have search box that shows suggestions as the user types.
// If we call a fn to fetch suggestions for every keystroke, we might end up making too many request to the server, which slow down the application and waste resources. Instead, we can use debounce to wait until user has stopped typing for a while before making the request.

function debounce(mainFn, delay) {
    let timer;

    return function (...args) {
        if (timer) {
            clearTimeout(timer); // 6 Debounce
            // return;          // 2 Throttling
        }

        timer = setTimeout(() => {
            mainFn(args);
            timer = null;
        }, delay);
    };
}

function searchData(num) {
    console.log("search executed: " + num);
}

const debouncedSearchData = debounce(searchData, 3000);

// debouncedSearchData(2)
// debouncedSearchData(3)
// debouncedSearchData(4)
// debouncedSearchData(5)
// debouncedSearchData(6)

// ------------------------------------------------------

// DOM Tree
function reversePath(element, root) {
    const path = [];
    let pointer = element;

    while (pointer.parent) {
        const index = pointer.parent.children.indexOf(pointer);
        path.push(index);

        pointer = pointer.parent;
    }

    pointer = root;

    while (path.length) {
        pointer = pointer.children[path.pop()];
    }
}

// ------------------------------------------------------
function moveElement(duration, distance, element) {
    const start = performance.now();

    function move(currentTime) {
        const elapsed = start - currentTime; // o'tib ketgan
        const progess = elapsed / duration;
        const amountToMove = progess * distance;

        element.style.transform = `transformX(${amountToMove}px)`;

        if (amountToMove < distance) {
            requestAnimationFrame(move);
        }
    }

    requestAnimationFrame(move);
}

// ------------------------------------------------------
function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}

async function run() {
    await sleep(500)
    console.log('hello');
    await sleep(500)
    console.log('world');
}
// run()

// ------------------------------------------------------
