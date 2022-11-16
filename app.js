const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
// const db = require('./dbConnection')
const sortes = require('./mockup')
const app = express()

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {

  res.render('index', {sortes})

});

// Start Server
//app.listen(process.env.PORT || 3000, () => {
  //console.log('Servidor rodando com express')
  //console.log('Pressione CTRL+C para encerrar')
//});
app.listen(3000, function (){
  console.log('Servidor rodando http://localhost:3000')
});