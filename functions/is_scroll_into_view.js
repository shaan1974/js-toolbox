/* VANILLA JQUERY VERSION */
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/* VANILLA JS VERSION */
function isScrolledIntoView(elem)
{
    var docViewTop = window.scrollY;
    var docViewBottom = docViewTop + window.innerHeight;

    var elemTop = elem.getBoundingClientRect().y;
    var height = elem.offsetHeight - (parseInt(window.getComputedStyle(elem).paddingTop) + parseInt(window.getComputedStyle(elem).paddingBottom));
    var elemBottom = elemTop + height;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}