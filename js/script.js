
function showDropdowns() {
    
    var dropdown = $(this).find(".dropdown, .big-dropdown"); 
    // remove all active classes
    $(".dropdown, .big-dropdown").removeClass("active");
    dropdown.addClass("active");

}


function hideDropdowns() {

    $(document).click(function() {
        //remove all active classes
        $(".dropdown, .big-dropdown").removeClass("active");
    });
}


function init() {
    
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
 
    hasDropdown.mouseenter(showDropdowns);
    hasDropdown.mouseleave(hideDropdowns);
    
}

$(document).ready(init);

