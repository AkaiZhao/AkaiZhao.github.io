(function(t){function e(e){for(var s,n,c=e[0],i=e[1],l=e[2],u=0,p=[];u<c.length;u++)n=c[u],r[n]&&p.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r={app:0},o=[];function c(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-d343ffb2":"8439058d"}[t]+".js"}function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a={"chunk-d343ffb2":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-d343ffb2":"a5ed4b2c"}[t]+".css",r=i.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===r))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===s||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[t],f.parentNode.removeChild(f),a(o)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){n[t]=0}));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise(function(e,a){s=r[t]=[e,a]});e.push(s[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t),l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+n+")");o.type=s,o.request=n,a[1](o)}r[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"03fc":function(t,e,a){"use strict";var s=a("4d4c"),n=a.n(s);n.a},"0992":function(t,e,a){t.exports=a.p+"img/gomoku.48693271.jpg"},"21bb":function(t,e,a){"use strict";var s=a("bcc9"),n=a.n(s);n.a},"4d4c":function(t,e,a){},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),n=a.n(s);n.a},"5e27":function(t,e,a){},6784:function(t,e,a){t.exports=a.p+"img/yolomoment.b71903f7.jpg"},7369:function(t,e,a){var s={"./gomoku.jpg":"0992","./tic-tac-toe.jpg":"aa13","./yolomoment.jpg":"6784"};function n(t){var e=r(t);return a(e)}function r(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="7369"},9476:function(t,e,a){},a7f4:function(t,e,a){},aa13:function(t,e,a){t.exports=a.p+"img/tic-tac-toe.f9b41f15.jpg"},bb78:function(t,e,a){"use strict";var s=a("a7f4"),n=a.n(s);n.a},bcc9:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"nav",class:{"nav-light":t.isScroll}},[a("div",{staticClass:"container flex flex-jcsb"},[a("router-link",{staticClass:"nav-head",attrs:{to:"/"}},[t._v("Akai Zhao")]),a("a",{staticClass:"nav-toggle",class:{"nav-toggle-show":t.isMenuOpen},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.menuSwitch(e)}}})],1)]),a("transition",{attrs:{name:"slide"}},[a("router-view")],1),t._m(0),a("menu-view",{attrs:{isMenuOpen:t.isMenuOpen},on:{menuClose:t.menuSwitch}}),a("background-decoration",{attrs:{text:t.title}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container flex flex-fe"},[a("div",{staticClass:"footer-info"},[a("h4",[t._v("Akai Zhao")]),a("h5",[t._v("Web Front End Enginer")]),a("p",[t._v("0975-059-440 | PHONE")]),a("p",[t._v("KEVIN910171@gmail.com | MAIL")])])])])}],o=(a("7f7f"),a("d225")),c=a("b0b4"),i=a("308d"),l=a("6bb5"),u=a("4e2b"),p=a("9ab4"),f=a("60a3"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"deco"},[a("h4",{staticClass:"deco-text"},[t._v(t._s(t.text))])])},d=[],v=s["a"].extend({name:"backgroundDecoration",props:{text:{type:String}}}),m=v,g=(a("03fc"),a("2877")),b=Object(g["a"])(m,h,d,!1,null,null,null),C=b.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu",class:{"menu-show":t.isMenuOpen}},[a("ul",{staticClass:"menu-list"},[a("li",{staticClass:"menu-list-tag"},[a("router-link",{attrs:{to:"/"}},[t._v("首頁")]),a("span",[t._v("Home")])],1),a("li",{staticClass:"menu-list-tag"},[a("router-link",{attrs:{to:"/work"}},[t._v("作品")]),a("span",[t._v("Works")])],1),a("li",{staticClass:"menu-list-btn"},[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.closeMenu(e)}}})])]),t._m(0)])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-info"},[a("h2",[t._v("Connect me")]),a("p",[a("span",[t._v("PHONE")]),a("span",[a("a",{attrs:{href:"tel:+886-975059440"}},[t._v("0975059440")])])]),a("p",[a("span",[t._v("MAIL")]),a("span",[a("a",{attrs:{href:"mailto:kevin910171@gmil.com"}},[t._v("kevin910171@gmil.com")])])])])}],y=s["a"].extend({props:{isMenuOpen:Boolean},methods:{closeMenu:function(){this.$emit("menuClose",!1)}}}),k=y,_=(a("bb78"),Object(g["a"])(k,q,w,!1,null,null,null)),x=_.exports,O=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(i["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.isMenuOpen=!1,t.isScroll=!1,t.title="",t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){document.addEventListener("scroll",this.menuStyleController),this.title=this.$route.name}},{key:"menuSwitch",value:function(){this.isMenuOpen=!this.isMenuOpen,this.title="MENU"==this.title?this.$route.name:"MENU"}},{key:"menuStyleController",value:function(t){window.outerWidth>400?window.scrollY>100?this.isScroll=!0:this.isScroll=!1:window.scrollY>0?this.isScroll=!0:this.isScroll=!1}},{key:"onRouteChange",value:function(){this.isMenuOpen=!1,this.title=this.$route.name,window.scrollTo({top:0,left:0,behavior:"smooth"})}}]),e}(s["a"]);p["a"]([Object(f["c"])("$route")],O.prototype,"onRouteChange",null),O=p["a"]([Object(f["a"])({components:{BackgroundDecoration:C,MenuView:x}})],O);var M=O,j=M,E=(a("5c0b"),Object(g["a"])(j,n,r,!1,null,null,null)),S=E.exports,A=a("8c4f"),Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"bg bg-home"}),s("main",{staticClass:"main page-shadow page page-home"},[s("section",{ref:"parallax_one",staticClass:"container section section-home flex flex-aic flex-jcc parallax"},[t._m(0),s("icon-frontend")],1)]),s("section",{staticClass:"section section-blue"},[s("h1",{staticClass:"section-title"},[t._v("MY SKILLS")]),s("div",{staticClass:"container"},[s("ul",{staticClass:"card-group flex flex-warp"},t._l(t.skillArr,function(e){return s("li",{key:e.title,staticClass:"card"},[s("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("p",{staticClass:"card-text"},[t._v(t._s(e.text))])])}),0)])]),s("section",{staticClass:"section section-work"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"work-group"},[t._m(1),t._l(t.workArr,function(e){return s("li",{key:e.title,staticClass:"work"},[s("a",{attrs:{href:e.url,target:"_blank"}},[s("img",{staticClass:"work-image",attrs:{src:a("7369")("./"+e.img+".jpg")}}),s("div",{staticClass:"work-hover"}),s("h2",{staticClass:"work-title"},[t._v(t._s(e.title))]),s("p",{staticClass:"work-text"},[t._v(t._s(e.text))])])])})],2),s("router-link",{staticClass:"btn btn-more",attrs:{to:"work"}},[t._v("MORE")])],1)])])},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-helf"},[a("h1",[t._v("\n          你好，\n          "),a("br"),t._v("我是 AKAI 。\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"work work-head"},[t._v("\n          MY\n          "),a("br"),t._v("WORKs\n        ")])}],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460.417 321.058"}},[a("g",{attrs:{id:"bg-logo","data-name":"bg-logo"}},[a("g",[a("g",{staticClass:"main"},[a("polygon",{staticClass:"cls-1",attrs:{points:"233.883 320.352 74.06 160.529 234.883 0.706 394.706 160.529 233.883 320.352"}}),a("polygon",{staticClass:"cls-2 right",attrs:{points:"344.209 277.414 229.709 162.914 345.209 48.414 459.709 162.914 344.209 277.414"}}),a("polygon",{staticClass:"cls-2 left",attrs:{points:"115.209 277.414 0.709 162.914 116.209 48.414 230.709 162.914 115.209 277.414"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"230.629 83.629 153.813 160.445 230.629 237.261 230.629 226.743 164.237 160.351 230.629 93.958 230.629 83.629"}}),a("polygon",{staticClass:"cls-4",attrs:{points:"200.836 95.712 136.103 160.445 200.836 225.177 200.836 216.314 144.887 160.366 200.836 104.417 200.836 95.712"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"260.694 146.739 260.694 193.538 236.527 217.706 231.632 222.601 208.709 199.529 208.709 192.529 249.709 192.529 252.709 189.529 252.709 183.766 215.709 183.766 215.709 174.847 250.709 174.847 252.709 172.529 252.709 151.529 248.709 147.529 207.709 147.659 207.709 137.734 251.689 137.734 260.694 146.739"}}),a("polygon",{staticClass:"cls-4",attrs:{points:"253.214 132.529 253.214 122.529 208.332 122.529 200.564 130.529 200.709 191.529 209.709 200.529 209.709 169.529 212.709 166.529 247.028 166.504 247.028 157.225 212.709 157.529 209.709 154.529 209.709 132.529 253.214 132.529"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"250.655 106.571 304.778 160.695 250.655 214.818 250.655 207.408 297.434 160.628 250.655 113.849 250.655 106.571"}}),a("polygon",{staticClass:"cls-4",attrs:{points:"283.884 127.861 283.884 135.118 309.421 160.654 283.884 186.191 283.884 193.528 316.718 160.695 283.884 127.861"}}),a("polygon",{staticClass:"cls-3",attrs:{points:"283.729 152.188 283.729 169.201 292.235 160.695 283.729 152.188"}}),a("polygon",{staticClass:"cls-4",attrs:{points:"181.532 172.05 181.532 148.582 169.798 160.316 181.532 172.05"}})]),a("g",[a("path",{staticClass:"cls-5 t-1",attrs:{d:"M141.6,265.791c0,.082-.075.123-.224.123q-.838,0-2.546-.146t-2.556-.145a5.19,5.19,0,0,0-1.254.078q-.414.19-.414,1.074,0,1.063.537,1.208a3,3,0,0,0,.683.057q.772,0,2.31-.084t2.311-.084q.371,0,.37,1.968a8.284,8.284,0,0,1-.123,1.993.3.3,0,0,1-.3.2,3.978,3.978,0,0,0-.705-.078q-1.2-.113-3.625-.113-.783,0-.884.012c-.38.06-.571.22-.571.482q0,1.587.134,3.658.112,1.869.112,1.668,0,.289-.7.335.189-.011-1-.011a14.983,14.983,0,0,1-2.7-.146c-.217-.051-.324-.168-.324-.346q0-1.242.084-3.733t.083-3.731q0-1.476-.134-3.715-.2-3.457-.213-3.715l-.011-.135c-.007-.185.105-.279.336-.279q.828,0,2.5.033t2.512.035q.894,0,2.691-.135t2.691-.134c.373,0,.582.152.627.459,0,.32.015.8.044,1.443.015.164.063.481.146.951A5.792,5.792,0,0,1,141.6,265.791Z"}}),a("path",{staticClass:"cls-5 t-2",attrs:{d:"M153.6,272.337a5.654,5.654,0,0,1-1.56,4.139,6.055,6.055,0,0,1-8.152.023,5.409,5.409,0,0,1-1.589-4.029,5.9,5.9,0,0,1,1.522-4.213,5.383,5.383,0,0,1,4.118-1.617,5.511,5.511,0,0,1,4.095,1.584A5.6,5.6,0,0,1,153.6,272.337Zm-3.67,0a2.413,2.413,0,0,0-.548-1.562,1.745,1.745,0,0,0-1.421-.677,1.805,1.805,0,0,0-1.455.694,2.5,2.5,0,0,0,0,3.1,1.858,1.858,0,0,0,2.9,0A2.388,2.388,0,0,0,149.934,272.337Z"}}),a("path",{staticClass:"cls-5 t-3",attrs:{d:"M166.081,277.517a.321.321,0,0,1-.314.347c-.209.029-.753.045-1.634.045a12.671,12.671,0,0,1-1.745-.068.406.406,0,0,1-.336-.459q0-.525.034-1.588c.022-.708.033-1.243.033-1.6q0-.414-.022-1.237t-.022-1.237q0-1.532-1.332-1.532a1.944,1.944,0,0,0-1.018.38c-.418.284-.627.563-.627.84v6.042a.366.366,0,0,1-.346.414c-.262.029-.8.045-1.6.045a12.947,12.947,0,0,1-1.7-.068.351.351,0,0,1-.346-.369q0-.873.011-2.63t.011-2.64a17.245,17.245,0,0,0-.436-4.375.746.746,0,0,1-.023-.168.246.246,0,0,1,.168-.246q.705-.078,1.88-.246,1.779-.348,2-.347c.082,0,.145.251.19.755s.108.756.19.756q-.123,0,1.2-.779a4.761,4.761,0,0,1,2.322-.777,4.016,4.016,0,0,1,2.372.671,2.505,2.505,0,0,1,1.063,2.148v3.57q0,.728.011,2.176T166.081,277.517Z"}}),a("path",{staticClass:"cls-5 t-4",attrs:{d:"M175.435,274.563a9.156,9.156,0,0,1-.084,1.018,9.423,9.423,0,0,0-.084,1,.782.782,0,0,1-.067.408,1.4,1.4,0,0,1-.369.258,6.531,6.531,0,0,1-3.2.794q-3.234,0-3.234-2.473,0-.738.056-2.221t.056-2.221q0-.493-.571-.493h-.145a1.325,1.325,0,0,1-.146.011c-.284,0-.425-.1-.425-.3,0-.119.009-.3.028-.547s.028-.43.028-.549q0-.235-.028-.716t-.028-.717q0-.222.716-.246c.269-.007.414-.082.437-.224a8.343,8.343,0,0,0,.044-1.342q-.045-1.443-.044-1.376,0-1.3.246-1.3a4.025,4.025,0,0,1,.861.134,7.737,7.737,0,0,0,.884.167q.571.079,1.724.213c.186.015.279.079.279.191q0,.447-.072,1.353t-.073,1.366q0,.548.324.547c.261,0,.657-.01,1.187-.033s.928-.033,1.2-.033q.246,0,.246.168c0,.171-.019.429-.056.771s-.056.6-.056.773,0,.44.011.783.012.605.012.783c0,.157-.109.236-.325.236-.15,0-.4-.006-.75-.018s-.6-.017-.75-.017h-.839c-.112,0-.168.165-.168.493V272c.008.357.012.623.012.794a2.779,2.779,0,0,0,.212,1.3,1.3,1.3,0,0,0,1.186.481,3.6,3.6,0,0,0,.8-.129,3.636,3.636,0,0,1,.733-.128C175.357,274.317,175.435,274.4,175.435,274.563Z"}}),a("path",{staticClass:"cls-5 t-5",attrs:{d:"M193.876,274.362a14.517,14.517,0,0,1-.19,1.768,6.8,6.8,0,0,1-.358,1.667.418.418,0,0,1-.369.212,2.606,2.606,0,0,1-.336-.034q-.817-.111-4.767-.111-.862,0-2.562-.012t-2.552-.011q-.369,0-.369-.324,0-1.254.14-3.765t.14-3.766q0-1.275-.134-4.755-.034-.9-.124-2.675l-.011-.156c-.015-.172.079-.258.28-.258q.828,0,2.489.045t2.49.045q.817,0,2.462-.045t2.462-.045c.388,0,.611.146.671.437.038.172.095.692.174,1.56s.117,1.4.117,1.584c0,.157-.075.235-.224.235-.045,0-.123,0-.235-.011q-2.976-.246-5.348-.246c-.4,0-.638.093-.728.279a3.557,3.557,0,0,0-.055.862,1.582,1.582,0,0,0,.223,1.007.96.96,0,0,0,.727.213c.075,0,.221-.006.437-.017s.4-.017.537-.017q1.41,0,2.853-.078l.616-.056a5.42,5.42,0,0,1,.6-.045c.179,0,.269.086.269.257a15.863,15.863,0,0,0-.2,1.712q-.089.9-.089,1.791c0,.149-.109.224-.325.224l-1.007-.113q-.637-.066-2.909-.066h-1.187c-.3,0-.484.074-.537.224q-.011.056-.01.693a3.319,3.319,0,0,0,.111,1.1q.19.425,1.433.5h1.633q.592,0,1.763-.107t1.751-.106Q193.876,273.959,193.876,274.362Z"}}),a("path",{staticClass:"cls-5 t-6",attrs:{d:"M206.408,277.517a.32.32,0,0,1-.313.347c-.209.029-.754.045-1.634.045a12.689,12.689,0,0,1-1.746-.068.406.406,0,0,1-.335-.459q0-.525.034-1.588c.022-.708.033-1.243.033-1.6q0-.414-.022-1.237t-.023-1.237q0-1.532-1.331-1.532a1.95,1.95,0,0,0-1.019.38c-.418.284-.626.563-.626.84v6.042a.367.367,0,0,1-.347.414c-.261.029-.8.045-1.6.045a12.928,12.928,0,0,1-1.7-.068.352.352,0,0,1-.347-.369q0-.873.012-2.63t.011-2.64a17.238,17.238,0,0,0-.437-4.375.8.8,0,0,1-.022-.168.246.246,0,0,1,.168-.246q.7-.078,1.88-.246,1.779-.348,2-.347c.082,0,.145.251.19.755s.108.756.19.756q-.123,0,1.2-.779a4.761,4.761,0,0,1,2.322-.777,4.016,4.016,0,0,1,2.372.671,2.507,2.507,0,0,1,1.063,2.148v3.57q0,.728.011,2.176T206.408,277.517Z"}}),a("path",{staticClass:"cls-5 t-7",attrs:{d:"M220.138,261.963q0-.246-.09.739-.123,1.242-.19,3.178-.09,2.192-.089,4.991a57.553,57.553,0,0,0,.257,6.579c.015.141.022.231.022.268,0,.082-.056.131-.167.146q-.4.056-2.966.056c-.4,0-.634-.079-.693-.235l-.045-.85a.354.354,0,0,0-.089-.18.67.67,0,0,0-.168.135,4.139,4.139,0,0,1-3.022,1.185,4.738,4.738,0,0,1-3.782-1.655,5.9,5.9,0,0,1-1.354-3.983,6.014,6.014,0,0,1,1.332-4.018,4.711,4.711,0,0,1,3.8-1.679,3.313,3.313,0,0,1,2.63,1.074c.1.121.179.18.224.18.067,0,.1-.1.1-.291q0-.861-.044-2.574t-.045-2.563c0-.215.059-.338.179-.369q.716-.033,1.969-.134a16.691,16.691,0,0,0,1.981-.28C220.056,261.683,220.138,261.777,220.138,261.963Zm-4.218,10.284a2.215,2.215,0,0,0-.616-1.55,1.955,1.955,0,0,0-1.488-.666,1.787,1.787,0,0,0-1.46.666,2.443,2.443,0,0,0-.543,1.595,2.251,2.251,0,0,0,.548,1.533,1.806,1.806,0,0,0,1.455.671,1.937,1.937,0,0,0,1.5-.671A2.284,2.284,0,0,0,215.92,272.247Z"}}),a("path",{staticClass:"cls-5 t-8",attrs:{d:"M242.2,269.908a8.386,8.386,0,0,1-2.115,5.707,6.892,6.892,0,0,1-5.248,2.271q-.65.022-3.57.023-.547,0-1.65-.034t-1.651-.034c-.216,0-.324-.086-.324-.257q0-1.232.1-3.7t.095-3.7q0-1.287-.095-3.855t-.1-3.844q0-.234.324-.279.795-.09,2.608-.09,3.447,0,4.465.1a8.567,8.567,0,0,1,4.151,1.343,6.815,6.815,0,0,1,2.227,2.82A8.393,8.393,0,0,1,242.2,269.908Zm-4.285,0a4.313,4.313,0,0,0-1.131-3.088,3.907,3.907,0,0,0-3.021-1.242q-1.724,0-1.723.459,0,.659-.023,1.985T232,270.008q0,.649.022,1.954t.023,1.963q0,.481,1.79.481a3.808,3.808,0,0,0,3.044-1.286A4.784,4.784,0,0,0,237.919,269.908Z"}}),a("path",{staticClass:"cls-5 t-9",attrs:{d:"M254.11,271.765q0,1.131-.728,1.287-.123.022-2.316.246-1.32.145-3.938.347a1.585,1.585,0,0,0,.951,1.109,3.364,3.364,0,0,0,1.476.312,4.227,4.227,0,0,0,2-.537c.283-.179.568-.357.851-.537a3.34,3.34,0,0,1,.789,1.141,4.209,4.209,0,0,1,.554,1.31c0,.052-.056.138-.168.257a5.542,5.542,0,0,1-4.242,1.466,5.972,5.972,0,0,1-4.3-1.555,5.512,5.512,0,0,1-1.679-4.219,6.019,6.019,0,0,1,1.5-4.219,5.266,5.266,0,0,1,4.1-1.7,4.856,4.856,0,0,1,3.647,1.568A5.2,5.2,0,0,1,254.11,271.765Zm-3.917-.682a1.731,1.731,0,0,0-.492-1.22,1.552,1.552,0,0,0-1.175-.525,1.413,1.413,0,0,0-1.164.592,2.044,2.044,0,0,0-.425,1.287c0,.2.1.3.314.3a19.736,19.736,0,0,0,2.573-.257C250.07,271.224,250.193,271.165,250.193,271.083Z"}}),a("path",{staticClass:"cls-5 t-10",attrs:{d:"M266.105,270.076a10.914,10.914,0,0,1-.123,2.261,13.361,13.361,0,0,1-1.545,2.7,29.484,29.484,0,0,1-1.913,2.551q-.291.346-1.757.347a9.246,9.246,0,0,1-1.656-.09.774.774,0,0,1-.392-.223,25.3,25.3,0,0,1-1.913-2.53,15.22,15.22,0,0,1-1.589-2.651,7.231,7.231,0,0,1-.28-2.316q0-.437.012-1.315t.011-1.326q0-.291.391-.291.572,0,1.718.033t1.718.034q.258,0,.258.347c0,.209-.016.524-.045.945s-.045.741-.045.957q0,1.164.067,1.9a4.566,4.566,0,0,0,.649,1.431q.637,1.108.928,1.109t.9-1.086a4.807,4.807,0,0,0,.637-1.388,17.456,17.456,0,0,0,.09-1.925c0-.215-.022-.542-.067-.978s-.067-.759-.067-.968c0-.231.078-.347.235-.347.179,0,.445,0,.8.011s.621.011.8.011.449-.015.811-.044.632-.045.812-.045a.362.362,0,0,1,.369.291A11.125,11.125,0,0,1,266.105,270.076Z"}}),a("path",{staticClass:"cls-5 t-11",attrs:{d:"M277.877,271.765c0,.754-.244,1.183-.728,1.287q-.123.022-2.316.246-1.32.145-3.939.347a1.589,1.589,0,0,0,.951,1.109,3.369,3.369,0,0,0,1.477.312,4.227,4.227,0,0,0,2-.537c.283-.179.567-.357.85-.537a3.336,3.336,0,0,1,.79,1.141,4.2,4.2,0,0,1,.553,1.31c0,.052-.055.138-.168.257a5.538,5.538,0,0,1-4.241,1.466,5.976,5.976,0,0,1-4.3-1.555,5.516,5.516,0,0,1-1.679-4.219,6.019,6.019,0,0,1,1.5-4.219,5.269,5.269,0,0,1,4.1-1.7,4.857,4.857,0,0,1,3.648,1.568A5.2,5.2,0,0,1,277.877,271.765Zm-3.917-.682a1.728,1.728,0,0,0-.493-1.22,1.55,1.55,0,0,0-1.174-.525,1.411,1.411,0,0,0-1.164.592,2.038,2.038,0,0,0-.425,1.287c0,.2.1.3.313.3a19.721,19.721,0,0,0,2.573-.257C273.837,271.224,273.96,271.165,273.96,271.083Z"}}),a("path",{staticClass:"cls-5 t-12",attrs:{d:"M283.18,271.105q0,3.055.023,4.689c0,.171.011.466.033.883q.033.571.033.885c0,.156-.093.25-.279.279a12.1,12.1,0,0,1-1.813.09,9.622,9.622,0,0,1-1.712-.09.331.331,0,0,1-.28-.3v-.482q0-1,.023-2.982t.022-2.971q0-4.7.011-4.285a35.34,35.34,0,0,0-.279-4.264,1.144,1.144,0,0,1-.023-.19q0-.246.291-.246h4c.186,0,.272.078.257.235l-.011.2Q283.18,267.391,283.18,271.105Z"}}),a("path",{staticClass:"cls-5 t-13",attrs:{d:"M295.993,272.337a5.651,5.651,0,0,1-1.562,4.139,6.053,6.053,0,0,1-8.151.023,5.409,5.409,0,0,1-1.589-4.029,5.9,5.9,0,0,1,1.522-4.213,5.383,5.383,0,0,1,4.118-1.617,5.511,5.511,0,0,1,4.095,1.584A5.6,5.6,0,0,1,295.993,272.337Zm-3.671,0a2.413,2.413,0,0,0-.548-1.562,1.744,1.744,0,0,0-1.421-.677,1.8,1.8,0,0,0-1.455.694,2.5,2.5,0,0,0,0,3.1,1.859,1.859,0,0,0,2.9,0A2.393,2.393,0,0,0,292.322,272.337Z"}}),a("path",{staticClass:"cls-5 t-14",attrs:{d:"M309.688,272.46a5.741,5.741,0,0,1-1.409,3.971,4.865,4.865,0,0,1-3.816,1.634,4.677,4.677,0,0,1-1.846-.425,4.213,4.213,0,0,1-.9-.426c-.1,0-.145.113-.145.336q0,.571.055,1.718c.039.765.057,1.337.057,1.718a.321.321,0,0,1-.369.357l-2.283.012a5.261,5.261,0,0,1-1-.056.388.388,0,0,1-.335-.414l.022-8.616a20.96,20.96,0,0,0-.392-4.4,1,1,0,0,1-.022-.191.216.216,0,0,1,.134-.223,9.423,9.423,0,0,1,1.667-.359,12.51,12.51,0,0,1,1.734-.19q.436,0,.5.576t.152.577q-.113,0,.957-.61a4,4,0,0,1,1.941-.61,5,5,0,0,1,3.883,1.6A5.729,5.729,0,0,1,309.688,272.46Zm-4.151-.023a2.4,2.4,0,0,0-.548-1.566,1.841,1.841,0,0,0-1.466-.7,1.71,1.71,0,0,0-1.433.7,2.568,2.568,0,0,0-.469,1.566,2.473,2.473,0,0,0,.492,1.577,1.736,1.736,0,0,0,1.455.683Q305.537,274.7,305.537,272.437Z"}}),a("path",{staticClass:"cls-5 t-15",attrs:{d:"M321.393,271.765q0,1.131-.727,1.287-.123.022-2.317.246-1.32.145-3.938.347a1.587,1.587,0,0,0,.951,1.109,3.369,3.369,0,0,0,1.477.312,4.22,4.22,0,0,0,2-.537c.284-.179.568-.357.851-.537a3.34,3.34,0,0,1,.789,1.141,4.209,4.209,0,0,1,.554,1.31c0,.052-.056.138-.168.257a5.538,5.538,0,0,1-4.241,1.466,5.974,5.974,0,0,1-4.3-1.555,5.516,5.516,0,0,1-1.679-4.219,6.019,6.019,0,0,1,1.5-4.219,5.268,5.268,0,0,1,4.1-1.7,4.856,4.856,0,0,1,3.647,1.568A5.2,5.2,0,0,1,321.393,271.765Zm-3.917-.682a1.731,1.731,0,0,0-.492-1.22,1.552,1.552,0,0,0-1.175-.525,1.414,1.414,0,0,0-1.164.592,2.044,2.044,0,0,0-.425,1.287c0,.2.1.3.314.3a19.721,19.721,0,0,0,2.573-.257C317.353,271.224,317.476,271.165,317.476,271.083Z"}}),a("path",{staticClass:"cls-5 t-16",attrs:{d:"M330.043,270.871c0,.29-.162.435-.482.435q-.211,0-.621-.027t-.609-.028a1.992,1.992,0,0,0-1.265.291,1.542,1.542,0,0,0-.336,1.174q0,.483.017,1.46c.011.654.016,1.14.016,1.461,0,.216.016.539.045.968s.045.748.045.957c0,.179-.123.279-.369.3-.358.029-.906.045-1.644.045a16.924,16.924,0,0,1-1.7-.068q-.369-.043-.369-.369,0-.894.011-2.679c.008-1.191.012-2.083.012-2.681a16.239,16.239,0,0,0-.482-4.33.87.87,0,0,1-.022-.168.219.219,0,0,1,.168-.224q.615-.067,1.8-.246,1.768-.346,1.825-.347.2,0,.257.706t.2.7q-.158,0,.918-.587a4.306,4.306,0,0,1,2.07-.588c.417,0,.626.09.626.268a9.176,9.176,0,0,1-.066.918c-.045.425-.072.732-.08.918q0,.324.012.862Q330.043,270.658,330.043,270.871Z"}})])])])])},L=[],N=s["a"].extend({}),D=N,P=(a("d0be"),Object(g["a"])(D,$,L,!1,null,"4c178ccd",null)),I=P.exports,U=a("cdd2"),K=[{title:"JS / ES6 / TS",text:"熟悉ES6語法設計，目前正用空閒時間研究typescript，使用TS+vue開發遊戲平台。"},{title:"VUE",text:"熟練Vue.js，router、vuex...等都十分了解，目前開發專案以Vue-CLI為主。"},{title:"CSS / SCSS",text:"目前所有專案皆使用SCSS開發，在樣式設計上大部分從功能作為區分的模組化設計。"},{title:"UX",text:"過去曾為公司的後台介面做優化改版，在前端開發時注重UX，希望能讓自己開發的產品好上手。"},{title:"PS / AI / XD",text:"會使用設計軟體，有網站版面及流程規劃經驗。"}],V=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(i["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.interval=Date.now(),t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"linkTo",value:function(t){window.location.href=t}},{key:"mounted",value:function(){window.addEventListener("mousemove",this.moveEvt)}},{key:"beforeDestroy",value:function(){window.removeEventListener("mousemove",this.moveEvt)}},{key:"moveEvt",value:function(t){this.throttle(this.parallax,t,this.$refs.parallax_one)}},{key:"parallax",value:function(){var t=arguments[0],e=arguments[1],a={x:window.innerWidth,y:window.innerHeight},s={x:(t.x-a.x)/30+10,y:(t.y-a.y)/30};e.style.transform="translate(".concat(s.x,"px,").concat(s.y,"px)")}},{key:"throttle",value:function(t){if(!(Date.now()-this.interval<100)){this.interval=Date.now();for(var e=arguments.length,a=new Array(e>1?e-1:0),s=1;s<e;s++)a[s-1]=arguments[s];t.apply(this,a)}}},{key:"skillArr",get:function(){return K}},{key:"workArr",get:function(){return U["a"]}}]),e}(f["b"]);V=p["a"]([Object(f["a"])({components:{IconFrontend:I}})],V);var B=V,H=B,W=(a("21bb"),Object(g["a"])(H,Z,T,!1,null,null,null)),Y=W.exports;s["a"].use(A["a"]);var R=new A["a"]({base:"/",routes:[{path:"/",name:"HOME",component:Y},{path:"/work",name:"WORK",component:function(){return a.e("chunk-d343ffb2").then(a.bind(null,"f126"))}}]});s["a"].config.productionTip=!1,new s["a"]({router:R,render:function(t){return t(S)}}).$mount("#app")},cdd2:function(t,e,a){"use strict";e["a"]=[{title:"TIC-TAC-TOE",text:"練習時製作的井字遊戲",url:"https://akaizhao.github.io/work/tictactoe/",img:"tic-tac-toe"},{title:"GOMOKU",text:"研究CANVAS時製作的五子棋遊戲",url:"https://akaizhao.github.io/work/gomoku/",img:"gomoku"},{title:"YOLOMOMENT",text:"職訓時與組員共同設計的餐廳網站",url:"https://akaizhao.github.io/work/YoloMoment/",img:"yolomoment"}]},d0be:function(t,e,a){"use strict";var s=a("9476"),n=a.n(s);n.a}});
//# sourceMappingURL=app.3882152c.js.map