const express = require ('express')
const app = express()
const morgan = require ('morgan')
const layout = require ('./views/layout');
const {db,Pages,User}  = require ('./models');
const { Sequelize } = require('sequelize/types');



db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}))




app.get('/',(req,res,next)=>{
    try {
        console.log(typeof db)
        res.send(layout(""))
    } catch (error) {
        console.error('This is our error message')
    }
})

//add sync method async/await

async function connect (){
    await db.sync({force:true})

    
    app.listen(port,() => {
    console.log(`listening in port ${port}`)
})
}

connect()



// let port = 8080
// app.listen(port,() => {
//     console.log(`listening in port ${port}`)
// })

