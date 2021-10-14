
 


/// Factory Pattern

//Init selectors and create CSSNames to Apply oninput fields







function widthHeightConstructor(options) {
    this.worh=function(wh) {
       if (wh=="width") {
     return  {Target:options.targetIdW,
         BindValue:options.bindIdW,
         size:'width'
       }
       }
       if (wh="height") {
         return{
           Target:options.targetIdH,
         BindValue:options.bindIdH,
         size:'height'
         }
       }
     };
   }

   function textConstructor(params) {
     
   
    this.Target=['#textValueTarget','#textColorTarget','#textFontTarget','#textFontStyleTarget'];
    this.BindValue=['#textValueBind','#textColorBind','#textFontBind','#textFontStyleBind'];
    
    
}

function activeConstructor(params) {
   
    this.color='';
    this.background='';
    this.curentColor=null;
    this.activeColor=null;
    this.Target=['#activeColorTarget'];
    
}

function filterConstructor(options) {
    this.filter={Target:options.filterTarget,
      Bind:options.filterBind,
      sepia:'sepia(0%)',
      blur:'blur(0px)',
      invert:'invert(0%)',
      brightness:'brightness(100%)',
      opacity:'opacity(100%)',
      hueRotate:'hue-rotate(0deg)',
      GrayScale:'grayscale(0%)',
      contrast:'contrast(100%)',
      saturate:'saturate(100%)',
  
    }
  }

  function activeImgInitConstructor(options) {
    this.active={
      Target:options.targetActiveImg,
      Bind:options.bindActiveImg,
      curentFilter:null,
      activeFilter:null,
      sepia:'sepia(0%)',
      blur:'blur(0px)',
      invert:'invert(0%)',
      brightness:'brightness(100%)',
      opacity:'opacity(100%)',
      hueRotate:'hue-rotate(0deg)',
      GrayScale:'grayscale(0%)',
      contrast:'contrast(100%)',
      saturate:'saturate(100%)',
  
    }
  }

  function hoverImgInitConstructor(options) {
    this.hover={
      Target:options.targetHoverImg,
      Bind:options.bindHoverImg,
      curentFilter:null,
      hoverFilter:null,
      sepia:'sepia(0%)',
      blur:'blur(0px)',
      invert:'invert(0%)',
      brightness:'brightness(100%)',
      opacity:'opacity(100%)',
      hueRotate:'hue-rotate(0deg)',
      GrayScale:'grayscale(0%)',
      contrast:'contrast(100%)',
      saturate:'saturate(100%)',
  
    }
  }

  function hoverConstructor(params) {
  
    this.color='';
    this.background='';
    this.curentColor=null;
    this.hoverColor=null;
    this.Target=['#hoverColorTarget'];
    
}
function backgroundConstructor(params) {
  
    this.color='';
    this.image='';
    this.Target=['#backcolorTarget','#imageTarget'];
    this.BindValue=['#backcolorBind','#imageBind'];
    
     
}
function borderRadiusConstructor(options) {
 
  this.valuePx='px';
  this.valuePr='%';
  this.Target=options.targetId;
  this.BindValue=options.bindId;
  
   
}

