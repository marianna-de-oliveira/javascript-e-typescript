let a = 'a' //b
let b = 'b' //c
let c = 'c' //a
let x = a

// fazer o valor de a apontar para b, o de b apontar para c e o de c apontar para a
a = b
b = c
c = x
console.log(a, b, c)

/*
outra forma para fazer é o seguinte:
[a, b, c] = [b, c, a]
*/