const { Comment } = require('../models');

const commentData = [
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Congratulations!!"
    },

    {
        user_id: 1,
        post_id: 2,
        comment_text: "Good luck on your test!"
    },

    {
        user_id: 7,
        post_id: 4,
        comment_text: "I love that color!"

    },
    {
        user_id: 4,
        post_id: 1,
        comment_text: "Thanks to all of you that made this the best birthday ever!"

    },
    {
        user_id: 2,
        post_id: 6,
        comment_text: "Congratulations!!"

    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;