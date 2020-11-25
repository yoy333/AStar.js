# AStar.js
# Overview
This is the AStar Algorithm Project (Modified).
Its purpose is to find the shortest path from start to finish while accounting for obstacles on a grid.
# Uses
The most beneficial ways you can use this are to:
Have a NPC try to get to an objective.
Have a NPC try to follow a moving object.
Solve a maze.
# How To Use
First create a new object using
`
var path = new AStar([0,0], [3, 3], map)
`
The three parameters represent:  
The source (The current position)  
The goal (The position you want to finish at)  
The map (a map of the terrian)  
Input the map as a set of arrarys like  
`
  [
    [0,0,1,1],
    [0,0,1,1],
    [0,0,0,0],
    [0,0,0,0]
  ]
`  
The zeros will represent open space and the ones, obstacles.  
To input the source and goal, write an array that will be a coordinate pair '([x, y])'.  
An example is shown in the AStarTest.html document.
