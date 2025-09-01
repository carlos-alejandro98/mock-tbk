# Servidor de Abonos API

Servidor Node.js modular que proporciona múltiples endpoints para consultar información de abonos, transacciones y deudas.

## Estructura del Proyecto

\`\`\`
├── server.js                 # Servidor principal
├── package.json             # Dependencias y scripts
├── routes/                  # Rutas organizadas por funcionalidad
│   ├── abonos.js           # Endpoints de abonos
│   ├── transacciones.js    # Endpoints de transacciones
│   └── otros.js            # Endpoints adicionales
├── data/                   # Datos mock organizados
│   ├── abonosData.js       # Mocks de abonos
│   ├── transaccionesData.js # Mocks de transacciones
│   └── otrosData.js        # Otros mocks
└── README.md               # Documentación
\`\`\`

## Instalación

1. Instalar dependencias:
\`\`\`bash
npm install
\`\`\`

2. Ejecutar el servidor:
\`\`\`bash
# Modo desarrollo (con nodemon)
npm run dev

# Modo producción
npm start
\`\`\`

## Endpoints Disponibles

### Abonos (6 endpoints)

#### GET /abonos/cuentas
Retorna información básica de cuentas de abonos.

#### GET /abonos-cuentas
Retorna información detallada de cuentas con montos de abonos.

#### GET /abonos
Retorna información general de abonos por fecha.

#### GET /abonos-detalle
Retorna detalle completo de abonos con totales y desglose por tipo de producto.

#### POST /abonos-local
Retorna abonos agrupados por local/comercio.

#### POST /abonos-resumen-local
Retorna resumen detallado de abonos por local con todos los totales.

### Transacciones (6 endpoints)

#### POST /transacciones
Retorna listado de transacciones con detalles completos.

#### POST /transacciones-pendientes
Retorna contadores de transacciones (abonadas, pendientes, anuladas).

#### POST /transacciones/abonos
Retorna listado detallado de abonos de transacciones.

#### POST /transacciones-cantidad
Retorna estadísticas y contadores de transacciones por tipo y producto.

#### POST /transacciones-resumen
Retorna resumen de transacciones con información de abonos.

#### GET /transaccion-encabezado
Retorna información de encabezado de transacciones.

### Otros (2 endpoints)

#### GET /deuda-detalle
Retorna detalle de deudas y cobros de servicios.

#### POST /deuda-detalle
Retorna detalle extendido de deudas con resumen total.

#### GET /health
Endpoint de verificación de salud del servidor.

## Uso con Postman

1. Importa el archivo `Abonos_API.postman_collection.json` en Postman
2. La colección incluye:
   - **Carpeta Abonos**: 6 endpoints relacionados con abonos
   - **Carpeta Transacciones**: 6 endpoints de transacciones
   - **Carpeta Otros**: Endpoints adicionales y health check
   - Tests automáticos para validar las respuestas
   - Variable de entorno `base_url` configurada para `http://localhost:3000`
   - Ejemplos de body para requests POST

## Arquitectura Modular

El proyecto está organizado de manera modular para facilitar el mantenimiento:

- **`routes/`**: Cada archivo de ruta maneja una categoría específica de endpoints
- **`data/`**: Los mocks están separados por funcionalidad y utilizan funciones para generar timestamps dinámicos
- **`server.js`**: Archivo principal limpio que solo configura el servidor e importa las rutas

## Estructura de Respuestas

Todas las respuestas siguen el formato estándar:
\`\`\`json
{
    "meta": {
        "_msgId": "...",
        "_version": "...",
        "_rqDateTime": "...",
        "_clientId": "..."
    },
    "data": [...],
    "links": {
        "self": "..."
    }
}
\`\`\`

## Puerto

El servidor se ejecuta por defecto en el puerto 3000. Puedes cambiarlo configurando la variable de entorno `PORT`.

## Endpoints Implementados (15 total)

### Abonos
- ✅ GET /abonos/cuentas
- ✅ GET /abonos-cuentas  
- ✅ GET /abonos
- ✅ GET /abonos-detalle
- ✅ POST /abonos-local
- ✅ POST /abonos-resumen-local

### Transacciones
- ✅ POST /transacciones
- ✅ POST /transacciones-pendientes
- ✅ POST /transacciones/abonos
- ✅ POST /transacciones-cantidad
- ✅ POST /transacciones-resumen
- ✅ GET /transaccion-encabezado

### Otros
- ✅ GET /deuda-detalle
- ✅ POST /deuda-detalle
- ✅ GET /health

## Ventajas de la Estructura Modular

- **Mantenibilidad**: Cada funcionalidad está en su propio archivo
- **Escalabilidad**: Fácil agregar nuevos endpoints sin afectar el código existente
- **Organización**: Separación clara entre datos, rutas y configuración del servidor
- **Reutilización**: Los datos mock pueden ser reutilizados fácilmente
