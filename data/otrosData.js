const otrosData = {
    deudaDetalle: {
        meta: {
            _msgId: "65587a5968b0652778684500",
            _version: "1.1.5",
            _rqDateTime: () => new Date().toISOString().slice(0, 19),
        },
        data: {
            listaCobros: [
                {
                    motivo: "SERVICIO TBK",
                    fechaAbonoTarificada: "2025-02-05",
                    fechaAbonoAbonada: "2025-02-05",
                    montoTransaccion: 19580,
                    ivaRetencion: 3720,
                    periodo: "2025-01-01",
                    tipoTransaccion: "110",
                    moduloLogica: "128",
                    origenDelDato: "",
                },
            ],
            totalRegistros: 8,
            totalPaginas: 2,
        },
        links: {
            self: "mocks",
        },
    },

    deudaDetallePost: {
        meta: {
            _msgId: "65587a5968b0652778684501",
            _version: "1.1.5",
            _rqDateTime: () => new Date().toISOString().slice(0, 19),
            _clientId: "CANALES-DIGITALES",
        },
        data: {
            listaCobros: [
                {
                    motivo: "SERVICIO TBK",
                    fechaAbonoTarificada: "2025-02-05",
                    fechaAbonoAbonada: "2025-02-05",
                    montoTransaccion: 19580,
                    ivaRetencion: 3720,
                    periodo: "2025-01-01",
                    tipoTransaccion: "110",
                    moduloLogica: "128",
                    origenDelDato: "",
                },
                {
                    motivo: "COMISION ADICIONAL",
                    fechaAbonoTarificada: "2025-02-06",
                    fechaAbonoAbonada: "2025-02-06",
                    montoTransaccion: 25000,
                    ivaRetencion: 4750,
                    periodo: "2025-01-01",
                    tipoTransaccion: "115",
                    moduloLogica: "129",
                    origenDelDato: "",
                },
            ],
            totalRegistros: 15,
            totalPaginas: 3,
            resumenDeuda: {
                montoTotalDeuda: 44580,
                montoTotalIva: 8470,
                cantidadCobros: 15,
            },
        },
        links: {
            self: "mocks",
        },
    },

    health: {
        status: "OK",
        message: "Servidor funcionando correctamente",
        timestamp: () => new Date().toISOString(),
        endpoints: {
            abonos: 6,
            transacciones: 6,
            otros: 2,
            total: 14,
        },
    },
}

module.exports = otrosData