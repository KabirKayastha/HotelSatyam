//review slider javascript

const reviewSlide = document.querySelector('#review_slide');
const reviewSlideContent = document.querySelectorAll('#review_slide .content');



//buttons
const prevReviewSlideBtn = document.querySelector('#review_slideContent-prevBtn');
const nextReviewSlideBtn = document.querySelector('#review_slideContent-nextBtn');

//counter
var counter = 1;
const size = reviewSlideContent[0].offsetHeight; // all content in the list must be of same size as that of 1st content

reviewSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';  // !important

//reviewSlide changing functions
function nextSlide(){
	if (counter >= reviewSlideContent.length - 1) return;
	reviewSlide.style.transition = 'transform 0.4s ease-in-out';
	counter++;

	reviewSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
}

function prevSlide(){
	if (counter <= 0) return;
	reviewSlide.style.transition = 'transform 0.4s ease-in-out';
	counter--;
	
	reviewSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
}

//animate
var timer = null;
function setTimer(){
	timer=setInterval(function(){
		nextSlide();
	}, 2000); //1000 (numeric value) = 1s; 2000 numeric value sets the slide animation interval
}

setTimer();

function pauseSlide(){
	clearInterval(timer);
	timer=null;
	animateBtn.innerHTML = "animate";
}

//looping reviewSlideContents function
reviewSlide.addEventListener('transitionend', () => {

	if(reviewSlideContent[counter].id === 'review_slideContent-lastItemClone'){
		reviewSlide.style.transition = 'none';
		counter = reviewSlideContent.length - 2;

		reviewSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
	}

	if(reviewSlideContent[counter].id === 'review_slideContent-firstItemClone'){
		reviewSlide.style.transition = 'none';
		counter = reviewSlideContent.length - counter;

		reviewSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
	}
});

//btn event calling
nextReviewSlideBtn.addEventListener('click', pauseSlide);
nextReviewSlideBtn.addEventListener('click', nextSlide);
prevReviewSlideBtn.addEventListener('click', pauseSlide);
prevReviewSlideBtn.addEventListener('click', prevSlide);