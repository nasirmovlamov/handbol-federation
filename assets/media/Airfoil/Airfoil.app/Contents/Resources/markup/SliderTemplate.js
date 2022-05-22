markup.push({
	
	// MARK: slider view
	"SliderView": {
		nsClass: "GXSliderView", 	
		gxIgnoreScrollWheel: false,
		gxIntrinsicHeight: 23,
		gxBaselineOffset: 6,
		gxEndGap: 15,
		gxTrackOffset:  1,
		gxDrawsFocused: true,
		gxIgnoreDoubleClick:true,
		gxDisableOnNil: false,
		"gxAllowNumericEntry": false,
		gxDrawsSelected: true,
		gxTrackPainter: "SliderTrack",
		gxKnobPainter: "SliderKnob",
		gxLabelTemplate: "SliderLabel",
		gxReadoutTemplate: "SliderReadout.percentage",
	},
	
	// standard label for a slider
	"SliderLabel": {
		"+": "LabelView.right.fontColor.size13",
	},
	
	// standard readout for a slider
	"SliderReadout": {
		"+": "LabelView",
		gxForePainter: {
			"+": "LabelFore.right.fontColor.size11",
			"disabled": {
				// prevent drawing when disabled by making empty rect
				gxEdgeInsets: "999,999,999,999"
			},
		}, 
		gxEdgeInsets: "0,-4,0,4",
		gxDefaultValue: "", 
		gxIntrinsicHeight: 19,
		gxIntrinsicWidth: -1, 
		gxVAlign: 1,
		gxClickValue: 0.5,
		"fractionalSeconds": {
			gxFormatter: { nsClass: "GXTimeFormatter", "fractionalSeconds": true },
		},
		"percentage": {
			gxFormatter: { nsClass: "GXScaledFormatter", "scale": 100, "format": "%.0f%%" },
		},
		"string": {
			gxFormatter: null,
		},
	},
	
	// MARK: slider painters
	
	"SliderTrack":
	{
		nsClass: "GXRoundRectPainter",
		gxDefaultSize: "4,4",    // default size of track determines track width!
		gxCornerRadii: "1, 1, 1, 1",
		gxFrameColor: "name:sliderTrack",
		gxFillColor: "name:sliderTrack", 
		gxStrokeWidth: 1,  
	},
	
	"SliderKnob":
	{
		"+": "ImagePainter.sliderknob", 
		gxShadow: "{0.0, 0.0, 0.0, 0.7}, {0.0, -0.5}, 2.0",
		"selected": {
			gxAddStyles: ["focused"],
		},
		"disabled": {
			gxShadow: null,
			gxImage: "name.sliderknob_disabled"
		},
		"pressed" : {
			gxImage: "name.sliderknob_pressed"
		},
		"focused" : {
			gxEdgeInsets: "-2,-2,-2,-2",
			gxFillColor: "name:systemKeyboardFocusIndicatorColor",
			gxCornerRadius: 11,
		}
	},
	
})
