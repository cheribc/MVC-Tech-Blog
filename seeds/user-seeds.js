const { User } = require('../models');

const userData = [{
        username: "Kim",
        email: "Kim5@email.com",
        password: "P@ssword1"
    },
    {
        username: "Cam",
        email: "CCballer@gmail.com",
        password: "P@ssword2"
    },
    {
        username: "Ash",
        email: "Ash55@gmail.com",
        password: "P@ssword3"
    },
    {
        username: "Nina",
        email: "ninanine@gmail.com",
        password: "P@ssword4"
    },
    {
        username: "Vonna",
        email: "vonnar18@gmail.com",
        password: "P@ssword5"
    },
    {
        username: "Than",
        email: "4thanthi@gmail.com",
        password: "P@ssword6"
    },
    {
        username: "Sergio",
        email: "slopez@gmail.com",
        password: "P@ssword7"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;