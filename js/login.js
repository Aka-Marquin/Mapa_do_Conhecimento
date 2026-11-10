const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login_form')

const Inputar = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

const Submitar = (event) => {
    event.preventDefault();

    localStorage.setItem('Nome', input.value)
    window.location ='../Pages/game.html'
}


input.addEventListener('input', Inputar)
form.addEventListener('submit', Submitar)