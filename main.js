

var colors= ['red','blue','green'];
var colors2=new Array('red','blue','green');

colors[3]= 'green';
colors.push('purple');

var numbers= [1,2,3,4,5,6,7,8,9];

for (var i = numbers.length - 1; i >= 0; i--) {
	
	//console.log(i);
}
var x=0;
while(x<10){
	//console.log(x);
	x++;
}
if(1!=1 && x==10){
	console.log('this is true');

}else{
	console.log('it is true');
}

var palabra= 'hello kitty '
console.log(palabra.charAt(2));
var arreglo=new Array();
var corrimiento = 4;

for (var j=0; j <= palabra.length - 1; j++) {
	arreglo.push((palabra.charAt((j+corrimiento) % palabra.length)));
}
alert(arreglo.join(""));

/*la idea es eliminar este comentario haciendo una regreción a un commit anterior hecho en github*/
/* *regresión */
var x=4;


//alert(colors);
//alert(numbers.reverse());
