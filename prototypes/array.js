Array.prototype._uniq = function(a, b)
{
    for (a = this, b = a.length; b--; a.indexOf(a[b]) < b && a.splice(b, 1));
    return a;
};

Array.prototype._last = function()
{
    return this[this.length - 1];
};

Array.prototype._intersection = function(arr)
{
    return this.filter(function(pp, ii)
    {
        if (arr.indexOf(pp) !== -1) return pp;
    });
};

Array.prototype._remove = function()
{
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length)
    {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1)
        {
            this.splice(ax, 1);
        }
    }
    return this;
};