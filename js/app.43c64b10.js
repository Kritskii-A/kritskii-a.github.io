(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9de38090"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("58ca"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{attrs:{id:"page"}},[n("div",{staticClass:"container"},[n("span",{staticClass:"tags top-tags space"},[t._v("<body>")]),n("router-view"),t._m(0)],1)])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"tags bottom-tags"},[n("span",{staticClass:"space"},[t._v(" </body> ")]),t._v(" </html> ")])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-fixed"},[n("nav",[n("div",{staticClass:"nav-wrapper grey darken-4"},[n("div",{staticClass:"container"},[n("div",{staticClass:"brand-logo"},[n("router-link",{attrs:{to:"/"}},[t._v("KRITSKII-A")])],1),n("div",{staticClass:"burger"},[n("i",{staticClass:"material-icons",on:{click:function(e){return t.openSidenav()}}},[t._v("menu")])]),n("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("li",[n("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),n("li",[n("router-link",{attrs:{to:"/skills"}},[t._v("Skills")])],1),n("li",[n("router-link",{attrs:{to:"/contacts"}},[t._v("Contacts")])],1)])])])]),n("ul",{staticClass:"sidenav",attrs:{id:"slide-out"}},[n("li",[n("i",{staticClass:"material-icons right close-menu",on:{click:function(e){return t.closeSidenav()}}},[t._v("close")])]),n("li",[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("li",[n("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1),n("li",[n("router-link",{attrs:{to:"/skills"}},[t._v("Skills")])],1),n("li",[n("router-link",{attrs:{to:"/contacts"}},[t._v("Contacts")])],1)])])},c=[],l={name:"Navbar",data:function(){return{sidenavInstance:null}},methods:{openSidenav:function(){var t=document.querySelectorAll(".sidenav");console.log(t),this.sidenavInstance=M.Sidenav.init(t,{preventScrolling:!0,draggable:!0}),this.sidenavInstance[0].open()},closeSidenav:function(){this.sidenavInstance[0].close()}}},u=l,d=n("2877"),h=Object(d["a"])(u,s,c,!1,null,null,null),f=h.exports,p={components:{Navbar:f}},v=p,m=(n("5c0b"),Object(d["a"])(v,i,a,!1,null,null,null)),b=m.exports,g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var y=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("Loader"):n("div",{staticClass:"home"},[n("HelloWorld")],1)},C=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("div",{staticClass:"text-zone"},[n("h1",{staticClass:"blast",domProps:{innerHTML:t._s(t.paper)}}),n("router-link",{attrs:{to:"/contacts"}},[n("button",{staticClass:"btn-blue"},[t._v("Contact me!")])])],1),n("CircleFly")],1)},w=[],x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("canvas")])}],E=(n("cb29"),n("4160"),n("159b"),n("d4ec"));function S(){var t,e,n=document.querySelector("canvas"),r=n.getContext("2d");n.height=innerHeight,n.width=innerWidth,addEventListener("resize",(function(){n.height=innerHeight,n.width=innerWidth,s()})),addEventListener("mousemove",(function(n){return t=n.clientX,e=n.clientY,t}));var o=function n(o,i,a,s,c){Object(E["a"])(this,n),this.x=o,this.y=i,this.radius=a,this.color=s,this.velocity={x:(Math.random()-.5)*c,y:(Math.random()-.5)*c};var l=120;this.draw=function(){r.save(),r.beginPath(),r.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),r.fillStyle=this.color,r.shadowColor=this.color,r.shadowBlur=5,r.fill(),r.closePath(),r.restore()},this.update=function(){this.x+=this.velocity.x,this.y+=this.velocity.y;var n=s,r=t-this.x,o=e-this.y;this.x+this.radius>innerWidth||this.x-this.radius<0?this.velocity.x=-this.velocity.x:(this.y+this.radius>innerHeight||this.y-this.radius<0)&&(this.velocity.y=-this.velocity.y),r<l&&r>-l&&o<l&&o>-l?(this.color="#fff",this.x+=4*this.velocity.x,this.y+=4*this.velocity.y):this.color=n,this.draw()}},i=[],a=["#25B9A9","#3667C1","#45DF2D","#7BDCD2"];function s(){i=[];for(var t=0;t<50;t++){var e=8*Math.random(),n=Math.random()*innerWidth-2*e+e,r=Math.random()*innerHeight-2*e+e,s=6*Math.random(),c=Math.floor(Math.random()*a.length);i.push(new o(n,r,e,a[c],s))}}function c(){r.clearRect(0,0,innerWidth,innerHeight),i.forEach((function(t){t.update()})),requestAnimationFrame(c)}addEventListener("click",(function(t){for(var e=0;e<10;e++){var n=15*Math.random(),r=10*Math.random(),s=Math.floor(Math.random()*a.length);i.push(new o(t.x,t.y,n,a[s],r))}})),c(),s()}var O={name:"CircleFly",mounted:function(){S()}},P=O,H=(n("f451"),Object(d["a"])(P,x,j,!1,null,"42ef3696",null)),I=H.exports,T={name:"HelloWorld",data:function(){return{titleText:"Hi,*I'm Aleksandr,*Front End developer.",paper:"",count:-1,timer:null,show:!1}},components:{CircleFly:I},mounted:function(){this.printer()},methods:{printer:function(){var t=this;this.stoper(),this.timer=setInterval((function(){t.count++,"*"===t.titleText[t.count]?t.paper+="<br/>":" "===t.titleText[t.count]?t.paper+='<span class="space"></span><span>'.concat(t.titleText[t.count],"</span>"):t.paper+="<span>".concat(t.titleText[t.count],"</span>"),t.count===t.titleText.length-1&&clearInterval(t.timer)}),100)},stoper:function(){clearInterval(this.timer),this.paper=""}}},A=T,$=Object(d["a"])(A,k,w,!1,null,null,null),F=$.exports,L={metaInfo:{title:"Kritskii Aleksandr | Front End Developer",meta:[{name:"description",content:"I want to make things that make a difference."}]},name:"Home",components:{HelloWorld:F},data:function(){return{loading:!0}},mounted:function(){var t=this;setTimeout((function(){t.loading=!1}),500)}},W=L,N=Object(d["a"])(W,_,C,!1,null,null,null),q=N.exports;r["a"].use(y["a"]);var D=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contacts",name:"Contacts",component:function(){return n.e("about").then(n.bind(null,"c93c"))}},{path:"/projects",name:"Projects",component:function(){return n.e("about").then(n.bind(null,"acca"))}},,{path:"/skills",name:"Skills",component:function(){return n.e("about").then(n.bind(null,"ad83"))}}],B=new y["a"]({mode:"history",base:"/",routes:D}),K=B,z=n("2f62");r["a"].use(z["a"]);var J=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-loader"},[n("div",{staticClass:"preloader-wrapper active"},[n("div",{staticClass:"spinner-layer",class:t.color},[t._m(0),t._m(1),t._m(2)])])])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle-clipper left"},[n("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gap-patch"},[n("div",{staticClass:"circle"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle-clipper right"},[n("div",{staticClass:"circle"})])}],Y={computed:{color:function(){var t=["spinner-blue-only","spinner-red-only","spinner-green-only"];return t[Math.floor(3*Math.random())]}}},G=Y,Q=Object(d["a"])(G,R,X,!1,null,null,null),U=Q.exports;n("6885");r["a"].config.productionTip=!1,r["a"].component("Loader",U),r["a"].use(o["a"]),new r["a"]({router:K,store:J,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"77ef":function(t,e,n){},"9c0c":function(t,e,n){},f451:function(t,e,n){"use strict";n("77ef")}});
//# sourceMappingURL=app.43c64b10.js.map