//*********************************************************************
//*********************************************************************
//*********************************************************************
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Definir el modelo de oportunidad
const Oportunidad = sequelize.define('Oportunidad', {
    oportunidad_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    estado: {
        type: DataTypes.ENUM('en progreso', 'cerrada', 'perdida'),
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
}, {
    timestamps: false,
    tableName: 'Oportunidades',
});

// Exportar el modelo
module.exports = Oportunidad;

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
