const express = require("express")
const otrosData = require("../data/otrosData")

const router = express.Router()

// GET /deuda-detalle
router.get("/deuda-detalle", (req, res) => {
    const response = {
        ...otrosData.deudaDetalle,
        meta: {
            ...otrosData.deudaDetalle.meta,
            _rqDateTime: otrosData.deudaDetalle.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// POST /deuda-detalle
router.post("/deuda-detalle", (req, res) => {
    const response = {
        ...otrosData.deudaDetallePost,
        meta: {
            ...otrosData.deudaDetallePost.meta,
            _rqDateTime: otrosData.deudaDetallePost.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// GET /health - Health check endpoint
router.get("/health", (req, res) => {
    const response = {
        ...otrosData.health,
        timestamp: otrosData.health.timestamp(),
    }
    res.status(200).json(response)
})

module.exports = router
