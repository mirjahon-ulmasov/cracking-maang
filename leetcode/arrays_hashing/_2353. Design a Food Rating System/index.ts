/*
Design a food rating system that can do the following:

Modify the rating of a food item listed in the system.
Return the highest-rated food item for a type of cuisine in the system.
Implement the FoodRatings class:

FoodRatings(String[] foods, String[] cuisines, int[] ratings) Initializes the system. The food items are described by foods, cuisines and ratings, all of which have a length of n.
foods[i] is the name of the ith food,
cuisines[i] is the type of cuisine of the ith food, and
ratings[i] is the initial rating of the ith food.
void changeRating(String food, int newRating) Changes the rating of the food item with the name food.
String highestRated(String cuisine) Returns the name of the food item that has the highest rating for the given type of cuisine. If there is a tie, return the item with the lexicographically smaller name.
Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

Example 1:
Input
["FoodRatings", "highestRated", "highestRated", "changeRating", "highestRated", "changeRating", "highestRated"]
[[["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]], ["korean"], ["japanese"], ["sushi", 16], ["japanese"], ["ramen", 16], ["japanese"]]
Output
[null, "kimchi", "ramen", null, "sushi", null, "ramen"]

Explanation
FoodRatings foodRatings = new FoodRatings(["kimchi", "miso", "sushi", "moussaka", "ramen", "bulgogi"], ["korean", "japanese", "japanese", "greek", "japanese", "korean"], [9, 12, 8, 15, 14, 7]);
foodRatings.highestRated("korean"); // return "kimchi"
                                    // "kimchi" is the highest rated korean food with a rating of 9.
foodRatings.highestRated("japanese"); // return "ramen"
                                      // "ramen" is the highest rated japanese food with a rating of 14.
foodRatings.changeRating("sushi", 16); // "sushi" now has a rating of 16.
foodRatings.highestRated("japanese"); // return "sushi"
                                      // "sushi" is the highest rated japanese food with a rating of 16.
foodRatings.changeRating("ramen", 16); // "ramen" now has a rating of 16.
foodRatings.highestRated("japanese"); // return "ramen"
                                      // Both "sushi" and "ramen" have a rating of 16.
                                      // However, "ramen" is lexicographically smaller than "sushi".
*/

class FoodRatings {
    private cuisineMap: Map<string, Set<string>>
    private foodMap: Map<string, number>
    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        this.cuisineMap = new Map()
        this.foodMap = new Map()
        for (let i = 0; i < foods.length; i++) {
            this.foodMap.set(foods[i], ratings[i])

            const set = this.cuisineMap.get(cuisines[i]) || new Set()
            set.add(foods[i])
            this.cuisineMap.set(cuisines[i], set)
        }
    }

    changeRating(food: string, newRating: number): void {
        this.foodMap.set(food, newRating)
    }

    highestRated(cuisine: string): string {
        let maxRatedFood = "",
            maxRate = 0
        const listOfFoods = this.cuisineMap.get(cuisine)
        listOfFoods?.forEach(food => {
            const rate = this.foodMap.get(food) as number
            if (maxRate < rate) {
                maxRate = rate
                maxRatedFood = food
            } else if (maxRate == rate) {
                maxRatedFood = maxRatedFood > food ? food : maxRatedFood
            }
        })
        return maxRatedFood
    }
}

class _FoodRatings {
    private foods
    private cuisines
    private ratings
    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        this.foods = foods
        this.cuisines = cuisines
        this.ratings = ratings
    }

    changeRating(food: string, newRating: number): void {
        const index = this.foods.indexOf(food)
        this.ratings[index] = newRating
    }

    highestRated(cuisine: string): string {
        let max = 0, maxIndex = 0
        for (let i = 0; i < this.cuisines.length; i++) {
            if (this.cuisines[i] == cuisine) {
                if (this.ratings[i] > max) {
                    max = this.ratings[i]
                    maxIndex = i
                } else if (this.ratings[i] == max) {
                    if (this.foods[i] < this.foods[maxIndex]) {
                        maxIndex = i
                    }
                }
            }
        }
        return this.foods[maxIndex]
    }
}
