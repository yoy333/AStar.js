var height
var width
var startX
var startY
var goalX
var goalY
var preMap
function custom(){
	console.log('hey')
	startX = prompt('X coord of start')-1;
	startY = prompt('Y coord of start')-1;
	goalX = prompt('X coord of goal')-1;
	goalY = prompt('Y coord of goal')-1;
}
function begin(){
	height = parseInt(prompt('height of maze:'));
	width = parseInt(prompt('width of maze:'));
	startX = 0
	startY = 0
	goalX = width-1
	goalY = height-1
	$('td#'+startY+'-'+startX+'').css('background-color', 'red')
	$('td#'+goalY+'-'+goalX+'').css('background-color', 'blue')
	console.log([startX, startY, goalX, goalY])
	
	preMap = []
	for(var y = 0; y<height; y++){
		preMap.push([])
		for(var x = 0; x<width; x++){
			preMap[y].push(0)
		}
	}
	console.log('MAP HERE');
	console.log(preMap);

	var insert = '';
	insert += '<table id="removed">'
	for(var a=0; a<preMap.length; a++){
		insert += '<tr>'
		for(var b=0; b<preMap[0].length; b++){
			insert += '<td class="preNode" id="pre-'+a+'-'+b+'">'
			insert += '</td>'
		}
		insert += '</tr>'
	}
	$('body').append(insert)

	$('td.preNode').on("click", function(){
		console.log($(this).css('background-color'))
		if($(this).css('background-color')=='rgb(0, 0, 0)'){
			$(this).css('background-color', 'white')
			var heightDigits = (height+'').length
			var widthDigits = (width+'').length
			var coordsRaw = $(this).attr('id');
			var y = coordsRaw.slice(4, 3+heightDigits)
			var x = coordsRaw.slice(6, 5+widthDigits)
			console.log('erasing')
			console.log([x, y])
			preMap[y][x] = 0
		}else{
			$(this).css('background-color', 'black')
			var widthDigits = $(this).index();
			var heightDigits = $(this).parent().index();
			// var coordsRaw = $(this).attr('id');
			// console.log(coordsRaw)
			var y = $(this).parent().index();
			var x = $(this).index();
			preMap[y][x] = 1
			console.log([x,y])
		}
		console.log(preMap)
	})
}