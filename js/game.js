const grid = document.querySelector('.grid')
const Spanplayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

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


const fimDeJogo = () =>{
    const achounenê = document.querySelectorAll('.achounenê')

    if (achounenê.length === 16){
        clearInterval(this.loop)
        alert (`PARABENS, ${Spanplayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`)
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

const startTimer = () =>{

this.loop = setInterval(()=>{

    const tempoAtual = +timer.innerHTML
    timer.innerHTML = tempoAtual + 1
}, 1000)
}


window.onload = () =>{
const name = localStorage.getItem('Nome')
Spanplayer.innerHTML = name

startTimer()
loadGame()   
}