/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: interaction.routes.js
 Objetivo: Define las rutas para las interacciones entre usuarios y clientes, conectando las solicitudes a los métodos del `interactionController`.
 Total de métodos: 4

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
// src/routes/interaction.routes.js
const express = require('express');
const router = express.Router();
const interactionController = require('../controllers/interactionController');
const authenticateToken = require('../middlewares/auth.middleware');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Rutas protegidas que requieren autenticación
router.get('/', authenticateToken, interactionController.getAllInteractions);
router.get('/:id', authenticateToken, interactionController.getInteractionById);
router.post('/', authenticateToken, interactionController.createInteraction);
router.put('/:id', authenticateToken, interactionController.updateInteraction);
router.delete('/:id', authenticateToken, interactionController.deleteInteraction);

module.exports = router;

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************

