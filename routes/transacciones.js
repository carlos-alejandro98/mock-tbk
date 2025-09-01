const express = require("express")
const transaccionesData = require("../data/transaccionesData")

const router = express.Router()

// POST /transacciones-pendientes
router.post("/transacciones-pendientes", (req, res) => {
    const response = {
        ...transaccionesData.pendientes,
        meta: {
            ...transaccionesData.pendientes.meta,
            _rqDateTime: transaccionesData.pendientes.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// POST /transacciones
router.post("/transacciones", (req, res) => {
    const response = {
        ...transaccionesData.transacciones,
        meta: {
            ...transaccionesData.transacciones.meta,
            _rqDateTime: transaccionesData.transacciones.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// POST /transacciones/abonos
router.post("/transacciones/abonos", (req, res) => {
    const response = {
        ...transaccionesData.abonos,
        meta: {
            ...transaccionesData.abonos.meta,
            _rqDateTime: transaccionesData.abonos.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// POST /transacciones-cantidad
router.post("/transacciones-cantidad", (req, res) => {
    const response = {
        ...transaccionesData.cantidad,
        meta: {
            ...transaccionesData.cantidad.meta,
            _rqDateTime: transaccionesData.cantidad.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// GET /transaccion-encabezado
router.get("/transaccion-encabezado", (req, res) => {
    const response = {
        ...transaccionesData.encabezado,
        meta: {
            ...transaccionesData.encabezado.meta,
            _rqDateTime: transaccionesData.encabezado.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// POST /transacciones-resumen
router.post("/transacciones-resumen", (req, res) => {
    const response = {
        ...transaccionesData.resumen,
        meta: {
            ...transaccionesData.resumen.meta,
            _rqDateTime: transaccionesData.resumen.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

module.exports = router
