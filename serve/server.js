const app = require('./app')
const dbConnection = require('./connection/dbConnect')


dbConnection()






const PORT = process.env.PORT || 3000;




app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`)
})