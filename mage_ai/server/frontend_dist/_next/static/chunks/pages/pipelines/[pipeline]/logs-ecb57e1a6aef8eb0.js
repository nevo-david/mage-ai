(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4794],{66757:function(e,n,t){"use strict";var r=t(19319),o=t(94178),i=t(67240),c="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:r;function u(e,n){return 1===arguments.length?l(e):a(e,n)}function l(e){const n=c.getItem(e);return o(n)}function a(e,n){try{return c.setItem(e,JSON.stringify(n)),!0}catch(t){return!1}}u.set=a,u.get=l,u.remove=function(e){return c.removeItem(e)},u.clear=function(){return c.clear()},u.backend=function(e){return e&&(c=e),c},u.on=i.on,u.off=i.off,e.exports=u},94178:function(e){"use strict";e.exports=function(e){const n=function(e){try{return JSON.parse(e)}catch(n){return e}}(e);return void 0===n?null:n}},19319:function(e){"use strict";var n={};e.exports={getItem:function(e){return e in n?n[e]:null},setItem:function(e,t){return n[e]=t,!0},removeItem:function(e){return!!(e in n)&&delete n[e]},clear:function(){return n={},!0}}},67240:function(e,n,t){"use strict";var r=t(94178),o={};function i(e){e||(e=t.g.event);var n=o[e.key];n&&n.forEach((function(n){n(r(e.newValue),r(e.oldValue),e.url||e.uri)}))}e.exports={on:function(e,n){o[e]?o[e].push(n):o[e]=[n],t.g.addEventListener?t.g.addEventListener("storage",i,!1):t.g.attachEvent?t.g.attachEvent("onstorage",i):t.g.onstorage=i},off:function(e,n){var t=o[e];t.length>1?t.splice(t.indexOf(n),1):o[e]=[]}}},44162:function(e,n,t){"use strict";t.d(n,{HC:function(){return g},Kf:function(){return d},Nk:function(){return f},gE:function(){return h},jv:function(){return p},oh:function(){return a},qn:function(){return s},t1:function(){return m},y9:function(){return b}});var r=t(46313),o=t(23831),i=t(73942),c=t(86422),u=t(49125),l=t(90880),a=68;function s(e,n){var t=(n.theme.borders||o.Z.borders).light,r=(n.theme.monotone||o.Z.monotone).grey500,i=n||{},u=i.isSelected,l=i.theme;return u?t=(l.content||o.Z.content).active:c.tf.TRANSFORMER===e?(t=(l.accent||o.Z.accent).purple,r=(l.accent||o.Z.accent).purpleLight):c.tf.DATA_EXPORTER===e?(t=(l.accent||o.Z.accent).yellow,r=(l.accent||o.Z.accent).yellowLight):c.tf.DATA_LOADER===e?(t=(l.accent||o.Z.accent).blue,r=(l.accent||o.Z.accent).blueLight):c.tf.SCRATCHPAD===e?(t=(l.content||o.Z.content).default,r=(l.accent||o.Z.accent).contentDefaultTransparent):c.tf.SENSOR===e&&(t=(l.accent||o.Z.accent).pink,r=(l.accent||o.Z.accent).pinkLight),{accent:t,accentLight:r}}var d=(0,r.css)([""," "," "," "," ",""],(0,l.eR)(),(function(e){return!e.selected&&!e.hasError&&"\n    border-color: ".concat(s(e.blockType,e).accentLight,";\n  ")}),(function(e){return e.selected&&!e.hasError&&"\n    border-color: ".concat(s(e.blockType,e).accent,";\n  ")}),(function(e){return!e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.accent||o.Z.accent).negativeTransparent,";\n  ")}),(function(e){return e.selected&&e.hasError&&"\n    border-color: ".concat((e.theme.borders||o.Z.borders).danger,";\n  ")})),f=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],i.n_),p=r.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-1"})([""," border-left-style:solid;border-left-width:2px;border-right-style:solid;border-right-width:2px;border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:solid;border-top-width:2px;padding-bottom:","px;padding-top:","px;position:relative;"," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],d,i.n_,i.n_,u.iI,u.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||o.Z.background).codeTextarea,";\n  ")}),(function(e){return!e.hasOutput&&"\n    border-bottom-left-radius: ".concat(i.n_,"px;\n    border-bottom-right-radius: ").concat(i.n_,"px;\n    border-bottom-style: solid;\n    border-bottom-width: 2px;\n  ")})),h=r.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-2"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:10;&:hover{.block-divider-inner{","}}"],2*u.iI,(function(e){return"\n        background-color: ".concat((e.theme.text||o.Z.text).fileBrowser,";\n      ")})),m=r.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-3"})(["height 1px;width:100%;position:absolute;z-index:-1;"]),b=r.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-4"})(["margin-bottom:","px;padding-bottom:","px;padding-left:","px;",""],u.cd*u.iI,u.iI,a,(function(e){return"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n  ")})),g=r.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-5"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,a)},2850:function(e,n,t){"use strict";t.d(n,{M:function(){return c}});var r=t(46313),o=t(23831),i=t(3055),c=r.default.div.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-12ee2ib-0"})(["min-height:calc(100vh - ","px);",""],i.Mz,(function(e){return"\n    border-left: 1px solid ".concat((e.theme.borders||o.Z.borders).medium,";\n  ")}))},17903:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),u=t(10919),l=t(19711),a=t(46313),s=t(23831),d=t(49125),f=a.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-0"})(["contain:size;width:100%;"]),p=a.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-1"})(["",""],(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||s.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),h=(0,a.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||s.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(d.iI/2,"px ").concat(d.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(d.iI,"px ").concat(2*d.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),m=a.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-2"})(["",""],h),b=a.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-3"})([""," ",""],h,(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||s.Z.interactive).activeBorder,";\n  ")})),g=t(28598);function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var j=function(e){var n=e.alignTop,t=e.buildLinkProps,r=e.columnFlex,o=e.columnMaxWidth,a=e.columns,s=void 0===a?[]:a,d=e.compact,h=e.isSelectedRow,x=e.noBorder,j=e.onClickRow,y=e.rows,O=e.uuid,Z=(0,c.useMemo)((function(){return r.reduce((function(e,n){return e+(n||0)}),0)}),r),w=(0,c.useCallback)((function(e){if(r[e]){var n=Math.round(r[e]/Z*100);return"".concat(n,"%")}return null}),[]),k=(0,c.useMemo)((function(){return null===y||void 0===y?void 0:y.map((function(e,r){var c=null===t||void 0===t?void 0:t(r),l=e.map((function(e,t){return(0,g.jsx)(b,{alignTop:n,compact:d,maxWidth:null===o||void 0===o?void 0:o(t),noBorder:x,selected:null===h||void 0===h?void 0:h(r),width:w(t),children:e},"".concat(O,"-row-").concat(r,"-cell-").concat(t))})),a=(0,g.jsx)(p,{noHover:!(c||j),onClick:j?function(){return j(r)}:null,children:l},"".concat(O,"-row-").concat(r));return c?(0,g.jsx)(i(),v(v({},c),{},{passHref:!0,children:(0,g.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:a})})):a}))}),[n,t,w,o,s,d,h,x,j,y]);return(0,g.jsxs)(f,{children:[(null===s||void 0===s?void 0:s.length)>=1&&(0,g.jsx)(p,{noHover:!0,children:s.map((function(e,n){return(0,g.jsx)(m,{compact:d,noBorder:x,children:(0,g.jsx)(l.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid})},"".concat(O,"-col-").concat(e.uuid,"-").concat(n))}))}),k]})}},86422:function(e,n,t){"use strict";t.d(n,{$W:function(){return a},DA:function(){return l},Qj:function(){return s},Ut:function(){return h},V4:function(){return p},f2:function(){return f},iZ:function(){return d},t6:function(){return i},tf:function(){return c}});var r,o,i,c,u=t(82394);!function(e){e.PYTHON="python",e.SQL="sql"}(i||(i={})),function(e){e.CHART="chart",e.DATA_EXPORTER="data_exporter",e.DATA_LOADER="data_loader",e.SCRATCHPAD="scratchpad",e.SENSOR="sensor",e.TRANSFORMER="transformer"}(c||(c={}));var l,a=[c.CHART,c.DATA_EXPORTER,c.DATA_LOADER,c.SCRATCHPAD,c.SENSOR,c.TRANSFORMER],s=[c.CHART,c.SCRATCHPAD,c.SENSOR],d=[c.SCRATCHPAD];!function(e){e.EXECUTED="executed",e.FAILED="failed",e.NOT_EXECUTED="not_executed",e.UPDATED="updated"}(l||(l={}));var f=[c.DATA_EXPORTER,c.TRANSFORMER],p=(r={},(0,u.Z)(r,c.DATA_EXPORTER,"Data exporter"),(0,u.Z)(r,c.DATA_LOADER,"Data loader"),(0,u.Z)(r,c.SCRATCHPAD,"Scratchpad"),(0,u.Z)(r,c.SENSOR,"Sensor"),(0,u.Z)(r,c.TRANSFORMER,"Transformer"),r),h=[c.DATA_LOADER,c.TRANSFORMER,c.DATA_EXPORTER];o={},(0,u.Z)(o,c.DATA_EXPORTER,"DE"),(0,u.Z)(o,c.DATA_LOADER,"DL"),(0,u.Z)(o,c.SCRATCHPAD,"SP"),(0,u.Z)(o,c.SENSOR,"SR"),(0,u.Z)(o,c.TRANSFORMER,"TF")},1583:function(e,n,t){"use strict";var r=t(82684),o=t(60328),i=t(67971),c=t(882),u=t(86673),l=t(99994),a=t(49125),s=t(28598);n.Z=function(e){var n=e.contained,t=e.onClickTab,d=e.selectedTabUUID,f=e.tabs,p=(0,r.useMemo)((function(){var e=f.length,n=[];return f.forEach((function(r,f){var p=r.Icon,h=r.IconSelected,m=r.label,b=r.uuid,g=b===d,x=g&&h||p,v=m?m():b,j=(0,s.jsxs)(i.Z,{alignItems:"center",children:[x&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{default:!g,size:2*a.iI}),(0,s.jsx)(u.Z,{mr:1})]}),v]});f>=1&&e>=2&&n.push((0,s.jsx)("div",{style:{marginLeft:1.5*a.iI}},"spacing-".concat(b))),g?n.push((0,s.jsx)(c.Z,{backgroundGradient:l.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,onClick:function(){return t(r)},paddingUnitsHorizontal:2,paddingUnitsVertical:1.25,children:j},b)):n.push((0,s.jsx)("div",{style:{padding:4},children:(0,s.jsx)(o.Z,{borderLess:!0,default:!0,onClick:function(){return t(r)},outline:!0,children:j},"button-tab-".concat(b))}))})),n}),[t,d,f]),h=(0,s.jsx)(i.Z,{alignItems:"center",children:p});return n?h:(0,s.jsx)("div",{style:{paddingLeft:a.cd*a.iI,paddingRight:a.cd*a.iI},children:h})}},68535:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Pe}});var r=t(77837),o=t(82394),i=t(38860),c=t.n(i),u=t(12691),l=t.n(u),a=t(46313),s=t(82684),d=t(16634),f=t(34744),p=t(12757),h=t(60328),m=t(77555),b=t(26304),g=t(67971),x=t(86673),v=t(19711),j=t(23831),y=t(10503),O=t(73942),Z=t(49125),w=t(28598),k=["beforeIcon","checked","disabled","errorMessage","label","labelDescription","large","meta","monospace","onClick","required","small","warning","xsmall"];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C,E=a.default.div.withConfig({displayName:"Checkbox__CheckboxContainer",componentId:"sc-ujqx42-0"})(["display:inline-block;vertical-align:middle;cursor:pointer;"]),A=a.default.div.withConfig({displayName:"Checkbox__ErrorContainer",componentId:"sc-ujqx42-1"})(["margin-top:4px;"]),R=a.default.input.withConfig({displayName:"Checkbox__HiddenCheckbox",componentId:"sc-ujqx42-2"})(["border:0;clip:rect(0 0 0 0);clippath:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;",""],(function(e){return e.notClickable&&"\n    background-color: ".concat((e.theme.content||j.Z.content).disabled,"\n    border-color: ").concat((e.theme.content||j.Z.content).disabled,"\n\n    &:hover {\n      cursor: not-allowed;\n    }\n  ")})),I=a.default.div.withConfig({displayName:"Checkbox__StyledCheckbox",componentId:"sc-ujqx42-3"})(["border-radius:","px;height:","px;transition:all 150ms;width:","px;svg{position:relative;visibility:",";}"," "," "," "," input[disabled]{cursor:default;}"," ",""],.5*Z.iI,2*Z.iI,2*Z.iI,(function(e){return e.checked||e.required?"visible":"hidden"}),(function(e){return e.large&&"\n    svg {\n      left: -4px;\n      top: -8px;\n    }\n  "}),(function(e){return!e.checked&&"\n    background-color: ".concat((e.theme.background||j.Z.background).popup,";\n    border: ").concat(O.PV,"px ").concat(O.M8," ").concat((e.theme.content||j.Z.content).muted,";\n  ")}),(function(e){return e.checked&&"\n    background-color: ".concat((e.theme.interactive||j.Z.interactive).checked,";\n    border: ").concat(O.YF,"px ").concat(O.M8," transparent;\n  ")}),(function(e){return e.required&&"\n    background-color: ".concat((e.theme.content||j.Z.content).disabled,";\n    border: ").concat(O.YF,"px ").concat(O.M8," transparent;\n  ")}),(function(e){return e.disabled&&"\n    background-color: ".concat((e.theme.content||j.Z.content).disabled,";\n    border-color: ").concat((e.theme.content||j.Z.content).disabled,";\n\n    &:hover {\n      cursor: not-allowed;\n    }\n  ")}),(function(e){return e.warning&&"\n    background-color: ".concat((e.theme.accent||j.Z.accent).warning,";\n    border-color: ").concat((e.theme.interactive||j.Z.interactive).defaultBorder,"\n  ")})),D=a.default.label.withConfig({displayName:"Checkbox__LabelStyle",componentId:"sc-ujqx42-4"})(["-ms-flex-direction:column;align-items:center;display:flex;flex-direction:column;flex-direction:row;&:hover{cursor:pointer;}"]),S=function(e){var n=e.beforeIcon,t=e.checked,r=e.disabled,o=e.errorMessage,i=e.label,c=e.labelDescription,u=e.large,l=e.meta,a=e.monospace,s=void 0!==a&&a,d=e.onClick,f=e.required,p=e.small,h=void 0!==p&&p,j=e.warning,O=e.xsmall,P=void 0!==O&&O,C=(0,b.Z)(e,k),S=j||!!(o||l&&l.touched&&l.error);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(D,{onClick:function(e){e.preventDefault(),d&&d(e)},children:[(0,w.jsxs)(E,{children:[(0,w.jsx)(R,_(_({},C),{},{disabled:r?"disabled":void 0,notClickable:r})),(0,w.jsx)(I,{checked:t,disabled:r,large:u,required:f,warning:S,children:(0,w.jsx)(y.Jr,{size:Z.iI*(u?3:2)})})]}),n&&(0,w.jsx)(x.Z,{ml:1,children:(0,w.jsx)(g.Z,{children:n})}),i&&(0,w.jsxs)(x.Z,{pl:1,children:[(0,w.jsx)(v.ZP,{disabled:r,lineThrough:r,monospace:s,small:h,xsmall:P,children:i}),c&&(0,w.jsx)(v.ZP,{muted:!0,small:!0,children:c})]})]}),(o||l&&l.touched&&l.error)&&(0,w.jsx)(A,{children:(0,w.jsx)(v.ZP,{small:!0,warning:!0,children:o?(0,m.Z)(o):l.error})})]})},T=t(2850),N=t(86422),L=a.default.div.withConfig({displayName:"indexstyle__FilterRowStyle",componentId:"sc-kvapsi-0"})(["padding-bottom:","px;padding-top:","px;"],Z.iI/2,Z.iI/2);!function(e){e.CRITICAL="CRITICAL",e.DEBUG="DEBUG",e.ERROR="ERROR",e.EXCEPTION="EXCEPTION",e.INFO="INFO",e.LOG="LOG",e.WARNING="WARNING"}(C||(C={}));var M=[C.CRITICAL,C.DEBUG,C.ERROR,C.EXCEPTION,C.INFO,C.LOG,C.WARNING],B=t(73899);var H=(0,a.css)(["",""],(function(e){return"\n    background-color: ".concat(function(e){var n=e.critical,t=e.debug,r=e.error,o=e.exception,i=e.info,c=e.log,u=e.warning;return n?B.Zl:t?B.EG:r?B.hM:o?B.hl:i?B.gN:c?B.Wd:u?B.$R:"transparent"}(e),";\n  ")})),q=a.default.div.withConfig({displayName:"indexstyle__LogLevelIndicatorStyle",componentId:"sc-1e2zh7m-0"})([""," border-radius:","px;height:12px;width:5px;"],H,O.n_),F=t(5679),W=t(44162),Y=t(33766),z=t(24224);function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var G=function(e){var n=e.blocks,t=e.query,r=(0,s.useContext)(a.ThemeContext),i=(0,s.useCallback)((function(e,n){var r=n.isList,o=U({},t);r?Object.entries(e).forEach((function(e){var n=(0,p.Z)(e,2),t=n[0],r=n[1],i=String(r),c="".concat(t,"[]"),u=o[c];u&&Array.isArray(u)?(u=u.map(String)).includes(i)?o[c]=(0,z.Od)(u,(function(e){return e===i})):o[c]=u.concat(i):o[c]=[i]})):o=U(U({},o),e),(0,Y.u)(o)}),[t]),c=(0,s.useMemo)((function(){return t["level[]"]}),[t]),u=(0,s.useMemo)((function(){return t["block_type[]"]}),[t]),l=(0,s.useMemo)((function(){return t["block_uuid[]"]}),[t]),f=(0,s.useMemo)((function(){return t["pipeline_schedule_id[]"]}),[t]),m=(0,s.useMemo)((function(){return t["pipeline_run_id[]"]}),[t]),b=(0,s.useMemo)((function(){return t["block_run_id[]"]}),[t]);return(0,w.jsx)(T.M,{children:(0,w.jsxs)(x.Z,{p:Z.cd,children:[(0,w.jsxs)(x.Z,{mb:3,children:[(0,w.jsx)(x.Z,{mb:1,children:(0,w.jsx)(v.ZP,{bold:!0,default:!0,large:!0,children:"Log level"})}),M.map((function(e){return(0,w.jsx)(h.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return i({level:e},{isList:!0})},children:(0,w.jsx)(L,{children:(0,w.jsxs)(g.Z,{alignItems:"center",children:[(0,w.jsx)(S,{checked:Array.isArray(c)&&(null===c||void 0===c?void 0:c.includes(String(e)))}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(q,U({},(0,o.Z)({},e.toLowerCase(),!0))),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(v.ZP,{disableWordBreak:!0,children:(0,F.kC)(e.toLowerCase())})]})})},e)}))]}),(0,w.jsxs)(x.Z,{mb:3,children:[(0,w.jsx)(x.Z,{mb:1,children:(0,w.jsx)(v.ZP,{bold:!0,default:!0,large:!0,children:"Block type"})}),[N.tf.DATA_LOADER,N.tf.TRANSFORMER,N.tf.DATA_EXPORTER].map((function(e){return(0,w.jsx)(h.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return i({block_type:e},{isList:!0})},children:(0,w.jsx)(L,{children:(0,w.jsxs)(g.Z,{alignItems:"center",children:[(0,w.jsx)(S,{checked:Array.isArray(u)&&(null===u||void 0===u?void 0:u.includes(String(e)))}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(d.Z,{color:(0,W.qn)(e,{theme:r}).accent,size:1.5*Z.iI,square:!0}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(v.ZP,{disableWordBreak:!0,muted:!0,monospace:!0,children:e})]})})},e)}))]}),(0,w.jsxs)(x.Z,{mb:3,children:[(0,w.jsx)(x.Z,{mb:1,children:(0,w.jsx)(v.ZP,{bold:!0,default:!0,large:!0,children:"Block"})}),n.filter((function(e){var n=e.type;return N.tf.SCRATCHPAD!==n})).map((function(e){return(0,w.jsx)(h.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return i({block_uuid:e.uuid},{isList:!0})},children:(0,w.jsx)(L,{children:(0,w.jsxs)(g.Z,{alignItems:"center",children:[(0,w.jsx)(S,{checked:Array.isArray(l)&&(null===l||void 0===l?void 0:l.includes(String(e.uuid)))}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(d.Z,{color:(0,W.qn)(e.type,{theme:r}).accent,size:1.5*Z.iI,square:!0}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(v.ZP,{disableWordBreak:!0,muted:!0,monospace:!0,children:e.uuid})]})})},e.uuid)}))]}),(null===f||void 0===f?void 0:f.length)&&(0,w.jsxs)(x.Z,{mb:3,children:[(0,w.jsx)(x.Z,{mb:1,children:(0,w.jsx)(v.ZP,{bold:!0,default:!0,large:!0,children:"Trigger"})}),f.map((function(e){return(0,w.jsx)(h.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return i({pipeline_schedule_id:e},{isList:!0})},children:(0,w.jsx)(L,{children:(0,w.jsxs)(g.Z,{alignItems:"center",children:[(0,w.jsx)(S,{checked:Array.isArray(f)&&(null===f||void 0===f?void 0:f.includes(e))}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(v.ZP,{disableWordBreak:!0,monospace:!0,children:e})]})})},"pipeline-schedule-".concat(e))}))]}),(null===m||void 0===m?void 0:m.length)&&(0,w.jsxs)(x.Z,{mb:3,children:[(0,w.jsx)(x.Z,{mb:1,children:(0,w.jsx)(v.ZP,{bold:!0,default:!0,large:!0,children:"Pipeline run"})}),m.map((function(e){return(0,w.jsx)(h.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return i({pipeline_run_id:e},{isList:!0})},children:(0,w.jsx)(L,{children:(0,w.jsxs)(g.Z,{alignItems:"center",children:[(0,w.jsx)(S,{checked:Array.isArray(m)&&(null===m||void 0===m?void 0:m.includes(e))}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(v.ZP,{disableWordBreak:!0,monospace:!0,children:e})]})})},"pipeline-run-".concat(e))}))]}),(null===b||void 0===b?void 0:b.length)&&(0,w.jsxs)(x.Z,{mb:3,children:[(0,w.jsx)(x.Z,{mb:1,children:(0,w.jsx)(v.ZP,{bold:!0,default:!0,large:!0,children:"Block run"})}),b.map((function(e){return(0,w.jsx)(h.Z,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return i({block_run_id:e},{isList:!0})},children:(0,w.jsx)(L,{children:(0,w.jsxs)(g.Z,{alignItems:"center",children:[(0,w.jsx)(S,{checked:Array.isArray(b)&&(null===b||void 0===b?void 0:b.includes(e))}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(v.ZP,{disableWordBreak:!0,monospace:!0,children:e})]})})},"block-run-".concat(e))}))]})]})})},V=t(93461),J=t(31866),Q=t(10919),K=t(1583),$=t(17903),ee=a.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-1r43sbu-0"})([""," height:","px;width:100%;"],H,.5*Z.iI),ne=a.default.div.withConfig({displayName:"indexstyle__BadgeStyle",componentId:"sc-1r43sbu-1"})([""," border-radius:","px;display:inline-block;padding:","px ","px;"],H,O.BG,.25*Z.iI,.5*Z.iI),te=t(92083),re=t.n(te);function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ce=/([0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}) (.+)/;function ue(e){var n=e.content.trim().split(ce),t=[],r=[];return n.forEach((function(e){"\n"===e?(r.length>=1&&t.push(r.join(" ").trim()),r=[]):r.filter((function(e){return e})).length<=1&&r.push(e.trim())})),t.push(r.join(" ").trim()),t.map((function(n){return function(e){var n=e.content.trim().match(ce),t=null===n||void 0===n?void 0:n[1],r=null===n||void 0===n?void 0:n[2],o={};return r&&(0,F.Pb)(r)&&(o=JSON.parse(r)),ie(ie({},e),{},{createdAt:t,data:o})}(ie(ie({},e),{},{content:n}))}))}function le(e){return e&&re().unix(e).utc().format("YYYY-MM-DD HH:mm:ss")}function ae(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function se(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ae(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ae(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var de=["error","error_stack","error_stacktrace"],fe={uuid:"Details"},pe={uuid:"Errors"};var he=function(e){var n=e.log,t=e.onClose,r=(0,s.useState)(fe),i=r[0],c=r[1],u=n.data,l=n.name,a=n.path,d=u||{},m=d.error,b=d.error_stack,j=d.error_stacktrace,O=d.level,k=d.timestamp,P=(0,o.Z)({},O.toLowerCase(),!0),_=(0,s.useMemo)((function(){var e=[["file name",l],["file path",a]];return Object.entries(u).forEach((function(n){var t=(0,p.Z)(n,2),r=t[0],o=t[1];de.includes(r)||e.push([r,o])})),j&&e.push(["error",j]),(0,z.YC)(e,(function(e){var n=(0,p.Z)(e,2),t=n[0];n[1];return t}))}),[u,j,l,a]),C=(0,s.useMemo)((function(){var e=[fe];return m&&e.push(pe),(0,w.jsx)(K.Z,{onClickTab:c,selectedTabUUID:null===i||void 0===i?void 0:i.uuid,tabs:e})}),[m,b,j,i,c]);return(0,w.jsxs)("div",{children:[(0,w.jsx)(ee,se({},P)),(0,w.jsx)(x.Z,{p:Z.cd,children:(0,w.jsxs)(g.Z,{alignItems:"center",justifyContent:"space-between",children:[(0,w.jsxs)(V.Z,{alignItems:"center",children:[(0,w.jsx)(ne,se(se({},P),{},{children:(0,w.jsx)(v.ZP,{bold:!0,inverted:!0,monospace:!0,small:!0,children:O})})),(0,w.jsx)(x.Z,{mr:Z.cd}),(0,w.jsx)(v.ZP,{monospace:!0,children:le(k)})]}),(0,w.jsx)(h.Z,{iconOnly:!0,noBackground:!0,onClick:function(){return t()},children:(0,w.jsx)(y.x8,{size:1.5*Z.iI})})]})}),(0,w.jsx)(f.Z,{medium:!0}),(0,w.jsx)(x.Z,{py:Z.cd,children:C}),fe.uuid===(null===i||void 0===i?void 0:i.uuid)&&(0,w.jsx)($.Z,{columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:_.map((function(e){var n=(0,p.Z)(e,2),t=n[0],r=n[1];return[(0,w.jsx)(v.ZP,{monospace:!0,muted:!0,children:t}),(0,w.jsx)(v.ZP,{monospace:!0,textOverflow:!0,title:r,children:r})]})),uuid:"LogDetail"}),pe.uuid===(null===i||void 0===i?void 0:i.uuid)&&(0,w.jsxs)(x.Z,{mb:5,px:Z.cd,children:[(0,w.jsx)(x.Z,{mb:1,children:(0,w.jsx)(v.ZP,{bold:!0,children:"Error"})}),m.map((function(e){return e.split("\n").map((function(e){return(0,w.jsx)(v.ZP,{default:!0,monospace:!0,small:!0,children:e.split("\n")},e)}))})),b&&(0,w.jsxs)(x.Z,{mt:3,children:[(0,w.jsx)(x.Z,{mb:1,children:(0,w.jsx)(v.ZP,{bold:!0,children:"Stack trace"})}),b.map((function(e){return e.map((function(e){return(0,w.jsx)(v.ZP,{default:!0,monospace:!0,small:!0,children:e},e)}))}))]})]})]})},me=t(38965),be=t(54283),ge=t(41374),xe=t(66166),ve=t(59920),je=t(7715),ye=t(59e3);function Oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Ze(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Oe(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var we="log_uuid";function ke(e){var n=e.pipeline,t=(0,s.useContext)(a.ThemeContext),r=n.uuid,i=(0,s.useState)(40),c=i[0],u=i[1],p=(0,s.useState)(null),h=p[0],m=p[1],b=(0,s.useState)(null),j=b[0],O=b[1],k=ge.ZP.pipelines.detail(r).data,P=(0,s.useMemo)((function(){return Ze(Ze({},null===k||void 0===k?void 0:k.pipeline),{},{uuid:r})}),[k,r]),_=(0,s.useMemo)((function(){return P.blocks||[]}),[P]),C=(0,s.useMemo)((function(){return(0,z.HK)(_,(function(e){return e.uuid}))}),[_]),E=ge.ZP.logs.pipelines.list(r,(0,je.gR)(h,[we]),{},{pauseFetch:!h}).data,A=!E,R=(0,s.useMemo)((function(){var e;if(null!==E&&void 0!==E&&null!==(e=E.logs)&&void 0!==e&&e[0]){var n,t=(null===(n=E.logs)||void 0===n?void 0:n[0])||{};return{blockRunLogs:t.block_run_logs,pipelineRunLogs:t.pipeline_run_logs}}return{blockRunLogs:[],pipelineRunLogs:[]}}),[E]),I=R.blockRunLogs,D=R.pipelineRunLogs,S=(0,s.useMemo)((function(){return(0,z.YC)(I.concat(D).reduce((function(e,n){return e.concat(ue(n))}),[]),(function(e){var n=e.data;return(null===n||void 0===n?void 0:n.timestamp)||0}))}),[I,D]),T=(0,s.useMemo)((function(){return S.filter((function(e){var n,t=e.data,r=[];if(!h)return!0;(h["level[]"]&&r.push(h["level[]"].includes(null===t||void 0===t?void 0:t.level)),h["block_type[]"])&&r.push(h["block_type[]"].includes(null===(n=C[null===t||void 0===t?void 0:t.block_uuid])||void 0===n?void 0:n.type));return r.every((function(e){return e}))}))}),[C,S,h]),N=(0,s.useMemo)((function(){return T.slice(0,c)}),[T,c]),L=(0,ye.iV)(),M=(0,xe.Z)(L);(0,s.useEffect)((function(){(0,je.Xy)(L,M)||(u(40),m(L))}),[L,M]);var B=(0,xe.Z)(j);return(0,s.useEffect)((function(){var e=L.log_uuid;!e||j||B||O(S.find((function(n){var t=n.data;return(null===t||void 0===t?void 0:t.uuid)===e})))}),[S,L,j,B]),(0,w.jsxs)(me.Z,{after:j&&(0,w.jsx)(he,{log:j,onClose:function(){(0,Y.u)((0,o.Z)({},we,null)),O(null)}}),afterHidden:!j,afterWidth:80*Z.iI,before:(0,w.jsx)(G,{blocks:_,query:h}),beforeWidth:20*Z.iI,breadcrumbs:[{label:function(){return"Logs"}}],pageName:ve.M.PIPELINE_LOGS,pipeline:P,subheader:null,title:function(e){var n=e.name;return"".concat(n," logs")},uuid:"pipeline/logs",children:[(0,w.jsx)(x.Z,{px:Z.cd,py:1,children:(0,w.jsxs)(v.ZP,{children:[!A&&(0,w.jsxs)(w.Fragment,{children:[(0,F.x6)(N.length)," logs of ",(0,F.x6)(T.length)," found"]}),A&&"Searching..."]})}),(0,w.jsx)(f.Z,{light:!0}),A&&(0,w.jsx)(x.Z,{p:Z.cd,children:(0,w.jsx)(be.Z,{})}),!A&&N.length>=1&&(0,w.jsx)($.Z,{compact:!0,columnFlex:[null,null,1,9,null],columnMaxWidth:function(e){return 3===e?"100px":null},columns:[{label:function(){return""},uuid:"!"},{uuid:"Date"},{uuid:"Block"},{uuid:"Message"},{label:function(){return""},uuid:">"}],onClickRow:function(e){var n,t=N[e],r=null===(n=t.data)||void 0===n?void 0:n.uuid;h.log_uuid===r&&(r=null),(0,Y.u)((0,o.Z)({},we,r)),O(r?t:null)},rows:N.map((function(e){var n,i=e.content,c=(e.createdAt,e.data),u=e.name,a=c||{},s=a.block_uuid,f=a.level,p=a.message,h=(a.pipeline_uuid,a.timestamp),m=s||u.split(".log")[0],b=C[m];if(b){var j=(0,W.qn)(b.type,{theme:t}).accent;n=(0,w.jsx)(g.Z,{alignItems:"center",children:(0,w.jsx)(l(),{as:"/pipelines/".concat(r,"/edit?block_uuid=").concat(m),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,w.jsxs)(Q.Z,{block:!0,fullWidth:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,w.jsx)(d.Z,{color:j,size:1.5*Z.iI,square:!0}),(0,w.jsx)(x.Z,{mr:1}),(0,w.jsx)(v.ZP,{monospace:!0,children:m})]})})})}return[(0,w.jsx)(V.Z,{alignItems:"center",justifyContent:"center",children:(0,w.jsx)(q,Ze({},(0,o.Z)({},null===f||void 0===f?void 0:f.toLowerCase(),!0)))}),(0,w.jsx)(v.ZP,{default:!0,monospace:!0,children:le(h)}),n,(0,w.jsx)(v.ZP,{monospace:!0,textOverflow:!0,children:p||i}),(0,w.jsx)(V.Z,{flex:1,justifyContent:"flex-end",children:(0,w.jsx)(y._Q,{default:!0,size:2*Z.iI})})]})),uuid:"logs"}),c<T.length&&(0,w.jsx)(x.Z,{p:Z.cd,children:(0,w.jsx)(J.ZP,{blackBorder:!0,inline:!0,onClick:function(){return u((function(e){return e+40}))},sameColorAsText:!0,uuid:"logs/load_more",children:"Load more logs"})})]})}ke.getInitialProps=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var Pe=ke},33766:function(e,n,t){"use strict";t.d(n,{u:function(){return s}});var r=t(12757),o=t(82394),i=t(34376),c=t.n(i),u=t(59e3);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.replaceParams,i=t.pushHistory,l=o?{}:(0,u.iV)();n=window.location.pathname;var s=i?c().push:c().replace,d=a(a({},l),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],o=n[1];"undefined"!==typeof o&&null!==o||delete d[t]}));var f=(0,u.uM)(d);f.length>=1&&(f="?".concat(f));var p="".concat(n.split("?")[0]).concat(f);return s(c().router.pathname,p,{shallow:!0})}},5679:function(e,n,t){"use strict";t.d(n,{OC:function(){return d},n1:function(){return f},RA:function(){return m},kC:function(){return b},vg:function(){return w},JX:function(){return g},T3:function(){return _},Mp:function(){return x},Pb:function(){return p},kE:function(){return k},HD:function(){return h},wX:function(){return v},x6:function(){return j},_6:function(){return y},Y6:function(){return E},Lo:function(){return A},Tz:function(){return P},QV:function(){return C},C5:function(){return Z}});var r=t(12757),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],i=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],c=t(92083),u=t.n(c),l=["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"],a=["0","1","2","3","4","5","6","7","8","9"],s=t(24224),d="YYYY-MM-DD HH:mm:SS",f="YYYY-MM-DD";function p(e){try{JSON.parse(e)}catch(n){return!1}return!0}function h(e){return"string"===typeof e}function m(e){return e.split(" ").join("_")}function b(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function g(e){return u().unix(e).format("YYYY-MM-DD HH:mm")}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*e)}function v(e){return e.charAt(0).toLowerCase()+e.slice(1)}function j(e){if(null===e||"undefined"===typeof e)return"";var n=e.toString().split("."),t=(0,r.Z)(n,2),o=t[0],i=t[1],c=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return i?"".concat(c,".").concat(i):c}function y(e,n){var t,r=n,o=void 0!==r&&null!==r;if(o||(r=2),1===r)t=e;else{var i=e.length,c=e[i-1];t="y"===c&&"day"!==e?"".concat(e.slice(0,i-1),"ies"):"".concat(e,"s"===c?"es":"s")}return o?"".concat(r," ").concat(t):t}function O(e){return null===e||void 0===e?void 0:e.replace(/_/g," ")}function Z(e){var n=e.length;return"ies"===e.slice(n-3,n)?"".concat(e.slice(0,n-3),"y"):"es"===e.slice(n-2,n)?e.slice(0,n-2):e.slice(0,n-1)}function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return b(O(e.toLowerCase()))}function k(e){return!isNaN(e)}function P(e){var n,t=e.match(/\d+(\.?\d*)%/)||[];return Number(null===(n=t[0])||void 0===n?void 0:n.slice(0,-1))}function _(e){return"".concat(j(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Math.round((e||0)*Math.pow(100,n))/100}(e)),"%")}function C(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,n);return Math.round((e||0)*t)/t}function E(){return"".concat((0,s.mp)(o)," ").concat((0,s.mp)(l))}function A(){return"".concat((0,s.mp)(i)).concat((0,s.mp)(a))}},66166:function(e,n,t){"use strict";var r=t(82684);n.Z=function(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e}),[e]),n.current}},62453:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/logs",function(){return t(68535)}])}},function(e){e.O(0,[5339,2083,2874,3903,8933,8965,9774,2888,179],(function(){return n=62453,e(e.s=n);var n}));var n=e.O();_N_E=n}]);