const opcoes = ["Pedra", "Papel", "Tesoura"]
let placarUsuario = 0 ;
let placarComputador = 0 ;


function jogar(jogadaDoUsuario){
    //pegar a jogadador do usuario {x}
    //pegar a jogada do computador {}
    //saber quem ganhou {x}
    //atualizar pontuação {}
    const sorteio = Math.floor(Math.random (0) * opcoes.length );
    const jogadaComputador = opcoes[sorteio];
    document.querySelector("#computador").innerText = (opcoes[sorteio]);

    
    if(jogadaComputador == jogadaDoUsuario){
        document.querySelector("#result").innerText = ("EMPATE");

    }else if(jogadaComputador == "Pedra" && jogadaDoUsuario == "Tesoura"){
        document.querySelector("#result").innerText = ("VOCÊ PERDEU");
        placarComputador ++;
    }else if( jogadaComputador == "Papel" && jogadaDoUsuario == "Pedra"){
        document.querySelector("#result").innerText = ("VOCÊ PERDEU");
        placarComputador ++;
    }else if(jogadaComputador =="Tesoura" && jogadaDoUsuario == "Papel"){
        document.querySelector("#result").innerText = ("VOCÊ PERDEU");
        placarComputador ++;
    }else{
        document.querySelector("#result").innerText = ("VOCÊ GANHOU");
        placarUsuario++;
    }

    document.querySelector("#placarUsuario").innerText = placarUsuario;
    document.querySelector("#placarComputador").innerText = placarComputador;



}

