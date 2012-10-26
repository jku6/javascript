var balance;

$(function(){	

	$('#b1').click(add);
	

});

function add()
{
	var t = $('#t1').val();
	var n = parseInt(t);
	var x = $('#t2').val();
	var y = parseInt(x);
	//var a = $('#t3').val();
	//var b = parseInt(a);
	balance = n + y;
	

	
	$('#balance').text(balance);

	
	}
