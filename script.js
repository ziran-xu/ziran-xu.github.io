var block = document.getElementById("block");
var block2 = document.getElementById("block2");
var character = document.getElementById("character");
var check1 = 0;
var check2 = 0;
var check3 = 0;
var check4 = 0;
var count = 0;
var score = 0;
var stop1 = false;
var stop2 = false;
var stop3 = false;
var stop4 = false;


block.addEventListener('animationiteration',()=>{
	var randomness = (Math.random()*450);
	block.style.left = randomness + "px";

	if (count > 0){
	var rando = (Math.random()*450);
	block2.style.left = rando + "px";
	count = -1;
	}	
});


function moveLeft(){
	var position =
	parseInt(window.getComputedStyle(character).getPropertyValue("left"));
	character.style.left = position - 2 + "px";
}
function moveRight(){
	var position =
	parseInt(window.getComputedStyle(character).getPropertyValue("left"));
	character.style.left = position + 2 + "px";
}
function moveDown(){
	var position =
	parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	character.style.top = position + 2 + "px";
}
function moveUp(){
	var position =
	parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	character.style.top = position - 2 + "px";
}

document.addEventListener("keydown", event => {
		if(event.key === "ArrowLeft"||event.key === "a"){
			if(check1<2){check1 ++;}
		}
		if(event.key === "ArrowRight"||event.key === "d"){
			if(check2<2){check2 ++;}
		}
		if(event.key === "ArrowDown"||event.key === "s"){
			if(check3<2){check3 ++;}
		}
		if(event.key === "ArrowUp"||event.key === "w"){
			if(check4<2){check4 ++;}
		}

	if(check1 == 1){
		interval1 = setInterval(moveLeft, 1);
		if(check1<2){check1 ++;}
		}
	
	if(check2 == 1){
		interval2 = setInterval(moveRight, 1);
    	if(check2<2){check2 ++;}
		}

	if(check3 == 1){
		interval3 = setInterval(moveDown, 1);
	    if(check3<2){check3 ++;}
		}
	
	if(check4 == 1){
		interval4 = setInterval(moveUp, 1);
    	if(check4<2){check4 ++;}
		}
});

document.addEventListener("keyup", event =>{

	if(event.key === "ArrowLeft"||event.key === "a"){
		clearInterval(interval1);
		check1 = 0;
	}
	if(event.key === "ArrowRight"||event.key === "d"){
		clearInterval(interval2);
		check2 = 0;
	}
	if(event.key === "ArrowDown"||event.key === "s"){
		clearInterval(interval3);
		check3 = 0;
	}
	if(event.key === "ArrowUp"||event.key === "w"){
		clearInterval(interval4);
		check4 = 0;
	}
});



var checkDead = setInterval(function(){
	var characterTop = 
	parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockTop = 
	parseInt(window.getComputedStyle(block).getPropertyValue("top"));
	var characterLeft = 
	parseInt(window.getComputedStyle(character).getPropertyValue("left"));
	var blockLeft =
	parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var block2Top = 
	parseInt(window.getComputedStyle(block2).getPropertyValue("top"));
	var block2Left =
	parseInt(window.getComputedStyle(block2).getPropertyValue("left"));



	if(Math.abs(characterTop - blockTop) < 50 && Math.abs(characterLeft - blockLeft) < 50){
		score-=5
		document.getElementById("scorecard").innerHTML = score;	
	}
	if(Math.abs(characterTop - block2Top) < 50 && Math.abs(characterLeft - block2Left) < 50){
		score+=1
		document.getElementById("scorecard").innerHTML = score;	
	}
	if(characterTop < -50 || characterTop > 500 || characterLeft < -50 || characterLeft > 500){
		alert("There is No Escape D:<");
    	document.location.reload(true);

	}

},10);

