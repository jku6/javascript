/*
a = []
array

o ={}
object


//The dog object
dog = {}
//assigning traits to the dog
dog.name = fido
dog.age = 3
dog.gender = "male"
dog.has_shots = true;

dog.fav_foods = ['bacon', 'gravy', 'cats'];

var food = dog.fav_foods[1]
food -> gravy

person = {}
person.name = "sally"
person.gender ="female"
person.age = 30;
person.loves_dog = true;

dog.master = person;

//Creates a cat object
cat = {name:'fluffy', age:4, likes_dogs:false};


*/


$(function(){

	setTimeout(display_text, 3000);
	setInterval(display_more, .01);


});

var counter = 0;

function display_text()
{
	$('#test').text('hello world');
}

function display_more()
{
	var d = $('<div>');
	d.text('$' + counter);
	d.addClass('funky');
	counter++;
	$('#test').prepend(d);
	var color1 = counter % 255;
	var color2 = (counter * counter) % 255;
	var color3 = (counter * counter * counter) % 255;

	var color_string = 'rgb('+ color1 +', '+ color2 +', '+ color3 +')';
	d.css('background-color', color_string);
	var color_string2 = 'rgb('+ color2 +', '+ color3 +', '+ color1 +')';
	d.css('color', color_string2);
}

