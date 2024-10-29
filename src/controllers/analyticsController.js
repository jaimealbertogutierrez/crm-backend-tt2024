/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: analyticsController.js
 Objetivo: Maneja la lógica de negocio relacionada con el análisis de datos y estadísticas, y proporciona métodos para acceder a dicha información.
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
// analyticsController.js
const connection = require('../config/database');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener la analítica de clientes, oportunidades e interacciones
exports.getAnalitica = async (req, res) => {
    try {
        // Consultar Clientes
        const [clientes] = await connection.query('SELECT * FROM Clientes');

        // Consultar Oportunidades
        const [oportunidades] = await connection.query('SELECT * FROM Oportunidades');

        // Consultar Interacciones
        const [interacciones] = await connection.query('SELECT * FROM Interacciones');

        // Devolver los datos en formato JSON
        res.json({ clientes, oportunidades, interacciones });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los datos de la analítica.' });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener todos los clientes
exports.getClientes = async (req, res) => {
    try {
        const [clientes] = await connection.query('SELECT * FROM Clientes');
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los clientes.' });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener todas las oportunidades
exports.getOportunidades = async (req, res) => {
    try {
        const [oportunidades] = await connection.query('SELECT * FROM Oportunidades');
        res.json(oportunidades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las oportunidades.' });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener todas las interacciones
exports.getInteracciones = async (req, res) => {
    try {
        const [interacciones] = await connection.query('SELECT * FROM Interacciones');
        res.json(interacciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las interacciones.' });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
