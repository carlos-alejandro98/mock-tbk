const express = require("express")
const cors = require("cors")

const { requestLogger, requireAuth } = require("./middleware/auth")

// Import route modules
const abonosRoutes = require("./routes/abonos")
const transaccionesRoutes = require("./routes/transacciones")
const otrosRoutes = require("./routes/otros")

const app = express()
const PORT = process.env.PORT || 3000

// ============================================================================
// MIDDLEWARE
// ============================================================================
app.use(cors())
app.use(express.json())

app.use(requestLogger)
app.use(requireAuth)

// ============================================================================
// ROUTES
// ============================================================================
// Mount route modules
app.use("/", abonosRoutes)
app.use("/", transaccionesRoutes)
app.use("/", otrosRoutes)

// ============================================================================
// ERROR HANDLING
// ============================================================================
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Endpoint Not Found",
    message: `La ruta ${req.originalUrl} no existe`,
    code: "ENDPOINT_NOT_FOUND",
    timestamp: new Date().toISOString(),
    note: "Contacte al administrador para información sobre endpoints disponibles",
  })
})

// ============================================================================
// SERVER STARTUP
// ============================================================================
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`)
  console.log(`🔒 Autenticación requerida para todos los endpoints excepto /health`)
  console.log(`🛡️  Protección contra ataques de fuerza bruta activada`)
  console.log(`❤️  Health check: http://localhost:${PORT}/health`)
})

module.exports = app