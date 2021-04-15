(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(106)),i={id:"faq",title:"FAQs"},l={unversionedId:"poller/faq",id:"poller/faq",isDocsHomePage:!1,title:"FAQs",description:"What are the requirements?",source:"@site/docs/poller/faq.md",slug:"/poller/faq",permalink:"/docs/poller/faq",version:"current",sidebar:"someSidebar",previous:{title:"How it works",permalink:"/docs/poller/howitworks"},next:{title:"Other Guides",permalink:"/docs/poller/otherguides"}},s=[],c={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"What are the requirements?")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Grafana 7.4.0+ is recommended. Grafana 7.x or newer is required."),Object(a.b)("li",{parentName:"ul"},"InfluxDB 1.7.7 or newer is needed, if you choose to use InfluxDB."),Object(a.b)("li",{parentName:"ul"},"Prometheus 2.x if you choose to use Prometheus.")),Object(a.b)("p",null,"UniFi Poller has not been fully tested with InfluxDB 2.0 or newer. While InfluxDB\n2.0 may be able to scrape metrics from Poller, there are no pre-built dashboards\navailable to display the data."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Here's a great idea - show me the amount of WAN data I've used this month!")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Yes, it is a great idea. Sadly, this information is not produced by the UniFi controller.\nHowever, it should be possible to calculate it from the data already stored and work\nis on-going to produce something useful."),Object(a.b)("li",{parentName:"ul"},"If you have a method of doing this already then please share!")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Why is UniFi Poller showing me XXXX?")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Almost all of the time this is because it is what the controller is telling it!\nAlthough the UniFi controller has many strengths, it is not flawless,\nand the data that UniFi Poller shows on Grafana is only what it is given.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"UniFi Poller is showing me YYYY - what does this actually mean?")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Because UniFi Poller just picks up data from the controller using the API,\nthe only way of getting an accurate answer about what is shown is by asking UI themselves.\nGiven that they don't officially support the API there may be little chance of an answer")))}u.isMDXComponent=!0}}]);