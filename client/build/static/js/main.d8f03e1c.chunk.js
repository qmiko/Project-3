(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(43)},24:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(17),i=n.n(r),c=(n(24),n(2)),o=n(3),s=n(5),u=n(4),m=n(6);function h(){return l.a.createElement("div",null,l.a.createElement("ul",{className:"clothing-menu"},l.a.createElement("li",null," all "),l.a.createElement("li",null," feminine "),l.a.createElement("li",null," masculine "),l.a.createElement("li",null," tops "),l.a.createElement("li",null," bottoms "),l.a.createElement("li",null," dresses / jumpsuits "),l.a.createElement("li",null," outerwear "),l.a.createElement("li",null," kicks ")))}function p(){return l.a.createElement("div",{className:"clothing-item"},l.a.createElement(d,null),l.a.createElement(d,null),l.a.createElement(d,null),l.a.createElement(d,null),l.a.createElement(d,null))}function d(){return l.a.createElement("div",{className:"clothing-item"},"Something")}var f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={menuOpen:!0},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.state.menuOpen?l.a.createElement(h,null):"",l.a.createElement(p,null))}}]),t}(a.Component),v=n(18),g=n(7),w=n.n(g),E={getItems:function(e){return w.a.get("/api/items",{})},saveItem:function(e){return console.log("API got sent ",e),w.a.post("/api/items",e)}},b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",description:"",price:0},n.handleInput=function(e){var t=e.target,a=t.name,l=t.value;n.setState(Object(v.a)({},a,l))},n.submitForm=function(e){alert(n.state.description+"Submitted"),E.saveItem({title:n.state.title||"none",description:n.state.description||"none",price:parseFloat(n.state.price)||999.99})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"sell-items"},l.a.createElement("div",null,l.a.createElement("input",{className:"title",value:this.state.title,name:"title",onChange:this.handleInput,type:"text",placeholder:"Entry Title"}),l.a.createElement("input",{className:"price",value:this.state.price,name:"price",onChange:this.handleInput,type:"text",placeholder:"USD"})),l.a.createElement("textarea",{className:"description",value:this.state.description,name:"description",onChange:this.handleInput,type:"text",placeholder:"description"}),l.a.createElement("div",{className:"new-item",onClick:this.submitForm}," add new item"))}}]),t}(a.Component);n(42);var j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav"},l.a.createElement("div",{className:"header"},"eleven"),l.a.createElement("div",{className:"nav-child",onClick:this.props.showShop},"shop"),l.a.createElement("div",{className:"nav-child",onClick:this.props.showSell},"sell"))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentPage:"shop"},n.getPageContents=function(){switch(n.state.currentPage){case"shop":return l.a.createElement(f,null);case"sell":return l.a.createElement(b,null)}},n.showShopPage=function(){n.setState({currentPage:"shop"})},n.showSellPage=function(){n.setState({currentPage:"sell"})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(j,{showSell:this.showSellPage,showShop:this.showShopPage}),this.getPageContents())}}]),t}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(l.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");y?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):k(e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.d8f03e1c.chunk.js.map