$(function(){

	$('#color_button').click(add_color);
	//$('#colors').on('hover', '.color', hovering);
	$('#colors').on('mouseenter', '.color', changeinput);
	$('#colors').on('mouseleave', '.color', make_it_white);
	$('#colors').on('click', '.color', select);
	
	$('#colors').on('dblclick', '.color', remove);
	$('#prev_button').click(left);
	$('#next_button').click(right);
	

});

//var colorarray = [];
var selected = null;

/*
function hovering()
{
	$(this).toggleClass('hover');
}*/

/*
function add_color()
{

	var color = $('#color_text').val();
	var colorarray = color.split(', ')
	var count = colorarray.length;
	
	for(var i = 0; i < count; i++)
			{
				//colorarray.push(color);
				var d = $('<div>');
				d.addClass('color');
				d.css('background-color', colorarray[i]);
				$('#colors').append(d);
			}	

}*/


function add_color()
{
	var color = $('#color_text').val();
	color = color.split(', ');
	for(var i = 0; i < color.length; i++)
	{
		var color2 = $('<div>');
		color2.addClass('color');
		color2.css('background-color', color[i])
		$('#colors').append(color2);
	}
}

function changeinput()
{
	var color = $(this).css('background-color');
	$('#color_box').css('background-color', color);
}

function make_it_white()
{
	var color = $(this).css('background-color');
	$('#color_box').css('background-color', '');
}





