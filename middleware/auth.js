// ============================================================================
// AUTHENTICATION MIDDLEWARE - X-Client-ID Header Validation Only
// ============================================================================

const VALID_CLIENT_ID = "1613627a543c5e2697c350cecb5f5b29"

const requireAuth = (req, res, next) => {
    // Only allow health check without authentication
    if (req.path === "/health" && req.method === "GET") {
        return next()
    }

    // Get X-Client-ID from headers
    const clientId = req.headers["x-client-id"]

    // Check if header is missing
    if (!clientId) {
        return res.status(401).json({
            error: "Authentication Required",
            message: "No tiene autorización para consultar el servicio",
            code: "MISSING_CLIENT_ID",
            timestamp: new Date().toISOString(),
        })
    }

    // Validate exact match with valid Client ID
    if (clientId !== VALID_CLIENT_ID) {
        return res.status(401).json({
            error: "Unauthorized Access",
            message: "No tiene autorización para consultar el servicio",
            code: "INVALID_CLIENT_ID",
            timestamp: new Date().toISOString(),
        })
    }

    // Authentication successful
    next()
}

const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString()
    const method = req.method
    const url = req.originalUrl
    const ip = req.ip || req.connection.remoteAddress || "unknown"

    console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`)
    next()
}

module.exports = {
    requestLogger,
    requireAuth,
}