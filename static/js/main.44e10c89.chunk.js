(this.webpackJsonpjwangwangj=this.webpackJsonpjwangwangj||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(25),a(26),a(16)),s=a(1);a(27),a(28);var i=function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement("a",{className:"NavBar-logo",href:"/"},"JANET ",r.a.createElement("b",null,"WANG")),r.a.createElement("nav",{className:"NavBar-nav"},r.a.createElement("a",{className:"NavBar-link",href:"/resume"},"Resume"),r.a.createElement("a",{className:"NavBar-link",href:"/projects"},"Projects"),r.a.createElement("a",{className:"NavBar-link",href:"https://github.com/jwangwangj",target:"_blank",rel:"noopener noreferrer"},"Github"),r.a.createElement("a",{className:"NavBar-link"},"Contact")))},m=a(14),u=a(15),p=a(19),g=a(18),d=(a(29),a(6)),h=a.n(d),E=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).props={code:h.a.bool,staticText:h.a.string,data:h.a.array},e.state={typedText:"",typing:!0,index:0},e.animate=function(){var t=e.props.data,a=e.state.index;e.typing(t[a])},e.typing=function(t){var a=0,n=setInterval((function(){var r=e.state.typing;t&&r&&a<=t.length?(e.setState({typedText:t.substring(0,a)}),a++):(setTimeout((function(){e.setState({typing:!1},e.deleting(a))}),2e3),clearInterval(n))}),32)},e.deleting=function(){var t=e.props.data,a=setInterval((function(){console.log(e.state.index);var n=e.state,r=n.index,c=n.typing,l=n.typedText,o=l.length-1;!c&&o>=0?e.setState({typedText:l.substring(0,o)}):(setTimeout((function(){e.setState({typing:!0,index:r<t.length?r+1:0},(function(){return e.typing(t[e.state.index])}))}),1e3),clearInterval(a))}),32)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.animate()}},{key:"componentWillUnmount",value:function(){this.setState({unmount:!0})}},{key:"render",value:function(){var e=this.props,t=e.code,a=e.staticText,n=this.state.typedText;return t?r.a.createElement("code",{className:"Typewriter"},a," ",n,r.a.createElement("span",{className:"blinking"},"|")):r.a.createElement("span",{className:"Typewriter"},a," ",n,r.a.createElement("span",{className:"blinking"},"|"))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"Landing"},r.a.createElement(i,null),r.a.createElement("div",{className:"Landing-content"},r.a.createElement("header",{className:"Landing-header"},r.a.createElement("p",null,r.a.createElement("code",null,"Hi I'm Janet :)")),r.a.createElement(E,{code:!0,staticText:"I'm a:",data:["software engineer","data scientist","cognitive science enthusiast","web developer"]}))))};a(32);var f=function(){return r.a.createElement("div",{className:"Projects"},r.a.createElement(i,null),r.a.createElement("header",{className:"Projects-header"},r.a.createElement("p",null,r.a.createElement("code",null,"Coming Soon")),r.a.createElement("a",{className:"App-link",href:"https://github.com/jwangwangj",target:"_blank",rel:"noopener noreferrer"},"jwangwangj")))};a(33);var N=function(){return r.a.createElement("div",{className:"Resume"},r.a.createElement(i,null),r.a.createElement("header",{className:"Resume-header"},r.a.createElement("p",null,r.a.createElement("code",null,"Coming Soon")),r.a.createElement("a",{className:"App-link",href:"https://github.com/jwangwangj",target:"_blank",rel:"noopener noreferrer"},"jwangwangj")))};function w(){return r.a.createElement(o.a,{basename:""},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(v,null)),r.a.createElement(s.a,{exact:!0,path:"/projects"},r.a.createElement(f,null)),r.a.createElement(s.a,{exact:!0,path:"/resume"},r.a.createElement(N,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.44e10c89.chunk.js.map