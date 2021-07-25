
function clik() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar() {
    window.open("https://github.com/isaelsilva1039/java_script/tree/main"); // abrii outra janela 
    window.location.href = "https://github.com/isaelsilva1039/java_script/tree/main" // abri na mesma janela
}

function trocar(elemento) {
    // document.getElementById("passeoma").innerHTML = "Obrigado por passar o mauser aqui" ;
    elemento.innerHTML = "Obrigado por passar o mauser aqui";
}

function voltar(elemento) {
    // document.getElementById("passeoma").innerHTML = "Passe o mause aqui" ;
    elemento.innerHTML = "Passe o mause aqui";
}

function load() {
    alert("Pagina Carregada");
}

function functionOnchag(elemento) {
    console.log(elemento.value);
}

function validaIdade(idade) {
    var valida;
    if(idade >= 18){
        valida = true;
    }else{
        valida = false;
    }

    return valida;
}

var idade = prompt("Qual a sua idade ?");
console.log(validaIdade(idade));


function soma(n1,n2) {
   return n1 + n2;
}

alert(soma(10,20));

var nome = "isael jose da silva";
var idade = 25;
var frase = " Brasil e o melhor pais do mundo";

console.log(nome);
console.log(frase.replace("Brasil"," Japão"));


var lista = ["Maçã", "Manga", "Laranja", "abacate"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join( " - " ));

var frutas = [{nome:"Lranja", cor:"Laranja"} , {nome:"uva", cor:"roxa" }];
console.log(frutas[1])


var idade = prompt ("Qual A sua idade");
if(idade >= 18){
    alert("Voce e maior de idade ");
}else{
    alert("Voce e menor de idade");
    var idade = prompt ("Qual A sua idade");
}

var count = 0;
while (count <= 5 ) {
    alert(count);
    count = count +1
    
}

var d = new Date();
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());

