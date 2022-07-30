const express= require('express')
const path= require('path')
const app= express()
const rutasIndex= require('./routers/indexRouter')


app.use(express.static('public'))

app.use('/', rutasIndex)
app.use('/about', rutasIndex)

app.listen(3030, ()=>console.log('servidor corriendo'))