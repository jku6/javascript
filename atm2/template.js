var balance = 1000;
var balance2 = 1000;

$(function(){	

	$('#b1').click(deposit);
	$('#b2').click(withdrawal);
	$('#sb1').click(deposit2);
	$('#sb2').click(withdrawal2);

});

function deposit()
{
	var t = $('#t1').val();
	var n = parseInt(t);
	balance = balance + n;
	console.log('you just deposited ' + n + ' and now have a balance of ' + (balance));
	$('#balance').text('$' + balance);

	if(balance >= 0){
		$('#balance').css('background-color', 'white');
		$('#balance').text('$' + balance);
	}
}

function withdrawal()
{
	var t = $('#t1').val();
	var n = parseInt(t);

	if(n <= balance){

		balance = balance - n;
		$('#balance').text('$' + balance);
		console.log('you just withdrew ' + n + ' and now have a checking balance of ' + (balance));
	}

		else 
			if(n <= (balance + balance2)){

				balance = 0;
				balance2 = ((balance + balance2) - n);
				$('#balance').text('$' + balance);
				$('#balance2').text('$' + balance2);
			}
}
	
function deposit2()
{
	var t = $('#st1').val();
	var n = parseInt(t);
	balance2 = balance2 + n;
	console.log('you just deposited ' + n + ' and now have a balance of ' + (balance2));
	$('#balance2').text('$' + balance2);

	if(balance2 >= 0){
		$('#balance2').css('background-color', 'white');
		$('#balance2').text('$' + balance2);
	}
}

function withdrawal2()
{
	var t = $('#st1').val();
	var n = parseInt(t);
	balance2 = balance2 - n;
	
	console.log('you just withdrew ' + n + ' and now have a balance of ' + (balance2));
	$('#balance2').text('$' + balance2);

	if(balance2 < 0){
		$('#balance2').css('background-color', 'red');
		$('#balance2').text('$' + balance2);
	}	
}



/*
function deposit()
{
	//alert('button pressed!');

	var t = $('#t1').val();
	console.log('you typed in ' + t);

	var n = parseInt(t);
	var z = cube(n);

	$('#i2').text(z);

	if(z > 100)
		$('#i2').css('color', 'red');
	else
		$('#i2').css('color', 'blue');

	for(var i = 0; i < z; i++)
		console.log('counting : ' + i);
	
}
*/
