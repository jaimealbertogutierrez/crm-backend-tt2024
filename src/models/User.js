//*********************************************************************
//*********************************************************************
//*********************************************************************
const { Sequelize, DataTypes } = require('sequelize'); // Asegúrate de tener Sequelize y DataTypes importados
const sequelize = require('../config/database'); // Asegúrate de que la configuración de la base de datos esté correcta
const bcrypt = require('bcrypt');

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Definir el modelo de usuario
const User = sequelize.define('User', {
    usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, // Marca como clave primaria
    },
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
        lowercase: true,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
        minlength: 6,
    },
    rol: {
        type: DataTypes.ENUM('admin', 'usuario'),
        defaultValue: 'usuario',
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Establece la fecha de creación por defecto
    },
}, {
    timestamps: false, // No necesitas las columnas createdAt y updatedAt, ya que usamos fecha_creacion
    tableName: 'usuarios', // Asegúrate de que este nombre coincida con el de tu tabla en MySQL
});

// Método para encriptar la contraseña antes de crear el usuario
User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.contraseña = await bcrypt.hash(user.contraseña, salt);
});

// Método para comparar contraseñas
User.prototype.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.contraseña);
};

module.exports = User;

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************