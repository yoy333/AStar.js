# AStar.js
# Overview
This is a AStar algorithm is pathfinding for grid-shaped maps.
The algorithm does not compensate for objects that you can pass through slower or faster.
# Uses
The most beneficial ways you can use this are to:
Have an NPC try to get to an objective.
Have a NPC try to follow a moving object.
Solve a maze.
# How To Use
First create a new object using
`
var path = new AStar([0,0], [3, 3], map)
`
The three variable represent the:
The source (The current position)
The goal (The position you want to finish at)
The map (a map of the terrian)
In put the map as a set of arrarys like
`
  [
    [0,0,1,1],
    [0,0,1,1],
    [0,0,0,0],
    [0,0,0,0]
  ]
`
The zeros will represent open space and the ones, barriers.
To input the source and goal, write a array that will be a coordinate pair '([x, y])'
An example is shown in the AStarTest.html document.
