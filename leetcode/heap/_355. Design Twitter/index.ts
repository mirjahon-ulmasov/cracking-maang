import { MinPriorityQueue } from "@datastructures-js/priority-queue"

/*
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:

:) Twitter() Initializes your twitter object.
:) void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. 
Each call to this function will be made with a unique tweetId.
:) List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. 
Each item in the news feed must be posted by users who the user followed or by the user themself. 
Tweets must be ordered from most recent to least recent.
:) void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
:) void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

Input
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
Output
[null, null, [5], null, null, [6, 5], null, [5]]

Explanation
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2);    // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2);  // User 1 unfollows user 2.
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
*/

class Twitter {
    public tweetMap: Map<number, [number, number][]> // [tweetId, time]
    public followMap: Map<number, Set<number>> // followee set
    public timestamp: number
    constructor() {
        this.tweetMap = new Map()
        this.followMap = new Map()
        this.timestamp = 0
    }

    postTweet(userId: number, tweetId: number): void {
        if (!this.tweetMap.has(userId)) this.tweetMap.set(userId, [])
        this.tweetMap.get(userId)!.push([tweetId, this.timestamp])
        this.timestamp++
    }

    getNewsFeed(userId: number): number[] {
        const users = this.followMap.get(userId) || new Set()
        users.add(userId)

        const minHeap = new MinPriorityQueue<[number, number]>(el => el[1])
        for (let user of users) {
            const tweets = this.tweetMap.get(user) || []
            for (let tweet of tweets) {
                minHeap.enqueue(tweet)

                if (minHeap.size() > 10) {
                    minHeap.dequeue()
                }
            }
        }
        return minHeap.toArray().reverse().map(el => el[0])
    }

    follow(followerId: number, followeeId: number): void {
        if (!this.followMap.has(followerId)) this.followMap.set(followerId, new Set())
        this.followMap.get(followerId)!.add(followeeId)
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId)!.delete(followeeId)
        }
    }
}