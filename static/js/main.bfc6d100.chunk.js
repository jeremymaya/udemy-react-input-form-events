(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{46:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(2),s=n.n(r),c=n(18),i=n.n(c),o=n(9),u=n.n(o),l=n(19),m=n(3),p=n(4),h=n(6),j=n(5),b=n(20);n.n(b).a.config({silent:!0});var f=n(21),v=n.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID ".concat("OK8Fv9BoOnHYsyDgZQAtytLwqeN-4tj6voNSG42VKKk")}}),d=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.term)},t}return Object(p.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{className:"ui segment",children:Object(a.jsx)("form",{onSubmit:function(e){return t.onFormSubmit(e)},className:"ui form",children:Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{children:"Image Search"}),Object(a.jsx)("input",{type:"text",value:this.state.term,onChange:function(e){return t.setState({term:e.target.value})}})]})})})}}]),n}(s.a.Component),O=(n(46),function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(m.a)(this,n),(a=e.call(this,t)).setSpans=function(){var t=a.imageRef.current.clientHeight,e=Math.ceil(t/10+1);a.setState({spans:e})},a.state={spans:0},a.imageRef=s.a.createRef(),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var t=this.props.image,e=t.description,n=t.urls;return Object(a.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(a.jsx)("img",{src:n.regular,alt:e,ref:this.imageRef})})}}]),n}(s.a.Component)),g=function(t){var e=t.images.map((function(t){return Object(a.jsx)(O,{image:t},t.id)}));return Object(a.jsx)("div",{className:"image-list",children:e})},x=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={images:[]},t.onSearchSubmit=function(){var e=Object(l.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/search/photos",{params:{query:n}});case 2:a=e.sent,t.setState({images:a.data.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(a.jsx)(d,{onSubmit:this.onSearchSubmit}),Object(a.jsx)(g,{images:this.state.images})]})}}]),n}(s.a.Component);i.a.render(Object(a.jsx)(x,{}),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.bfc6d100.chunk.js.map