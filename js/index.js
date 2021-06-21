/*
Descricao : O arquivo index.js é o script principal que realiza todas as funções necessárias para o jogo da forca.

Aluno : Jonas Marcos Dias Rocha

Data : 20/06/2021
*/

"use strict";
console.log("Jogo da forca");

let quiz = {};
var underline = [];
var reproduziu = [];
var vidas = 3;
var vidaPerdida = false;
var encontrou = 0;
var mensagem = "";
let repetir;

function menu() {
    console.log("-Digite start() para iniciar um novo jogo;\n-Digite letra('letra desejada') para chutar uma letra, ex: letra('a');\n-Digite vidas para verificar quantos vidas tem;\n-Você tem "+vidas+" tentativas para adivinhar a palavra.");
}
menu();

/*Possiveis palavras*/

/*ANIMAL*/
var gato = {
    palavra: ["G", "A", "T", "O"],
    categoria: "Animal",
    jogador: new Array(4),
    vidas: vidas
}

var abelha = {
    palavra: ["A", "B", "E", "L", "H", "A"],
    categoria: "Animal",
    jogador: new Array(6),
    vidas: vidas
}

var cachorro = {
    palavra: ["C", "A", "C", "H", "O", "R", "R", "O"],
    categoria: "Animal",
    jogador: new Array(8),
    vidas: vidas
}

var girafa = {
    palavra: ["G", "I", "R", "A", "F", "A"],
    categoria: "Animal",
    jogador: new Array(6),
    vidas: vidas
}

var hiena = {
    palavra: ["H", "I", "E", "N", "A"],
    categoria: "Animal",
    jogador: new Array(5),
    vidas: vidas
}

/*CANTOR*/
var rogerinho = {
    palavra: ["R", "O", "G", "E", "R", "I", "N", "H", "O"],
    categoria: "Cantor(a)",
    jogador: new Array(9),
    vidas: vidas
}

var avril = {
    palavra: ["A", "V", "R", "I", "L", " ", "L", "A", "V", "I", "G", "N", "G", "E"],
    categoria: "Cantor(a)",
    jogador: new Array(14),
    vidas: vidas
}

var justin = {
    palavra: ["J", "U", "S", "T", "I", "N", " ", "T", "I", "M", "B", "E", "R", "L", "A", "K", "E"],
    categoria: "Cantor(a)",
    jogador: new Array(15),
    vidas: vidas
}

var gustavo = {
    palavra: ["G", "U", "S", "T", "A", "V", "O", "", "L", "I", "M", "A"],
    categoria: "Cantor(a)",
    jogador: new Array(12),
    vidas: vidas
}

var thiaguinho = {
    palavra: ["T", "H", "I", "A", "G", "U", "I", "N", "H", "O"],
    categoria: "Cantor(a)",
    jogador: new Array(10),
    vidas: vidas
}


/*Lista de possiveis palavras*/
var palavras = [gato, abelha, cachorro, girafa, hiena, rogerinho, avril, justin, gustavo, thiaguinho];

/*NOVO JOGO / FUNCAO START*/
function start() {
    vidas = 3;
    quiz = {};
    quiz = palavras[Math.floor(Math.random() * palavras.length)];

    underline = (function (quiz) {
        let letra = [];

        for (var i = 0; i < quiz.palavra.length; i++) {

            if (quiz.palavra[i] == " ") {
                letra.push(" ");
            } else {
                letra.push("_");
            }

        }
        return letra;
    })(quiz);



    console.log("DICA: " + quiz.categoria + ": \n" + underline.join(" ") + "   tentativas restantes: " + vidas + ".");
    
    

}

/*funcao pra escolher a letra*/
function letra(letter) {
    
    let letraMaiuscula = letter.toUpperCase();
    if(reproduziu.includes(letraMaiuscula)){
        
        repetir = true;
    } else {
        repetir = false;
    }
    
    
    reproduziu.push(letter.toUpperCase());
    
    /*LOOP para Atribuir as letras*/
    for (var i = 0; i < quiz.palavra.length; i++) {
        
        if (letter.toUpperCase() == quiz.palavra[i] && repetir == false) {
            underline[i] = letter.toUpperCase();  
            
        } else {
           

        }

        
        
    }
    
    /*LOOP que verifica se existe as letras ou nao*/
    for (var i = 0; i < quiz.palavra.length; i++) {
        
        if (letter.toUpperCase() == quiz.palavra[i]) {
            encontrou = 1;
            break
            
            
        } else {
           
            encontrou = 2;
        }
        
        
    }
    
    if(encontrou == 1 && repetir == false) {
        mensagem = "Sim, existe a letra " + reproduziu[reproduziu.length-1] + "\n" + underline.join(" ") + "\nvidas: " + vidas + ".";
        console.log(mensagem);
        mensagem="";
        
    } else if(encontrou == 2 && repetir == false) {
        vidaPerdida = true;
            if(vidaPerdida) {
                vidas--;
            }
        vidaPerdida = false;
        
        mensagem = "Não existe a letra " + reproduziu[reproduziu.length-1] + "\n" + underline.join(" ") + "\nvidas: " + vidas + ".";
        console.log(mensagem);
        mensagem= "";
        
        
    } else if(repetir == true) {
        
        mensagem = "Você já escolheu essa letra! Escolha outra: \n" + underline.join(" ") + "\nvidas: " + vidas + ".";
        console.log(mensagem);
        mensagem = "";
    }
    
    quiz.jogador = underline.slice(0);
    
    /*Avisa se o jogador ganhou ou perdeu*/
    if (underline.toString() === quiz.palavra.toString()) {
            
        win();
    }

    if (vidas == 0) {

        lose();
    }


}

/*Volte do inicio caso o jogador Ganha ou Perca*/
function gameOver() {
    quiz = {};
    underline = [];
    reproduziu = [];
    vidas = 3;
    vidaPerdida = false;
    encontrou = 0;
    mensagem = "";
}

/*Função win*/
function win() {
    console.log("Parabéns, Você venceu e se salvou!!! Digite start() se quiser jogar novamente");
    gameOver();
}

/*Função lose*/
function lose() {
    console.log("Suas vidas acabaram, Você perdeu e foi enforcado !!! A palavra era " +quiz.palavra.toString()+ "\nDIGITE start() se quiser jogar novamente...");
    gameOver();
}
start();