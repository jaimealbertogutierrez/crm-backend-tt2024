/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: client.routes.js
 Objetivo: Define las rutas para gestionar operaciones relacionadas con los clientes, enlazando a los métodos del `clientController`.
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
// src/routes/client.routes.js
const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const authenticateToken = require('../middlewares/auth.middleware');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Rutas protegidas que requieren autenticación
router.get('/', authenticateToken, clientController.getAllClients);
router.get('/:id', authenticateToken, clientController.getClientById);
router.post('/', authenticateToken, clientController.createClient);
router.put('/:id', authenticateToken, clientController.updateClient);
router.delete('/:id', authenticateToken, clientController.deleteClient);

module.exports = router;

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************

