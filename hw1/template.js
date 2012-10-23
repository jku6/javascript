$(function(){



	var response = prompt('(a)nimal or (c)olors or (p)eople array or (q)uit?');
	var aarray = [];
	var carray = [];
	var parray = [];
	


	while(response != 'q') 
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

	} //end of while loop

	response = prompt('delete from (a)nimal or (c)olors or (p)eople or (q)uit?');

	while(response != 'q') {


				
		if(response == 'a') {

			
			var animal = prompt('Which animal do you want to delete?');
			var newanimal = aarray.indexOf(animal);
			aarray.splice(newanimal, 1);
			console.log('Animals : ' + aarray);
			animal = prompt('this is your animal array: ' + aarray);

				
		}
		
		
		if(response == 'c') {

			var color = prompt('Which colors do you want to delete?');
			console.log('Colors : ' + carray);
			
			var newcolor = carray.indexOf(color);
			carray.splice(newcolor, 1);
			color = prompt('this is your color array: ' + carray);

			
		}
		

		if(response == 'p') {

			console.log('People : ' + parray);
			var people = prompt('What people do you want to delete?');
			var newpeople = parray.indexOf(people);
			parray.splice(newpeople, 1);
			people = prompt('this is your people array: ' + parray);

			
		}
			
		response = prompt('delete from (a)nimal or (c)olors or (p)eople or (q)uit?');

	} // End of 2nd while loop


	console.log('These are your arrays: ' + aarray + carray + parray);

});