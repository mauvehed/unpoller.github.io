(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return t?i.a.createElement(m,l(l({ref:n},p),{},{components:t})):i.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(7),r=(t(0),t(104)),o={id:"linux",title:"Linux"},l={unversionedId:"install/linux",id:"install/linux",isDocsHomePage:!1,title:"Linux",description:"This page assumes that you have decided to install UniFi Poller on to an existing Linux operating system.",source:"@site/docs/install/linux.md",slug:"/install/linux",permalink:"/docs/install/linux",version:"current",sidebar:"someSidebar",previous:{title:"MacOS",permalink:"/docs/install/macos"},next:{title:"Windows",permalink:"/docs/install/windows"}},c=[{value:"Before this",id:"before-this",children:[]},{value:"Linux",id:"linux",children:[{value:"RedHat variants (CentOS, Fedora)",id:"redhat-variants-centos-fedora",children:[]},{value:"Debian variants (Ubuntu, Knoppix)",id:"debian-variants-ubuntu-knoppix",children:[]}]},{value:"Linux post-install",id:"linux-post-install",children:[]},{value:"Grafana Plugins",id:"grafana-plugins",children:[]},{value:"Next steps",id:"next-steps",children:[]}],p={toc:c};function s(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This page assumes that you have decided to install UniFi Poller on to an existing Linux operating system."),Object(r.b)("h2",{id:"before-this"},"Before this"),Object(r.b)("p",null,"Make sure you have set up a user on your controller for UniFi Poller to poll. You must have\na working (and supported) version of Grafana (though see the Plugins section below) and at\nleast one of InfluxDB or Prometheus. If you don't have then, follow these instructions for installing ",Object(r.b)("a",{parentName:"p",href:"../dependencies/influxdb"},"InfluxDB")," and ",Object(r.b)("a",{parentName:"p",href:"../dependencies/grafana"},"Grafana"),"."),Object(r.b)("h2",{id:"linux"},"Linux"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"JFrog Bintray shut down and package are no longer available from that repo.\nThese directions need updating. We are likely moving to packagcloud."))),Object(r.b)("p",null,"JFrog Bintray provides package hosting with RedHat, CentOS, Debian and Ubuntu repos.\nFollow these directions to configure the repo and install poller. The same package\nis in all the repos, but you can set the name to match your OS as shown below."),Object(r.b)("h3",{id:"redhat-variants-centos-fedora"},"RedHat variants (CentOS, Fedora)"),Object(r.b)("p",null,"Create a file at ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/yum.repos.d/golift.repo")," with the following contents. You may replace ",Object(r.b)("inlineCode",{parentName:"p"},"centos")," with ",Object(r.b)("inlineCode",{parentName:"p"},"el"),", but they're the same thing either way."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    [golift]\n    name=Go Lift Awesomeness - Main Repo\n    baseurl=https://dl.bintray.com/golift/centos/main/$basearch/\n    gpgcheck=1\n    repo_gpgcheck=1\n    enabled=1\n    sslverify=1\n    gpgkey=https://golift.io/gpgkey\n")),Object(r.b)("p",null,"Then install the package: ",Object(r.b)("inlineCode",{parentName:"p"},"sudo yum install unifi-poller"),"\nYou'll have to respond ",Object(r.b)("inlineCode",{parentName:"p"},"yes")," to the prompts to install the Go Lift GPG key."),Object(r.b)("h3",{id:"debian-variants-ubuntu-knoppix"},"Debian variants (Ubuntu, Knoppix)"),Object(r.b)("p",null,"Install the repo and package using the commands below.\nReplace ",Object(r.b)("inlineCode",{parentName:"p"},"ubuntu")," with ",Object(r.b)("inlineCode",{parentName:"p"},"debian")," if you have Debian."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    curl -s https://golift.io/gpgkey | sudo apt-key add -\n    echo deb https://dl.bintray.com/golift/ubuntu bionic main | sudo tee /etc/apt/sources.list.d/golift.list\n    sudo apt update\n    sudo apt install unifi-poller\n")),Object(r.b)("p",null,"Supported distributions:\n",Object(r.b)("inlineCode",{parentName:"p"},"xenial"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bionic"),", ",Object(r.b)("inlineCode",{parentName:"p"},"focal"),", ",Object(r.b)("inlineCode",{parentName:"p"},"jesse"),", ",Object(r.b)("inlineCode",{parentName:"p"},"stretch"),", ",Object(r.b)("inlineCode",{parentName:"p"},"buster"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bullseye"),"\nIf you have another distro, try one of these ^ (they're all the same)."),Object(r.b)("h2",{id:"linux-post-install"},"Linux post-install"),Object(r.b)("p",null,"See the ",Object(r.b)("a",{parentName:"p",href:"../install/configuration"},"Config file and Environment variables")," page and the example config file for additional post-install configuration information."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Edit the config file after installing the package, and correct the authentication information for your setup:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    sudo nano /etc/unifi-poller/up.conf\n")),Object(r.b)("p",null,"or"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    sudo vi /etc/unifi-poller/up.conf\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Do ",Object(r.b)("strong",{parentName:"p"},"not")," include ",Object(r.b)("inlineCode",{parentName:"p"},":8443")," on the url of the controller if you are using ",Object(r.b)("inlineCode",{parentName:"p"},"unifios")," (that is, a UDM-Pro, UDM, or Ckoudkey with modern firmware)"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Restart the service:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    sudo systemctl restart unifi-poller\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check the log:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    tail -f -n100  /var/log/syslog /var/log/messages | grep unifi-poller\n")),Object(r.b)("h2",{id:"grafana-plugins"},"Grafana Plugins"),Object(r.b)("p",null,"This application uses a few Grafana plugins. Install them:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Clock, Discrete (InfluxDB only), PieChart, Singlestat (standard), Table (standard)\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"grafana-cli plugins install grafana-clock-panel\ngrafana-cli plugins install natel-discrete-panel\ngrafana-cli plugins install grafana-piechart-panel\n")),Object(r.b)("h2",{id:"next-steps"},"Next steps"),Object(r.b)("p",null,"Go to the section ",Object(r.b)("a",{parentName:"p",href:"../install/finish"},"Final Steps"),"."))}s.isMDXComponent=!0}}]);