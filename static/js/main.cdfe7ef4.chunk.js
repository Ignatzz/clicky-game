(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,clicked:!1,image:"./img/1.jpg"},{id:2,clicked:!1,image:"./img/2.jpg"},{id:3,clicked:!1,image:"./img/3.jpg"},{id:4,clicked:!1,image:"./img/4.jpg"},{id:5,clicked:!1,image:"./img/5.jpg"},{id:6,clicked:!1,image:"./img/6.jpeg"},{id:7,clicked:!1,image:"./img/7.png"},{id:8,clicked:!1,image:"./img/8.png"},{id:9,clicked:!1,image:"./img/9.png"},{id:10,clicked:!1,image:"./img/10.jpg"},{id:11,clicked:!1,image:"./img/11.jpg"},{id:12,clicked:!1,image:"./img/12.png"}]},,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(2),r=a.n(n);a(15);var l=function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"navWide jumbotron"},c.a.createElement("div",{className:"wideDiv"},c.a.createElement("a",{href:"#"},"Home")),c.a.createElement("h1",{className:"text-center"},"Venture Bros Clicky Game!!!!")))},m=a(3),o=a(4),s=a(7),d=a(5),g=a(8),u=(a(16),function(e){return c.a.createElement("div",{className:"Cards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},c.a.createElement("img",{id:e.name,src:e.image,alt:"picture failed to load"}))}),h=a(6),k=(a(17),function(e){function t(){var e,a;Object(m.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={currentScore:0,highScore:0,images:h,message:"Click on any image to start the game! Try to click as many times without clicking the same image twice. <br> After each click the images will shuffle positions, so pay attention!"},a.handleClick=function(e,t){var i=a.state.images;if(t)return i.forEach(function(e,t){i[t].clicked=!1}),a.setState({image:i.sort(function(){return Math.random()-.5}),message:"Incorrect!",currentScore:0});i.forEach(function(t,a){e===t.id&&(i[a].clicked=!0)});var c=a.state,n=c.highScore,r=c.currentScore+1,l=r>n?r:n;return a.setState({image:i.sort(function(){return Math.random()-.5}),message:"Correct!",currentScore:r,highScore:l})},a}return Object(g.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid mainCardContainer"},c.a.createElement("div",{className:"infoDisplay text-center"},c.a.createElement("p",null,this.state.message)),c.a.createElement("div",{className:"scoreDisplay text-center"},c.a.createElement("p",null,"Current Score: ",this.state.currentScore,"     \xaf\\_(\u30c4)_/\xaf        High Score: ",this.state.highScore)),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},this.state.images.map(function(t){return c.a.createElement(u,{key:t.id,id:t.id,clicked:t.clicked,image:t.image,handleClick:e.handleClick})}))))}}]),t}(i.Component));var f=function(){return c.a.createElement("div",null,c.a.createElement(l,null),c.a.createElement(k,null))};r.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.cdfe7ef4.chunk.js.map