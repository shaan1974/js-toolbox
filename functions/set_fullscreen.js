function setFullscreen(element)
{
    if (element.requestFullscreen)
    {
        element.requestFullscreen();
    }
    else if (element.mozRequestFullScreen)
    {
        element.mozRequestFullScreen();
    }
    else if (element.webkitRequestFullscreen)
    {
        element.webkitRequestFullscreen();
    }
    else if (element.msRequestFullscreen)
    {
        element.msRequestFullscreen();
    }
    else
    {
        console.log('what');
    }
}