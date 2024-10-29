//*********************************************************************
//*********************************************************************
//*********************************************************************
// src/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

//*********************************************************************
//*********************************************************************
//*********************************************************************
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Obtiene el token del encabezado

    if (!token) return res.sendStatus(401); // Si no hay token, respuesta 401 (No autorizado)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Si el token no es válido, respuesta 403 (Prohibido)
        req.user = user; // Guardamos la información del usuario en la solicitud
        next(); // Continuamos con la siguiente función de middleware
    });
};

module.exports = authenticateToken;

//*********************************************************************
//*********************************************************************
//*********************************************************************