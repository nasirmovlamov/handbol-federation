var topInset = 35;
var bottomInset = 40;

markup.push({
    
    "EffectsWindow" : {
        nsClass: "GXWindow",
        gxWindowTitle: "Effects",
        gxBackColor: "name:AFColorSpeakerHeaderBackground", 
        gxInitialWindowSize: "540,360",
        gxWindowMaxSize: "540,360",
		gxWindowMinSize: "540,360",
        gxInitialWindowPosition: "0.5,0.5",
        gxContentView: "EffectsWindowContentView",
        gxSavedWindowStateKey: "effectsWindow",
		gxHasFullKeyboardAccess: true,
    },
    
    "EffectsWindowContentView": {  
        nsClass: "GXDrawView",
        gxWantsLayer: true,
        gxLayout: [ 
			"V:[effectsHeader]-10-[eqPreset]-10-[equalizerView]",
			"H:[eqPresetLabel]-(10)-[eqPreset(165)]-(-90)-[centerV]",
			"V:[self]-(<=0)-[centerV]&alignCenterX"
		],
        gxChildViews: {
			"equalizerView" : equalizerView(520,201),
			"eqPreset": {
				"+" : "PopupMenuView",
				nsClass : "GEPresetsPopupMenu",
				gxPresetWindowIsSheet : true,
				gxForePainter: {
					"+": "ControlFore.size12.left",
					gxIconTintColor: "name:white",
					gxEdgeInsets: "12,0,20,0",
				},
				gxIconKeyPath: "sparkline",
				gxShowManualPreset: false,
				gxMenuPresentationOffset: 0,
				presetsKey: "AFEqualizer10Presets",
				gxIntrinsicHeight: 27,
				gxLabelText: "Preset:",
				gxValueKeyPath: "",
				axTitle: "Equalizer Preset",
			},
			"effectsHeader" : {
                nsClass: "GXSettingsView",
                gxValueKeyPath: "",
				gxLayout: [
					"H:|[self]|",
                    "V:|-0-[self(80)]",
                    "H:|-30-[volumeSlider]-10-[centerH]-10-[balanceSlider]-30-|&alignCenterY",
                    "V:|-32-[volumeSlider]", 
                    "H:[volumeSliderReadout(35)]-(>=0)-[balanceSliderReadout(100)]&alignBaseline",
                    "V:[self]-(<=0)-[centerH]&alignCenterX"
				],
				gxBackPainter: {
                    nsClass: "GXPainter",
                    gxFillColor: "name:AFColorEffectsBackground"
                },
                gxChildViews: { 
                    "volumeSlider" : {
                        "+" : "HorizontalSlider",
						gxRangeMax: 2,
						gxDefaultValue: 1,
						gxDetents: "1",
                        gxLabelText: "Master Volume",
                        gxValueKeyPath: "gainNode.gain",
                        gxReadoutKeyPath: "gainNode.totalGain",
						gxReadoutTemplate: {
							"+" : "SliderReadout.center.percentage", 
							gxStylesKeyPath: "volumeSliderStyles",
							gxClickValue: 1,
						},
						axFormatter : {
							nsClass: "GXScaledFormatter",
							scale: 100,
							format: "%.0f%%"
						}
                    },
                    "balanceSlider" : {
                        "+" : "HorizontalSlider",
                        gxDefaultValue: 0,
						gxSliderTrackStyling: 1,
						gxRangeMin: -1.0,
						gxRangeMax: 1.0,
                        gxDetents: "-1,0,1",
                        gxLabelText: "Balance",
                        gxValueKeyPath: "balanceNode.balance", 
                        gxReadoutKeyPath: "",
						axValueDescriptionKeyPath: "balanceReadout",
						axFormatter : {
							nsClass: "GXScaledFormatter",
							scale: 100,
							format: "%.0f%%"
						}
					},
                    "balanceSliderReadout" : {
                        "+" : "LabelView.size11.center",
                        gxValueKeyPath: "balanceReadout",
						gxBaselineOffset: -2,
						gxClickValue: 0,
                    },
                    "centerH" : {
                        nsClass: "GXDrawView"
                    }
                }
			},
			"centerV" : { nsClass: "GXDrawView" },
        }
    },
    
    "HorizontalSlider" : {
            "+" : "SliderView",
           gxLayout: [
                "V:[self(26)]-(<=-42)-[selfLabel]-(<=24)-[selfReadout]&alignCenterX",
           ]
    }
}); 
 
