/**VARIAVEIS PADRAO */
const container = document.querySelector('.container')
let cont = 0;
const arrayAutomatico = [];
const arraydeCores = [];


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
            criarSequencia();
        }

    })
}
/**Gerar numero */
function numeroAleatório() {
    const number = Math.round(Math.random() * 3)
    return number;
}




/**Cria sequencia para o jogo */
function criarSequencia() {

    let val = numeroAleatório();
    console.log(val)


    
        if (val == 0) {
            arrayAutomatico.push('Green')
            animarQuandoClicar('Green')
            


        } else if (val == 1) {
            arrayAutomatico.push('Red')
            animarQuandoClicar('Red')
            


        } else if (val == 2) {
            arrayAutomatico.push('Yellow')
            animarQuandoClicar('Yellow')
            

        } else {
            arrayAutomatico.push('Blue')
            animarQuandoClicar('Blue')
            

        }



}

/**Adicionar e remover a animação do botão */

function animarQuandoClicar(cor) {
    const btnClicado = document.querySelector(`.${cor}`)

        btnClicado.classList.add(`animacao${cor}`)
    
    
    setTimeout(() => {
        btnClicado.classList.remove(`animacao${cor}`)
    }, 500)

    setTimeout(()=>{
        verificaClique(arrayAutomatico, arraydeCores)
    }, 2000)
    


}



/**VERICAR O CLIQUE */


function verificaClique(arrayAutomatico, arrayCores) {
    const spanPlacar = document.querySelector('.placar')
    const spanInfo = document.querySelector('.span__info')


    const result = arrayAutomatico.every((el, i) => {
        if (el === arrayCores[i]) {
            return true;
        }
    })


        if (result == true) {

            console.log('acertei')
            console.log(arrayAutomatico)
            console.log(arrayCores)
            cont++;
            spanPlacar.innerText = cont;
            

            setTimeout(()=>{
                criarSequencia();
            },1000)
           
                

        } else {

            cont = 0;
            spanPlacar.innerText = '0'
            arrayCores = []
            arrayAutomatico = [];
            spanInfo.innerText = 'Que pena, você perdeu'
            setTimeout(() => {
                criarTabuleiro();
            }, 2000);
            


        }

   


}


/**Adicionar evento de acender o botão */

function adicionarEventoAosBotoes() {
    const botoes = document.querySelectorAll('.button')
    botoes.forEach((el) => {
        el.addEventListener('click', (event) => {
            const button = event.target
            const colorButton = button.classList[1]
            arraydeCores.push(colorButton)
            console.log(colorButton)
            animarQuandoClicar(colorButton, button)

        })
    })
}








criarTabuleiro();
adicionarEventoAosBotoes();

