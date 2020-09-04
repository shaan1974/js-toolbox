function isCollide(el1, el2)
{
    var r1 = el1.getBoundingClientRect();
    var r2 = el2.getBoundingClientRect();

    return !(r1.top > r2.bottom || r1.right < r2.left || r1.bottom < r2.top || r1.left > r2.right);
}