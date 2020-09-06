$.fn.hasHorizontalScrollBar = function()
{
    return this.get(0) ? this.get(0).scrollWidth > this.innerWidth() : false;
};

$.fn.hasVerticalScrollBar = function()
{
    return this.get(0) ? this.get(0).scrollHeight > this.innerHeight() : false;
};