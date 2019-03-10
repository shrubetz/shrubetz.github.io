var board= [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var player=0;
var colblue=1;
var color ="white";
ctx.fillStyle="yellow";
ctx.fillRect(0, 0, 700, 600);

 for (var i=0;i<7;i++) {
     board[i] = [];
  }
clearBoard();
	
	   


var canvas = document.getElementById("myCanvas")[0];


var height = 600;
var width = 700;

var mouseClicked = false, mouseReleased = true;

$("#myCanvas").click(function(e){
	
    var cordy = 0;Math.floor((e.pageY-$("#myCanvas").offset().top) / 100);

    var cordx = Math.floor((e.pageX-$("#myCanvas").offset().left) / 100);
//if (board[cordx][cordy]==0)
    {  
        cordy=checkBelow(cordx,cordy);
    if (colblue==1)
        {
        board[cordx][cordy]=1;	
        }
    else
    {
    board[cordx][cordy]=2; 

    } 
    }
    //else{}
    isWinner();   
    });
function isWinner()
    {
    player=checkWinner() 
    if (player !=0)
        { 
        alert("The winner is player " + player); 
        clearBoard();
        }
    }

function choosecolor(){
    if (colblue==1)
        {
        colblue=0;
        return "green";
        }
    else
        {   
        colblue=1;
        return "red"; 	
        }
    }
async function animateTurn(cordx,cordy,color)
{  
    
    ctx.fillStyle = color;
    await sleep(1000);
    ctx.beginPath();
    ctx.arc(cordx*100+50, cordy*100+50, 40, 0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
   
}


function checkBelow(x,y){
    color= choosecolor();
    y=0;
       for (i=0;i<6;i++) 
       {
	
	if(board[x][y+1]==0)
	
            {
            //if(x>0 && y>0)

            animateTurn(x,y,color);
	
           // await sleep(1000);
	
            animateTurn(x,y-1,"white");
	    // alert(y);
            //sleep(1000);
            y++;
            }
	  
	if (board[x][y]==0 )
	{
	animateTurn(x,y,color);
		animateTurn(x,y-1,"white");
	}
       }
   return y;
    }

function checkWinner() {
	
    // Check down
    for (x = 0; x < 4; x++){
	for (y= 0; y < 6; y++){
	    if (checkLine(board[x][y], board[x+1][y], board[x+2][y], board[x+3][y])){
		return board[x][y];
	    }}}

    // Check right
    for (x = 0; x < 7; x++){
        for (y = 0; y < 3; y++){
            if (checkLine(board[x][y], board[x][y+1], board[x][y+2], board[x][y+3])){
                return board[x][y];
	    }}}

    // Check down-right
    for (x = 0; x < 4; x++){
        for (y = 0; y < 3; y++){
            if (checkLine(board[x][y], board[x+1][y+1], board[x+2][y+2], board[x+3][y+3])){
               return board[x][y];
	    }}}

    // Check down-left
    for (x = 3; x < 7; x++){
        for (y = 0; y < 4; y++){
            if (checkLine(board[x][y], board[x-1][y+1], board[x-2][y+2], board[x-3][y+3])){
               return board[x][y];
	    }}}
return 0;
    
}
function checkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a == 1 || a==2) && (a ==b) && (a == c) && (a == d));
}

function clearBoard(){
	for(x=0;x<7;x++){
        for(y=0;y<6;y++){  
           board[x][y]=0;
           ctx.fillStyle = "white";
          
           ctx.beginPath();
           ctx.arc(x*100+50,y*100+50,40,0,2*Math.PI);
           ctx.fill();
           ctx.stroke();
                        }
                    }               
                     }
  function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
      }
