$(function(){

	var balance = 1000;

	var response = prompt('(d)eposit or (w)ithdrawal or (q)uit?');


	while(response != 'q') 
	{
		
		var amount = prompt('how much?');
		amount = parseInt(amount);

		if(response == 'd') {
			
			console.log('you just deposited ' + amount + ' and now have a balance of ' + (balance + amount));
			balance = balance + amount;
		}
		
			if(response == 'w') {
				
				console.log('you just withdrew ' + amount + ' and now have a balance of ' + (balance - amount));
				balance = balance - amount;
		}
			

		response = prompt('(d)eposit or (w)ithdrawal or (q)uit?');

		
	}
	console.log('Thank you for ATMing with us, your balance is : $' + balance + '.00');



});