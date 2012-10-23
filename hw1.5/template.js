$(function(){



	var response = prompt('(a)nimal or (c)olors or (p)eople array or (q)uit?');
	var aarray = [];
	var carray = [];
	var parray = [];
	


	if(response != 'q') 
	{
		
		var howmany = prompt('how many items to insert?');
		howmany = parseInt(howmany);

		if(response == 'a') {

			for(var i = 0; i < howmany; i++)
			{
				var type = prompt('what type of animal?');
				aarray.push(type);
			}		
			
		}
		
		
		if(response == 'c') {

			for(var i = 0; i < howmany; i++)
			{
				var type = prompt('which colors?');
				carray.push(type);
			}
			
		}
		

		if(response == 'p') {
				
			for(var i = 0; i < howmany; i++)
			{
				var type = prompt('what type of person?');
				parray.push(type);
			}
			
		}

		response = prompt('(a)nimal or (c)olors or (p)eople array or (q)uit?');

	} //end of the if statement

		response = prompt('(d)elete something from your arrays or (q)uit?');




		while(response != 'q') {

			var response2 = prompt('delete from (a)nimal or (c)olors or (p)eople or (q)uit?');

				
				if(response2 == 'a') {

				var animal = prompt('this is your animal array: ' + aarray);
				var newanimal = aarray.indexOf(animal);
				aarray.splice(newanimal, 1);
				animal = prompt('this is your animal array: ' + aarray);

				
			}
		
		
				if(response2 == 'c') {

				var color = prompt('this is your color array: ' + carray);
				var newcolor = carray.indexOf(color);
				carray.splice(newcolor, 1);
				color = prompt('this is your color array: ' + carray);

				
			}
		

				if(response2 == 'p') {

				var people = prompt('this is your people array: ' + parray);
				var newpeople = parray.indexOf(people);
				parray.splice(newpeople, 1);
				people = prompt('this is your people array: ' + parray);

				
			}
				
			
			response = prompt('(d)elete something more from your arrays or (q)uit?');
		}

		if(response == 'q') {
			console.log('These are your arrays: ' + aarray + carray + parray);
		}
		
	

	
	


});