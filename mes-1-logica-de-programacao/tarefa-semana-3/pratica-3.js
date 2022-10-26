// Numeros primos //

let numeroPrimo = n => {
    for (let i = 2; i < n; i++)
        if (n % i == 0)
            return false

    return true
}

const lista = [3, 18, 237, 35, 158, 90, 87, 1]

for (n of lista)
    console.log(numeroPrimo(n))
console.log()
