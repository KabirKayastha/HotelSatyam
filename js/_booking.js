var firstForm = document.getElementById('firstForm');
var secondForm = document.getElementById('secondForm');
var backBtn = document.getElementById('backBtn');
var nextBtn = document.getElementById('nextBtn');
var submitBtn = document.getElementById('submitBtn');

var width1 = firstForm.clientWidth;
var width2 = secondForm.clientWidth;

//only show next btn at first
backBtn.style.display = "none";
submitBtn.style.display = "none";
// secondForm.style.opacity = "0";

//slide function
function slideNext(){
    firstForm.style.transform = 'translateX(-' + width1 + 'px)';
    secondForm.style.transform = 'translateX(-' + width2 + 'px)';
    secondForm.style.opacity = "1";
    submitBtn.style.display = "block";
    backBtn.style.display = "block";
    nextBtn.style.display = "none";
}

function slideBack(){
    firstForm.style.transform = 'translateX(0%)';
    secondForm.style.transform = 'translateX(0%)';
    // secondForm.style.opacity = "0";
    submitBtn.style.display = "none";
    backBtn.style.display = "none";
    nextBtn.style.display = "block";
}