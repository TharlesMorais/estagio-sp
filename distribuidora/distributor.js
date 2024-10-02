const monthlyRevenue = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
}

function calculatePercentage(revenue) {
  const totalRevenue = Object.values(revenue).reduce((total, value) => total + value, 0)
  
  console.log(`Faturamento total: R$${totalRevenue.toFixed(2)}`)
  
  for (const state in revenue) {
      const percentage = (revenue[state] / totalRevenue) * 100
      console.log(`${state}: ${percentage.toFixed(2)}%`)
  }
}

calculatePercentage(monthlyRevenue)
