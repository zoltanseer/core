/* Slimbox v1.71, (c) 2007-2009 Christophe Beyls <http://www.digitalia.be>, MIT-style license */
var Slimbox=function(){function D(){var b=a.getScroll(),c=a.getSize();$$(q,v).setStyle("left",b.x+c.x/2),i&&p.setStyles({left:b.x,top:b.y,width:c.x,height:c.y})}function E(c){["object",b?"select":"embed"].forEach(function(a){Array.forEach(document.getElementsByTagName(a),function(a){c&&(a._slimbox=a.style.visibility),a.style.visibility=c?"hidden":a._slimbox})}),p.style.display=c?"":"none";var d=c?"addEvent":"removeEvent";a[d]("scroll",D)[d]("resize",D),document[d]("keydown",F)}function F(a){var b=a.code;return c.closeKeys.contains(b)?M():c.nextKeys.contains(b)?H():c.previousKeys.contains(b)?G():!1}function G(){return I(g)}function H(){return I(h)}function I(a){return a>=0&&(e=a,f=d[a][0],g=(e||(c.loop?d.length:0))-1,h=(e+1)%d.length||(c.loop?0:-1),L(),q.className="lbLoading",m=new Image,m.onload=J,m.src=f),!1}function J(){q.className="",B.set(0),r.setStyles({backgroundImage:"url("+f+")",display:""}),s.setStyle("width",m.width),$$(s,t,u).setStyle("height",m.height),x.set("html",d[e][1]||""),y.set("html",(d.length>1&&c.counterText||"").replace(/{x}/,e+1).replace(/{y}/,d.length)),g>=0&&(n.src=d[g][0]),h>=0&&(o.src=d[h][0]),k=r.offsetWidth,l=r.offsetHeight;var a=Math.max(0,j-l/2),b=0,i;q.offsetHeight!=l&&(b=A.start({height:l,top:a})),q.offsetWidth!=k&&(b=A.start({width:k,marginLeft:-k/2})),i=function(){v.setStyles({width:k,top:a+l,marginLeft:-k/2,visibility:"hidden",display:""}),B.start(1)},b?A.chain(i):i()}function K(){g>=0&&(t.style.display=""),h>=0&&(u.style.display=""),C.set(-w.offsetHeight).start(0),v.style.visibility=""}function L(){m.onload=$empty,m.src=n.src=o.src=f,A.cancel(),B.cancel(),C.cancel(),$$(t,u,r,v).setStyle("display","none")}function M(){return e>=0&&(L(),e=g=h=-1,q.style.display="none",z.cancel().chain(E).start(0)),!1}var a=window,b=Browser.Engine.trident4,c,d,e=-1,f,g,h,i,j,k,l,m={},n=new Image,o=new Image,p,q,r,s,t,u,v,w,x,y,z,A,B,C;return a.addEvent("domready",function(){$(document.body).adopt($$(p=new Element("div",{id:"lbOverlay",events:{click:M}}),q=new Element("div",{id:"lbCenter"}),v=new Element("div",{id:"lbBottomContainer"})).setStyle("display","none")),r=(new Element("div",{id:"lbImage"})).injectInside(q).adopt(s=(new Element("div",{styles:{position:"relative"}})).adopt(t=new Element("a",{id:"lbPrevLink",href:"#",events:{click:G}}),u=new Element("a",{id:"lbNextLink",href:"#",events:{click:H}}))),w=(new Element("div",{id:"lbBottom"})).injectInside(v).adopt(new Element("a",{id:"lbCloseLink",href:"#",events:{click:M}}),x=new Element("div",{id:"lbCaption"}),y=new Element("div",{id:"lbNumber"}),new Element("div",{styles:{clear:"both"}}))}),Element.implement({slimbox:function(a,b){return $$(this).slimbox(a,b),this}}),Elements.implement({slimbox:function(a,b,c){b=b||function(a){return[a.href,a.title]},c=c||function(){return!0};var d=this;return d.removeEvents("click").addEvent("click",function(){var e=d.filter(c,this);return Slimbox.open(e.map(b),e.indexOf(this),a)}),d}}),{open:function(e,f,g){return c=$extend({loop:!1,overlayOpacity:.8,overlayFadeDuration:400,resizeDuration:400,resizeTransition:!1,initialWidth:250,initialHeight:250,imageFadeDuration:400,captionAnimationDuration:400,counterText:"Image {x} of {y}",closeKeys:[27,88,67],previousKeys:[37,80],nextKeys:[39,78]},g||{}),z=new Fx.Tween(p,{property:"opacity",duration:c.overlayFadeDuration}),A=new Fx.Morph(q,$extend({duration:c.resizeDuration,link:"chain"},c.resizeTransition?{transition:c.resizeTransition}:{})),B=new Fx.Tween(r,{property:"opacity",duration:c.imageFadeDuration,onComplete:K}),C=new Fx.Tween(w,{property:"margin-top",duration:c.captionAnimationDuration}),typeof e=="string"&&(e=[[e,f]],f=0),j=a.getScrollTop()+a.getHeight()/2,k=c.initialWidth,l=c.initialHeight,q.setStyles({top:Math.max(0,j-l/2-40),width:k,height:l,marginLeft:-k/2,display:""}),i=b||p.currentStyle&&p.currentStyle.position!="fixed",i&&(p.style.position="absolute"),z.set(0).start(c.overlayOpacity),D(),E(1),d=e,c.loop=c.loop&&d.length>1,I(f)}}}();