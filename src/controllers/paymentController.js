/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: paymentController.js
 Objetivo: Maneja la lógica de negocio relacionada con los pagos, permitiendo crear y gestionar registros de pagos asociados a los clientes.
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
// src/controllers/paymentController.js
const db = require('../config/database');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Simular la creación de un enlace de pago
exports.createPaymentLink = async (req, res) => {
    const { cliente_id, monto, descripcion } = req.body;

    // Generar un enlace de pago simulado (en un caso real, aquí se llamaría a un servicio de pago)
    const paymentLink = `http://example.com/pay?transactionId=${Math.floor(Math.random() * 1000000)}`;

    try {
        // Guardar en la base de datos el enlace de pago (simulando el registro del pago)
        const [result] = await db.query(
            'INSERT INTO Pagos (cliente_id, monto, descripcion, link_pago) VALUES (?, ?, ?, ?)',
            [cliente_id, monto, descripcion, paymentLink]
        );

        res.status(201).json({
            message: 'Enlace de pago creado exitosamente',
            link_pago: paymentLink,
            id: result.insertId,
            cliente_id,
            monto,
            descripcion
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Simular la verificación del estado del pago
exports.verifyPayment = async (req, res) => {
    const { transactionId } = req.params;

    // Simular la verificación del estado del pago (en un caso real, aquí se llamaría a un servicio de verificación)
    const isSuccess = Math.random() < 0.8; // 80% de probabilidad de éxito

    try {
        if (isSuccess) {
            // Actualizar el estado del pago en la base de datos
            await db.query(
                'UPDATE Pagos SET estado = ? WHERE link_pago LIKE ?',
                ['completado', `%${transactionId}%`]
            );
            res.json({ message: 'Pago completado exitosamente', transactionId });
        } else {
            res.json({ message: 'El pago ha fallado', transactionId });
        }
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
