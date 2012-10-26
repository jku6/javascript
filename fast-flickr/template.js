$(function(){

	$('#add').click(search_flickr);                

});

var counter = 0;
var photo = [];
var page = 1;
var i;


function search_flickr()
{
	var search = $('#search').val();

	//$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=205036b9b52025f6e84affa75e39f107&tags=' + search + '&format=json&jsoncallback=?', flickrResults)
	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=205036b9b52025f6e84affa75e39f107&text=' + search + '&per_page=500&page=&format=json&jsoncallback=?', flickrResults)
}

function flickrResults(data)
{

	$.each(data.photos.photo, getPhoto);
	i = setInterval(display_more, 200);
	
}


function getPhoto(index, item)
{
	photo[index]=item;
}

function display_more()
{

	var item = photo[counter];
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src', src);
	div.append(img);
	
	$('#photos').prepend(div);
	counter++;
}

