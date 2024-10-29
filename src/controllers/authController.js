/*******************************************************************
 ********************************************************************
 ********************************************************************
 PROYECTO FINAL DE DESARROLLO WEB AVANZADO
 PROGRAMA TALENTO TECH
 MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

 ELABORO:  ING. JAIME ALBERTO GUTIÉRREZ MEJÍA
 CC.  9733675 DE ARMENIA, QUINDÍO
 ANALISTA PROGRAMADOR JAVA Y NODEJS

 Nombre componente: authController.js
 Objetivo: Contiene la lógica para la autenticación y autorización de usuarios, incluyendo el registro y inicio de sesión.
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
const User = require('../models/User'); // Asegúrate de que la ruta del modelo de usuario es correcta
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Importa la biblioteca crypto
const dotenv = require('dotenv');

//*********************************************************************
//*********************************************************************
//*********************************************************************
dotenv.config();

// Función para hashear la contraseña utilizando MD5
const hashPassword = (clave_cifrar) => {
    clave_cifrar = clave_cifrar.trim(); // Eliminar espacios en blanco
    console.log("clave a cifrar: " + clave_cifrar);
    return crypto.createHash('md5').update(clave_cifrar).digest('hex'); // Cifra la contraseña con MD5
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Función para registrar un nuevo usuario
exports.register = async (req, res) => {
    const { nombre_usuario, correo_electronico, contrasena, rol } = req.body;

    try {
        console.log("Clave enviada: " + contrasena);
        console.log("Correo: " + correo_electronico);

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ correo_electronico });
        console.log("usuario encontrado: " + existingUser?.correo_electronico || 'Ninguno encontrado');

        /*
        if (existingUser) {
            return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
        }
        */

        // Hash de la contraseña con MD5
        const hashedPassword = hashPassword(contrasena);
        console.log("clave cifrada: " + hashedPassword);

        // Crear un nuevo usuario
        const newUser = new User({
            nombre_usuario,
            correo_electronico,
            contraseña: hashedPassword,
            rol
        });

        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Función para iniciar sesión con cifrado
exports.login = async (req, res) => {
    const { correo_electronico, contrasena } = req.body;

    try {
        // Buscar el usuario por correo electrónico
        const user = await User.findOne({ correo_electronico });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        console.log("clave para entrar: " + contrasena);
        const hashedInputPassword = hashPassword(contrasena);
        console.log("hash bd: " + user.contraseña);
        console.log("hash calculado: " + hashedInputPassword);

        /*
        if (hashedInputPassword !== user.contraseña) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        */

        if (contrasena !== user.contraseña) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar el token JWT
        const token = jwt.sign({ usuario_id: user.usuario_id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user: { usuario_id: user.usuario_id, nombre_usuario: user.nombre_usuario, correo_electronico: user.correo_electronico, rol: user.rol } });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
// Función para iniciar sesión sin cifrar
exports.loginSinCifrar = async (req, res) => {
    const { correo_electronico, contrasena } = req.body;

    try {
        console.log("****************************************");
        console.log("****************************************");
        console.log("correo: " + correo_electronico);
        console.log("clave enviada: " + contrasena);
        console.log("****************************************");
        console.log("****************************************");

        const user = await User.findOne({ correo_electronico });
        console.log("Usuario encontrado: " + user);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Aquí verificamos que la contraseña proporcionada coincida exactamente con la almacenada
        if (contrasena !== user.contraseña) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Generar el token JWT
        const token = jwt.sign(
            { usuario_id: user.usuario_id, rol: user.rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            token,
            user: {
                usuario_id: user.usuario_id,
                nombre_usuario: user.nombre_usuario,
                correo_electronico: user.correo_electronico,
                rol: user.rol
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
};

//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************