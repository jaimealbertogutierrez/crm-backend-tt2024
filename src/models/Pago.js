//*********************************************************************
//*********************************************************************
//*********************************************************************
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Definir el modelo de pago
const Pago = sequelize.define('Pago', {
    pago_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_pago: {
        type: DataTypes.DATE,
    },
    monto: {
        type: DataTypes.DECIMAL(10, 2),
    },
    metodo_pago: {
        type: DataTypes.ENUM('transferencia', 'tarjeta'),
    },
}, {
    timestamps: false,
    tableName: 'Pagos',
});

// Exportar el modelo
module.exports = Pago;

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************