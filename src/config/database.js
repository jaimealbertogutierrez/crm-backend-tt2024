/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: database.js
 Objetivo: Configura la conexión a la base de datos utilizando Sequelize o cualquier otro ORM, y exporta la instancia de conexión.
 Total de métodos: 1

 Fecha de elaboración: Octubre 2024

 MINTIC
 TALENTO TECH
 TODOS LOS DERECHOS RESERVADOS
 JAIME ALBERTO GUTIÉRREZ
 2024
 ********************************************************************
 ********************************************************************
 *******************************************************************/

//*********************************************************************
//*********************************************************************
//*********************************************************************
const { Sequelize } = require('sequelize');
require('dotenv').config();

//*********************************************************************
//*********************************************************************
//*********************************************************************
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

module.exports = sequelize;

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