function equalizerView(width, height) {
	var height = height || Constants.EqualizerHeight; // Default to global equalizer height
	var width = width || 500; // Default to 500px wide
	var leftEdgeInset = 24;
	var rightEdgeInset = 14;
	var bsp = ((width - leftEdgeInset - rightEdgeInset) * 0.1) - 25; // equalizer band spacing
	var quaterSpacing = ((height - topInset - bottomInset) * 0.25);
	return {
		nsClass: "GXDrawView",
		gxValueKeyPath: "",
		gxIntrinsicHeight: height,
		gxIntrinsicWidth: width,
		gxLayerZPosition: 0,
		axIsIgnored: false,
		axTitle: "Equalizer Parameters",
		gxLayout: [
			 "V:[self]-(<=0)-[centerV]&alignCenterX",
		],
		gxChildViews: {
			"eqContainer" : {
				nsClass: "GXSettingsView",
				gxValueKeyPath: "",
				gxIntrinsicHeight: height,
				gxIntrinsicWidth: width,
				gxLayout: [
					"V:|-0-[self]-0-|",
					`H:[b0]-${bsp}-[b1]-${bsp}-[b2]-${bsp}-[b3]-${bsp}-[b4]-${bsp}-[b5]-${bsp}-[b6]-${bsp}-[b7]-${bsp}-[b8]-${bsp}-[b9]-${rightEdgeInset}-|`,
					`V:|-${topInset}-[s1]`,
					`V:|-${topInset + (quaterSpacing)}-[s2]`,
					`V:|-${topInset + (quaterSpacing * 2)}-[s3]`,
					`V:|-${topInset + (quaterSpacing * 3)}-[s4]`,
					`V:|-${topInset + (quaterSpacing * 4)}-[s5]`,
				],
				gxCanDrawSubviewsIntoLayer: true,
				gxWantsLayer: true,
				gxChildViews:
				{
					"b0": makeEqSlider(0,32),
					"b1": makeEqSlider(1,64),
					"b2": makeEqSlider(2,128),
					"b3": makeEqSlider(3,250),
					"b4": makeEqSlider(4,500),
					"b5": makeEqSlider(5,1000),
					"b6": makeEqSlider(6,2000),
					"b7": makeEqSlider(7,4000),
					"b8": makeEqSlider(8,8000),
					"b9": makeEqSlider(9,16000),
					"s1": { "+": "EqStripe", gxLabelText: "+12dB", gxBackPainter: null },
					"s2": { "+": "EqStripe", gxLabelText: "+6dB", gxBackPainter: null },
					"s3": { "+": "EqStripe", gxLabelText: "0dB", gxBackPainter: { nsClass: "GXPainter", gxFillColor: "gray:200,100" }},
					"s4": { "+": "EqStripe", gxLabelText: "-6dB", gxBackPainter: null },
					"s5": { "+": "EqStripe", gxLabelText: "-12dB", gxBackPainter: null },
				},
			},
			"centerV" : { nsClass: "GXDrawView" },
		},
	};
	 
};
 
function makeEqSlider(band, hz, nextKeyView)
{
	var hzTitle = "";
	if (hz == 32)
	{
		hzTitle = "Hz";
	}
	if (hz >= 1000)
	{
		hzTitle = hz == 1000 ? "kHz" : "K";
	}
	var hzNumber = hz < 1000 ? hz : (hz / 1000);
	return {
		"+": "EqSlider",
		gxValueKeyPath: "equalizerNode.band"+band,
		gxLayerZPosition : band, // Layer Z changes order of sliders in Voice Over
		axTitle: hz + " hertz",
		gxLabelText: hzNumber + hzTitle,
		gxReadoutKeyPath: "equalizerNode.band"+band,
	};
}

markup.push({
	
	EqSlider: {
		"+": "SliderView",
		gxSliderAnimationDuration: 0.4,
		gxAnimatesSliderForModelUpdates: true, // makes sliders animate between preset changes
		gxVertical: true, 
		gxLayerZPosition: 2,
		gxDetentPainter: null,
		gxDefaultValue: 0.5,
		gxSliderTrackStyling: 1,
		gxDetentSnapDistance: 1,
		gxWritesKnobValueToReadout: true,
		gxDetents: "(0.5)",
		axFormatter: { nsClass: "GXScaledFormatter", offset: -0.5, scale: 24, format: "%+.2f dB", zeroFormat: "0.0" },
		gxKeystrokeStepSize: 0.00416666667,
		gxTrackOffset: -1,
		gxKnobPainter: {
			"+" : "SliderKnob",
			gxEdgeInsets: "0,0,0,0",
		},
		gxTrackPainter: {
			"+" : "SliderTrack",
			gxCornerRadii: "1.5, 1.5, 1.5, 1.5",
			gxDefaultSize: "4,0",    // default size of track determines track width!
			gxEdgeInsets: "0,7,0,7",
			"on" : { },
			"disabled" : { },
			"pressed" : { },
		},
		gxLayout: [
			"V:[selfLabel(18)]-0-[self]-0-[selfReadout(15)]&alignCenterX",
			"V:|-"+(topInset - 15)+"-[self]-"+(bottomInset - 15)+"-|",
			"H:[self(23)]"
		],
		gxLabelTemplate: "LabelView.size10.black.right",
		gxReadoutTemplate: {
			"+": "LabelView.black.size10",
			gxDefaultValue: "0.0",
			gxFormatter: { nsClass: "GXScaledFormatter", offset: -0.5, scale: 24, format: "% .1f", zeroFormat: "0.0" },
			gxIntrinsicWidth: 36,
			gxClickValue: 0.5,
		},
	},
	
	EqStripe: {
		"+": "PanelDivider",
		gxLayout: ["H:|-20-[selfLabel(35)]-15-[self]-20-|&alignCenterY"],
		gxLabelTemplate: {
			"+": "LabelView.right.top.black.size9",
			gxIntrinsicHeight: 14
		}
	},
});

