String.prototype.trim = function()
{
    return this.replace(/^\s+|\s+$/g, "");
};
String.prototype.ltrim = function()
{
    return this.replace(/^\s+/, "");
};
String.prototype.rtrim = function()
{
    return this.replace(/\s+$/, "");
};

String.prototype.replaceAll = function(target, replacement)
{
    return this.split(target).join(replacement);
};

String.prototype.BLENGTH = function()
{
    //	VARS
    //
    var cr, cl;

    if ((navigator.userAgent.match(/(MSIE |Trident.*rv[ :])([0-9]+)/) !== null) || (navigator.appVersion.indexOf('Edge') > -1))
    {
        cl = unescape(encodeURIComponent(this.toString())).length;
        cr = 0;

        if (encodeURIComponent(this.toString()).match(/(%0A|%0D)/gi) !== null)
        {
            cr = encodeURIComponent(this.toString()).match(/(%0A|%0D)/gi).length;
        }

        return cl + cr;
    }
    else
    {
        cl = (new TextEncoder('utf-8').encode(this.toString())).length;
        cr = 0;

        if (encodeURIComponent(this.toString()).match(/(%0A|%0D)/gi) !== null)
        {
            cr = encodeURIComponent(this.toString()).match(/(%0A|%0D)/gi).length;
        }

        return cl + cr;
    }
};

String.prototype.removeBlankHTML = function()
{
    return this.replace(/<((\w*)\s*[^\/>]*)>\s*<\/\2>/g, '<$1></$2>');
};

String.prototype.preventSinglesQuotes = function()
{
    return this.replaceAll("'", "\\\'");
};

String.prototype.preventDoublesQuotes = function()
{
    return this.replaceAll('"', '\\\"');
};

/*
		DEFINITION SHORT CUTS.
*/
String.prototype.toUpper = String.prototype.toUpperCase;
String.prototype.toLower = String.prototype.toLowerCase;

String.prototype.toDom = function()
{
    // return ( new DOMParser().parseFromString( this , 'text/html') ).querySelector("body")._firstChild();
    return (RHEA.xmlParser.parseFromString(this, 'text/html')).querySelector("body")._firstChild();
};

String.prototype.getBytes = function()
{
    var bytes = [];
    for (var i = 0; i < this.length; ++i)
    {
        bytes.push(this.charCodeAt(i));
    }
    return bytes;
};

String.prototype.linearize = function()
{
    return this.toString().replace(/(\r\n\t|\n|\r\t|\t)/gm, "");
};

String.prototype.isReg = function(pattern)
{
    var patt = new RegExp("" + pattern + "", "g");
    return patt.test((this.toString()));
};