/**VARIAVEIS PADRAO */
const container = document.querySelector('.container')
let cont = 1;
const arrayAutomatico =[];
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
function numeroAleatório(){
    const number = Math.round(Math.random()*3)
    return number;
}




/**Cria sequencia para o jogo */
function criarSequencia(){
    
        let val = numeroAleatório();
        console.log(val)
        if(val == 0){
            console.log('oi0')
            animarQuandoClicar('Green')
            arrayAutomatico.push('Green')
            
            
        }else if(val == 1){
            console.log('oi1')
            animarQuandoClicar('Red')
            arrayAutomatico.push('Red')
            
            
        }else if(val == 2){
            console.log('oi2')
            animarQuandoClicar('Yellow')
            arrayAutomatico.push('Yellow')
            
        }else {
            console.log('oi3')
            animarQuandoClicar('Blue')
            arrayAutomatico.push('Blue')
            
        }
        
        
    

    setInterval(()=>{
        verificaClique(arrayAutomatico,arraydeCores)
    },(3000))
}

/**Adicionar e remover a animação do botão */

function animarQuandoClicar(cor){
    const btnClicado = document.querySelector(`.${cor}`)
    console.log(btnClicado)
    
    btnClicado.classList.add(`animacao${cor}`)
    setTimeout(()=>{
        btnClicado.classList.remove(`animacao${cor}`)
    },500)
    

}



/**VERICAR O CLIQUE */


function verificaClique(arrayAutomatico, arrayCores){
    const spanPlacar = document.querySelector('.placar')
    if(arrayAutomatico == ''){
        criarSequencia();
    }else {
        const result = arrayAutomatico.every((el, i)=>{
            el === arrayCores[i]
        })
        if(result == true){
            cont++;
            console.log('acertei')
            
            spanPlacar.innerText = cont;
            criarSequencia();
            //Função que atualiza o placar com a variavel cont
    
        }else if( result == false){
            cont = 0;
            spanPlacar.innerText = '0'

        }
    }
    
}


/**Adicionar evento de acender o botão */

function adicionarEventoAosBotoes(){
    const botoes =  document.querySelectorAll('.button')
   botoes.forEach((el)=>{
       el.addEventListener('click',(event)=>{
        const button = event.target
        console.log(button)
        const colorButton = button.classList[1]
        arraydeCores.push(colorButton)
        console.log(colorButton)
        animarQuandoClicar(colorButton,button)

       })
   })
}








criarTabuleiro();
adicionarEventoAosBotoes();

