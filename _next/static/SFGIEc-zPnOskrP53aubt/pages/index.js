(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"8oxB":function(e,r){var n,t,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(r){try{return n.call(null,e,0)}catch(r){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"===typeof clearTimeout?clearTimeout:s}catch(e){t=s}}();var c,i=[],_=!1,u=-1;function m(){_&&c&&(_=!1,c.length?i=c.concat(i):u=-1,i.length&&d())}function d(){if(!_){var e=l(m);_=!0;for(var r=i.length;r;){for(c=i,i=[];++u<r;)c&&c[u].run();u=-1,r=i.length}c=null,_=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===s||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function p(e,r){this.fun=e,this.array=r}function v(){}a.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];i.push(new p(e,r)),1!==i.length||_||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},BrB1:function(e,r,n){"use strict";var t=n("doui"),a=n("q1tI"),o=(n("oogm"),a.createElement);r.a=function(e){var r=e.children,n=e.onChange,s=a.useState(!1),l=Object(t.a)(s,2),c=l[0],i=l[1];return o("div",{className:"switcher",onClick:function(){i(!c),n(c)}},o("div",{className:"switcher__label"},r),o("div",{className:"switcher__inner".concat(c?" switcher__inner_enabled":"")},o("div",{className:"switcher__switch".concat(c?" switcher__switch_enabled":"")})))}},QeBL:function(e,r,n){"use strict";n.r(r);var t=n("q1tI"),a=n("w0Hc"),o=t.createElement;r.default=function(){return o(a.a,null)}},doui:function(e,r,n){"use strict";var t=n("p0XB"),a=n.n(t);var o=n("XXOK"),s=n.n(o),l=n("yLu3"),c=n.n(l);function i(e,r){return function(e){if(a()(e))return e}(e)||function(e,r){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],t=!0,a=!1,o=void 0;try{for(var l,i=s()(e);!(t=(l=i.next()).done)&&(n.push(l.value),!r||n.length!==r);t=!0);}catch(_){a=!0,o=_}finally{try{t||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(r,"a",function(){return i})},tHbw:function(e,r,n){"use strict";var t=n("doui"),a=n("q1tI"),o=(n("Lccz"),a.createElement),s=function(e){var r=e.dotsCount,n=e.step,s=a.useRef(null),l=a.useState(0),c=Object(t.a)(l,2),i=c[0],_=c[1];a.useEffect(function(){var e=s.current.clientWidth/(r-1);_(.5/(e/17))});for(var u=[],m=0;m<r;m++)u.push(o("div",{className:"progress-bar__circle",key:m},o("div",{className:"progress-bar__circle__inner".concat(n>m?" progress-bar__circle__inner_show":""),style:{animationDuration:"".concat(i,"s"),animationDelay:"".concat(n>1?.5:0,"s")}})));var d=Math.ceil(100/(r-1)*(n-1));return o("div",{className:"progress-bar",ref:s},u,o("div",{className:"progress-bar__path"},o("div",{className:"progress-bar__path__inner",style:{transform:"translateX(".concat(d,"%)"),transition:"".concat(.5,"s"),transitionTimingFunction:"linear"}})))};s.defaultProps={dotsCount:3,step:2},r.a=s},w0Hc:function(e,r,n){"use strict";(function(e){var t=n("q1tI"),a=n("tHbw"),o=n("BrB1"),s=(n("DmWa"),t.createElement),l=["coral","wine","pink","purple","raspberry","green","acid-green","light-green","yellow","sky-blue","blue","dark-blue"],c=e.env.ASSET_PREFIX?e.env.ASSET_PREFIX:"";r.a=function(){for(var e=[],r=0;r<5;r++)e.push(s("div",{key:r,className:"empty-hack-for-flexbox-space-between-last-line-problem"}));return s("div",{className:"container"},s("img",{src:"".concat(c,"/logo.svg")}),s(a.a,null),s("div",{className:"counter"},s("span",{className:"counter__name"},"\u0412\u0440\u0435\u043c\u044f \u043d\u0430 \u043a\u043e\u043d (\u043e\u0431\u044b\u0447\u043d\u044b\u0439)"),s("div",{className:"counter__inner"},s("div",{className:"counter__controllers controllers"},s("div",{className:"controllers__background-minus"},s("div",{className:"controllers__controller controllers__controller-minus"})),s("div",{className:"controllers__background-plus"},s("div",{className:"controllers__controller controllers__controller-plus"}))),s("div",{className:"counter__display counter-display"},s("div",{className:"counter-display__time"},"08"),s("div",{className:"counter-display__units"},"\u043c\u0438\u043d")))),s("div",{className:"counter"},s("span",{className:"counter__name"},"\u041c\u0435\u043d\u044c\u0448\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f"),s("div",{className:"counter__inner"},s("div",{className:"counter__controllers controllers"},s("div",{className:"controllers__background-minus controllers__background-minus_muted"},s("div",{className:"controllers__controller controllers__controller_muted controllers__controller-minus controllers__controller-minus_muted"})),s("div",{className:"controllers__background-plus"},s("div",{className:"controllers__controller controllers__controller-plus"}))),s("div",{className:"counter__display counter-display"},s("div",{className:"counter-display__time"},"01"),s("div",{className:"counter-display__units"},"\u043c\u0438\u043d")))),s("div",{className:"counter"},s("span",{className:"counter__name"},"\u0411\u043e\u043b\u044c\u0448\u0435 10 \u043d\u0435\u043b\u044c\u0437\u044f"),s("div",{className:"counter__inner"},s("div",{className:"counter__controllers controllers"},s("div",{className:"controllers__background-minus"},s("div",{className:"controllers__controller controllers__controller-minus"})),s("div",{className:"controllers__background-plus controllers__background-plus_muted"},s("div",{className:"controllers__controller controllers__controller_muted controllers__controller-plus controllers__controller-plus_muted"}))),s("div",{className:"counter__display counter-display"},s("div",{className:"counter-display__time"},"10")))),s("div",{className:"counter"},s("span",{className:"counter__name counter__name_muted"},"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u0435\u043d"),s("div",{className:"counter__inner"},s("div",{className:"counter__controllers controllers"},s("div",{className:"controllers__background-minus controllers__background-minus_muted"},s("div",{className:"controllers__controller controllers__controller_muted controllers__controller-minus controllers__controller-minus_muted"})),s("div",{className:"controllers__background-plus controllers__background-plus_muted"},s("div",{className:"controllers__controller controllers__controller_muted controllers__controller-plus controllers__controller-plus_muted"}))),s("div",{className:"counter__display counter-display counter-display_muted"},s("div",{className:"counter-display__time"},"?")))),s("div",{className:"random-option"},s("span",{className:"random-option__name"},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),s("div",{className:"random-option__inner"},s("img",{className:"random-option__image_selected",src:"".concat(c,"/dice.svg")}))),s("div",{className:"random-option"},s("span",{className:"random-option__name random-option__name_muted"},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u0430\u044f"),s("div",{className:"random-option__inner random-option__inner_muted"},s("img",{className:"random-option__image_muted",src:"".concat(c,"/dice-muted.svg")}))),s("div",{className:""},s("h1",{className:"header"},"\u0418\u0433\u0440\u043e\u043a\u0438"),s("p",{className:"paragraph paragraph_light"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0438\u0433\u0440\u043e\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 \u0438\u0433\u0440\u0435:"),s("div",{className:"players-list"},s("div",{className:"players-list__wrapper"},s("div",{className:"players-list__wrapper__inner"},l.map(function(e,r){return s("div",{className:"players-list__wrapper__inner__item",key:e},s("div",{className:"player"},s("div",{className:"player__image player__image_".concat(l[r])},s("img",{className:"player__image__icon",src:"".concat(c,"/player.svg")})),s("div",{className:"player__edit"},s("img",{className:"player__edit__icon",src:"".concat(c,"/edit.svg")})),s("p",{className:"player__name"},"Player"," ",r+1)))}),s("div",{className:"players-list__wrapper__inner__item"},s("button",{type:"button",className:"add-player-button"},s("img",{src:"".concat(c,"/add.svg")}))),e)))),s("div",{className:"container__bottom-buttons-block"},s("button",{type:"button",className:"additional-settings-link"},"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),s("button",{type:"button",className:"button button_action"},"\u0418\u0433\u0440\u0430\u0442\u044c"),s("button",{type:"button",className:"button button_action button_disabled"},"\u0418\u0433\u0440\u0430\u0442\u044c"),s("button",{type:"button",className:"button button_additional"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b"),s("button",{type:"button",className:"button button_additional"},"\u0412\u044b\u0439\u0442\u0438"),s("button",{type:"button",className:"button button_additional button_disabled"},"\u0412\u044b\u0439\u0442\u0438")),s("div",{className:"player-profile"},s("h1",{className:"header"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0438\u0433\u0440\u043e\u043a\u0430"),s("div",{className:"player-profile__inner"},s("div",{className:"player"},s("div",{className:"player__image player__image_big player__image_".concat(l[9])},s("img",{className:"player__image__icon player__image__icon_big",src:"".concat(c,"/player.svg")}))),s("div",{className:"player-profile__inner__input"},s("input",{className:"input-text",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430"})),s("div",{className:"player-profile__inner__remove-player"},s("div",{className:"remove-player"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430",s("img",{className:"remove-player__icon",src:"".concat(c,"/remove.svg")}))))),s("h1",{className:"header"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),s(o.a,{onChange:function(e){console.log(e)}},"\u0428\u043f\u0438\u043e\u043d\u044b \u0437\u043d\u0430\u043a\u043e\u043c\u044b"),s("div",null,s("h1",{className:"header"},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"),s("p",{className:"paragraph "},"\u0418\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u044f"),s("p",{className:"paragraph paragraph_extra-light paragraph_justify"},"\u0418\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0440\u0430\u0443\u043d\u0434\u043e\u0432. \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u0440\u0430\u0443\u043d\u0434\u0435 \u0438\u0433\u0440\u043e\u043a\u0438 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043b\u043e\u043a\u0430\u0446\u0438\u0438, \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u2014 \u0441\u0432\u043e\u0439 \u0441\u0442\u0430\u0442\u0443\u0441. \u041e\u0434\u0438\u043d \u043d\u0435\u0438\u0437\u0431\u0435\u0436\u043d\u043e \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0448\u043f\u0438\u043e\u043d\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0437\u043d\u0430\u0435\u0442, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f. \u0415\u0433\u043e \u0437\u0430\u0434\u0430\u0447\u0430 \u2014 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0438 \u043d\u0435 \u0440\u0430\u0437\u043e\u0431\u043b\u0430\u0447\u0438\u0442\u044c \u0441\u0435\u0431\u044f. \u041a\u0430\u0436\u0434\u044b\u0439 \u043d\u0435\u0448\u043f\u0438\u043e\u043d \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u0442\u0435\u043a\u0430\u0435\u043c\u043e \u0434\u0430\u0442\u044c \u043f\u043e\u043d\u044f\u0442\u044c \xab\u0441\u0432\u043e\u0438\u043c\xbb, \u0447\u0442\u043e \u0437\u043d\u0430\u0435\u0442, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f, \u0438 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0448\u043f\u0438\u043e\u043d\u043e\u043c. \u041d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u044c, \u0432\u044b\u0434\u0435\u0440\u0436\u043a\u0430, \u0445\u0438\u0442\u0440\u043e\u0441\u0442\u044c \u2014 \u0432 \u044d\u0442\u043e\u0439 \u0438\u0433\u0440\u0435 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u0441\u0451. \u0411\u0443\u0434\u044c\u0442\u0435 \u043d\u0430\u0447\u0435\u043a\u0443!")))}}).call(this,n("8oxB"))}},[["/EDR",0,1,7]]]);