function boxShadowConstructor(options) {
  
    this.offsetx='0';
    this.offsety='0';
    this.blur='0';
    this.spread='0';
    this.color='';
    this.inset='';
    this.Target=options.targetId;
      this.BindValue=options.bindId;
      this.namesCSS=['offset-y','offset-y','blur-radius','spread-radius','color','inset'];
     
  };


  function CSSFactory(params) {
  
}
CSSFactory.prototype.CSSType=boxShadowConstructor;
  CSSFactory.prototype.createCSSInit=function(options) {
    switch (options.CSSType) {
      case 'boxShadow':
      this.CSSType=boxShadowConstructor;
      break;
      case 'borderRadius':
      this.CSSType=borderRadiusConstructor;
      break;
  
      case 'background':
      this.CSSType=backgroundConstructor;
      break;
      case 'hover':
        this.CSSType=hoverConstructor;
        break;
        case 'active':
        this.CSSType=activeConstructor;
        break;
        case 'text':
        this.CSSType=textConstructor;
        break;
        case 'worh':
        this.CSSType=widthHeightConstructor;
        break;
        case 'filter':
          this.CSSType=filterConstructor;
          break;
          case 'imgHover':
          this.CSSType=hoverImgInitConstructor;
          break;
          case 'imgActive':
          this.CSSType=activeImgInitConstructor;
          break;
      default:
        this.CSSType=boxShadowConstructor;
  
        break;
    }
    return new this.CSSType(options);
  }

  let cssFactory=new CSSFactory();

  let activeImgInit=cssFactory.createCSSInit({
    CSSType:'imgActive',
    targetActiveImg:['#sepiaActiveImgTarget','#blurFActiveImgTarget','#invertActiveImgTarget','#brightnessActiveImgTarget','#opacityActiveImgTarget','#hueRotateActiveImgTarget','#GrayScaleActiveImgTarget','#contrastActiveImgTarget','#saturateActiveImgTarget'],
    
    bindActiveImg:['#sepiaActiveImgBind','#blurFActiveImgBind','#invertActiveImgBind','#brightnessActiveImgBind','#opacityActiveImgBind','#hueRotateActiveImgBind','#GrayScaleActiveImgBind','#contrastActiveImgBind','#saturateActiveImgBind'],
    
    });

    let hoverImgInit=cssFactory.createCSSInit({
        CSSType:'imgHover',
        targetHoverImg:['#sepiaHoverImgTarget','#blurFHoverImgTarget','#invertHoverImgTarget','#brightnessHoverImgTarget','#opacityHoverImgTarget','#hueRotateHoverImgTarget','#GrayScaleHoverImgTarget','#contrastHoverImgTarget','#saturateHoverImgTarget'],
        
        bindHoverImg:['#sepiaHoverImgBind','#blurFHoverImgBind','#invertHoverImgBind','#brightnessHoverImgBind','#opacityHoverImgBind','#hueRotateHoverImgBind','#GrayScaleHoverImgBind','#contrastHoverImgBind','#saturateHoverImgBind'],
        
        });

        let filterInit=cssFactory.createCSSInit({
            CSSType:'filter',
            filterTarget:['#sepiaImgTarget','#blurFImgTarget','#invertImgTarget','#brightnessImgTarget','#opacityImgTarget','#hueRotateImgTarget','#GrayScaleImgTarget','#contrastImgTarget','#saturateImgTarget'],
            filterBind:['#sepiaImgBind','#blurFImgBind','#invertImgBind','#brightnessImgBind','#opacityImgBind','#hueRotateImgBind','#GrayScaleImgBind','#contrastImgBind','#saturateImgBind']
            });


            let widthHightInit=cssFactory.createCSSInit({
                CSSType:'worh',
                targetIdW:['#pxwTarget','#procentwTarget','#vwTarget'],
                bindIdW:['#pxwBind','#procentwBind','#vwBind'],
                targetIdH:['#pxhTarget','#procenthTarget','#vhhTarget'],
                bindIdH:['#pxhBind','#procenthBind','#vhhBind']
                });

                let widthHightInitImg=cssFactory.createCSSInit({
                    CSSType:'worh', 
                    targetIdW:['#pxwImgTarget','#procentwImgTarget','#vwImgTarget'],
                    bindIdW:['#pxwImgBind','#procentwImgBind','#vwImgBind'],
                    targetIdH:['#pxhImgTarget','#procenthImgTarget','#vhhImgTarget'],
                    bindIdH:['#pxhImgBind','#procenthImgBind','#vhhImgBind']
                    });

                    let boxSInit=cssFactory.createCSSInit({
                        CSSType:'boxShadow',
                        targetId:['#offsxTarget','#offsyTarget','#blurTarget','#spreadTarget','#colorTarget','#insetTarget'],
                        bindId:['#offsxBind','#offsyBind','#blurBind','#spreadBind','#colorBind','#insetBind']
                      })
                      let boxSInitImg=cssFactory.createCSSInit({
                        CSSType:'boxShadow',
                        targetId:['#offsxImgTarget','#offsyImgTarget','#blurImgTarget','#spreadImgTarget','#colorImgTarget','#insetImgTarget'],
                        bindId:['#offsxImgBind','#offsyImgBind','#blurImgBind','#spreadImgBind','#colorImgBind','#insetImgBind']
                       
                      })

                      let borderRInit=cssFactory.createCSSInit({
                        CSSType:'borderRadius',
                        targetId:['#radiusPxTarget','#radiusPrTarget'],
                        bindId:['#radiusPxBind','#radiusPrBind']
                      })
                      let borderRInitImg=cssFactory.createCSSInit({
                        CSSType:'borderRadius',
                        targetId:['#radiusPxImgTarget','#radiusPrImgTarget'],
                        bindId:['#radiusPxImgBind','#radiusPrImgBind']
                      })

                      let backndInit=cssFactory.createCSSInit({
                        CSSType:'background'
                      })
                      let hoverInit=cssFactory.createCSSInit({
                        CSSType:'hover'
                      })
                      let activeInit=cssFactory.createCSSInit({
                        CSSType:'active'
                      })
                      let textInit=cssFactory.createCSSInit({
                        CSSType:'text'
                      })





                      ///Factory Pattern
