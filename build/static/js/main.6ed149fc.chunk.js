(this["webpackJsonpkanyarut-portfolio"]=this["webpackJsonpkanyarut-portfolio"]||[]).push([[0],{101:function(e,a,t){e.exports=t(356)},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},113:function(e,a,t){},347:function(e,a,t){},353:function(e,a,t){},356:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(90),i=t.n(r),c=(t(106),t(107),t(26)),s=t(13),o=t(14),m=t(16),d=t(15),p=(t(108),t(29),t(91)),u=t.n(p),E=t(92),h=t.n(E),v=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={menuOpen:!1},n}return Object(o.a)(t,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,a={container:{position:"absolute",top:0,left:0,zIndex:"99",opacity:.9,display:"flex",alignItems:"center",width:"100%",height:"8%",color:"white",fontFamily:"Lobster"},logo:{margin:"0 auto",marginTop:"8px"},body:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",height:"100vh",filter:this.state.menuOpen?"blur(2px)":null,transition:"filter 0.5s ease"}};return l.a.createElement("div",null,l.a.createElement("div",{style:a.logo},l.a.createElement("img",{src:h.a})),l.a.createElement("div",{style:a.container},l.a.createElement(b,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()},color:"white"})),l.a.createElement(g,{open:this.state.menuOpen},l.a.createElement(u.a,{animateIn:"bounceInRight",animateOut:"bounceOutLeft"},l.a.createElement(f,{onClick:function(){e.handleLinkClick()}},l.a.createElement("a",{href:"#backgroundWrapper",className:"nav-link text-light"},l.a.createElement("i",null,"Home",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement(f,{onClick:function(){e.handleLinkClick()}},l.a.createElement("a",{href:"#aboutMe",className:"nav-link text-light"},l.a.createElement("i",null,"About",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement(f,{onClick:function(){e.handleLinkClick()}},l.a.createElement("a",{href:"#skills",className:"nav-link text-light"},l.a.createElement("i",null,"Skills",l.a.createElement("span",{className:"sr-only"},"(current)")))),l.a.createElement(f,{onClick:function(){e.handleLinkClick()}},l.a.createElement("a",{href:"#contact",className:"nav-link text-light"},l.a.createElement("i",null,"Contact",l.a.createElement("span",{className:"sr-only"},"(current)")))))))}}]),t}(l.a.Component),f=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={hover:!1},n}return Object(o.a)(t,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this,a={container:{opacity:0,animation:"1s appear forwards",animationDelay:this.props.delay},menuItem:{fontFamily:'"Open Sans", sans-serif',fontSize:"1.5rem",padding:"1rem 0",margin:"0 5%",cursor:"pointer"},line:{width:"90%",height:"1px",background:"gray",margin:"0 auto"}};return l.a.createElement("div",{style:a.container},l.a.createElement("div",{style:a.menuItem,onMouseEnter:function(){e.handleHover()},onMouseLeave:function(){e.handleHover()},onClick:this.props.onClick},this.props.children),l.a.createElement("div",{style:a.line}))}}]),t}(l.a.Component),g=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={open:!!n.props.open&&n.props.open},n}return Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{position:"absolute",top:0,left:0,height:this.state.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"#001a1a",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2},menuList:{paddingTop:"15rem"}};return l.a.createElement("div",{style:e.container},this.state.open?l.a.createElement("div",{style:e.menuList},this.props.children):null)}}]),t}(l.a.Component),b=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={open:!!n.props.open&&n.props.open,color:n.props.color?n.props.color:"black"},n}return Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,a={container:{height:"150px",width:"150px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px"},line:{height:"4px",width:"35px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"8px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"8px"}};return l.a.createElement("div",{style:a.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},l.a.createElement("div",{style:Object(c.a)(Object(c.a)({},a.line),a.lineTop)}),l.a.createElement("div",{style:Object(c.a)(Object(c.a)({},a.line),a.lineMiddle)}),l.a.createElement("div",{style:Object(c.a)(Object(c.a)({},a.line),a.lineBottom)}))}}]),t}(l.a.Component),N=v,y=(t(54),t(55),t(43),t(42)),x=(t(113),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={droidX:0,mouseX:0,toTheRight:!0,speed:2,accelMod:1},n}return Object(o.a)(t,[{key:"handleMouseMove",value:function(e){this.setState({mouseX:e.pageX})}},{key:"handleSpeedChange",value:function(e){parseFloat(e.target.value)&&this.setState({speed:e.target.value})}},{key:"handleAccelChange",value:function(e){parseFloat(e.target.value)&&this.setState({accelMod:e.target.value})}},{key:"movement",value:function(){var e=this.state,a=e.droidX,t=e.mouseX,n=e.speed,l=e.accelMod;if(1!==Math.abs(Math.round(a)-t)){var r=t-a,i=Math.abs(r*l)/100;a<t?this.setState({droidX:a+n*i,toTheRight:!0}):this.setState({droidX:a-n*i,toTheRight:!1})}}},{key:"componentWillMount",value:function(){this.setState({mouseX:300})}},{key:"componentDidMount",value:function(){var e=this;document.addEventListener("mousemove",(function(a){return e.handleMouseMove(a)})),setInterval(this.movement.bind(this),1)}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("mousemove",(function(a){return e.handleMouseMove(a)}))}},{key:"render",value:function(){var e=this.state,a=e.droidX,t=e.mouseX,n=e.toTheRight;return l.a.createElement("div",null,l.a.createElement("div",{className:"bb8",style:{WebkitTransform:"translateX(".concat(a,"px)")}},l.a.createElement("div",{className:"antennas "+(n?"right":""),style:{WebkitTransform:"translateX(".concat((t-a)/25,"px) rotateZ(").concat((t-a)/80,"deg)")}},l.a.createElement("div",{className:"antenna short"}),l.a.createElement("div",{className:"antenna long"})),l.a.createElement("div",{className:"head",style:{WebkitTransform:"translateX(".concat((t-a)/15,"px) rotateZ(").concat((t-a)/25,"deg)")}},l.a.createElement("div",{className:"stripe one"}),l.a.createElement("div",{className:"stripe two"}),l.a.createElement("div",{className:"eyes "+(n?"right":"")},l.a.createElement("div",{className:"eye one"}),l.a.createElement("div",{className:"eye two"})),l.a.createElement("div",{className:"stripe detail "+(n?"right":"")},l.a.createElement("div",{className:"detail zero"}),l.a.createElement("div",{className:"detail zero"}),l.a.createElement("div",{className:"detail one"}),l.a.createElement("div",{className:"detail two"}),l.a.createElement("div",{className:"detail three"}),l.a.createElement("div",{className:"detail four"}),l.a.createElement("div",{className:"detail five"}),l.a.createElement("div",{className:"detail five"})),l.a.createElement("div",{className:"stripe three"})),l.a.createElement("div",{className:"ball",style:{WebkitTransform:"rotateZ(".concat(a/2,"deg)")}},l.a.createElement("div",{className:"lines one"}),l.a.createElement("div",{className:"lines two"}),l.a.createElement("div",{className:"ring one"}),l.a.createElement("div",{className:"ring two"}),l.a.createElement("div",{className:"ring three"})),l.a.createElement("div",{className:"shadow"})))}}]),t}(l.a.Component)),k=t(93),w=t.n(k),O=t(94),j=t.n(O),C=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"backgroundWrapper"},l.a.createElement("div",{className:"top-container"},l.a.createElement("div",null,l.a.createElement(y.a,{steps:["Hello \ud83d\udc4b",1500],loop:1/0,wrapper:"span",className:"myname"})),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(y.a,{steps:[" ",1500,"I am Kanyarut",4e3],wrapper:"span",className:"myname"})),l.a.createElement("div",null,l.a.createElement(y.a,{steps:[" ",1500," ",3e3,"IT Support Specialist \ud83e\uddd0",4e3,"Full Stack Developer \ud83e\udd13",2e3],loop:1/0,wrapper:"span",className:"jobTitle"})),l.a.createElement(j.a,{className:"particles",params:{particles:{number:{value:200,density:{enable:!1}},size:{value:3,random:!0,anim:{speed:4,size_min:.4}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}}),l.a.createElement(w.a,{id:"config-1",config:"particles/config-1.json",style:{width:"100%",height:"100%",opacity:"50px",color:{value:"#00FFFF"},line_linked:{color:{value:"#00FFFF"}}},className:"particles-class-name"}),l.a.createElement(x,null)),l.a.createElement("a",{href:"#aboutMe"},l.a.createElement("div",{className:"mouse_scroll"},l.a.createElement("div",{className:"mouse button"},l.a.createElement("div",{className:"wheel"})),l.a.createElement("div",null,l.a.createElement("span",{className:"m_scroll_arrows unu"}),l.a.createElement("span",{className:"m_scroll_arrows doi"}),l.a.createElement("span",{className:"m_scroll_arrows trei"})))))}}]),t}(l.a.Component),S=(t(347),t(95)),M=t.n(S),I=t(96),z=t.n(I),T=t(41),L=t(22),A=t.n(L),_=(t(349),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e={img:{borderRadius:"50%",height:"300px",width:"300px"}};return l.a.createElement("div",{id:"wrapper",style:e.wrapper},l.a.createElement("div",{className:"row no-gutters",id:"aboutMe"},l.a.createElement("div",{className:"col-md-2 mb-md-0 p-md-4"}),l.a.createElement("div",{className:"leftBg col-md-3 p-4 pl-md-4 shadow-lg p-3 mb-2 bg-white rounded"},l.a.createElement("div",null,l.a.createElement(A.a,{animation:"zoom-in",duration:100,delay:300},l.a.createElement("h1",null,"About Me"))),l.a.createElement(A.a,{animation:"fade-up-right"},l.a.createElement("img",{className:"img-fluid "+this.props.fadeIn,src:z.a,alt:"my picture",style:e.img}),l.a.createElement("div",{className:"col-xs-6 social1 text-center"},l.a.createElement("a",{href:"https://github.com/benbaba2525",target:"_blank"},l.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/kanyarut-pornamnuay-b9a2501a1/",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.facebook.com/ben.pornamnuay",target:"_blank"},l.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.instagram.com/benbaba2525/",target:"_blank"},l.a.createElement("i",{class:"fa fa-instagram","aria-hidden":"true"}))))),l.a.createElement("div",{className:"rightBg col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-2 bg-white rounded"},l.a.createElement("h5",{className:"text-dark"},l.a.createElement("h2",null,"I'm")," ",l.a.createElement("strong",null," Kanyarut Pornamnuay")),l.a.createElement("p",{className:"text-dark mt-5",style:{textAlign:"left"}},"Technical Support Specialist with a background in Computer Science, Database Management Certificate Program and Full Stack Development in Coding Bootcamp."),l.a.createElement("p",{className:"text-dark",style:{textAlign:"left"}},"For 8 years experience in IT support is wide and varied, including maintaining, troubleshooting, installing and configuring computer hardware, software, system, networks, printer and scanners. I have also provided IT help desk support and have developed excellent interpersonal skills as a result."),l.a.createElement("p",{className:"text-dark",style:{textAlign:"left"}},"Known as an innovative problem solver passionate about IT professional, with a focus on IT support for long-term professional growth and development."),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(T.AwesomeButton,{type:"secondary",style:{textAlign:"center"}},l.a.createElement("a",{target:"_blank",href:M.a,style:{color:"white"},download:"Resume.pdf"},"My Resume"))))),l.a.createElement("div",{className:"col-md-2 mb-md-0 p-md-4"}))}}]),t}(l.a.Component)),F=t(97),X=t.n(F),R=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"skills",style:{backgroundColor:"#333a3a",height:"100%",padding:"10px",zIndex:999}},l.a.createElement("div",{id:"particle-container"},l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement(A.a,{animation:"zoom-in",duration:300,delay:300},l.a.createElement("h1",{style:{padding:"15px",color:"whitesmoke"}},l.a.createElement("u",null,"Skills"))),l.a.createElement(A.a,{animation:"fade-left"},l.a.createElement("div",{className:"row no-gutters",id:"aboutMe"},l.a.createElement("div",{className:"col-md-5 p-4 pl-md-4 shadow-lg p-3 mb-5"},l.a.createElement("img",{className:"itpicture",src:X.a,alt:"my picture"})),l.a.createElement("div",{className:"col-md-7 p-4 pl-md-4 shadow-lg p-3 mb-5"},l.a.createElement("ul",null,l.a.createElement("li",{style:{fontSize:"15px",textAlign:"left",marginLeft:"5px",padding:"5px",color:"white"}},"Experienced with both PC and Macintosh computers. "),l.a.createElement("li",{style:{fontSize:"15px",textAlign:"left",marginLeft:"5px",padding:"5px",color:"white"}},"Experienced with Microsoft office (Power Point, Word, Excel) and Internet."),l.a.createElement("li",{style:{fontSize:"15px",textAlign:"left",marginLeft:"5px",padding:"5px",color:"white"}},"Knowledge in TCP/IP networking and routing protocols. "),l.a.createElement("li",{style:{fontSize:"15px",textAlign:"left",marginLeft:"5px",padding:"5px",color:"white"}},"Extensive network device experience."),l.a.createElement("li",{style:{fontSize:"15px",textAlign:"left",marginLeft:"5px",padding:"5px",color:"white"}},"Excellent skills in installing, maintaining and integrating network devices."),l.a.createElement("li",{style:{fontSize:"15px",textAlign:"left",marginLeft:"5px",padding:"5px",color:"white"}},"Profound understanding of LAN and WAN management and maintenance protocols."),l.a.createElement("li",{style:{fontSize:"15px",textAlign:"left",marginLeft:"5px",padding:"5px",color:"white"}},"Experienced with database management, RDBMS."),l.a.createElement("li",{style:{fontSize:"15px",textAlign:"left",marginLeft:"5px",padding:"5px",color:"white"}},"Experienced with HTML, CSS, JavaScript, SQL")))))))}}]),t}(l.a.Component),W=t(358),B=t(98),P=t.n(B),D=t(99),H=function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"contact",style:{backgroundColor:"#9bafaf",height:"100%",padding:"10px"}},l.a.createElement("div",{id:"particle-container"},l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement("div",{className:"particle"}),l.a.createElement(A.a,{animation:"zoom-in",duration:100,delay:300},l.a.createElement("h1",null,l.a.createElement("u",null,"Contact"))),l.a.createElement(A.a,{animation:"zoom-in",duration:300,delay:400},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-2 mb-md-0 p-md-4"}),l.a.createElement("div",{className:"col-md-5 col-sm-6 col-xs-6 p-4 pl-md-4 shadow-lg p-3 mb-5 mt-4 bg-dark rounded"},l.a.createElement("h5",{style:{padding:"12px",textAlign:"center",color:"whitesmoke"}},l.a.createElement("i",{class:"fa fa-comments-o","aria-hidden":"true",style:{fontSize:"30px",paddingRight:"10px"}}),"Drop Me a Line"),l.a.createElement(W.a,{onSubmit:function(e){e.preventDefault(),P.a.sendForm("service_x1ur0i2","template_fdw2yuz",e.target,"user_VwHOCy877hqVKMEpFkYCz").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()}},l.a.createElement(W.a.Group,null,l.a.createElement(W.a.Control,{type:"text",name:"name",placeholder:"Your Name"})),l.a.createElement("br",null),l.a.createElement(W.a.Group,{controlId:"exampleForm.ControlInput1"},l.a.createElement(W.a.Control,{type:"email",name:"email",placeholder:"name@example.com"})),l.a.createElement("br",null),l.a.createElement(W.a.Group,{controlId:"exampleForm.ControlTextarea1"},l.a.createElement(W.a.Control,{as:"textarea",name:"message",placeholder:"Your Message",rows:3})),l.a.createElement("br",null),l.a.createElement(T.AwesomeButton,{size:"medium",type:"secondary"},"Submit"))),l.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-6 p-4 pl-md-4 shadow-lg p-3 mb-5 mt-4 bg-dark rounded"},l.a.createElement("h5",{style:{padding:"12px",textAlign:"center",color:"whitesmoke"}},l.a.createElement("i",{class:"fa fa-map-marker","aria-hidden":"true",style:{fontSize:"30px",paddingRight:"10px"}}),"I'm Here"),l.a.createElement(D.a,{url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.9985158261982!2d-118.30159222858586!3d34.09521649515845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf554f29cfb3%3A0x44aa08da55395c45!2sNormandie%20%2F%20Fountain!5e0!3m2!1sen!2sus!4v1605249441898!5m2!1sen!2sus",width:"100%",height:"400",frameborder:"0",style:"border:0;",allowfullscreen:"","aria-hidden":"false",tabindex:"0"})),l.a.createElement("div",{className:"col-md-2 mb-md-0 p-md-4"})))))}}]),t}(l.a.Component),q=(t(353),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"col-xs-6 social text-center"},l.a.createElement("a",{href:"https://github.com/benbaba2525",target:"_blank"},l.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/kanyarut-pornamnuay-b9a2501a1/",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.facebook.com/ben.pornamnuay",target:"_blank"},l.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://www.instagram.com/benbaba2525/",target:"_blank"},l.a.createElement("i",{class:"fa fa-instagram","aria-hidden":"true"})),l.a.createElement("br",null),l.a.createElement("p",{className:"contactInfo"},l.a.createElement("i",{class:"fa fa-envelope-o","aria-hidden":"true"}),"benbaba2525@gmail.com")),l.a.createElement("div",{className:"footer-font text-center py-3"},l.a.createElement("span",{className:"footer-copyright"},"\xa9 2020 Copyright : "),"Kanyarut (Ben) Pornamnuay"))}}]),t}(l.a.Component)),K=t(100);var G=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(C,null),l.a.createElement(_,null),l.a.createElement(R,null),l.a.createElement(H,null),l.a.createElement(q,null),l.a.createElement(K.VerticleButton,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,a,t){},92:function(e,a,t){e.exports=t.p+"static/media/KP-logo.126d1211.png"},95:function(e,a,t){e.exports=t.p+"static/media/IT Resume.a17f08af.pdf"},96:function(e,a,t){e.exports=t.p+"static/media/mypicture.72f6fbc9.jpeg"},97:function(e,a,t){e.exports=t.p+"static/media/IT.caf6084f.png"}},[[101,1,2]]]);
//# sourceMappingURL=main.6ed149fc.chunk.js.map