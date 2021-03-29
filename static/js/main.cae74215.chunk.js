(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(12),o=r.n(a),i=(r(18),r(3)),s=r(4),h=r(6),l=r(5),b=(r(19),r(7)),d=r(9),u=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"randomHover",value:function(){return{h:Math.floor(360*Math.random()),s:Math.floor(100*Math.random()),l:Math.floor(100*Math.random())}}},{key:"randomHeaderColor",value:function(e,t){var r=this.calculateNewLuminance(t.l);return"h1"===e?{h:t.h,s:t.s,l:r}:"h2"===e?{h:t.h,s:t.s,l:t.l<=33?r+20:r-20}:{h:0,s:0,l:0}}},{key:"calculateNewLuminance",value:function(e){return e<=33?Math.floor(3*(e+5)-5):Math.floor((e+5)/3-5)}},{key:"HSLtoString",value:function(e){return"hsl(".concat(e.h,"deg, ").concat(e.s,"%, ").concat(e.l,"%)")}}]),e}(),A=r(0),j=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(A.jsxs)("section",{className:"project-tile shadow-far",children:[Object(A.jsx)("h1",{children:this.props.name}),Object(A.jsx)("p",{children:this.props.text}),Object(A.jsx)("img",{className:"project-image shadow-near",src:this.props.imageSrc,alt:this.props.imageAlt?this.props.imageAlt:"App screenshot"}),Object(A.jsx)("br",{}),Object(A.jsx)("a",{className:"card-link link",href:this.props.link,target:"_blank",rel:"noreferrer",children:"Check it out on GitHub"})]})}}]),r}(c.a.Component),x=r(13),w=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(A.jsxs)("section",{id:"contact",children:[Object(A.jsxs)("a",{className:"contact link",href:"https://github.com/istir",target:"_blank",rel:"noreferrer",children:[Object(A.jsx)(b.a,{icon:d.a})," Github"]}),Object(A.jsxs)("a",{className:"contact link",href:"mailto:grzegorz.siedlecki@outlook.com",children:[Object(A.jsx)(b.a,{icon:x.a})," Email"]})]})}}]),r}(n.Component),g=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(A.jsx)("section",{id:"about",children:Object(A.jsxs)("div",{id:"about-content",children:[Object(A.jsx)("p",{children:Object(A.jsx)("b",{children:"Born and raised in Central Poland."})})," ",Object(A.jsx)("p",{children:"I've been interested in computers from the early days of my childhood."}),Object(A.jsx)("p",{children:"School never really satisfied my desire to learn new things about computers, so I tried doing it myself. At first, I started with graphics software, like GIMP and then later Photoshop. As it turns out, I wasn't that good at it, but I still liked using it, mostly as a tool for modifying images."}),Object(A.jsx)("p",{children:"After a few years of that, I learned about custom CSS in Firefox. Back then you'd use Stylish to change the site's CSS or even the whole browser's CSS. And I did, creating styles that better suited me."}),Object(A.jsx)("img",{style:{maxWidth:"100%",display:"block",margin:"auto"},src:"data:image/png;base64,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"}),Object(A.jsx)("p",{children:"After a few years of that I... burned out. I stopped what I was doing and started taking school more seriously, however, it turned out I didn't like CNC machines as much as I thought I did, so when I was choosing my university I chose Computer Science."}),Object(A.jsxs)("p",{children:[" ","I loved it, especially programming. After fiddling with my own programs, mainly in C# I rediscovered how fun was it to fiddle with CSS, but now I took it to another level and learned how to make whole websites."]}),Object(A.jsxs)("p",{children:["I'm still very much a beginner, but with a big desire to learn. I completed"," ",Object(A.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://www.freecodecamp.org/learn/responsive-web-design/",children:"FreeCodeCamp's Responsive Web Design"})," ","course and completed a few"," ",Object(A.jsx)("a",{className:"link",target:"_blank",rel:"noreferrer",href:"https://www.frontendmentor.io/",children:"FrontEndMentor's challenges."})]})]})})}}]),r}(n.Component),f=function(e){Object(h.a)(r,e);var t=Object(l.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).welcomeRef=void 0,n.welcomeRef=c.a.createRef(),n.state={background:{h:11.7,s:100,l:81.8},h1:{h:0,s:0,l:0},h2:{h:0,s:0,l:0}},n}return Object(s.a)(r,[{key:"onHover",value:function(){var e=u.randomHover(),t=u.randomHeaderColor("h1",e),r=u.randomHeaderColor("h2",e);this.setState({background:e,h1:t,h2:r})}},{key:"render",value:function(){var e=this;return Object(A.jsxs)("div",{children:[Object(A.jsx)("nav",{id:"navbar",children:Object(A.jsxs)("div",{id:"nav-links",children:[Object(A.jsx)("a",{className:"nav-link",href:"#projects",children:"Projects"}),Object(A.jsx)("a",{className:"nav-link",href:"#contact",children:"Contact"}),Object(A.jsx)("a",{className:"nav-link",href:"#about",children:"About me"}),Object(A.jsx)("a",{className:"nav-link",target:"_blank",id:"profile-link",href:"https://github.com/istir",rel:"noreferrer",children:Object(A.jsx)(b.a,{icon:d.a,size:"2x"})})]})}),Object(A.jsxs)("main",{children:[Object(A.jsxs)("section",{id:"welcome-section",ref:this.welcomeRef,style:{backgroundColor:u.HSLtoString(this.state.background)},onMouseEnter:function(){e.onHover()},children:[Object(A.jsx)("h1",{style:{color:u.HSLtoString(this.state.h1)},id:"welcome-text",children:"Hello, I'm istir."}),Object(A.jsx)("h2",{style:{color:u.HSLtoString(this.state.h2)},id:"welcome-subtitle",children:"Nice to meet you."})]}),Object(A.jsxs)("section",{id:"projects",children:[Object(A.jsx)(j,{name:"weebTools",text:"weebTools is a tool written in Electron and React with help from Electron React Boilerplate that helps you manage your collection of images, be it anime-themed or not.",imageSrc:"https://raw.githubusercontent.com/istir/weebtools-3.0/master/docs/screenshot1.png",link:"https://github.com/istir/weebtools-3.0",imageAlt:"weebTools screenshoot"}),Object(A.jsx)(j,{name:"tilde",text:Object(A.jsxs)("div",{children:["Tilde is a startpage written in React and heavily inspired by"," ",Object(A.jsx)("a",{className:"card-link link",href:"https://github.com/cadejscroggins/tilde",target:"_blank",rel:"noreferrer",children:"cadejscroggins/tilde"}),".",Object(A.jsx)("br",{})," Work In Progress.",Object(A.jsx)("br",{}),Object(A.jsx)("a",{className:"card-link link",href:"https://istir.github.io/tilde-5.4.0-react/",target:"_blank",rel:"noreferrer",children:"Check out demo!"})]}),imageSrc:"https://raw.githubusercontent.com/istir/tilde-5.4.0-react/master/ShareX%202021-03-29%20at%2009.51.48.723-chrome.png",link:"https://github.com/istir/tilde-5.4.0-react/tree/master",imageAlt:"tilde screenshoot"})]}),Object(A.jsx)(w,{}),Object(A.jsx)(g,{})]})]})}}]),r}(c.a.Component),m=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,27)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(f,{})}),document.getElementById("root")),m()}},[[26,1,2]]]);
//# sourceMappingURL=main.cae74215.chunk.js.map