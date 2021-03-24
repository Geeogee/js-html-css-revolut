
function showDropdowns() {
    
    var dropdown = $(this).find(".dropdown, .big-dropdown"); 
    $(".dropdown, .big-dropdown").removeClass("active");
    dropdown.addClass("active");
  
}


function hideDropdowns() {

    $(document).click(function() {

        $(".dropdown, .big-dropdown").removeClass("active");
    });
}


function init() {
    
    var hasDropdown = $("li.has-dropdown, li.has-big-dropdown");
    console.log(hasDropdown);

    hasDropdown.mouseenter(showDropdowns);
    hasDropdown.mouseleave(hideDropdowns);
    
}

$(document).ready(init);

