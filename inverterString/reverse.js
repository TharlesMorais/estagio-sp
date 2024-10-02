const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

function invertString(str) {
  let inverted = ''

  for (let i = str.length - 1; i >= 0; i--) {
      inverted += str[i]
  }

  return inverted
}

readline.question('Digite uma palavra para inverter: ', (inputString) => {
  const result = invertString(inputString)
  console.log(`String invertida: ${result}`)
  readline.close()
});
