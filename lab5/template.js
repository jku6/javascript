$(function(){
	$('#b4').on('click',toggle);
	$('#b6').on('click',toggle2);
	$('.box').click(math);
});
function toggle () {
	$('#b5').addClass('red');
	$('#b5').removeClass('blue');
}
function toggle2 () {
	$('#b5').addClass('blue');
	$('#b5').removeClass('red');
}
function math () {
	var x = parseInt($(this).text());
	var y = parseInt($('#b5').text());
	$('#b5 > p').text(x+y);
}


/*
var center = 0;


$(function(){
	$('#b4').on('click',toggle);
	$('#b6').on('click',toggle2);

	$('#b1').click(add10);
	$('#b2').click(add20);
	$('#b3').click(add30);
	$('#b7').click(subtract10);
	$('#b8').click(subtract20);
	$('#b9').click(subtract30);

	$(this).click(add);
});

function toggle () {
	$('#b5').addClass('red')
	$('#b5').removeClass('blue')
}
function toggle2 () {
	$('#b5').addClass('blue')
	$('#b5').removeClass('red')
}


var total = 0;

function add(){

}


/*
function add10()
{
	total = total +10;
	$('#b5').text(total); 
}

function add20()
{
	total = total +20;
	$('#b5').text(total); 
}

function add30()
{
	total = total +30;
	$('#b5').text(total); 
}

function subtract10()
{
	total = total -10;
	$('#b5').text(total); 
}

function subtract20()
{
	total = total -20;
	$('#b5').text(total); 
}

function subtract30()
{
	total = total -30;
	$('#b5').text(total); 
}

*/