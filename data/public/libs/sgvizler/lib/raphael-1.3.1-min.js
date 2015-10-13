/*
 * Raphael 1.3.1 - JavaScript Vector Library
 *
 * Copyright (c) 2008 - 2009 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
Raphael=(function(){
var a=/[, ]+/,aO=/^(circle|rect|path|ellipse|text|image)$/,
L=document,au=window,l={was:"Raphael" in au,is:au.Raphael},
an=function(){
if(an.is(arguments[0],"array")){
var d=arguments[0],e=w[aW](an,d.splice(0,3+an.is(d[0],al))),
S=e.set();
for(var R=0,a0=d[m];R<a0;R++){
var E=d[R]||{};
aO.test(E.type)&&S[f](e[E.type]().attr(E));
}
return S;
}
return w[aW](an,arguments);
},
aT=function(){},
aL="appendChild",
aW="apply",
aS="concat",
at="",
am=" ",
z="split",
F="click dblclick mousedown mousemove mouseout mouseover mouseup"[z](am),
Q="hasOwnProperty",
az="join",
m="length",
aY="prototype",
aZ=String[aY].toLowerCase,ab=Math,g=ab.max,aI=ab.min,al="number",
aA="toString",
aw=Object[aY][aA],
aQ={},
aM=ab.pow,
f="push",
aU=/^(?=[\da-f]$)/,c=/^url\(['"]?([^\)]+)['"]?\)$/i,
x=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgb\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|rgb\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\)|hs[bl]\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hs[bl]\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i,
O=ab.round,
v="setAttribute",
W=parseFloat,
G=parseInt,
aN=String[aY].toUpperCase,
j={"clip-rect":"0 0 1e9 1e9",
cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,
font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",
opacity:1,
path:"M0,0",
r:0,rotation:0,
rx:0,
ry:0,
scale:"1 1",
src:"",
stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,
target:"_blank","text-anchor":"middle",
title:"Raphael",
translation:"0 0",width:0,x:0,y:0},
Z={along:"along","clip-rect":"csv",cx:al,cy:al,fill:"colour","fill-opacity":al,"font-size":al,height:al,opacity:al,path:"path",r:al,rotation:"csv",rx:al,ry:al,scale:"csv",stroke:"colour","stroke-opacity":al,"stroke-width":al,translation:"csv",width:al,x:al,y:al},aP="replace";an.version="1.3.1";
an.type=(au.SVGAngle||L.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML");
if(an.type=="VML"){
var ag=document.createElement("div");
ag.innerHTML="<!--[if vml]><br><br><![endif]-->";
if(ag.childNodes[m]!=2){
return null;
}}
an.svg=!(an.vml=an.type=="VML");
aT[aY]=an[aY];an._id=0;an._oid=0;an.fn={};
an.is=function(e,d){
d=aZ.call(d);
return((d=="object"||d=="undefined")&&typeof e==d)||(e==null&&d=="null")||aZ.call(aw.call(e).slice(8,-1))==d;};
an.setWindow=function(d){
au=d;L=au.document;
};
var aD=function(e){
if(an.vml){
var d=/^\s+|\s+$/g;aD=aj(function(R){
var S;R=(R+at)[aP](d,at);
try{var a0=new ActiveXObject("htmlfile");
a0.write("<body>");
a0.close();
S=a0.body;
}
catch(a2){S=createPopup().document.body;
}
var i=S.createTextRange();
try{S.style.color=R;
var a1=i.queryCommandValue("ForeColor");
a1=((a1&255)<<16)|(a1&65280)|((a1&16711680)>>>16);
return"#"+("000000"+a1[aA](16)).slice(-6);
}
catch(a2){return"none";
}});}
else{var E=L.createElement("i");
E.title="Rapha\xebl Colour Picker";
E.style.display="none";
L.body[aL](E);
aD=aj(function(i){E.style.color=i;return L.defaultView.getComputedStyle(E,at).getPropertyValue("color");
});}
return aD(e);
};
an.hsb2rgb=aj(function(a3,a1,a7){
if(an.is(a3,"object")&&"h" in a3&&"s" in a3&&"b" in a3){
a7=a3.b;a1=a3.s;a3=a3.h;
}
var R,S,a8;if(a7==0){
return{r:0,g:0,b:0,hex:"#000"}
;}
if(a3>1||a1>1||a7>1){a3/=255;a1/=255;a7/=255;
}
var a0=~~(a3*6),a4=(a3*6)-a0,E=a7*(1-a1),e=a7*(1-(a1*a4)),a9=a7*(1-(a1*(1-a4)));R=[a7,e,E,E,a9,a7,a7][a0];S=[a9,a7,a7,e,E,E,a9][a0];a8=[E,E,a9,a7,a7,e,E][a0];
R*=255;S*=255;a8*=255;
var a5={r:R,g:S,b:a8},
d=(~~R)[aA](16),
a2=(~~S)[aA](16),
a6=(~~a8)[aA](16);d=d[aP](aU,"0");
a2=a2[aP](aU,"0");a6=a6[aP](aU,"0");
a5.hex="#"+d+a2+a6;return a5;},an);
an.rgb2hsb=aj(function(d,e,a1){
if(an.is(d,"object")&&"r" in d&&"g" in d&&"b" in d){
a1=d.b;e=d.g;d=d.r;
}
if(an.is(d,"string")){
var a3=an.getRGB(d);
d=a3.r;e=a3.g;a1=a3.b;
}
if(d>1||e>1||a1>1){
d/=255;e/=255;a1/=255;
}
var a0=g(d,e,a1),
i=aI(d,e,a1),R,E,S=a0;
if(i==a0){
return{h:0,s:0,b:a0};
}
else{var a2=(a0-i);
E=a2/a0;if(d==a0){
R=(e-a1)/a2;
}
else{if(e==a0){R=2+((a1-d)/a2);
}
else{
R=4+((d-e)/a2);
}}
R/=6;R<0&&R++;R>1&&R--;
}
return{h:R,s:E,b:S};},an);
var aE=/,?([achlmqrstvxz]),?/gi;an._path2string=function(){
return this.join(",")[aP](aE,"$1");
};
function aj(E,e,d){
function i(){
var R=Array[aY].slice.call(arguments,0),a0=R[az]("\u25ba"),S=i.cache=i.cache||{},a1=i.count=i.count||[];
if(S[Q](a0)){
return d?d(S[a0]):S[a0];
}
a1[m]>=1000&&delete S[a1.shift()];a1[f](a0);S[a0]=E[aW](e,R);
return d?d(S[a0]):S[a0];
}
return i;
}
an.getRGB=aj(function(d){
if(!d||!!((d=d+at).indexOf("-")+1)){
return{
r:-1,g:-1,b:-1,hex:"none",error:1
}
;}
if(d=="none"){
return{r:-1,g:-1,b:-1,hex:"none"};
}
!(({hs:1,rg:1})[Q](d.substring(0,2))||d.charAt()=="#")&&(d=aD(d));
var S,i,E,a2,a3,a0=d.match(x);
if(a0){if(a0[2]){a2=G(a0[2].substring(5),16);E=G(a0[2].substring(3,5),16);i=G(a0[2].substring(1,3),16);
}
if(a0[3]){a2=G((a3=a0[3].charAt(3))+a3,16);
E=G((a3=a0[3].charAt(2))+a3,16);
i=G((a3=a0[3].charAt(1))+a3,16);
}
if(a0[4]){a0=a0[4][z](/\s*,\s*/);
i=W(a0[0]);E=W(a0[1]);
a2=W(a0[2]);}if(a0[5])
{
a0=a0[5][z](/\s*,\s*/);
i=W(a0[0])*2.55;E=W(a0[1])*2.55;a2=W(a0[2])*2.55;
}
if(a0[6]){a0=a0[6][z](/\s*,\s*/);
i=W(a0[0]);
E=W(a0[1]);
a2=W(a0[2]);
return an.hsb2rgb(i,E,a2);
}
if(a0[7]){a0=a0[7][z](/\s*,\s*/);
i=W(a0[0])*2.55;
E=W(a0[1])*2.55;
a2=W(a0[2])*2.55;
return an.hsb2rgb(i,E,a2);
}
a0={r:i,g:E,b:a2};
var e=(~~i)[aA](16),R=(~~E)[aA](16),a1=(~~a2)[aA](16);e=e[aP](aU,"0");
R=R[aP](aU,"0");
a1=a1[aP](aU,"0");
a0.hex="#"+e+R+a1;return a0;
}
return{r:-1,g:-1,b:-1,hex:"none",error:1};},an);
an.getColor=function(e){
var i=this.getColor.start=this.getColor.start||{h:0,s:1,b:e||0.75},d=this.hsb2rgb(i.h,i.s,i.b);i.h+=0.075;if(i.h>1){i.h=0;i.s-=0.2;i.s<=0&&(this.getColor.start={h:0,s:1,b:i.b});
}
return d.hex;
};
an.getColor.reset=function(){
delete this.start;
};
an.parsePathString=aj(function(d){
if(!d){return null;
}
var i={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},
e=[];
if(an.is(d,"array")&&an.is(d[0],"array")){e=av(d);
}
if(!e[m]){(d+at)[aP](/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,
function(R,E,a1){
var a0=[],S=aZ.call(E);
a1[aP](/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,
function(a3,a2){
a2&&a0[f](+a2);
});
while(a0[m]>=i[S]){e[f]([E][aS](a0.splice(0,i[S])));
if(!i[S]){break;
}}});}
e[aA]=an._path2string;
return e;
});
an.findDotsAtSegment=function(e,d,be,bc,a0,R,a2,a1,a8){
var a6=1-a8,a5=aM(a6,3)*e+aM(a6,2)*3*a8*be+a6*3*a8*a8*a0+aM(a8,3)*a2,a3=aM(a6,3)*d+aM(a6,2)*3*a8*bc+a6*3*a8*a8*R+aM(a8,3)*a1,ba=e+2*a8*(be-e)+a8*a8*(a0-2*be+e),a9=d+2*a8*(bc-d)+a8*a8*(R-2*bc+d),bd=be+2*a8*(a0-be)+a8*a8*(a2-2*a0+be),bb=bc+2*a8*(R-bc)+a8*a8*(a1-2*R+bc),a7=(1-a8)*e+a8*be,a4=(1-a8)*d+a8*bc,E=(1-a8)*a0+a8*a2,i=(1-a8)*R+a8*a1,S=(90-ab.atan((ba-bd)/(a9-bb))*180/ab.PI);(ba>bd||a9<bb)&&(S+=180);
return{x:a5,y:a3,m:{x:ba,y:a9},n:{x:bd,y:bb},
start:{x:a7,y:a4},end:{x:E,y:i},alpha:S};
};
var U=aj(function(a5){
if(!a5){
return{x:0,y:0,width:0,height:0};
}
a5=H(a5);
var a2=0,
a1=0,
R=[],
e=[],
E;
for(var S=0,a4=a5[m];S<a4;S++){
E=a5[S];if(E[0]=="M"){a2=E[1];a1=E[2];R[f](a2);e[f](a1);
}
else{
var a0=aC(a2,a1,E[1],E[2],E[3],E[4],E[5],E[6]);R=R[aS](a0.min.x,a0.max.x);e=e[aS](a0.min.y,a0.max.y);a2=E[5];a1=E[6];
}}
var d=aI[aW](0,R),a3=aI[aW](0,e);
return{x:d,y:a3,width:g[aW](0,R)-d,height:g[aW](0,e)-a3};}),
av=function(a0){
var E=[];
if(!an.is(a0,"array")||!an.is(a0&&a0[0],"array")){a0=an.parsePathString(a0);
}
for(var e=0,R=a0[m];e<R;e++){E[e]=[];
for(var d=0,S=a0[e][m];d<S;d++){E[e][d]=a0[e][d];
}}E[aA]=an._path2string;
return E;
},
ad=aj(function(R){
if(!an.is(R,"array")||!an.is(R&&R[0],"array")){R=an.parsePathString(R);
}
var a4=[],
a6=0,
a5=0,
a9=0,
a8=0,
E=0;
if(R[0][0]=="M"){a6=R[0][1];a5=R[0][2];
a9=a6;a8=a5;E++;
a4[f](["M",a6,a5]);
}
for(var a1=E,ba=R[m];a1<ba;a1++){
var d=a4[a1]=[],
a7=R[a1];
if(a7[0]!=aZ.call(a7[0])){d[0]=aZ.call(a7[0]);
switch(d[0]){
case"a":
d[1]=a7[1];
d[2]=a7[2];
d[3]=a7[3];
d[4]=a7[4];
d[5]=a7[5];
d[6]=+(a7[6]-a6).toFixed(3);
d[7]=+(a7[7]-a5).toFixed(3);
break;
case"v":
d[1]=+(a7[1]-a5).toFixed(3);
break;
case"m":
a9=a7[1];
a8=a7[2];
default:for(var a0=1,a2=a7[m];a0<a2;a0++){
d[a0]=+(a7[a0]-((a0%2)?a6:a5)).toFixed(3);
}}}
else{d=a4[a1]=[];
if(a7[0]=="m"){
a9=a7[1]+a6;
a8=a7[2]+a5;
}
for(var S=0,e=a7[m];S<e;S++){
a4[a1][S]=a7[S];
}}
var a3=a4[a1][m];
switch(a4[a1][0]){
case"z":
a6=a9;a5=a8;
break;
case"h":
a6+=+a4[a1][a3-1];
break;
case"v":a5+=+a4[a1][a3-1];
break;
default:a6+=+a4[a1][a3-2];
a5+=+a4[a1][a3-1];
}}
a4[aA]=an._path2string;return a4;},0,av),
r=aj(function(R){
if(!an.is(R,"array")||!an.is(R&&R[0],"array")){R=an.parsePathString(R);
}
var a3=[],
a5=0,
a4=0,
a8=0,
a7=0,
E=0;
if(R[0][0]=="M"){
a5=+R[0][1];
a4=+R[0][2];
a8=a5;
a7=a4;
E++;
a3[0]=["M",a5,a4];
}
for(var a1=E,a9=R[m];a1<a9;a1++){
var d=a3[a1]=[],
a6=R[a1];
if(a6[0]!=aN.call(a6[0])){d[0]=aN.call(a6[0]);

switch(d[0]){
case"A":
d[1]=a6[1];
d[2]=a6[2];
d[3]=a6[3];
d[4]=a6[4];
d[5]=a6[5];
d[6]=+(a6[6]+a5);
d[7]=+(a6[7]+a4);
break;case"V":
d[1]=+a6[1]+a4;
break;
case"H":
d[1]=+a6[1]+a5;
break;
case"M":
a8=+a6[1]+a5;
a7=+a6[2]+a4;
default:
for(var a0=1,a2=a6[m];a0<a2;a0++){
d[a0]=+a6[a0]+((a0%2)?a5:a4);
}}}
else{
for(var S=0,e=a6[m];S<e;S++){
a3[a1][S]=a6[S];
}}

switch(d[0]){
case"Z":
a5=a8;
a4=a7;
break;
case"H":
a5=d[1];
break;
case"V":
a4=d[1];
break;
default:
a5=a3[a1][a3[a1][m]-2];
a4=a3[a1][a3[a1][m]-1];
}}
a3[aA]=an._path2string;
return a3;},null,av),
aX=function(e,E,d,i){
return[e,E,d,i,d,i];
},
aK=function(e,E,a0,R,d,i){var S=1/3,a1=2/3;return[S*e+a1*a0,S*E+a1*R,S*d+a1*a0,S*i+a1*R,d,i];},K=function(a9,bE,bi,bg,ba,a4,S,a8,bD,bb){var R=ab.PI,bf=R*120/180,d=R/180*(+ba||0),bm=[],bj,bA=aj(function(bF,bI,i){var bH=bF*ab.cos(i)-bI*ab.sin(i),bG=bF*ab.sin(i)+bI*ab.cos(i);return{x:bH,y:bG};});if(!bb){bj=bA(a9,bE,-d);a9=bj.x;bE=bj.y;bj=bA(a8,bD,-d);a8=bj.x;bD=bj.y;var e=ab.cos(R/180*ba),a6=ab.sin(R/180*ba),bo=(a9-a8)/2,bn=(bE-bD)/2;bi=g(bi,ab.abs(bo));bg=g(bg,ab.abs(bn));var by=(bo*bo)/(bi*bi)+(bn*bn)/(bg*bg);if(by>1){bi=ab.sqrt(by)*bi;bg=ab.sqrt(by)*bg;}var E=bi*bi,br=bg*bg,bt=(a4==S?-1:1)*ab.sqrt(ab.abs((E*br-E*bn*bn-br*bo*bo)/(E*bn*bn+br*bo*bo))),bd=bt*bi*bn/bg+(a9+a8)/2,bc=bt*-bg*bo/bi+(bE+bD)/2,a3=ab.asin(((bE-bc)/bg).toFixed(7)),a2=ab.asin(((bD-bc)/bg).toFixed(7));a3=a9<bd?R-a3:a3;a2=a8<bd?R-a2:a2;a3<0&&(a3=R*2+a3);a2<0&&(a2=R*2+a2);if(S&&a3>a2){a3=a3-R*2;}if(!S&&a2>a3){a2=a2-R*2;}}else{a3=bb[0];a2=bb[1];bd=bb[2];bc=bb[3];}var a7=a2-a3;if(ab.abs(a7)>bf){var be=a2,bh=a8,a5=bD;a2=a3+bf*(S&&a2>a3?1:-1);a8=bd+bi*ab.cos(a2);bD=bc+bg*ab.sin(a2);bm=K(a8,bD,bi,bg,ba,0,S,bh,a5,[a2,be,bd,bc]);}a7=a2-a3;var a1=ab.cos(a3),bC=ab.sin(a3),a0=ab.cos(a2),bB=ab.sin(a2),bp=ab.tan(a7/4),bs=4/3*bi*bp,bq=4/3*bg*bp,bz=[a9,bE],bx=[a9+bs*bC,bE-bq*a1],bw=[a8+bs*bB,bD-bq*a0],bu=[a8,bD];bx[0]=2*bz[0]-bx[0];bx[1]=2*bz[1]-bx[1];if(bb){return[bx,bw,bu][aS](bm);}else{bm=[bx,bw,bu][aS](bm)[az]()[z](",");var bk=[];for(var bv=0,bl=bm[m];bv<bl;bv++){bk[bv]=bv%2?bA(bm[bv-1],bm[bv],d).y:bA(bm[bv],bm[bv+1],d).x;}return bk;}},M=function(e,d,E,i,a2,a1,a0,S,a3){var R=1-a3;return{x:aM(R,3)*e+aM(R,2)*3*a3*E+R*3*a3*a3*a2+aM(a3,3)*a0,y:aM(R,3)*d+aM(R,2)*3*a3*i+R*3*a3*a3*a1+aM(a3,3)*S};},aC=aj(function(i,d,R,E,a9,a8,a5,a2){var a7=(a9-2*R+i)-(a5-2*a9+R),a4=2*(R-i)-2*(a9-R),a1=i-R,a0=(-a4+ab.sqrt(a4*a4-4*a7*a1))/2/a7,S=(-a4-ab.sqrt(a4*a4-4*a7*a1))/2/a7,a3=[d,a2],a6=[i,a5],e;ab.abs(a0)>1000000000000&&(a0=0.5);ab.abs(S)>1000000000000&&(S=0.5);if(a0>0&&a0<1){e=M(i,d,R,E,a9,a8,a5,a2,a0);a6[f](e.x);a3[f](e.y);}if(S>0&&S<1){e=M(i,d,R,E,a9,a8,a5,a2,S);a6[f](e.x);a3[f](e.y);}a7=(a8-2*E+d)-(a2-2*a8+E);a4=2*(E-d)-2*(a8-E);a1=d-E;a0=(-a4+ab.sqrt(a4*a4-4*a7*a1))/2/a7;S=(-a4-ab.sqrt(a4*a4-4*a7*a1))/2/a7;ab.abs(a0)>1000000000000&&(a0=0.5);ab.abs(S)>1000000000000&&(S=0.5);if(a0>0&&a0<1){e=M(i,d,R,E,a9,a8,a5,a2,a0);a6[f](e.x);a3[f](e.y);}if(S>0&&S<1){e=M(i,d,R,E,a9,a8,a5,a2,S);a6[f](e.x);a3[f](e.y);}return{min:{x:aI[aW](0,a6),y:aI[aW](0,a3)},max:{x:g[aW](0,a6),y:g[aW](0,a3)}};}),H=aj(function(a9,a4){var R=r(a9),a5=a4&&r(a4),a6={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},d={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},a0=function(ba,bb){var i,bc;if(!ba){return["C",bb.x,bb.y,bb.x,bb.y,bb.x,bb.y];}!(ba[0] in {T:1,Q:1})&&(bb.qx=bb.qy=null);switch(ba[0]){case"M":bb.X=ba[1];bb.Y=ba[2];break;case"A":ba=["C"][aS](K[aW](0,[bb.x,bb.y][aS](ba.slice(1))));break;case"S":i=bb.x+(bb.x-(bb.bx||bb.x));bc=bb.y+(bb.y-(bb.by||bb.y));ba=["C",i,bc][aS](ba.slice(1));break;case"T":bb.qx=bb.x+(bb.x-(bb.qx||bb.x));bb.qy=bb.y+(bb.y-(bb.qy||bb.y));ba=["C"][aS](aK(bb.x,bb.y,bb.qx,bb.qy,ba[1],ba[2]));break;case"Q":bb.qx=ba[1];bb.qy=ba[2];ba=["C"][aS](aK(bb.x,bb.y,ba[1],ba[2],ba[3],ba[4]));break;case"L":ba=["C"][aS](aX(bb.x,bb.y,ba[1],ba[2]));break;case"H":ba=["C"][aS](aX(bb.x,bb.y,ba[1],bb.y));break;case"V":ba=["C"][aS](aX(bb.x,bb.y,bb.x,ba[1]));break;case"Z":ba=["C"][aS](aX(bb.x,bb.y,bb.X,bb.Y));break;}return ba;},e=function(ba,bb){if(ba[bb][m]>7){ba[bb].shift();var bc=ba[bb];while(bc[m]){ba.splice(bb++,0,["C"][aS](bc.splice(0,6)));}ba.splice(bb,1);a7=g(R[m],a5&&a5[m]||0);}},E=function(be,bd,bb,ba,bc){if(be&&bd&&be[bc][0]=="M"&&bd[bc][0]!="M"){bd.splice(bc,0,["M",ba.x,ba.y]);bb.bx=0;bb.by=0;bb.x=be[bc][1];bb.y=be[bc][2];a7=g(R[m],a5&&a5[m]||0);}};for(var a2=0,a7=g(R[m],a5&&a5[m]||0);a2<a7;a2++){R[a2]=a0(R[a2],a6);e(R,a2);a5&&(a5[a2]=a0(a5[a2],d));a5&&e(a5,a2);E(R,a5,a6,d,a2);E(a5,R,d,a6,a2);var a1=R[a2],a8=a5&&a5[a2],S=a1[m],a3=a5&&a8[m];a6.x=a1[S-2];a6.y=a1[S-1];a6.bx=W(a1[S-4])||a6.x;a6.by=W(a1[S-3])||a6.y;d.bx=a5&&(W(a8[a3-4])||d.x);d.by=a5&&(W(a8[a3-3])||d.y);d.x=a5&&a8[a3-2];d.y=a5&&a8[a3-1];}return a5?[R,a5]:R;},null,av),p=aj(function(a4){var a3=[];for(var a0=0,a5=a4[m];a0<a5;a0++){var e={},a2=a4[a0].match(/^([^:]*):?([\d\.]*)/);e.color=an.getRGB(a2[1]);if(e.color.error){return null;}e.color=e.color.hex;a2[2]&&(e.offset=a2[2]+"%");a3[f](e);}for(var a0=1,a5=a3[m]-1;a0<a5;a0++){if(!a3[a0].offset){var E=W(a3[a0-1].offset||0),R=0;for(var S=a0+1;S<a5;S++){if(a3[S].offset){R=a3[S].offset;break;}}if(!R){R=100;S=a5;}R=W(R);var a1=(R-E)/(S-a0+1);for(;a0<S;a0++){E+=a1;a3[a0].offset=E+"%";}}}return a3;}),ao=function(){var i,e,R,E,d;if(an.is(arguments[0],"string")||an.is(arguments[0],"object")){if(an.is(arguments[0],"string")){i=L.getElementById(arguments[0]);}else{i=arguments[0];}if(i.tagName){if(arguments[1]==null){return{container:i,width:i.style.pixelWidth||i.offsetWidth,height:i.style.pixelHeight||i.offsetHeight};}else{return{container:i,width:arguments[1],height:arguments[2]};}}}else{if(an.is(arguments[0],al)&&arguments[m]>3){return{container:1,x:arguments[0],y:arguments[1],width:arguments[2],height:arguments[3]};}}},aG=function(d,i){var e=this;for(var E in i){if(i[Q](E)&&!(E in d)){switch(typeof i[E]){case"function":(function(R){d[E]=d===e?R:function(){return R[aW](e,arguments);};})(i[E]);break;case"object":d[E]=d[E]||{};aG.call(this,d[E],i[E]);break;default:d[E]=i[E];break;}}}},ak=function(d,e){d==e.top&&(e.top=d.prev);d==e.bottom&&(e.bottom=d.next);d.next&&(d.next.prev=d.prev);d.prev&&(d.prev.next=d.next);},Y=function(d,e){if(e.top===d){return;}ak(d,e);d.next=null;d.prev=e.top;e.top.next=d;e.top=d;},k=function(d,e){if(e.bottom===d){return;}ak(d,e);d.next=e.bottom;d.prev=null;e.bottom.prev=d;e.bottom=d;},A=function(e,d,i){ak(e,i);d==i.top&&(i.top=e);d.next&&(d.next.prev=e);e.next=d.next;e.prev=d;d.next=e;},aq=function(e,d,i){ak(e,i);d==i.bottom&&(i.bottom=e);d.prev&&(d.prev.next=e);e.prev=d.prev;d.prev=e;e.next=d;},s=function(d){return function(){throw new Error("Rapha\xebl: you are calling to method \u201c"+d+"\u201d of removed object");};},ar=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/;if(an.svg){aT[aY].svgns="http://www.w3.org/2000/svg";aT[aY].xlink="http://www.w3.org/1999/xlink";var O=function(d){return +d+(~~d===d)*0.5;},V=function(S){for(var e=0,E=S[m];e<E;e++){if(aZ.call(S[e][0])!="a"){for(var d=1,R=S[e][m];d<R;d++){S[e][d]=O(S[e][d]);}}else{S[e][6]=O(S[e][6]);S[e][7]=O(S[e][7]);}}return S;},aJ=function(i,d){if(d){for(var e in d){if(d[Q](e)){i[v](e,d[e]);}}}else{return L.createElementNS(aT[aY].svgns,i);}};an[aA]=function(){return"Your browser supports SVG.\nYou are running Rapha\xebl "+this.version;};var q=function(d,E){var e=aJ("path");E.canvas&&E.canvas[aL](e);var i=new ax(e,E);i.type="path";aa(i,{fill:"none",stroke:"#000",path:d});return i;};var b=function(E,a7,d){var a4="linear",a1=0.5,S=0.5,a9=E.style;a7=(a7+at)[aP](ar,function(bb,i,bc){a4="radial";if(i&&bc){a1=W(i);S=W(bc);var ba=((S>0.5)*2-1);aM(a1-0.5,2)+aM(S-0.5,2)>0.25&&(S=ab.sqrt(0.25-aM(a1-0.5,2))*ba+0.5)&&S!=0.5&&(S=S.toFixed(5)-0.00001*ba);}return at;});a7=a7[z](/\s*\-\s*/);if(a4=="linear"){var a0=a7.shift();a0=-W(a0);if(isNaN(a0)){return null;}var R=[0,0,ab.cos(a0*ab.PI/180),ab.sin(a0*ab.PI/180)],a6=1/(g(ab.abs(R[2]),ab.abs(R[3]))||1);R[2]*=a6;R[3]*=a6;if(R[2]<0){R[0]=-R[2];R[2]=0;}if(R[3]<0){R[1]=-R[3];R[3]=0;}}var a3=p(a7);if(!a3){return null;}var e=aJ(a4+"Gradient");e.id="r"+(an._id++)[aA](36);aJ(e,a4=="radial"?{fx:a1,fy:S}:{x1:R[0],y1:R[1],x2:R[2],y2:R[3]});d.defs[aL](e);for(var a2=0,a8=a3[m];a2<a8;a2++){var a5=aJ("stop");aJ(a5,{offset:a3[a2].offset?a3[a2].offset:!a2?"0%":"100%","stop-color":a3[a2].color||"#fff"});e[aL](a5);}aJ(E,{fill:"url(#"+e.id+")",opacity:1,"fill-opacity":1});a9.fill=at;a9.opacity=1;a9.fillOpacity=1;return 1;};var N=function(e){var d=e.getBBox();aJ(e.pattern,{patternTransform:an.format("translate({0},{1})",d.x,d.y)});};var aa=function(a6,bf){var a9={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},bb=a6.node,a7=a6.attrs,a3=a6.rotate(),S=function(bm,bl){bl=a9[aZ.call(bl)];if(bl){var bj=bm.attrs["stroke-width"]||"1",bh={round:bj,square:bj,butt:0}[bm.attrs["stroke-linecap"]||bf["stroke-linecap"]]||0,bk=[];var bi=bl[m];while(bi--){bk[bi]=bl[bi]*bj+((bi%2)?1:-1)*bh;}aJ(bb,{"stroke-dasharray":bk[az](",")});}};bf[Q]("rotation")&&(a3=bf.rotation);var a2=(a3+at)[z](a);if(!(a2.length-1)){a2=null;}else{a2[1]=+a2[1];a2[2]=+a2[2];}W(a3)&&a6.rotate(0,true);for(var ba in bf){if(bf[Q](ba)){if(!j[Q](ba)){continue;}var a8=bf[ba];a7[ba]=a8;switch(ba){case"rotation":a6.rotate(a8,true);break;case"href":case"title":case"target":var bd=bb.parentNode;if(aZ.call(bd.tagName)!="a"){var E=aJ("a");bd.insertBefore(E,bb);E[aL](bb);bd=E;}bd.setAttributeNS(a6.paper.xlink,ba,a8);break;case"cursor":bb.style.cursor=a8;break;case"clip-rect":var e=(a8+at)[z](a);if(e[m]==4){a6.clip&&a6.clip.parentNode.parentNode.removeChild(a6.clip.parentNode);var i=aJ("clipPath"),bc=aJ("rect");i.id="r"+(an._id++)[aA](36);aJ(bc,{x:e[0],y:e[1],width:e[2],height:e[3]});i[aL](bc);a6.paper.defs[aL](i);aJ(bb,{"clip-path":"url(#"+i.id+")"});a6.clip=bc;}if(!a8){var be=L.getElementById(bb.getAttribute("clip-path")[aP](/(^url\(#|\)$)/g,at));be&&be.parentNode.removeChild(be);aJ(bb,{"clip-path":at});delete a6.clip;}break;case"path":if(a8&&a6.type=="path"){a7.path=V(r(a8));aJ(bb,{d:a7.path});}break;case"width":bb[v](ba,a8);if(a7.fx){ba="x";a8=a7.x;}else{break;}case"x":if(a7.fx){a8=-a7.x-(a7.width||0);}case"rx":if(ba=="rx"&&a6.type=="rect"){break;}case"cx":a2&&(ba=="x"||ba=="cx")&&(a2[1]+=a8-a7[ba]);bb[v](ba,O(a8));a6.pattern&&N(a6);break;case"height":bb[v](ba,a8);if(a7.fy){ba="y";a8=a7.y;}else{break;}case"y":if(a7.fy){a8=-a7.y-(a7.height||0);}case"ry":if(ba=="ry"&&a6.type=="rect"){break;}case"cy":a2&&(ba=="y"||ba=="cy")&&(a2[2]+=a8-a7[ba]);bb[v](ba,O(a8));a6.pattern&&N(a6);break;case"r":if(a6.type=="rect"){aJ(bb,{rx:a8,ry:a8});}else{bb[v](ba,a8);}break;case"src":if(a6.type=="image"){bb.setAttributeNS(a6.paper.xlink,"href",a8);}break;case"stroke-width":bb.style.strokeWidth=a8;bb[v](ba,a8);if(a7["stroke-dasharray"]){S(a6,a7["stroke-dasharray"]);}break;case"stroke-dasharray":S(a6,a8);break;case"translation":var a0=(a8+at)[z](a);a0[0]=+a0[0]||0;a0[1]=+a0[1]||0;if(a2){a2[1]+=a0[0];a2[2]+=a0[1];}t.call(a6,a0[0],a0[1]);break;case"scale":var a0=(a8+at)[z](a);a6.scale(+a0[0]||1,+a0[1]||+a0[0]||1,+a0[2]||null,+a0[3]||null);break;case"fill":var R=(a8+at).match(c);if(R){var i=aJ("pattern"),a5=aJ("image");i.id="r"+(an._id++)[aA](36);aJ(i,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});aJ(a5,{x:0,y:0});a5.setAttributeNS(a6.paper.xlink,"href",R[1]);i[aL](a5);var bg=L.createElement("img");bg.style.cssText="position:absolute;left:-9999em;top-9999em";bg.onload=function(){aJ(i,{width:this.offsetWidth,height:this.offsetHeight});aJ(a5,{width:this.offsetWidth,height:this.offsetHeight});L.body.removeChild(this);a6.paper.safari();};L.body[aL](bg);bg.src=R[1];a6.paper.defs[aL](i);bb.style.fill="url(#"+i.id+")";aJ(bb,{fill:"url(#"+i.id+")"});a6.pattern=i;a6.pattern&&N(a6);break;}if(!an.getRGB(a8).error){delete bf.gradient;delete a7.gradient;!an.is(a7.opacity,"undefined")&&an.is(bf.opacity,"undefined")&&aJ(bb,{opacity:a7.opacity});!an.is(a7["fill-opacity"],"undefined")&&an.is(bf["fill-opacity"],"undefined")&&aJ(bb,{"fill-opacity":a7["fill-opacity"]});}else{if((({circle:1,ellipse:1})[Q](a6.type)||(a8+at).charAt()!="r")&&b(bb,a8,a6.paper)){a7.gradient=a8;a7.fill="none";break;}}case"stroke":bb[v](ba,an.getRGB(a8).hex);break;case"gradient":(({circle:1,ellipse:1})[Q](a6.type)||(a8+at).charAt()!="r")&&b(bb,a8,a6.paper);break;case"opacity":case"fill-opacity":if(a7.gradient){var d=L.getElementById(bb.getAttribute("fill")[aP](/^url\(#|\)$/g,at));if(d){var a1=d.getElementsByTagName("stop");a1[a1[m]-1][v]("stop-opacity",a8);}break;}default:ba=="font-size"&&(a8=G(a8,10)+"px");var a4=ba[aP](/(\-.)/g,function(bh){return aN.call(bh.substring(1));});bb.style[a4]=a8;bb[v](ba,a8);break;}}}D(a6,bf);if(a2){a6.rotate(a2.join(am));}else{W(a3)&&a6.rotate(a3,true);}};var h=1.2;var D=function(d,R){if(d.type!="text"||!(R[Q]("text")||R[Q]("font")||R[Q]("font-size")||R[Q]("x")||R[Q]("y"))){return;}var a3=d.attrs,e=d.node,a5=e.firstChild?G(L.defaultView.getComputedStyle(e.firstChild,at).getPropertyValue("font-size"),10):10;if(R[Q]("text")){a3.text=R.text;while(e.firstChild){e.removeChild(e.firstChild);}var E=(R.text+at)[z]("\n");for(var S=0,a4=E[m];S<a4;S++){if(E[S]){var a1=aJ("tspan");S&&aJ(a1,{dy:a5*h,x:a3.x});a1[aL](L.createTextNode(E[S]));e[aL](a1);}}}else{var E=e.getElementsByTagName("tspan");for(var S=0,a4=E[m];S<a4;S++){S&&aJ(E[S],{dy:a5*h,x:a3.x});}}aJ(e,{y:a3.y});var a0=d.getBBox(),a2=a3.y-(a0.y+a0.height/2);a2&&isFinite(a2)&&aJ(e,{y:a3.y+a2});};var ax=function(e,d){var E=0,i=0;this[0]=e;this.id=an._oid++;this.node=e;e.raphael=this;this.paper=d;this.attrs=this.attrs||{};this.transformations=[];this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1};!d.bottom&&(d.bottom=this);this.prev=d.top;d.top&&(d.top.next=this);d.top=this;this.next=null;};ax[aY].rotate=function(e,d,E){if(this.removed){return this;}if(e==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][az](am);}return this._.rt.deg;}var i=this.getBBox();e=(e+at)[z](a);if(e[m]-1){d=W(e[1]);E=W(e[2]);}e=W(e[0]);if(d!=null){this._.rt.deg=e;}else{this._.rt.deg+=e;}(E==null)&&(d=null);this._.rt.cx=d;this._.rt.cy=E;d=d==null?i.x+i.width/2:d;E=E==null?i.y+i.height/2:E;if(this._.rt.deg){this.transformations[0]=an.format("rotate({0} {1} {2})",this._.rt.deg,d,E);this.clip&&aJ(this.clip,{transform:an.format("rotate({0} {1} {2})",-this._.rt.deg,d,E)});}else{this.transformations[0]=at;this.clip&&aJ(this.clip,{transform:at});}aJ(this.node,{transform:this.transformations[az](am)});return this;};ax[aY].hide=function(){!this.removed&&(this.node.style.display="none");return this;};ax[aY].show=function(){!this.removed&&(this.node.style.display="");return this;};ax[aY].remove=function(){if(this.removed){return;}ak(this,this.paper);this.node.parentNode.removeChild(this.node);for(var d in this){delete this[d];}this.removed=true;};ax[aY].getBBox=function(){if(this.removed){return this;}if(this.type=="path"){return U(this.attrs.path);}if(this.node.style.display=="none"){this.show();var E=true;}var a1={};try{a1=this.node.getBBox();}catch(S){}finally{a1=a1||{};}if(this.type=="text"){a1={x:a1.x,y:Infinity,width:0,height:0};for(var d=0,R=this.node.getNumberOfChars();d<R;d++){var a0=this.node.getExtentOfChar(d);(a0.y<a1.y)&&(a1.y=a0.y);(a0.y+a0.height-a1.y>a1.height)&&(a1.height=a0.y+a0.height-a1.y);(a0.x+a0.width-a1.x>a1.width)&&(a1.width=a0.x+a0.width-a1.x);}}E&&this.hide();return a1;};ax[aY].attr=function(){if(this.removed){return this;}if(arguments[m]==0){var R={};for(var E in this.attrs){if(this.attrs[Q](E)){R[E]=this.attrs[E];}}this._.rt.deg&&(R.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(R.scale=this.scale());R.gradient&&R.fill=="none"&&(R.fill=R.gradient)&&delete R.gradient;return R;}if(arguments[m]==1&&an.is(arguments[0],"string")){if(arguments[0]=="translation"){return t.call(this);}if(arguments[0]=="rotation"){return this.rotate();}if(arguments[0]=="scale"){return this.scale();}if(arguments[0]=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient;}return this.attrs[arguments[0]];}if(arguments[m]==1&&an.is(arguments[0],"array")){var d={};for(var e in arguments[0]){if(arguments[0][Q](e)){d[arguments[0][e]]=this.attrs[arguments[0][e]];}}return d;}if(arguments[m]==2){var S={};S[arguments[0]]=arguments[1];aa(this,S);}else{if(arguments[m]==1&&an.is(arguments[0],"object")){aa(this,arguments[0]);}}return this;};ax[aY].toFront=function(){if(this.removed){return this;}this.node.parentNode[aL](this.node);var d=this.paper;d.top!=this&&Y(this,d);return this;};ax[aY].toBack=function(){if(this.removed){return this;}if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);k(this,this.paper);var d=this.paper;}return this;};ax[aY].insertAfter=function(d){if(this.removed){return this;}var e=d.node;if(e.nextSibling){e.parentNode.insertBefore(this.node,e.nextSibling);}else{e.parentNode[aL](this.node);}A(this,d,this.paper);return this;};ax[aY].insertBefore=function(d){if(this.removed){return this;}var e=d.node;e.parentNode.insertBefore(this.node,e);aq(this,d,this.paper);return this;};var P=function(e,d,S,R){d=O(d);S=O(S);var E=aJ("circle");e.canvas&&e.canvas[aL](E);var i=new ax(E,e);i.attrs={cx:d,cy:S,r:R,fill:"none",stroke:"#000"};i.type="circle";aJ(E,i.attrs);return i;};var aF=function(i,d,a1,e,S,a0){d=O(d);a1=O(a1);var R=aJ("rect");i.canvas&&i.canvas[aL](R);var E=new ax(R,i);E.attrs={x:d,y:a1,width:e,height:S,r:a0||0,rx:a0||0,ry:a0||0,fill:"none",stroke:"#000"};E.type="rect";aJ(R,E.attrs);return E;};var ai=function(e,d,a0,S,R){d=O(d);a0=O(a0);var E=aJ("ellipse");e.canvas&&e.canvas[aL](E);var i=new ax(E,e);i.attrs={cx:d,cy:a0,rx:S,ry:R,fill:"none",stroke:"#000"};i.type="ellipse";aJ(E,i.attrs);return i;};var o=function(i,a0,d,a1,e,S){var R=aJ("image");aJ(R,{x:d,y:a1,width:e,height:S,preserveAspectRatio:"none"});R.setAttributeNS(i.xlink,"href",a0);i.canvas&&i.canvas[aL](R);var E=new ax(R,i);E.attrs={x:d,y:a1,width:e,height:S,src:a0};E.type="image";return E;};var X=function(e,d,S,R){var E=aJ("text");aJ(E,{x:d,y:S,"text-anchor":"middle"});e.canvas&&e.canvas[aL](E);var i=new ax(E,e);i.attrs={x:d,y:S,"text-anchor":"middle",text:R,font:j.font,stroke:"none",fill:"#000"};i.type="text";aa(i,i.attrs);return i;};var aV=function(e,d){this.width=e||this.width;this.height=d||this.height;this.canvas[v]("width",this.width);this.canvas[v]("height",this.height);return this;};var w=function(){var E=ao[aW](null,arguments),i=E&&E.container,e=E.x,a0=E.y,R=E.width,d=E.height;if(!i){throw new Error("SVG container not found.");}var S=aJ("svg");R=R||512;d=d||342;aJ(S,{xmlns:"http://www.w3.org/2000/svg",version:1.1,width:R,height:d});if(i==1){S.style.cssText="position:absolute;left:"+e+"px;top:"+a0+"px";L.body[aL](S);}else{if(i.firstChild){i.insertBefore(S,i.firstChild);}else{i[aL](S);}}i=new aT;i.width=R;i.height=d;i.canvas=S;aG.call(i,i,an.fn);i.clear();return i;};aT[aY].clear=function(){var d=this.canvas;while(d.firstChild){d.removeChild(d.firstChild);}this.bottom=this.top=null;(this.desc=aJ("desc"))[aL](L.createTextNode("Created with Rapha\xebl"));d[aL](this.desc);d[aL](this.defs=aJ("defs"));};aT[aY].remove=function(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var d in this){this[d]=s(d);}};}if(an.vml){var aH=function(a8){var a5=/[ahqstv]/ig,a0=r;(a8+at).match(a5)&&(a0=H);a5=/[clmz]/g;if(a0==r&&!(a8+at).match(a5)){var e={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},R=/([clmz]),?([^clmz]*)/gi,S=/-?[^,\s-]+/g;var a4=(a8+at)[aP](R,function(a9,bb,i){var ba=[];i[aP](S,function(bc){ba[f](O(bc));});return e[bb]+ba;});return a4;}var a6=a0(a8),E,a4=[],d;for(var a2=0,a7=a6[m];a2<a7;a2++){E=a6[a2];d=aZ.call(a6[a2][0]);d=="z"&&(d="x");for(var a1=1,a3=E[m];a1<a3;a1++){d+=O(E[a1])+(a1!=a3-1?",":at);}a4[f](d);}return a4[az](am);};an[aA]=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl "+this.version;};var q=function(d,S){var E=ah("group");E.style.cssText="position:absolute;left:0;top:0;width:"+S.width+"px;height:"+S.height+"px";E.coordsize=S.coordsize;E.coordorigin=S.coordorigin;var i=ah("shape"),e=i.style;e.width=S.width+"px";e.height=S.height+"px";i.coordsize=this.coordsize;i.coordorigin=this.coordorigin;E[aL](i);var R=new ax(i,E,S);R.isAbsolute=true;R.type="path";R.path=[];R.Path=at;d&&aa(R,{fill:"none",stroke:"#000",path:d});S.canvas[aL](E);return R;};var aa=function(a3,a8){a3.attrs=a3.attrs||{};var a6=a3.node,a9=a3.attrs,a0=a6.style,E,bd=a3;for(var a1 in a8){if(a8[Q](a1)){a9[a1]=a8[a1];}}a8.href&&(a6.href=a8.href);a8.title&&(a6.title=a8.title);a8.target&&(a6.target=a8.target);a8.cursor&&(a0.cursor=a8.cursor);if(a8.path&&a3.type=="path"){a9.path=a8.path;a6.path=aH(a9.path);}if(a8.rotation!=null){a3.rotate(a8.rotation,true);}if(a8.translation){E=(a8.translation+at)[z](a);t.call(a3,E[0],E[1]);if(a3._.rt.cx!=null){a3._.rt.cx+=+E[0];a3._.rt.cy+=+E[1];a3.setBox(a3.attrs,E[0],E[1]);}}if(a8.scale){E=(a8.scale+at)[z](a);a3.scale(+E[0]||1,+E[1]||+E[0]||1,+E[2]||null,+E[3]||null);}if("clip-rect" in a8){var d=(a8["clip-rect"]+at)[z](a);if(d[m]==4){d[2]=+d[2]+(+d[0]);d[3]=+d[3]+(+d[1]);var a2=a6.clipRect||L.createElement("div"),bc=a2.style,S=a6.parentNode;bc.clip=an.format("rect({1}px {2}px {3}px {0}px)",d);if(!a6.clipRect){bc.position="absolute";bc.top=0;bc.left=0;bc.width=a3.paper.width+"px";bc.height=a3.paper.height+"px";S.parentNode.insertBefore(a2,S);a2[aL](S);a6.clipRect=a2;}}if(!a8["clip-rect"]){a6.clipRect&&(a6.clipRect.style.clip=at);}}if(a3.type=="image"&&a8.src){a6.src=a8.src;}if(a3.type=="image"&&a8.opacity){a6.filterOpacity=" progid:DXImageTransform.Microsoft.Alpha(opacity="+(a8.opacity*100)+")";a0.filter=(a6.filterMatrix||at)+(a6.filterOpacity||at);}a8.font&&(a0.font=a8.font);a8["font-family"]&&(a0.fontFamily='"'+a8["font-family"][z](",")[0][aP](/^['"]+|['"]+$/g,at)+'"');a8["font-size"]&&(a0.fontSize=a8["font-size"]);a8["font-weight"]&&(a0.fontWeight=a8["font-weight"]);a8["font-style"]&&(a0.fontStyle=a8["font-style"]);if(a8.opacity!=null||a8["stroke-width"]!=null||a8.fill!=null||a8.stroke!=null||a8["stroke-width"]!=null||a8["stroke-opacity"]!=null||a8["fill-opacity"]!=null||a8["stroke-dasharray"]!=null||a8["stroke-miterlimit"]!=null||a8["stroke-linejoin"]!=null||a8["stroke-linecap"]!=null){a6=a3.shape||a6;var a7=(a6.getElementsByTagName("fill")&&a6.getElementsByTagName("fill")[0]),ba=false;!a7&&(ba=a7=ah("fill"));if("fill-opacity" in a8||"opacity" in a8){var e=((+a9["fill-opacity"]+1||2)-1)*((+a9.opacity+1||2)-1);e<0&&(e=0);e>1&&(e=1);a7.opacity=e;}a8.fill&&(a7.on=true);if(a7.on==null||a8.fill=="none"){a7.on=false;}if(a7.on&&a8.fill){var i=a8.fill.match(c);if(i){a7.src=i[1];a7.type="tile";}else{a7.color=an.getRGB(a8.fill).hex;a7.src=at;a7.type="solid";if(an.getRGB(a8.fill).error&&(bd.type in {circle:1,ellipse:1}||(a8.fill+at).charAt()!="r")&&b(bd,a8.fill)){a9.fill="none";a9.gradient=a8.fill;}}}ba&&a6[aL](a7);var R=(a6.getElementsByTagName("stroke")&&a6.getElementsByTagName("stroke")[0]),bb=false;!R&&(bb=R=ah("stroke"));if((a8.stroke&&a8.stroke!="none")||a8["stroke-width"]||a8["stroke-opacity"]!=null||a8["stroke-dasharray"]||a8["stroke-miterlimit"]||a8["stroke-linejoin"]||a8["stroke-linecap"]){R.on=true;}(a8.stroke=="none"||R.on==null||a8.stroke==0||a8["stroke-width"]==0)&&(R.on=false);R.on&&a8.stroke&&(R.color=an.getRGB(a8.stroke).hex);var e=((+a9["stroke-opacity"]+1||2)-1)*((+a9.opacity+1||2)-1),a4=(W(a8["stroke-width"])||1)*0.75;e<0&&(e=0);e>1&&(e=1);a8["stroke-width"]==null&&(a4=a9["stroke-width"]);a8["stroke-width"]&&(R.weight=a4);a4&&a4<1&&(e*=a4)&&(R.weight=1);R.opacity=e;a8["stroke-linejoin"]&&(R.joinstyle=a8["stroke-linejoin"]||"miter");R.miterlimit=a8["stroke-miterlimit"]||8;a8["stroke-linecap"]&&(R.endcap=a8["stroke-linecap"]=="butt"?"flat":a8["stroke-linecap"]=="square"?"square":"round");if(a8["stroke-dasharray"]){var a5={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};R.dashstyle=a5[Q](a8["stroke-dasharray"])?a5[a8["stroke-dasharray"]]:at;}bb&&a6[aL](R);}if(bd.type=="text"){var a0=bd.paper.span.style;a9.font&&(a0.font=a9.font);a9["font-family"]&&(a0.fontFamily=a9["font-family"]);a9["font-size"]&&(a0.fontSize=a9["font-size"]);a9["font-weight"]&&(a0.fontWeight=a9["font-weight"]);a9["font-style"]&&(a0.fontStyle=a9["font-style"]);bd.node.string&&(bd.paper.span.innerHTML=(bd.node.string+at)[aP](/</g,"&#60;")[aP](/&/g,"&#38;")[aP](/\n/g,"<br>"));bd.W=a9.w=bd.paper.span.offsetWidth;bd.H=a9.h=bd.paper.span.offsetHeight;bd.X=a9.x;bd.Y=a9.y+O(bd.H/2);switch(a9["text-anchor"]){case"start":bd.node.style["v-text-align"]="left";bd.bbx=O(bd.W/2);break;case"end":bd.node.style["v-text-align"]="right";bd.bbx=-O(bd.W/2);break;default:bd.node.style["v-text-align"]="center";break;}}};var b=function(d,a1){d.attrs=d.attrs||{};var a2=d.attrs,a4=d.node.getElementsByTagName("fill"),S="linear",a0=".5 .5";d.attrs.gradient=a1;a1=(a1+at)[aP](ar,function(a6,a7,i){S="radial";if(a7&&i){a7=W(a7);i=W(i);aM(a7-0.5,2)+aM(i-0.5,2)>0.25&&(i=ab.sqrt(0.25-aM(a7-0.5,2))*((i>0.5)*2-1)+0.5);a0=a7+am+i;}return at;});a1=a1[z](/\s*\-\s*/);if(S=="linear"){var e=a1.shift();e=-W(e);if(isNaN(e)){return null;}}var R=p(a1);if(!R){return null;}d=d.shape||d.node;a4=a4[0]||ah("fill");if(R[m]){a4.on=true;a4.method="none";a4.type=(S=="radial")?"gradientradial":"gradient";a4.color=R[0].color;a4.color2=R[R[m]-1].color;var a5=[];for(var E=0,a3=R[m];E<a3;E++){R[E].offset&&a5[f](R[E].offset+am+R[E].color);}a4.colors&&(a4.colors.value=a5[m]?a5[az](","):"0% "+a4.color);if(S=="radial"){a4.focus="100%";a4.focussize=a0;a4.focusposition=a0;}else{a4.angle=(270-e)%360;}}return 1;};var ax=function(R,a0,d){var S=0,i=0,e=0,E=1;this[0]=R;this.id=an._oid++;this.node=R;R.raphael=this;this.X=0;this.Y=0;this.attrs={};this.Group=a0;this.paper=d;this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1};!d.bottom&&(d.bottom=this);this.prev=d.top;d.top&&(d.top.next=this);d.top=this;this.next=null;};ax[aY].rotate=function(e,d,i){if(this.removed){return this;}if(e==null){if(this._.rt.cx){return[this._.rt.deg,this._.rt.cx,this._.rt.cy][az](am);}return this._.rt.deg;}e=(e+at)[z](a);if(e[m]-1){d=W(e[1]);i=W(e[2]);}e=W(e[0]);if(d!=null){this._.rt.deg=e;}else{this._.rt.deg+=e;}i==null&&(d=null);this._.rt.cx=d;this._.rt.cy=i;this.setBox(this.attrs,d,i);this.Group.style.rotation=this._.rt.deg;return this;};ax[aY].setBox=function(bb,e,d){if(this.removed){return this;}var a5=this.Group.style,R=(this.shape&&this.shape.style)||this.node.style;bb=bb||{};for(var a9 in bb){if(bb[Q](a9)){this.attrs[a9]=bb[a9];}}e=e||this._.rt.cx;d=d||this._.rt.cy;var a7=this.attrs,a1,a0,a2,ba;switch(this.type){case"circle":a1=a7.cx-a7.r;a0=a7.cy-a7.r;a2=ba=a7.r*2;break;case"ellipse":a1=a7.cx-a7.rx;a0=a7.cy-a7.ry;a2=a7.rx*2;ba=a7.ry*2;break;case"rect":case"image":a1=+a7.x;a0=+a7.y;a2=a7.width||0;ba=a7.height||0;break;case"text":this.textpath.v=["m",O(a7.x),", ",O(a7.y-2),"l",O(a7.x)+1,", ",O(a7.y-2)][az](at);a1=a7.x-O(this.W/2);a0=a7.y-this.H/2;a2=this.W;ba=this.H;break;case"path":if(!this.attrs.path){a1=0;a0=0;a2=this.paper.width;ba=this.paper.height;}else{var a8=U(this.attrs.path);a1=a8.x;a0=a8.y;a2=a8.width;ba=a8.height;}break;default:a1=0;a0=0;a2=this.paper.width;ba=this.paper.height;break;}e=(e==null)?a1+a2/2:e;d=(d==null)?a0+ba/2:d;var E=e-this.paper.width/2,a4=d-this.paper.height/2;if(this.type=="path"||this.type=="text"){(a5.left!=E+"px")&&(a5.left=E+"px");(a5.top!=a4+"px")&&(a5.top=a4+"px");this.X=this.type=="text"?a1:-E;this.Y=this.type=="text"?a0:-a4;this.W=a2;this.H=ba;(R.left!=-E+"px")&&(R.left=-E+"px");(R.top!=-a4+"px")&&(R.top=-a4+"px");}else{(a5.left!=E+"px")&&(a5.left=E+"px");(a5.top!=a4+"px")&&(a5.top=a4+"px");this.X=a1;this.Y=a0;this.W=a2;this.H=ba;(a5.width!=this.paper.width+"px")&&(a5.width=this.paper.width+"px");(a5.height!=this.paper.height+"px")&&(a5.height=this.paper.height+"px");(R.left!=a1-E+"px")&&(R.left=a1-E+"px");(R.top!=a0-a4+"px")&&(R.top=a0-a4+"px");(R.width!=a2+"px")&&(R.width=a2+"px");(R.height!=ba+"px")&&(R.height=ba+"px");var S=(+bb.r||0)/aI(a2,ba);if(this.type=="rect"&&this.arcsize.toFixed(4)!=S.toFixed(4)&&(S||this.arcsize)){var a6=ah("roundrect"),bc={},a9=0,a3=this.events&&this.events[m];a6.arcsize=S;a6.raphael=this;this.Group[aL](a6);this.Group.removeChild(this.node);this[0]=this.node=a6;this.arcsize=S;for(var a9 in a7){bc[a9]=a7[a9];}delete bc.scale;this.attr(bc);if(this.events){for(;a9<a3;a9++){this.events[a9].unbind=ae(this.node,this.events[a9].name,this.events[a9].f,this);}}}}};ax[aY].hide=function(){!this.removed&&(this.Group.style.display="none");return this;};ax[aY].show=function(){!this.removed&&(this.Group.style.display="block");return this;};ax[aY].getBBox=function(){if(this.removed){return this;}if(this.type=="path"){return U(this.attrs.path);}return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H};};ax[aY].remove=function(){if(this.removed){return;}ak(this,this.paper);this.node.parentNode.removeChild(this.node);this.Group.parentNode.removeChild(this.Group);this.shape&&this.shape.parentNode.removeChild(this.shape);for(var d in this){delete this[d];}this.removed=true;};ax[aY].attr=function(){if(this.removed){return this;}if(arguments[m]==0){var E={};for(var e in this.attrs){if(this.attrs[Q](e)){E[e]=this.attrs[e];}}this._.rt.deg&&(E.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(E.scale=this.scale());E.gradient&&E.fill=="none"&&(E.fill=E.gradient)&&delete E.gradient;return E;}if(arguments[m]==1&&an.is(arguments[0],"string")){if(arguments[0]=="translation"){return t.call(this);}if(arguments[0]=="rotation"){return this.rotate();}if(arguments[0]=="scale"){return this.scale();}if(arguments[0]=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient;}return this.attrs[arguments[0]];}if(this.attrs&&arguments[m]==1&&an.is(arguments[0],"array")){var d={};for(var e=0,R=arguments[0][m];e<R;e++){d[arguments[0][e]]=this.attrs[arguments[0][e]];}return d;}var S;if(arguments[m]==2){S={};S[arguments[0]]=arguments[1];}arguments[m]==1&&an.is(arguments[0],"object")&&(S=arguments[0]);if(S){if(S.text&&this.type=="text"){this.node.string=S.text;}aa(this,S);if(S.gradient&&(({circle:1,ellipse:1})[Q](this.type)||(S.gradient+at).charAt()!="r")){b(this,S.gradient);}(this.type!="path"||this._.rt.deg)&&this.setBox(this.attrs);}return this;};ax[aY].toFront=function(){!this.removed&&this.Group.parentNode[aL](this.Group);this.paper.top!=this&&Y(this,this.paper);return this;};ax[aY].toBack=function(){if(this.removed){return this;}if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);k(this,this.paper);}return this;};ax[aY].insertAfter=function(d){if(this.removed){return this;}if(d.Group.nextSibling){d.Group.parentNode.insertBefore(this.Group,d.Group.nextSibling);}else{d.Group.parentNode[aL](this.Group);}A(this,d,this.paper);return this;};ax[aY].insertBefore=function(d){if(this.removed){return this;}d.Group.parentNode.insertBefore(this.Group,d.Group);aq(this,d,this.paper);return this;};var P=function(e,d,a1,S){var R=ah("group"),a0=ah("oval"),i=a0.style;R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";R.coordsize=e.coordsize;R.coordorigin=e.coordorigin;R[aL](a0);var E=new ax(a0,R,e);E.type="circle";aa(E,{stroke:"#000",fill:"none"});E.attrs.cx=d;E.attrs.cy=a1;E.attrs.r=S;E.setBox({x:d-S,y:a1-S,width:S*2,height:S*2});e.canvas[aL](R);return E;},aF=function(e,a1,a0,a2,E,d){var R=ah("group"),i=ah("roundrect"),a3=(+d||0)/(aI(a2,E));R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";R.coordsize=e.coordsize;R.coordorigin=e.coordorigin;R[aL](i);i.arcsize=a3;var S=new ax(i,R,e);S.type="rect";aa(S,{stroke:"#000"});S.arcsize=a3;S.setBox({x:a1,y:a0,width:a2,height:E,r:d});e.canvas[aL](R);return S;},ai=function(d,a2,a1,i,e){var R=ah("group"),E=ah("oval"),a0=E.style;R.style.cssText="position:absolute;left:0;top:0;width:"+d.width+"px;height:"+d.height+"px";R.coordsize=d.coordsize;R.coordorigin=d.coordorigin;R[aL](E);var S=new ax(E,R,d);S.type="ellipse";aa(S,{stroke:"#000"});S.attrs.cx=a2;S.attrs.cy=a1;S.attrs.rx=i;S.attrs.ry=e;S.setBox({x:a2-i,y:a1-e,width:i*2,height:e*2});d.canvas[aL](R);return S;},o=function(e,d,a2,a1,a3,E){var R=ah("group"),i=ah("image"),a0=i.style;R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";R.coordsize=e.coordsize;R.coordorigin=e.coordorigin;i.src=d;R[aL](i);var S=new ax(i,R,e);S.type="image";S.attrs.src=d;S.attrs.x=a2;S.attrs.y=a1;S.attrs.w=a3;S.attrs.h=E;S.setBox({x:a2,y:a1,width:a3,height:E});e.canvas[aL](R);return S;},X=function(e,a2,a1,a3){var R=ah("group"),E=ah("shape"),a0=E.style,a4=ah("path"),d=a4.style,i=ah("textpath");R.style.cssText="position:absolute;left:0;top:0;width:"+e.width+"px;height:"+e.height+"px";R.coordsize=e.coordsize;R.coordorigin=e.coordorigin;a4.v=an.format("m{0},{1}l{2},{1}",O(a2),O(a1),O(a2)+1);a4.textpathok=true;a0.width=e.width;a0.height=e.height;i.string=a3+at;i.on=true;E[aL](i);E[aL](a4);R[aL](E);var S=new ax(i,R,e);S.shape=E;S.textpath=a4;S.type="text";S.attrs.text=a3;S.attrs.x=a2;S.attrs.y=a1;S.attrs.w=1;S.attrs.h=1;aa(S,{font:j.font,stroke:"none",fill:"#000"});S.setBox();e.canvas[aL](R);return S;},aV=function(i,d){var e=this.canvas.style;i==+i&&(i+="px");d==+d&&(d+="px");e.width=i;e.height=d;e.clip="rect(0 "+i+" "+d+" 0)";return this;},ah;L.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!L.namespaces.rvml&&L.namespaces.add("rvml","urn:schemas-microsoft-com:vml");ah=function(d){return L.createElement("<rvml:"+d+' class="rvml">');};}catch(af){ah=function(d){return L.createElement("<"+d+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');};}var w=function(){var i=ao[aW](null,arguments),d=i.container,a2=i.height,a3,e=i.width,a1=i.x,a0=i.y;if(!d){throw new Error("VML container not found.");}var R=new aT,S=R.canvas=L.createElement("div"),E=S.style;e=e||512;a2=a2||342;e==+e&&(e+="px");a2==+a2&&(a2+="px");R.width=1000;R.height=1000;R.coordsize="1000 1000";R.coordorigin="0 0";R.span=L.createElement("span");R.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";S[aL](R.span);E.cssText=an.format("width:{0};height:{1};position:absolute;clip:rect(0 {0} {1} 0);overflow:hidden",e,a2);if(d==1){L.body[aL](S);E.left=a1+"px";E.top=a0+"px";}else{d.style.width=e;d.style.height=a2;if(d.firstChild){d.insertBefore(S,d.firstChild);}else{d[aL](S);}}aG.call(R,R,an.fn);return R;};aT[aY].clear=function(){this.canvas.innerHTML=at;this.span=L.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";this.canvas[aL](this.span);this.bottom=this.top=null;};aT[aY].remove=function(){this.canvas.parentNode.removeChild(this.canvas);for(var d in this){this[d]=s(d);}};}if((/^Apple|^Google/).test(navigator.vendor)&&!(navigator.userAgent.indexOf("Version/4.0")+1)){aT[aY].safari=function(){var d=this.rect(-99,-99,this.width+99,this.height+99);setTimeout(function(){d.remove();});};}else{aT[aY].safari=function(){};}var ae=(function(){if(L.addEventListener){return function(R,i,e,d){var E=function(S){return e.call(d,S);};R.addEventListener(i,E,false);return function(){R.removeEventListener(i,E,false);return true;};};}else{if(L.attachEvent){return function(S,E,i,e){var R=function(a0){return i.call(e,a0||au.event);};S.attachEvent("on"+E,R);var d=function(){S.detachEvent("on"+E,R);return true;};return d;};}}})();for(var ac=F[m];ac--;){(function(d){ax[aY][d]=function(e){if(an.is(e,"function")){this.events=this.events||[];this.events.push({name:d,f:e,unbind:ae(this.shape||this.node,d,e,this)});}return this;};ax[aY]["un"+d]=function(E){var i=this.events,e=i[m];while(e--){if(i[e].name==d&&i[e].f==E){i[e].unbind();i.splice(e,1);!i.length&&delete this.events;return this;}}return this;};})(F[ac]);}ax[aY].hover=function(e,d){return this.mouseover(e).mouseout(d);};ax[aY].unhover=function(e,d){return this.unmouseover(e).unmouseout(d);};aT[aY].circle=function(d,i,e){return P(this,d||0,i||0,e||0);};aT[aY].rect=function(d,R,e,i,E){return aF(this,d||0,R||0,e||0,i||0,E||0);};aT[aY].ellipse=function(d,E,i,e){return ai(this,d||0,E||0,i||0,e||0);};aT[aY].path=function(d){d&&!an.is(d,"string")&&!an.is(d[0],"array")&&(d+=at);return q(an.format[aW](an,arguments),this);};aT[aY].image=function(E,d,R,e,i){return o(this,E||"about:blank",d||0,R||0,e||0,i||0);};aT[aY].text=function(d,i,e){return X(this,d||0,i||0,e||at);};aT[aY].set=function(d){arguments[m]>1&&(d=Array[aY].splice.call(arguments,0,arguments[m]));return new T(d);};aT[aY].setSize=aV;aT[aY].top=aT[aY].bottom=null;aT[aY].raphael=an;function u(){return this.x+am+this.y;}ax[aY].scale=function(a6,a5,E,e){if(a6==null&&a5==null){return{x:this._.sx,y:this._.sy,toString:u};}a5=a5||a6;!+a5&&(a5=a6);var ba,a8,a9,a7,bm=this.attrs;if(a6!=0){var a4=this.getBBox(),a1=a4.x+a4.width/2,R=a4.y+a4.height/2,bl=a6/this._.sx,bk=a5/this._.sy;E=(+E||E==0)?E:a1;e=(+e||e==0)?e:R;var a3=~~(a6/ab.abs(a6)),a0=~~(a5/ab.abs(a5)),be=this.node.style,bo=E+(a1-E)*bl,bn=e+(R-e)*bk;switch(this.type){case"rect":case"image":var a2=bm.width*a3*bl,bd=bm.height*a0*bk;this.attr({height:bd,r:bm.r*aI(a3*bl,a0*bk),width:a2,x:bo-a2/2,y:bn-bd/2});break;case"circle":case"ellipse":this.attr({rx:bm.rx*a3*bl,ry:bm.ry*a0*bk,r:bm.r*aI(a3*bl,a0*bk),cx:bo,cy:bn});break;case"path":var bg=ad(bm.path),bh=true;for(var bj=0,bc=bg[m];bj<bc;bj++){var bf=bg[bj],bi,S=aN.call(bf[0]);if(S=="M"&&bh){continue;}else{bh=false;}if(S=="A"){bf[bg[bj][m]-2]*=bl;bf[bg[bj][m]-1]*=bk;bf[1]*=a3*bl;bf[2]*=a0*bk;bf[5]=+(a3+a0?!!+bf[5]:!+bf[5]);}else{if(S=="H"){for(bi=1,jj=bf[m];bi<jj;bi++){bf[bi]*=bl;}}else{if(S=="V"){for(bi=1,jj=bf[m];bi<jj;bi++){bf[bi]*=bk;}}else{for(bi=1,jj=bf[m];bi<jj;bi++){bf[bi]*=(bi%2)?bl:bk;}}}}}var d=U(bg),ba=bo-d.x-d.width/2,a8=bn-d.y-d.height/2;bg[0][1]+=ba;bg[0][2]+=a8;this.attr({path:bg});break;}if(this.type in {text:1,image:1}&&(a3!=1||a0!=1)){if(this.transformations){this.transformations[2]="scale("[aS](a3,",",a0,")");this.node[v]("transform",this.transformations[az](am));ba=(a3==-1)?-bm.x-(a2||0):bm.x;a8=(a0==-1)?-bm.y-(bd||0):bm.y;this.attr({x:ba,y:a8});bm.fx=a3-1;bm.fy=a0-1;}else{this.node.filterMatrix=" progid:DXImageTransform.Microsoft.Matrix(M11="[aS](a3,", M12=0, M21=0, M22=",a0,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");be.filter=(this.node.filterMatrix||at)+(this.node.filterOpacity||at);}}else{if(this.transformations){this.transformations[2]=at;this.node[v]("transform",this.transformations[az](am));bm.fx=0;bm.fy=0;}else{this.node.filterMatrix=at;be.filter=(this.node.filterMatrix||at)+(this.node.filterOpacity||at);}}bm.scale=[a6,a5,E,e][az](am);this._.sx=a6;this._.sy=a5;}return this;};ax[aY].clone=function(){var d=this.attr();delete d.scale;delete d.translation;return this.paper[this.type]().attr(d);};var aB=function(d,e){return function(a9,S,a0){a9=H(a9);var a5,a4,E,a1,R="",a8={},a6,a3=0;for(var a2=0,a7=a9.length;a2<a7;a2++){E=a9[a2];if(E[0]=="M"){a5=+E[1];a4=+E[2];}else{a1=n(a5,a4,E[1],E[2],E[3],E[4],E[5],E[6]);if(a3+a1>S){if(e&&!a8.start){a6=an.findDotsAtSegment(a5,a4,E[1],E[2],E[3],E[4],E[5],E[6],(S-a3)/a1);R+=["C",a6.start.x,a6.start.y,a6.m.x,a6.m.y,a6.x,a6.y];if(a0){return R;}a8.start=R;R=["M",a6.x,a6.y+"C",a6.n.x,a6.n.y,a6.end.x,a6.end.y,E[5],E[6]][az]();a3+=a1;a5=+E[5];a4=+E[6];continue;}if(!d&&!e){a6=an.findDotsAtSegment(a5,a4,E[1],E[2],E[3],E[4],E[5],E[6],(S-a3)/a1);return{x:a6.x,y:a6.y,alpha:a6.alpha};}}a3+=a1;a5=+E[5];a4=+E[6];}R+=E;}a8.end=R;a6=d?a3:e?a8:an.findDotsAtSegment(a5,a4,E[1],E[2],E[3],E[4],E[5],E[6],1);a6.alpha&&(a6={x:a6.x,y:a6.y,alpha:a6.alpha});return a6;};},n=aj(function(E,d,a0,S,a6,a5,a4,a3){var R={x:0,y:0},a2=0;for(var a1=0;a1<1.01;a1+=0.01){var e=M(E,d,a0,S,a6,a5,a4,a3,a1);a1&&(a2+=ab.sqrt(aM(R.x-e.x,2)+aM(R.y-e.y,2)));R=e;}return a2;});var ap=aB(1),C=aB(),J=aB(0,1);ax[aY].getTotalLength=function(){if(this.type!="path"){return;}return ap(this.attrs.path);};ax[aY].getPointAtLength=function(d){if(this.type!="path"){return;}return C(this.attrs.path,d);};ax[aY].getSubpath=function(i,e){if(this.type!="path"){return;}if(ab.abs(this.getTotalLength()-e)<0.000001){return J(this.attrs.path,i).end;}var d=J(this.attrs.path,e,1);return i?J(d,i).end:d;};an.easing_formulas={linear:function(d){return d;},"<":function(d){return aM(d,3);},">":function(d){return aM(d-1,3)+1;},"<>":function(d){d=d*2;if(d<1){return aM(d,3)/2;}d-=2;return(aM(d,3)+2)/2;},backIn:function(e){var d=1.70158;return e*e*((d+1)*e-d);},backOut:function(e){e=e-1;var d=1.70158;return e*e*((d+1)*e+d)+1;},elastic:function(i){if(i==0||i==1){return i;}var e=0.3,d=e/4;return aM(2,-10*i)*ab.sin((i-d)*(2*ab.PI)/e)+1;},bounce:function(E){var e=7.5625,i=2.75,d;if(E<(1/i)){d=e*E*E;}else{if(E<(2/i)){E-=(1.5/i);d=e*E*E+0.75;}else{if(E<(2.5/i)){E-=(2.25/i);d=e*E*E+0.9375;}else{E-=(2.625/i);d=e*E*E+0.984375;}}}return d;}};var I={length:0},aR=function(){var a2=+new Date;for(var be in I){if(be!="length"&&I[Q](be)){var bj=I[be];if(bj.stop){delete I[be];I[m]--;continue;}var a0=a2-bj.start,bb=bj.ms,ba=bj.easing,bf=bj.from,a7=bj.diff,E=bj.to,a6=bj.t,a9=bj.prev||0,a1=bj.el,R=bj.callback,a8={},d;if(a0<bb){var S=an.easing_formulas[ba]?an.easing_formulas[ba](a0/bb):a0/bb;for(var bc in bf){if(bf[Q](bc)){switch(Z[bc]){case"along":d=S*bb*a7[bc];E.back&&(d=E.len-d);var bd=C(E[bc],d);a1.translate(a7.sx-a7.x||0,a7.sy-a7.y||0);a7.x=bd.x;a7.y=bd.y;a1.translate(bd.x-a7.sx,bd.y-a7.sy);E.rot&&a1.rotate(a7.r+bd.alpha,bd.x,bd.y);break;case"number":d=+bf[bc]+S*bb*a7[bc];break;case"colour":d="rgb("+[B(O(bf[bc].r+S*bb*a7[bc].r)),B(O(bf[bc].g+S*bb*a7[bc].g)),B(O(bf[bc].b+S*bb*a7[bc].b))][az](",")+")";break;case"path":d=[];for(var bh=0,a5=bf[bc][m];bh<a5;bh++){d[bh]=[bf[bc][bh][0]];for(var bg=1,bi=bf[bc][bh][m];bg<bi;bg++){d[bh][bg]=+bf[bc][bh][bg]+S*bb*a7[bc][bh][bg];}d[bh]=d[bh][az](am);}d=d[az](am);break;case"csv":switch(bc){case"translation":var a4=a7[bc][0]*(a0-a9),a3=a7[bc][1]*(a0-a9);a6.x+=a4;a6.y+=a3;d=a4+am+a3;break;case"rotation":d=+bf[bc][0]+S*bb*a7[bc][0];bf[bc][1]&&(d+=","+bf[bc][1]+","+bf[bc][2]);break;case"scale":d=[+bf[bc][0]+S*bb*a7[bc][0],+bf[bc][1]+S*bb*a7[bc][1],(2 in E[bc]?E[bc][2]:at),(3 in E[bc]?E[bc][3]:at)][az](am);break;case"clip-rect":d=[];var bh=4;while(bh--){d[bh]=+bf[bc][bh]+S*bb*a7[bc][bh];}break;}break;}a8[bc]=d;}}a1.attr(a8);a1._run&&a1._run.call(a1);}else{if(E.along){var bd=C(E.along,E.len*!E.back);a1.translate(a7.sx-(a7.x||0)+bd.x-a7.sx,a7.sy-(a7.y||0)+bd.y-a7.sy);E.rot&&a1.rotate(a7.r+bd.alpha,bd.x,bd.y);}(a6.x||a6.y)&&a1.translate(-a6.x,-a6.y);E.scale&&(E.scale=E.scale+at);a1.attr(E);delete I[be];I[m]--;a1.in_animation=null;an.is(R,"function")&&R.call(a1);}bj.prev=a0;}}an.svg&&a1&&a1.paper.safari();I[m]&&setTimeout(aR);},B=function(d){return d>255?255:(d<0?0:d);},t=function(d,i){if(d==null){return{x:this._.tx,y:this._.ty,toString:u};}this._.tx+=+d;this._.ty+=+i;switch(this.type){case"circle":case"ellipse":this.attr({cx:+d+this.attrs.cx,cy:+i+this.attrs.cy});break;case"rect":case"image":case"text":this.attr({x:+d+this.attrs.x,y:+i+this.attrs.y});break;case"path":var e=ad(this.attrs.path);e[0][1]+=+d;e[0][2]+=+i;this.attr({path:e});break;}return this;};ax[aY].animateWith=function(e,i,d,R,E){I[e.id]&&(i.start=I[e.id].start);return this.animate(i,d,R,E);};ax[aY].animateAlong=ay();ax[aY].animateAlongBack=ay(1);function ay(d){return function(E,i,e,S){var R={back:d};an.is(e,"function")?(S=e):(R.rot=e);E&&E.constructor==ax&&(E=E.attrs.path);E&&(R.along=E);return this.animate(R,i,S);};}ax[aY].onAnimation=function(d){this._run=d||0;return this;};ax[aY].animate=function(be,a5,a4,E){if(an.is(a4,"function")||!a4){E=a4||null;}var a9={},e={},a2={};for(var a6 in be){if(be[Q](a6)){if(Z[Q](a6)){a9[a6]=this.attr(a6);(a9[a6]==null)&&(a9[a6]=j[a6]);e[a6]=be[a6];switch(Z[a6]){case"along":var bc=ap(be[a6]),a7=C(be[a6],bc*!!be.back),R=this.getBBox();a2[a6]=bc/a5;a2.tx=R.x;a2.ty=R.y;a2.sx=a7.x;a2.sy=a7.y;e.rot=be.rot;e.back=be.back;e.len=bc;be.rot&&(a2.r=W(this.rotate())||0);break;case"number":a2[a6]=(e[a6]-a9[a6])/a5;break;case"colour":a9[a6]=an.getRGB(a9[a6]);var a8=an.getRGB(e[a6]);a2[a6]={r:(a8.r-a9[a6].r)/a5,g:(a8.g-a9[a6].g)/a5,b:(a8.b-a9[a6].b)/a5};break;case"path":var S=H(a9[a6],e[a6]);a9[a6]=S[0];var a3=S[1];a2[a6]=[];for(var bb=0,a1=a9[a6][m];bb<a1;bb++){a2[a6][bb]=[0];for(var ba=1,bd=a9[a6][bb][m];ba<bd;ba++){a2[a6][bb][ba]=(a3[bb][ba]-a9[a6][bb][ba])/a5;}}break;case"csv":var d=(be[a6]+at)[z](a),a0=(a9[a6]+at)[z](a);switch(a6){case"translation":a9[a6]=[0,0];a2[a6]=[d[0]/a5,d[1]/a5];break;case"rotation":a9[a6]=(a0[1]==d[1]&&a0[2]==d[2])?a0:[0,d[1],d[2]];a2[a6]=[(d[0]-a9[a6][0])/a5,0,0];break;case"scale":be[a6]=d;a9[a6]=(a9[a6]+at)[z](a);a2[a6]=[(d[0]-a9[a6][0])/a5,(d[1]-a9[a6][1])/a5,0,0];break;case"clip-rect":a9[a6]=(a9[a6]+at)[z](a);a2[a6]=[];var bb=4;while(bb--){a2[a6][bb]=(d[bb]-a9[a6][bb])/a5;}break;}e[a6]=d;}}}}this.stop();this.in_animation=1;I[this.id]={start:be.start||+new Date,ms:a5,easing:a4,from:a9,diff:a2,to:e,el:this,callback:E,t:{x:0,y:0}};++I[m]==1&&aR();return this;};ax[aY].stop=function(){I[this.id]&&I[m]--;delete I[this.id];return this;};ax[aY].translate=function(d,e){return this.attr({translation:d+" "+e});};ax[aY][aA]=function(){return"Rapha\xebl\u2019s object";};an.ae=I;var T=function(d){this.items=[];this[m]=0;if(d){for(var e=0,E=d[m];e<E;e++){if(d[e]&&(d[e].constructor==ax||d[e].constructor==T)){this[this.items[m]]=this.items[this.items[m]]=d[e];this[m]++;}}}};T[aY][f]=function(){var R,d;for(var e=0,E=arguments[m];e<E;e++){R=arguments[e];if(R&&(R.constructor==ax||R.constructor==T)){d=this.items[m];this[d]=this.items[d]=R;this[m]++;}}return this;};T[aY].pop=function(){delete this[this[m]--];return this.items.pop();};for(var y in ax[aY]){if(ax[aY][Q](y)){T[aY][y]=(function(d){return function(){for(var e=0,E=this.items[m];e<E;e++){this.items[e][d][aW](this.items[e],arguments);}return this;};})(y);}}T[aY].attr=function(e,a0){if(e&&an.is(e,"array")&&an.is(e[0],"object")){for(var d=0,S=e[m];d<S;d++){this.items[d].attr(e[d]);}}else{for(var E=0,R=this.items[m];E<R;E++){this.items[E].attr[aW](this.items[E],arguments);}}return this;};T[aY].animate=function(S,e,a2,a1){(an.is(a2,"function")||!a2)&&(a1=a2||null);var d=this.items[m],E=d,a0=this,R;a1&&(R=function(){!--d&&a1.call(a0);});this.items[--E].animate(S,e,a2||R,R);while(E--){this.items[E].animateWith(this.items[d-1],S,e,a2||R,R);}return this;};T[aY].insertAfter=function(e){var d=this.items[m];while(d--){this.items[d].insertAfter(e);}return this;};T[aY].getBBox=function(){var d=[],a0=[],e=[],R=[];for(var E=this.items[m];E--;){var S=this.items[E].getBBox();d[f](S.x);a0[f](S.y);e[f](S.x+S.width);R[f](S.y+S.height);}d=aI[aW](0,d);a0=aI[aW](0,a0);return{x:d,y:a0,width:g[aW](0,e)-d,height:g[aW](0,R)-a0};};an.registerFont=function(e){if(!e.face){return e;}this.fonts=this.fonts||{};var E={w:e.w,face:{},glyphs:{}},i=e.face["font-family"];for(var a0 in e.face){if(e.face[Q](a0)){E.face[a0]=e.face[a0];}}if(this.fonts[i]){this.fonts[i][f](E);}else{this.fonts[i]=[E];}if(!e.svg){E.face["units-per-em"]=G(e.face["units-per-em"],10);for(var R in e.glyphs){if(e.glyphs[Q](R)){var S=e.glyphs[R];E.glyphs[R]={w:S.w,k:{},d:S.d&&"M"+S.d[aP](/[mlcxtrv]/g,function(a1){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a1]||"M";})+"z"};if(S.k){for(var d in S.k){if(S[Q](d)){E.glyphs[R].k[d]=S.k[d];}}}}}}return e;};aT[aY].getFont=function(a2,a3,e,R){R=R||"normal";e=e||"normal";a3=+a3||{normal:400,bold:700,lighter:300,bolder:800}[a3]||400;var S=an.fonts[a2];if(!S){var E=new RegExp("(^|\\s)"+a2[aP](/[^\w\d\s+!~.:_-]/g,at)+"(\\s|$)","i");for(var d in an.fonts){if(an.fonts[Q](d)){if(E.test(d)){S=an.fonts[d];break;}}}}var a0;if(S){for(var a1=0,a4=S[m];a1<a4;a1++){a0=S[a1];if(a0.face["font-weight"]==a3&&(a0.face["font-style"]==e||!a0.face["font-style"])&&a0.face["font-stretch"]==R){break;}}}return a0;};aT[aY].print=function(R,E,d,a1,a2,bb){bb=bb||"middle";var a7=this.set(),ba=(d+at)[z](at),a8=0,a4=at,bc;an.is(a1,"string")&&(a1=this.getFont(a1));if(a1){bc=(a2||16)/a1.face["units-per-em"];var e=a1.face.bbox.split(a),a0=+e[0],a3=+e[1]+(bb=="baseline"?e[3]-e[1]+(+a1.face.descent):(e[3]-e[1])/2);for(var a6=0,S=ba[m];a6<S;a6++){var a5=a6&&a1.glyphs[ba[a6-1]]||{},a9=a1.glyphs[ba[a6]];a8+=a6?(a5.w||a1.w)+(a5.k&&a5.k[ba[a6]]||0):0;a9&&a9.d&&a7[f](this.path(a9.d).attr({fill:"#000",stroke:"none",translation:[a8,0]}));}a7.scale(bc,bc,a0,a3).translate(R-a0,E-a3);}return a7;};an.format=function(i){var e=an.is(arguments[1],"array")?[0][aS](arguments[1]):arguments,d=/\{(\d+)\}/g;i&&an.is(i,"string")&&e[m]-1&&(i=i[aP](d,function(R,E){return e[++E]==null?at:e[E];}));return i||at;};an.ninja=function(){var d=Raphael;if(l.was){Raphael=l.is;}else{delete Raphael;}return d;};an.el=ax[aY];return an;})();