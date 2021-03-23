
function showDropdowns() {
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
    
    hideDropdowns(hasDropdown);
    $(this).find(".dropdown, .big-dropdown").addClass("active");
}

function hideDropdowns(hasDropdown) {

    hasDropdown.each(function() {

        hasDropdown.children().removeClass("active");
    })
}


function init() {
    
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
    console.log(hasDropdown);
    hasDropdown.click(showDropdowns);
    
}

$(document).ready(init);
