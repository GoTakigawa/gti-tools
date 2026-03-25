const GTI_MODELS = {
  "drake-6": {
    id:"drake-6", name:"Drake-6",
    tagline:"Precision-engineered. Uncompromising.",
    description:"GTI's standard model. Versatile enough for any genre, embodying GTI's original design philosophy.",
    basePrice:0,
    defaultStrings:6, defaultScale1:25.5, defaultScaleN:25.5, defaultFrets:24, defaultPD:0.0, defaultPitch:10.5,
    optionOrder:["body_wood","top_wood","neck_wood","fingerboard","finish_type","finish_color","pickup_config","pickup_brand","bridge","hardware_color","inlay","binding"]
  },
  "satan-6": {
    id:"satan-6", name:"Satan-6",
    tagline:"Tuned lower. Built heavier.",
    description:"Extended scale model pursuing maximum heaviness. Overwhelming low-end density and GTI's dark aesthetic.",
    basePrice:0,
    defaultStrings:6, defaultScale1:26.5, defaultScaleN:27.0, defaultFrets:24, defaultPD:0.33, defaultPitch:10.5,
    optionOrder:["body_wood","top_wood","neck_wood","fingerboard","finish_type","finish_color","pickup_config","pickup_brand","bridge","hardware_color","inlay","binding"]
  }
};

const GTI_OPTIONS = {
  body_wood:{label:"Body wood",category:"BODY",type:"select",default:"ash",options:[
    {id:"ash",label:"Ash",addPrice:0,note:"standard"},
    {id:"alder",label:"Alder",addPrice:0,note:"standard"},
    {id:"mahogany",label:"Mahogany",addPrice:15000},
    {id:"korina",label:"Korina",addPrice:20000},
    {id:"basswood",label:"Basswood",addPrice:0,note:"standard"},
  ]},
  top_wood:{label:"Top wood",category:"BODY",type:"select",default:"none",options:[
    {id:"none",label:"None",addPrice:0,note:"standard"},
    {id:"flame_maple",label:"Flame Maple",addPrice:25000},
    {id:"quilt_maple",label:"Quilt Maple",addPrice:30000},
    {id:"figured_ash",label:"Figured Ash",addPrice:18000},
    {id:"walnut",label:"Walnut",addPrice:22000},
  ]},
  neck_wood:{label:"Neck wood",category:"NECK",type:"select",default:"maple",options:[
    {id:"maple",label:"Maple",addPrice:0,note:"standard"},
    {id:"mahogany",label:"Mahogany",addPrice:8000},
    {id:"wenge",label:"Wenge",addPrice:18000},
    {id:"roasted_maple",label:"Roasted Maple",addPrice:12000},
  ]},
  fingerboard:{label:"Fingerboard",category:"NECK",type:"select",default:"rosewood",options:[
    {id:"rosewood",label:"Rosewood",addPrice:0,note:"standard"},
    {id:"ebony",label:"Ebony",addPrice:12000},
    {id:"maple",label:"Maple",addPrice:0,note:"standard"},
    {id:"richlite",label:"Richlite",addPrice:8000},
    {id:"pau_ferro",label:"Pau Ferro",addPrice:5000},
  ]},
  finish_type:{label:"Finish type",category:"FINISH",type:"select",default:"solid",options:[
    {id:"solid",label:"Solid color",addPrice:0,note:"standard"},
    {id:"burst",label:"Burst",addPrice:20000},
    {id:"trans",label:"Trans finish",addPrice:15000},
    {id:"natural",label:"Natural",addPrice:0,note:"standard"},
    {id:"relic",label:"Relic",addPrice:35000},
  ]},
  finish_color:{label:"Color",category:"FINISH",type:"swatch",default:"black",options:[
    {id:"black",label:"Black",hex:["#111111","#000000"]},
    {id:"white",label:"White",hex:["#e0e0dc","#b8b8b4"]},
    {id:"red",label:"Crimson Red",hex:["#9b2020","#5a0e0e"]},
    {id:"blue",label:"Ocean Blue",hex:["#1a3f7a","#0a1e40"]},
    {id:"green",label:"Forest Green",hex:["#1a5435","#0a2819"]},
    {id:"purple",label:"Deep Purple",hex:["#4a1f72","#221038"]},
    {id:"natural_wood",label:"Natural",hex:["#c8a97a","#8b6418"]},
    {id:"charcoal",label:"Charcoal",hex:["#383838","#181818"]},
  ]},
  pickup_config:{label:"Pickup config",category:"ELECTRONICS",type:"select",default:"hh",options:[
    {id:"hh",label:"HH",addPrice:0,note:"standard"},
    {id:"hsh",label:"HSH",addPrice:8000},
    {id:"hs",label:"HS",addPrice:0,note:"standard"},
    {id:"ss",label:"SS",addPrice:0,note:"standard"},
  ]},
  pickup_brand:{label:"Pickup brand",category:"ELECTRONICS",type:"select",default:"gti",options:[
    {id:"gti",label:"GTI Original",addPrice:0,note:"standard"},
    {id:"sd",label:"Seymour Duncan",addPrice:25000},
    {id:"dimarzio",label:"DiMarzio",addPrice:22000},
    {id:"emg",label:"EMG (active)",addPrice:30000},
    {id:"bnk",label:"Bare Knuckle",addPrice:45000},
  ]},
  bridge:{label:"Bridge",category:"HARDWARE",type:"select",default:"fixed",options:[
    {id:"fixed",label:"Fixed (GTI)",addPrice:0,note:"standard"},
    {id:"floyd",label:"Floyd Rose",addPrice:35000},
    {id:"hipshot",label:"Hipshot Hardtail",addPrice:15000},
    {id:"gotoh",label:"Gotoh GTC201",addPrice:12000},
  ]},
  hardware_color:{label:"Hardware color",category:"HARDWARE",type:"select",default:"chrome",options:[
    {id:"chrome",label:"Chrome",addPrice:0,note:"standard"},
    {id:"black",label:"Black",addPrice:0,note:"standard"},
    {id:"gold",label:"Gold",addPrice:8000},
    {id:"cosmo",label:"Cosmo Black",addPrice:5000},
  ]},
  inlay:{label:"Inlay",category:"DETAIL",type:"select",default:"dots",options:[
    {id:"dots",label:"Dots",addPrice:0,note:"standard"},
    {id:"block",label:"Block",addPrice:10000},
    {id:"blind",label:"Blind (no inlay)",addPrice:0,note:"standard"},
    {id:"custom",label:"Custom CNC engraving",addPrice:25000},
  ]},
  binding:{label:"Binding",category:"DETAIL",type:"select",default:"none",options:[
    {id:"none",label:"None",addPrice:0,note:"standard"},
    {id:"body",label:"Body binding",addPrice:12000},
    {id:"full",label:"Body + Neck",addPrice:20000},
  ]},
};
