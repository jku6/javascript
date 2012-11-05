
$(function(){

	//$('.playerturn').text(players[counter]);

	createboard();

	$('.black').click(move)




	$('#join').click(join_game);
  	$('#chat').click(send_chat_message);
  	$('#endturn_button').click(send_end_turn_message);
  	subscribe();

});

var players = [];
var whoami;
var turn = 1;
var selected_piece = null;


function move() {

	if ($(this).text()=='G')
		selected = $(this);
	

	else if ($(this).text()=='B') {

		var oldr = selected.attr('id')[1];
		var oldc = selected.attr('id')[3];

		var newr = $(this).attr('id')[1];
		var newc = $(this).attr('id')[3];

		if ((newr-oldr==1) && Math.abs(newc-oldc)==1) {
			selected.text('B').removeClass('green');
			$(this).text('G').addClass('green');
			selected=null;
		}
	}
}

function createboard() {
	for(var r = 1; r < 13; r++){
		$('#game').append('<div id="r' + r + '" class="row"></div>');
		for(var c = 1; c < 13; c++){
			$('#r' + r).append('<div id="r' + r + 'c' + c + '" class="column"></div>');
			// $('#r'+r+'c'+c).text('r'+r+'c'+c);

			//add class black
			if ((r+c)%2==1) {
				$('#r'+r+'c'+c).text('B');
				$('#r'+r+'c'+c).addClass('black');
			}
			//remove corners
			if ((r<=3 && c<=3) || (r<=3 && c>=10) || (r>=10 && c<=3) || (r>=10 && c>=10)) {
				$('#r'+r+'c'+c).text('');
				$('#r'+r+'c'+c).removeClass('black');
				$('#r'+r+'c'+c).attr('id', '0');
			}
			//add player defaults
			if ((r<=3 && c>=4 && c<=9) && (r+c)%2==1) {
				$('#r'+r+'c'+c).text('G').addClass('green');
			}
			if ((r>=10 && c>=4 && c<=9) && (r+c)%2==1) {
				$('#r'+r+'c'+c).text('R').addClass('red');
			}
			if ((c<=3 && r>=4 && r<=9) && (r+c)%2==1) {
				$('#r'+r+'c'+c).text('Y').addClass('yellow');
			}
			if ((c>=10 && r>=4 && r<=9) && (r+c)%2==1) {
				$('#r'+r+'c'+c).text('L').addClass('blue');
			}
		}
	}
}

