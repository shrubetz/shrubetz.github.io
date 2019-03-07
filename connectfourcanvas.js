var board= [];
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var colblue=1;
ctx.fillStyle="yellow";
ctx.fillRect(0, 0, 700, 600);

 for (var i=0;i<7;i++) {
     board[i] = [];
  }
for(x=0;x<7;x++){
  for(y=0;y<6;y++){  
	   board[x][y]=0;
       ctx.fillStyle = "white";
	   //ctx.fillRect(x*100+10, y*100+10, 80, 80); 
	   ctx.beginPath();
	   ctx.arc(x*100+50,y*100+50,40,0,2*Math.PI);
	   ctx.fill();
       ctx.stroke();
	
	   
  }
}


var canvas = document.getElementById("myCanvas")[0];


var height = 600;
var width = 700;

var mouseClicked = false, mouseReleased = true;

$("#myCanvas").click(function(e){
	
    var cordy = Math.floor((e.pageY-$("#myCanvas").offset().top) / 100);
	
    var cordx = Math.floor((e.pageX-$("#myCanvas").offset().left) / 100);
    //alert(board[cordx,cordy])
	//alert(cordy+" " + cordx);
      if (board[cordx][cordy]==0)
      { 
       cordy=checkBelow(cordx,cordy);
	     drawturn(cordx,cordy);
	     if (checkWinner(board) !=0)
	     {alert("player" + checkWinner);}
      
      }
	else{}
	});

function choosecolor(){
if (colblue==1)
{
	colblue=0;
	return "green";
	 board[cordx][cordy]=1;
	
}
else
{
	colblue=1;
	return "red";
	 board[cordx][cordy]=2;
}

}
function drawturn(cordx,cordy)
{
	  ctx.fillStyle = choosecolor();
	   ctx.beginPath();
       ctx.arc(cordx*100+50, cordy*100+50, 40, 0,2*Math.PI);
	  ctx.fill();
       ctx.stroke();
}

function checkBelow(x,y){
if (y<5)
{
	while(board[x][y+1]==0)
	{y++;}
}
	return y;
}

function chkWinner(game) {
    // Check down
    for (x = 0; x < 3; x++)
        for (y= 0; y < 7; y++)
            if (checkLine(game[x][y], game[x+1][y], game[x+2][y], game[x+3][y]))
                return game[x][y];

    // Check right
    for (x = 0; x < 6; x++)
        for (y = 0; y < 4; y++)
            if (checkLine(game[x][y], game[x][y+1], game[x][y+2], game[x][y+3]))
                return game[x][y];

    // Check down-right
    for (x = 0; x < 3; x++)
        for (y = 0; y < 4; y++)
            if (checkLine(game[x][y], game[x+1][y+1], game[x+2][y+2], game[x+3][y+3]))
                return game[x][y];

    // Check down-left
    for (x = 3; x < 6; x++)
        for (y = 0; y < 4; y++)
            if (checkLine(game[x][y], game[x-1][y+1], game[x-2][y+2], game[x-3][y+3]))
                return game[x][y];

    return 0;
}
function checkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
    return ((a != 0) && (a ==b) && (a == c) && (a == d));
}
