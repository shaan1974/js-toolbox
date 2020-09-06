		$.fn.outerHTML = function()
		{
		    var $t = $(this);
		    if ($t[0].outerHTML !== undefined)
		    {
		        return $t[0].outerHTML;
		    }
		    else
		    {
		        var content = $t.wrap('<div/>').parent().html();
		        $t.unwrap();
		        return content;
		    }
		};