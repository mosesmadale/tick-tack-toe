//let player1 = prompt("Enter player one's name: ");
//let player2 = prompt("Enter player two's name: ");

let currentPlayer = {
    value: 'x'
}

let string = {
    text: ''
}

let lastPlayer;


let msgs = ['Noma!', 'Devine!', 'Oh wow!', 'Kudadeki!', 'Nailed IT!'];
let msgs2 = ['Do A replay',"Don't leave it a tie",'Dare for more']

function finishGame(winner) {
    winner == 'Draw'? document.querySelector('.message>.title').textContent = msgs2[(Math.ceil(Math.random() * (3 - 1) + 1)) - 1] + '!':document.querySelector('.message>.title').textContent = msgs[(Math.ceil(Math.random() * (5 - 1) + 1)) - 1];
    winner == 'Draw'? document.querySelector('.winner-name').textContent = winner.toUpperCase() : document.querySelector('.winner-name').textContent = winner.toUpperCase() + ' Won!';
    document.querySelector('.overlay').style.display = 'block';
}

function replay() {
    document.querySelector('.overlay').style.display = 'none';
    currentPlayer.value = 'x'
    document.querySelectorAll('.grd').forEach(element => {
        element.textContent = ''
    })
}



let p1 = document.querySelector('#player1');
let p2 = document.querySelector('#player2');

p1.className = 'icon selected';

document.querySelectorAll('.grd').forEach(element => {
    element.onclick = function() {
        if (element.textContent == '') {
            if (currentPlayer.value == 'x') {
                element.textContent = 'x';
                currentPlayer.value = 'o';
                lastPlayer = 'x';
                p1.className = 'icon';
                p2.className = 'icon selected';
                let string = {
                    text: ''
                }
                document.querySelectorAll('.grd').forEach(e => {
                    if (e.textContent == 'x' || e.textContent == 'o') {
                        string.text += e.textContent;
                    } else {
                        string.text += '*';
                    }
                })


                //now we have the string ready for evaluation

                let row1 = [string.text[0], string.text[1], string.text[2]];
                let row2 = [string.text[3], string.text[4], string.text[5]];
                let row3 = [string.text[6], string.text[7], string.text[8]];
                //down
                row1.forEach((e, i) => {
                        if (e == lastPlayer) {
                            //checks for going down
                            if (e == row2[i] && row2[i] == row3[i]) {
                                finishGame('x');
                            }
                        }
                    })
                    //across
                if (string.text.search('xxx') % 3 == 0) {
                    finishGame('x');
                }
                //diagnols
                if (row1[0] == 'x' && row2[1] == 'x' && row3[2] == 'x') {
                    finishGame('x');
                }
                if (row1[2] == 'x' && row2[1] == 'x' && row3[0] == 'x') {
                    finishGame('x');
                }
                //if it is a draw
                if(!string.text.split('').includes('*')){
                    finishGame('Draw')
                }
            } else {
                element.textContent = 'o';
                currentPlayer.value = 'x';
                lastPlayer = 'o';
                p2.className = 'icon';
                p1.className = 'icon selected';
                let string = {
                    text: ''
                }
                document.querySelectorAll('.grd').forEach(e => {
                    if (e.textContent == 'x' || e.textContent == 'o') {
                        string.text += e.textContent;
                    } else {
                        string.text += '*';
                    }
                })
                let row1 = [string.text[0], string.text[1], string.text[2]];
                let row2 = [string.text[3], string.text[4], string.text[5]];
                let row3 = [string.text[6], string.text[7], string.text[8]];
                //checking possiblilities
                //down
                row1.forEach((e, i) => {
                        if (e == lastPlayer) {
                            if (e == row2[i] && row2[i] == row3[i]) {
                                finishGame('o');
                            }
                        }
                    })
                    //across
                if (string.text.search('ooo') % 3 == 0) {
                    finishGame('o');
                }
                //diagnols
                if (row1[0] == 'o' && row2[1] == 'o' && row3[2] == 'o') {
                    finishGame('o');
                }

                if (row1[2] == 'o' && row2[1] == 'o' && row3[0] == 'o') {
                    finishGame('o');
                }

                //if it is a draw
                if(!string.text.split('').includes('*')){
                    finishGame('Draw')
                }
            }
        }
    }
});