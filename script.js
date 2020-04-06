function getRandom(min,max){
	++max;
	return parseInt((Math.random())*(max-min)+min);
}

function showBeaver(holeNumber){
	const element=document.getElementById(holeNumber);
	element.src="beaver.jpg";
	return holeNumber;
}

function hideBeaver(holeNumber){
   const element=document.getElementById(holeNumber);  
   element.src="hole.png";
   return 0;
}

function hammer(holeNumber){
	if(currentHole==holeNumber){
		score+=50;
        const element=document.getElementById("gameScore");
        element.innerHTML=score;
	}
}

var currentHole=0;
var count=2;

function playGame(){
   setInterval(function(){
   	if(count==2)
   {
   	const hole=getRandom(1,9);
   	currentHole=showBeaver(hole);
   	count=-1;
   }
   if(count==1)
   	 {
   	 	currentHole=hideBeaver(currentHole);
        
   	 }
   	 count++;
   },1000);
   
}
playGame();