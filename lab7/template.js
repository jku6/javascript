$(function(){

	$('.a').mouseenter(color_the_box);
	$('.a').mouseleave(make_it_white);
	$('#add').click(add_node);
	$('#addcolors').click(add_colors);


	//this is for dynamcialy created things to work with hover
	$('#boxes').on('hover', '.box', make_pretty);



});



function make_pretty()
{
	$(this).toggleClass('alert');
}

function hovering()
{
	$(this).toggleClass('hover');

}




function add_colors()
{
	var input = $('#count').val();
	input.split(", ")
	var box = $('<div>');
	box.addClass('box');
	box.css('background-color', box);
	$('#boxes').append(box);
	}
}

function add_node()
{
	var element = $('#element').val();
	var node = $('<' + element + '>');
	var css = $('#css').val();
	var text = $('#text').val();
	node.addClass(css);
	node.text(text);
	$('#elements').prepend(node);
}


function color_the_box()
{
	//adding the $ makes it a jquery class not dom
	//$(this).toggleClass('alert');

	var color = $(this).text();
	$(this).css('background-color', color);

}


function make_it_white()
{
	//adding the $ makes it a jquery class not dom
	//$(this).toggleClass('alert');

	
	//this makes the background color null
	$(this).css('background-color', '');

}


/*

s = "blue, green, orange"
s
s.split(', ');

array.length


this goes to the previous div
s.prev();

this goes to the next div
s.next();

global variable called selected, this helps to indentify which is selected
var selected = null;

selected = this