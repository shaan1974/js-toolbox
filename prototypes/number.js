/*
		COMPARISON
*/
Number.prototype.EQ = function(s)
{
    return this === parseInt(s, 10);
};
Number.prototype.NEQ = function(s)
{
    return this !== parseInt(s, 10);
};
Number.prototype.LT = function(s)
{
    return this < parseInt(s, 10);
};
Number.prototype.LTE = function(s)
{
    return this <= parseInt(s, 10);
};
Number.prototype.GT = function(s)
{
    return this > parseInt(s, 10);
};
Number.prototype.GTE = function(s)
{
    return this >= parseInt(s, 10);
};

// Number.prototype.between = function (min, max) { return this >= min && this <= max; };