/// Init Methods to Aply CSSNames with values on selected HTML tag
 
function widthHeightMethodConstructor(options) {
    this.applyW=function(wh,f=this.worh) {
      f(wh);
  let size=f(wh).size;
  
  
  for (let i = 0; i < f(wh).Target.length; i++) {
  
    MB.s(`${f(wh).Target[i]}`).addEventListener('input',()=>{
    (size=='width')?this.btn.style.width=`${ MB.s(`${f(wh).Target[i]}`).value}${this.value[i]}`:
    this.btn.style.height=`${ MB.s(`${f(wh).Target[i]}`).value}${this.valueH[i]}`;
    (size=='width')?MB.s(f(wh).BindValue[i]).innerText=`${size}:${ MB.s(`${f(wh).Target[i]}`).value}${this.value[i]};`:
    MB.s(f(wh).BindValue[i]).innerText=`${size}:${ MB.s(`${f(wh).Target[i]}`).value}${this.valueH[i]};`
  
  for (let n = 0; n<i; n++) {
  
       MB.s(f(wh).BindValue[n]).innerText=0;
       MB.s(f(wh).Target[n]).value=0;
  
  }      
  
  for (let m =f(wh).Target.length-1; m>i; m--) {
  
       MB.s(f(wh).BindValue[m]).innerText=0;
       MB.s(f(wh).Target[m]).value=0;
  
  
  }
   } )
  }
    
  
     };
  }
  

 

