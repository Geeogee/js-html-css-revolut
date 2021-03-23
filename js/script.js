
function showDropdowns() {
    
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
    var dropdown = $(this).find(".dropdown, .big-dropdown"); 
    var isActive = dropdown.hasClass("active");

    hideDropdowns(hasDropdown);
    dropdown.addClass("active");
    if (!isActive) {

       dropdown.addClass("active");
    }

}

function hideDropdowns(hasDropdown) {

    hasDropdown.each(function() {

        hasDropdown.children().removeClass("active");
    });
}

function hoverHideDropdown() {

    $(window).click(function() {
        var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
        hideDropdowns(hasDropdown);
    });
}


function init() {
    
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
    console.log(hasDropdown);
    hasDropdown.click(showDropdowns);
    hasDropdown.mouseenter(showDropdowns);
    hasDropdown.mouseleave(hoverHideDropdown);
    
}



$(document).ready(init);
