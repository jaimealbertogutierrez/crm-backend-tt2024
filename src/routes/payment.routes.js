/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: payment.routes.js
 Objetivo: Define las rutas para gestionar pagos, conectando las solicitudes a los métodos del `paymentController`.
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
// src/routes/payment.routes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authenticateToken = require('../middlewares/auth.middleware');

// Rutas protegidas que requieren autenticación
router.post('/create-link', authenticateToken, paymentController.createPaymentLink);
router.get('/verify/:transactionId', authenticateToken, paymentController.verifyPayment);

module.exports = router;

//*********************************************************************
//*********************************************************************
//*********************************************************************
