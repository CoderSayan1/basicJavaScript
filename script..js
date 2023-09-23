let redBtn = document.getElementById('red');
let yellowBtn = document.getElementById('yellow');
let greenBtn = document.getElementById('green');
const clearGame = document.getElementById('btn');

// redBtn.onclick = () =>{
//     console.log("red");
// }

const squares = document.querySelectorAll('.colorSquare');
// console.log(squares[0].value);

const timeClicked = {
    'red': 0,
    'yellow': 0,
    'green': 0
};
// Using forEach
squares.forEach(square => {
    // console.log(square.value);
    square.onclick = () =>{
        // console.log(square.value);
        timeClicked[square.value] += 1;
        square.innerText = timeClicked[square.value];
        square.style.fontSize = '30px'
    }
})

const clearScore = () =>{
    timeClicked.red = 0;
    timeClicked.yellow = 0;
    timeClicked.green = 0;
    squares.forEach(square => {
        square.innerText = ''
    })
}

clearGame.onclick = () => clearScore()