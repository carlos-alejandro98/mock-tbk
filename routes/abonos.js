const express = require("express")
const abonosData = require("../data/abonosData")

const router = express.Router()

// GET /abonos/cuentas
router.get("/abonos/cuentas", (req, res) => {
    const response = {
        ...abonosData.cuentas,
        meta: {
            ...abonosData.cuentas.meta,
            _rqDateTime: abonosData.cuentas.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// POST /abonos-local
router.post("/abonos-local", (req, res) => {
    const response = {
        ...abonosData.local,
        meta: {
            ...abonosData.local.meta,
            _rqDateTime: abonosData.local.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// GET /abonos-cuentas
router.get("/abonos-cuentas", (req, res) => {
    const response = {
        ...abonosData.abonosCuentas,
        meta: {
            ...abonosData.abonosCuentas.meta,
            _rqDateTime: abonosData.abonosCuentas.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// GET /abonos-detalle
router.get("/abonos-detalle", (req, res) => {
    const response = {
        ...abonosData.detalle,
        meta: {
            ...abonosData.detalle.meta,
            _rqDateTime: abonosData.detalle.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// POST /abonos-resumen-local
router.post("/abonos-resumen-local", (req, res) => {
    const response = {
        ...abonosData.resumenLocal,
        meta: {
            ...abonosData.resumenLocal.meta,
            _rqDateTime: abonosData.resumenLocal.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

// GET /abonos
router.get("/abonos", (req, res) => {
    const response = {
        ...abonosData.abonos,
        meta: {
            ...abonosData.abonos.meta,
            _rqDateTime: abonosData.abonos.meta._rqDateTime(),
        },
    }
    res.status(200).json(response)
})

module.exports = router
