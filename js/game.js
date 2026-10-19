const grid = document.querySelector('.grid')
const Spanplayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const cardsData = [
    { id: 'newton', imagem: 'Newton' },
    { id: 'newton', imagem: 'apple' },
    
    { id: 'einstein', imagem: 'albert' },
    { id: 'einstein', imagem: 'emc' },
    
    { id: 'santos-dumont', imagem: 'Dumont' },
    { id: 'santos-dumont', imagem: '14bis' },
    
    { id: 'Shakespeare', imagem: 'SHAKESPEARE' },
    { id: 'Shakespeare', imagem: 'skulls' },
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

    if (achounenê.length === 8) {
        clearInterval(this.loop)
        alert(`PARABÉNS, ${Spanplayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos.`)
    }
}

const checarCartas = () => {
    const firstCharacter = cartaUM.getAttribute('data-character')
    const secondCharacter = cartaDOIS.getAttribute('data-character')

    if (firstCharacter === secondCharacter) {
        cartaUM.firstChild.classList.add('achounenê')
        cartaDOIS.firstChild.classList.add('achounenê')

        cartaUM = ''
        cartaDOIS = ''

        fimDeJogo()
    } else {
        setTimeout(() => {
            cartaUM.classList.remove('revelacarta')
            cartaDOIS.classList.remove('revelacarta')

            cartaUM = ''
            cartaDOIS = ''
        }, 500)
    }
}

const revelarcarta = ({ target }) => {
    if (target.parentNode.className.includes('revelacarta')) {
        return
    }

    if (cartaUM === '') {
        target.parentNode.classList.add('revelacarta')
        cartaUM = target.parentNode
    } else if (cartaDOIS === '') {
        target.parentNode.classList.add('revelacarta')
        cartaDOIS = target.parentNode
        
    
        checarCartas()
    }
}

//
const criarCartas = (item) => {
   const card = createElement('div', 'cartas')
   const front = createElement('div', 'face front')
   const back = createElement('div', 'face back')

   front.style.backgroundImage = `url('../img/${item.imagem}.jfif')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revelarcarta)
    
    card.setAttribute('data-character', item.id)

    return card
}

const loadGame = () => {
    const aleatorio = cardsData.sort(() => Math.random() - 0.5)

    aleatorio.forEach((item) => {
        const card = criarCartas(item)
        grid.appendChild(card)
    })
}

const startTimer = () => {
    this.loop = setInterval(() => {
        const tempoAtual = +timer.innerHTML
        timer.innerHTML = tempoAtual + 1
    }, 1000)
}

window.onload = () => {
    const name = localStorage.getItem('Nome')
    Spanplayer.innerHTML = name || "Jogador" //

    startTimer()
    loadGame()   
}

