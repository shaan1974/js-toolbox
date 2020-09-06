function NUNGU_APP()
{}

NUNGU_APP.prototype = (function()
{

    /*  PRIVATE */
    /* VARS */
    var myObject = {
        "FIRSTNAME": "Dupont",
        "LASTNAME": "Marc"
    };

    /* FUNCTIONS */
    var update_object = function(k, v)
    {
        myObject[k] = v;
    };

    var return_object = function()
    {
        return myObject;
    };

    /*  PUBLIC */

    return {

        constructor: NUNGU_APP,

        get_data: function()
        {
            return return_object();
        },

        set_data: function(k, v)
        {
            update_object(k, v);
        }

    };
})();

var r = new NUNGU_APP();

console.log(r.get_data());
r.set_data("LASTNAME", "Antoine");
console.log(r.get_data());