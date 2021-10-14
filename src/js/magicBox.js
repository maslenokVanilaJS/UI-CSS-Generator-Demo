///////
///////
///////Manipulate with CSS Selectors, add, remove
///
//

//querySelector
window.MagicBox=()=>{
    return{
    s:   function s_(s){
            if (s[0]=='#') {
                return document.querySelector(`${s}`);
            }
            if ( document.querySelector(`.${s}`)==null||s[0]=='#') {
                return document.querySelector(`${s}`);
            }
            if (typeof s ==='string'&&s[0]!=".") {
                return document.querySelector(`.${s}`);
        
            }
            if (s[0]=='.') {
                throw's_: Two <.> detected'
            }
             else {
                throw's_:Invalid CSSSelector';
        
            }
        },
        //querySelectorAll
    sAll:    function s_All(s){
            if (s[0]=='#') {
                return document.querySelector(`${s}`);
            }
            if ( document.querySelectorAll(`.${s}`)==null||document.querySelectorAll(`.${s}`).length==0) {
                return document.querySelectorAll(`${s}`);
            }
            if (typeof s ==='string'&&s[0]!=".") {
                return document.querySelectorAll(`.${s}`);
              
            }
            if (s[0]=='.') {
                throw's_All: Two <.> detected'
            }
            else {
                throw's_All:Invalid CSSSelector';
            
            }
        },
        //querySelectorAll to array
arrify:    function arrify(s,f=this.sAll) {
          return  Array.prototype.slice.call(f(s));
        
        },
         //add class to one element,first selector without".",second className to add
     add:    function add(sel,c) {
             this.s(sel).classList.add(c);    
         },
         
          //add class to all elements,first selector without".",second className to add
    add_All:    function add_All(s,c,f=this.sAll) {
        for (const iterator of f(s)) {
            iterator.classList.add(c);
        }


    },
    hide:    function hide(sel,f=this.s) {
       f(sel).style.display="none";


    },
    hide_All:    function hideAll(sel,f=this.sAll) {

        for (const i of f(sel)) {
            i.style.display="none";
        }
  
 
     },
    show:    function hide(sel,f=this.s) {
        f(sel).style.display="block";
 
 
     },
     //sel=selector input[file],target=selector to change background
     locFileBackground:    function l(sel,target,f=this.s) {
let reader=new FileReader();
reader.readAsDataURL(f(sel).files[0])
reader.onloadend=function m(){
   f(target).style.backgroundImage=`url("${reader.result}")`
   f(target).style.backgroundSize=`cover`

}
     },

     locFileFont:    function l(sel,target,f=this.s) {
        
        let reader=new FileReader();
        reader.readAsDataURL(f(sel).files[0])
        reader.onloadend=function m(){
            var newStyle = document.createElement('style');
        newStyle.appendChild(document.createTextNode("\
        @font-face {\
            font-family:FontName;\
            src: url('" + reader.result + "');\
        }\
        "));
        
        document.head.appendChild(newStyle);
          f(target).style.fontFamily=`FontName`
        
        }
             },

}
 

/////// In develop
///////
///////Show,Hide Metods
///
//
     function show_hide(s,c,d,f=s_){
f(s).addEventListener('click',()=>{
 });
}
    
}
 
