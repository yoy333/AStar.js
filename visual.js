function visual(){
	console.log(result)
	var insert = '';
	insert += '<table>'
	for(var a=0; a<map.length; a++){
		insert += '<tr>'
		for(var b=0; b<map[0].length; b++){
			insert += '<td id="'+a+'-'+b+'">'
			insert += '</td>'
		}
		insert += '</tr>'
	}
	$('body').append(insert)

	for(var c = 0; c<result.length; c++){
		var x = result[c][0];
		var y = result[c][1];
		$('td#'+y+'-'+x+'').css('background-color', 'green')
	}
	
	for(var y = 0; y<map.length; y++){
		for(var x = 0; x<map[0].length; x++){
			if(map[y][x]){
				$('td#'+y+'-'+x+'').css('background-color', 'black')
			}
		}
	}
	var Sx = start[0];
	var Sy = start[1];
	$('td#'+Sy+'-'+Sx+'').css('background-color', 'red')
	var Gx = goal[0];
	var Gy = goal[1];
	$('td#'+Gy+'-'+Gx+'').css('background-color', 'blue')
}


