(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0B1/":function(e,s,t){"use strict";t.r(s),t.d(s,"ProjectsModule",function(){return v});var i=t("ofXK"),n=t("fXoL"),r=t("jhN1"),o=t("oZWX"),c=t("1kSV");const l=["carousel"];function u(e,s){if(1&e&&(n.Nb(0,"div",4),n.Nb(1,"h3"),n.wc(2),n.Mb(),n.Mb(),n.Nb(3,"a",5),n.Nb(4,"div",6),n.Jb(5,"img",7),n.Mb(),n.Mb()),2&e){const e=n.ac().$implicit;n.wb(2),n.xc(null==e?null:e.title),n.wb(1),n.fc("href",null==e?null:e.source_code,n.oc),n.wb(2),n.fc("src",null==e?null:e.image,n.oc)("alt",null==e?null:e.description)}}function a(e,s){1&e&&n.uc(0,u,6,4,"ng-template",3)}let p=(()=>{class e{constructor(){this.paused=!1,this.unpauseOnArrow=!1,this.pauseOnIndicator=!1,this.pauseOnHover=!0,this.pauseOnFocus=!0}togglePaused(){this.paused?this.carousel.cycle():this.carousel.pause(),this.paused=!this.paused}onSlide(e){this.unpauseOnArrow&&e.paused&&(e.source===c.e.ARROW_LEFT||e.source===c.e.ARROW_RIGHT)&&this.togglePaused(),this.pauseOnIndicator&&!e.paused&&e.source===c.e.INDICATOR&&this.togglePaused()}}return e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=n.Cb({type:e,selectors:[["app-slider"]],viewQuery:function(e,s){if(1&e&&n.rc(l,!0),2&e){let e;n.lc(e=n.Yb())&&(s.carousel=e.first)}},inputs:{slides:"slides"},decls:3,vars:4,consts:[[3,"interval","pauseOnHover","pauseOnFocus","slide"],["carousel",""],[4,"ngFor","ngForOf"],["ngbSlide",""],[1,"carousel-caption"],["target","_blank","rel","nofollow noopener noreferrer",3,"href"],[1,"picsum-img-wrapper"],[3,"src","alt"]],template:function(e,s){1&e&&(n.Nb(0,"ngb-carousel",0,1),n.Xb("slide",function(e){return s.onSlide(e)}),n.uc(2,a,1,0,void 0,2),n.Mb()),2&e&&(n.fc("interval",2e3)("pauseOnHover",s.pauseOnHover)("pauseOnFocus",s.pauseOnFocus),n.wb(2),n.fc("ngForOf",s.slides))},directives:[c.a,i.i,c.d],styles:[""]}),e})(),d=(()=>{class e{constructor(e,s){this.titleService=e,this.apiService=s,this.name="Angular",this.slides=[{image:"https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",title:"Slider 1"}],this.projects=[],this.titleService.setTitle("Xaakla - Projects")}ngOnInit(){this.apiService.list()._subscribe(e=>{this.slides=[...this.slides,...e],console.log(this.slides)})}}return e.\u0275fac=function(s){return new(s||e)(n.Ib(r.b),n.Ib(o.a))},e.\u0275cmp=n.Cb({type:e,selectors:[["app-projects"]],decls:6,vars:1,consts:[[1,"container"],[1,"regular"],[1,"page-title","neon"],[1,"regular-main"],[3,"slides"]],template:function(e,s){1&e&&(n.Nb(0,"div",0),n.Nb(1,"div",1),n.Nb(2,"h1",2),n.wc(3," My Work "),n.Mb(),n.Nb(4,"div",3),n.Jb(5,"app-slider",4),n.Mb(),n.Mb(),n.Mb()),2&e&&(n.wb(5),n.fc("slides",s.slides))},directives:[p],styles:[""]}),e})();var b=t("tyNb");const h=[{path:"",component:d}];let f=(()=>{class e{constructor(){}}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(s){return new(s||e)},imports:[[b.d.forChild(h)],b.d]}),e})();var g=t("PCNd");let v=(()=>{class e{}return e.\u0275mod=n.Gb({type:e}),e.\u0275inj=n.Fb({factory:function(s){return new(s||e)},imports:[[i.b,f,g.a]]}),e})()}}]);