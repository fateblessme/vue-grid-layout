(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{317:function(t,a,e){},335:function(t,a,e){},336:function(t,a,e){},358:function(t,a,e){"use strict";e(317)},380:function(t,a,e){"use strict";e(335)},381:function(t,a,e){"use strict";e(336)},401:function(t,a,e){"use strict";var n={name:"Home",components:{NavLink:e(315).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},s=(e(358),e(26)),o=Object(s.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),e("div",[null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n              "+t._s(t.data.heroText||t.$title||"Hello")+"\n          ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description",domProps:{innerHTML:t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")}}):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),e("ClientOnly",[e("HomepageGrid")],1),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,n){return e("div",{key:n,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"})],1)}),[],!1,null,null,null);a.a=o.exports},404:function(t,a,e){"use strict";e.r(a);var n=e(400),s={name:"CarbonAds",watch:{$route:function(t,a){t.path!==a.path&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},mounted:function(){this.load()},methods:{load:function(){var t=document.createElement("script");t.id="_carbonads_js",t.src="//cdn.carbonads.com/carbon.js?serve=CEBITKQJ&placement=jbaysolutionsgithubio",this.$el.appendChild(t)}},render:function(t){return t("div",{class:"carbon-ads"})}},o=(e(380),e(26)),i=Object(o.a)(s,void 0,void 0,!1,null,null,null).exports,r={name:"Layout",components:{ParentLayout:n.a,CarbonAds:i}},c=(e(381),Object(o.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ParentLayout",{scopedSlots:t._u([{key:"sidebar-top",fn:function(){return[e("CarbonAds")]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[e("footer",{staticClass:"footer"},[t._v("\n            A product by:\n            "),e("a",{staticClass:"footer-card",attrs:{href:"https://www.jbaysolutions.com/",target:"_blank",rel:"noopener"}},[e("img",{attrs:{src:t.$withBase("/assets/img/logo-jbay.png"),alt:"JBay Solutions"}})])])]},proxy:!0}])})}),[],!1,null,"6394a605",null));a.default=c.exports}}]);