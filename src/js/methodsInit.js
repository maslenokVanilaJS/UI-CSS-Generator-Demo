///Factory Pattern
/// Init Methods to Aply CSSNames with values on selected HTML tag
import'/src/js/CSSInit';

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


function CSSFactory(params) {
  
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

let cssFactory=new CSSFactory();

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