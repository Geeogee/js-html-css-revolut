
function showDropdowns() {
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
    var dropdown = $(this).find(".dropdown, .big-dropdown"); 
    var isActive = dropdown.hasClass("active");

    hideDropdowns(hasDropdown);

    if (!isActive) {
        dropdown.addClass("active");
    } 
 
}

function hideDropdowns(hasDropdown) {

    hasDropdown.each(function() {

        if (hasDropdown.children().hasClass("active")) {

            hasDropdown.children().removeClass("active")
        }
    });
}


function init() {
    
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
    console.log(hasDropdown);
    hasDropdown.click(showDropdowns);
    
}

$(document).ready(init);
