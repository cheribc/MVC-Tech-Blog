const { Post } = require('../models');

const postData = [
    {
        title: "New MAC Mini May be Released in the Fall",
        post_content: "Apple users are excited about the new desktop and faster processing speeds.",
        user_id: 4
    },
    {
        title: "Best Practices for Using Comments in JavaScript",
        post_content: "Team members benefit from deciding on a set of methods to use when commenting code for others to understand.",
        user_id: 2
    },
    {
        title: "Freelancing: 10 Tips for Success",
        post_content: "Have you ever wondered how to start your freelancing career as a developer?",
        user_id: 1
    },
    {
        title: "15 CSS Hover Card Effects to Use in Your Next Project",
        post_content: "Check out these designs for hover card effects!",
        user_id: 6
    },
    {
        title: "How to Find Your Work-Life Balance",
        post_content: "Many people have found it difficult to disconnect from work-related activities during the pandemic, particularly in people who are employed remotely.",
        user_id: 3
    },
    {
        title: "How to Use VS Code Like an Expert",
        post_content: "Learn how to use built-in tools, like Intellisense and Emmet to easily code more efficiently.",
        user_id: 5
    }   

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;