const express = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));


app.use('/',require('./routes'));


app.listen(10000, ()=>{
    console.log("Servidor Nuevamente por tercera vez Encendido, Localhost!");
});
