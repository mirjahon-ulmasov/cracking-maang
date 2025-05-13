"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var priority_queue_1 = require("@datastructures-js/priority-queue");
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
var Twitter = /** @class */ (function () {
    function Twitter() {
        this.tweetMap = new Map();
        this.followerMap = new Map();
        this.timestamp = 0;
    }
    Twitter.prototype.postTweet = function (userId, tweetId) {
        var _a;
        if (!this.tweetMap.has(userId))
            this.tweetMap.set(userId, []);
        (_a = this.tweetMap.get(userId)) === null || _a === void 0 ? void 0 : _a.push([this.timestamp, tweetId]);
        this.timestamp++;
    };
    Twitter.prototype.getNewsFeed = function (userId) {
        var users = this.followerMap.get(userId) || new Set();
        users.add(userId);
        var minPQ = new priority_queue_1.MinPriorityQueue({
            compare: function (a, b) {
                return a[0] - b[0];
            },
        });
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user_id = users_1[_i];
            var tweets = this.tweetMap.get(user_id) || [];
            // We need to take maximum last 10 tweets
            for (var i = tweets.length - 1; i >= Math.max(0, tweets.length - 10); i++) {
                minPQ.enqueue(tweets[i]);
                if (minPQ.size() > 10) {
                    minPQ.dequeue();
                }
            }
        }
        return minPQ.toArray().map(function (item) { return item[1]; }).sort(function (a, b) { return b - a; });
    };
    Twitter.prototype.follow = function (followerId, followeeId) {
        var _a;
        if (!this.followerMap.has(followerId))
            this.followerMap.set(followerId, new Set());
        (_a = this.followerMap.get(followerId)) === null || _a === void 0 ? void 0 : _a.add(followeeId);
    };
    Twitter.prototype.unfollow = function (followerId, followeeId) {
        var _a;
        if (this.followerMap.has(followerId)) {
            (_a = this.followerMap.get(followerId)) === null || _a === void 0 ? void 0 : _a.delete(followeeId);
        }
    };
    return Twitter;
}());
var twitter = new Twitter();
twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1));
twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1));
twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1));
