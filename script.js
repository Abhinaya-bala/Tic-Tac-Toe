var currentPlayer = "X"
var currentState = {X:[],O:[]}
var WinningPosibilies=[[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]]

function display(index) {
 event.target.innerHTML=currentPlayer  //clicked div come in event target
 var state = currentState[currentPlayer]; // current state of player(x or o) into state
 state.push(index);
 
     // checkWinner
     checkWinner(state)
 
 //console.log('player-'+currentPlayer,state);
 toggleCurrentPlayer()
}


function toggleCurrentPlayer(){
    if(currentPlayer=="X"){
        currentPlayer="O"
    }
    else {
        currentPlayer="X"
    }
}
function checkWinner(state){
    for(var i=0;i<WinningPosibilies.length;i++){
        var possiblity = WinningPosibilies[i];
        var matchCount =0;
        for(var j=0;j<possiblity.length;j++){
            var num = possiblity[j];
            if(state.indexOf(num)>-1){
                matchCount++;
            }
        }

        if(matchCount==3){
            alert('player - '+currentPlayer+' wins ');
            return;
        }
    }
}