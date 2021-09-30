var num1 = parseFloat(prompt("Digite o primeiro numero:"));
var num2 = parseFloat(prompt("Digite o segundo numero:"));
var num3 = parseFloat(prompt("Digite o terceiro numero:"));


var maiorNumero = [num1,num2,num3].sort(function(a,b){return a - b})[2];
var ordemCresc = [num1,num2,num3].sort(function(a,b){return a - b});

alert("Maior numero é: " + maiorNumero);
alert("Ordem crescente dos numeros: " + ordemCresc);