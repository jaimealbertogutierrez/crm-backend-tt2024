/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: server.js
 Objetivo: Inicializa el servidor Express, configura middleware y rutas, y establece la conexión a la base de datos.
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
//******************************************************************************
//******************************************************************************
//******************************************************************************
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
//******************************************************************************
//******************************************************************************
//******************************************************************************
const clientRoutes = require('./routes/client.routes');
const authRoutes = require('./routes/auth.routes');
const opportunityRoutes = require('./routes/opportunity.routes'); // Importar las rutas de oportunidades
const interactionRoutes = require('./routes/interaction.routes'); // Importa las rutas de interacciones
const paymentRoutes = require('./routes/payment.routes'); // Importa las rutas de pagos
const analyticsController = require('./routes/analytics.routes'); // Importar el nuevo controller
//******************************************************************************
//******************************************************************************
//******************************************************************************
app.use(cors());
app.use(express.json()); // Analiza el cuerpo de las solicitudes como JSON

//******************************************************************************
//******************************************************************************
//******************************************************************************
// Usar las rutas de autenticación
app.use('/api/auth', authRoutes); // Aquí manejas tanto el registro como el login bajo el mismo prefijo
// Define la ruta base para el API de clientes
app.use('/api/clients', clientRoutes);
app.use('/api/opportunities', opportunityRoutes); // Definir la ruta base para el API de oportunidades
app.use('/api/interactions', interactionRoutes); // Define la ruta base para el API de interacciones
app.use('/api/payments', paymentRoutes); // Define la ruta base para el módulo de pagos
app.use('/api', analyticsController); // Agregar la ruta base para el controller

function mostrarServidor(puerto){
    console.log ("*************************************************");
    console.log ("*************************************************");
    console.log ("*************************************************");
    console.log ("INICIANDO INSTANCIA DEL SERVIDOR DE BACKEND DE API DE SERVICIOS CON EXPRESS DE NODEJS");
    console.log(`Server running on port ${puerto}`);
    console.log ("*************************************************");
    console.log ("*************************************************");
    console.log ("*************************************************");
}
//******************************************************************************
//******************************************************************************
//******************************************************************************
const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT, () => mostrarServidor(PORT));
//******************************************************************************
//******************************************************************************
//******************************************************************************
//******************************************************************************
//******************************************************************************
//******************************************************************************
