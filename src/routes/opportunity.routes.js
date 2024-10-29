/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: opportunity.routes.js
 Objetivo: Define las rutas para gestionar oportunidades, enlazando las solicitudes a los métodos del `opportunityController`.
 Total de métodos: 5

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
// src/routes/businessOpportunity.routes.js
const express = require('express');
const router = express.Router();
const businessOpportunityController = require('../controllers/opportunityController');
const authenticateToken = require('../middlewares/auth.middleware');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Rutas protegidas que requieren autenticación
router.get('/', authenticateToken, businessOpportunityController.getAllOpportunities);
router.get('/:id', authenticateToken, businessOpportunityController.getOpportunityById);
router.post('/', authenticateToken, businessOpportunityController.createOpportunity);
router.put('/:id', authenticateToken, businessOpportunityController.updateOpportunity);
router.delete('/:id', authenticateToken, businessOpportunityController.deleteOpportunity);

module.exports = router;

//*********************************************************************
//*********************************************************************
//*********************************************************************
