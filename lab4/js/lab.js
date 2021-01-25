// Author: Élan Salazar & Selena Hyon
// Date: Jan. 24, 2021


// Pseudocode for Minesweep'esq Game
// print a new board
//     a loop will be created in order for the game to be replayed
// for every player selection, generate a random number between 0-3 (inclusive)
//     if returned value is 1, 2, or 3,
//         increment player's score
//     otherwise, return a bombed square
//         end game
//     repeat until all squares have been selected or a bomb is returned
