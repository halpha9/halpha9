const leftArrow=document.querySelector('.left-arrow');
const rightArrow=document.querySelector('.right-arrow');
const slider=document.querySelector('.projects__block');

var cardIndex;
var slidenum;


rightArrow.addEventListener('click', function() {
	cardIndex=document.querySelector('input[name="slide"]:checked').value;
	if(cardIndex<6) {
		cardIndex++;
	}
	else {
		cardIndex=1;
	}
	slidenum='slide'+cardIndex;
	document.getElementById(slidenum).checked=true;
});

leftArrow.addEventListener('click', function() {
	cardIndex=document.querySelector('input[name="slide"]:checked').value;
	if(cardIndex>1) {
		cardIndex--;
	}
	else {
		cardIndex=6;
	}
	slidenum='slide'+cardIndex;
	document.getElementById(slidenum).checked=true;
});