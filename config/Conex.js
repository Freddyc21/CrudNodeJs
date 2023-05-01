// El apartado para realizar la conexion con la BD
const mysql = require('mysql');

const conex = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectonode'

});

conex.connect((error)=>{
    if(error){
        console.error("Error de conexion en Mysql Paso esto:" + error);
        return
    }
    console.log("La conexion se Realizo Satisfactoriamente");
});

module.exports = conex;