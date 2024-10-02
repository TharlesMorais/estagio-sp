const monthlyBilling = {
  "billing": [
    { "day": 1, "value": 22174.1664 },
    { "day": 2, "value": 24537.6698 },
    { "day": 3, "value": 26139.6134 },
    { "day": 4, "value": 0.0 },
    { "day": 5, "value": 0.0 },
    { "day": 6, "value": 26742.6612 },
    { "day": 7, "value": 0.0 },
    { "day": 8, "value": 42889.2258 },
    { "day": 9, "value": 46251.174 },
    { "day": 10, "value": 11191.4722 }
  ]
}

function calculateBilling(monthlyBilling) {
    const validDays = monthlyBilling.billing.filter(day => day.value > 0)

    if (validDays.length === 0) {
        console.log("Não houve faturamento no mês.")
        return
    }

    const minValue = Math.min(...validDays.map(day => day.value))
    const maxValue = Math.max(...validDays.map(day => day.value))

    const totalValue = validDays.reduce((total, day) => total + day.value, 0)
    const averageValue = totalValue / validDays.length

    const daysAboveAverage = validDays.filter(day => day.value > averageValue).length

    console.log(`Menor valor de faturamento: R$${minValue.toFixed(2)}`)
    console.log(`Maior valor de faturamento: R$${maxValue.toFixed(2)}`)
    console.log(`Dias com faturamento superior à média: ${daysAboveAverage}`)
}

calculateBilling(monthlyBilling)
