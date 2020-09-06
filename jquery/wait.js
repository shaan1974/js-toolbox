jQuery.ready.then(
    function()
    {
        $.wait = function(ms)
        {
            var defer = $.Deferred();
            setTimeout(function()
            {
                defer.resolve();
            }, ms);
            return defer;
        };
    }
).fail(
    function(error)
    {
        // throw error;
    }
);