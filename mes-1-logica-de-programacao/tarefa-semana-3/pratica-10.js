// Registrando votos //

let qualOPreferido = (votosBrasil, votosArgentina, votosEspanha, votosPortugal) => {
    if (votosBrasil >= votosArgentina && votosBrasil >= votosEspanha && votosBrasil >= votosPortugal)
        return "Brasil"
    else if (votosArgentina >= votosEspanha && votosArgentina >= votosPortugal)
        return "Argentina"
    else if (votosEspanha >= votosPortugal)
        return "Espanha"
    else
        return "Portugal"
}

let preferidoDaCopa = listaVotos => {
    let votosBrasil = 0
    let votosArgentina = 0
    let votosEspanha = 0
    let votosPortugal = 0

    for (voto of listaVotos) {
        votosBrasil += voto === 1 ? 1 : 0
        votosArgentina += voto === 2 ? 1 : 0
        votosEspanha += voto === 3 ? 1 : 0
        votosPortugal += voto === 4 ? 1 : 0
    }
    
    const preferido = qualOPreferido(votosBrasil, votosArgentina, votosEspanha, votosPortugal)

    console.log(`Brasil: ${votosBrasil} voto(s)`)
    console.log(`Argentina: ${votosArgentina} voto(s)`)
    console.log(`Espanha: ${votosEspanha} voto(s)`)
    console.log(`Portugal: ${votosPortugal} voto(s)\n`)

    console.log("Resultado:")
    console.log(`${preferido} é o preferido para ganhar a Copa do Mundo!`)
}

 let listaVotos = [4, 3, 2, 1, 1, 1, 1, 4]
 preferidoDaCopa(listaVotos)