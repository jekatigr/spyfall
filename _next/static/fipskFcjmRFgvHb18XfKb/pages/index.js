(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"2Eek":function(e,t,n){e.exports=n("W7oM")},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7m0m":function(e,t,n){var a=n("Y7ZC"),r=n("uplh"),c=n("NsO/"),o=n("vwuL"),i=n("IP1Z");a(a.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,a=c(e),s=o.f,l=r(a),u={},_=0;l.length>_;)void 0!==(n=s(a,t=l[_++]))&&i(u,t,n);return u}})},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("8Kt/"),o=n.n(c),i=n("pLtp"),s=n.n(i),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=s()(t).reduce(function(n,a){var r=t[a];return n+("string"===typeof r?" ".concat(e,"_").concat(a,"-").concat(r):r?" ".concat(e,"_").concat(a):"")},""),r=n?" ".concat(n):"";return e+a+r},u=(n("hA7Y"),a.createElement),_=function(e){var t=e.type,n=e.disabled,a=e.className,r=e.children,c=e.onClick;return u("button",{type:"button",className:l("button",{type:t,disabled:n},a),onClick:c},r)};_.defaultProps={type:"action",disabled:!1};var d=_,m=function(e){return"".concat("/spyfall","/").concat(e)},p=n("hfKm"),v=n.n(p),f=n("2Eek"),g=n.n(f),N=n("XoMD"),y=n.n(N),T=n("Jo+v"),S=n.n(T),E=n("4mXO"),h=n.n(E);function b(e,t,n){return t in e?v()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("bCCX");var O=function(){return Math.random().toString(36).substring(7).split("").join(".")},w={INIT:"@@redux/INIT"+O(),REPLACE:"@@redux/REPLACE"+O(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+O()}};function k(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function A(e,t){var n=s()(e);if(h.a){var a=h()(e);t&&(a=a.filter(function(t){return S()(e,t).enumerable})),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(t){b(e,t,n[t])}):y.a?g()(e,y()(n)):A(Object(n)).forEach(function(t){v()(e,t,S()(n,t))})}return e}var P="START_SCREEN",C="RULES",x="SETTINGS",R="GAME",j={appState:P};function G(e,t){var n=s()(e);if(h.a){var a=h()(e);t&&(a=a.filter(function(t){return S()(e,t).enumerable})),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach(function(t){b(e,t,n[t])}):y.a?g()(e,y()(n)):G(Object(n)).forEach(function(t){v()(e,t,S()(n,t))})}return e}var M="ROLES_DISTRIBUTION",D="ROUND",U="DISCUSSION",F="RESULTS",Y={game:M};function X(e,t){var n=s()(e);if(h.a){var a=h()(e);t&&(a=a.filter(function(t){return S()(e,t).enumerable})),n.push.apply(n,a)}return n}var W={players:[]};function z(e,t){var n=s()(e);if(h.a){var a=h()(e);t&&(a=a.filter(function(t){return S()(e,t).enumerable})),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach(function(t){b(e,t,n[t])}):y.a?g()(e,y()(n)):z(Object(n)).forEach(function(t){v()(e,t,S()(n,t))})}return e}var K="PLAYERS",Z="SPIES",J="LOCATIONS",H="TIME_SETTINGS",q={settingsState:K},V=function(e){for(var t=Object.keys(e),n={},a=0;a<t.length;a++){var r=t[a];"function"===typeof e[r]&&(n[r]=e[r])}var c,o=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:w.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:w.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+w.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(i){c=i}return function(e,t){if(void 0===e&&(e={}),c)throw c;for(var a=!1,r={},i=0;i<o.length;i++){var s=o[i],l=n[s],u=e[s],_=l(u,t);if("undefined"===typeof _){var d=k(s,t);throw new Error(d)}r[s]=_,a=a||_!==u}return(a=a||o.length!==Object.keys(e).length)?r:e}}({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_APP_STATE_TO_START_SCREEN":return I({},e,{appState:P});case"SET_APP_STATE_TO_RULES":return I({},e,{appState:C});case"SET_APP_STATE_TO_SETTINGS":return I({},e,{appState:x});case"SET_APP_STATE_TO_GAME":return I({},e,{appState:R});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_GAME_STATE_TO_ROLES_DISTRIBUTIONS":return L({},e,{game:M});case"SET_GAME_STATE_TO_ROUND":return L({},e,{game:D});case"SET_GAME_STATE_TO_DISCUSSION":return L({},e,{game:U});case"SET_GAME_STATE_TO_RESULT":return L({},e,{game:F});default:return e}},playersInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PLAYERS":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach(function(t){b(e,t,n[t])}):y.a?g()(e,y()(n)):X(Object(n)).forEach(function(t){v()(e,t,S()(n,t))})}return e}({},e,{players:t.players});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;switch((arguments.length>1?arguments[1]:void 0).type){case"SET_SETTINGS_STATE_TO_PLAYERS":return B({},e,{settingsState:K});case"SET_SETTINGS_STATE_TO_SPIES":return B({},e,{settingsState:Z});case"SET_SETTINGS_STATE_TO_LOCATIONS":return B({},e,{settingsState:J});case"SET_SETTINGS_STATE_TO_TIME_SETTINGS":return B({},e,{settingsState:H});default:return e}}}),Q=r.a.createElement;function $(e,t){var n=s()(e);if(h.a){var a=h()(e);t&&(a=a.filter(function(t){return S()(e,t).enumerable})),n.push.apply(n,a)}return n}var ee=V(void 0,{type:"__INIT__"}),te=Object(a.createContext)({state:ee,dispatch:function(){}}),ne=te.Provider,ae=function(e){var t=e.children,n=Object(a.useReducer)(V,ee),r=n[0],c=n[1];return Q(ne,{value:{state:r,dispatch:c}},t)},re=function(){var e=Object(a.useContext)(te),t=e.state,n=e.dispatch;return{state:t,dispatch:function(e,t){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach(function(t){b(e,t,n[t])}):y.a?g()(e,y()(n)):$(Object(n)).forEach(function(t){v()(e,t,S()(n,t))})}return e}({type:e},t))}}},ce=a.createElement,oe=function(){var e=re().dispatch;return ce(a.Fragment,null,ce("img",{src:m("logo.svg")}),ce("div",{className:"container__bottom-buttons-block"},ce(d,{type:"action",onClick:function(){e("SET_APP_STATE_TO_SETTINGS"),e("SET_SETTINGS_STATE_TO_PLAYERS")}},"\u0418\u0433\u0440\u0430\u0442\u044c"),ce(d,{type:"additional",onClick:function(){return e("SET_APP_STATE_TO_RULES")}},"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b")))},ie=(n("bo+J"),a.createElement),se=function(e){var t=e.weight,n=e.align,a=e.hasMargin,r=e.className,c=e.children;return ie("p",{className:l("paragraph",{weight:t,align:n,"has-margin":a},r)},c)};se.defaultProps={hasMargin:!1};var le=se,ue=(n("5Yuj"),a.createElement),_e=function(e){var t=e.children;return ue("h1",{className:"header"},t)},de=a.createElement,me=function(){var e=re().dispatch;return de(a.Fragment,null,de(d,{onClick:function(){return e("SET_APP_STATE_TO_START_SCREEN")},type:"action"},"\u0421\u0442\u0440\u0435\u043b\u043e\u0447\u043a\u0430 \u043d\u0430\u0437\u0430\u0434"),de(_e,null,"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"),de(le,{hasMargin:!0},"\u0418\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u044f"),de(le,{weight:"extra-light",align:"justify",hasMargin:!0},"\u0418\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0440\u0430\u0443\u043d\u0434\u043e\u0432. \u0412 \u043a\u0430\u0436\u0434\u043e\u043c \u0440\u0430\u0443\u043d\u0434\u0435 \u0438\u0433\u0440\u043e\u043a\u0438 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043b\u043e\u043a\u0430\u0446\u0438\u0438, \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u2014 \u0441\u0432\u043e\u0439 \u0441\u0442\u0430\u0442\u0443\u0441. \u041e\u0434\u0438\u043d \u043d\u0435\u0438\u0437\u0431\u0435\u0436\u043d\u043e \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0448\u043f\u0438\u043e\u043d\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0437\u043d\u0430\u0435\u0442, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f. \u0415\u0433\u043e \u0437\u0430\u0434\u0430\u0447\u0430 \u2014 \u0440\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0445 \u0438\u0433\u0440\u043e\u043a\u043e\u0432, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043b\u043e\u043a\u0430\u0446\u0438\u044e \u0438 \u043d\u0435 \u0440\u0430\u0437\u043e\u0431\u043b\u0430\u0447\u0438\u0442\u044c \u0441\u0435\u0431\u044f. \u041a\u0430\u0436\u0434\u044b\u0439 \u041a\u0430\u0436\u0434\u044b\u0439 \u043d\u0435\u0448\u043f\u0438\u043e\u043d \u0432 \u0441\u0432\u043e\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u043e\u0431\u0442\u0435\u043a\u0430\u0435\u043c\u043e \u0434\u0430\u0442\u044c \u043f\u043e\u043d\u044f\u0442\u044c \xab\u0441\u0432\u043e\u0438\u043c\xbb, \u0447\u0442\u043e \u0437\u043d\u0430\u0435\u0442, \u0433\u0434\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f, \u0438 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0448\u043f\u0438\u043e\u043d\u043e\u043c. \u041d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u044c, \u0432\u044b\u0434\u0435\u0440\u0436\u043a\u0430, \u0445\u0438\u0442\u0440\u043e\u0441\u0442\u044c \u2014 \u0432 \u044d\u0442\u043e\u0439 \u0438\u0433\u0440\u0435 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u0441\u044f \u0432\u0441\u0451. \u0411\u0443\u0434\u044c\u0442\u0435 \u043d\u0430\u0447\u0435\u043a\u0443!"))},pe=n("p0XB"),ve=n.n(pe);var fe=n("XXOK"),ge=n.n(fe),Ne=n("yLu3"),ye=n.n(Ne);function Te(e,t){return function(e){if(ve()(e))return e}(e)||function(e,t){if(ye()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=ge()(e);!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(s){r=!0,c=s}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n("o6uu");var Se=a.createElement,Ee=function(e){var t=e.dotsCount,n=e.step,r=a.useRef(null),c=Te(a.useState(0),2),o=c[0],i=c[1];a.useEffect(function(){var e=r.current.clientWidth/(t-1);i(.5/(e/17))});for(var s=[],l=0;l<t;l++)s.push(Se("div",{className:"progress-bar__circle",key:l},Se("div",{className:"progress-bar__circle__inner".concat(n>l?" progress-bar__circle__inner_show":""),style:{animationDuration:"".concat(o,"s"),animationDelay:"".concat(n>1?.5:0,"s")}})));var u=Math.ceil(100/(t-1)*(n-1));return Se("div",{className:"progress-bar",ref:r},s,Se("div",{className:"progress-bar__path"},Se("div",{className:"progress-bar__path__inner",style:{transform:"translateX(".concat(u,"%)"),transition:"".concat(.5,"s"),transitionTimingFunction:"linear"}})))};Ee.defaultProps={dotsCount:3,step:2};var he=Ee,be=(n("L2gA"),a.createElement),Oe=function(e){var t=e.children,n=e.onClick;return be("button",{type:"button",className:"additional-settings-link",onClick:n},t)},we=(n("vFBz"),a.createElement),ke=function(e){var t=e.next,n=e.previous,r=e.children,c=n.props.className,o=t.props.className;return we("div",{className:"buttons-wizard"},r,we("div",{className:"buttons-wizard__button-wrapper buttons-wizard__button-wrapper_previous"},a.cloneElement(n,{className:"buttons-wizard__button".concat(" ".concat(c)||!1)})),we("div",{className:"buttons-wizard__button-wrapper buttons-wizard__button-wrapper_next"},a.cloneElement(t,{className:"buttons-wizard__button".concat(" ".concat(o)||!1)})))},Ae=(n("LWW3"),a.createElement),Ie=0,Pe=["coral","green","wine","dark-blue","pink","yellow","purple","raspberry","acid-green","light-green","sky-blue","blue"],Ce="",xe=function(){for(var e=re(),t=e.state.playersInfo.players,n=e.dispatch,r=Te(a.useState(!1),2),c=r[0],o=r[1],i=Te(a.useState(""),2),s=i[0],l=i[1],u=[],_=0;_<5;_++)u.push(Ae("div",{key:_,className:"empty-hack-for-flexbox-space-between-last-line-problem"}));var p;return c?p=Ae(a.Fragment,null,Ae(d,{onClick:function(){return o(!1)},type:"action"},"\u0421\u0442\u0440\u0435\u043b\u043e\u0447\u043a\u0430 \u043d\u0430\u0437\u0430\u0434"),Ae("div",{className:"player-profile"},Ae(_e,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0438\u0433\u0440\u043e\u043a\u0430"),Ae("div",{className:"player-profile__inner"},Ae("div",{className:"player"},Ae("div",{className:"player__image player__image_big player__image_".concat(Pe[10])},Ae("img",{className:"player__icon player__icon_big",src:m("player.svg")}))),Ae("div",{className:"player-profile__input"},Ae("input",{className:"input-text",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0438\u0433\u0440\u043e\u043a\u0430",value:s,onChange:function(e){return l(e.target.value)}})),""===Ce?"":Ae("div",{className:"player-profile__remove-player",onClick:function(){for(var e=t.slice(),a=0;a<t.length;++a)if(t[a].name===Ce)return e.splice(a,1),void n("UPDATE_PLAYERS",{players:e});o(!1)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430",Ae("img",{className:"player-profile__remove-icon",src:m("remove.svg")})),Ae(d,{onClick:function(){for(var e=0;e<t.length;++e){if(t[e].name===s)return;if(""===s)return}if(""===Ce){var a=Pe[Ie%Pe.length];Ie+=1;var r=t.slice();r.push({name:s,color:a}),n("UPDATE_PLAYERS",{players:r})}else for(var c=t.slice(),i=0;i<t.length;++i)t[i].name===Ce&&(c[i].name=s,n("UPDATE_PLAYERS",{players:c}));o(!1)},type:"action"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))):(Ce="",p=Ae(a.Fragment,null,Ae("div",{className:""},Ae(_e,null,"\u0418\u0433\u0440\u043e\u043a\u0438"),Ae(le,{weight:"light",hasMargin:!0},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0438\u0433\u0440\u043e\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 \u0438\u0433\u0440\u0435:"),Ae("div",{className:"players-list"},Ae("div",{className:"players-list__wrapper"},Ae("div",{className:"players-list__inner"},Ae("div",{className:"players-list__item"},Ae("button",{type:"button",className:"add-player-button",onClick:function(){l(""),o(!0)}},Ae("img",{src:m("add.svg")}))),t.map(function(e){return Ae("div",{className:"players-list__item",key:e.name},Ae("div",{className:"player"},Ae("div",{className:"player__image player__image_".concat(e.color)},Ae("img",{className:"player__icon",src:m("player.svg")})),Ae("div",{className:"edit player__edit",onClick:function(){Ce=e.name,l(e.name),o(!0)}},Ae("img",{src:m("edit.svg")})),Ae(le,{hasMargin:!0,className:"player__name"},e.name)))}),u)))),Ae(ke,{previous:Ae(d,{onClick:function(){return n("SET_APP_STATE_TO_START_SCREEN")},type:"additional"},"\u041d\u0430\u0437\u0430\u0434"),next:Ae(d,{onClick:function(){return n("SET_SETTINGS_STATE_TO_SPIES")},type:"action"},"\u0412\u043f\u0435\u0440\u0435\u0434")},Ae(Oe,{onClick:function(){return n("SET_SETTINGS_STATE_TO_TIME_SETTINGS")}},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438")))),Ae("div",null,p)},Re=(n("eYsS"),a.createElement),je=function(e){var t=e.children,n=e.onChange,r=Te(a.useState(!1),2),c=r[0],o=r[1];return Re("div",{className:"switcher",onClick:function(){o(!c),n(c)}},Re("div",{className:"switcher__label"},t),Re("div",{className:"switcher__inner".concat(c?" switcher__inner_enabled":"")},Re("div",{className:"switcher__switch".concat(c?" switcher__switch_enabled":"")})))},Ge=(n("HpYo"),a.createElement),Le=function(){var e=re().dispatch;return Ge(a.Fragment,null,Ge(_e,null,"\u0428\u043f\u0438\u043e\u043d\u044b"),Ge("div",{className:"random-option"},Ge("span",{className:"random-option__name"},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),Ge("div",{className:"option-circle random-option__inner"},Ge("img",{className:"random-option__image_selected",src:m("dice.svg")}))),Ge("div",{className:"random-option"},Ge("span",{className:"random-option__name random-option__name_muted"},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u0430\u044f \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u0430\u044f"),Ge("div",{className:"option-circle option-circle_muted random-option__inner"},Ge("img",{className:"random-option__image_muted",src:m("dice-muted.svg")}))),Ge(_e,null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),Ge(je,{onChange:function(e){console.log(e)}},"\u0428\u043f\u0438\u043e\u043d\u044b \u0437\u043d\u0430\u043a\u043e\u043c\u044b"),Ge(je,{onChange:function(){}},"\u0417\u0432\u0443\u043a"),Ge(ke,{previous:Ge(d,{onClick:function(){return e("SET_SETTINGS_STATE_TO_PLAYERS")},type:"additional"},"\u041d\u0430\u0437\u0430\u0434"),next:Ge(d,{onClick:function(){return e("SET_SETTINGS_STATE_TO_LOCATIONS")},type:"action"},"\u0412\u043f\u0435\u0440\u0435\u0434")},Ge(Oe,{onClick:function(){return e("SET_SETTINGS_STATE_TO_TIME_SETTINGS")}},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438")))},Me=(n("txpH"),a.createElement),De=function(){var e=re().dispatch;return Me(a.Fragment,null,Me("div",null,Me(_e,null,"\u041b\u043e\u043a\u0430\u0446\u0438\u0438"),Me(le,{weight:"light",hasMargin:!0},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u043b\u043e\u043a\u0430\u0446\u0438\u0439:"),Me("div",{className:"location-category"},Me("div",{className:"option-circle"},Me("img",{className:"option-circle__image location-category__basic-image_selected",src:m("basic.svg")})),Me("div",{className:"location-category__inner"},Me("span",{className:"location-category__name"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0435"),Me("div",{className:"location-category__edit"},Me("div",{className:"location-category__edit-text"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),Me("div",{className:"edit location-category__edit-icon"},Me("img",{src:m("edit.svg")}))))),Me("div",{className:"location-category"},Me("div",{className:"option-circle option-circle_muted"},Me("img",{className:"option-circle__image location-category__basic-image_muted",src:m("basic-muted.svg")})),Me("div",{className:"location-category__inner"},Me("span",{className:"location-category__name location-category__name_muted"},"\u0411\u0430\u0437\u043e\u0432\u044b\u0435 \u0432\u044b\u043a\u043b"),Me("div",{className:"location-category__edit"},Me("div",{className:"location-category__edit-text"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),Me("div",{className:"edit location-category__edit-icon"},Me("img",{src:m("edit.svg")}))))),Me("div",{className:"location-category"},Me("div",{className:"option-circle"},Me("img",{className:"option-circle__image location-category__custom-image_selected",src:m("custom.svg")})),Me("div",{className:"location-category__inner"},Me("span",{className:"location-category__name"},"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435"),Me("div",{className:"location-category__edit"},Me("div",{className:"location-category__edit-text"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),Me("div",{className:"edit location-category__edit-icon"},Me("img",{src:m("edit.svg")}))))),Me("div",{className:"location-category"},Me("div",{className:"option-circle option-circle_muted"},Me("img",{className:"option-circle__image location-category__custom-image_muted",src:m("custom-muted.svg")})),Me("div",{className:"location-category__inner"},Me("span",{className:"location-category__name location-category__name_muted"},"\u041a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0432\u044b\u043a\u043b"),Me("div",{className:"location-category__edit"},Me("div",{className:"location-category__edit-text"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"),Me("div",{className:"edit location-category__edit-icon"},Me("img",{src:m("edit.svg")})))))),Me(ke,{previous:Me(d,{onClick:function(){return e("SET_SETTINGS_STATE_TO_SPIES")},type:"additional"},"\u041d\u0430\u0437\u0430\u0434"),next:Me(d,{onClick:function(){return e("SET_APP_STATE_TO_GAME")},type:"action"},"\u0412\u043f\u0435\u0440\u0435\u0434")},Me(Oe,{onClick:function(){return e("SET_SETTINGS_STATE_TO_TIME_SETTINGS")}},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438")))},Ue=(n("tHLJ"),a.createElement),Fe=function(){return Ue(a.Fragment,null,Ue("div",{className:"counter"},Ue("span",{className:"counter__name"},"\u0412\u0440\u0435\u043c\u044f \u043d\u0430 \u043a\u043e\u043d (\u043e\u0431\u044b\u0447\u043d\u044b\u0439)"),Ue("div",{className:"counter__inner"},Ue("div",{className:"counter__controllers controllers"},Ue("div",{className:"controllers__background-minus"},Ue("div",{className:"controllers__controller controllers__controller-minus"})),Ue("div",{className:"controllers__background-plus"},Ue("div",{className:"controllers__controller controllers__controller-plus"}))),Ue("div",{className:"counter__display counter-display"},Ue("div",{className:"counter-display__time"},"08"),Ue("div",{className:"counter-display__units"},"\u043c\u0438\u043d")))),Ue("div",{className:"counter"},Ue("span",{className:"counter__name"},"\u041c\u0435\u043d\u044c\u0448\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f"),Ue("div",{className:"counter__inner"},Ue("div",{className:"counter__controllers controllers"},Ue("div",{className:"controllers__background-minus controllers__background-minus_muted"},Ue("div",{className:"controllers__controller controllers__controller_muted controllers__controller-minus controllers__controller-minus_muted"})),Ue("div",{className:"controllers__background-plus"},Ue("div",{className:"controllers__controller controllers__controller-plus"}))),Ue("div",{className:"counter__display counter-display"},Ue("div",{className:"counter-display__time"},"01"),Ue("div",{className:"counter-display__units"},"\u043c\u0438\u043d")))),Ue("div",{className:"counter"},Ue("span",{className:"counter__name"},"\u0411\u043e\u043b\u044c\u0448\u0435 10 \u043d\u0435\u043b\u044c\u0437\u044f"),Ue("div",{className:"counter__inner"},Ue("div",{className:"counter__controllers controllers"},Ue("div",{className:"controllers__background-minus"},Ue("div",{className:"controllers__controller controllers__controller-minus"})),Ue("div",{className:"controllers__background-plus controllers__background-plus_muted"},Ue("div",{className:"controllers__controller controllers__controller_muted controllers__controller-plus controllers__controller-plus_muted"}))),Ue("div",{className:"counter__display counter-display"},Ue("div",{className:"counter-display__time"},"10")))),Ue("div",{className:"counter"},Ue("span",{className:"counter__name counter__name_muted"},"\u041d\u0435\u0430\u043a\u0442\u0438\u0432\u0435\u043d"),Ue("div",{className:"counter__inner"},Ue("div",{className:"counter__controllers controllers"},Ue("div",{className:"controllers__background-minus controllers__background-minus_muted"},Ue("div",{className:"controllers__controller controllers__controller_muted controllers__controller-minus controllers__controller-minus_muted"})),Ue("div",{className:"controllers__background-plus controllers__background-plus_muted"},Ue("div",{className:"controllers__controller controllers__controller_muted controllers__controller-plus controllers__controller-plus_muted"}))),Ue("div",{className:"counter__display counter-display counter-display_muted"},Ue("div",{className:"counter-display__time"},"?")))))},Ye=(n("rVv1"),a.createElement),Xe=function(){var e,t=!0,n=0;switch(re().state.settings.settingsState){case K:n=1,e=Ye(xe,null);break;case Z:n=2,e=Ye(Le,null);break;case J:n=3,e=Ye(De,null);break;case H:t=!1,e=Ye(Fe,null)}return Ye(a.Fragment,null,t?Ye(he,{dotsCount:3,step:n}):"",e)},We=(n("qpwx"),a.createElement),ze=function(e){var t=e.name,n=e.isSpy,r=e.location,c=e.spies,o=e.className;return We("div",{className:l("card",{},o)},We("div",{className:"card__face"},We("img",{className:"card__face-background",src:m("card-face.svg")}),We("div",{className:"card__face-inner"},n?We(a.Fragment,null,We("img",{className:"card__icon".concat(c.length>1?" card__icon_small":""),src:m("circle-spy.svg")}),We(le,{weight:"bold",align:"center",className:"card__text"},"\u0412\u044b - \u0448\u043f\u0438\u043e\u043d"),We(le,{weight:"light",align:"center",className:"card__text"},"\u0431\u0443\u0434\u044c\u0442\u0435 \u0441\u043a\u0440\u044b\u0442\u043d\u044b\u043c \u0438 \u0432\u043d\u0438\u043c\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c!"),c.length>1?We(a.Fragment,null,We(le,{weight:"light",align:"center",className:"card__text card__text-cospies-label"},"\u041d\u0430 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u0435:"),We(le,{weight:"bold",align:"center",className:"card__text card__text-cospies"},c.filter(function(e){return e!==t}).join(", "))):null):We(a.Fragment,null,We("img",{className:"card__icon",src:m("circle-location.svg")}),We(le,{weight:"medium",align:"center",className:"card__text",hasMargin:!0},r)))),We("img",{className:"card__back",src:m("card-back.svg")}))};ze.defaultProps={spies:[]};var Be=ze,Ke=(n("2Fkd"),a.createElement),Ze=function(e){var t=e.location,n=e.cards,r=e.spies,c=Te(a.useState(0),2),o=c[0],i=c[1],s=Te(a.useState(void 0),2),u=s[0],_=s[1],d=Te(a.useState(!1),2),m=d[0],p=d[1];a.useEffect(function(){u&&setTimeout(function(){var e=o;switch(u){case"next":e=o+1;break;case"previous":e=o-1}i(e),_(void 0)},400)},[u]);return Ke(a.Fragment,null,Ke(_e,null,n[o].name),Ke("div",{className:"cards-slider",onClick:function(e){if(!u){var t,n=e.currentTarget.parentElement.clientWidth,a=e.clientX,r=n/2,c=m;switch(!0){case a<r-125:t="previous",c=!1;break;case a>r+125:t="next",c=!1;break;default:t="center",c=!m}_(t),p(c)}}},Ke("div",{className:"cards-slider__inner"},n.map(function(e,n){var a=o===n,c=o+1===n,i=o+2===n,s=o-1===n,_="next"===u,d={center:a,flipped:a&&m,next:c,"second-next":i,previous:s,"second-previous":n===o-2,hidden:n>o+2||n<o-2,"move-second-to-next":_&&i,"move-next-to-center":_&&c,"move-center-to-previous":_&&a,"move-previous-to-second":_&&s},p=e.name,v=e.isSpy;return Ke(Be,{name:p,isSpy:v,location:t,spies:r,className:l("cards-slider__card",d,"card"),key:"".concat(e.name+n)})}))))},Je=a.createElement,He=[{name:"\u0418\u0433\u0440\u043e\u043a 1",isSpy:!0},{name:"\u0418\u0433\u0440\u043e\u043a 2",isSpy:!0},{name:"\u0418\u0433\u0440\u043e\u043a 3",isSpy:!0},{name:"\u0418\u0433\u0440\u043e\u043a 4",isSpy:!0},{name:"\u0418\u0433\u0440\u043e\u043a 5",isSpy:!0},{name:"\u0418\u0433\u0440\u043e\u043a 6",isSpy:!0},{name:"\u0418\u0433\u0440\u043e\u043a 7",isSpy:!0},{name:"\u0418\u0433\u0440\u043e\u043a 8",isSpy:!0}],qe=function(){return Je(Ze,{cards:He,location:"\u041c\u043e\u0441\u043a\u0432\u0430",spies:He.filter(function(e){return e.isSpy}).map(function(e){return e.name})})},Ve=(n("DmWa"),a.createElement),Qe=function(){var e;switch(re().state.app.appState){case P:e=Ve(oe,null);break;case C:e=Ve(me,null);break;case x:e=Ve(Xe,null);break;case R:e=Ve(qe,null)}return Ve("div",{className:"app-container"},e)},$e=a.createElement;t.default=function(){return $e(a.Fragment,null,$e(o.a,null,$e("title",null,"Spyfall Game"),$e("link",{rel:"manifest",href:m("manifest.json")})),$e(ae,null,$e(Qe,null)))}},SLVX:function(e,t,n){"use strict";function a(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return a})},W7oM:function(e,t,n){n("nZgG");var a=n("WEpk").Object;e.exports=function(e,t){return a.defineProperties(e,t)}},XoMD:function(e,t,n){e.exports=n("hYAz")},bCCX:function(e,t,n){"use strict";(function(e,a){var r,c=n("SLVX");r="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:a;var o=Object(c.a)(r);t.a=o}).call(this,n("yLpj"),n("3UD+")(e))},hYAz:function(e,t,n){n("7m0m"),e.exports=n("WEpk").Object.getOwnPropertyDescriptors},nZgG:function(e,t,n){var a=n("Y7ZC");a(a.S+a.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},uplh:function(e,t,n){var a=n("ar/p"),r=n("mqlF"),c=n("5K7Z"),o=n("5T2Y").Reflect;e.exports=o&&o.ownKeys||function(e){var t=a.f(c(e)),n=r.f;return n?t.concat(n(e)):t}}},[["/EDR",0,1,7]]]);