let fields = [];
let gameOver = false;
let currentShape = 'cross';

function fillShape(id){
    if(!fields[id] && !gameOver) {
    fields[id] = currentShape;
    if(currentShape == 'cross'){
        currentShape = 'circle';
        document.getElementById('player_1').classList.remove('player-inactive');
        document.getElementById('player_2').classList.add('player-inactive');
    } else {
        currentShape = 'cross';
        document.getElementById('player_1').classList.add('player-inactive');
        document.getElementById('player_2').classList.remove('player-inactive');
    }

    console.log(fields);
    draw();
    checkForWin();
}
}

//Function for drawing the forms
function draw(){
    for(let i = 0; i < fields.length; i++){
        if(fields[i] == 'circle'){
            document.getElementById('circle_' + i).classList.remove('d-none');
        }

        if(fields[i] == 'cross'){
            document.getElementById('cross_' + i).classList.remove('d-none');
        }
    }
    checkForWin();
}

function checkForWin(){
    let winner;

    //First row horizontal
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
        document.getElementById('line_0').style.transform = 'scaleX(1)';
    }

    //Second row horizontal
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('line_1').style.transform = 'scaleX(1)';
    }

    //Third row horizontal
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('line_2').style.transform = 'scaleX(1)';
    }

    //First row vertical
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('line_3').style.transform = 'scaleX(1)';
    }

    //Second row vertical
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('line_4').style.transform = 'scaleX(1)';
    }

    //Third row vertical
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('line_5').style.transform = 'scaleX(1)';
    }

    //45deg
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('line_6').style.transform = 'rotate(44deg) scaleX(1)';
    }

    //negative 45deg
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('line_7').style.transform = 'rotate(136deg) scaleX(1)';
    }

    //Draw screen pops up
    if(fields.filter((value) => value).length == 9){
        setTimeout(function(){
            document.getElementById('draw').classList.remove('d-none');
            document.getElementById('draw').classList.add('draw-section-d-flex');
        }, 600);
    }

    //End screen pops up
    if(winner){
    console.log('gewonnen', winner);
    gameOver = true;
    setTimeout(function(){
        document.getElementById('game_over').classList.remove('d-none');
        document.getElementById('game_over').classList.add('game-over-section-d-flex');
        document.getElementById('game_over_img').classList.remove('d-none');
        }, 600);
    }
}

function restart(){
    gameOver = false;
    fields = [];
    document.getElementById('game_over').classList.add('d-none');
    document.getElementById('game_over').classList.remove('game-over-section-d-flex');
    document.getElementById('game_over_img').classList.add('d-none');
    document.getElementById('draw').classList.add('d-none');
    document.getElementById('draw').classList.remove('draw-section-d-flex');
    for(let i = 0; i < 8; i++){
        document.getElementById('line_' + i).style.transform = 'scaleX(0)';
    }

    for(let i = 0; i < 9; i++){
        document.getElementById('circle_' + i).classList.add('d-none');
        document.getElementById('cross_' + i).classList.add('d-none');
    }
}