function filterMethodConstructor(options) {
  this.filterApply=function(params) {
  
    for (let i = 0; i < this.filter.Target.length; i++) {
       

  MB.s(this.filter.Target[i]).addEventListener('input',()=>{
  (this.filter.Target[i]==this.filter.Target[0])?this.filter.sepia=`sepia(${MB.s(this.filter.Target[i]).value}%)`:
  (this.filter.Target[i]==this.filter.Target[1])?this.filter.blur=`blur(${MB.s(this.filter.Target[i]).value}px)`:
  (this.filter.Target[i]==this.filter.Target[2])?this.filter.invert=`invert(${MB.s(this.filter.Target[i]).value}%)`:
  (this.filter.Target[i]==this.filter.Target[3])?this.filter.brightness=`brightness(${MB.s(this.filter.Target[i]).value}%)`:
  (this.filter.Target[i]==this.filter.Target[4])?this.filter.opacity=`opacity(${MB.s(this.filter.Target[i]).value}%)`:
  (this.filter.Target[i]==this.filter.Target[5])?this.filter.hueRotate=`hue-rotate(${MB.s(this.filter.Target[i]).value}deg)`:
  (this.filter.Target[i]==this.filter.Target[6])?this.filter.GrayScale=`grayscale(${MB.s(this.filter.Target[i]).value}%)`:
  (this.filter.Target[i]==this.filter.Target[7])?this.filter.contrast=`contrast(${MB.s(this.filter.Target[i]).value}%)`:
 
  this.filter.saturate=`saturate(${MB.s(this.filter.Target[i]).value}%)`;
  this.btn.style.filter=`${this.filter.sepia} ${this.filter.blur} ${this.filter.invert} ${this.filter.brightness} ${this.filter.opacity}${this.filter.hueRotate} ${this.filter.GrayScale} ${this.filter.contrast} ${this.filter.saturate}`;
this.hover.curentFilter=`${this.filter.sepia} ${this.filter.blur} ${this.filter.invert} ${this.filter.brightness} ${this.filter.opacity}${this.filter.hueRotate} ${this.filter.GrayScale} ${this.filter.contrast} ${this.filter.saturate}`;
  })
    }
  };
}

function activeImgMethodConstructor(params) {
  
   

  this.activeApply= function x(params) {
 
     for (let i = 0; i <this.active.Target.length; i++) {
       console.log(MB.s(this.active.Target[i]))
      MB.s(this.active.Target[i]).oninput=()=>{
       (this.active.Target[i]==this.active.Target[0])?this.active.sepia=`sepia(${MB.s(this.active.Target[i]).value}%)`:
       (this.active.Target[i]==this.active.Target[1])?this.active.blur=`blur(${MB.s(this.active.Target[i]).value}px)`:
       (this.active.Target[i]==this.active.Target[2])?this.active.invert=`invert(${MB.s(this.active.Target[i]).value}%)`:
       (this.active.Target[i]==this.active.Target[3])?this.active.brightness=`brightness(${MB.s(this.active.Target[i]).value}%)`:
       (this.active.Target[i]==this.active.Target[4])?this.active.opacity=`opacity(${MB.s(this.active.Target[i]).value}%)`:
       (this.active.Target[i]==this.active.Target[5])?this.active.hueRotate=`hue-rotate(${MB.s(this.active.Target[i]).value}deg)`:
       (this.active.Target[i]==this.active.Target[6])?this.active.GrayScale=`grayscale(${MB.s(this.active.Target[i]).value}%)`:
       (this.active.Target[i]==this.active.Target[7])?this.active.contrast=`contrast(${MB.s(this.active.Target[i]).value}%)`:
      
       this.active.saturate=`saturate(${MB.s(this.active.Target[i]).value}%)`;
     } 
 }
     this.btn.onmousedown=()=>{
       this.btn.style.filter=`${this.active.sepia} ${this.active.blur} ${this.active.invert} ${this.active.brightness} ${this.active.opacity} ${this.active.hueRotate} ${this.active.GrayScale} ${this.active.contrast} ${this.active.saturate}`
       this.active.activeFilter=`${this.active.sepia} ${this.active.blur} ${this.active.invert} ${this.active.brightness} ${this.active.opacity} ${this.active.hueRotate} ${this.active.GrayScale} ${this.active.contrast} ${this.active.saturate}`

      }
     this.btn.onmouseup=()=>{
       (this.active.curentFilter!=null)?this.btn.style.filter=this.active.curentFilter:
 
       this.btn.style.filter='initial';
       console.log(this.active.curentFilter)
             }
   };
   
 }




