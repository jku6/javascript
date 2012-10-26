$(function(){

	$('#add').click(search_flickr);

});

function search_flickr()
{
	var search = $('#search').val();

	$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=205036b9b52025f6e84affa75e39f107&tags=' + search + '&format=json&jsoncallback=?', flickrResults)
}

function flickrResults(data)
{
	$.each(data.photos.photo, getPhoto);
}

function getPhoto(index, item)
{
	var src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
	var div = $('<div>');
	div.addClass('photo');
	var img = $('<img>');
	img.attr('src', src);
	div.append(img);

	$('#photos').prepend(div);
}