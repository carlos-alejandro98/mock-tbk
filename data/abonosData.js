const abonosData = {
    cuentas: {
        meta: {
            _msgId: "65587a5968b060be7863bc60",
            _version: "1.2.1",
            _rqDateTime: () => new Date().toISOString().slice(0, 19),
            _clientId: "CANALES-DIGITALES",
        },
        data: [
            {
                numeroCuenta: "1055917",
                tipoCuenta: "03",
                codigoBanco: "26",
                moneda: "152",
            },
        ],
        links: {
            self: "mocks",
        },
    },

    local: {
        meta: {
            _rqId: "65587a5968b1c817792a30a0",
            _rqDateTime: () => new Date().toISOString().slice(0, 19),
            _version: "1.2.1",
        },
        data: {
            totalRegistros: 114,
            totalPaginas: 23,
            listadoAbonosPorLocal: [
                {
                    fechaAbono: "2025-08-27",
                    codigoComercio: "25169921",
                    numeroCuenta: "1055917",
                    codigoBanco: "26",
                    moneda: "152",
                    tipoProducto: "C",
                    montoVenta: -99,
                    anulacion: 0,
                    cobroServicios: 0,
                    abono: -99,
                    montoExento: 0,
                },
                {
                    fechaAbono: "2025-08-27",
                    codigoComercio: "25170377",
                    numeroCuenta: "1055917",
                    codigoBanco: "26",
                    moneda: "152",
                    tipoProducto: "C",
                    montoVenta: 46065,
                    anulacion: 0,
                    cobroServicios: 0,
                    abono: 46065,
                    montoExento: 0,
                },
            ],
        },
        links: {
            self: "https://api.apic-2022.prdnpci.us-east-1.aws.transbank.local/transbank/interno/abonos-local",
        },
    },

    abonosCuentas: {
        meta: {
            _msgId: "65587a5968b1c82f792a3290",
            _version: "1.2.1",
            _rqDateTime: () => new Date().toISOString().slice(0, 19),
            _clientId: "CANALES-DIGITALES",
        },
        data: [
            {
                codigoBanco: "26",
                numeroCuenta: "1055917",
                tipoCuenta: "03",
                moneda: "152",
                montoAbono: 9204589755,
                montoAbonoCredito: 7907704297,
                montoAbonoDebito: 1172031843,
                montoAbonoPrepago: 124853615,
            },
        ],
        links: {
            self: "https://api.apic-2022.prdnpci.us-east-1.aws.transbank.local/transbank/interno/abonos-cuenta?rut=898622002&fechaDesde=2025-08-27&fechaHasta=2025-08-27&cuentas=1055917&codigos-banco=26&monedas=152",
        },
    },

    detalle: {
        meta: {
            _rqId: "65587a5968b1c841792a4ef0",
            _rqDateTime: () => new Date().toISOString().slice(0, 19),
            _version: "1.2.1",
        },
        data: {
            totales: [
                {
                    moneda: "152",
                    montoAbono: 9204589755,
                    montoAbonoCredito: 7907704297,
                    montoAbonoDebito: 1172031843,
                    montoAbonoPrepago: 124853615,
                },
            ],
            abonos: [
                {
                    fechaAbono: "27-08-2025",
                    montoVenta: 1206431666,
                    comisionVenta: 9138105,
                    ivaComisionVenta: 1736423,
                    anulacion: 23742966,
                    ivaDevolucionComisionAnulacion: 34741,
                    cobroServicios: 0,
                    devolucionComisionAnulacion: 182930,
                    ivaCobroServicios: 0,
                    abono: 1172031843,
                    codigoBanco: "26",
                    numeroCuenta: 1055917,
                    tipoMoneda: "152",
                    tipoProducto: "D",
                    numeroCobrosPendientes: 0,
                    cobrosPendientesBrutos: 0,
                    numeroVentas: 9349,
                    retenciones: 0,
                },
            ],
        },
        links: {
            self: "https://api.apic-2022.prdnpci.us-east-1.aws.transbank.local/transbank/interno/abonos-detalle?rut=898622002&fechaDesde=2025-08-27&fechaHasta=2025-08-27&producto=C,D,P",
        },
    },

    resumenLocal: {
        meta: {
            _rqId: "65587a5968b1c892792aabe0",
            _rqDateTime: () => new Date().toISOString().slice(0, 19),
            _version: "1.2.1",
        },
        data: [
            {
                montoAbonado: -99,
                cobroPendienteNoAplicado: 0,
                cobroPendienteAplicado: 0,
                ventasNetas: -99,
                anulacionesNetas: 0,
                cobrosServicio: 0,
                ventaNetaAfecta: -99,
                montoExento: 0,
                totalVentas: 0,
                totalAnulaciones: 0,
                totalCobrosServicios: 0,
                totalComisionesVentas: 0,
                totalIvaVentas: 99,
                totalDevolucionComision: 0,
                totalDevolucionIvaComision: 0,
                cobrosIvaServicios: 0,
                totalComisionAdicional: 0,
                totalIvaComisionAdicional: 0,
                totalDevolucionComisionAdicional: 0,
                totalDevolucionIvaComisionAdicional: 0,
                totalMontoVuelto: 0,
                totalComisiones: 99,
                totalDevoluciones: 0,
                codigoComercio: "25169921",
            },
        ],
        links: {
            self: "https://api.apic-2022.prdnpci.us-east-1.aws.transbank.local/transbank/interno/abonos-resumen-local",
        },
    },

    abonos: {
        meta: {
            _version: "1.2.1",
            _rqDateTime: () => new Date().toISOString().slice(0, 19),
            _clientId: "CANALES-DIGITALES",
            _msgId: "65587a5968b1c8ac792ac390",
        },
        data: [
            {
                moneda: "152",
                montoAbono: 9204589755,
                montoAbonoCredito: 7907704297,
                montoAbonoDebito: 1172031843,
                montoAbonoPrepago: 124853615,
                fechaAbono: "27-08-2025",
            },
        ],
        links: {
            self: "https://api.apic-2022.prdnpci.us-east-1.aws.transbank.local/transbank/interno/abonos?rut=898622002&fecha-desde=2025-08-27&fecha-hasta=2025-08-27&tipo-reporte=2025-08-27",
        },
    },
}

module.exports = abonosData