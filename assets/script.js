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


/**Adicionar evento de acender o botão */

function adicionarEventoAosBotoes() {
    const botoes = document.querySelectorAll('.button')
    botoes.forEach((el) => {
        el.addEventListener('click', (event) => {
            const button = event.target
            const colorButton = button.classList[1]
            arraydeCores.push(colorButton)
            animarQuandoClicar(colorButton)

        })
    })
}


/** Iniciar jogo - Insere o nome e desativa o modal */

function iniciarJogo() {
    const modal = document.querySelector('.modal')
    const btnStart = document.querySelector('#inputName')
    btnStart.addEventListener('click', (event) => {
        event.preventDefault();
        adicionarEventoAosBotoes()

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




/**Função que anima em sequencia  */



function criarSequencia() {

    let val = numeroAleatório();
    console.log(val)


    if (val == 0) {
        arrayAutomatico.push('Green')
        animarArray(arrayAutomatico)



    } else if (val == 1) {
        arrayAutomatico.push('Red')
        animarArray(arrayAutomatico)



    } else if (val == 2) {
        arrayAutomatico.push('Yellow')
        animarArray( arrayAutomatico)


    } else {
        arrayAutomatico.push('Blue')
        animarArray(arrayAutomatico)
        


    }



}


function animarArray( arrayAutomatico){
    console.log(arrayAutomatico)
    
    const intervalo = setInterval(()=>{

        if(arrayAutomatico.length>0){
            arrayAutomatico.forEach((el,i)=>{
                const btnClicado = document.querySelector(`.${el}`)
                setTimeout(()=>{
                       
                    btnClicado.classList.add(`animacao${el}`)
                    
                },i*1000)
                    
                
                        
                    
                    
                //mudar aqui
        
        
                setTimeout(() => {
                    btnClicado.classList.remove(`animacao${el}`)
                },i*500)
        
        
        
            })
        } else {
            clearInterval //teste
        }

        
    },)
    
    console.log('Array clicado:::'+arraydeCores)
    console.log('Array Auto:::'+arrayAutomatico)

    

     verificaClique(arrayAutomatico, arraydeCores)
    
        
        
    
        
    
}

/**Adicionar e remover a animação do botão */

function animarQuandoClicar(cor, arrayAutomatico) {
    

    const btnClicado = document.querySelector(`.${cor}`)

    
        
            btnClicado.classList.add(`animacao${cor}`)
            
       

        setTimeout(()=>{
            btnClicado.classList.remove(`animacao${cor}`)
        },500)

}







/**VERICAR O CLIQUE */


function verificaClique(arrayAutomatico, arrayCores) {
    const spanPlacar = document.querySelector('.placar')
    const spanInfo = document.querySelector('.span__info')


    const result = arrayAutomatico.every((el, i) => el === arrayCores[i])


    if (result == true) {
        cont++;
        spanPlacar.innerText = cont;
        arrayCores = [];



       
            criarSequencia();
        



    } else {

        cont = 0;
        spanPlacar.innerText = '0'
        arrayCores = [];
        arrayAutomatico = [];
        spanInfo.innerText = 'Que pena, você perdeu'
        setTimeout(()=>{
            main.innerHTML = ''
            criarTabuleiro();
        },3000)
    }




}










criarTabuleiro();


