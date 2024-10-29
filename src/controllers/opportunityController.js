/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: opportunityController.js
 Objetivo: Proporciona métodos para gestionar oportunidades, permitiendo crear, actualizar y eliminar registros relacionados con los clientes.
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
// src/controllers/businessOpportunityController.js
const db = require('../config/database');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener todas las oportunidades de negocio
exports.getAllOpportunities = async (req, res) => {
    try {
        const [opportunities] = await db.query('SELECT * FROM Oportunidades');
        res.json(opportunities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener una oportunidad de negocio por su ID
exports.getOpportunityById = async (req, res) => {
    try {
        const opportunityId = req.params.id;
        console.log("ID de consulta: " + opportunityId);

        // Consulta a la base de datos
        const [opportunity] = await db.query('SELECT * FROM Oportunidades WHERE oportunidad_id = ' + opportunityId);
        if (!opportunity || opportunity.length === 0) return res.status(404).json({ message: 'Oportunidad no encontrada' });

        console.log("Datos encontrados: ", opportunity[0]);
        res.json(opportunity[0]);
    } catch (error) {
        console.error('Error en la consulta:', error.message); // Log del mensaje de error
        console.error('Stack Trace:', error.stack); // Log del stack trace para depuración
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Crear una nueva oportunidad de negocio y asignarla a un cliente
exports.createOpportunity = async (req, res) => {
    const { cliente_id, descripcion, estado, fecha_creacion } = req.body;
    //const fecha_creacion = new Date().toISOString(); // Obtener la fecha actual en formato ISO
    try {
        // Concatenación de la consulta SQL
        const query = `
            INSERT INTO Oportunidades (cliente_id, descripcion, estado, fecha_creacion) 
            VALUES ('${cliente_id}', '${descripcion}', '${estado}', '${fecha_creacion}')
        `;
        const [result] = await db.query(query);
        res.status(201).json({ id: result.insertId, cliente_id, descripcion, estado, fecha_creacion });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Actualizar el estado de una oportunidad de negocio por su ID
exports.updateOpportunity = async (req, res) => {
    const { cliente_id, descripcion, estado, fecha_creacion } = req.body;
    const opportunityId = req.params.id;

    try {
        // Construcción de la consulta SQL mediante concatenación
        const query = `
            UPDATE Oportunidades 
            SET 
                cliente_id = '${cliente_id}', 
                descripcion = '${descripcion}', 
                estado = '${estado}', 
                fecha_creacion = '${fecha_creacion}'
            WHERE oportunidad_id = ${opportunityId}
        `;

        const [result] = await db.query(query);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Oportunidad no encontrada' });
        }

        res.json({ message: 'Oportunidad actualizada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Eliminar una oportunidad de negocio por su ID
exports.deleteOpportunity = async (req, res) => {
    try {
        const opportunityId = req.params.id;
        const [result] = await db.query('DELETE FROM Oportunidades WHERE oportunidad_id = ' + opportunityId);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Oportunidad no encontrada' });
        res.json({ message: 'Oportunidad eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************