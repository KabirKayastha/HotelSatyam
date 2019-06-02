
// create unique id for each profile-desc class and i tag

var container = document.getElementsByClassName('container');

var iconContainer = document.querySelectorAll('.flex-container .team-card .profile-desc span');
var profileDesc = document.querySelectorAll('.flex-container .team-card .profile-desc');

var counter = 0;
function createIcon() {
    var icon = document.createElement('i'); 
    icon.setAttribute("class", 'fas fa-angle-up');
    icon.setAttribute("id", 'upIcon' + counter);
    return icon;
}

function profileDescId() {
    profileDesc[counter].id = 'profileDesc'+counter; 
}

function iconContainerId() {
    iconContainer[counter].id = 'iconContainer'+counter; 
}

window.addEventListener('load', ()=>{
    for(i=0; i < iconContainer.length; i++) {
        profileDescId();
        iconContainerId();
        var create = $(createIcon());
        $(iconContainer[counter]).append(create);
        counter++
    }
});


//toggleing function


    $('.team-card .profile-desc span').click(function(){
        $('#'+this.parentNode.id).toggleClass('profile-desc-active');
        $('#'+this.parentNode.id).toggleClass('profile-desc-after');
        $('#'+this.firstChild.id).toggleClass('i-after');
        
    });






