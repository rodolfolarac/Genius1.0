const container = document.querySelector('.container')
const arraydeCores = [];





function iniciarJogo() {
    const modal = document.querySelector('.modal')
    const btnStart = document.querySelector('#inputName')
    btnStart.addEventListener('click', (event) => {
        event.preventDefault();

        const namePlayer = document.querySelector('.namePlayer').value

        if (namePlayer === '') {
            alert('Insira o seu nome antes de jogar!')
        } else {
            modal.classList.add('hide')
            modal.classList.add('show')
            const name = document.querySelector('.name').innerText = namePlayer;
        }


    })
}




//  function animarQuandoClicar(cor,botao){
//      const btnClicado = container.querySelector(`.${cor}`)
//      console.log(btnClicado)
//      btnClicado.classList.add(`animacao${cor}`)
//      console.log(`animacao${cor}`)
//      console.log(btnClicado)

//  }

/**Gerar numero */
// function numeroAleatório(){
//     const number = Math.round(Math.random()*3)
//     return console.log(number);
// }


//testes



// function adicionarEventoAosBotoes(){
//     const botoes =  document.querySelectorAll('.button')
//    botoes.forEach((el)=>{
//        el.addEventListener('click',(event)=>{
//         const button = event.target
//         const colorButton = button.classList[1]
//         arraydeCores.push(colorButton)
//         animarQuandoClicar(colorButton,button)

//        })
//    })
// }
// adicionarEventoAosBotoes();



// Criação do tabuleiro

function criarTabuleiro() {
    const main = document.querySelector('#main')

    const container = document.createElement('div')
    container.classList.add('container')

    const btnGreen = document.createElement('div')
    btnGreen.classList.add('button', 'Green')

    const btnYellow = document.createElement('div')
    btnYellow.classList.add('button', 'Yellow')

    const btnRed = document.createElement('div')
    btnRed.classList.add('button', 'Red')

    const btnBlue = document.createElement('div')
    btnBlue.classList.add('button', 'Blue')

    const btnInit = document.createElement('div')
    btnInit.classList.add('button', 'init')

    //span

    const welcomeSpan = document.createElement('span')
    welcomeSpan.innerText = 'Bem vindo!'

    const welcomeName = document.createElement('span')
    welcomeName.classList.add('name')

    welcomeSpan.append(welcomeName)


    const spanPlacar = document.createElement('span')
    spanPlacar.classList.add('placar')
    spanPlacar.innerText = 'Placar aqui!'

    btnInit.append(welcomeSpan, spanPlacar)





    //criação modal
    const modalBox = document.createElement('div')
    modalBox.classList.add('modal')

    const modalLabel = document.createElement('label')
    modalLabel.setAttribute('for', 'inputName')
    modalLabel.innerText = 'Insira seu Nome'


    const modalInput = document.createElement('input');
    modalInput.setAttribute('type', 'text')
    modalInput.classList.add('namePlayer')


    const modalBtn = document.createElement('button')
    modalBtn.setAttribute('id', 'inputName')
    modalBtn.innerText = 'Jogar'


    modalBox.append(modalLabel, modalInput, modalBtn)






    container.append(btnGreen, btnYellow, btnRed, btnBlue, btnInit, modalBox)
    main.append(container)


}

criarTabuleiro();
iniciarJogo();