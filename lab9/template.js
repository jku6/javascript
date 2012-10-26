$(function(){

	$('#add_animal').click(add_animal);

});

function add_animal()
{
	var animal = {};
	animal.name = $('#animal_name').val();
	animal.color = $('#animal_color').val();
	animal.image = $('#animal_image').val();
	insert_animal(animal);
}

//insert animal object into a div
function insert_animal(animal)
{
	var d = $('<div>');
	d.addClass('animal');
	//adds background-color to the div
	d.css('background-color', animal.color);
	//adds name text to the div
	d.text(animal.name);

	var i = $('<img>');
	i.attr('src', animal.image);
	d.append(i);
	
	$('#animals').prepend(d);
}