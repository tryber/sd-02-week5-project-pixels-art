"use strict";
  var rows = 5;
  var columns = 5;
  var margin = 0;
	var canvas = document.getElementById('canv');
	var rect = canvas.getBoundingClientRect();
	var ctx = canvas.getContext('2d');
  var color = '#42b6f4';
	ctx.fillStyle = "black";

	 canvas.addEventListener('mousemove', function(evt) {
        getMousePos(canvas, evt);
      }, false);



	  var cx, cy;
	 function getMousePos(canva,evt){
		cx= Math.floor((evt.clientX-rect.left)/(rect.right-rect.left)*canvas.width * columns / canvasWidth);
		cy= Math.floor((evt.clientY-rect.top)/(rect.bottom-rect.top)*canvas.height * rows / canvasHeight);
     console.log(cx + ' ' + cy);
	  }

	  canvas.addEventListener('click', function(){
      	console.log(cx + ' ' + cy + ' was clicked!');
		fields[cx][cy].backgroundColor = color;
      printFunction();
	  },false);

	var Field = function(x, y){
		return{
			x:x,
			y:y,
			backgroundColor:'black',
		};
	};

	var canvasHeight = rect.bottom-rect.top;
  var canvasWidth = rect.right-rect.left;

	var fields = [];
	for(var i = 0; i < columns; i++){
		fields[i] = [];
		for(var j = 0; j < rows; j++){
			fields[i][j] = new Field(i,j);
			console.log('field of fields initialised' + i + ' ' + j);
		}
	}

	var printFunction = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(var oKey in fields){
			for(var iKey in fields[oKey]){
				ctx.fillStyle = fields[oKey][iKey].backgroundColor;
				ctx.fillRect(oKey * canvasWidth/columns + margin,iKey * canvasHeight/rows + margin,canvasWidth/columns-2*margin,canvasHeight/rows-2*margin);
			}
		}

    canvas.style.width = window.innerWidth+'px';
    canvas.style.height = window.innerHeight+'px';
    rect = canvas.getBoundingClientRect();
	};

function startPainting(){
  if(rows>=10 && columns>=40){
    fields[15][0].backgroundColor = 'indianred';
    fields[16][0].backgroundColor = 'pink';
    fields[17][0].backgroundColor = 'orange';
    fields[18][0].backgroundColor = 'indigo';
    fields[19][0].backgroundColor = 'cyan';
    fields[20][0].backgroundColor = 'magenta';
    fields[21][0].backgroundColor = 'navy';
    fields[22][0].backgroundColor = 'aqua';
    fields[23][0].backgroundColor = 'rosybrown';
    fields[24][0].backgroundColor = 'azure';
    fields[25][0].backgroundColor = 'beige';
    fields[26][0].backgroundColor = 'seashell';
    fields[27][0].backgroundColor = 'brown';
    fields[14][1].backgroundColor = 'cadetblue';
    fields[15][1].backgroundColor = 'burlywood';
    fields[16][1].backgroundColor = 'coral';
    fields[17][1].backgroundColor = 'darkgreen';
    fields[18][1].backgroundColor = 'darkkhaki';
    fields[13][2].backgroundColor = 'indianred';
    fields[14][2].backgroundColor = 'pink';
    fields[15][2].backgroundColor = 'orange';
    fields[12][3].backgroundColor = 'indigo';
    fields[13][3].backgroundColor = 'cyan';
    fields[14][3].backgroundColor = 'magenta';
    fields[15][3].backgroundColor = 'navy';
    fields[16][3].backgroundColor = 'lemon';
    fields[12][4].backgroundColor = 'aqua';
    fields[15][4].backgroundColor = 'aquamarine';
    fields[10][5].backgroundColor = 'palegreen';
    fields[11][5].backgroundColor = 'plum';
    fields[12][5].backgroundColor = 'azure';
    fields[15][5].backgroundColor = 'beige';
    fields[11][6].backgroundColor = 'seashell';
    fields[12][6].backgroundColor = 'brown';
    fields[13][6].backgroundColor = 'cadetblue';
    fields[14][6].backgroundColor = 'burlywood';
    fields[15][6].backgroundColor = 'coral';
    fields[16][6].backgroundColor = 'darkgreen';
    fields[17][6].backgroundColor = 'darkkhaki';
    fields[13][7].backgroundColor = 'darkolivegreen';
    fields[14][7].backgroundColor = 'darkslategrey';
    fields[15][7].backgroundColor = 'darkturquoise';
    fields[16][7].backgroundColor = 'goldenrod';
    fields[17][7].backgroundColor = 'khaki';
    fields[18][7].backgroundColor = 'mediumorchid';
    fields[19][7].backgroundColor = 'mistyrose';
    fields[15][8].backgroundColor = 'peru';
    fields[16][8].backgroundColor = 'cadetblue';
    fields[17][8].backgroundColor = 'burlywood';
    fields[18][8].backgroundColor = 'coral';
    fields[39][8].backgroundColor = 'teal';
    fields[13][9].backgroundColor = 'darkgreen';
    fields[14][9].backgroundColor = 'darkkhaki';
    fields[15][9].backgroundColor = 'darkolivegreen';
    fields[16][9].backgroundColor = 'darkslategrey';
    fields[17][9].backgroundColor = 'darkturquoise';
    fields[18][9].backgroundColor = 'goldenrod';
    fields[19][9].backgroundColor = 'khaki';
    fields[37][9].backgroundColor = 'mediumorchid';
    fields[38][9].backgroundColor = 'mistyrose';
    fields[39][9].backgroundColor = 'peru';


    printFunction();
  }
}

startPainting();
window.onresize = function(event) {
    printFunction();
};

document.getElementById('rows').onchange = function(){
  rows = this.value;
  console.log(rows);
  changeSize();
  printFunction();
};
document.getElementById('columns').onchange = function(){
  columns = this.value;
  changeSize();
  printFunction();
};
document.getElementById('clear').onclick = function(){
    changeSize();
    printFunction();
};
document.getElementById('startPainting').onclick = function(){
    startPainting();
};
document.getElementById('color').onchange = function(){
    color = this.value;
};
function changeSize(){
  	for(var i = 0; i < columns; i++){
		fields[i] = [];
		for(var j = 0; j < rows; j++){
			fields[i][j] = new Field(i,j);
			console.log('field of fields initialised' + i + ' ' + j);
		}
	}
}
