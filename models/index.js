const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');


const Pages = db.define('Page',{
    title:Sequelize.STRING,
    slug:Sequelize.STRING,
    content:Sequelize.TEXT,
    status:Sequelize.ENUM('open','closed')
}) 


const Users = db.define('User',{
    name:Sequelize.STRING,
    email:Sequelize.STRING,
})


module.exports = {
  db,Pages,Users
}