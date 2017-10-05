//added a comment
var blocks = ["0","9","10","14","20","23","27","32","36","38","40","45","52","56","60","63","65","67","68","69","70","72","73","74","75","76",              "78","80","83","87","93","98","103","109","113","118",,"125","126","127","128","129","130","132","133","134","138",
			  "140","143","149","158","160","163","169","178","180","183","184","185","186","187","188","189","190","192","193","194",
			   "196","198","200","203","206","210","214","216","223","226","228","230","248","253","254","255","256"];
 
var b1 = ["21","29","42","43","58","96","108","115","122","124","131","146","162","191","202","213","218","221","225","235"];
var b2 = ["1","24","42","43","57","59","64","90","97","122","124","135","137","139","156","168","173","251"];
var currPos = 240; 
var moved =[240];
var count_demons=0;
var total_demons;
var demon_arr = [];
var trigger_timer=0;
var limit =30;
//   window.onload = function() { 
function check(id){
	//var box = document.getElementById(id);
    if(blocks.indexOf(id.toString())>-1 || moved.indexOf(id)>-1 )
	{return 0;}
	return 1;
}
$(document).ready(function(){
	  var line_break = document.createElement("br");
		for(var i=0;i<260;i++){
			 //var grid = document.createElement("CANVAS");
			 //grid.setAttribute("id", i);
			 //grid.setAttribute("class", "grid");
			 
			if((i+1)%20 == 0) 
			 {
				 $('<canvas>').attr({
					id : i
					}).appendTo('#canvas_wrapper');
			     $('<br>').appendTo('#canvas_wrapper');
			  }
		     else
			   {	
				$('<canvas>').attr({
				id : i
				}).appendTo('#canvas_wrapper');
				}
			 
				// draw the blocks
			 if(blocks.indexOf(i.toString()) > -1){
				 var c = document.getElementById(i);
				 var ctx = c.getContext("2d");
				 var img = document.getElementById("block");
				 ctx.drawImage(img, 0, 0, 300,150); 
				  }
		  }
				//draw soldier
				var soldier = document.getElementById(240);
			    var context_soldier = soldier.getContext("2d");
				var img = document.getElementById("soldier");
				context_soldier.drawImage(img, 0, 0, 300,150); 
				
				//draw demons
				
				//generate random positions
				/*while(demon_arr.length < 15){
				var randomnumber = Math.ceil(Math.random()*260)
				if((currPos == randomnumber)|| demon_arr.indexOf(randomnumber) > -1 || blocks.indexOf(randomnumber.toString()) > -1) continue;
				demon_arr[demon_arr.length] = randomnumber;
				}*/
				var f = Math.floor((Math.random() * 2) + 1);
                if(f==1) {demon_arr = b1;}
                else {demon_arr = b2;}
                total_demons = demon_arr.length;
				for(var i=0;i<demon_arr.length;i++){
					 var c = document.getElementById(demon_arr[i]);
					 var ctx = c.getContext("2d");
					 var img = document.getElementById("demon");
				     ctx.drawImage(img,0,0,300,150);
				}
			
 			
	
	});
		   