function hoverImgMethodConstructor(params) {
  
   

 this.hoverApply= function x(params) {

    for (let i = 0; i <this.hover.Target.length; i++) {
      console.log(MB.s(this.hover.Target[i]))
     MB.s(this.hover.Target[i]).oninput=()=>{
      (this.hover.Target[i]==this.hover.Target[0])?this.hover.sepia=`sepia(${MB.s(this.hover.Target[i]).value}%)`:
      (this.hover.Target[i]==this.hover.Target[1])?this.hover.blur=`blur(${MB.s(this.hover.Target[i]).value}px)`:
      (this.hover.Target[i]==this.hover.Target[2])?this.hover.invert=`invert(${MB.s(this.hover.Target[i]).value}%)`:
      (this.hover.Target[i]==this.hover.Target[3])?this.hover.brightness=`brightness(${MB.s(this.hover.Target[i]).value}%)`:
      (this.hover.Target[i]==this.hover.Target[4])?this.hover.opacity=`opacity(${MB.s(this.hover.Target[i]).value}%)`:
      (this.hover.Target[i]==this.hover.Target[5])?this.hover.hueRotate=`hue-rotate(${MB.s(this.hover.Target[i]).value}deg)`:
      (this.hover.Target[i]==this.hover.Target[6])?this.hover.GrayScale=`grayscale(${MB.s(this.hover.Target[i]).value}%)`:
      (this.hover.Target[i]==this.hover.Target[7])?this.hover.contrast=`contrast(${MB.s(this.hover.Target[i]).value}%)`:
     
      this.hover.saturate=`saturate(${MB.s(this.hover.Target[i]).value}%)`;
    } 
}
    this.btn.onmouseover=()=>{
      this.btn.style.filter=`${this.hover.sepia} ${this.hover.blur} ${this.hover.invert} ${this.hover.brightness} ${this.hover.opacity} ${this.hover.hueRotate} ${this.hover.GrayScale} ${this.hover.contrast} ${this.hover.saturate}`;
    this.hover.hoverFilter=`${this.hover.sepia} ${this.hover.blur} ${this.hover.invert} ${this.hover.brightness} ${this.hover.opacity} ${this.hover.hueRotate} ${this.hover.GrayScale} ${this.hover.contrast} ${this.hover.saturate}`;
    }
    this.btn.onmouseleave=()=>{
      (this.hover.curentFilter!=null)?this.btn.style.filter=this.hover.curentFilter:

      this.btn.style.filter='initial';
      console.log(this.hover.curentFilter)
            }
  };
  
}

  
function borderRadiusMethodConstructor(options) {
 this.applyRadius=function(params) {
  
    for (let i = 0; i < this.radius.Target.length; i++) {
  MB.s(this.radius.Target[i]).oninput=()=>{
  (this.radius.Target[i]==this.radius.Target[0])?this.btn.style.borderRadius=`${MB.s(this.radius.Target[i]).value}${this.radius.valuePx}`:
  this.btn.style.borderRadius=`${MB.s(this.radius.Target[i]).value}${this.radius.valuePr}`;
  };   
    }
  };
}




  function boxShadowMethodConstructor(params) {
    this.boxShadowMethod=function() {
      for (let i = 0; i < this.boxShadow.Target.length; i++) {
        
    MB.s(this.boxShadow.Target[i]).addEventListener('input',()=>{
      (this.boxShadow.Target[i]==this.boxShadow.Target[0])?this.boxShadow.offsetx=MB.s(this.boxShadow.Target[i]).value:
        (this.boxShadow.Target[i]==this.boxShadow.Target[1])?this.boxShadow.offsety=MB.s(this.boxShadow.Target[i]).value:
        (this.boxShadow.Target[i]==this.boxShadow.Target[2])?this.boxShadow.blur=MB.s(this.boxShadow.Target[i]).value:
        (this.boxShadow.Target[i]==this.boxShadow.Target[3])?this.boxShadow.spread=MB.s(this.boxShadow.Target[i]).value:
        (this.boxShadow.Target[i]==this.boxShadow.Target[4])?this.boxShadow.color=MB.s(this.boxShadow.Target[i]).value:
        this.boxShadow.inset=MB.s(this.boxShadow.Target[5]).value;
      MB.s(this.boxShadow.BindValue[i]).innerText=`${this.boxShadow.namesCSS[i]}:${MB.s(this.boxShadow.Target[i]).value}px;`
      this.btn.style.boxShadow=`${this.boxShadow.offsetx}px ${this.boxShadow.offsety}px ${this.boxShadow.blur}px ${this.boxShadow.spread}px ${this.boxShadow.color} ${this.boxShadow.inset}`;
     });    
      }
    };
  }


 
