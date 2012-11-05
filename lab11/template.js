var Dog;


$(function(){

	Parse.initialize("zRqdq7BA4OvfBFtEY2DT6sPZrlboOgNxXHG30QzI", "9LeMkwaGva0PVz7tGBTRMo9fiCQhnIXWk2jgrNp8");
	Dog = Parse.Object.extend("Dog");
	$('#b1').click(save_data);
	$('#b2').click(get_data);
	
});

function save_data()
{
	var d1 = new Dog()
	var name = $('#t1').val()
	var age = $('#t2').val()

	//key value pairs, value is name or show_success
	d1.save({dog_name: name, dog_age: age}, {success: show_success });
}

function get_data()
{
	var query = new Parse.Query(Dog);
	query.ascending("dog_name");
	query.find({
		success: function(results) {
			for(var i = 0; i <results.length; i++)
			{
				var p = $('<p>');
				var name = results[i].get('dog_name');
				p.text(name);
				$('#data').prepend(p);
			}
			
		},
		error: function(error) {}
	});
}

