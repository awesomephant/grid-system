(this["webpackJsonpgrid-system"]=this["webpackJsonpgrid-system"]||[]).push([[0],[,,,,,,,,,function(t,e,s){t.exports=s(18)},,,,,function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i),a=s(8),r=s.n(a),l=(s(14),s(1)),o=s(2),p=s(4),c=s(3),h=s(6),d=s(5),u=(s(15),function(t){function e(t){var s;return Object(l.a)(this,e),(s=Object(p.a)(this,Object(c.a)(e).call(this,t))).handleChange=s.handleChange.bind(Object(h.a)(s)),s}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.props.updateSetting(this.props.id,parseFloat(t.target.value))}},{key:"render",value:function(){var t={left:this.props.value/this.props.max*100+"%"};return n.a.createElement("div",{className:"setting slider"},n.a.createElement("label",{htmlFor:this.props.id},this.props.title),n.a.createElement("div",{className:"slider-track"},n.a.createElement("input",{className:"slider-input",onChange:this.handleChange,name:this.props.id,type:"range",min:this.props.min,max:this.props.max,step:this.props.step,value:this.props.value}),n.a.createElement("div",{style:t,className:"slider-value"},n.a.createElement("input",{className:"value-input",onChange:this.handleChange,name:this.props.id,type:"number",min:this.props.min,max:this.props.max,step:this.props.step,value:this.props.value}))))}}]),e}(n.a.Component)),g=(s(16),function(t){function e(t){var s;return Object(l.a)(this,e),(s=Object(p.a)(this,Object(c.a)(e).call(this,t))).inputRef=n.a.createRef(),s.handleClick=s.handleClick.bind(Object(h.a)(s)),s.handleChange=s.handleChange.bind(Object(h.a)(s)),s}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){var e="checkbox"===t.target.type?t.target.checked:t.target.value;this.props.updateSetting(this.props.id,e)}},{key:"handleClick",value:function(t){this.inputRef.current.click()}},{key:"render",value:function(){return n.a.createElement("div",{className:"setting toggle"},n.a.createElement("label",{htmlFor:this.props.id},this.props.title||this.props.id),n.a.createElement("div",{"data-active":this.props.value,className:"toggle-body",onClick:this.handleClick},n.a.createElement("div",{className:"toggle-element"})),n.a.createElement("input",{ref:this.inputRef,onChange:this.handleChange,name:this.props.id,type:"checkbox",checked:this.props.value}))}}]),e}(n.a.Component)),m=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(p.a)(this,Object(c.a)(e).call(this))).state={selected:0},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){var e=this.props.id;this.props.updateSetting(e,t.target.value)}},{key:"render",value:function(){var t=this.props.options.map((function(t){return n.a.createElement("option",{key:"op-".concat(t),value:t},t)}));return n.a.createElement("div",{className:"setting dropdown"},n.a.createElement("label",{htmlFor:this.props.id},this.props.title),n.a.createElement("select",{value:this.props.value,id:this.props.id,onChange:this.handleChange},t))}}]),e}(n.a.Component),v=function(t){function e(t){var s;return Object(l.a)(this,e),(s=Object(p.a)(this,Object(c.a)(e).call(this,t))).handleClick=s.handleClick.bind(Object(h.a)(s)),s}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(){this.props.clickHandler()}},{key:"render",value:function(){var t=null;return t=!0===this.props.value?n.a.createElement("svg",{viewBox:"0 0 24 24"}," ",n.a.createElement("path",{d:"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"})):n.a.createElement("svg",{viewBox:"0 0 24 24"},"   ",n.a.createElement("path",{fill:"currentColor",d:"M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"})),n.a.createElement("button",{"data-locked":this.props.value,onClick:this.handleClick,className:"lockToggle"},t)}}]),e}(n.a.Component),C=function(t){function e(t){var s;return Object(l.a)(this,e),(s=Object(p.a)(this,Object(c.a)(e).call(this,t))).state={locked:!0,controlledSettings:[]},s.updateChildSetting=s.updateChildSetting.bind(Object(h.a)(s)),s.handleLockClick=s.handleLockClick.bind(Object(h.a)(s)),n.a.Children.map(s.props.children,(function(t){s.state.controlledSettings.push(t.props.id)})),s}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleLockClick",value:function(){!0===this.state.locked?this.setState({locked:!1}):this.setState({locked:!0})}},{key:"updateChildSetting",value:function(t,e){if(this.props.updateSetting(t,e),!0===this.state.locked)for(var s=0;s<this.state.controlledSettings.length;s++){var i=this.state.controlledSettings[s];console.log(t),console.log(i),i!==t&&this.props.updateSetting(i,e)}}},{key:"render",value:function(){var t=this,e=n.a.Children.map(this.props.children,(function(e){return n.a.cloneElement(e,{updateSetting:t.updateChildSetting})}));return n.a.createElement("div",{className:"setting sliderGroup"},n.a.createElement("span",null,this.props.title,n.a.createElement(v,{clickHandler:this.handleLockClick,value:this.state.locked})),e)}}]),e}(n.a.Component),b=function(t){function e(t){var s;return Object(l.a)(this,e),(s=Object(p.a)(this,Object(c.a)(e).call(this,t))).handleChange=s.handleChange.bind(Object(h.a)(s)),s}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleChange",value:function(t){this.props.updateSetting(this.props.id,t.target.value)}},{key:"render",value:function(){return n.a.createElement("div",{className:"setting text"},n.a.createElement("label",{htmlFor:this.props.id},this.props.title),n.a.createElement("input",{className:"text-input",onChange:this.handleChange,name:this.props.id,type:"text",value:this.props.value}))}}]),e}(n.a.Component),f=(s(17),function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"settings"},n.a.createElement("h2",null,"Grid System Type"),n.a.createElement(b,{updateSetting:this.props.updateSetting,value:this.props.settings.text,title:"Text",id:"text"}),n.a.createElement(g,{id:"showGrid",updateSetting:this.props.updateSetting,value:this.props.settings.showGrid,title:"Show Grid"}),n.a.createElement(m,{updateSetting:this.props.updateSetting,options:["circle","rect"],value:this.props.settings.elementShape,id:"elementShape",title:"Element Shape"}),n.a.createElement(C,{updateSetting:this.props.updateSetting,title:"Element Scale"},n.a.createElement(u,{value:this.props.settings.elementScaleX,title:"X",id:"elementScaleX",min:"0.01",max:"10",step:".1"}),n.a.createElement(u,{value:this.props.settings.elementScaleY,title:"Y",id:"elementScaleY",min:"0.01",max:"10",step:".1"})),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.elementRotation,title:"Element Rotation",id:"elementRotation",min:"0",max:"360",step:".1"}),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.gridSkew,title:"Grid Skew",id:"gridSkew",min:"-350",max:"350",step:".001"}),n.a.createElement(C,{updateSetting:this.props.updateSetting,title:"Grid Size"},n.a.createElement(u,{value:this.props.settings.cellHeight,title:"Height",id:"cellHeight",min:"5",max:"150",step:".001"}),n.a.createElement(u,{value:this.props.settings.cellWidth,title:"Width",id:"cellWidth",min:"5",max:"150",step:".001"})),n.a.createElement(u,{updateSetting:this.props.updateSetting,value:this.props.settings.spacing,title:"Grid Spacing",id:"spacing",min:"-150",max:"150",step:".001"}))}}]),e}(n.a.Component)),k={grids:{"6x8":{columns:6,rows:8,letters:{"/":"000001 000010 000100 001000 010000 010000 100000 100000",a:"011110 100001 100001 100001 111111 100001 100001 100001",b:"111110 100001 100001 111110 100001 100001 100001 111110",c:"011111 100000 100000 100000 100000 100000 100000 011111",d:"111110 100001 100001 100001 100001 100001 100001 111110",e:"011111 100000 100000 111111 100000 100000 100000 011111",f:"011111 100000 100000 111111 100000 100000 100000 100000",g:"011111 100000 100000 100111 100001 100001 100001 011110",h:"100001 100001 100001 111111 100001 100001 100001 100001",i:"111110 001000 001000 001000 001000 001000 001000 111110",j:"100000 100000 100000 100000 100001 100001 100001 011110",k:"100001 100010 100100 111000 101000 100100 100010 100001",l:"100000 100000 100000 100000 100000 100000 100000 011111",m:"100010 110110 101010 100010 100010 100010 100010 100010",n:"001100 010010 100001 100001 100001 100001 100001 100001",o:"011110 100001 100001 100001 100001 100001 100001 011110",p:"011110 100001 100001 100001 111110 100000 100000 100000",q:"011110 100001 100001 100001 101001 100101 100011 011100",r:"011110 100001 100001 100001 111110 100100 100010 100001",s:"011111 100000 100000 011110 000001 000001 000001 111110",t:"111110 001000 001000 001000 001000 001000 001000 001000",u:"100001 100001 100001 100001 100001 100001 100001 011110",v:"100001 100001 100001 100001 100001 100001 010010 001100",w:"100001 100001 100001 100001 100001 100001 101101 010010",x:"100001 010010 001100 001100 001100 001100 010010 100001",y:"100001 100001 100001 100001 111110 100000 100000 011111",z:"111111 000001 000010 000100 001000 010000 100000 111111"}}}},S=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return"circle"===this.props.shape?n.a.createElement("g",{transform:this.props.position},n.a.createElement("g",{transform:this.props.rotate},n.a.createElement("circle",{transform:this.props.transform,key:"element-"+this.props.id,className:"element",cx:this.props.width/2,cy:this.props.width/2,r:this.props.width}))):"rect"===this.props.shape?n.a.createElement("g",{transform:this.props.position},n.a.createElement("g",{transform:this.props.rotate},n.a.createElement("rect",{transform:this.props.transform,key:"element-"+this.props.id,className:"element",x:0,y:0,width:this.props.width,height:this.props.height}))):void 0}}]),e}(n.a.Component),E=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=[],e=[],s=[],i=k.grids[this.props.settings.gridID];if(this.props.settings.showGrid){for(var a=0;a<this.props.settings.gridRows;a++){var r=this.props.settings.gridSkew/(this.props.settings.gridRows-1)*a+this.props.x,l=a*this.props.settings.cellHeight+this.props.y,o=(this.props.settings.gridColumns-1)*this.props.settings.cellWidth+this.props.settings.gridSkew/(this.props.settings.gridRows-1)*a+this.props.x,p=a*this.props.settings.cellHeight+this.props.y;t.push(n.a.createElement("line",{vectorEffect:"non-scaling-stroke",key:"row-"+a,x1:r,y1:l,x2:o,y2:p}))}for(var c=0;c<this.props.settings.gridColumns;c++){var h=c*this.props.settings.cellWidth+this.props.x,d=this.props.y,u=c*this.props.settings.cellWidth+this.props.x+parseFloat(this.props.settings.gridSkew),g=(this.props.settings.gridRows-1)*this.props.settings.cellHeight+this.props.y;e.push(n.a.createElement("line",{vectorEffect:"non-scaling-stroke",key:"col-"+c,x1:h,y1:d,x2:u,y2:g}))}}for(var m=i.letters[this.props.g].replace(/ /g,"").split(""),v=0;v<m.length;v++){var C=Math.floor(v/i.columns),b=[v-C*i.columns,C],f=30*this.props.settings.elementScaleX,E=30*this.props.settings.elementScaleY,j=(b[0]*this.props.settings.cellWidth+this.props.settings.gridSkew/(this.props.settings.gridRows-1)*b[1]+this.props.x)/this.props.settings.elementScaleX,O=(b[1]*this.props.settings.cellHeight+this.props.y)/this.props.settings.elementScaleY,w="rotate(".concat(this.props.settings.elementRotation,", ").concat(j*this.props.settings.elementScaleX,", ").concat(O*this.props.settings.elementScaleY,")"),y="translate(".concat(-f/2," ").concat(-E/2,") scale(").concat(this.props.settings.elementScaleX," ").concat(this.props.settings.elementScaleY,") translate(").concat(j," ").concat(O,")");"1"===m[v]&&s.push(n.a.createElement(S,{key:"shape-".concat(v),shape:this.props.settings.elementShape,rotate:w,transform:y,width:30,height:30,id:v}))}return n.a.createElement("g",null,s,t,e)}}]),e}(n.a.Component),j=function(t){function e(t){var s;return Object(l.a)(this,e),(s=Object(p.a)(this,Object(c.a)(e).call(this,t))).state={width:0,height:0,editModeEnabled:!1,settings:{showGrid:!0,gridID:"6x8",gridColumns:6,gridRows:8,gridSkew:12,gridActive:!0,padding:100,elementScaleX:1.5,elementScaleY:1.5,elementRotation:20,elementShape:"circle",cellWidth:30,cellHeight:40,smoothing:10,spacing:17,text:"Space"}},s.updateSetting=s.updateSetting.bind(Object(h.a)(s)),s.updateWindowDimensions=s.updateWindowDimensions.bind(Object(h.a)(s)),window.addEventListener("resize",s.updateWindowDimensions),s}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.updateWindowDimensions()}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"updateSetting",value:function(t,e){this.setState((function(s){return null!==s.settings[t]?s.settings[t]=e:console.error("Attempted to update non-existing setting ".concat(t)),s}))}},{key:"render",value:function(){var t=this,e=this.state.settings.text.toLowerCase().split(""),s=this.state.settings.gridColumns*this.state.settings.cellWidth+30*this.state.settings.elementScaleX+this.state.settings.spacing,i=this.state.settings.gridRows*this.state.settings.cellHeight,a=this.state.width/1.92-s/2*e.length,r=this.state.height/2-i/2,l=e.map((function(e,i){if(k.grids[t.state.settings.gridID].letters[e]){var l=a+s*i,o=r;return n.a.createElement(E,{key:"glyph-".concat(i),settings:t.state.settings,g:e,y:o,x:l})}return null}));return n.a.createElement("div",null,n.a.createElement("svg",{className:"testPreview",width:this.state.width,height:this.state.height},l),n.a.createElement(f,{updateSetting:this.updateSetting,settings:this.state.settings}))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.77645ab8.chunk.js.map