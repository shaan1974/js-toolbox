/*

    NEED -> https://animate.style/ to run.
    
    Duration :

    animate__slow	2s
    animate__slower	3s
    animate__fast	800ms
    animate__faster 500ms
*/
function __fadeOut(el, duration, callback)
{
    if (window.getComputedStyle(el).display === "none")
    {
        return false;
    }

    if (el.classList.contains("animate__animated"))
    {
        return false;
    }

    el.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-0', '' + duration + '');

    el.once("animationend", function(e)
    {
        e.target.classList.remove('animate__animated', 'animate__fadeOut', 'animate__delay-0', '' + duration + '');
        e.target.style.display = "none";

        if (typeof callback === "function")
        {
            callback(e.target);
        }
    });
}

function __fadeIn(el, duration, callback)
{
    if (window.getComputedStyle(el).display === "block")
    {
        return false;
    }

    if (el.classList.contains("animate__animated"))
    {
        return false;
    }

    el.style.display = "block";
    el.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-0', '' + duration + '');

    el.once("animationend", function(e)
    {
        e.target.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-0', '' + duration + '');
        if (typeof callback === "function")
        {
            callback(e.target);
        }
    });
}