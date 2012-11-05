var balance = 0;

$(function(){	

	$('#b1').click(add);
	

});

function add()
{
	var t = $('#t1').val();
	var d = $('<div>');
	//d.addClass('box');
		//d.attr('id', i);
	d.text(t);
	$('#f1').prepend(d);

	
	var x = $('#t2').val();
	var y = parseInt(x);
	var e = $('<div>');
	e.addClass('box');
	e.text(y);
	$('#balance').prepend(e);

	balance = balance + y;

	$('#bal1').text(balance);
	


	
	}



	


