
function showDropdowns() {
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
    
    hideDropdowns(hasDropdown);

    if ($(this).find(".dropdown, .big-dropdown").data("open")) {
        $(this).find(".dropdown, .big-dropdown").removeClass("active");
        $(this).find(".dropdown, .big-dropdown").data("open", false)

    } else {
        $(this).find(".dropdown, .big-dropdown").addClass("active");
        $(this).find(".dropdown, .big-dropdown").data("open", true)
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
