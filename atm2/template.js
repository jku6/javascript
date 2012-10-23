	var balance = 1000;

$(function(){

	


	

	
	$('#b1').click(deposit);

	$('#b2').click(withdrawal);

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
	balance = balance - n;
	
	console.log('you just withdrew ' + n + ' and now have a balance of ' + (balance));
	$('#balance').text('$' + balance);

	if(balance < 0){
		$('#balance').css('background-color', 'red');
		$('#balance').text('$' + balance);
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
