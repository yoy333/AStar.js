var AStar = function(source, goal, map){
	
	this.source = source
	this.goal = goal
	this.map = map
	
	this.getDistanceToGoal = function(node){
		var distance = Math.pow(node[0]-this.goal[0], 2)+Math.pow(node[1]-this.goal[1],2)
		var resistance = this.map[node[1]][node[0]]==1?Infinity:0
		return distance + resistance
	}
	
	this.queue = [
		{
			id: this.source,
			distance: this.getDistanceToGoal(source),
			path: [this.source]
		}
	]
	
	this.findLowest = function(arr){
		var lowestscore = Infinity
		var position
		for(var i=0; i<arr.length; i++){
			if(arr[i].distance<lowestscore){
				lowestscore = arr[i].distance
				position = i
			}
		}
		return position
	}
	
	this.sortByDistance = function(){
		// var arr = obj
		var ans = []
		var arr = Object.assign([], this.queue);
		for(var c=0; c<this.queue.length; c++){
			var pos = this.findLowest(arr)
			ans.push(arr[pos])
			arr.splice(pos, 1)
		}
		this.queue = ans
	}
	
	this.retracePath = function(node){
		var dump = Object.assign([], this.queue[0].path);
		dump.push(node)
		return dump
	}
	
	this.exploreNode = function(node){
		// This condition checks if the node is within the map.
		if(node[0]>=0 && node[1]>=0 && node[0]<this.map[0].length && node[1]<this.map.length){
			var nodeCollision = this.map[node[1]][node[0]]
			if(nodeCollision<=0){
				var result = {
					id: node,
					distance: this.getDistanceToGoal(node),
					path: this.retracePath(node)
				}
			
				this.queue.push(result)
			}
		}
	}
	
	this.explore = function(nodeToExplore){
		
		this.exploreNode([nodeToExplore[0]+1, nodeToExplore[1]])
		this.exploreNode([nodeToExplore[0]-1, nodeToExplore[1]])
		this.exploreNode([nodeToExplore[0], nodeToExplore[1]+1])
		this.exploreNode([nodeToExplore[0], nodeToExplore[1]-1])
		
	}
	
	this.isGoalFound = function(){
		var x_pos = this.queue[0].id[0]
		var y_pos = this.queue[0].id[1]
		return (x_pos==this.goal[0] && y_pos==this.goal[1])
	}
	
	this.getPath = function(){
		while(!this.isGoalFound()){
		// for(var c = 0; c<6; c++){
			// console.log('Intiration #'+(c+1))
			this.explore(this.queue[0].id)
			this.queue.shift()
			this.sortByDistance()
			// console.log(this.queue)
			// console.log(this.queue[0].path)
		// }
		}
		return this.queue[0].path
	}
}