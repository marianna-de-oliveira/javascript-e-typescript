/* 
&& ~> precisa que TODAS AS CONDIÇÕES sejam verdadeiras, caso contrário, dá false e retorna o valor falso
|| ~> depende apenas que uma condição seja verdadeira para dar true e vai retornar o valor verdadeiro

FALSY
false
0
"" '' `` 
null / undefined
NaN

todas as outras são verdadeiras 
*/

// function falaOi(){
//   return 'Oi'
// }

// let vaiExecutar = false
// console.log(vaiExecutar && falaOi()) // exibe falso

// vaiExecutar = 'Mari'
// console.log(vaiExecutar && falaOi()) // executou a função, pois ambos são verdadeiros 

console.log(0 || false || null || 'Mari' || true) // o valor exibido é sempre o primeiro verdadeiro da condição
console.log(0 || false || null || '' || NaN ) // exibe o ultimo valor falso avaliado