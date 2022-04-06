


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

/**VARIAVEIS PADRAO */
let cont = 0;
let jogadasPessoa = [];
let jogadasMaquina = [];


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
            gerarAnimacaoNoBotao();
            adicionarEventosAosBotoes();
            
        }

    })
}

function gerarNumeroRandomico(max, min){
    return Math.floor(Math.random() * (max-min)) + min;
}


/**ANIMAÇÃO */
function animacao(botao, cor){
    botao.classList.add(`animacao${cor}`)
    setTimeout(()=>{
        botao.classList.remove(`animacao${cor}`)
    },1000)
}

/**ANIMAR BOTAO */

function animarBotao(botao, cor){
    setTimeout(()=>{
        animacao(botao, cor)
    },2000)
}




/** Gerar animacao Randomica */




function gerarAnimacaoNoBotao() {
    const numeroRandom = gerarNumeroRandomico(0, 4);

    const btn = document.querySelectorAll('.button')[numeroRandom];
    const corBotao = btn.classList[1].split('-')[2];

    jogadasMaquina.push(btn)
    
    let contadorR = 0;

    const intervaloAnimacao = setInterval(()=>{
        if(jogadasMaquina.length > 0){
            setTimeout(()=>{
                if(contadorR < jogadasMaquina.length){

                    const btnAtual = jogadasMaquina[contadorR]
                    const corAtual = btnAtual.classList[1].split('-')[2];

                    animarBotao(btnAtual, corAtual);

                    contadorR++;
                } else {
                    contadorR = 0;
                    clearInterval(intervaloAnimacao);
                }
            },500)
        } else {
            animarBotao(btn,corBotao)
            clearInterval(intervaloAnimacao)
        }
    },500)
}


/**Adicionar evento aos botões */

function adicionarEventosAosBotoes(){
    const botoes = document.querySelectorAll('.button')

    botoes.forEach((el)=>{
        el.addEventListener('click',(e)=>{
            const botaoClicado = e.target;
            const corBotaoClicado = e.target.classList[1].split('-')[2];
            console.log(botaoClicado)
            jogadasPessoa.push(botaoClicado)
            
            

            if(verificaPerda()) {
                alert('Perdeu!')
                const main = document.querySelector('#main')
                main.innerHTML =''
                cont = 0;
                jogadasMaquina = [];
                jogadasPessoa = [];
                
                setTimeout(()=>{
                    criarTabuleiro();
                },1000)

            } else if( jogadasPessoa.length === jogadasMaquina.length){
                jogadasPessoa =[];
                gerarAnimacaoNoBotao()
                console.log('Acertou!')
                cont++;
                let spanPlacar =  document.querySelector('.placar')
                spanPlacar.innerText = cont;

            }
   
        })
    })
    
}





/**Condição vitória */

function verificaPerda(){
    for(let i = 0; i <jogadasPessoa.length ; i++){
        const botao = jogadasMaquina[i];

        if(jogadasPessoa[i] !== botao){
            //errou
            return true;


        }

    }
    return false;
}







criarTabuleiro();
