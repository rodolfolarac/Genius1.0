/**VARIAVEIS PADRAO */
let cont = 0;
let arrayAutomatico = [];
let arraydeCores = [];


// Criação do tabuleiro

function criarTabuleiro() {
    const main = document.querySelector('#main')

    const container = document.createElement('div')
    container.classList.add('container')

    const btnGreen = document.createElement('div')
    btnGreen.classList.add('button', 'botao--green')

    const btnYellow = document.createElement('div')
    btnYellow.classList.add('button', 'botao--yellow')

    const btnRed = document.createElement('div')
    btnRed.classList.add('button', 'botao--red')

    const btnBlue = document.createElement('div')
    btnBlue.classList.add('button', 'botao--blue')

    const btnInit = document.createElement('div')
    btnInit.classList.add('init')

    //span

    const welcomeSpan = document.createElement('span')
    welcomeSpan.classList.add('span__info')
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
    iniciarJogo();


}




/** Iniciar jogo - Insere o nome e desativa o modal */

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



criarTabuleiro();


