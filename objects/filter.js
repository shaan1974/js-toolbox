var filterObj = {

    "vars":
    {},
    "translation": [
        "eéèëê", "aàäâ", "uùüû", "oöô", "iïî"
    ],
    "create_regexp": function()
    {
        //  VARS
        //
        var current_string = Array.from(this.vars.search);
        var ndx, current_chars, pass;

        //  RESET
        //
        this.vars.regexp = "";

        //  LOOP ON ALL CHAR OD THE SEARCH STRING
        //
        for (var y = 0, y_len = current_string.length; y < y_len; y++)
        {
            pass = false;

            //  LOOP ON TRANSLATION
            //                  
            for (var q = 0, q_len = this.translation.length; q < q_len; q++)
            {
                ndx = this.translation[q].indexOf(current_string[y]);
                current_chars = this.translation[q];

                //  IF CURRENT CHAR IS INSIDE THE TRANSLATION LOOP
                //
                if (ndx !== -1)
                {
                    this.vars.regexp += "[" + _.join(Array.from("" + this.translation[q] + ""), "|") + "]";
                    pass = true;
                }
            }

            //  IF NOT INSIDE THE TRANSLATION LOOP SO WE USE THE CHAR ITSELF LOWER AND UPPER CASE
            //
            if (pass === false)
            {
                this.vars.regexp += "[" + current_string[y].toUpperCase() + "|" + current_string[y].toLowerCase() + "]";
            }
        }

        //  BUILDED REG EXPRESSION
        //
        this.vars.regexp = new RegExp("^(.*?)(" + this.vars.regexp + ")(.*?)$", "i");
    },
    "search": function(data, w)
    {
        //  CALL TO GENERATE REGULAR EXPRESSION
        //
        this.vars.search = "" + w + "";
        this.create_regexp();

        //  VARS
        //
        var oo = [];

        //  LOOP
        //
        for (var ii = 0, len_ii = data.length; ii < len_ii; ii++)
        {
            if ((data[ii][1]).match(this.vars.regexp) !== null)
            {
                oo.push(data[ii].concat((data[ii][1]).match(this.vars.regexp)));
            }
        }

        //  RETURN
        //
        return oo;
    }
};