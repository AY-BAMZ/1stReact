(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,t,a){e.exports={recipe:"recipe_recipe__21Brk",img:"recipe_img__2WRps",product_image:"recipe_product_image__27UkV",tit:"recipe_tit__4pC6p"}},,,,,,function(e,t,a){e.exports=a.p+"static/media/4.5cbf6250.JPG"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),i=a.n(r),l=(a(13),a(3)),o=a.n(l),s=a(6),m=a(2),u=(a(15),a(1)),p=a.n(u),d=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",null,c.a.createElement("div",{className:p.a.recipe},c.a.createElement("div",{className:p.a.tit},c.a.createElement("h1",null,t)),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,a),c.a.createElement("div",null,c.a.createElement("img",{className:p.a.product_image,src:n,alt:""}))))},f=a(7),E=a.n(f),g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),l=Object(m.a)(i,2),u=l[0],p=l[1],f=Object(n.useState)("chicken"),g=Object(m.a)(f,2),h=g[0],b=g[1];Object(n.useEffect)((function(){v()}),[h]);var v=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("b1c96d6d","&app_key=").concat("e81a56a581145adeaf22afa39a47bf4a"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(u),p("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:u,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"search ")),c.a.createElement("div",{className:"boddy"},a.map((function(e){return c.a.createElement(d,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))),c.a.createElement("div",{className:"footer"},c.a.createElement("img",{className:"ceo_Image",src:E.a,alt:"#LLL"}),c.a.createElement("h1",null,"ENGR AYOBAMI PAUL"),c.a.createElement("h3",null,"C.E.O"),c.a.createElement("input",{className:"greet_bamz",type:"text",placeholder:"send your greetings to bamz"}),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){alert("thanks for greeting us oo")},className:"greet_button",type:"submit"},"SEND"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fa24ba1c.chunk.js.map