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
      { board[cordx][cordy]=1;
	      ctx.fillStyle = choosecolor();
	   ctx.beginPath();
       ctx.arc(cordx*100+50, cordy*100+50, 40, 0,2*Math.PI);
	  ctx.fill();
       ctx.stroke();
      
      }
	else{}
	});

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
