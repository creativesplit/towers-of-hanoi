Tower of Hanoi

The Tower of Hanoi is a mathematical game or puzzle. It consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape. The objective of the puzzle is to move the entire stack to the final rod, obeying the following simple rules:
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
3. No disk may be placed on top of a smaller disk.


![game screenshot](https://imgur.com/EvMyZe4)

Features

Bronze (MVP)
The basic functonality of the game allows the user to select the top disk from its posiiton on an existing peg and move it to one of the two other pegs that comprise the game.  Only one disk can be moved at a time.

The disk that is being moved is not allowed to be placed onto another disk that is smaller in size. An alert prevents the user from executing this action.

Silver 
In addiiton to the Bronze elements of the game, the silver elements would have a counter for the time that it takes a user to finish the game. There will also be a counter for the number of moves that the user needs to finish the game.

Gold
The gold version would capture, store, and push the results to a scoreboard, where the players are ranked based on their time and the number of moves required to finish the game.  

User Profile
The Tower of Hanoi game was invented in 1883 by Édouard Lucas. It has existed for some time as mathematical game or puzzle that appeals to a broard range of people looking for different challenges. The game with 3 disks can be completed in as few as 7 moves, while the game with 8 disks requires a minimum of 255 moves to complete.  As a consequence, The Tower of Hanoi has broad appeal and a diverse cultural background.

Technologies Used
Tower of Hanoi used HTML, CSS, and Javascript.  

Approaches and Methods
Given the dynamic nature of the game, where the user can select 1 of 3 disks and 1 of 3 pegs, there was extensive use of element selectors, event listeners, the event.target method, the append method, and the insert before method.  For loops and if/else statements were also used.  