(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0B1/":function(n,t,e){"use strict";e.r(t),e.d(t,"ProjectsModule",function(){return w});var i=e("ofXK"),o=e("fXoL"),s=e("jhN1"),a=e("oZWX"),c=e("1kSV");const r=["carousel"];function l(n,t){if(1&n&&(o.Nb(0,"div",5),o.Nb(1,"h3"),o.wc(2),o.Mb(),o.Mb(),o.Nb(3,"a",6),o.Nb(4,"div",7),o.Jb(5,"img",8),o.Mb(),o.Mb()),2&n){const n=o.ac().$implicit;o.wb(2),o.xc(null==n?null:n.title),o.wb(1),o.fc("href",null==n?null:n.source_code,o.oc),o.wb(2),o.fc("src",null==n?null:n.image,o.oc)("alt",null==n?null:n.description)}}function u(n,t){1&n&&o.uc(0,l,6,4,"ng-template",4)}function d(n,t){1&n&&(o.Nb(0,"main",9),o.Nb(1,"section"),o.Jb(2,"div"),o.Mb(),o.Nb(3,"section"),o.Jb(4,"div"),o.Mb(),o.Nb(5,"section"),o.Jb(6,"div"),o.Mb(),o.Mb())}let g=(()=>{class n{constructor(){this.paused=!1,this.unpauseOnArrow=!1,this.pauseOnIndicator=!0,this.pauseOnHover=!1,this.pauseOnFocus=!1,this.showNavigationArrows=!1,this.showNavigationIndicators=!0}togglePaused(){this.paused?this.carousel.cycle():this.carousel.pause(),this.paused=!this.paused}onSlide(n){this.unpauseOnArrow&&n.paused&&(n.source===c.e.ARROW_LEFT||n.source===c.e.ARROW_RIGHT)&&this.togglePaused(),this.pauseOnIndicator&&!n.paused&&n.source===c.e.INDICATOR&&this.togglePaused()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=o.Cb({type:n,selectors:[["app-slider"]],viewQuery:function(n,t){if(1&n&&o.rc(r,!0),2&n){let n;o.lc(n=o.Yb())&&(t.carousel=n.first)}},inputs:{slides:"slides"},decls:4,vars:7,consts:[[3,"showNavigationArrows","showNavigationIndicators","interval","pauseOnHover","pauseOnFocus","slide"],["carousel",""],[4,"ngFor","ngForOf"],[3,"ngIf"],["ngbSlide",""],[1,"carousel-caption"],["target","_blank","rel","nofollow noopener noreferrer",3,"href"],[1,"picsum-img-wrapper"],[3,"src","alt"],[1,"loading"]],template:function(n,t){1&n&&(o.Nb(0,"ngb-carousel",0,1),o.Xb("slide",function(n){return t.onSlide(n)}),o.uc(2,u,1,0,void 0,2),o.Mb(),o.uc(3,d,7,0,"ng-template",3)),2&n&&(o.fc("showNavigationArrows",t.showNavigationArrows)("showNavigationIndicators",t.showNavigationIndicators)("interval",2e3)("pauseOnHover",t.pauseOnHover)("pauseOnFocus",t.pauseOnFocus),o.wb(2),o.fc("ngForOf",t.slides),o.wb(1),o.fc("ngIf",0===t.slides.length))},directives:[c.a,i.i,i.j,c.d],styles:["img[_ngcontent-%COMP%]{height:400px;width:100%;object-fit:contain}.loading[_ngcontent-%COMP%]{display:flex;flex-direction:row}.loading[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{position:relative;margin:16px;background:green}.loading[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;bottom:0;width:20px;height:20px;background:#2894ff;border-radius:50%}.loading[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:first-child   div[_ngcontent-%COMP%]{animation:loading-animation .8s ease-out infinite}.loading[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]{animation:loading-animation .8s ease-out .1s infinite}.loading[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]:nth-child(3)   div[_ngcontent-%COMP%]{animation:loading-animation .8s ease-out .2s infinite}@keyframes loading-animation{0%{bottom:0}50%{bottom:50px}to{bottom:0}}"]}),n})(),b=(()=>{class n{constructor(n,t){this.titleService=n,this.apiService=t,this.slides=[],this.titleService.setTitle("Xaakla - Projects")}ngOnInit(){this.apiService.list()._subscribe(n=>{this.slides=[...this.slides,...n],console.log(this.slides)})}}return n.\u0275fac=function(t){return new(t||n)(o.Ib(s.b),o.Ib(a.a))},n.\u0275cmp=o.Cb({type:n,selectors:[["app-projects"]],decls:6,vars:1,consts:[[1,"container-page"],[1,"regular"],[1,"page-title","neon"],[1,"regular-main"],[3,"slides"]],template:function(n,t){1&n&&(o.Nb(0,"div",0),o.Nb(1,"div",1),o.Nb(2,"h1",2),o.wc(3," My Work "),o.Mb(),o.Nb(4,"div",3),o.Jb(5,"app-slider",4),o.Mb(),o.Mb(),o.Mb()),2&n&&(o.wb(5),o.fc("slides",t.slides))},directives:[g],styles:[""]}),n})();var p=e("tyNb");const h=[{path:"",component:b}];let f=(()=>{class n{constructor(){}}return n.\u0275mod=o.Gb({type:n}),n.\u0275inj=o.Fb({factory:function(t){return new(t||n)},imports:[[p.d.forChild(h)],p.d]}),n})();var v=e("PCNd");let w=(()=>{class n{}return n.\u0275mod=o.Gb({type:n}),n.\u0275inj=o.Fb({factory:function(t){return new(t||n)},imports:[[i.b,f,v.a]]}),n})()}}]);