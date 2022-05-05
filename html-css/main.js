const form = document.querySelector('#form')
const ul = document.querySelector('#dates ul')
const sectionDates = document.querySelector('#dates')



const buttonClear = document.querySelector('.button.clear')
buttonClear.addEventListener('click', (e) => {
    sectionDates.classList.remove('show')
    sectionDates.classList.add('invisible')
    ul.innerHTML = ''
    form.querySelector('input[type="number"]').value = 0
    form.querySelector('input[type="text"]').value = ''
})

function criarElemento(elemento, className) {
    const elem = document.createElement(`${elemento}`);
    elem.classList.add('list')
    // elem.className = "leas"

    return elem;
}

function clacDate(dias) {
    const date = new Date()
    const howMuchDays = date.getDate() + dias
    const msFuture = date.setDate(howMuchDays)
    const dateFuture = new Date(msFuture)
    const dayInMs = 24 * 60 * 60 * 1000

    return dateFuture   
}

function formSubmit(event) {
    event.preventDefault()
    let inputValue = Number(form.querySelector('input[type="number"]').value);
    let nome = form.querySelector('input[type="text"]').value
    sectionDates.classList.remove('invisible')
    sectionDates.classList.add('show')

    const date = clacDate(inputValue)
    const li = criarElemento('li', 'list')
    li.innerHTML = `Daqui ${inputValue} dias será dia ${date}, ${nome}`
    console.log(li)
    ul.appendChild(li)
}

form.addEventListener('submit', formSubmit)

