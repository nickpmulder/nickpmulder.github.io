var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function p(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t){return""===t?void 0:+t}function h(t,n){n=""+n,t.data!==n&&(t.data=n)}function g(t,n){t.value=null==n?"":n}function $(t,n,e,r){t.style.setProperty(n,e,r?"important":"")}function v(t,n){for(let e=0;e<t.options.length;e+=1){const r=t.options[e];if(r.__value===n)return void(r.selected=!0)}}let x;function b(t){x=t}const y=[],w=[],C=[],_=[],F=Promise.resolve();let k=!1;function E(t){C.push(t)}function B(t){_.push(t)}let M=!1;const T=new Set;function L(){if(!M){M=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];b(n),A(n.$$)}for(y.length=0;w.length;)w.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];T.has(n)||(T.add(n),n())}C.length=0}while(y.length);for(;_.length;)_.pop()();k=!1,M=!1,T.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const P=new Set;let q;function S(){q={r:0,c:[],p:q}}function G(){q.r||r(q.c),q=q.p}function D(t,n){t&&t.i&&(P.delete(t),t.i(n))}function H(t,n,e,r){if(t&&t.o){if(P.has(t))return;P.add(t),q.c.push(()=>{P.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function N(t,n,e){const r=t.$$.props[n];void 0!==r&&(t.$$.bound[r]=e,e(t.$$.ctx[r]))}function I(t){t&&t.c()}function R(t,e,o){const{fragment:l,on_mount:s,on_destroy:i,after_update:c}=t.$$;l&&l.m(e,o),E(()=>{const e=s.map(n).filter(a);i?i.push(...e):r(e),t.$$.on_mount=[]}),c.forEach(E)}function V(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function O(t,n){-1===t.$$.dirty[0]&&(y.push(t),k||(k=!0,F.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function U(n,a,o,l,s,c,u=[-1]){const f=x;b(n);const p=a.props||{},d=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:u};let m=!1;if(d.ctx=o?o(n,p,(t,e,...r)=>{const a=r.length?r[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=a)&&(d.bound[t]&&d.bound[t](a),m&&O(n,t)),e}):[],d.update(),m=!0,r(d.before_update),d.fragment=!!l&&l(d.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);d.fragment&&d.fragment.l(t),t.forEach(i)}else d.fragment&&d.fragment.c();a.intro&&D(n.$$.fragment),R(n,a.target,a.anchor),L()}b(f)}class j{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function Q(n){let e,a,o,u,h,$,v,x,b,y,w,C,_,F,k;return{c(){e=c("br"),a=c("div"),o=c("input"),u=f(),h=c("p"),h.textContent="Specific Gravity",$=f(),v=c("br"),x=f(),b=c("div"),y=c("input"),w=f(),C=c("p"),C.textContent="°P",_=c("br"),d(o,"type","number"),d(o,"class","input1"),d(o,"name","input"),d(o,"max","1.629"),d(h,"class","smallBlack"),d(a,"class","unit1"),d(y,"type","number"),d(y,"class","input2"),d(y,"name","input"),d(y,"max","100"),d(C,"class","smallBlack"),d(b,"class","unit2")},m(t,r){s(t,e,r),s(t,a,r),l(a,o),g(o,n[0]),l(a,u),l(a,h),l(a,$),s(t,v,r),s(t,x,r),s(t,b,r),l(b,y),g(y,n[1]),l(b,w),l(b,C),s(t,_,r),F||(k=[p(o,"input",n[4]),p(o,"input",n[2]),p(y,"input",n[5]),p(y,"input",n[3])],F=!0)},p(t,[n]){1&n&&m(o.value)!==t[0]&&g(o,t[0]),2&n&&m(y.value)!==t[1]&&g(y,t[1])},i:t,o:t,d(t){t&&i(e),t&&i(a),t&&i(v),t&&i(x),t&&i(b),t&&i(_),F=!1,r(k)}}}function Y(t,n,e){let{standard:r=1.059}=n,a=(259-259/r).toFixed(2);return t.$set=t=>{"standard"in t&&e(0,r=t.standard)},[r,a,function(){e(1,a=(259-259/r).toFixed(2)),e(1,a)},function(){e(0,r=(259/(259-a)).toFixed(3)),e(0,r)},function(){r=m(this.value),e(0,r)},function(){a=m(this.value),e(1,a)}]}class z extends j{constructor(t){super(),U(this,t,Y,Q,o,{standard:0})}}function J(t){let n,e,r,a,o,p,m,g,$,v,x,b,y,C,_,F,k,E,M,T,L,A,P,q,S,G,O=(131.25*(t[0]-t[1])).toFixed(3)+"";function U(n){t[2].call(null,n)}let j={};function Q(n){t[3].call(null,n)}void 0!==t[0]&&(j.standard=t[0]),p=new z({props:j}),w.push(()=>N(p,"standard",U));let Y={};return void 0!==t[1]&&(Y.standard=t[1]),y=new z({props:Y}),w.push(()=>N(y,"standard",Q)),{c(){n=c("h4"),n.textContent="ABV calculator",e=f(),r=c("label"),r.textContent="Original Gravity:",a=c("br"),o=f(),I(p.$$.fragment),g=c("br"),$=f(),v=c("label"),v.textContent="Final Gravity: ",x=c("br"),b=f(),I(y.$$.fragment),_=f(),F=c("label"),F.textContent="Result: ",k=c("br"),E=f(),M=c("div"),T=c("span"),L=u(O),A=c("span"),A.textContent="% ABV",P=c("br"),q=f(),S=c("p"),S.innerHTML='<span class="medium green">Note:</span> Plato, brix, and balling are all very close to the same thing. They&#39;re all essentially the strenth of a solution as a percentage by mass. Plato corrects some minor errors in the brix scale, starting in the fifth decimal place, where brix was originally invented to correct similar errors in the balling scale, which is the oldest.',d(n,"class","mono gray"),d(A,"class","smallBlack"),d(T,"class","answerText"),d(M,"class","answers")},m(t,i){s(t,n,i),s(t,e,i),s(t,r,i),s(t,a,i),s(t,o,i),R(p,t,i),s(t,g,i),s(t,$,i),s(t,v,i),s(t,x,i),s(t,b,i),R(y,t,i),s(t,_,i),s(t,F,i),s(t,k,i),s(t,E,i),s(t,M,i),l(M,T),l(T,L),l(T,A),l(M,P),s(t,q,i),s(t,S,i),G=!0},p(t,[n]){const e={};!m&&1&n&&(m=!0,e.standard=t[0],B(()=>m=!1)),p.$set(e);const r={};!C&&2&n&&(C=!0,r.standard=t[1],B(()=>C=!1)),y.$set(r),(!G||3&n)&&O!==(O=(131.25*(t[0]-t[1])).toFixed(3)+"")&&h(L,O)},i(t){G||(D(p.$$.fragment,t),D(y.$$.fragment,t),G=!0)},o(t){H(p.$$.fragment,t),H(y.$$.fragment,t),G=!1},d(t){t&&i(n),t&&i(e),t&&i(r),t&&i(a),t&&i(o),V(p,t),t&&i(g),t&&i($),t&&i(v),t&&i(x),t&&i(b),V(y,t),t&&i(_),t&&i(F),t&&i(k),t&&i(E),t&&i(M),t&&i(q),t&&i(S)}}}function K(t,n,e){let r=1.059,a=1.008;return[r,a,function(t){r=t,e(0,r)},function(t){a=t,e(1,a)}]}class W extends j{constructor(t){super(),U(this,t,K,J,o,{})}}function X(n){let e,r,a,o,l,u;return a=new z({}),{c(){e=c("h4"),e.textContent="gravity unit converter",r=f(),I(a.$$.fragment),o=f(),l=c("p"),l.innerHTML='<span class="medium green">Note:</span> Plato, brix, and balling are all very close to the same thing. They&#39;re all essentially the strenth of a solution as a percentage by mass. Plato corrects some minor errors in the brix scale, starting in the fifth decimal place, where brix was originally invented to correct similar errors in the balling scale, which is the oldest.',d(e,"class","mono gray")},m(t,n){s(t,e,n),s(t,r,n),R(a,t,n),s(t,o,n),s(t,l,n),u=!0},p:t,i(t){u||(D(a.$$.fragment,t),u=!0)},o(t){H(a.$$.fragment,t),u=!1},d(t){t&&i(e),t&&i(r),V(a,t),t&&i(o),t&&i(l)}}}class Z extends j{constructor(t){super(),U(this,t,null,X,o,{})}}function tt(n){let e,a,o,u,h,$,v,x,b,y,w,C,_,F,k,E,B,M,T;return{c(){e=c("h4"),e.textContent="Swap Liquid Malt Extract (LME) and Dry Malt Extract (DME)",a=f(),o=c("div"),u=c("input"),h=f(),$=c("p"),$.textContent="lbs LME",v=c("br"),x=f(),b=c("div"),y=c("input"),w=f(),C=c("p"),C.textContent="lbs DME",_=c("br"),F=f(),k=c("br"),E=f(),B=c("p"),B.innerHTML='<span class="medium green">Note:</span> Because liquid malt extract contains more water than dry malt extract, when you switch out the two in a recipe, you need to use more LME than you would DME to make up for that water weight. ',d(e,"class","mono gray"),d(u,"type","number"),d(u,"class","input1"),d(u,"name","input"),d(u,"max","1.629"),d($,"class","smallBlack"),d(o,"class","unit1"),d(y,"type","number"),d(y,"class","input2"),d(y,"name","input"),d(y,"max","100"),d(C,"class","smallBlack"),d(b,"class","unit2")},m(t,r){s(t,e,r),s(t,a,r),s(t,o,r),l(o,u),g(u,n[0]),l(o,h),l(o,$),s(t,v,r),s(t,x,r),s(t,b,r),l(b,y),g(y,n[1]),l(b,w),l(b,C),s(t,_,r),s(t,F,r),s(t,k,r),s(t,E,r),s(t,B,r),M||(T=[p(u,"input",n[4]),p(u,"input",n[2]),p(y,"input",n[5]),p(y,"input",n[3])],M=!0)},p(t,[n]){1&n&&m(u.value)!==t[0]&&g(u,t[0]),2&n&&m(y.value)!==t[1]&&g(y,t[1])},i:t,o:t,d(t){t&&i(e),t&&i(a),t&&i(o),t&&i(v),t&&i(x),t&&i(b),t&&i(_),t&&i(F),t&&i(k),t&&i(E),t&&i(B),M=!1,r(T)}}}function nt(t,n,e){let r=5,a=(r*(36/43)).toFixed(3);return[r,a,function(){e(1,a=(r*(36/43)).toFixed(3)),e(1,a)},function(){e(0,r=(a*(43/36)).toFixed(3)),e(0,r)},function(){r=m(this.value),e(0,r)},function(){a=m(this.value),e(1,a)}]}class et extends j{constructor(t){super(),U(this,t,nt,tt,o,{})}}function rt(n){let e,a,o,u,h,$,v,x,b,y,w,C,_;return{c(){e=c("div"),a=c("input"),o=f(),u=c("p"),u.textContent="°F",h=c("br"),$=f(),v=c("div"),x=c("input"),b=f(),y=c("p"),y.textContent="°C",w=c("br"),d(a,"type","number"),d(a,"class","input1"),d(a,"name","input"),d(u,"class","smallBlack"),d(e,"class","unit1"),d(x,"type","number"),d(x,"class","input2"),d(x,"name","input"),d(y,"class","smallBlack"),d(v,"class","unit2")},m(t,r){s(t,e,r),l(e,a),g(a,n[0]),l(e,o),l(e,u),s(t,h,r),s(t,$,r),s(t,v,r),l(v,x),g(x,n[1]),l(v,b),l(v,y),s(t,w,r),C||(_=[p(a,"input",n[4]),p(a,"input",n[2]),p(x,"input",n[5]),p(x,"input",n[3])],C=!0)},p(t,[n]){1&n&&m(a.value)!==t[0]&&g(a,t[0]),2&n&&m(x.value)!==t[1]&&g(x,t[1])},i:t,o:t,d(t){t&&i(e),t&&i(h),t&&i($),t&&i(v),t&&i(w),C=!1,r(_)}}}function at(t,n,e){let{F:r=60}=n,a=(5*(r-32)/9).toFixed(3);return t.$set=t=>{"F"in t&&e(0,r=t.F)},[r,a,function(){e(1,a=(5*(r-32)/9).toFixed(3)),e(1,a)},function(){e(0,r=(9*a/5+32).toFixed(3)),e(0,r)},function(){r=m(this.value),e(0,r)},function(){a=m(this.value),e(1,a)}]}class ot extends j{constructor(t){super(),U(this,t,at,rt,o,{F:0})}}function lt(t){let n,e,r,a,o,p,m,g,$,v,x,b,y,C,_,F,k,E,M,T,L,A,P,q,S,G,O,U,j,Q,Y,J,K,W,X,Z,tt,nt,et,rt,at,lt;function st(n){t[5].call(null,n)}let it={};function ct(n){t[6].call(null,n)}void 0!==t[2]&&(it.standard=t[2]),m=new z({props:it}),w.push(()=>N(m,"standard",st));let ut={};function ft(n){t[7].call(null,n)}void 0!==t[0]&&(ut.F=t[0]),_=new ot({props:ut}),w.push(()=>N(_,"F",ct));let pt={};return void 0!==t[1]&&(pt.F=t[1]),P=new ot({props:pt}),w.push(()=>N(P,"F",ft)),{c(){n=c("h4"),n.textContent="Correct Gravity for Temperature",e=f(),r=c("label"),r.textContent="Gravity:",a=c("br"),o=c("br"),p=f(),I(m.$$.fragment),$=c("br"),v=f(),x=c("label"),x.textContent="Temperature of Liquid:",b=c("br"),y=c("br"),C=f(),I(_.$$.fragment),k=c("br"),E=f(),M=c("label"),M.textContent="Calibration Temp of Hydrometer:",T=c("br"),L=c("br"),A=f(),I(P.$$.fragment),S=c("br"),G=f(),O=c("label"),O.textContent="Corrected gravity:",U=c("br"),j=c("br"),Q=f(),Y=c("div"),J=c("span"),K=u(t[3]),W=f(),X=c("span"),X.textContent="SPECIFIC GRAVITY",Z=f(),tt=c("div"),nt=c("span"),et=u(t[4]),rt=f(),at=c("span"),at.textContent="°P",d(n,"class","mono gray"),d(J,"class","answerText"),d(X,"class","smallBlack"),d(Y,"class","answers"),d(nt,"class","answerText"),d(at,"class","smallBlack"),d(tt,"class","answers2")},m(t,i){s(t,n,i),s(t,e,i),s(t,r,i),s(t,a,i),s(t,o,i),s(t,p,i),R(m,t,i),s(t,$,i),s(t,v,i),s(t,x,i),s(t,b,i),s(t,y,i),s(t,C,i),R(_,t,i),s(t,k,i),s(t,E,i),s(t,M,i),s(t,T,i),s(t,L,i),s(t,A,i),R(P,t,i),s(t,S,i),s(t,G,i),s(t,O,i),s(t,U,i),s(t,j,i),s(t,Q,i),s(t,Y,i),l(Y,J),l(J,K),l(Y,W),l(Y,X),s(t,Z,i),s(t,tt,i),l(tt,nt),l(nt,et),l(tt,rt),l(tt,at),lt=!0},p(t,[n]){const e={};!g&&4&n&&(g=!0,e.standard=t[2],B(()=>g=!1)),m.$set(e);const r={};!F&&1&n&&(F=!0,r.F=t[0],B(()=>F=!1)),_.$set(r);const a={};!q&&2&n&&(q=!0,a.F=t[1],B(()=>q=!1)),P.$set(a),(!lt||8&n)&&h(K,t[3]),(!lt||16&n)&&h(et,t[4])},i(t){lt||(D(m.$$.fragment,t),D(_.$$.fragment,t),D(P.$$.fragment,t),lt=!0)},o(t){H(m.$$.fragment,t),H(_.$$.fragment,t),H(P.$$.fragment,t),lt=!1},d(t){t&&i(n),t&&i(e),t&&i(r),t&&i(a),t&&i(o),t&&i(p),V(m,t),t&&i($),t&&i(v),t&&i(x),t&&i(b),t&&i(y),t&&i(C),V(_,t),t&&i(k),t&&i(E),t&&i(M),t&&i(T),t&&i(L),t&&i(A),V(P,t),t&&i(S),t&&i(G),t&&i(O),t&&i(U),t&&i(j),t&&i(Q),t&&i(Y),t&&i(Z),t&&i(tt)}}}function st(t,n,e){let r,a,o=80,l=60,s=1.059;return t.$$.update=()=>{7&t.$$.dirty&&e(3,r=(s*((1.00130346-.000134722124*o+204052596e-14*o-2.32820948e-9*o)/(1.00130346-.000134722124*l+204052596e-14*l-2.32820948e-9*l))).toFixed(3)),8&t.$$.dirty&&e(4,a=(259-259/r).toFixed(2))},[o,l,s,r,a,function(t){s=t,e(2,s)},function(t){o=t,e(0,o)},function(t){l=t,e(1,l)}]}class it extends j{constructor(t){super(),U(this,t,st,lt,o,{})}}function ct(n){let e,r,a,o;return a=new ot({}),{c(){e=c("h4"),e.textContent="Temperature Unit Converter",r=f(),I(a.$$.fragment),d(e,"class","mono gray")},m(t,n){s(t,e,n),s(t,r,n),R(a,t,n),o=!0},p:t,i(t){o||(D(a.$$.fragment,t),o=!0)},o(t){H(a.$$.fragment,t),o=!1},d(t){t&&i(e),t&&i(r),V(a,t)}}}class ut extends j{constructor(t){super(),U(this,t,null,ct,o,{})}}function ft(t,n,e){const r=t.slice();return r[6]=n[e],r[8]=e,r}function pt(t){let n,e,r,a,o,u,m;function h(...n){return t[4](t[8],...n)}var g=t[6];return g&&(a=new g({})),{c(){n=c("div"),e=c("button"),e.textContent="✖️",r=f(),a&&I(a.$$.fragment),d(e,"class","exit"),d(n,"class","calculator")},m(t,i){s(t,n,i),l(n,e),l(n,r),a&&R(a,n,null),o=!0,u||(m=p(e,"click",h),u=!0)},p(e,r){if(g!==(g=(t=e)[6])){if(a){S();const t=a;H(t.$$.fragment,1,0,()=>{V(t,1)}),G()}g?(a=new g({}),I(a.$$.fragment),D(a.$$.fragment,1),R(a,n,null)):a=null}},i(t){o||(a&&D(a.$$.fragment,t),o=!0)},o(t){a&&H(a.$$.fragment,t),o=!1},d(t){t&&i(n),a&&V(a),u=!1,m()}}}function dt(t){let n,e,a,o,m,h,g,x,b,y,w,C,_,F,k,B,M,T,L,A,P,q,N,I,R,V,O=t[0],U=[];for(let n=0;n<O.length;n+=1)U[n]=pt(ft(t,O,n));const j=t=>H(U[t],1,1,()=>{U[t]=null});return{c(){n=c("link"),e=f(),a=c("main"),o=c("h1"),o.innerHTML='<a><span class="green svelte-1t0ec1l">drink</span><span class="black orange svelte-1t0ec1l">SQUIRREL</span></a>',m=f(),h=c("img"),x=f(),b=c("h3"),b.textContent="calculator apps",y=f(),w=c("div");for(let t=0;t<U.length;t+=1)U[t].c();C=f(),_=c("select"),F=c("option"),k=u("Add an App"),B=c("option"),M=u("ABV Calculator"),T=c("option"),L=u("Convert Gravity Units"),A=c("option"),P=u("Convert Between LME and DME"),q=c("option"),N=u("Correct Hydrometer for Temperature"),document.title="drinkSquirrel",d(n,"href","https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;600;900&family=DM+Mono:ital,wght@1,300&display=swap"),d(n,"rel","stylesheet"),d(o,"class","light svelte-1t0ec1l"),$(o,"display","inline-block"),h.src!==(g="squirrel2.svg")&&d(h,"src","squirrel2.svg"),d(h,"alt",""),$(h,"width","60px"),$(h,"display","inline-block"),$(h,"position","relative"),$(h,"top","10px"),$(h,"right","10px"),d(b,"class","mono center svelte-1t0ec1l"),F.__value=W,F.value=F.__value,B.__value=W,B.value=B.__value,T.__value=Z,T.value=T.__value,A.__value=et,A.value=A.__value,q.__value=it,q.value=q.__value,d(_,"name","whichApp"),d(_,"id","whichApp"),void 0===t[1]&&E(()=>t[5].call(_)),d(w,"class","grid-container"),d(w,"id","gridContainer")},m(r,i){l(document.head,n),s(r,e,i),s(r,a,i),l(a,o),l(a,m),l(a,h),l(a,x),l(a,b),l(a,y),l(a,w);for(let t=0;t<U.length;t+=1)U[t].m(w,null);l(w,C),l(w,_),l(_,F),l(F,k),l(_,B),l(B,M),l(_,T),l(T,L),l(_,A),l(A,P),l(_,q),l(q,N),v(_,t[1]),I=!0,R||(V=[p(_,"change",t[5]),p(_,"change",t[2])],R=!0)},p(t,[n]){if(9&n){let e;for(O=t[0],e=0;e<O.length;e+=1){const r=ft(t,O,e);U[e]?(U[e].p(r,n),D(U[e],1)):(U[e]=pt(r),U[e].c(),D(U[e],1),U[e].m(w,C))}for(S(),e=O.length;e<U.length;e+=1)j(e);G()}2&n&&v(_,t[1])},i(t){if(!I){for(let t=0;t<O.length;t+=1)D(U[t]);I=!0}},o(t){U=U.filter(Boolean);for(let t=0;t<U.length;t+=1)H(U[t]);I=!1},d(t){i(n),t&&i(e),t&&i(a),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(U,t),R=!1,r(V)}}}function mt(t,n,e){let r=[W,Z,et,it,ut],a=W;function o(t){r.splice(t,1),console.log(r.length),e(0,r)}return[r,a,function(){r.push(a),e(0,r),console.log(r.length)},o,t=>o(t),function(){a=function(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}(this),e(1,a)}]}return new class extends j{constructor(t){super(),U(this,t,mt,dt,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
