(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{68:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),o=t.n(c),a=t(31),i=t.n(a),u=t(15),s=t(8),l=t(9);function b(){var e=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  body {\n    background: #312E38;\n    color: #FFF;\n    -webkit-font-smoothing: antialiased;\n    height: 100%;\n    width: 100%;\n  }\n\n  border, input, button {\n    font-family:  serif;\n    font-size: 16px;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 500;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return b=function(){return e},e}var j=Object(l.a)(b()),d=t(2),O=t(17),p=t.n(O),h=t(35),f=t(20);function x(){var e=Object(s.a)([""]);return x=function(){return e},e}function v(){var e=Object(s.a)([""]);return v=function(){return e},e}function g(){var e=Object(s.a)([""]);return g=function(){return e},e}function m(){var e=Object(s.a)(["\n  padding-top: 50px;\n"]);return m=function(){return e},e}function k(){var e=Object(s.a)([""]);return k=function(){return e},e}function S(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n\n  align-items: center;\n\n  justify-content: center;\n"]);return S=function(){return e},e}var E=l.b.div(S()),P=l.b.header(k()),_=l.b.main(m()),y=l.b.section(g()),C=l.b.div(v()),F=l.b.footer(x()),T=t(36),w=t.n(T).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/pokedex",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL}),D=t.p+"static/media/pokeball.a59a1b76.png",I=function(){var e=Object(c.useState)(""),n=Object(f.a)(e,2),t=n[0],o=n[1],a=Object(c.useState)(null),i=Object(f.a)(a,2),u=i[0],s=i[1];Object(c.useEffect)((function(){var e=localStorage.getItem("@MyPokedex");if(null!==e&&null===u){var n=JSON.parse(e);s(n)}}),[u]);var l=Object(c.useCallback)(Object(h.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<1)){e.next=3;break}return s(null),e.abrupt("return");case 3:return e.prev=3,e.next=6,w.get("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(e){return e.data}));case 6:n=e.sent,console.log(n),s(n),localStorage.setItem("@MyPokedex",JSON.stringify(u)),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),s(null),localStorage.removeItem("@MyPokedex"),console.log("ocorreu um erro ao buscar om pokemon: ".concat(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[3,12]])}))),[u,t]),b=Object(c.useCallback)((function(e){o(e.target.value)}),[]);return Object(r.jsxs)(E,{children:[Object(r.jsxs)(P,{children:[Object(r.jsx)("h2",{children:"MY PODEDEX"}),Object(r.jsxs)(C,{children:[Object(r.jsx)("input",{type:"text",placeholder:"Fill Pokemon name or id",value:t,onChange:b,onKeyPress:function(e){"Enter"===e.key&&l()}}),Object(r.jsx)("button",{type:"button",onClick:l,children:"Search Search"})]})]}),Object(r.jsxs)(_,{children:[Object(r.jsx)(y,{children:null===u?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"poke name"}),Object(r.jsx)("p",{children:"poke id"}),Object(r.jsx)("img",{src:D,alt:"pokeball"})]}):Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:null===u||void 0===u?void 0:u.name}),Object(r.jsx)("p",{children:null===u||void 0===u?void 0:u.id}),Object(r.jsx)("img",{src:null===u||void 0===u?void 0:u.sprites.other.dream_world.front_default,alt:""})]})}),Object(r.jsx)(F,{children:Object(r.jsx)("div",{})})]})]})},R=function(){return Object(r.jsx)(d.c,{children:Object(r.jsx)(d.a,{path:"/",exact:!0,component:I})})},L=function(){return Object(r.jsxs)(u.a,{basename:"/pokedex",children:[Object(r.jsx)(R,{}),Object(r.jsx)(j,{})]})},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),A()}},[[68,1,2]]]);
//# sourceMappingURL=main.307a9c00.chunk.js.map