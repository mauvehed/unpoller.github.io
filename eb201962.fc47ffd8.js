(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{102:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return o})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),l=(a(0),a(106)),i={id:"grafana",title:"Grafana"},c={unversionedId:"dependencies/grafana",id:"dependencies/grafana",isDocsHomePage:!1,title:"Grafana",description:"This page provides simple instructions on how to install Grafana.",source:"@site/docs/dependencies/grafana.md",slug:"/dependencies/grafana",permalink:"/docs/dependencies/grafana",version:"current",sidebar:"someSidebar",previous:{title:"Final Steps",permalink:"/docs/install/finish"},next:{title:"Prometheus",permalink:"/docs/dependencies/prometheus"}},o=[{value:"Plugins",id:"plugins",children:[]},{value:"Installing",id:"installing",children:[{value:"Linux",id:"linux",children:[]},{value:"macOS",id:"macos",children:[]},{value:"Docker",id:"docker",children:[]}]},{value:"Configuring",id:"configuring",children:[]}],s={toc:o};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This page provides simple instructions on how to install Grafana."),Object(l.b)("p",null,"You can find official instructions in the ",Object(l.b)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/installation/"},"Grafana Docs"),"."),Object(l.b)("p",null,"Grafana 7.4.0+ is recommended. Grafana 7.x or newer is required."),Object(l.b)("h2",{id:"plugins"},"Plugins"),Object(l.b)("p",null,"This application uses a few Grafana plugins. Install them. Grafana must be installed first, see below."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Clock"),Object(l.b)("li",{parentName:"ul"},"Discrete (InfluxDB only)"),Object(l.b)("li",{parentName:"ul"},"PieChart")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"grafana-cli plugins install grafana-clock-panel\ngrafana-cli plugins install natel-discrete-panel\ngrafana-cli plugins install grafana-piechart-panel\n")),Object(l.b)("p",null,"If you're running Grafana in Docker, pass this environment variable/value to Grafana to install the plugins:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel\n")),Object(l.b)("h2",{id:"installing"},"Installing"),Object(l.b)("p",null,"This will set it up on localhost:3000 with admin/admin login."),Object(l.b)("h3",{id:"linux"},"Linux"),Object(l.b)("h4",{id:"centos-7"},"CentOS 7"),Object(l.b)("p",null,"Get an RPM. ",Object(l.b)("a",{parentName:"p",href:"https://grafana.com/docs/installation/rpm/"},"https://grafana.com/docs/installation/rpm/")),Object(l.b)("h4",{id:"ubuntu-1804"},"Ubuntu 18.04"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'curl https://packages.grafana.com/gpg.key | sudo apt-key add -\nsudo apt install -y apt-transport-https\nsudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"\n\nsudo apt -y update && sudo apt -y install grafana\nsudo systemctl daemon-reload\nsudo systemctl start grafana-server\nsudo systemctl enable grafana-server.service\nsudo systemctl status grafana-server\n')),Object(l.b)("h3",{id:"macos"},"macOS"),Object(l.b)("p",null,"You need ",Object(l.b)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew"),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"brew install grafana\nbrew services restart grafana\nbrew services list\n")),Object(l.b)("h3",{id:"docker"},"Docker"),Object(l.b)("p",null,"Pull the container and run Grafana like this:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"docker pull grafana/grafana\ndocker run -p 3000:3000 \\\n-v /YOURLOCALPATH/grafana:/var/lib/grafana \\\n-e GF_INSTALL_PLUGINS=grafana-clock-panel,natel-discrete-panel,grafana-piechart-panel \\\ngrafana/grafana\n")),Object(l.b)("p",null,"Replace ",Object(l.b)("inlineCode",{parentName:"p"},"YOURLOCALPATH")," with a location for the data Grafana needs to write to disk."),Object(l.b)("h2",{id:"configuring"},"Configuring"),Object(l.b)("p",null,"To configure Grafana, you need to add a data source and import the dashboards.\nLearn how to do that in the ",Object(l.b)("a",{parentName:"p",href:"../install/finish"},"Final Steps"),"."))}p.isMDXComponent=!0},106:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return f}));var t=a(0),r=a.n(t);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},u=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=t,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||l;return a?r.a.createElement(f,c(c({ref:n},s),{},{components:a})):r.a.createElement(f,c({ref:n},s))}));function f(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<l;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);