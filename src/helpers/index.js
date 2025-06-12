const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat("en-AR", {
        style: "currency",
        currency: "USD"
    })
    return formatter.format(valor)
}

export {
    formatearDinero
}