CSSFactory.prototype.CSSApply=boxShadowMethodConstructor;

CSSFactory.prototype.createCSSApply=function(options) {
  switch (options.CSSApply) {
    case 'boxShadow':
    this.CSSApply=boxShadowMethodConstructor;
    break;
    case 'borderRadius':
    this.CSSApply=borderRadiusMethodConstructor;
    break;

    case 'background':
    this.CSSApply=backgroundMethodConstructor;
    break;
    case 'hover':
      this.CSSApply=hoverMethodConstructor;
      break;
      case 'active':
      this.CSSApply=activeMethodConstructor;
      break;
      case 'text':
      this.CSSApply=textMethodConstructor;
      break;
      case 'worh':
      this.CSSApply=widthHeightMethodConstructor;
      break;
      case 'filter':
        this.CSSApply=filterMethodConstructor;
        break;
        case 'hoverImg':
        this.CSSApply=hoverImgMethodConstructor;
        break;
        case 'activeImg':
        this.CSSApply=activeImgMethodConstructor;
        break;
    default:
      this.CSSApply=boxShadowMethodConstructor;

      break;
  }
  return new this.CSSApply(options);
}

 
  let activeApplyMethod=cssFactory.createCSSApply({
    CSSApply:'activeImg'
    });

let hoverApplyMethod=cssFactory.createCSSApply({
CSSApply:'hoverImg'
});

let filterApplyMethod=cssFactory.createCSSApply({
CSSApply:'filter'
});


let widthHeightApply=cssFactory.createCSSApply({
  CSSApply:'worh'
})
 
let boxSApply=cssFactory.createCSSApply({
  CSSApply:'boxShadow'
})

let borderRApply=cssFactory.createCSSApply({
  CSSApply:'borderRadius'
})



//Factory Pattern
//Init complete object with  CSSAplyMethod from object . Example object.filterApply();  => UI solution to apply CSS filter:; on HTML tag .
 


