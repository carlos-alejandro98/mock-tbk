const serverless = require("serverless-http")

// Import all route modules
const express = require("express")
const cors = require("cors")
const { requestLogger, requireAuth } = require("../../middleware/auth")
const abonosRoutes = require("../../routes/abonos")
const transaccionesRoutes = require("../../routes/transacciones")
const otrosRoutes = require("../../routes/otros")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use(requestLogger)
app.use(requireAuth)

// Routes
app.use("/", abonosRoutes)
app.use("/", transaccionesRoutes)
app.use("/", otrosRoutes)

// Export serverless handler
module.exports.handler = serverless(app)
