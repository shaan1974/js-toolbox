function isInside(el1, el2)
{
    var r1 = el1.getBoundingClientRect();
    var r2 = el2.getBoundingClientRect();

    return (((r2.top <= r1.top) && (r1.top <= r2.bottom)) && ((r2.top <= r1.bottom) && (r1.bottom <= r2.bottom)) && ((r2.left <= r1.left) && (r1.left <= r2.right)) && ((r2.left <= r1.right) && (r1.right <= r2.right)));
}