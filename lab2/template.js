$(function(){

	var z = prompt('enter a number?');
	z = parseInt(z);

	var y = square(z);


	console.log('the square of ' + z + ' is ' + y);

	var a = volume(3, 5, 7);
	var b = volume(2, 9, 8);
	var c = volume(1, 8, 2);
 	console.log('the volume of a is : ' + a);
 	console.log('the volume of b is : ' + b);
 	console.log('the volume of c is : ' + c);

});

function square(x)
{
	var s = x * x;
	return s;
}

function volume(l, w, h)
{
	return l * w * h;
}




/*
 animals = []
 colors = []
 people = []


while and for loop

 (a)nimal, (c)olor, (p)erson, or (q)uit?
 How many? 3
 color -> blue -> colors array
 color -> green -> colors array

 type -> bear -> animals array


 do you want to delete something? or quit
 y - what?  (a)  || (c)  || (p)

 color [blue, green, red, yellow]

 type in green, remove green

 here are your arrays
 C:
 A:
 P:


 */