function moveRight(){
	if(!((blocks.indexOf((currPos+1).toString()))>-1) && ((currPos+1)%20 !=0) && ((moved.indexOf(currPos+1)) == -1)){
		//draw soldier
		var soldier = document.getElementById(currPos+1);
		var context_soldier = soldier.getContext("2d");
		var img = document.getElementById("soldier");
		context_soldier.drawImage(img, 0, 0, 300,150); 
		
		
		var cc =  document.getElementById(currPos);
		var context = cc.getContext("2d"); 
		//draw blast or path
		if(demon_arr.indexOf(currPos.toString())>-1){
//             alert(currPos);
			var imgage = document.getElementById("blast");
			context.drawImage(imgage,00,0,300,150); 
		}
		else{ 
		var imgage = document.getElementById("right");
		context.drawImage(imgage,00,0,300,150); 
		}
		//update moved array
		moved[moved.length] = currPos+1;
		//update current position
		currPos = currPos +1;
		if(demon_arr.indexOf((currPos).toString())>-1){
			count_demons++;
		}
	}
}
function moveLeft(){
	if(!((blocks.indexOf((currPos-1).toString()))>-1) && ((currPos)%20 !=0) && ((moved.indexOf(currPos-1)) == -1)){
		//draw soldier
		var soldier = document.getElementById(currPos-1);
		var context_soldier = soldier.getContext("2d");
		var img = document.getElementById("soldier");
		context_soldier.drawImage(img, 0, 0, 300,150); 
		//draw blast or path
		var cc =  document.getElementById(currPos);
		var context = cc.getContext("2d"); 
		if(demon_arr.indexOf(currPos.toString())>-1){
			var imgage = document.getElementById("blast");
			context.drawImage(imgage,00,0,300,150); 
		}
		else{
		var imgage = document.getElementById("left");
		context.drawImage(imgage,0,0,300,150);} 
		//update moved array
		moved[moved.length] = currPos-1;
		//update current position
		currPos = currPos -1;
		if(demon_arr.indexOf((currPos).toString())>-1){
			count_demons++;
		}
	}
}
function moveUp(){
	if(!((blocks.indexOf((currPos-20).toString()))>-1) && (!(currPos>0 && currPos<20)) && ((moved.indexOf(currPos-20)) == -1)){
		//draw soldier
		var soldier = document.getElementById(currPos-20);
		var context_soldier = soldier.getContext("2d");
		var img = document.getElementById("soldier");
		context_soldier.drawImage(img, 0, 0, 300,150); 
		//draw blast or path
		var cc =  document.getElementById(currPos);
		var context = cc.getContext("2d"); 
		if(demon_arr.indexOf(currPos.toString())>-1){
			var imgage = document.getElementById("blast");
			context.drawImage(imgage,00,0,300,150); 
		}
		else{
		var imgage = document.getElementById("up");
		context.drawImage(imgage,0,0,300,150); 
		}
		//update moved array
		moved[moved.length] = currPos-20;
		//update current position
		currPos = currPos -20;
		if(demon_arr.indexOf((currPos).toString())>-1){
			count_demons++;
		}
	}
}
function moveDown(){
	if(!((blocks.indexOf((currPos+20).toString()))>-1) && (!(currPos>240 && currPos<260)) && ((moved.indexOf(currPos+20)) == -1)){
		//draw soldier
		var soldier = document.getElementById(currPos+20);
		var context_soldier = soldier.getContext("2d");
		var img = document.getElementById("soldier");
		context_soldier.drawImage(img, 0, 0, 300,150); 
		//draw blast or path
		var cc =  document.getElementById(currPos);
		var context = cc.getContext("2d"); 
		if(demon_arr.indexOf(currPos.toString())>-1){
			var imgage = document.getElementById("blast");
			context.drawImage(imgage,00,0,300,150); 
		}
		else {
			var imgage = document.getElementById("down");
			context.drawImage(imgage,0,0,300,150); 
		}
		 //update moved array
		moved[moved.length] = currPos+20;
		//update current position
		currPos = currPos +20;
		if(demon_arr.indexOf((currPos).toString())>-1){
			count_demons++;
		}
	}
}
function myTimer(){
	if(limit<0  )
	{clearInterval(myVar);
     //alert("TIME OVER!!");
	 return;
   }
    document.getElementById("timer").innerHTML = "TIMER: "+ limit--;
    
}
var t=0;
$(document).keydown(function(e){ 
	  //trigger timer
	  if(!t){myTimer();t=1;}
	  if(!trigger_timer)
	   {
			myVar = setInterval(myTimer, 1000);
			trigger_timer =1;
		}

	switch (e.keyCode) {
        case 37:
            //alert('left');
            moveLeft();
			break;
        case 38:
            //alert('up');
            moveUp();
			break;
        case 39:
            //alert('right');
			moveRight();
            break;
        case 40:
            //alert('down');
            moveDown();
			break;
    }
	//Player is blocked-stop the timer
	if(!((check(currPos+1)&&((currPos+1)%20 !=0 )) || (check(currPos-1) && (currPos%20 !=0)) || (check(currPos-20)&&(!(currPos>0 && currPos<20))) || (check(currPos+20)&&(!(currPos>240 &&currPos<260 )))))
	{	//draw killed soldier
		var soldier = document.getElementById(currPos);
		var context_soldier = soldier.getContext("2d");
		var img = document.getElementById("killed");
		context_soldier.drawImage(img, 0, 0, 300,150); 
		alert("You Are Blocked!!");
		clearInterval(myVar);
	}
    //alert(count_demons);
	//Player wins- stop the timer
	if(count_demons == total_demons){
		clearInterval(myVar);
		//alert("Congratulations!!");
	}
	});
