(this["webpackJsonpgrid-system"]=this["webpackJsonpgrid-system"]||[]).push([[0],[,,,,,,,function(t){t.exports=JSON.parse('{"grids":{"3x4":{"columns":3,"rows":4,"letters":{"0":"110101101011","9":"111101111001","A":"010101111101","B":"110111101111","C":"111100100111","D":"110101101110","E":"111111100011","F":"111100111100","G":"011100101011","H":"101111101101","s":"000000000000","g":"000000000000","b":"000000000000","X":"000000000000","\xa3":"000000000000","=":"111000111000","-":"000000111000","+":"000010111010"}},"6x8":{"columns":6,"rows":8,"letters":{"A":"111111 111110 000000 000000 000000 000000 000000 000001"}}}}')},,,,function(t,e,s){t.exports=s(21)},,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i),a=s(10),r=s.n(a),o=(s(16),s(8)),p=s(1),l=s(2),c=s(4),h=s(3),g=s(6),d=s(5),u=(s(17),function(t){function e(t){var s;return Object(p.a)(this,e),(s=Object(c.a)(this,Object(h.a)(e).call(this,t))).handleChange=s.handleChange.bind(Object(g.a)(s)),s}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){this.props.updateSetting(this.props.id,parseFloat(t.target.value))}},{key:"render",value:function(){var t={left:this.props.value/this.props.max*100+"%"};return n.a.createElement("div",{className:"setting slider"},n.a.createElement("label",{htmlFor:this.props.id},this.props.title),n.a.createElement("div",{className:"slider-track"},n.a.createElement("input",{className:"slider-input",onChange:this.handleChange,name:this.props.id,type:"range",min:this.props.min,max:this.props.max,step:this.props.step,value:this.props.value}),n.a.createElement("div",{style:t,className:"slider-value"},n.a.createElement("input",{className:"value-input",onChange:this.handleChange,name:this.props.id,type:"number",min:this.props.min,max:this.props.max,step:this.props.step,value:this.props.value}))))}}]),e}(n.a.Component)),m=(s(18),n.a.Component,function(t){function e(){var t;return Object(p.a)(this,e),(t=Object(c.a)(this,Object(h.a)(e).call(this))).state={selected:0},t.handleChange=t.handleChange.bind(Object(g.a)(t)),t}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){var e=this.props.id;this.props.updateSetting(e,t.target.value)}},{key:"render",value:function(){var t=this.props.options.map((function(t){return n.a.createElement("option",{key:"op-".concat(t),value:t},t)}));return n.a.createElement("div",{className:"setting dropdown"},n.a.createElement("label",{htmlFor:this.props.id},this.props.title),n.a.createElement("select",{value:this.props.value,id:this.props.id,onChange:this.handleChange},t))}}]),e}(n.a.Component)),v=function(t){function e(t){var s;return Object(p.a)(this,e),(s=Object(c.a)(this,Object(h.a)(e).call(this,t))).handleClick=s.handleClick.bind(Object(g.a)(s)),s}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleClick",value:function(){this.props.clickHandler()}},{key:"render",value:function(){var t=null;return t=!0===this.props.value?n.a.createElement("svg",{viewBox:"0 0 24 24"}," ",n.a.createElement("path",{d:"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"})):n.a.createElement("svg",{viewBox:"0 0 24 24"},"   ",n.a.createElement("path",{fill:"currentColor",d:"M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"})),n.a.createElement("button",{"data-locked":this.props.value,onClick:this.handleClick,className:"lockToggle"},t)}}]),e}(n.a.Component),C=(n.a.Component,function(t){function e(t){var s;return Object(p.a)(this,e),(s=Object(c.a)(this,Object(h.a)(e).call(this,t))).handleChange=s.handleChange.bind(Object(g.a)(s)),s}return Object(d.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){this.props.updateSetting(this.props.id,t.target.value)}},{key:"render",value:function(){return n.a.createElement("div",{className:"setting text"},n.a.createElement("label",{htmlFor:this.props.id},this.props.title),n.a.createElement("input",{className:"text-input",onChange:this.handleChange,name:this.props.id,type:"text",value:this.props.value}))}}]),e}(n.a.Component)),b=(s(19),function(t){function e(){return Object(p.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"settings"},n.a.createElement(C,{updateSetting:this.props.updateSetting,value:this.props.settings.text,title:"Text",id:"text"}),n.a.createElement(m,{updateSetting:this.props.updateSetting,options:["circle","rect"],value:this.props.settings.elementShape,id:"elementShape",title:"Element Shape"}),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.elementScaleX,title:"Element Scale X",id:"elementScaleX",min:"0.01",max:"10",step:".1"}),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.elementScaleY,title:"Element Scale Y",id:"elementScaleY",min:"0.01",max:"10",step:".1"}),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.elementRotation,title:"Element Rotation",id:"elementRotation",min:"0",max:"360",step:".1"}),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.gridSkew,title:"Grid Skew",id:"gridSkew",min:"-350",max:"350",step:".001"}),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.cellHeight,title:"Cell Height",id:"cellHeight",min:"5",max:"150",step:".001"}),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.cellWidth,title:"Cell Width",id:"cellWidth",min:"5",max:"150",step:".001"}),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.spacing,title:"Spacing",id:"spacing",min:"-150",max:"150",step:".001"}))}}]),e}(n.a.Component)),f={grids:{"6x8":{columns:6,rows:8,letters:{a:"011110 100001 100001 100001 111111 100001 100001 100001",b:"111110 100001 100001 111110 100001 100001 100001 111110",c:"011111 100000 100000 100000 100000 100000 100000 011111",d:"111110 100001 100001 100001 100001 100001 100001 111110",e:"011111 100000 100000 111111 100000 100000 100000 011111",f:"011111 100000 100000 111111 100000 100000 100000 100000",g:"011111 100000 100000 100111 100001 100001 100001 011110",h:"100001 100001 100001 111111 100001 100001 100001 100001",i:"111110 001000 001000 001000 001000 001000 001000 111110",j:"100000 100000 100000 100000 100001 100001 100001 011110",k:"100001 100010 100100 111000 101000 100100 100010 100001",l:"100000 100000 100000 100000 100000 100000 100000 011111",m:"100010 110110 101010 100010 100010 100010 100010 100010",n:"001100 010010 100001 100001 100001 100001 100001 100001",o:"011110 100001 100001 100001 100001 100001 100001 011110",p:"011110 100001 100001 100001 111110 100000 100000 100000",q:"011110 100001 100001 100001 101001 100101 100011 011100",r:"011110 100001 100001 100001 111110 100100 100010 100001",s:"011111 100000 100000 011110 000001 000001 000001 111110",t:"111110 001000 001000 001000 001000 001000 001000 001000",u:"100001 100001 100001 100001 100001 100001 100001 011110",v:"100001 100001 100001 100001 100001 100001 010010 001100",w:"100001 100001 100001 100001 100001 100001 101101 010010",x:"100001 010010 001100 001100 001100 001100 010010 100001",y:"100001 100001 100001 100001 111110 100000 100000 011111",z:"111111 000001 000010 000100 001000 010000 100000 111111"}}}},S=function(t){function e(){return Object(p.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return"circle"===this.props.shape?n.a.createElement("g",{transform:this.props.position},n.a.createElement("g",{transform:this.props.rotate},n.a.createElement("circle",{transform:this.props.transform,key:"element-"+this.props.id,className:"element",cx:this.props.width/2,cy:this.props.width/2,r:this.props.width}))):"rect"===this.props.shape?n.a.createElement("g",{transform:this.props.position},n.a.createElement("g",{transform:this.props.rotate},n.a.createElement("rect",{transform:this.props.transform,key:"element-"+this.props.id,className:"element",x:0,y:0,width:this.props.width,height:this.props.height}))):void 0}}]),e}(n.a.Component),w=function(t){function e(){return Object(p.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=[],e=[],s=[],i=f.grids[this.props.settings.gridID];if(this.props.settings.gridActive){for(var a=0;a<this.props.settings.gridRows;a++){var r=this.props.settings.gridSkew/(this.props.settings.gridRows-1)*a+this.props.x,o=a*this.props.settings.cellHeight+this.props.y,p=(this.props.settings.gridColumns-1)*this.props.settings.cellWidth+this.props.settings.gridSkew/(this.props.settings.gridRows-1)*a+this.props.x,l=a*this.props.settings.cellHeight+this.props.y;t.push(n.a.createElement("line",{vectorEffect:"non-scaling-stroke",key:"row-"+a,x1:r,y1:o,x2:p,y2:l}))}for(var c=0;c<this.props.settings.gridColumns;c++){var h=c*this.props.settings.cellWidth+this.props.x,g=this.props.y,d=c*this.props.settings.cellWidth+this.props.x+parseFloat(this.props.settings.gridSkew),u=(this.props.settings.gridRows-1)*this.props.settings.cellHeight+this.props.y;e.push(n.a.createElement("line",{vectorEffect:"non-scaling-stroke",key:"col-"+c,x1:h,y1:g,x2:d,y2:u}))}}for(var m=i.letters[this.props.g].replace(/ /g,"").split(""),v=0;v<m.length;v++){var C=Math.floor(v/i.columns),b=[v-C*i.columns,C],w=30*this.props.settings.elementScaleX,E=30*this.props.settings.elementScaleY,j=(b[0]*this.props.settings.cellWidth+this.props.settings.gridSkew/(this.props.settings.gridRows-1)*b[1]+this.props.x)/this.props.settings.elementScaleX,O=(b[1]*this.props.settings.cellHeight+this.props.y)/this.props.settings.elementScaleY,k="rotate(".concat(this.props.settings.elementRotation,", ").concat(j*this.props.settings.elementScaleX,", ").concat(O*this.props.settings.elementScaleY,")"),y="translate(".concat(-w/2," ").concat(-E/2,") scale(").concat(this.props.settings.elementScaleX," ").concat(this.props.settings.elementScaleY,") translate(").concat(j," ").concat(O,")");"1"===m[v]&&s.push(n.a.createElement(S,{key:"shape-".concat(v),shape:this.props.settings.elementShape,rotate:k,transform:y,width:30,height:30,id:v}))}return n.a.createElement("g",null,s,t,e)}}]),e}(n.a.Component),E=s(7),j=(s(20),n.a.Component,function(t){function e(t){var s,i;return Object(p.a)(this,e),(i=Object(c.a)(this,Object(h.a)(e).call(this,t))).state={width:0,height:0,editModeEnabled:!1,settings:(s={gridID:"6x8",gridColumns:6,gridRows:8,gridSkew:12,gridActive:!0,padding:100,elementScaleX:1.5,elementScaleY:1.5,elementRotation:20,elementShape:"circle",smoothing:20,cellWidth:30,cellHeight:40},Object(o.a)(s,"smoothing",10),Object(o.a)(s,"spacing",17),Object(o.a)(s,"text","Space"),s)},i.updateSetting=i.updateSetting.bind(Object(g.a)(i)),i.updateWindowDimensions=i.updateWindowDimensions.bind(Object(g.a)(i)),window.addEventListener("resize",i.updateWindowDimensions),i}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions()}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"updateSetting",value:function(t,e){this.setState((function(s){return null!==s.settings[t]?s.settings[t]=e:console.error("Attempted to update non-existing setting ".concat(t)),s}))}},{key:"render",value:function(){var t=this,e=this.state.settings.text.toLowerCase().split(""),s=this.state.settings.gridColumns*this.state.settings.cellWidth+30*this.state.settings.elementScaleX+this.state.settings.spacing,i=this.state.settings.gridRows*this.state.settings.cellHeight,a=this.state.width/2-s/2*e.length,r=this.state.height/2-i/2,o=e.map((function(e,i){if(f.grids[t.state.settings.gridID].letters[e]){var o=a+s*i;return n.a.createElement(w,{key:"glyph-".concat(i),settings:t.state.settings,g:e,y:r,x:o})}}));this.state.settings.gridColumns,this.state.settings.cellWidth,Math.abs(this.state.settings.gridSkew),this.state.settings.elementScaleX,this.state.settings.gridRows,this.state.settings.cellHeight,this.state.settings.elementScaleY;return n.a.createElement("div",null,n.a.createElement("svg",{className:"testPreview",width:this.state.width,height:this.state.height},o),n.a.createElement(b,{updateSetting:this.updateSetting,settings:this.state.settings}))}}]),e}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.1aad7686.chunk.js.map