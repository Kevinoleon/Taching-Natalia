

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
console.log(arreglo.join(""));

var fruit= "banana";

switch(fruit){
	case "kiwi":
		console.log("I love bananas");
		break;	
	case "apple":
		console.log("I hate apples");
		break;
	default:
		console.log("Is that a fruit?");
		break;
}

var person = {
	firstName: 'kevin',
	lastName: 'leon',
	age:25,
	address: {
		street:'rivadavia',
		city:'BsAs',
		state:'Caba'		
	},
	fullname: function(){
		return this.firstName+" "+this.lastName+"!";
	}
}

var apple= new Object();

apple.color='red';
apple.shape='round';

apple.describe=function(){
	return 'apple is the color '+this.color+' and the shape '+this.shape;
}

//patrón constructor
function Fruit(name, color, shape){
	this.name=name;
	this.color=color;
	this.shape=shape;

	this.describe= function(){
	return this.name+' is the color '+this.color+' and the shape '+this.shape;
}
}

var users= [
	{
		name:"kevin", age:"25"
	},
	{
		name: "natalia", age: "20"
	}
];


var noki=new Fruit('noki', 'red', 'round');


console.log(users[0].age);

function doClick1(){
	alert("you clicked")
}

function doClick2(id){
	if(id.innerHTML=="you clicked here"){
		id.innerHTML = "click me to change html button";
	}else{
		id.innerHTML="you clicked here";
	}
	
}



function doClick3(){
	var heading=document.getElementById("heading");

	heading.innerHTML="esto acaba de cambiar";
	}
	





//alert(colors);
//alert(numbers.reverse());
