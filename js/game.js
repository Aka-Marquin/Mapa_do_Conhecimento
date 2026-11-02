const grid = document.querySelector('.grid')
const Spanplayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

let segundos = 0
let intervaloTimer = null

const characters = [
   'Aristoteles',
   'Galileo',
   'goat',
   'Marie Curie',
   'Newton',
   'ptolomeo',
   'René',
   'tesla'
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

var cartaUM = ''
let cartaDOIS = ''


const fimDeJogo = () => {
    const achounenê = document.querySelectorAll('.achounenê')

    if (achounenê.length === 16) {
        clearInterval(intervaloTimer)
        intervaloTimer = null
        alert(`PARABÉNS, ${Spanplayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`)
    }
}

const checarCartas = () =>{

    const firtsCharacter = cartaUM.getAttribute('data-character')
    const secondCharacter = cartaDOIS.getAttribute('data-character')

    if(firtsCharacter === secondCharacter){
        cartaUM.firstChild.classList.add('achounenê')
        cartaDOIS.firstChild.classList.add('achounenê')

        cartaUM = ''
        cartaDOIS = ''

        fimDeJogo()
    }

    else{
        setTimeout(() =>{
        cartaUM.classList.remove('revelacarta')
        cartaDOIS.classList.remove('revelacarta')

        cartaUM = ''
        cartaDOIS = ''
     }, 500)
    }

}

const revelarcarta = ({target}) =>{
    if (target.parentNode.className.includes('revelacarta')){
        return
    }

    if(cartaUM === ''){
    target.parentNode.classList.add('revelacarta')
    cartaUM = target.parentNode
    }

    else if (cartaDOIS === ''){
    target.parentNode.classList.add('revelacarta')
    cartaDOIS = target.parentNode
    }

    checarCartas()
    
}

const criarCartas = (character) => {
   const card = createElement('div', 'cartas')
   const front = createElement('div', 'face front')
   const back = createElement('div', 'face back')

   front.style.backgroundImage = `url('../assets/characters/${character}.jpg')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revelarcarta)
    card.setAttribute('data-character', character)

    return card
}

const loadGame = () => {

    const duplicar = [... characters, ...characters]

    const aleatorio = duplicar.sort(() => Math.random() - 0.5)

    duplicar.forEach((character) => {
        const card = criarCartas(character)
        grid.appendChild(card)
    })
}

const startTimer = () => {
    // CONDIÇÂO DE FAZER UM CRONOMETRO CORRER POR VEZ//
    if (intervaloTimer !== null) return

    intervaloTimer = setInterval(() => {
        segundos++
    const minutos = Math.floor(segundos / 60) //DIVIDINDO OS NUMEROS POR 60, ja que 1 minuto tem 60 segundos ou 60 segundos sao 1 minutos. //
    const segundosRestantes = segundos % 60  //PEGA O RESTO DA DIVISAO (1/60), PARA SABER QUANTOS FALTAM PRA COMPLETAR O MINUTO// 

        timer.innerHTML = `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}` // ESSE string CONVERTE O AS LETRAS EM NUEMROS, fu ncionaou na linha da cagada e gambiarra //
        //ESSES padStart DEIXAM OS NUMEROS ACOMPANHADOS DO 0, TIPO AO INVES DE 5 ELE FAZ 05, mas nao funcionoukkkkkkkkkkkkkkkkkkkkkkkk//
    }, 1000)
}


window.onload = () =>{
const name = localStorage.getItem('Nome')
Spanplayer.innerHTML = name

startTimer()
loadGame()   
}