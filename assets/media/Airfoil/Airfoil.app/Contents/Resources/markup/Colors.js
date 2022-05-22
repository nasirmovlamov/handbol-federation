// MARK: Color Generation

function generatePressedColors(dict)
{
	for (var key in dict)
	{
		if (key.indexOf(".pressed") !== -1)
		{
			console.log("skipping");
			continue;
		}
		var newKey = key + ".pressed";
		dict[newKey] = blendColors(dict[key],"rgba:0.0, 0.0, 0.0, 0.0", 0.2);
	}
	return dict;
};

function colorComponentsFromString(cString)
{
	var comps = cString.split(":");
	return comps[1].split(",");
}

function blendColorValue(a, b, t)
{
	return Math.sqrt((1 - t) * Math.pow(a,2) + t * Math.pow(b,2));
}

function blendAlphaValue(a, b, t)
{
	return (1-t)*a + t*b;
}

function blendColors(c1, c2, t)
{
	var cc1 = colorComponentsFromString(c1);
	var cc2 = colorComponentsFromString(c2);
	var ret = cc1;
	for (var i = 0; i < cc1.length; i++)
	{
		ret[i] = blendColorValue(cc1[i], cc2[i], t);
	}
	ret[3] = blendAlphaValue(cc1[3], cc1[3], t);
	return "rgba:" + ret.join(",");
}
 
// MARK: Colors

var black =  "rgba:51, 51, 51, 100.0";
var white = "rgba:255.0, 255.0, 255.0, 100.0";

function colorsDict()
{
	var colors = {
        "white" : white,
		"black" : black,
        "sliderTrack.on" : "rgba:5,113,163,100",
        "sliderTrack" : "rgba:133,147,152,100",
		"lightGray" : "gray: 230,100",
		"invisible" : "rgba:0,0,0,0",
		"boost" : "rgba:199,30,18,100",
		"fontColor" : black,
		"fontColorInverted" : white,
		"controlFill" : "rgba:9,127,172,100",
		"controlFillEnd" : "rgba:4,98,149,100",
	};
	
	generatePressedColors(colors); // mutates
	
	return colors;
};
 
markup.push({
    "Colors" : colorsDict()
})
