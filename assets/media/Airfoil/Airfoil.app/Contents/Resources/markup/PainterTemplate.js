
markup.push({

	// MARK: label fore painter
		
	"LabelFore": {
		nsClass: "GXStringPainter",
		gxFontSize: 13,
		gxFontColor: "name:fontColor",
		gxBackColor: null,
		gxFontShadow: "[0, 0, 0, 0], [0, 1], 1",
		gxHAlign: 0.5,
		gxVAlign: 0.5,

		// alignment styles
		"left"		        : { gxHAlign: 0 },
		"centerx"	        : { gxHAlign: 0.5 },
		"right"		        : { gxHAlign: 1 },
		"top"		        : { gxVAlign: 0 },
		"centery"	        : { gxVAlign: 0.5 },
		"bottom"	        : { gxVAlign: 1 },
	
		// weight (font weights match apple's naming)
		"light"		        : { gxFontWeight: -0.4 },
		"regular"	        : { gxFontWeight: 0 },
		"medium"	        : { gxFontWeight: 0.23 },
		"bold"		        : { gxFontWeight: 0.4 },
	
		"fontColor"		    : { gxFontColor: "name:fontColor" },
		"fontColorInverted"	: { gxFontColor: "name:fontColorInverted" },
		"white"		        : { gxFontColor: "name:white" },
		"black"		        : { gxFontColor: "name:black" },
		"lightGray"		    : { gxFontColor: "name:lightGray" },
		"sectionHeader"		: { gxFontColor: "name:AFColorSpeakerHeaderTitle" },
		"boost"				: { gxFontColor: "name:boost" },
 
		"on"		        : { gxFontColor: "name:black" },
		"disabled"	        : { gxFontColor: "name:lightGray" },
			 
		// word wrap
		"wrap"		: { gxLineBreakMode: 0 },

		// sizes
		"size8"		: { gxFontSize: 8 },
		"size9"		: { gxFontSize: 9 },
		"size95"	: { gxFontSize: 9.5 },
		"size10"	: { gxFontSize: 10 },
		"size105"	: { gxFontSize: 10.5 },
		"size11"	: { gxFontSize: 11 },
		"size115"	: { gxFontSize: 11.5 },
		"size12"	: { gxFontSize: 12 },
		"size125"	: { gxFontSize: 12.5 },
		"size13"	: { gxFontSize: 13 },
		"size135"	: { gxFontSize: 13.5 },
		"size14"	: { gxFontSize: 14 },
		"size145"	: { gxFontSize: 14.5 },
		"size15"	: { gxFontSize: 15 },
		"size16"	: { gxFontSize: 16 },
		"size17"	: { gxFontSize: 17 },
		"size18"	: { gxFontSize: 18 },
		"size20"	: { gxFontSize: 20 },
		"size22"	: { gxFontSize: 22 },
		"size24"	: { gxFontSize: 24 },
		"size26"	: { gxFontSize: 26 },
		"size28"	: { gxFontSize: 28 },
		"size30"	: { gxFontSize: 30 }
	},
 
	// MARK: image painters

	"ImagePainter": {
		nsClass: "GXImagePainter",
	},

	"StretchHImagePainter": {
		"+": "ImagePainter",
		gxVertical: false
	},

	"StretchVImagePainter": {
		"+": "ImagePainter",
		gxVertical: true
	},

	// MARK: base control painters
	// a common base shared by painters for buttons, popup menus etc

	"ControlFore": {
		"+": "LabelFore",
		gxEdgeInsets: "2, 0, 2, 0",
		gxIconSpacing: 5,
		gxFontColor: "name:white",
		"off" : { gxFontColor: "name:white" },
		"on": { gxFontColor: "name:white" },
		"disabled": { gxFontColor: "name:white" }
	},

	"ControlBack": {
		nsClass: "GXRoundRectPainter",
		gxCornerRadius: 2.5,
			
		gxStrokeWidth: 1,
		gxFillColor: "name:controlFill",
		gxFillEndColor: "name:controlFillEnd",
		 
		"leftSegment": { gxCornerRadii: "6, 0, 0, 6",  gxEdgeInsets: "0,0,-0.5,0" },
		"middleSegment": { gxCornerRadii: "0, 0, 0, 0", gxEdgeInsets: "-0.5,0,-0.5,0" },
		"rightSegment": { gxCornerRadii: "0, 6, 6, 0",  gxEdgeInsets: "-0.5,0,0,0" }
	},

	"TextFieldFore": {
		nsClass: "GXStringPainter",
		gxFontSize: 13,
		gxFontColor: "name:black",
		gxAlignment: "0, 0"
	},

	"TextFieldBack": {
		nsClass: "GXRoundRectPainter",
		gxCornerRadius: 0,
		gxFillColor: "name:invisible",
	},

	// MARK: button painters

	"ButtonFore": {
		"+": "ControlFore.center"
	},

	"ButtonBack": {
		"+": "ControlBack"
	},

	// MARK: popup menu painters

	"PopupFore": {
		"+": "ControlFore.size11", 
		gxHAlign: 0,
		gxEdgeInsets: "10, 0, 22, 0"        // extra space on right for arrows
	},

	"PopupBack": {
		"+": "ControlBack",
	},

	"PopupArrows": {
		nsClass: "GXImagePainter",
		gxEdgeInsets: "0, 0, 10, 0",    // inset from right
		gxHAlign: 1,                    // aligned	 right
		gxVAlign: 0.5,
		gxImage: "popup.arrows",
		gxTintColor: "name:white",
		"disabled" : {
			gxTintColor: "name:white"
		}
	},

	// MARK: scrollbar painters

	"ScrollBarKnob":
	{
		nsClass: "GXRoundRectPainter",
		gxCornerRadius: 2.5,
		gxFrameColor: "name:lightGray",
		gxFillColor: "name:lightGray",
		"vertical": {
			gxEdgeInsets: "6, 4, 2, 3"
		},
		"horizontal": {
			gxEdgeInsets: "6, 3, 6, 3"
		}
	},
			
	DeleteButton: {
		nsClass: "GXButtonView",
		gxIntrinsicWidth: 20,
		gxIntrinsicHeight: 20,
		gxHideOnNilValue: true,
		gxValueKeyPath: "remove",
		gxForePainter: {
			"+" : "ImagePainter.delete",
			gxEdgeInsets: "1,1,1,1",
		}
	},
			
	AXVolumeSliderFormatter:
	{
		nsClass: "GXScaledFormatter",
		scale: 100,
		format: "%.0f%%"
	},
	AXPanSliderFormatter:
	{
		nsClass: "GXScaledFormatter",
		scale: 100,
		format: "%.0f%%"
	},
})

