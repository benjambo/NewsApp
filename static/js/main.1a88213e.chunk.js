(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{154:function(e,t,a){e.exports=a.p+"static/media/beach.ef43c5c9.mp4"},183:function(e,t,a){e.exports=a(205)},188:function(e,t,a){},189:function(e,t,a){},197:function(e,t,a){e.exports=a.p+"static/media/cover.194e7378.jpg"},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=(a(188),a(165)),i=a(12),s=(a(189),a(190),a(152)),u=a.n(s),m=a(37),p=a.n(m),h=a(81),d=a(94),f=a(95),v=a(124),b=a(119),E=function(){var e=Object(h.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat("1147083ab9a3466d9332ac26b5a5c2d0"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(h.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/everything?q=".concat(t,"&language=en&sortBy=publishedAt&apiKey=").concat("1147083ab9a3466d9332ac26b5a5c2d0"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=a(226),w=a(230),x=a(231),k=a(168),j=function(e){var t=e.article;return r.a.createElement(y.a.Item,{style:{padding:30}},r.a.createElement(w.a,null,r.a.createElement(w.a.Column,{only:"computer",width:11,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"}},r.a.createElement(x.a,{as:"h3"},t.title),r.a.createElement(y.a.Description,{style:{margin:"20px 0"}},t.description),r.a.createElement(y.a,{bulleted:!0,horizontal:!0},r.a.createElement(y.a.Item,null,r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.source.name)),r.a.createElement(y.a.Item,null,t.publishedAt.split("T")[0]))),r.a.createElement(w.a.Column,{width:5,only:"computer"},r.a.createElement(k.a,{src:t.urlToImage})),r.a.createElement(w.a.Column,{width:16,only:"mobile tablet",style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"}},r.a.createElement(x.a,{as:"h3"},t.title),r.a.createElement(y.a.Description,{style:{margin:"20px 0"}},t.description),r.a.createElement(y.a,{bulleted:!0,horizontal:!0},r.a.createElement(y.a.Item,null,r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.source.name)),r.a.createElement(y.a.Item,null,t.publishedAt.split("T")[0])))))},N=function(e){return r.a.createElement(y.a,{divided:!0,style:{maxWidth:900,margin:"0 auto"}},e.articles.map((function(e,t){return r.a.createElement(j,{article:e,key:e.title+t})})))},S=a(223),C=a(227),O=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({searchTopic:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),""===n.state.searchTopic?alert("Search field can't be empty"):n.props.searchForTopic(n.state.searchTopic)},n.state={searchTopic:""},n}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(S.a,{onSubmit:this.handleSubmit},r.a.createElement(S.a.Group,null,r.a.createElement(S.a.Input,{placeholder:"Search topic",name:"topic",value:this.state.searchTopic,onChange:this.handleChange}),r.a.createElement(C.a,{type:"submit",color:"green"},"Search"))))}}]),a}(r.a.Component),T=a(222),A=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={articles:[],preArticles:[],searchTopic:"",totalResults:"",loading:!1,apiError:""},e.searchForTopic=function(){var t=Object(h.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,g(a);case 4:n=t.sent,e.setState({articles:n.articles,searchTopic:a,totalResults:n.totalResults}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({apiError:"Could not find any articles"});case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,this.setState({articles:t.articles}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({apiError:"Could not find any articles"});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.preArticles,a=e.articles,n=e.apiError,c=e.loading,o=e.searchTopic,l=e.totalResults;return r.a.createElement(T.a,{className:"pages"},r.a.createElement(x.a,{as:"h2",style:{textAlign:"center",margin:20}},"Search for a news topic"),r.a.createElement(O,{searchForTopic:this.searchForTopic}),r.a.createElement("p",{style:{textAlign:"center"}},"Powered by"," ",r.a.createElement("a",{href:"https://newsapi.org/",target:"_blank",rel:"noopener noreferrer"},"NewsAPI.org")),c&&r.a.createElement("p",{style:{textAlign:"center"}},"Searching for articles..."),a.length>0&&r.a.createElement(x.a,{as:"h4",style:{textAlign:"center",margin:20}},"Found ",l,' articles on "',o,'"'),a.length>0&&r.a.createElement(N,{articles:a}),n&&r.a.createElement("p",null,"Could not fetch any articles. Please try again."),t.length>0&&r.a.createElement(N,{articles:t}))}}]),a}(r.a.Component),I=(a(197),a(154)),D=a.n(I),P=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("section",{className:"showcase"},r.a.createElement("div",{className:"video-container"},r.a.createElement("video",{autoPlay:"autoplay",muted:!0,loop:"loop",className:"myVideo"},r.a.createElement("source",{className:"myVideo",src:D.a,type:"video/mp4"}))),r.a.createElement("div",{className:"video-content"},r.a.createElement("h1",null,"Welcome to Newsy"),r.a.createElement("p",null,"This is a website created for you to stay updated on what's happening around the world. Our goal is to let everyone access news from anywhere anytime for free."),r.a.createElement(u.a,{className:"btn",style:{textDecoration:"none",color:"black",fontSize:"smaller"},offset:function(){return 110},href:"#news"},"Start Here"))),r.a.createElement("section",{id:"news"},r.a.createElement(A,null)))},B=a(90),F="b8b339cb458fb8bc4985ef3cc4e552a3",W="https://api.openweathermap.org/data/2.5/",_=function(){var e=Object(n.useState)(""),t=Object(B.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),l=Object(B.a)(o,2),i=l[0],s=l[1];return r.a.createElement("div",{className:"pages"},r.a.createElement("div",{className:"undefined"!=typeof i.main?i.main.temp>16?"weather warm":"weather cold":"weather"},r.a.createElement("main",null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){c(e.target.value),console.log(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(W,"weather?q=").concat(a,"&units=metric&APPID=").concat(F)).then((function(e){return e.json()})).then((function(e){s(e),c(""),console.log(e)}))}})),"undefined"!=typeof i.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},i.name,", ",i.sys.country),r.a.createElement("div",{className:"date"},new Intl.DateTimeFormat("en-GB",{weekday:"long",year:"numeric",month:"long",day:"2-digit",hour:"numeric",minute:"numeric"}).format())),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"}," ",Math.round(i.main.temp),"\xb0c"),r.a.createElement("div",{className:"weather-description"},i.weather[0].main))):r.a.createElement("div",{className:"weather-empty"},r.a.createElement("p",null,"Search for Weather by City")))))},J=a(155),R=a(225),z=a(228),K=a(224);function M(){var e=Object(J.a)(["\n  form {\n    width: auto;\n  }\n  button {\n    margin: 1vh;\n  }\n  .navbar {\n    background-color: #d9b5a5;\n  }\n  .navbar-default,\n  .collapsed {\n    border-color: white;\n    background-color: white;\n  }\n  .navbar-default,\n  .toggle {\n    background-color: white;\n  }\n  .navbar-brand,\n  .navbar-nav .nav-link {\n    color: white;\n    margin: 2vh 2vw 2vh 2vw;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-nav .nav-link {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .navbar-light .navbar-brand {\n    color: white;\n    &:hover {\n      color: #690505;\n    }\n  }\n  .dropdown {\n    color: black;\n    &:hover {\n      color: #690505;\n    }\n  }\n"]);return M=function(){return e},e}var q=a(156).a.div(M()),G=function(){var e=Object(n.useState)(!1),t=Object(B.a)(e,2),a=t[0],c=t[1];return r.a.createElement(q,null,r.a.createElement(R.a,{expand:"lg",fixed:"top",expanded:a},r.a.createElement(R.a.Brand,{href:"#/"},"Newsy"),r.a.createElement(R.a.Toggle,{"area-controls":"basic-navbar-nav",onClick:function(){return c(!a&&"expanded")}}),r.a.createElement(R.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(z.a,{className:"ml-auto"},r.a.createElement(z.a.Link,{href:"#/",onClick:function(){return c(!1)}},"Home"),r.a.createElement(z.a.Link,{href:"#/weather",onClick:function(){return c(!1)}},"Weather"),r.a.createElement(K.a,{title:"About Us",id:"basic-nav-dropdown"},r.a.createElement(K.a.Item,{target:"_blank",rel:"noopener noreferrer",href:"https://benjambo.github.io/portfolio/#/",onClick:function(){return c(!1)}},"Benjamin S."),r.a.createElement(K.a.Item,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Jepu32",onClick:function(){return c(!1)}},"Jere S."))))))},H=(a(203),function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(G,null),r.a.createElement("div",{className:"container"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:P}),r.a.createElement(i.a,{path:"/news",component:A}),r.a.createElement(i.a,{path:"/weather",component:_})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[183,1,2]]]);
//# sourceMappingURL=main.1a88213e.chunk.js.map