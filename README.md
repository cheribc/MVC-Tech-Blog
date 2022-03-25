# MVC-Tech-Blog

### Description

This application is a CMS-style blog site similar to a Wordpress site, for developers to post and comment on other posts. The application is structured using the Model View Container (MVC) paradigm, with Handlebars.js as a template engine, Sequelize as the ORM and Express-Session NPM package for authentication.

---

### How to Use:

1. To start this application from the command line, run `npm install`

2. Confirm that the MySQL server is turned on 

3. Run `DROB DATABASE IF EXISTS blog_db;`
And `CREATE DATABASE blog_db;`

4. Return to the terminal and run `node seeds/index.js` to seed database.
5. Run `npm start`
6. Navigate to [http://localhost:3001/](http://localhost:3001/) in your browser

---

![login-page-image](./assets/login-img.png)

---

![recent-post-demo-img](./assets/recent-post-demo-img.png)

---

![New-Post-image](./assets/NewPost-img.png)

### Technology Used:

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=wheat)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=wheat)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=Sequelize&logoColor=wheat)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?logo=heroku&logoColor=wheat)

- JavaScript
- Node.js
- Express.js
- Express-Session
- Handlebars.js
- MySQL2
- Sequelize
- BCrypt
- Heroku

 ---


#### Author

[Cheribc](https://github.com/cheribc)

[GitHub Repo link:](https://github.com/cheribc/MVC-Tech-Blog)

[Link to deployed app on Heroku](https://daily-tech.herokuapp.com/)

---

#### License

[MIT](LICENSE)