$(function(){

	$('#color_button').click(add_color);
	$('#colors').on('hover', '.color', hovering);

});

function hovering()
{
	$(this).toggleClass('hover');

}

function add_color()
{

	var color = $('#color_text').val();
	var d = $('<div>');
	d.addClass('color');
	d.css('background-color', color);
	$('#colors').append(d);

}




/*
NOTES!!!!

to add a css class to a div or element
$('#d1').addClass('warning');

to remove a css class to a div or element
$('#d1').removeClass('warning');

toggle back and forth
$('#d1').toggleClass('warning');

true or false if it has the class applied
$('#d1').hasClass('warning');

adds html into an element before it
$('#d3').before('<p>hello</p>');

adds html into an element after it
$('#d3').after('<span>hello</span>');

inserts into the div at the top of the list
$('#d3').prepend('<h1>xyz</h1>');

inserts into the div at the bottom of the list
$('#d3').append('<h3>xyz</h3>');






creates p tag
$('<p>');

creates a variable that creates a p tag
var p1 = $('<p>');

p1

p1.text('hello');
p1.addClass('warning');
creates a variable that creates a div
d1 = $('#d1');

this inserts a p1 node right under d1
d1.append(p1);

s1 = $('<span>');
s1.text('world');

p1.append(s1);

removes from body
d1.detach();


adds d1 onto d2
d2 = $('#d2');
d2.append(d1);



*/