/* 1- Realizar un programa que pida cargar una fecha cualquiera, 
luego verificar si dicha fecha corresponde a Navidad 
(se debe cargar por separado el día, el mes y el año)
*/

let day = parseInt(prompt('Ingrese el día'))
let month = parseInt(prompt('Ingrese el mes, númerico del 1 al 12'))
let year = parseInt(prompt('Ingrese el año'))

if(month == 12 && day == 25)
    console.log("Es navidad!") 

/*
2- Se ingresan tres valores por teclado, 
si todos son iguales se imprime la suma del primero con el segundo y a 
este resultado se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples). 
En el caso que no sean iguales, solo indica que los números no son iguales
*/

let a = parseInt(prompt('Ingrese un número'))
let b = parseInt(prompt('Ingrese un número'))
let c = parseInt(prompt('Ingrese un número'))

if(a == b == c) console.log((a+b)*c)
else console.log("Los números no son iguales")

/* 
Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, 
imprimir en la página la leyenda ' Todos los números son menores a diez'.
*/

let d = parseInt(prompt('Ingrese un número'))
let e = parseInt(prompt('Ingrese un número'))
let f = parseInt(prompt('Ingrese un número'))

if(d < 10 && e<10 && f<10 ) console.log('Todos los números son menores a 10')

/*
Escribir un programa que pida ingresar la coordenada de un punto en el plano, 
es decir dos valores enteros x e y.
Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. 
(1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)
*/

let x = parseInt(prompt('Ingrese coordenada x'))
let y = parseInt(prompt('Ingrese coordenada y'))

if(x>0){
    if(y>0) console.log('1er cuadrante')
    else console.log('4to cuadrante')
}else{
    if(y>0) console.log('2do cuadrante')
    else console.log('3er cuadrante')
}

/*
De un operario se conoce su sueldo y los años de antigüedad. 
Se pide confeccionar un programa que lea los datos de entrada e informe
	a. Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, 
        otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
	b. Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, 
        otorgarle un aumento de 5 %.
	c. Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.
*/

let salary = parseInt(prompt('Ingrese el sueldo'))
let antiquety = parseInt(prompt('Ingrese la antiguedad en años'))

if(salary< 500 && antiquety >= 10) console.log(salary*1.20)
else if(salary<500 && antiquety < 10) console.log(salary*1.05)
else console.log(salary)

/*
Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar el mensaje 'Promocionado'. 
Tener en cuenta que para obtener el promedio debemos operar suma=nota1+nota2+nota3; y luego hacer promedio=suma/3;
Cuando cargamos una nota y queremos convertir inmediatamente el valor ingresado a entero podemos hacer:
nota1=prompt('Ingrese primer nota:','');
nota1=parseInt(nota1);
O en forma más corta:
	nota1=parseInt(prompt('Ingrese primer nota:',''));
*/

let grade1=parseInt(prompt('Ingrese primer nota:',''));
let grade2=parseInt(prompt('Ingrese segunda nota:',''));
let grade3=parseInt(prompt('Ingrese tercer nota:',''));
if((grade1+grade2+grade3)/3>=7) console.log('Promocionado') 

/*
Solicitar que se ingrese dos veces una clave. 
Mostrar un mensaje si son iguales 
(tener en cuenta que para ver si dos variables tienen el mismo valor almacenado debemos utilizar el operador ==)
*/

let password=prompt('Ingrese su clave')
let confirmPassword=prompt('Re-Ingrese su clave')
if(password == confirmPassword) console.log('Son iguales');

/*
Realizar un programa que lea por teclado dos números, 
si el primero es mayor al segundo informar su suma y diferencia, 
... (135 líneas restantes)*/