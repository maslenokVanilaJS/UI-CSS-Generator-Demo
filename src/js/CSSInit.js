
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