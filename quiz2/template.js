$(function(){

	$('#add').click(add_box);

});

/*
function add_animal()
{
	var animal = {};
	animal.name = $('#animal_name').val();
	animal.color = $('#animal_color').val();
	animal.image = $('#animal_image').val();
	insert_animal(animal);
}*/

//insert animal object into a div
function add_box()
{
	var t = $('#input').val();
	var n = parseInt(t);

	for(var i= 0; i < n; i++)
	{
		var d = $('<div>');
		d.addClass('box');
		//d.attr('id', i);
		d.text(i + 1);
		$('#boxes').prepend(d);
	}
	
	
	
	
	
	//$('#boxess').prepend(d);
}