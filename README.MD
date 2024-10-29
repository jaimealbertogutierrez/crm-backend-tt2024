<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
# PROYECTO FINAL DE DESARROLLO WEB AVANZADO - COMPONENTE DE BACKEND EN EXPRESS NODEJS
### PROGRAMA TALENTO TECH
### MINISTERIO DE TECNOLOGÍAS DE INFORMACIÓN Y LAS COMUNICACIONES

**ELABORO:**  
**ING. JAIME ALBERTO GUTIÉRREZ MEJÍA**  
**CC. 9733675 DE ARMENIA, QUINDÍO**  
**ANALISTA PROGRAMADOR JAVA Y NODEJS**

**Fecha de elaboración:** Octubre 2024

**MINTIC**  
**TALENTO TECH**  
**TODOS LOS DERECHOS RESERVADOS**  
**JAIME ALBERTO GUTIÉRREZ**  
**2024**

## CRM Backend API

### Introducción

Este proyecto es una API RESTful construida en **Node.js** con **Express** para gestionar las operaciones de un sistema de CRM (Customer Relationship Management). La API permite gestionar clientes, usuarios, y otros datos relevantes, utilizando autenticación basada en **JWT (JSON Web Tokens)** para asegurar las rutas protegidas y mantener la integridad de la información.

Express** ha sido seleccionado como el framework base debido a su facilidad para construir APIs rápidas y escalables, mientras que **JWT** asegura que las operaciones sensibles estén protegidas mediante autenticación robusta.

### Requisitos Previos y Versiones

Para ejecutar este proyecto, asegúrate de tener las siguientes versiones:

- **Node.js**: v14.17.0 o superior.
- **NPM**: v6.14.13 o superior.

#### Dependencias Principales

- `express`: Framework para construir la API.
- `jsonwebtoken`: Para la generación y verificación de tokens JWT.
- `dotenv`: Para la gestión de variables de entorno sensibles.
- `mongoose`: Para la conexión y manejo de datos con MongoDB (opcional).

### Estructura del Proyecto

La estructura del proyecto sigue una **arquitectura hexagonal** para facilitar la escalabilidad y el mantenimiento:

```plaintext
src/
├── config/          # Configuraciones del entorno y del sistema
├── controllers/     # Controladores para manejar solicitudes y lógica HTTP
├── middleware/      # Middleware de autenticación y permisos con JWT
├── models/          # Modelos de datos que representan las entidades de negocio
├── routes/          # Definición de rutas para los endpoints de la API
└── app.js           # Punto de entrada principal de la aplicación
```

- **Config**: contiene configuraciones como la conexión a la base de datos y configuraciones de JWT.
- **Controllers**: lógica de las operaciones CRUD para cada entidad del CRM.
- **Middleware**: incluye el middleware de autenticación JWT.
- **Models**: definición de modelos para las entidades, como `Cliente` y `Usuario`.
- **Routes**: contiene las rutas principales de la API.

### Instalación y Configuración

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/tu-repo.git
   cd tu-repo
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar el archivo `.env`:**

   Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno:

   ```plaintext
   JWT_SECRET=tuSecretoJWT
   DB_URI=mongodb://localhost:27017/crm
   PORT=3000
   ```

### Comandos de Ejecución y Despliegue Local

Para iniciar el proyecto en un entorno de desarrollo:

```bash
npm start
```

Para ejecutar en modo producción:

```bash
npm run start:prod
```

> **Nota:** Ajusta las variables del archivo `.env` según tu entorno de despliegue.

### Autenticación JWT

Este proyecto implementa autenticación **JWT** para proteger las rutas sensibles:

1. El cliente envía sus credenciales al endpoint `/auth/login`.
2. La API valida las credenciales y, si son correctas, genera un **JWT** que se devuelve en la respuesta.
3. Para acceder a rutas protegidas, el cliente debe incluir el token en el encabezado `Authorization` como `Bearer <token>`.

#### Ejemplo de Encabezado:

```plaintext
Authorization: Bearer <token>
```

### Ejemplo de Uso y Rutas Principales

A continuación, se describen algunas rutas clave de la API:

#### Autenticación

- **POST /auth/login**: Autentica al usuario y devuelve un JWT.

#### Gestión de Clientes

- **GET /clientes**: Retorna todos los clientes (requiere token).
- **POST /clientes**: Crea un nuevo cliente.
- **GET /clientes/:id**: Retorna los detalles de un cliente específico.
- **PUT /clientes/:id**: Actualiza los datos de un cliente.
- **DELETE /clientes/:id**: Elimina un cliente.

##### Ejemplo de Solicitud

```plaintext
POST /clientes
Headers:
  Authorization: Bearer <token>
Body:
{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "555-555-5555"
}
```

##### Respuesta de Ejemplo:

```json
{
  "cliente_id": "1",
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "555-555-5555"
}
```

### Contribución y Licencia

#### Contribución

Para contribuir:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`).
3. Haz un commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Envía los cambios a tu fork (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.

#### Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
<!-- *********************************************************************** -->
