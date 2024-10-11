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

console.log(removeDuplicates("This is a is test test string"));

// ----------------------------------------------
// Without using .flat() create function to flatten an array
function flatten(arr) {
    const newArr = []
    for(let item of arr) {
        if(Array.isArray(item)) {
            newArr.push(...flatten(item))
        } else {
            newArr.push(item)
        }
    }
    return newArr
}

const arr = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flatten(arr)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
