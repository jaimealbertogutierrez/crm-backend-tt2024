//*********************************************************************
//*********************************************************************
//*********************************************************************
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Definir el modelo de interacción
const Interaccion = sequelize.define('Interaccion', {
    interaccion_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha_interaccion: {
        type: DataTypes.DATE,
    },
    tipo_interaccion: {
        type: DataTypes.ENUM('llamada', 'correo electrónico', 'reunión'),
    },
    notas: {
        type: DataTypes.TEXT,
    },
    documento_adjuntos: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
    tableName: 'Interacciones',
});

// Exportar el modelo
module.exports = Interaccion;

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************