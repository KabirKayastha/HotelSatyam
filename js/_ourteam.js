$(document).ready(function(){

    $('#ourTeam .team-card .profile-desc span i').click(function(){
        $('#ourTeam .team-card .profile-desc').toggleClass('profile-desc-active');
        $('#ourTeam .team-card .profile-desc').toggleClass('profile-desc-after');
        $(this).toggleClass('i-after');

    });

});

//var upIcon = document.querySelectorAll('#officials .team-card .profile-desc span i');
var iconContainer = document.querySelectorAll('#officials .team-card .profile-desc span');
var button = document.querySelector('#test');

var counter = 0;
function createIcon() {
  var icon = document.createElement('i'); 
  icon.setAttribute("class", 'fas fa-angle-up');
  icon.setAttribute("id", 'upIcon' + counter);
  return icon;
}




document.addEventListener('DOMContentLoaded', ()=>{
    for(i=0; i < iconContainer.length; i++) {
        var create = $(createIcon());
        $(iconContainer[counter]).append(create);
        counter++
    }
});

