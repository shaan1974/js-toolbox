jQuery.fn.extend(
{
    disable: function()
    {
        return this.prop("disabled", true);
    },

    enable: function()
    {
        return this.prop("disabled", false);
    },

    hasAttr: function(zzzz)
    {
        try
        {
            if ($(this).attr("" + zzzz + "") !== undefined) return true;
            // return false;
        }
        catch (e)
        {
            // return false;
        }
        return false;
    },

    toggleAttrVal: function(attr, val1, val2)
    {
        var test = $(this).attr(attr);
        if (test === val1)
        {
            $(this).attr(attr, val2);
            return this;
        }

        if (test === val2)
        {
            $(this).attr(attr, val1);
            return this;
        }

        $(this).attr(attr, val1);
        return this;
    }
});