(this["webpackJsonpcard-currency"]=this["webpackJsonpcard-currency"]||[]).push([[0],{101:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(18),i=c.n(r),o=(c(75),c(55)),s=c(56),j=c(57),b=c(61),p=c(59),l=(c(76),c(23)),u=c(34),d=c(63),O=c(135),x=c(143),g=c(146),h=c(144),m=c(38),f=c(145),v=c(136),y=c(148),C=c(134),D=c(133),N=c(150),S=c(3);function k(e){return Object(S.jsxs)(y.a,{children:[Object(S.jsx)(D.a,{children:Object(S.jsx)(N.a,{src:e.currency.logo})}),Object(S.jsx)(C.a,{primary:e.currency.coin,secondary:e.currency.prices_updated})]})}var L=c(62),P=c(44),B="addCurrency",w=[];var G=Object(L.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.data;switch(c){case B:return[a].concat(Object(P.a)(e));default:return Object(P.a)(e)}})),_=Object(O.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function I(){var e=_(),t=G.getState();return Object(S.jsx)(v.a,{className:e.root,children:t.map((function(e){return Object(S.jsx)(k,{currency:e},e.coin)}))})}var M=c(147),R=c(137),U=c(138),A=c(141),E=c(140),K=c(139),F=c(142),T=Object(O.a)({root:{maxWidth:300,marginLeft:150}});function Y(e){var t=T(),c=G.getState(),a=n.a.useState(!1),r=Object(l.a)(a,2),i=r[0],o=r[1];return Object(S.jsxs)(R.a,{className:t.root,children:[Object(S.jsxs)(U.a,{children:[Object(S.jsx)(K.a,{component:"img",alt:c[e.page-1].coin,height:"300",width:"300",image:c[e.page-1].logo,title:"".concat(c[e.page-1].coin," Information")}),Object(S.jsxs)(E.a,{children:[Object(S.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:c[e.page-1].coin}),Object(S.jsxs)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:["Minimum fee: ".concat(c[e.page-1].minimum_fee),Object(S.jsx)("br",{}),"Minimum fee coin: ".concat(c[e.page-1].minimum_fee_coin),Object(S.jsx)("br",{}),"Minimum transaction: ".concat(c[e.page-1].minimum_transaction),Object(S.jsx)("br",{}),"Minimum transaction coin: ".concat(c[e.page-1].minimum_transaction_coin),Object(S.jsx)("br",{}),"Update Time: ".concat(c[e.page-1].prices_updated)]}),Object(S.jsxs)(m.a,{variant:"body2",color:"textSecondary",component:"p",style:{display:i?"block":"none"},children:["AED:"+c[e.page-1].prices.AED," ",Object(S.jsx)("br",{}),"BRL:"+c[e.page-1].prices.BRL," ",Object(S.jsx)("br",{}),"CAD:"+c[e.page-1].prices.CAD," ",Object(S.jsx)("br",{}),"CNY:"+c[e.page-1].prices.CNY," ",Object(S.jsx)("br",{}),"DKK:"+c[e.page-1].prices.DKK," ",Object(S.jsx)("br",{}),"EUR:"+c[e.page-1].prices.EUR," ",Object(S.jsx)("br",{}),"GBP:"+c[e.page-1].prices.GBP," ",Object(S.jsx)("br",{}),"HKD:"+c[e.page-1].prices.HKD," ",Object(S.jsx)("br",{}),"INR:"+c[e.page-1].prices.INR," ",Object(S.jsx)("br",{}),"JPY:"+c[e.page-1].prices.JPY," ",Object(S.jsx)("br",{}),"MXN:"+c[e.page-1].prices.MXN," ",Object(S.jsx)("br",{}),"PLN:"+c[e.page-1].prices.PLN," ",Object(S.jsx)("br",{}),"UGX:"+c[e.page-1].prices.UGX," ",Object(S.jsx)("br",{}),"USD:"+c[e.page-1].prices.USD]})]})]}),Object(S.jsx)(A.a,{children:Object(S.jsx)(F.a,{size:"small",color:"primary",onClick:function(){o(!i)},children:i?"Show Base":"Learn Price"})})]})}var J=Object(O.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2),marginLeft:180}}}}));function X(){var e=J(),t=n.a.useState(1),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(S.jsxs)("div",{className:e.root,children:[Object(S.jsx)(Y,{page:a}),Object(S.jsx)(M.a,{count:4,page:a,onChange:function(e,t){r(t)}})]})}var H=["children","value","index"];function W(e){var t=e.children,c=e.value,a=e.index,n=Object(d.a)(e,H);return Object(S.jsx)("div",Object(u.a)(Object(u.a)({role:"tabpanel",hidden:c!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},n),{},{children:c===a&&Object(S.jsx)(f.a,{p:3,children:Object(S.jsx)(m.a,{children:t})})}))}function z(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var q=Object(O.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function Q(){var e=q(),t=n.a.useState(0),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(S.jsxs)("div",{className:e.root,children:[Object(S.jsx)(x.a,{position:"static",children:Object(S.jsxs)(g.a,{value:a,onChange:function(e,t){r(t)},"aria-label":"simple tabs example",children:[Object(S.jsx)(h.a,Object(u.a)({label:"Currency List"},z(0))),Object(S.jsx)(h.a,Object(u.a)({label:"Currency Cards"},z(1)))]})}),Object(S.jsx)(W,{value:a,index:0,children:Object(S.jsx)(I,{})}),Object(S.jsx)(W,{value:a,index:1,children:Object(S.jsx)(X,{})})]})}var V=c(60),Z=c(33),$=c.n(Z),ee=function(e){Object(b.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isCurrencyGet:!1},e}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;if(!this.state.isCurrencyGet){var t=$.a.get("https://api.cryptapi.io/btc/info/"),c=$.a.get("https://api.cryptapi.io/eth/info/"),a=$.a.get("https://api.cryptapi.io/ltc/info/"),n=$.a.get("https://api.cryptapi.io/trx/info/");Promise.all([t,c,a,n]).then((function(t){var c,a,n=Object(o.a)(t);try{for(n.s();!(c=n.n()).done;){var r=c.value;console.log(r.data),G.dispatch((a=r.data,{type:B,data:a}))}}catch(i){n.e(i)}finally{n.f()}e.setState({isCurrencyGet:!0})}),(function(e){return alert("failt to get currency info",e)}))}}},{key:"render",value:function(){return Object(S.jsx)(V.a,{children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("h1",{children:"Your Fuse Inc React Dev Test"}),Object(S.jsx)(Q,{})]})})}}]),c}(a.Component),te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,151)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(ee,{}),document.getElementById("root")),G.subscribe((function(){i.a.render(Object(S.jsx)(ee,{}),document.getElementById("root"))})),te()},75:function(e,t,c){},76:function(e,t,c){}},[[101,1,2]]]);
//# sourceMappingURL=main.de780d08.chunk.js.map