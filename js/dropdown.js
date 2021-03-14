console.log('conected....')

//select button, when button is clicked, ul will show all li items.
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

//for any click outside of the dropdown menu, make the dropdown menu dissapear back into dropdown tab.
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
    let openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}
  