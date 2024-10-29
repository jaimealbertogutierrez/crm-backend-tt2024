/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: clientController.js
 Objetivo: Proporciona métodos para manejar las operaciones relacionadas con los clientes, como crear, leer, actualizar y eliminar registros.
 Total de métodos: 6

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
// src/controllers/clientController.js
const db = require('../config/database');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener todos los clientes
exports.getAllClients = async (req, res) => {
    try {
        const [clients] = await db.query('SELECT * FROM Clientes');
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Obtener un cliente por su ID
exports.getClientById = async (req, res) => {
    try {
        const clientId = parseInt(req.params.id, 10);
        console.log("ID de consulta parseado: " + clientId);

        // Consulta a la base de datos
        const [client] = await db.query('SELECT * FROM Clientes WHERE cliente_id = ' + clientId);

        if (!client || client.length === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        console.log("Datos encontrados: ", client[0]);
        res.json(client[0]);
    } catch (error) {
        console.error('Error en la consulta:', error.message); // Log del mensaje de error
        console.error('Stack Trace:', error.stack); // Log del stack trace para depuración
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Crear un nuevo cliente
exports.createClient = async (req, res) => {
    const { nombre, direccion, correo_electronico, telefono } = req.body;
    try {
        const query = `INSERT INTO Clientes (nombre, direccion, correo_electronico, telefono) VALUES ('${nombre}', '${direccion}', '${correo_electronico}', '${telefono}')`;
        const [result] = await db.query(query);
        res.status(201).json({ id: result.insertId, nombre, direccion, correo_electronico, telefono });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Actualizar un cliente por su ID
exports.updateClient = async (req, res) => {
    const { nombre, direccion, correo_electronico, telefono } = req.body;
    try {
        const [result] = await db.query(
            "UPDATE Clientes SET nombre = " + "'" + nombre + "'" +
            ", direccion = " + "'" + direccion + "'" + ", correo_electronico = " + "'" + correo_electronico + "'" +
            ", telefono = " + "'" + telefono + "'" + " WHERE cliente_id = " + req.params.id);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json({ message: 'Cliente actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Eliminar un cliente por su ID
exports.deleteClient = async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM Clientes WHERE cliente_id = ' + [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json({ message: 'Cliente eliminado exitosamente' });
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