function Button(options) {
    this.btn = MB.s("#btn");
    this.name = options.name;
   

this.value=['px','%','vw'];
this.valueH=['px','%','vh'];
this.boxShadow=options.boxShadow;

this.hover=options.hover;

this.active=options.active;

this.background=options.background;

this.radius=options.radius;

  this.text=options.text;
    this.applyHover= function x(params) {

      for (let i = 0; i <this.hover.Target.length; i++) {
       MB.s(this.hover.Target[i]).oninput=()=>{
      (this.hover.Target[i]="#hoverColorTarget")?this.hover.color=MB.s(this.hover.Target[i]).value:
MB.locFileBackground("#hoverBackImgTarget",'#btn');
this.hover.hoverColor=this.hover.color;

      } 
}
      this.btn.onmouseover=()=>{
this.btn.style.backgroundColor=this.hover.color;

      }
      this.btn.onmouseleave=()=>{
        (this.hover.curentColor!=null)?this.btn.style.backgroundColor=this.hover.curentColor:

        this.btn.style.backgroundColor='initial';
              }
    };

    this.applyActive=function b(params) {

      for (let i = 0; i <this.active.Target.length; i++) {
       MB.s(this.active.Target[i]).oninput=()=>{
      (this.active.Target[i]="#activeColorTarget")?this.active.color=MB.s(this.active.Target[i]).value:
MB.locFileBackground("#activeBackImgTarget",'#btn');
this.active.activeColor=this.active.color;

      } 
}
      this.btn.onmousedown=()=>{
this.btn.style.backgroundColor=this.active.color;

      }
      this.btn.onmouseup=()=>{
        (this.active.curentColor!=null)?this.btn.style.backgroundColor=this.active.curentColor:

        this.btn.style.backgroundColor='initial';
              }
    };


this.applyBackground=function background(params) {

MB.s(this.background.Target[0]).oninput=()=>{
 this.btn.style.backgroundColor=`${MB.s(this.background.Target[0]).value}`
 this.hover.curentColor=`${MB.s(this.background.Target[0]).value}`;
 this.active.curentColor=`${MB.s(this.background.Target[0]).value}`;

} ; 
MB.s(this.background.Target[1]).onchange=()=>{
MB.locFileBackground("#imageTarget","#btn"); 
 } ;  
  

};


this.applyRadius=options.radiusMethod;




this.applyText=function na(params) {

  for (let i = 0; i < this.text.Target.length; i++) {
MB.s(this.text.Target[i]).oninput=()=>{
(this.text.Target[i]=="#textValueTarget")?this.btn.innerText=`${MB.s(this.text.Target[i]).value}`:
(this.text.Target[i]=="#textColorTarget")?this.btn.style.color=`${MB.s(this.text.Target[i]).value}`:
(this.text.Target[i]=="#textFontStyleTarget")?MB.locFileFont("#textFontStyleTarget","#btn"):

this.btn.style.fontSize=`${MB.s(this.text.Target[i]).value}px`;
};   
  }
};




this.applyBoxSh=options.boxShadowMethod;


this.worh=options.worh;




  this.applyW=options.applyW;


  
  }


  function Image(options) {
    this.btn = MB.s("#img");
    this.value=['px','%','vw'];
this.valueH=['px','%','vh'];
this.radius=options.radius;
this.filter=options.filter;
this.hover=options.hover;
this.active=options.active;
this.applyActive=options.activeApply;
this.applyHover=options.hoverApply;
    this.boxShadow=options.boxShadow;
    this.worh=options.worh;
     this.filterApply=options.filterApply;
 
    this.applyW=options.applyW;
    this.applyBoxSh = options.boxShadowMethod;
    this.applyRadius=options.radiusMethod;
  }


  function CSSAplierFactory() {}
   CSSAplierFactory.prototype.tagType = Button;
 
   CSSAplierFactory.prototype.createTagApply = function(options) {
    switch(options.tagType) {
      case "btn":
        this.tagType = Button;

        break;
      case "img":
        this.tagType = Image;
        break;
      default:
        this.tagType = Button;
        break;
    }
    return new this.tagType(options);
  }
  var tagCSSAplyFactory = new CSSAplierFactory();
  var doge = tagCSSAplyFactory.createTagApply({
    tagType: 'btn',
    boxShadow:boxSInit,
    boxShadowMethod:boxSApply.boxShadowMethod,

    radius:borderRInit,
    radiusMethod:borderRApply.applyRadius,
    background:backndInit,
    hover:hoverInit,
    active:activeInit,
    text:textInit,
    worh:widthHightInit.worh,
    applyW:widthHeightApply.applyW,


  });

  let img = tagCSSAplyFactory.createTagApply({
    tagType: 'img',
    boxShadow:boxSInitImg,
    radius:borderRInitImg,
worh:widthHightInitImg.worh,
    boxShadowMethod:boxSApply.boxShadowMethod,
    radiusMethod:borderRApply.applyRadius,
    applyW:widthHeightApply.applyW,
    filter:filterInit.filter,
    filterApply:filterApplyMethod.filterApply,
    hover:hoverImgInit.hover,
    hoverApply:hoverApplyMethod.hoverApply,
    active:activeImgInit.active,
    activeApply:activeApplyMethod.activeApply

     


  });