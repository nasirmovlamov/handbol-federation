
let presetItemHeight = 33;

markup.push({
			
	"PresetsWindow": {
		nsClass: "GXWindow",
		gxWindowTitle: "Presets",
		gxInitialWindowSize: "320, 250",
		gxInitialWindowPosition: "0.3, 0.3",
		gxBackColor: "rgba:0,0,0,0",
		gxInvisibleContentView: true,
		gxContentView: "PresetsWindowContentView",
	},
			
	PresetsWindowContentView: {
		nsClass: "GXSettingsView",
		gxWantsLayer: true,
		gxBackPainter: {
			nsClass: "GXPainter",
			gxFillColor: "name:white",
			gxEdgeInsets: "0,0,0,12", // Inset bottom so rounded corners of footer look correct
		},
		gxLayout: "V:|-15-[headerView]-0-[presetsScroller]-(-2)-[bottomBar(40)]|",
		gxChildViews: {
			headerView : {
				"+" : "LabelView.size13.bold.black.left",
				gxIntrinsicHeight: 20,
				gxIntrinsicWidth: -1,
				gxLayout: ["H:|-10-[self]-0-|"],
				gxValueKeyPath: "presetsGroup.displayName"
			},
			presetsScroller: {
				nsClass: "GXScrollView",
				gxBackColor: "name:white",
				gxVScrollbar: "ScrollBarView",	// vertical scroller only
				gxVScrollbarWidth: 10,
				gxAutoHidesScrollers: true,
				gxLayout: [ "H:|-0-[self]-0-|", "V:[self(<=150)]" ],
				gxDocumentView: {
					nsClass: "GXListView",
					gxViewName: "presetsList",
					gxCollapsible: false,
					listTopHeight: 5,
					listBottomHeight: 0,
					axTitle: "Presets List",
					gxLayout: [ "H:|-0-[self]-0-|", `V:|-0-[self(>=${presetItemHeight}@700)]-0@700-|` ],
					gxChildViews: {
						emptyView: {
							"+": "LabelView.black",
							gxLayout: ["H:|[self]|"],
							gxIntrinsicHeight: presetItemHeight,
							gxIntrinsicWidth: -1,
							gxDefaultValue: "No Presets"
						},
					}
				}
			},
			bottomBar: {
				nsClass: "GXSettingsView",
				gxWantsLayer: true,
				gxValueKeyPath: "",
				gxBackPainter: {
					nsClass: "GXRoundRectPainter",
					gxCornerRadii: "0,0,8,8",
					gxFillColor: "name:white",
				},
				gxLayerZPosition: 1,
				gxLayout: [ "H:|[self]|",
				"H:[dismissSheetBtn]-10-|&alignCenterY",
				"V:[dismissSheetBtn]-10-|" ],  // center vertically
				gxChildViews: {
					dismissSheetBtn: {
						"+": "ButtonView",
						gxValueKeyPath: "dismissSheetBtn",
						gxForePainter:  "ControlFore.size12",
						gxBackPainter: {
							"+" : "ControlBack",
							gxCornerRadius: 4,
							gxFillColor: "name:controlFill",
							gxFillEnd: null,
						},
						gxTitle: "Done",
						gxKeyEquivalent: "\r",
						gxIntrinsicHeight: 22
					},
				}
			}
		}
	},
	
	PresetItemView: {
		nsClass: "GXSettingsView",
		gxIntrinsicWidth: -1,
		gxIntrinsicHeight: presetItemHeight,
		gxBackPainter: {
			nsClass: "GXRoundRectPainter",
			gxFrameColor: "name:lightGray",
			gxCornerRadius: 5,
			gxEdgeInsets: "10, 2, 0, 4",
		},
		drawsSelected: true,
		selectable: true,
		gxChildViews: {
			"sparkline" : {
				"+": "ImageView",
				gxFrameRect: "21,6,23,23",
				gxValueKeyPath: "sparkline",
 				"gxImagePainter": {
					"+": "ImagePainter",
					gxTintColor: "name:black",
				},
				axIsIgnored: true,
			},
			presetName: {
				"+": "BaseTextField",
				gxBackPainter: null,
				gxBaselineOffset: 2,
				gxValueKeyPath: "name",
				gxFrameRect: "50,5,225,23",
				"gxTextPainter": "TextFieldFore.medium",
				drawsSelected: true,
				gxDrawsFocusRing: false,
			},
			"deleteBtn": {
				"+" : "DeleteButton",
				gxFrameRect: "281,6,20,20",
				axTitle: "Preset Delete",
			},
		}
	},
	
});

markup.push({
	AFEqualizer10Presets: {
		nsClass: "GEPresetsGroup",
		gxTitle: "Custom EQ Presets",
		gxPresetValueKeys: [ "equalizerNode.band0",
							"equalizerNode.band1",
							"equalizerNode.band2",
							"equalizerNode.band3",
							"equalizerNode.band4",
							"equalizerNode.band5",
							"equalizerNode.band6",
							"equalizerNode.band7",
							"equalizerNode.band8",
							"equalizerNode.band9" ]
	},
});
