// ============================================================================
// AUTHENTICATION & SECURITY MIDDLEWARE
// ============================================================================

const failedAttempts = new Map()
const MAX_FAILED_ATTEMPTS = 5
const LOCKOUT_TIME = 15 * 60 * 1000 // 15 minutes

const VALID_CREDENTIALS = {
    username: "userMasivo",
    password: "masivo2025",
}

// Record failed authentication attempts
const recordFailedAttempt = (clientIP) => {
    const attempts = failedAttempts.get(clientIP) || { count: 0, lockoutUntil: 0 }
    attempts.count += 1

    if (attempts.count >= MAX_FAILED_ATTEMPTS) {
        attempts.lockoutUntil = Date.now() + LOCKOUT_TIME
        console.log(`[SECURITY] IP ${clientIP} locked out for ${LOCKOUT_TIME / 60000} minutes`)
    }

    failedAttempts.set(clientIP, attempts)
}

// Basic Authentication middleware
const basicAuth = (req, res, next) => {
    const clientIP = req.ip || req.connection.remoteAddress
    const authHeader = req.headers.authorization

    // Check if IP is locked out
    const attempts = failedAttempts.get(clientIP)
    if (attempts && attempts.count >= MAX_FAILED_ATTEMPTS) {
        const timeLeft = attempts.lockoutUntil - Date.now()
        if (timeLeft > 0) {
            console.log(`[SECURITY] Blocked request from locked IP: ${clientIP}`)
            return res.status(429).json({
                error: "Access Temporarily Blocked",
                message: "Demasiados intentos fallidos. Acceso temporalmente bloqueado.",
                code: "RATE_LIMITED",
                timestamp: new Date().toISOString(),
            })
        } else {
            // Reset attempts after lockout period
            failedAttempts.delete(clientIP)
        }
    }

    if (!authHeader) {
        recordFailedAttempt(clientIP)
        return res.status(401).json({
            error: "Authentication Required",
            message: "Acceso no autorizado",
            code: "UNAUTHORIZED",
            timestamp: new Date().toISOString(),
        })
    }

    if (!authHeader.startsWith("Basic ")) {
        recordFailedAttempt(clientIP)
        return res.status(401).json({
            error: "Authentication Failed",
            message: "Credenciales inválidas",
            code: "INVALID_AUTH",
            timestamp: new Date().toISOString(),
        })
    }

    try {
        const base64Credentials = authHeader.split(" ")[1]

        if (!base64Credentials) {
            recordFailedAttempt(clientIP)
            return res.status(401).json({
                error: "Authentication Failed",
                message: "Credenciales inválidas",
                code: "INVALID_AUTH",
                timestamp: new Date().toISOString(),
            })
        }

        const credentials = Buffer.from(base64Credentials, "base64").toString("ascii")
        const [username, password] = credentials.split(":")

        if (!username || !password) {
            recordFailedAttempt(clientIP)
            return res.status(401).json({
                error: "Authentication Failed",
                message: "Credenciales inválidas",
                code: "INVALID_AUTH",
                timestamp: new Date().toISOString(),
            })
        }

        if (username !== VALID_CREDENTIALS.username || password !== VALID_CREDENTIALS.password) {
            recordFailedAttempt(clientIP)
            console.log(`[SECURITY] Failed login attempt from IP: ${clientIP}, Username: ${username}`)
            return res.status(401).json({
                error: "Authentication Failed",
                message: "Credenciales inválidas",
                code: "INVALID_AUTH",
                timestamp: new Date().toISOString(),
            })
        }

        if (failedAttempts.has(clientIP)) {
            failedAttempts.delete(clientIP)
        }

        console.log(`[SECURITY] Successful authentication from IP: ${clientIP}`)
        next()
    } catch (error) {
        recordFailedAttempt(clientIP)
        return res.status(401).json({
            error: "Authentication Failed",
            message: "Credenciales inválidas",
            code: "INVALID_AUTH",
            timestamp: new Date().toISOString(),
        })
    }
}

// Request logging middleware
const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString()
    const method = req.method
    const url = req.originalUrl
    const ip = req.ip || req.connection.remoteAddress

    console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`)
    next()
}

// Authentication wrapper for selective route protection
const requireAuth = (req, res, next) => {
    if (req.path === "/health") {
        return next()
    }
    basicAuth(req, res, next)
}

module.exports = {
    basicAuth,
    requestLogger,
    requireAuth,
}
