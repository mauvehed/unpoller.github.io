"use strict";(self.webpackChunkpollerdox=self.webpackChunkpollerdox||[]).push([[195],{4338:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(3117),r=n(7294);function l(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function o(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(a&&(a+=" "),a+=t);return a}var i=n(3285),s=n(9960),c=n(2263),m=n(4996),u={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i"};const g=[{title:"Easy to Use",imageUrl:"img/influxdb.png",description:r.createElement(r.Fragment,null,"UniFi Poller was designed from the ground up to be flexibly installed. It's a simple tool that provides a wealth of valuable data.")},{title:"Focus on What Matters",imageUrl:"img/prometheus.png",description:r.createElement(r.Fragment,null,"UniFi Poller lets you concentrate on what is happening in your network in an intuitive and visual way.")},{title:"Powered by Golang",imageUrl:"img/grafana.png",description:r.createElement(r.Fragment,null,"Built using powerful tools like Golang, with data stored in InfluxDB or Prometheus and presented using ready-to-go Grafana dashboards!")}];function d(e){let{imageUrl:t,title:n,description:a}=e;const l=(0,m.Z)(t);return r.createElement("div",{className:o("col col--4",u.feature)},l&&r.createElement("div",{className:"text--center"},r.createElement("img",{className:u.featureImage,src:l,alt:n})),r.createElement("h3",null,n),r.createElement("p",null,a))}var f=function(){const e=(0,c.Z)(),{siteConfig:t={}}=e;return r.createElement(i.Z,{title:"Go Lift",description:"Telemetry and Observability for your UniFi Network"},r.createElement("header",{className:o("hero hero--primary",u.heroBanner)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},r.createElement("img",{alt:"UniFi Poller",src:"img/logo.png"})),r.createElement("p",{className:"hero__subtitle"},t.tagline),r.createElement("div",{className:u.buttons},r.createElement(s.Z,{className:o("button button--outline button--secondary button--lg",u.getStarted),to:(0,m.Z)("docs/poller/introduction")},"Get Started")))),r.createElement("main",null,g&&g.length>0&&r.createElement("section",{className:u.features},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},g.map(((e,t)=>r.createElement(d,(0,a.Z)({key:t},e)))))))))}}}]);