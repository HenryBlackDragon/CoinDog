(this.webpackJsonpcoindog=this.webpackJsonpcoindog||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(17),a=c.n(i),o=(c(22),c(7)),s=c(3),u=c(4),l=c.n(u),d=c(5),j=c(6),b=c.n(j),h=r.a.createContext(),O=(c(42),c(43),c.p+"static/media/doge.f89c8be8.png"),f=c(0),v=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"logo",children:Object(f.jsx)("img",{src:O,alt:"doge",width:"46",height:"46"})}),Object(f.jsx)("span",{className:"logoTitle",children:"CoinDog"})]})},m=function(e){var t=e.walletCash;return Object(f.jsxs)("header",{children:[Object(f.jsx)("div",{className:"logo-container",children:Object(f.jsx)(v,{})}),Object(f.jsxs)("div",{className:"cash",children:[Object(f.jsx)("span",{children:"$"}),t.toFixed(2)]})]})},x=(c(45),function(e){var t=e.curShortName,c=e.onClickHandler,n="Buy 1 ".concat(t);return Object(f.jsx)("div",{className:"btn-container",children:Object(f.jsx)("button",{className:"fab_btn",title:n,onClick:c,children:"+"})})}),p=(c(46),function(e){var t=e.curName,c=e.curShortName,r=e.imgSrc,i=e.coins,a=e.curValue,o=(i*a).toFixed(2),s=Object(n.useContext)(h).updateWallet;return Object(f.jsxs)("div",{className:"currency",children:[Object(f.jsxs)("div",{className:"currency-header",children:[Object(f.jsx)("img",{src:r,alt:c,width:"32",height:"32"}),Object(f.jsx)("div",{className:"currency-name",children:t})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:"currency-value",children:i}),Object(f.jsx)("span",{children:c})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"$"}),Object(f.jsx)("span",{className:"currency-in-usd",children:o}),Object(f.jsx)("span",{children:"USD"})]}),Object(f.jsx)(x,{curShortName:c,onClickHandler:function(){return s(a,c)}})]})}),g=c.p+"static/media/bitcoin.d1874dde.png",C=c.p+"static/media/ethereum.119e0285.png",N=c.p+"static/media/litecoin.1982965d.png",w=(c(47),function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://api.coinlayer.com/api/live?access_key=6bd51985e32095f0e1b468f2955d2395&symbols=DOGE,BTC,ETH,LTC").then((function(e){t(e.data.rates)})).catch((function(e){console.error(e)}));case 2:case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=function(e){var t=e.wallet,c=Object(n.useState)(),r=Object(o.a)(c,2),i=r[0],a=r[1];return Object(n.useEffect)((function(){w(a)}),[]),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:"wallet",children:[Object(f.jsx)(p,{curName:"Dogecoin",curShortName:"DOGE",imgSrc:O,coins:(null===t||void 0===t?void 0:t.dogeCoin)||0,curValue:(null===i||void 0===i?void 0:i.DOGE)||0}),Object(f.jsx)(p,{curName:"Bitcoin",curShortName:"BTC",imgSrc:g,coins:(null===t||void 0===t?void 0:t.btcCoin)||0,curValue:(null===i||void 0===i?void 0:i.BTC)||0}),Object(f.jsx)(p,{curName:"Ethereum",curShortName:"ETH",imgSrc:C,coins:(null===t||void 0===t?void 0:t.ethCoin)||0,curValue:(null===i||void 0===i?void 0:i.ETH)||0}),Object(f.jsx)(p,{curName:"Litecoin",curShortName:"LTC",imgSrc:N,coins:(null===t||void 0===t?void 0:t.ltcCoin)||0,curValue:(null===i||void 0===i?void 0:i.LTC)||0})]})})},T=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/wallet").then((function(e){t(e.data)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("/wallet",t).then((function(e){console.log(e)})).catch((function(e){console.error(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(n.useRef)();Object(n.useEffect)((function(){T(r)}),[]),Object(n.useEffect)((function(){void 0!==i.current&&i.current!==c&&y(c)}),[c]),Object(n.useEffect)((function(){i.current=c}));return Object(f.jsxs)(h.Provider,{value:{updateWallet:function(e,t){if(c.cash-e<0)console.error("You don't have money!");else{var n=function(e,t){switch(t){case"DOGE":return Object(s.a)(Object(s.a)({},e),{},{dogeCoin:e.dogeCoin+1});case"BTC":return Object(s.a)(Object(s.a)({},e),{},{btcCoin:e.btcCoin+1});case"ETH":return Object(s.a)(Object(s.a)({},e),{},{ethCoin:e.ethCoin+1});case"LTC":return Object(s.a)(Object(s.a)({},e),{},{ltcCoin:e.ltcCoin+1});default:return Object(s.a)({},e)}}(c,t);r(Object(s.a)(Object(s.a)({},n),{},{cash:c.cash-e}))}}},children:[Object(f.jsx)(m,{walletCash:(null===c||void 0===c?void 0:c.cash)||0}),Object(f.jsx)(S,{wallet:c})]})},k=function(){return Object(f.jsx)(E,{})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),B()}},[[48,1,2]]]);
//# sourceMappingURL=main.d6f1019e.chunk.js.map