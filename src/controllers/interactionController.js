/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: interactionController.js
 Objetivo: Maneja la lógica de negocio relacionada con las interacciones, permitiendo crear y recuperar registros de interacciones entre usuarios y clientes.
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
// src/controllers/interactionController.js
const db = require('../config/database');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener todas las interacciones
exports.getAllInteractions = async (req, res) => {
    try {
        const [interactions] = await db.query('SELECT * FROM Interacciones');
        res.json(interactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener una interacción por su ID
exports.getInteractionById = async (req, res) => {
    try {
        const interactionId = req.params.id;
        console.log("ID de consulta: " + interactionId);

        // Consulta a la base de datos
        const [interaction] = await db.query('SELECT * FROM Interacciones WHERE interaccion_id = ' + interactionId);

        if (!interaction || interaction.length === 0) {
            return res.status(404).json({ message: 'Interacción no encontrada' });
        }

        console.log("Datos encontrados: ", interaction[0]);
        res.json(interaction[0]);
    } catch (error) {
        console.error('Error en la consulta:', error.message);
        console.error('Stack Trace:', error.stack);
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Crear una nueva interacción
exports.createInteraction = async (req, res) => {
    const { cliente_id, fecha_interaccion, tipo_interaccion, notas, documento_adjuntos } = req.body;
    try {
        // Concatenación de la consulta SQL
        const query = `
            INSERT INTO Interacciones (cliente_id, fecha_interaccion, tipo_interaccion, notas, documento_adjuntos)
            VALUES ('${cliente_id}', '${fecha_interaccion}', '${tipo_interaccion}', '${notas}', '${documento_adjuntos}')
        `;
        const [result] = await db.query(query);
        res.status(201).json({ interaccion_id: result.insertId, cliente_id, fecha_interaccion, tipo_interaccion, notas, documento_adjuntos });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Actualizar una interacción por su ID
exports.updateInteraction = async (req, res) => {
    const { cliente_id, fecha_interaccion, tipo_interaccion, notas, documento_adjuntos } = req.body;
    try {
        const interactionId = req.params.id;
        const query = `
            UPDATE Interacciones SET 
                cliente_id = '${cliente_id}', 
                fecha_interaccion = '${fecha_interaccion}', 
                tipo_interaccion = '${tipo_interaccion}', 
                notas = '${notas}', 
                documento_adjuntos = '${documento_adjuntos}' 
            WHERE interaccion_id = ${interactionId}
        `;
        const [result] = await db.query(query);

        if (result.affectedRows === 0) return res.status(404).json({ message: 'Interacción no encontrada' });
        res.json({ message: 'Interacción actualizada exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Eliminar una interacción por su ID
exports.deleteInteraction = async (req, res) => {
    try {
        const interactionId = req.params.id;
        const [result] = await db.query('DELETE FROM Interacciones WHERE interaccion_id = ' + interactionId);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Interacción no encontrada' });
        res.json({ message: 'Interacción eliminada exitosamente' });
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