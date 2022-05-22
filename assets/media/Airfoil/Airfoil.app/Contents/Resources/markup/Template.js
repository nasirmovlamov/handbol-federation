markup.push({
	// MARK: "Image view"
	
	"ImageView": {
		nsClass: "GXImageView",
		"gxImagePainter": "ImagePainter",
	},
	
	// MARK: "label view"
	
	"LabelView": {
		nsClass: "GXLabelView",
		gxForePainter: "LabelFore",
		gxDefaultValue: "12345",      // just so it has a size and something visible
		gxIntrinsicHeight: 16
	},
	
	// MARK: "list view"
	
	"ListView": {
		nsClass: "GXListView",
		gxLayoutSubviews: true,
		gxCollapsible: false,
		gxLayoutHorizontally: false,
		gxCollapsed: false
	},
	
	// MARK: "scrollbar view"
	
	"ScrollBarView":
	{
		nsClass: "GXScroller",
		axIsIgnored: true,
		gxKnobPainter: "ScrollBarKnob",
		gxMinKnobLength: 20
	},
	
	// MARK: "text view"
	
	"TextView": {
		"+": "BaseTextField",
		nsClass: "GXTextView",
	},
	
	// MARK: "textfield view"
	
	"BaseTextField": {    // note: "code depends on the name 'BaseTextField' when looking up gxSelectionColor"
		nsClass: "GXTextField",
		gxBaselineOffset: 2,
		//gxDisabledAlphaColor: "gray:255,28", // placed over everything when disabled
		gxInsertionPointColor: "name:fontColor",
		gxSelectionColor: "rgba:167,201,255,100",    // overrides system hilite color for user selection
		gxLabelTemplate: "LabelView.right.primary.size13",
		gxBackPainter: "TextFieldBack",
		gxPlaceholderStyle: "PlaceholderStyle",
		"gxTextPainter": "TextFieldFore",
	},
 
	"TextField": {
		"+": "BaseTextField"
	},

	"PlaceholderStyle": {
		nsClass: "GXStyledString",
		gxFontSize: 12.3,
		gxFontColor: "name:darkGray"
	},


	"ImageBarButton": {  // images without border
		nsClass: "GXButtonView",
		gxIntrinsicHeight: 24,
		gxIntrinsicWidth: 24,
	},

	"ButtonView": {
		nsClass: "GXButtonView",
		gxIntrinsicHeight: 25,
		gxIntrinsicWidth: 60,
		gxBackPainter: "ControlBack",
		gxForePainter: "ControlFore"
	},

	// MARK: "window bits"

	"WindowTitle": {
		"+": "LabelView.light.size135",
		gxValueKeyPath: "window.title",
		gxIntrinsicWidth: -1,
		gxLayout: ["H:|-75-[self]-75-|", "V:|-3-[self]"],
		axIsIgnored: true
	},

	"WindowTitleBar": {
		nsClass: "GXSettingsView",
		gxViewName: "titleBarView",
		gxBackPainter: "WindowTitleBarBack",
		gxIntrinsicWidth: -1,
		gxIntrinsicHeight: 23,
		gxCanDrawSubviewsIntoLayer: true,    // important for drawn text quality of title
		gxLayout: ["H:|[self]|",
		"V:|-(0@900)-[self]"],
		// constraint priority set so code can override. see GXWindow setupCustomTitlebar
		gxChildViews: {
			"title": "WindowTitle"
		},
	},

	"WindowTitleBarBack": {
		nsClass: "GXRoundRectPainter",
		gxEdgeInsets: "-1.5,-2.5,-1.5,0",
		gxCornerRadii: "3, 3, 0, 0",
		gxFillColor: "name:white",
	},

	//MARK: "Panel Dividers"

	"PanelDivider": {
		nsClass: "GXDrawView",
		gxIntrinsicHeight: 0.5,
		gxLayout: [
			"H:|-0-[self]-0-|"
		],
		gxBackPainter: "PanelDividerPainter",
	},

	"PanelDividerPainter" : {
		nsClass: "GXPainter",            // GXPainter can only fill
		gxFillColor: "name:AFSColorWindowDivider"
	},

	// MARK: "formatters"
	"PercentageFormatter": { nsClass: "GXScaledFormatter", "scale": 100, "format": "% .0f%%" },

	"PopupMenuView": {
		nsClass: "GXPopupMenuView",
		gxIntrinsicHeight: 25,
		gxForePainter: "PopupFore",
		gxBackPainter: "PopupMenuBack",
		gxLayout: [
			"H:[selfLabel]-(>=0@200)-[self]&alignCenterY",
		],
		gxExtraPainter: "PopupArrows",
		gxLabelTemplate: {
			"+": "LabelView.right.fontColor.size13",
		},
		gxDisableOnNil: false        // menu item with repObject of null is valid, but doesn't mix with this setting. choose one.
	},

	"PopupMenuBack" : {
		"+": "PopupBack", 
		gxStrokeWidth: 1,
		gxEdgeInsets: "2, 2, 2, 2", // Inset for shadow 
	},
			
	// ---------------------------------
	// MARK: formatter: AX volume slider

	AXVolumeSliderFormatter:
	{
		nsClass: "GXScaledFormatter",
		scale: 100,
		format: "%.0f%%"
	},
	AXBalanceSliderFormatter:
	{
		nsClass: "GXScaledFormatter",
		scale: 100,
		format: "%.0f%%",
		zeroFormat: "0%%"
	},
	 
})


