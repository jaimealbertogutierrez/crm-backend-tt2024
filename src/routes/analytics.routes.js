/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: analytics.routes.js
 Objetivo: Define las rutas para acceder a las funciones de análisis en el `analyticsController`, permitiendo la recuperación de datos analíticos.
 Total de métodos: 3

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
// analytics.routes.js
const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Definir las rutas
router.get('/analitica', analyticsController.getAnalitica);
router.get('/clientes', analyticsController.getClientes);
router.get('/oportunidades', analyticsController.getOportunidades);
router.get('/interacciones', analyticsController.getInteracciones);

module.exports = router;
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************