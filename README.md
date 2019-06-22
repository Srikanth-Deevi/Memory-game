# Memory Game Project

Memory game having 16 cards fix in the order of 4\*4. Memory game concept is matching of two cards, total 8 pairs of cards we matching then it will successfully completed. It is implemented on html, JS & CSS.

## Table of Contents

-   [Download](#download)
-   [Instructions](#instructions)
-   [why play memory games](#why-play-memory-games)
-   [Process/flow of game](#<Process-flow-of-game)
-   [how to play memory](#how-to-play-memory-game)
-   [Implementations steps](#Implementations)
-   [Functionality of Memory games](#Functionality-of-Memory-game)
-   [Contributing](#contributing)

## Download

we download before starting projects

  1.Memory game project repository on GitHub : <https://github.com/udacity/fend-project-memory-game>

  2.The Zipped File : <https://github.com/udacity/fend-project-memory-game/archive/master.zip>

## Instructions

\-> The starter project has some HTML and CSS styling to display a static version of the Memory Game project.

\-> we need to convert this project from a static project to an interactive one.

\-> This will require modifying the HTML and CSS files, but primarily the JavaScript file.

\-> To get started, we need to open `js/app.js` and start building out the app's functionality.

## why play memory games

\-> Memory games improve short-term memory and increase speed recognition skills. They also improve concentration, increase attention, and enhance cognitive skills.

\-> By Kindergarten, children will be asked to describe familiar people, places, things, and events and, with prompting and support, provide additional detail.

## process/flow of game

\->Cards are to be shuffled on load or restart.

\->Game should know how to handle matched and unmatched cards.

\->Game should display the current number of moves a user has made.

\->The game should show a star rating (from 1–3) that reflects the player’s performance based on the number of moves made.

\->When a player starts a game, a displayed timer should also start and once the player wins the game, the timer stops.

\->A restart button should allow the player reset the game board, the timer, and the star rating.

\->A congratulations modal should appear when the player wins while showing a button to play again and modal should show: How much time it took, and   star rating.

## How to play memory game

-   First we visible the grid view empty card are hidden, total 16 cards.

-   Player have to open only two cards, if it is matched the two cards are opened else cards are hidden.

-   The deck has 8 pairs of matching cards.

-   At each selection:

      \->If it is the first selection out of the two, flip the card.

      \->If it is second one, checks whether it is a matching pair or not.

      \->If it is a matching pair, they  remain visible.

      \->If not, they remain hidden for future selections.

      \->At the end of all successful matchings, player will be congratulated for successful completion of game.

## Implementation steps

      \--> We following the steps in the memory Game.

       \-> first we download the extract file and extract it, after extract we access the HTML, JS and CSS.

       \-> some coding is provided but we develop the game successfully for using different functions like star Rating, stop Timer, timer etc...

       \-> I am using star rating function because of the popup message comes after completion of game, In the popup message we display star rating important to all. Next icon is your choose. I am placed success icon and text is also displayed on popup message.

       \->I am taking timer is also one of the part of popup message using clear interval method that's work as stop the timer after the completion of the game.

## Functionality of the game

● Flipping cards on selection by player.

● If the flipped cards matches, they remain visible.

● If cards do not match they again remain invisible.

● The game finishes when all the 8 pairs of the cards are successfully matched.

● When the game finishes, congratulating popup message will come on to the screen displaying moves, star rating, timing.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
