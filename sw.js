!(function(){"use strict";try{self["workbox:sw:7.0.0"]&&_()}catch(t){}const t={backgroundSync:"background-sync",broadcastUpdate:"broadcast-update",cacheableResponse:"cacheable-response",core:"core",expiration:"expiration",googleAnalytics:"offline-ga",navigationPreload:"navigation-preload",precaching:"precaching",rangeRequests:"range-requests",routing:"routing",strategies:"strategies",streams:"streams",recipes:"recipes",};self.workbox=new(class{constructor(){return((this.v={}),(this.Pt={debug:"localhost"===self.location.hostname,modulePathPrefix:null,modulePathCb:null,}),(this.$t=this.Pt.debug?"dev":"prod"),(this.jt=!1),new Proxy(this,{get(e,s){if(e[s])return e[s];const o=t[s];return o&&e.loadModule(`workbox-${o}`),e[s]},}))}setConfig(t={}){if(this.jt)throw new Error("Config must be set before accessing workbox.* modules");Object.assign(this.Pt,t),(this.$t=this.Pt.debug?"dev":"prod")}loadModule(t){const e=this.St(t);try{importScripts(e),(this.jt=!0)}catch(s){throw(console.error(`Unable to import module'${t}'from'${e}'.`),s)}}St(t){if(this.Pt.modulePathCb)return this.Pt.modulePathCb(t,this.Pt.debug);let e=["https://storage.googleapis.com/workbox-cdn/releases/7.0.0"];const s=`${t}.${this.$t}.js`,o=this.Pt.modulePathPrefix;return(o&&((e=o.split("/")),""===e[e.length-1]&&e.splice(e.length-1,1)),e.push(s),e.join("/"))}})()})();var cacheFiles=[{url:"/",revision:"v0",},];workbox.precaching.precacheAndRoute(cacheFiles);workbox.routing.registerRoute(/\.(?:css|woff|woff2|ttf|eot)(\?.*)?$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"css-fonts-cache-v2",}));workbox.routing.registerRoute(/\/static\/.*\.js(\?.*)?$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"js-cache-v2",}));workbox.routing.registerRoute(/\.json$/,new workbox.strategies.StaleWhileRevalidate({cacheName:"json-cache-v2",}));workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|ico|webp)$/,new workbox.strategies.CacheFirst({cacheName:"image-cache-v2",}));
