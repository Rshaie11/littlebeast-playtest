import{a as p,j as e,g as Dn,h as we,i as ge,k as rt,m as it,n as ot,b as lt,o as ct,c as Ze,P as dt}from"./time-format-DyLHVu9l.js";import{L as ut,f as Fn,c as gn,a as yn,e as me,s as ie,d as mt,w as On,p as Bn,b as ht,g as qn,h as bn,R as Ke,i as We,j as ft,k as pt}from"./legacy-g3-BiFu6mtU.js";import{e as Vn,l as te,d as Ye,a as Se,w as ce,b as xt,c as gt,f as yt,g as bt}from"./life-preview-UTAzY_xo.js";function Ce({title:n,children:a,onClose:t}){const r=p.useRef(null),l=p.useId(),c=p.useRef(!1);return p.useLayoutEffect(()=>{const i=r.current,g=document.activeElement instanceof HTMLElement?document.activeElement:null,m=document.body.style.overflow;return document.body.style.overflow="hidden",i.showModal(),()=>{i.close(),document.body.style.overflow=m,g?.isConnected&&g.focus({preventScroll:!0})}},[]),e.jsxs("dialog",{ref:r,className:"life-modal","aria-labelledby":l,onCancel:i=>{i.preventDefault(),t()},onPointerDown:i=>{const{left:g,right:m,top:h,bottom:s}=i.currentTarget.getBoundingClientRect();c.current=i.target===i.currentTarget&&(i.clientX<g||i.clientX>=m||i.clientY<h||i.clientY>=s)},onClick:i=>{c.current&&i.target===i.currentTarget&&t(),c.current=!1},children:[e.jsxs("header",{children:[e.jsx("h2",{id:l,children:n}),e.jsx("button",{type:"button",className:"life-link",autoFocus:!0,onClick:t,children:"关闭"})]}),e.jsx("div",{className:"life-modal-content",children:a})]})}function _n({animal:n,state:a,life:t,milestones:r,selected:l,onSelect:c}){const i=a.run.animals.find(s=>s.id===n.id),g=Dn({ageDays:n.ageDays,birthDay:i?.birthDay}),m=a.run.ledger.filter(s=>s.animalId===n.id),h=i&&i.status!=="living"?t.letter(a,n.id):null;return e.jsxs("section",{className:"life-timeline","aria-label":n.name+"的个人生命档案",children:[e.jsxs("p",{className:"life-small",children:["物种：",i?.species==="cat"?"猫":i?.species??"未知"]}),e.jsxs("p",{children:[g," · ",n.stage?.label??"阶段未知"," · ",i?.status==="deceased"?"离世纪念":i?.status==="living"?"在家":"已分别"]}),e.jsxs("details",{children:[e.jsx("summary",{children:"相遇之前"}),n.origin.visibleFacts.length?e.jsx("ul",{children:n.origin.visibleFacts.map(s=>e.jsx("li",{children:s.text},s.id))}):e.jsx("p",{children:"没有可读的身世记录。"})]}),e.jsx("h2",{children:"生命成就"}),r.length?e.jsx("ul",{children:r.map(s=>e.jsxs("li",{children:[e.jsxs("button",{type:"button",className:"life-link","aria-pressed":l===s.occurrenceId,onClick:()=>c(s.occurrenceId),children:[s.title," · ",e.jsx("time",{dateTime:ge(s.day)?.iso,children:we(s.day)})]}),l===s.occurrenceId&&e.jsxs("p",{className:"life-small",children:["档案依据：",m.find(b=>b.id===s.occurrenceId)?.title??"已记录的旅程事实"]})]},s.achievementId))}):e.jsx("p",{className:"life-small",children:"还没有可证实的生命成就。"}),e.jsxs("details",{children:[e.jsx("summary",{children:"本兽日记"}),m.length?e.jsx("ul",{children:m.map(s=>e.jsxs("li",{children:[e.jsx("time",{dateTime:ge(s.day)?.iso,children:we(s.day)})," · ",s.title,r.some(b=>b.occurrenceId===s.id)&&e.jsx("button",{type:"button",className:"life-link",onClick:()=>c(s.id),children:"查看关联成就"})]},s.id))}):e.jsx("p",{className:"life-small",children:"还没有本兽的日记记录。"})]}),h&&e.jsxs("details",{children:[e.jsx("summary",{children:"生命总结与来信"}),h.paragraphs.map((s,b)=>e.jsx("p",{children:s},b))]})]})}const jt={achievementId:"joined-home",title:"来到这个家"},vt={achievementId:"farewell-recorded",title:"记下告别"},ke={achievementId:"quiet-company",title:"静静陪伴"},Oe={achievementId:"wonder-recorded",title:"特别的一天"},Be={achievementId:"home-adjusted",title:"给它布置一处空间"},kt=new Map([["sys:joined",{rule:jt,choices:["auto"]}],["sys:deceased",{rule:vt,choices:["auto"]}],["CAT-DAILY-001",{rule:ke,choices:["A"]}],["DOG-DAILY-001",{rule:ke,choices:["A"]}],["RAB-SENIOR-001",{rule:ke,choices:["C"]}],["ANY-CHAIN-001",{rule:ke,choices:["B"]}],["CAT-WONDER-001",{rule:Oe,choices:["A","B","C"]}],["DOG-WONDER-001",{rule:Oe,choices:["A","B","C"]}],["ANY-WONDER-001",{rule:Oe,choices:["A","B","C"]}],["CAT-CHAIN-001",{rule:Be,choices:["A"]}],["RAB-CHAIN-001",{rule:Be,choices:["A","B","C"]}],["RAB-CHAIN-002",{rule:Be,choices:["A","B"]}]]);function jn(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)}function vn(n){return typeof n=="number"&&Number.isSafeInteger(n)&&n>=0}function qe(n,a){return n<a?-1:n>a?1:0}function Jn(n,a){if(typeof a!="string"||!a||!jn(n))return[];const{day:t,ledger:r}=n;if(!vn(t)||!Array.isArray(r))return[];const l=new Map;for(const c of r){if(!jn(c)||c.animalId!==a)continue;const{id:i,eventId:g,choiceId:m,day:h}=c;if(typeof i!="string"||!i||!vn(h)||h>t||typeof g!="string"||typeof m!="string")continue;const s=kt.get(g);if(!s?.choices.includes(m))continue;const{achievementId:b,title:x}=s.rule,w=l.get(b);w&&(h-w.day||qe(i,w.occurrenceId)||qe(g,w.eventId))>=0||l.set(b,{achievementId:b,animalId:a,occurrenceId:i,eventId:g,day:h,title:x})}return[...l.values()].sort((c,i)=>c.day-i.day||qe(c.achievementId,i.achievementId))}function kn({onDetails:n}){return e.jsxs("section",{className:"life-knowledge",children:[e.jsx("h2",{children:n?"动物知识":"为刚到家的猫留一处安静空间"}),n&&e.jsx("h3",{children:"为刚到家的猫留一处安静空间"}),e.jsx("p",{children:"准备安静的房间和可躲藏的地方，把猫砂盆与饮食区分开。适用于初到新家的猫，适应节奏因个体而异。"}),e.jsx("a",{href:"https://spcanova.org/caring-for-your-new-cat/",target:"_blank",rel:"noreferrer",children:"北弗吉尼亚防止虐待动物协会 · 新猫照护指南（2022）"}),n&&e.jsx("button",{type:"button",className:"life-link",onClick:n,children:"查看照护建议"})]})}function He({reaction:n}){return n?e.jsx("p",{"data-memory-reaction":n.id,"data-memory-source":n.sourceLedgerId,"data-natural-occurrence":"targetOccurrence"in n?n.targetOccurrence:void 0,children:n.text}):null}function It(n,a){const t=new Map;for(const r of n)t.set(r.targetLedgerId,r);for(const r of a)t.set(r.targetLedgerId+":"+r.targetOccurrence,r);return t}function Ve(n,a){return ut.parse({...n,...a,version:n.version+1})}function Nt(n,a,t){return n.filter(r=>r.command.kind==="company"&&r.day>=a).slice().sort((r,l)=>r.day-l.day||r.command.animalId.localeCompare(l.command.animalId)||r.command.commandId.localeCompare(l.command.commandId)).map(r=>({id:r.command.commandId,day:r.day,animalId:r.command.animalId,text:`第 ${r.day} 日 · ${t(r.command.animalId)} · 计划陪伴 ${rt(r.companyMinutes)}（待结算）`}))}function wt(n,a,t){return n.responses.filter(r=>r.day===a&&t===void 0)}function St(n){try{return new URL(n).hostname.replace(/^www\./,"")}catch{return"参考来源"}}function Gn({eventId:n,lookup:a}){let t;try{t=a(n)}catch(r){if(Vn(r)==="unknown-event")return null;throw r}return t.sources.length?e.jsxs("details",{className:"life-references",children:[e.jsx("summary",{children:"情节参考来源"}),e.jsx("ul",{children:t.sources.map(r=>e.jsxs("li",{children:[e.jsx("a",{href:r.url,target:"_blank",rel:"noopener noreferrer",children:St(r.url)}),e.jsxs("p",{children:[r.review==="candidate"?"候选来源":"已核实来源"," · ",e.jsx("time",{dateTime:r.checkedOn,children:r.checkedOn})]}),e.jsx("p",{children:r.scope})]},r.id))})]}):null}const In={event:0,shared:0,growth:1,recovery:2,care:3,daily:4};function Nn(n){const a=new Set,t=[];for(const r of n)a.has(r.key)||(a.add(r.key),t.push(r));return t.sort((r,l)=>l.day-r.day||In[r.tone]-In[l.tone]||r.title.localeCompare(l.title))}function Ct(n){const a=[];for(const t of n){const r=a.at(-1);r?.day===t.day?r.entries.push(t):a.push({day:t.day,entries:[t]})}return a}function Mt(n,a){if(n.templateId==="trust-change"||n.templateId==="stress-observation")return a();const{fed:t,cleaned:r,companyMinutes:l}=n.args,c=l>0?"相处 "+l.toLocaleString("zh-CN",{maximumFractionDigits:1})+" 分钟":"";return[t&&"饭备好了",r&&"收拾过了",c].filter(Boolean).join(" · ")}function Un(n){const{fed:a,cleaned:t,companyMinutes:r}=n.care,l=r&&r>0?n.playerCompany?"你和它相处 "+r.toLocaleString("zh-CN",{maximumFractionDigits:1})+" 分钟":"这天有 "+r.toLocaleString("zh-CN",{maximumFractionDigits:1})+" 分钟的相处时间":"";return[a&&"饭备好了",t&&"收拾过了",l].filter(Boolean).join(" · ")}function Pt({rows:n,animalLabel:a}){return e.jsx("ul",{className:"life-feedback-lines",children:n.map(t=>e.jsxs("li",{"data-feedback-id":t.id,"data-animal-id":t.animalId,children:[e.jsx("strong",{children:a(t.animalId)})," ",t.level==="F2"&&"观察 · ",Mt(t,()=>Fn(t))]},t.id))})}const Kn="fursona:v46:audio",Ie={master:.7,ui:.65,ambience:.35,muted:!1},Lt={uiClick:"ui-click.ogg",pageTurn:"page-turn.ogg",event:"event.ogg",archive:"archive.ogg",catReact:"cat-react.wav",indoorAmbience:"indoor-ambience.mp3",rainAmbience:"rain.ogg"},At={uiClick:100,pageTurn:210,event:650,archive:220,catReact:420};function _e(n,a){return typeof n=="number"&&Number.isFinite(n)?Math.max(0,Math.min(1,n)):a}function Wn(){try{const n=JSON.parse(localStorage.getItem(Kn)??"null");if(n)return{master:_e(n.master,Ie.master),ui:_e(n.ui,Ie.ui),ambience:_e(n.ambience,Ie.ambience),muted:n.muted===!0}}catch{}return{...Ie}}function Rt(n,a){const t=Math.round(a.sampleRate*2),r=Math.round(a.sampleRate*.65),l=Math.min(Math.round(a.sampleRate*24),a.length-t-r);if(l<=r)return;const c=n.createBuffer(a.numberOfChannels,l,a.sampleRate);for(let i=0;i<a.numberOfChannels;i++){const g=a.getChannelData(i),m=c.getChannelData(i);m.set(g.subarray(t,t+l));for(let h=0;h<r;h++){const s=.5-.5*Math.cos(Math.PI*h/r);m[h]=g[t+l+h]*(1-s)+m[h]*s}}return c}class zt{engine;buffers=new Map;voices=new Set;last=new Map;loop;loopPending;retiring=new Set;weatherCue="indoorAmbience";indoor=!1;settings=Wn();revision=0;unlock(a){if(!(!a.isTrusted||!navigator.userActivation?.isActive||document.hidden)){if(!this.engine)try{const t=new AudioContext,r=t.createGain(),l=t.createGain(),c=t.createGain();l.connect(r),c.connect(r),r.connect(t.destination),this.engine={context:t,master:r,ui:l,ambience:c,request:new AbortController},this.apply()}catch{return}this.engine.context.state!=="running"?this.engine.context.resume().then(()=>this.sync(),()=>{}):this.sync()}}update(a){this.settings=a,this.apply(),this.sync()}apply(){const a=this.engine;a&&(a.master.gain.value=this.settings.muted?0:this.settings.master,a.ui.gain.value=this.settings.ui,a.ambience.gain.value=this.settings.ambience)}load(a){const t=this.engine,r=Lt[a];if(!t)return Promise.resolve(void 0);const l=this.buffers.get(a);if(l)return l;const c=fetch("/littlebeast-playtest/audio/apartment/"+r,{signal:t.request.signal}).then(i=>{if(!i.ok)throw new Error("Audio unavailable");return i.arrayBuffer()}).then(i=>t.context.decodeAudioData(i)).then(i=>a==="indoorAmbience"?Rt(t.context,i):i).catch(()=>{this.engine===t&&this.buffers.delete(a)});return this.buffers.set(a,c),c}async play(a){const t=this.engine;if(!t||document.hidden||this.settings.muted||!this.settings.master||!this.settings.ui)return;const r=performance.now();if(r-(this.last.get(a)??-1/0)<At[a])return;this.last.set(a,r);const l=this.revision,c=await this.load(a);if(!c||this.engine!==t||l!==this.revision||document.hidden||this.settings.muted||t.context.state!=="running"||this.voices.size>=3||performance.now()-r>750)return;const i=t.context.createBufferSource();i.buffer=c,i.connect(t.ui),this.voices.add(i),i.onended=()=>{this.voices.delete(i),i.disconnect()},i.start()}setIndoor(a){this.indoor=a,this.sync()}setWeather(a){this.weatherCue=a==="rainy"?"rainAmbience":"indoorAmbience",this.sync()}visibility=()=>{if(document.hidden){this.revision++,this.stopLoops();for(const a of this.voices)a.stop();this.engine&&this.engine.context.suspend().catch(()=>{})}else this.engine&&this.engine.context.resume().then(()=>this.sync(),()=>{})};stopLoops(){this.loopPending=void 0;const a=this.loop?[...this.retiring,this.loop]:[...this.retiring];for(const{source:t,gain:r}of a)t.stop(),t.disconnect(),r.disconnect();this.retiring.clear(),this.loop=void 0}canLoop(){return this.indoor&&!document.hidden&&!this.settings.muted&&this.settings.master>0&&this.settings.ambience>0&&this.engine?.context.state==="running"}sync(){if(!this.canLoop()){this.stopLoops();return}const a=this.engine,t=this.weatherCue;if(!a)return;if(this.loop?.cue===t){this.loopPending=void 0;return}if(this.loopPending?.cue===t)return;const r={cue:t};this.loopPending=r,this.load(t).then(l=>{if(a!==this.engine||this.loopPending!==r||(this.loopPending=void 0,!l||!this.canLoop()))return;const c=a.context.createBufferSource(),i=a.context.createGain(),g=a.context.currentTime;if(c.buffer=l,c.loop=!0,c.connect(i),i.connect(a.ambience),i.gain.setValueAtTime(0,g),i.gain.linearRampToValueAtTime(t==="rainAmbience"?.65:.4,g+.28),c.start(),this.loop){const m=this.loop;this.retiring.add(m),m.source.onended=()=>{m.source.disconnect(),m.gain.disconnect(),this.retiring.delete(m)},m.gain.gain.cancelAndHoldAtTime(g),m.gain.gain.linearRampToValueAtTime(0,g+.24),m.source.stop(g+.25)}this.loop={cue:t,source:c,gain:i}})}dispose(){this.revision++,this.stopLoops();for(const a of this.voices)a.stop(),a.disconnect();this.voices.clear(),this.last.clear(),this.buffers.clear(),this.engine?.request.abort(),this.engine&&this.engine.context.close().catch(()=>{}),this.engine=void 0}}const ee=new zt;function Et(n){const[a,t]=p.useState(Wn);p.useEffect(()=>(document.addEventListener("visibilitychange",ee.visibility),()=>{document.removeEventListener("visibilitychange",ee.visibility),ee.dispose()}),[]),p.useEffect(()=>{ee.setIndoor(n)},[n]),p.useEffect(()=>{ee.update(a)},[a]);function r(l){const c={...a,...l};t(c),ee.update(c);try{localStorage.setItem(Kn,JSON.stringify(c))}catch{}}return{settings:a,change:r}}function Tt(n){if(!n.isTrusted)return;ee.unlock(n);const a=n.target instanceof Element&&n.target.closest("button, summary");if(!a||a.matches(":disabled,[aria-disabled=true]"))return;const t=a.getAttribute("data-audio");t!=="silent"&&ee.play(t==="archive"||t==="pageTurn"||t==="event"?t:"uiClick")}const wn={meet:"相遇",birthday:"生日（约）",anniversary:"纪念日",milestone:"重要记录"},Dt={responded:"回应",comforted:"陪伴",recovered:"状态已恢复平稳"},Ft={illness:"疾病",accident:"意外"};function Ot({state:n,daily:a,animalLabel:t,memoryReactions:r,incidentResponses:l,getMonth:c,eventReferences:i,milestones:g,onMilestone:m,canLocate:h,onLocate:s,eventDays:b}){const[x,w]=p.useState(null),[y,T]=p.useState(),[N,M]=p.useState(0),[k,S]=p.useState(!1),[A,D]=p.useState(!0),[q,V]=p.useState("");p.useEffect(()=>{let u=!1;const C=setTimeout(()=>{if(!u){try{const B=c(n,x?.year,x?.month);T(B),M(Z=>Math.min(B.days.length,Z)),V("")}catch(B){V(te(B))}D(!1)}},0);return()=>{u=!0,clearTimeout(C)}},[n,x,c]);function U(u,C){u<1||u>9999||(ee.play("pageTurn"),D(!0),V(""),M(0),w({year:u,month:C}))}function X(u){if(!y)return;const C=y.year*12+y.month-1+u;U(Math.floor(C/12),C%12+1)}const F=y?.days[N-1],K=ge(n.run.day),O=y&&F?gn(yn,y.year,y.month,F.day):-1,J=k?[...new Map(a.details(O).map(u=>[u.key,u])).values()]:[],$=k?a.day(O).filter(u=>u.templateId==="trust-change"||u.templateId==="stress-observation"):[],P=J.filter(u=>u.kind==="natural"),ne=J.filter(u=>u.kind==="settled-care").map(u=>({...u,text:Un(u)})).filter(u=>u.text),G=new Set(J.filter(u=>u.kind==="committed-choice").map(u=>u.source.key)),f=k?wt(l,O):[],j=me(n.run.opening.seed,O),z=new Date(0);y&&z.setUTCFullYear(y.year,y.month-1,1);const W=(z.getUTCDay()+6)%7;return e.jsxs("div",{className:"life-calendar","aria-busy":A,children:[y&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"life-calendar-nav",children:[e.jsx("button",{type:"button","data-audio":"silent","aria-label":"上个月",disabled:A||y.year===1&&y.month===1,onClick:()=>X(-1),children:"‹"}),e.jsxs("div",{className:"life-calendar-date",children:[e.jsxs("label",{children:[e.jsx("input",{"aria-label":"年份",type:"number",min:1,max:9999,defaultValue:y.year,onKeyDown:u=>{u.key==="Enter"&&u.currentTarget.blur()},onBlur:u=>{const C=u.currentTarget.valueAsNumber;!Number.isInteger(C)||C<1||C>9999?u.currentTarget.value=String(y.year):C!==y.year&&U(C,y.month)}},y.year)," 年"]}),e.jsxs("label",{children:[e.jsx("select",{"aria-label":"月份",value:y.month,onChange:u=>U(y.year,Number(u.target.value)),children:Array.from({length:12},(u,C)=>e.jsx("option",{value:C+1,children:C+1},C))})," 月"]})]}),e.jsx("button",{type:"button","data-audio":"silent","aria-label":"下个月",disabled:A||y.year===9999&&y.month===12,onClick:()=>X(1),children:"›"})]}),e.jsxs("div",{className:"life-calendar-grid","aria-label":y.year+" 年 "+y.month+" 月日记",children:[["一","二","三","四","五","六","日"].map(u=>e.jsx("span",{className:"life-weekday",children:u},u)),Array.from({length:W},(u,C)=>e.jsx("span",{"aria-hidden":"true"},"gap"+C)),y.days.map(u=>{const C=gn(yn,y.year,y.month,u.day),B=u.entries.length>0||u.marks.length>0||b?.has(C),Z=K!==null&&y.year===K.year&&y.month===K.month&&u.day===K.date,ae=["life-calendar-day",B&&"is-event",Z&&"is-today"].filter(Boolean).join(" ");return e.jsx("button",{type:"button",className:ae,"data-day":C,"data-event-day":B||void 0,"aria-label":u.day+" 日"+(Z?"，今天":"")+(B?"，"+(u.marks.length?u.marks.map(le=>wn[le]).join("、"):"有记录"):""),"aria-pressed":N===u.day,onClick:()=>{M(u.day),S(!0)},children:u.day},u.day)})]},y.year+":"+y.month),F&&k?e.jsx(Ce,{title:y.year+" 年 "+y.month+" 月 "+F.day+" 日日记",onClose:()=>S(!1),children:e.jsxs("div",{className:"life-date-notes",children:[!!F.marks.length&&e.jsx("p",{children:F.marks.map(u=>wn[u]).join(" · ")}),F.entries.length?e.jsx("ul",{children:F.entries.map(u=>e.jsxs("li",{children:[e.jsx("span",{children:u.animalId?t(u.animalId):"共同生活"}),ie(u.kind,u.title,j),G.has(u.id)&&e.jsx("small",{children:" · 已回应"}),g?.filter(C=>C.occurrenceId===u.id&&C.animalId===u.animalId).map(C=>e.jsx("button",{type:"button",className:"life-link",onClick:()=>{S(!1),m?.(C.animalId,C.occurrenceId)},children:C.title},C.achievementId)),h(u.id)&&e.jsx("button",{type:"button",className:"life-link",onClick:()=>{S(!1),s(u.id)},children:"定位故事"}),e.jsx(He,{reaction:r.get(u.id)}),e.jsx(Gn,{eventId:u.kind,lookup:i})]},u.id))}):!$.length&&!ne.length&&!P.length&&!f.length&&e.jsx("p",{children:"这一天没有留下记录。"}),!!f.length&&e.jsx("section",{className:"life-followups","aria-label":"当日事故处理",children:e.jsx("ul",{children:f.map(u=>e.jsxs("li",{"data-response":u.kind,"data-response-day":u.day,children:[t(u.animalId)," · ",Dt[u.kind]??u.kind,u.cause&&u.kind!=="recovered"&&e.jsxs("span",{className:"life-small",children:[" · ",Ft[u.cause]??u.cause]})]},u.sourceKey))})}),!!P.length&&e.jsx("ul",{children:P.map(u=>e.jsxs("li",{children:[e.jsxs("strong",{children:[t(u.animalId)," · 自主记录 · ",u.title]}),e.jsx("p",{children:u.text}),e.jsx(He,{reaction:r.get(u.key)})]},u.key))}),!!ne.length&&e.jsx("section",{"aria-label":"当日照护",children:e.jsx("ul",{className:"life-feedback-lines",children:ne.map(u=>e.jsxs("li",{children:[e.jsx("strong",{children:t(u.animalId)})," ",u.text]},u.key))})}),!!$.length&&e.jsx("section",{"aria-label":"当日生活反馈",children:e.jsx(Pt,{rows:$,animalLabel:t})})]})}):e.jsx("p",{className:"life-small",children:"选择日期，翻阅这一天的记录。"}),x&&e.jsx("button",{type:"button",className:"life-link",disabled:A,onClick:()=>{D(!0),M(0),w(null)},children:"回到当前月"})]}),A&&e.jsx("p",{className:"life-small",role:"status",children:"正在打开日记…"}),q&&e.jsx("p",{role:"alert",children:q})]})}function Bt(n,a){const t=new Map;for(const s of n.ledger)s.eventId==="sys:joined"&&s.animalId&&!t.has(s.animalId)&&t.set(s.animalId,s.id);const r=n.animals.reduce((s,b)=>Math.min(s,b.enteredDay),1/0),l=n.animals.map(s=>({animalId:s.id,day:s.enteredDay,sourceId:t.get(s.id)??null,later:s.enteredDay>r})).sort((s,b)=>s.day-b.day||s.animalId.localeCompare(b.animalId)),c=new Set(l.filter(s=>s.later).map(s=>s.animalId)),i=n.events.flatMap(s=>s.kind==="settled"&&s.animalId&&c.has(s.animalId)?[{animalId:s.animalId,day:s.day,sourceKey:`settled:${s.animalId}:${s.day}`}]:[]).sort((s,b)=>s.day-b.day||s.animalId.localeCompare(b.animalId)),g=n.animals.flatMap(s=>{const b=n.relations.find(y=>y.kind==="person-animal"&&y.to===s.id),x=n.relations.find(y=>y.kind==="animal-animal"&&y.to===s.id),w={animalId:s.id,cohabitationStage:b?.kind==="person-animal"?b.cohabitationStage??null:null,pairFromId:x?.from??null,pairState:x?.state??null};return w.cohabitationStage||w.pairFromId||w.pairState?[w]:[]}),m=n.relations.flatMap(s=>s.kind==="animal-animal"?[{fromId:s.from,toId:s.to,state:s.state}]:[]),h=n.ledger.filter(s=>a.has(s.eventId)).map(s=>({id:s.id,eventId:s.eventId,day:s.day,animalId:s.animalId,title:s.title,outcome:s.outcome}));return{arrivals:l,adaptations:i,currentRelations:g,pairStates:m,interactions:h}}function qt(n){return{responses:n.events.flatMap(t=>t.kind!=="responded"&&t.kind!=="comforted"&&t.kind!=="recovered"?[]:t.animalId?[{animalId:t.animalId,day:t.day,kind:t.kind,cause:t.cause??null,sourceKey:`${t.kind}:${t.animalId}:${t.day}`}]:[]).sort((t,r)=>r.day-t.day||t.animalId.localeCompare(r.animalId))}}const xe=new Intl.NumberFormat("zh-CN",{maximumFractionDigits:4}),Vt=new Intl.NumberFormat("zh-CN",{maximumFractionDigits:4,signDisplay:"exceptZero"}),_t=[["money","金额"],["energy","精力"],["freeTime","空闲时间（小时）"]],Sn={housing:"住房",spending:"日常支出",care:"照护",company:"陪伴"},Cn={frugal:"节俭",normal:"正常消费",generous:"宽裕",basic:"基础照护",standard:"标准照护",attentive:"精心照护"};function Mn(n){return n.kind==="initial"?"起始资源":n.kind==="daily"?"闭日结算":n.request?.kind==="respond"?"寻求帮助":n.request?.kind==="comfort"?"在身旁陪伴":"事件回应"}function Jt({transactions:n,ledger:a,animals:t}){const[r,l]=p.useState(""),c=n.find(m=>m.id===r)??n.at(-1);if(!c)return null;const i=c.kind==="daily"?a.find(m=>m.day===c.day):void 0;function g(m,h){const s=t.find(b=>b.id===h)?.name;return s?Sn[m]+" · "+s:Sn[m]}return e.jsxs("section",{className:"life-resource-history","aria-label":"资源明细",children:[e.jsxs("label",{children:["交易记录",e.jsxs("select",{value:r,onChange:m=>l(m.target.value),children:[e.jsx("option",{value:"",children:"最新交易"}),n.map((m,h)=>e.jsxs("option",{value:m.id,children:[h+1," · 第 ",m.day," 日 · ",Mn(m)]},m.id))]})]}),e.jsxs("table",{children:[e.jsxs("caption",{children:["第 ",c.day," 日 · ",Mn(c)]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"资源"}),e.jsx("th",{scope:"col",children:"变动前"}),e.jsx("th",{scope:"col",children:"变动后"}),e.jsx("th",{scope:"col",children:"变动"})]})}),e.jsx("tbody",{children:_t.map(([m,h])=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:h}),e.jsx("td",{children:xe.format(c.before[m])}),e.jsx("td",{children:xe.format(c.after[m])}),e.jsx("td",{children:Vt.format(c.delta[m])})]},m))})]}),i?.expenseLines&&e.jsxs("table",{children:[e.jsxs("caption",{children:["第 ",i.day," 日支出"]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"科目"}),e.jsx("th",{scope:"col",children:"当日所需"}),e.jsx("th",{scope:"col",children:"实付"}),e.jsx("th",{scope:"col",children:"当日未付"})]})}),e.jsx("tbody",{children:i.expenseLines.map((m,h)=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:g(m.account,m.animalId)}),e.jsx("td",{children:xe.format(m.requested)}),e.jsx("td",{children:xe.format(m.paid)}),e.jsx("td",{children:xe.format(m.shortfall)})]},h))})]}),!!i?.downgrades?.length&&e.jsxs("div",{className:"life-downgrades",children:[e.jsx("h3",{children:"当日降档"}),e.jsx("ul",{children:i.downgrades.map((m,h)=>e.jsxs("li",{children:[g(m.account,m.animalId)," · ",Cn[m.from]??m.from," → ",Cn[m.to]??m.to," · ",m.reason==="below_reserve"?"低于预留金额":"可用金额不足"]},h))})]})]})}const Gt=`/* Spatial measurements and palette derive solely from STUDIO-FINAL-REFERENCE.png. */\r
const finalStudio = Pixel.scene({\r
  name: 'studio-final-reconstruction',\r
  title: '小兽来信 · 最终参考图复原',\r
  means: 'A still cutaway apartment with a left-wall kitchen, rear bed and orange rug.',\r
  hint: '静态场景',\r
  width: 384, height: 256, duration: 1, still: 0, fps: 24,\r
  camera: {az: 45, el: 30, height: 3, scale: 29.3, target: [0, .88, 0]},\r
  sun: {az: -50, el: 53, ambient: .62},\r
  ground: {rx: 5.7, rz: 4.65, wobble: .06, fade: .35, zone: () => 'edge'},\r
  materials: {\r
    edge: {color:'#d9ab7e', tex:'plain', dither:.45},\r
    wall: {ramp:['#ab8c73','#c4aa8f','#d7bfa3','#e7d2b8','#f2e1cb'], tex:'plain', dither:.12},\r
    floor: {ramp:['#71412e','#8e5035','#a36243','#b47951','#c68c62'],tex:'wood',grain:'x',plank:.31,dither:.31,rough:.23},\r
    oak: {ramp:['#6c4230','#8e5335','#aa6a41','#c1804b','#d69c65'],tex:'wood',grain:'y',plank:.46,dither:.32},\r
    top: {ramp:['#77513a','#a36a44','#ba8050','#d1955f','#e4ac76'],tex:'wood',grain:'x',plank:.5,dither:.32},\r
    cream: {ramp:['#a59581','#c1ae97','#dbc7ae','#edddc6','#f6e9d6'],tex:'plain',dither:.13},\r
    sage: {ramp:['#4d5738','#626a43','#79804d','#92995c','#abb173'],tex:'cloth',dither:.38},\r
    seat: {color:'#a3a26d',tex:'cloth',dither:.35},\r
    quilt: {color:'#abb07a',tex:'cloth',dither:.33},\r
    rug: {ramp:['#ab5339','#be6043','#d77552','#e18a63','#ed9b74'],tex:'cloth',dither:.44},\r
    entryMat: {color:'#9a8a70',tex:'cloth',dither:.35},\r
    postPlatform: {ramp:['#93653f','#af7e4d','#c5935c','#d6a56d','#e4b682'],tex:'wood',grain:'x',plank:.45,dither:.3},\r
    postColumn: {ramp:['#ab8055','#bd9365','#d1a879','#e1bc8c','#ebcda1'],tex:'thatch',dither:.34},\r
    litter: {color:'#afa89a',tex:'plain',dither:.24},\r
    glass: {ramp:['#609096','#78a5aa','#92bcc0','#a7cdd0','#bddbd8'],tex:'plain',dither:.2,glow:.51},\r
    tile: {color:'#d6b188',tex:'paving',size:.29,dither:.24},\r
    leaves: {color:'#92964c',tex:'leaf',dither:.32,round:true},\r
    lamp: {ramp:['#b17e45','#d9a664','#efc884','#f6d99f','#ffe7b2'],tex:'plain',glow:.76,dither:.2},\r
  },\r
  build(P) {\r
    const objects = {};\r
    function group(name, x, y, z) {\r
      const node = P.group(x, y, z);\r
      node.name = name;\r
      objects[name] = node;\r
      return node;\r
    }\r
    function plant(name,x,y,z,size) {\r
      const node = group(name,x,y,z);\r
      node.scale.set(size,size,size);\r
      P.cyl(.19,.13,.28,'#ae6648',0,.14,0,node,10);\r
      P.cyl(.19,.19,.035,'#c78258',0,.275,0,node,10);\r
      for (let i=0;i<7;i++) {\r
        const theta=i*2.4;\r
        const leaf=P.ball(.19,'leaves',Math.cos(theta)*.2,.43+(i%3)*.09,Math.sin(theta)*.21,node,7);\r
        leaf.scale.set(1.12,.48,.77);\r
        leaf.rotation.y=theta;\r
        leaf.rotation.z=.28;\r
      }\r
      return node;\r
    }\r
    const shell=group('structure',0,0,0);\r
    P.box(8.8,.16,6.8,'floor',0,-.08,0,shell);\r
    P.box(.19,2.95,6.8,'wall',-4.4,1.475,0,shell);\r
    P.box(8.8,2.95,.19,'wall',0,1.475,-3.4,shell);\r
    P.box(.23,.055,6.85,'cream',-4.4,2.97,0,shell);\r
    P.box(8.85,.055,.23,'cream',0,2.97,-3.4,shell);\r
    P.box(.08,.14,6.6,'oak',-4.28,.07,0,shell);\r
    P.box(8.6,.14,.08,'oak',0,.07,-3.28,shell);\r
    const door=group('door',-4.25,0,2.53);\r
    P.box(.13,2.23,.9,'oak',0,1.115,0,door);\r
    P.box(.045,1.95,.7,'#ad7147',.083,1.1,0,door);\r
    for(const y of [.55,1.53]) P.box(.035,.66,.55,'oak',.105,y,0,door);\r
    P.box(.08,.09,.1,'#604c3b',.145,1.02,-.29,door);\r
    const entryMat=group('entry mat',-3.46,0,2.53);\r
    P.box(.76,.031,.62,'entryMat',0,.022,0,entryMat);\r
    const entryCabinet=group('entry cabinet',-3.96,0,3.18);\r
    P.box(.52,.61,.32,'oak',0,.309,0,entryCabinet);\r
    P.box(.56,.055,.34,'top',0,.641,0,entryCabinet);\r
    P.box(.025,.49,.25,'oak',.27,.337,0,entryCabinet);\r
    const entryLamp=group('entry lamp',-3.96,.669,3.18);\r
    P.cyl(.095,.105,.043,'oak',0,.023,0,entryLamp,10);\r
    P.cyl(.046,.048,.13,'oak',0,.102,0,entryLamp,8);\r
    P.cyl(.087,.128,.149,'lamp',0,.221,0,entryLamp,12);\r
    const fridge=group('fridge',-3.88,0,1.62);\r
    P.box(.77,1.83,.86,'cream',0,.915,0,fridge);\r
    P.box(.09,1.05,.83,'cream',.39,1.29,0,fridge);\r
    P.box(.09,.69,.83,'cream',.39,.37,0,fridge);\r
    for(const y of [.59,1.63]) P.box(.012,.075,.066,'#ae9775',.439,y,-.31,fridge);\r
    const galley=group('kitchen',-3.82,0,.27);\r
    P.box(.9,.82,1.82,'oak',0,.41,0,galley);\r
    P.box(.98,.09,1.9,'cream',0,.865,0,galley);\r
    for(const z of [-.59,0,.59]) {\r
      P.box(.038,.62,.53,'oak',.466,.43,z,galley);\r
      P.box(.045,.22,.044,'cream',.5,.55,z+.18,galley);\r
    }\r
    P.box(.54,.023,.56,'#6e6357',.02,.924,-.42,galley);\r
    P.box(.43,.014,.43,'#81796e',.02,.937,-.42,galley);\r
    P.line([[-.27,.91,-.65],[-.27,1.16,-.65],[-.1,1.21,-.65],[.02,1.13,-.65]],'#5c5245',galley);\r
    P.box(.53,.025,.57,'#4c473d',0,.925,.4,galley);\r
    for(const z of [.27,.52]) P.cyl(.12,.12,.012,'#686052',.02,.94,z,galley,8);\r
    P.box(.07,.83,1.94,'tile',-.48,1.29,0,galley);\r
    P.box(.48,.09,2.03,'top',-.3,1.75,0,galley);\r
    for(const [z,c] of [[.68,'cream'],[.26,'glass'],[-.16,'glass']]) {\r
      P.cyl(.14,.12,.29,c,-.26,1.94,z,galley,8);\r
      P.cyl(.15,.15,.05,'cream',-.26,2.106,z,galley,8);\r
    }\r
    plant('shelf plant',-4.04,1.81,-.68,1.15);\r
    const bed=group('bed',-2.55,0,-2.35);\r
    P.box(2.57,.45,1.54,'oak',0,.28,0,bed);\r
    P.box(.14,1.14,1.62,'oak',-1.3,.61,0,bed);\r
    P.box(2.49,.23,1.5,'cream',0,.6,0,bed);\r
    for(const z of [-.39,.39]) {\r
      const pillow=P.box(.59,.23,.66,z<0?'seat':'cream',-.82,.79,z,bed);\r
      pillow.rotation.z=.12;\r
    }\r
    for(let row=0;row<6;row++) for(let col=0;col<5;col++) {\r
      const mat=(row+col)%2?'cream':'quilt';\r
      P.box(.286,.045,.302,mat,-.29+row*.283,.737,-.605+col*.302,bed);\r
      if(row===5) P.box(.055,.2,.302,mat,1.15,.64,-.605+col*.302,bed);\r
    }\r
    const stand=group('nightstand',-3.97,0,-1.22);\r
    P.box(.55,.59,.54,'oak',0,.3,0,stand);\r
    P.box(.63,.07,.62,'top',0,.626,0,stand);\r
    P.box(.02,.31,.39,'#604b39',.28,.28,0,stand);\r
    for(const [z,c] of [[-.12,'cream'],[0,'#a5a58d'],[.12,'cream']]) P.box(.04,.24,.08,c,.298,.25,z,stand);\r
    const lamp=group('bedside lamp',-3.97,.661,-1.22);\r
    P.cyl(.125,.14,.06,'oak',0,.03,0,lamp,10);\r
    P.cyl(.13,.18,.26,'lamp',0,.201,0,lamp,12);\r
    const window=group('window',1.98,1.66,-3.26);\r
    P.box(3.95,1.68,.04,'glass',0,0,0,window);\r
    for(const x of [-2,0,2]) P.box(.105,1.8,.11,'oak',x,0,.052,window);\r
    for(const y of [-.86,0,.86]) P.box(4.08,.107,.12,'top',0,y,.058,window);\r
    for(const x of [-2.03,2.03]) for(let i=0;i<3;i++) P.box(.106,1.86,.16,'cream',x+(x<0?-i:i)*.084,0,.155,window);\r
    for(const x of [-1.35,.43,1.02]) P.line([[x,-.53,.026],[x+.3,-.22,.026]],'#accbd0',window);\r
    P.box(4.35,.12,.56,'top',0,-.94,.21,window);\r
    plant('sill plant',.36,.78,-2.97,1.05);\r
    const chest=group('handleless low cupboard',2.62,0,-3.01);\r
    P.box(2.01,.58,.6,'oak',0,.29,0,chest);\r
    P.box(2.12,.08,.66,'top',0,.62,0,chest);\r
    for(const x of [-.66,0,.66]) P.box(.623,.48,.03,'oak',x,.3,.314,chest);\r
    for(const [x,w,h] of [[-3.3,.57,.65],[-2.11,.46,.57]]) {\r
      const picture=group('frame '+x,x,2.16,-3.27);\r
      P.box(w,h,.075,'oak',0,0,0,picture);\r
      P.box(w-.09,h-.09,.025,'cream',0,0,.05,picture);\r
      P.cyl(w*.21,w*.21,.02,x< -3?'#ba7549':'sage',0,0,.066,picture,8).rotation.x=Math.PI/2;\r
    }\r
    // Translate the lounge together so seat-to-table spacing stays fixed.\r
    const loungeX=.88, loungeZ=-.56;\r
    const sofa=group('sofa',-2.45+loungeX+.24,0,1.9+loungeZ+.016);\r
    P.box(1.04,.38,1.94,'sage',0,.32,0,sofa);\r
    P.box(.24,.8,1.99,'sage',-.44,.646,0,sofa).rotation.z=.07;\r
    for(const z of [-.92,.92]) P.box(1.12,.6,.22,'sage',0,.57,z,sofa);\r
    for(const z of [-.45,.45]) P.box(.75,.17,.779,'seat',.08,.545,z,sofa);\r
    for(const z of [-.78,.78]) for(const x of [-.4,.4]) P.box(.12,.17,.13,'oak',x,.085,z,sofa);\r
    P.box(.19,.48,.45,'#d49b66',-.26,.8,.11,sofa).rotation.z=.21;\r
    const rug=group('warm red rug',-.06+loungeX,0,2.01+loungeZ);\r
    P.box(3.53,.035,2.53,'rug',0,.022,0,rug);\r
    for(const z of [-1.196,1.196]) P.box(3.38,.012,.027,'#c77954',0,.046,z,rug);\r
    const table=group('round table',-.17+loungeX,0,2.05+loungeZ);\r
    table.scale.set(1.15,1,1.15);\r
    P.cyl(.72,.69,.13,'top',0,.58,0,table,20);\r
    for(let i=0;i<3;i++) {\r
      const a=i*2*Math.PI/3;\r
      P.cyl(.055,.07,.52,'oak',Math.cos(a)*.45,.289,Math.sin(a)*.45,table,7).rotation.z=-Math.cos(a)*.19;\r
    }\r
    P.box(.33,.06,.26,'cream',.23,.681,.07,table).rotation.y=.22;\r
    P.cyl(.095,.085,.2,'cream',-.24,.752,-.16,table,10);\r
    P.cyl(.07,.07,.008,'#775741',-.24,.854,-.16,table,10);\r
    P.cyl(.38,.35,.23,'cream',-.1,.157,3.03,group('floor cushion',loungeX-.48,0,loungeZ+.32),14);\r
    const nest=group('animal bed',1.76,0,-1.94);\r
    P.cyl(.47,.42,.2,'cream',0,.128,0,nest,16);\r
    P.cyl(.359,.359,.018,'#c5a686',0,.235,0,nest,16);\r
    const post=group('activity pedestal',3.95,0,-2.26);\r
    P.box(.74,.1,.71,'postPlatform',0,.067,0,post);\r
    P.cyl(.102,.102,.87,'postColumn',0,.542,0,post,8);\r
    P.box(.69,.12,.66,'postPlatform',0,1.013,0,post);\r
    P.line([[.285,.97,.26],[.285,.65,.26]],'#875a3e',post);\r
    P.ball(.085,'top',.285,.63,.26,post,8);\r
    const bowls=group('bowls',2.89,0,-.87);\r
    P.box(1.04,.09,.55,'top',0,.05,0,bowls);\r
    for(const x of [-.245,.245]) {\r
      P.cyl(.206,.164,.137,'glass',x,.157,0,bowls,12);\r
      P.cyl(.148,.148,.012,'#67878a',x,.23,0,bowls,12);\r
    }\r
    const litterTray=group('litter tray',3.66,0,1.83);\r
    P.box(.92,.078,.67,'cream',0,.045,0,litterTray);\r
    P.box(.761,.034,.52,'litter',0,.102,0,litterTray);\r
    for (const x of [-.427,.427]) P.box(.066,.205,.67,'cream',x,.145,0,litterTray);\r
    P.box(.79,.205,.068,'cream',0,.145,-.3,litterTray);\r
    for (const x of [-.306,.306]) P.box(.18,.14,.068,'cream',x,.116,.3,litterTray);\r
    P.box(.434,.068,.068,'cream',0,.08,.3,litterTray);\r
    const yarn=group('yarn',1.3,0,2.37);\r
    P.ball(.137,'#b66851',0,.14,0,yarn,10);\r
    P.line([[.08,.12,0],[.23,.015,.11],[.35,.015,.08],[.49,.015,.21]],'#b66851',yarn);\r
    return {objects, activityFloor:{x:[-.8,2.3],z:[-1.3,.65]},hot:[]};\r
  },\r
  tick() {},\r
});\r
`,Ut=`/* The gameplay anchors follow the approved studio's furniture coordinates. */\r
(function () {\r
  const floor = (x,z) => [x,.045,z];\r
  const anchors = {\r
    sofa: {slots:[[-1.17,.635,1.35], floor(-.64,1.35)], yaw:-.35, layer:'sofa'},\r
    cat_tree: {slots:[[3.95,1.078,-2.26], floor(3.91,-1.54)], yaw:-2.25, layer:'platform'},\r
    window: {slots:[[.95,.785,-3.04], floor(.95,-2.35)], yaw:1.12, layer:'sill'},\r
    bowl: {slots:[floor(2.55,-.33), floor(3.56,-.65)], yaw:1.45, layer:'floor'},\r
    rug: {slots:[floor(-.13,.52), floor(1.76,.62)], yaw:-.55, layer:'floor'},\r
    toy: {slots:[floor(1.48,2.67), floor(2.5,2.43)], yaw:1.3, layer:'floor'},\r
    rest: {slots:[[1.76,.247,-1.94], [-2.12,.764,-2.24], floor(-.86,-1.07)], yaw:-.48, layer:'basket'},\r
  };\r
  const [basketSeat,bedSeat] = anchors.rest.slots;\r
  const slotsFor = plan => plan.anchorId==='rest' && plan.behavior==='sleep'\r
    ? [bedSeat,basketSeat,anchors.rest.slots[2]]\r
    : anchors[plan.anchorId].slots;\r
  const links = [\r
    [anchors.cat_tree.slots[0],anchors.cat_tree.slots[1]],\r
    [anchors.window.slots[0],anchors.window.slots[1]],\r
    [basketSeat,floor(1.23,-1.51)],\r
    [bedSeat,floor(-2.12,-.85)],\r
    [anchors.sofa.slots[0],anchors.sofa.slots[1]],\r
  ];\r
  const obstacles = [\r
    [-4.41,-3.31,-.76,2.12], // Kitchen and refrigerator\r
    [-4.41,-3.6,2.97,3.4],   // Entry cabinet\r
    [-3.91,-1.16,-3.22,-1.44], // Bed\r
    [-4.32,-3.58,-1.6,-.85], // Nightstand\r
    [-1.99,-.65,.25,2.46],   // Sofa\r
    [1.46,3.78,-3.4,-2.57],  // Cupboard\r
    [3.52,4.36,-2.69,-1.8],  // Activity pedestal\r
    [2.29,3.49,-1.23,-.51],  // Bowl stand\r
    [3.12,4.22,1.39,2.26],   // Litter tray\r
  ];\r
  const circles = [\r
    [.71,1.49,.94],  // Round table\r
    [1.76,-1.94,.49], // Animal bed\r
    [.30,2.79,.45],   // Floor cushion\r
    [1.3,2.37,.17],   // Yarn\r
  ];\r
  const isFloor = point => point[1] === .045;\r
  const distance = (a,b) => Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2]);\r
  const between = (a,b,f) => a.map((value,i) => value+(b[i]-value)*f);\r
  const supportY = ([x,y,z]) => {\r
    if (y !== .045) return y;\r
    const inset = Math.min(x+.945,2.585-x,z-.185,2.715-z);\r
    return .005+.037*easeCatMotion((inset+.05)/.1);\r
  };\r
  const clearFloor = ([x,,z]) =>\r
    x > -4.22 && x < 4.22 && z > -3.16 && z < 3.24 &&\r
    !obstacles.some(([xmin,xmax,zmin,zmax]) => x>xmin && x<xmax && z>zmin && z<zmax) &&\r
    !circles.some(([cx,cz,radius]) => Math.hypot(x-cx,z-cz)<radius);\r
  const near = (a,b) => Math.hypot(a[0]-b[0],a[2]-b[2])<.94 && Math.abs(a[1]-b[1])<.67;\r
  function along(a,b,clear) {\r
    const count = Math.max(1,Math.ceil(distance(a,b)/.05));\r
    for (let step=0;step<=count;step++) if (!clear(between(a,b,step/count))) return false;\r
    return true;\r
  }\r
  const waypoints = [];\r
  for (let x=-4; x<=4; x+=.45) for (let z=-2.9; z<=3.12; z+=.45) {\r
    const point = floor(x,z);\r
    if (clearFloor(point)) waypoints.push(point);\r
  }\r
  const graph = [...new Set([...Object.values(anchors).flatMap(anchor => anchor.slots), ...links.flat(), ...waypoints])];\r
  const network = new Map(graph.map(a => [a, graph.filter(b => a!==b && (\r
    links.some(([from,to]) => (from===a && to===b) || (from===b && to===a)) ||\r
    (isFloor(a) && isFloor(b) && distance(a,b)<1.25 && along(a,b,clearFloor))\r
  ))]));\r
  function route(from, to, others) {\r
    const best = new Map([[from,{cost:0, points:[from]}]]);\r
    const pending = new Set([from]);\r
    while (pending.size) {\r
      const at = [...pending].reduce((a,b) => best.get(a).cost<=best.get(b).cost?a:b);\r
      pending.delete(at);\r
      const path = best.get(at);\r
      if (at===to) return path.points;\r
      for (const next of network.get(at)) {\r
        const cost = path.cost+distance(at,next);\r
        if (cost >= (best.get(next)?.cost ?? Infinity) ||\r
            !along(at,next,p => others.every(other => !near(p,other)))) continue;\r
        best.set(next,{cost,points:[...path.points,next]});\r
        pending.add(next);\r
      }\r
    }\r
    return null;\r
  }\r
\r
  // The rig nose is +X; Diorama yaw maps it to (cos(yaw), -sin(yaw)).\r
  const travelYaw = (from, to) => Math.atan2(from[2] - to[2], to[0] - from[0]);\r
\r
  const priorityOrder = (a,b) => b.priority-a.priority || a.id.localeCompare(b.id);\r
\r
\r
  function createStudioRoom(cats) {\r
    const pets = cats.map(cat => ({\r
      id:cat.id, name:cat.name, x:0, z:0, scale:cat.scale, stage:cat.stage, tone:cat.tone,\r
      variant:'oval', fur:cat.tone ? '#77728a' : 'fur', pattern:'tabby',\r
    }));\r
    let plans = new Map(cats.map(cat => [cat.id,cat]));\r
    const seats = new Map();\r
    for (const cat of [...cats].sort(priorityOrder)) {\r
      const anchor = anchors[cat.anchorId];\r
      const seat = [...slotsFor(cat),...anchors.rug.slots].find(p => [...seats.values()].every(other => !near(p,other.slot)));\r
      seats.set(cat.id,{slot:seat, position:seat, yaw:anchor.yaw, rest:Number(cat.behavior==='sleep'), arrived:0, reaction:-10});\r
    }\r
    let trip = null, clock = 0, frozen = false, reconsiderAt = 0;\r
    const hits = new Map(), counts = {};\r
    let visible = [], paintedCats = [], minimumSeparation = Infinity, maxStep = 0;\r
\r
    function schedule(now) {\r
      if (trip || now<reconsiderAt || frozen) return;\r
      reconsiderAt = now+.3;\r
      if ([...seats.values()].some(seat => seat.recover || distance(seat.slot,seat.position)>.002)) return;\r
      for (const plan of [...plans.values()].sort(priorityOrder)) {\r
        const seat = seats.get(plan.id);\r
        const others = [...seats.values()].filter(other => other!==seat).flatMap(other => [other.slot,other.position]);\r
        const path = slotsFor(plan)\r
          .map(to => route(seat.slot,to,others)).find(Boolean);\r
        if (path?.length>1) {\r
          trip = {id:plan.id, path, index:1, start:now, yaw:seat.yaw};\r
          return;\r
        }\r
      }\r
    }\r
\r
\r
    function scene(base) {\r
      return {\r
        ...base,\r
        materials: {...base.materials, fur:{color:'#b97742',tex:'plain',dither:.3}},\r
        build(P) {\r
          hits.clear();\r
          const parts = base.build(P);\r
          const features = {\r
            sofa:'沙发', 'animal bed':'猫窝', 'warm red rug':'地毯', bed:'小床',\r
            'round table':'圆桌', kitchen:'厨房', 'shelf plant':'绿植', 'sill plant':'绿植',\r
            'activity pedestal':'猫爬架', window:'窗台', bowls:'食盆', yarn:'玩具',\r
          };\r
          parts.cats = pets.map(data => createNaturalLivingCat(P, data));\r
          parts.cats.forEach(cat => hits.set(cat.root,{animalId:cat.data.id}));\r
          Object.entries(features).forEach(([name,feature]) => hits.set(parts.objects[name],{feature}));\r
          parts.hot = [...hits.keys()];\r
          return parts;\r
        },\r
        tick(ctx) {\r
          base.tick(ctx);\r
          const elapsed = frozen ? 0 : Math.min(.12,Math.max(0,ctx.t-clock));\r
          clock = ctx.t;\r
          schedule(clock);\r
          paintedCats = ctx.parts.cats;\r
          visible = paintedCats.map((cat,index) => {\r
            const id = cat.data.id;\r
            const seat = seats.get(id);\r
            const plan = plans.get(id);\r
            const anchor = anchors[plan.anchorId];\r
            const traveling = trip?.id===id;\r
            const here = slotsFor(plan).includes(seat.slot);\r
            const behavior = traveling ? 'transit' : here ? plan.behavior : 'waiting';\r
            const previous = seat.position;\r
            let gait = 0, stride = 0, lift = 0;\r
            let position = seat.slot;\r
            if (traveling && !frozen) {\r
              const from = trip.path[trip.index-1], to = trip.path[trip.index];\r
              const raised = !isFloor(from) || !isFloor(to);\r
              const length = distance(from,to);\r
              const duration = raised ? .82 : Math.max(.9,length*2.7);\r
              const age = clock-trip.start;\r
              const fraction = Math.min(1,Math.max(0,(age-.28)/duration));\r
              const f = easeCatMotion(fraction);\r
              position = between(from,to,f);\r
              gait = Math.sin(Math.PI*f)**.5;\r
              stride = f*length*2*Math.PI/(.163*cat.data.scale);\r
              seat.yaw = turnCat(trip.yaw,travelYaw(from,to),Math.min(1,age/.28));\r
              if (raised) lift = Math.sin(Math.PI*f)*(.22+Math.abs(from[1]-to[1])*.26);\r
              if (fraction===1) {\r
                seat.slot = to;\r
                if (++trip.index===trip.path.length) {\r
                  seat.arrived = clock;\r
                  trip = null;\r
                } else {\r
                  trip.start = clock;\r
                  trip.yaw = seat.yaw;\r
                }\r
              }\r
            } else if (seat.recover && !frozen) {\r
              const fraction = Math.min(1,(clock-seat.recover.start)/.56);\r
              position = between(seat.recover.from,seat.slot,easeCatMotion(fraction));\r
              gait = Math.sin(Math.PI*fraction);\r
              stride = easeCatMotion(fraction)*distance(seat.recover.from,seat.slot)*2*Math.PI/(.163*cat.data.scale);\r
              if (fraction===1) {\r
                seat.recover = null;\r
                seat.arrived = clock;\r
              }\r
            } else if (!frozen) {\r
              const phase = clock-seat.arrived+index*1.25;\r
              let yaw = here ? anchor.yaw : -.55;\r
              if (!trip && isFloor(position) && ['wander','play','approach','avoid'].includes(behavior)) {\r
                const play = behavior==='play';\r
                const pace = behavior==='avoid' ? [-.17,.05] : play ? [-.055,.13] : [.19,.03];\r
                const out = easeCatMotion((phase-1.6)/(play?.62:3.4));\r
                const back = easeCatMotion((phase-(play?4:9.2))/(play?1.3:3.4));\r
                const shift = out-back;\r
                const target = [position[0]+pace[0]*shift,position[1],position[2]+pace[1]*shift];\r
                const others = [...seats.values()].filter(other => other!==seat);\r
                // Skip the acting distance when a neighbor's reserved space is near.\r
                if (clearFloor(target) && others.every(other => !near(target,other.position) && !near(target,other.slot))) {\r
                  position = target;\r
                  gait = Math.sin(Math.PI*(phase < (play?3:7.9) ? out : back))**.65;\r
                  stride = 2*Math.PI*Math.hypot(...pace)*(out+back)/(.163*cat.data.scale);\r
                  lift = play ? .075*gait : 0;\r
                  if (behavior==='wander') {\r
                    const direction = Math.atan2(-pace[1],pace[0]);\r
                    yaw = phase<7.9 ? turnCat(anchor.yaw,direction,(phase-.45)/1.15)\r
                      : phase<13.2 ? turnCat(direction,direction+Math.PI,(phase-7.9)/1.3)\r
                      : turnCat(direction+Math.PI,anchor.yaw,(phase-13.2)/1.3);\r
                  }\r
                }\r
              }\r
              seat.yaw = turnCat(seat.yaw,yaw,Math.min(1,elapsed*16));\r
            }\r
\r
            // Use actual ground displacement in transit, pacing, and recovery.\r
            if (!frozen && Math.hypot(position[0]-previous[0], position[2]-previous[2]) > 1e-6) {\r
              seat.yaw = travelYaw(previous,position);\r
            }\r
            seat.position = position;\r
            const targetRest = Number(behavior==='sleep');\r
            seat.rest += Math.sign(targetRest-seat.rest)*Math.min(Math.abs(targetRest-seat.rest),elapsed/.55);\r
            const response = frozen ? 0 : Math.max(0,1-(clock-seat.reaction)/.7);\r
            const t = frozen ? 0 : clock;\r
            cat.motion = {mode:'observe', time:t%16, seconds:t%16, facing:seat.yaw, rest:seat.rest};\r
            poseNaturalLivingCat(cat,0,(t%16)/16,false,'observe');\r
            const rest = easeCatMotion(seat.rest);\r
            cat.root.position.set(position[0],supportY(position)+lift,position[2]);\r
            cat.root.rotation.y = seat.yaw;\r
            cat.torso.position.y += .012*gait*Math.sin(stride*2);\r
            cat.head.rotation.y += response*(cat.data.tone ? -.27 : .47) + (behavior==='observe'?.18:0);\r
            cat.head.rotation.z += response*.13 + (behavior==='play' ? .16 : 0);\r
            cat.ears.forEach((ear,i) => {ear.rotation.x += response*.18*Math.sin(t*20+i);});\r
            cat.tail.rotation.z -= response*(cat.data.tone ? .12 : .43);\r
            cat.feet.forEach((foot,i) => {\r
              const sweep = stride+[0,Math.PI,Math.PI*.68,Math.PI*1.68][i];\r
              const step = Math.max(0,Math.sin(sweep))*gait*(1-rest);\r
              foot.hip.position.y += .043*step;\r
              // Local +X points toward the nose. When planted (sin <= 0),\r
              // the foot must sweep toward -X as phase increases.\r
              foot.hip.rotation.z = -.32*gait*Math.cos(sweep)*(1-rest);\r
              foot.ankle.rotation.z = -.19*step;\r
            });\r
            if (elapsed) {\r
              counts[behavior] = (counts[behavior] || 0)+1;\r
              maxStep = Math.max(maxStep,distance(previous,position));\r
            }\r
            const layer = traveling ? 'path' : seat.slot===bedSeat ? 'bed'\r
              : here && anchor.slots[0]===seat.slot ? anchor.layer : 'floor';\r
            return {id, behavior, anchor:plan.anchorId, layer, at:[position[0],supportY(position)+lift,position[2]], yaw:seat.yaw, stride, gait, traveling};\r
          });\r
          if (visible.length===2) minimumSeparation = Math.min(minimumSeparation,distance(visible[0].at,visible[1].at));\r
        },\r
      };\r
    }\r
    return {\r
      scene,\r
      setPlans(cats) {\r
        for (const cat of cats) {\r
          const previous = plans.get(cat.id), seat = seats.get(cat.id);\r
          if (previous.anchorId!==cat.anchorId || previous.behavior!==cat.behavior) {\r
            seat.arrived = clock;\r
            if (trip?.id!==cat.id && distance(seat.position,seat.slot)>.002) {\r
              seat.recover = {from:seat.position,start:clock};\r
            }\r
          }\r
        }\r
        plans = new Map(cats.map(cat => [cat.id,cat]));\r
      },\r
      setReduced(value) {\r
        frozen = value;\r
        if (!frozen) return;\r
        trip = null;\r
        for (const seat of seats.values()) seat.recover = null;\r
      },\r
      react(id) {if (seats.has(id)) seats.get(id).reaction = clock;},\r
      hit(node) {return hits.get(node);},\r
      metrics() {\r
        return {animals:visible.map((animal,i) => {\r
          const cat = paintedCats[i];\r
          return {...animal, nose:cat.nose.worldPoint(0,0,0),\r
            eyes:cat.openEyes.map(eye => eye.worldPoint(0,0,0)),\r
            front:cat.root.worldPoint(.2,0,0), rear:cat.root.worldPoint(-.2,0,0)};\r
        }), counts:{...counts}, minimumSeparation, maxStep};\r
      },\r
    };\r
  }\r
  window.createStudioRoom = createStudioRoom;\r
})();\r
`,Kt={width:384,height:256};function Wt(n){return n==="rainy"||n==="snowy"}const Xe=window,Yt={sunny:"#a8ced3",cloudy:"#9cabb4",rainy:"#728894",snowy:"#b3c5d2",dusk:"#d5a994",night:"#38475f"};let Pn=!1;function Ht(n){return Pn||(it(),ot([Gt,"window.approvedStudioScene = finalStudio;",Ut].join(`
`)),Pn=!0),Xe.createStudioRoom(n)}function Ln(n,a,t,r,l,c){a.classList.add("studio-stage");const i=Xe.approvedStudioScene,{weather:g,period:m}=t,h=m==="day",s=h&&g==="sunny",b=g==="rainy",x=g==="snowy",w=n.scene({...i,still:r,materials:i.materials,clearColor:getComputedStyle(a).getPropertyValue("--studio-stage-paper").trim(),sun:s?i.sun:{...i.sun,el:h?65:60,ambient:m==="night"?.26:m==="dusk"?.49:.52},build(y){const T=i.build(y),N=T.objects.window,M={color:Yt[h?g:m],tex:"plain",dither:.19,glow:.78},k=[];for(const S of[-1,1])for(const A of[-.42,.42])if(s||y.box(1.88,.74,.012,M,S,A,.028,N),x&&y.box(1.8,.095,.014,{color:"#dce5e8",glow:.66},S,A-.313,.04,N),b||x)for(let D=0;D<(b?5:4);D++){const q=y.box(b?.014:.04,b?.096:.04,.012,{color:b?"#c2d5de":"#eef3ee",glow:.85},S,A,.041,N);b&&(q.rotation.z=-.14),k.push({node:q,x:S,y:A,index:D})}if(!h){const S=T.objects["bedside lamp"];y.cyl(.132,.182,.263,{color:m==="night"?"#f8cb83":"#eed2a5",glow:.92},0,.201,0,S,12),y.cyl(.143,.145,.024,{color:"#efb96e",glow:.85},0,.079,0,S,12)}return{...T,precipitation:k}},tick(y){const T=l()?0:y.t;for(const{node:N,x:M,y:k,index:S}of y.parts.precipitation??[]){const A=(T*(b?.97:.24)+S*.257+M*.113+k*.27+2)%1;N.position.x=M-.74+S*(b?.34:.43)+(b?A*.075:Math.sin(T+S)*.055),N.position.y=k+.295-A*.59}}});return Xe.Pixel.mount(w,a,{still:!0,pointer:!1})}const Xt=24,$t={kitten:.74,young_adult:.92,senior:.96},{width:Je,height:Ge}=Kt;function Zt({animals:n,plans:a,environment:t=mt,reduced:r,feedback:l,onHit:c}){const i=p.useRef(null),g=p.useRef(null),m=p.useRef({cats:[],reduced:r,environment:t}),h=n.flatMap((N,M)=>{if(!N.scene)return[];const k=a.find(A=>A.animalId===N.id),S=N.stage?.id;return[{id:N.id,name:N.name,stage:S,tone:M%2,scale:$t[S??""]??1,anchorId:k?.anchorId??N.scene.anchorId,behavior:k?.behavior??N.scene.poseId,priority:k?.priority??0}]}),s=JSON.stringify(h.map(({id:N,name:M,stage:k,tone:S})=>[N,M,k,S]));m.current={cats:h,reduced:r,environment:t};const{weather:b,period:x}=t,w=On[b]+" · "+Bn[x];p.useLayoutEffect(()=>{const N=i.current;if(!N)return;const M=Ht(m.current.cats);M.setReduced(m.current.reduced);let k=0,S=0,A=0,D=0,q=!1;const V=()=>m.current.reduced;let U=m.current.environment,X=Ln(M,N,U,S,V);const F=()=>q&&!document.hidden&&!V()&&(m.current.cats.length>0||Wt(m.current.environment.weather)),K=()=>X.renderAt(S);function O(P){k=0,F()&&(A&&(S+=Math.min(P-A,100)/1e3),A=P,P>=D&&(K(),D=Math.max(D+1e3/Xt,P)),k=requestAnimationFrame(O))}function J(){F()?k||(k=requestAnimationFrame(O)):(cancelAnimationFrame(k),k=A=D=0)}const $=new IntersectionObserver(([P])=>{q=P.isIntersecting,J()});return $.observe(N),document.addEventListener("visibilitychange",J),g.current={room:M,pickAt:(P,ne)=>X.pickAt(P,ne),refresh(){const P=m.current;M.setPlans(P.cats),M.setReduced(P.reduced),U.weather!==P.environment.weather||U.period!==P.environment.period?(X.destroy(),U=P.environment,X=Ln(M,N,U,S,V)):K(),J()}},()=>{$.disconnect(),document.removeEventListener("visibilitychange",J),cancelAnimationFrame(k),X.destroy(),g.current=null}},[s]);const y=JSON.stringify(h);p.useLayoutEffect(()=>{g.current?.refresh()},[y,s,b,x,r]),p.useLayoutEffect(()=>{ee.setWeather(b)},[b]),p.useLayoutEffect(()=>{l.target&&!r&&g.current?.room.react(l.target)},[l,r]);function T(N){const M=g.current;if(!M)return;const k=N.currentTarget.getBoundingClientRect(),S=M.pickAt(Je*(N.clientX-k.left)/k.width,Ge*(N.clientY-k.top)/k.height),A=S&&M.room.hit(S);A&&c(A)}return e.jsxs("figure",{className:"life-room","aria-label":"窗边客厅","data-weather":b,"data-period":x,children:[e.jsx("div",{className:"life-room-image",children:e.jsx("canvas",{ref:i,width:Je,height:Ge,onClick:T,style:{aspectRatio:Je+" / "+Ge},role:"img","aria-label":w+"的像素小屋。也可使用下方按钮轻唤动物。"})}),e.jsxs("figcaption",{children:[e.jsx("div",{className:"life-room-note","aria-live":"polite",children:e.jsx("span",{className:l.sequence?"life-room-response":void 0,children:l.text},l.sequence)}),e.jsx("div",{className:"life-calls",children:h.map(N=>e.jsxs("button",{type:"button","data-audio":"silent",onClick:()=>c({animalId:N.id}),children:["轻唤 ",N.name]},N.id))})]})]})}const Qt=n=>"fursona:v46:web:confirmed:"+encodeURIComponent(n);function es(n){try{const a=sessionStorage.getItem(n);if(a===null)return null;const t=JSON.parse(a);if(typeof t?.commandId!="string"||typeof t.targetId!="string"||!Number.isSafeInteger(t.transactionCount)||t.transactionCount<1)return null;if(t.kind==="respond"||t.kind==="comfort"||t.kind==="resolve"&&typeof t.choice=="string")return t}catch{}return null}const ns=new Set(qn.events.filter(n=>n.kind==="daily").map(n=>n.id)),ts=new Set(qn.events.filter(n=>n.kind==="multipet"||(n.requires?.minAnimals??0)>1).map(n=>n.id)),ss=[1,7,30],$e=[180,365],as=$e[$e.length-1],oe=new Intl.NumberFormat("zh-CN",{maximumFractionDigits:2}),rs={kitten:"幼年",adult:"成年",young:"青年",young_adult:"青年",mature:"成熟期",senior:"老年"},is={normal:"未评估",stable:"平稳",frail:"体弱",injured:"受伤",recovering:"恢复中",unknown:"未知"},os={event:"事件",shared:"共同生活",growth:"成长",recovery:"恢复",care:"照护",daily:"日常"},ls=n=>n==="recovered"?"recovery":"care",cs={responded:"照护回应",comforted:"照护陪伴",recovered:"恢复记录"},ds={illness:"疾病",accident:"意外"},ue={work:{none:"不工作",part:"兼职",full:"全职",overtime:"加班"},spending:{frugal:"节俭",normal:"正常消费",generous:"宽裕"},care:{basic:"基础照护",standard:"标准照护",attentive:"精心照护"}};function us({view:n,busy:a,update:t,state:r,life:l}){const{policy:c,human:i}=n,[g,m]=p.useState(!1);return e.jsxs("details",{className:"life-human",children:[e.jsxs("summary",{children:[e.jsx("strong",{children:"人类生活"}),e.jsxs("span",{children:["金额 ",oe.format(i.money)," · ",ue.work[c.work]," · ",ue.spending[c.spending]," · ",ue.care[c.care]]})]}),e.jsxs("div",{className:"life-human-sheet",children:[e.jsxs("dl",{className:"life-resources",children:[e.jsxs("div",{children:[e.jsx("dt",{children:"金额"}),e.jsx("dd",{children:oe.format(i.money)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"精力"}),e.jsx("dd",{children:oe.format(i.energy)})]}),e.jsxs("div",{children:[e.jsx("dt",{children:"空闲时间"}),e.jsxs("dd",{children:[oe.format(i.freeTime)," 小时"]})]})]}),e.jsxs("p",{className:"life-small",children:[xs(i.job)," · ",i.housing==="family-house"?"家庭住所":Ze(i.housing)]}),e.jsxs("div",{className:"life-policies",children:[e.jsxs("label",{children:["工作",e.jsx("select",{"aria-label":"工作",disabled:a,value:c.work,onChange:h=>t(Ve(c,{work:h.target.value})),children:Object.entries(ue.work).map(([h,s])=>e.jsx("option",{value:h,children:s},h))})]}),e.jsxs("label",{children:["支出",e.jsx("select",{"aria-label":"支出",disabled:a,value:c.spending,onChange:h=>t(Ve(c,{spending:h.target.value})),children:Object.entries(ue.spending).map(([h,s])=>e.jsx("option",{value:h,children:s},h))})]}),e.jsxs("label",{children:["照护",e.jsx("select",{"aria-label":"照护",disabled:a,value:c.care,onChange:h=>t(Ve(c,{care:h.target.value})),children:Object.entries(ue.care).map(([h,s])=>e.jsx("option",{value:h,children:s},h))})]})]}),e.jsxs("details",{className:"life-advanced",children:[e.jsx("summary",{children:"资源与记录导出"}),e.jsxs("div",{className:"life-settings",children:[e.jsx("button",{className:"life-link",type:"button","aria-expanded":g,"aria-controls":"life-resource-details",onClick:()=>m(h=>!h),children:g?"收起资源明细":"查看资源明细"}),e.jsx("button",{className:"life-link",type:"button",onClick:()=>Se("v46-resource-transactions.json",JSON.stringify(l.exportTransactions(r),null,2)),children:"导出资源交易"}),e.jsx("button",{className:"life-link",type:"button",onClick:()=>Se("v46-daily-ledger.json",JSON.stringify(l.exportLedger(r),null,2)),children:"导出日账本"})]}),e.jsx("div",{id:"life-resource-details",children:g&&e.jsx(Jt,{transactions:l.exportTransactions(r),ledger:r.dailyLedger,animals:n.animals})})]})]})]})}function ms(n,a){const t=n.run.animals.find(r=>r.id===a.id)?.birthDay;return Dn({ageDays:a.ageDays,birthDay:t})}const hs={new_arrival:"新到家的适应期",long_term:"长期共同生活","getting-acquainted":"正在熟悉",settled:"关系已稳定"},An=n=>hs[n]??n;function fs({animal:n,animals:a,ageText:t,choose:r,status:l,enteredDay:c,relations:i=[]}){if(!n)return e.jsxs("div",{className:"life-profile",children:[e.jsx("h1",{children:"等待相遇"}),e.jsx("p",{children:"今天家里只有你。"})]});const{stage:g,timeline:m,origin:h}=n,s=h.disclosure==="unknown"?[]:h.visibleFacts,b=l==="deceased"?m.findLast(x=>x.kind==="farewell"):void 0;return e.jsxs("section",{className:"life-profile","aria-label":"动物档案",children:[e.jsxs("div",{className:"life-identity",children:[e.jsx("h1",{children:n.name}),e.jsxs("p",{children:[t,e.jsx("span",{className:"life-stage",children:g?rs[g.id]??g.label:"阶段未知"}),b&&e.jsxs("span",{className:"life-stage life-stage-archive",children:["生命档案 · 第 ",b.day," 日告别"]}),!b&&!n.scene&&e.jsx("span",{className:"life-stage",children:"已离开场景"})]}),c!==void 0&&e.jsxs("p",{className:"life-small",children:["第 ",c," 日来到这里"]})]}),a.length>1&&e.jsx("div",{className:"life-pets",role:"group","aria-label":"切换动物",children:a.map((x,w)=>e.jsxs("button",{"aria-pressed":x.id===n.id,onClick:()=>r(x.id),children:[e.jsx("span",{className:"life-coat","data-tone":w%2}),x.name,a.filter(y=>y.name===x.name).length>1&&" · "+(w+1)]},x.id))}),b?e.jsx("p",{className:"life-archive-note",children:"这段相伴已经画上句点。实时的心情、压力与精力随告别一同收起，这里保留它的生命档案。"}):null,e.jsxs("details",{className:"life-origin",children:[e.jsxs("summary",{children:["相遇之前",e.jsx("span",{children:Ye[h.disclosure]})]}),s.length?e.jsx("ul",{children:s.map(x=>e.jsx("li",{children:x.text},x.id))}):e.jsx("p",{className:"life-small",children:"目前没有可读的身世记录。"})]}),i.length>0&&e.jsxs("details",{className:"life-origin life-relations",children:[e.jsxs("summary",{children:["此刻的关系",e.jsx("span",{children:"只描述现在"})]}),e.jsx("ul",{children:i.map(x=>e.jsxs("li",{children:[a.find(w=>w.id===x.animalId)?.name??"伙伴",x.cohabitationStage&&e.jsxs("span",{className:"life-small",children:[" · 与人：",An(x.cohabitationStage)]}),x.pairFromId&&x.pairState&&e.jsxs("span",{className:"life-small",children:[" · 与",a.find(w=>w.id===x.pairFromId)?.name??"伙伴","：",An(x.pairState)]})]},x.animalId))})]})]})}function ps({animal:n}){const{state:a}=n;return e.jsxs("section",{className:"life-status-summary","aria-label":n.name+"的当前状态",children:[e.jsx("h2",{children:"当前状态"}),e.jsx("dl",{className:"life-vitals",children:[["心情",a.mood],["压力",a.stress],["精力",a.energy],["健康",is[a.health]??Ze(a.health)]].map(([t,r],l)=>e.jsxs("div",{"data-tone":l,children:[e.jsxs("dt",{children:[e.jsx("i",{"aria-hidden":"true"}),t]}),e.jsx("dd",{children:typeof r=="number"?e.jsxs(e.Fragment,{children:[e.jsx("meter",{min:0,max:100,value:r,"aria-label":t}),e.jsx("span",{children:oe.format(r)})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"life-status-track","aria-hidden":"true"}),e.jsx("span",{children:r})]})})]},t))})]})}const xs=n=>n==="between-jobs"?"暂未就业":Ze(n);function gs({preview:n,initial:a,initialAnimalId:t="",motion:r,onHome:l,onSettings:c}){return e.jsxs("div",{className:"life life-screen","data-reduced":r.reduced,children:[e.jsx(ys,{loaded:a,initialAnimalId:t,preview:n,motion:r,onHome:l,onSettings:c}),e.jsx("footer",{className:"life-experiments",children:e.jsx("a",{href:"?life=g3",children:"旧版技术实验（G3）"})})]})}function ys({loaded:n,initialAnimalId:a,preview:t,motion:r,onHome:l,onSettings:c}){const{life:i,saveLife:g}=t,[m,h]=p.useState(n),{state:s,token:b}=m,x=p.useMemo(()=>i.presentation(s),[i,s]),w=p.useMemo(()=>t.feedback(s),[t,s]),y=p.useMemo(()=>{const o=w.details(0,s.run.day);return[...new Map(o.map(d=>[d.key,d])).values()]},[w,s.run.day]),T=p.useMemo(()=>Bt(s.run,ts),[s.run]),N=p.useMemo(()=>qt(s.run),[s.run]),M=p.useMemo(()=>new Set([...s.run.ledger.map(o=>o.day),...N.responses.map(o=>o.day),...s.run.events.filter(o=>o.kind!=="advanced"&&o.kind!=="summary").map(o=>o.day)]),[s.run.ledger,s.run.events,N]),k=p.useMemo(()=>o=>{const d=x.animals.find(L=>L.id===o);if(!d)return"小兽";const v=x.animals.filter(L=>L.name===d.name);return v.length>1?d.name+"（"+(v.indexOf(d)+1)+"）":d.name},[x.animals]),S=p.useMemo(()=>i.autonomy(s),[i,s]),A=s.run.opening.runId,D="fursona:v46:web:target:"+A,[q,V]=p.useState(()=>{try{const o=Number(sessionStorage.getItem(D));return Number.isSafeInteger(o)&&o>x.day&&o<=x.day+as?o:0}catch{return 0}}),[U,X]=p.useState(a),[F,K]=p.useState(!0),[O,J]=p.useState(!1),$=Qt(A),[P,ne]=p.useState(()=>es($)),G=p.useRef(!1),[f,j]=p.useState(""),[z,W]=p.useState(""),[u,C]=p.useState({text:"窗边客厅",sequence:0}),B=x.animals.find(o=>o.id===U)??x.animals.find(o=>o.scene)??x.animals[0],Z=p.useMemo(()=>x.animals.flatMap(o=>Jn(s.run,o.id)),[x.animals,s.run]),[ae,le]=p.useState(null),[et,Pe]=p.useState(""),[Qe,Le]=p.useState(""),[nt,en]=p.useState(""),re=x.animals.find(o=>o.id===et)??B,[nn,Ae]=p.useState([]),tn=p.useRef(new Set(Z.map(o=>o.animalId+":"+o.achievementId)));p.useEffect(()=>{const o=Z.filter(d=>{const v=d.animalId+":"+d.achievementId;return tn.current.has(v)?!1:(tn.current.add(v),!0)});o.length&&Ae(o)},[Z]);function ye(o,d){Pe(o),Le(d),le("achievement")}const sn=p.useMemo(()=>It(i.memoryReactions(s),i.naturalMemoryReactions(s)),[i,s]),an=p.useMemo(()=>{const o=s.run.opening.seed,d=new Set(y.filter(I=>I.kind==="committed-choice").map(I=>I.source.key)),v=s.run.ledger.map(I=>({key:I.id,day:I.day,title:ie(I.eventId,I.title,me(o,I.day)),animalId:I.animalId,detail:ie(I.eventId,I.outcome,me(o,I.day)),originalTitle:I.title,committedChoice:d.has(I.id),tone:ns.has(I.eventId)?"daily":"event"})),L=new Map;for(const I of v){if(!I.animalId)continue;const _=JSON.stringify([I.animalId,I.day]),Q=L.get(_)??new Set;Q.add(I.originalTitle),L.set(_,Q)}const R=x.animals.flatMap(I=>I.timeline.filter(_=>!L.get(JSON.stringify([I.id,_.day]))?.has(_.title)).map((_,Q)=>({key:I.id+":node:"+Q,day:_.day,title:_.title,animalId:I.id,detail:"",tone:_.kind==="stage"||_.kind==="birthday"?"growth":"event"}))),Y=y.filter(I=>I.kind==="natural").map(I=>({key:I.key,day:I.day,title:I.title,animalId:I.animalId,detail:I.text,source:I.source,tone:"daily"}));return Nn([...v,...R,...Y])},[y,s.run,x.animals]),he=p.useMemo(()=>{const o=[...an];for(const d of y){if(d.kind!=="settled-care")continue;const v=Un(d);v&&o.push({key:d.key,day:d.day,animalId:d.animalId,title:"",detail:v,tone:"care",source:d.source})}for(const{day:d}of s.dailyLedger)for(const v of w.day(d))v.templateId!=="trust-change"&&v.templateId!=="stress-observation"||o.push({key:v.id,day:d,animalId:v.animalId,title:v.templateId==="trust-change"?"关系变化":"压力观察",detail:Fn(v),tone:"care"});for(const d of N.responses)o.push({key:d.sourceKey,day:d.day,animalId:d.animalId,title:cs[d.kind]??"照护记录",detail:[k(d.animalId),d.cause&&d.kind!=="recovered"?ds[d.cause]??d.cause:""].filter(Boolean).join(" · "),tone:ls(d.kind)});for(const d of T.adaptations)o.push({key:d.sourceKey,day:d.day,animalId:d.animalId,title:"共同生活适应",detail:k(d.animalId)+" 已在这个家里安顿下来。",tone:"shared"});for(const d of T.interactions)o.push({key:d.id,day:d.day,animalId:d.animalId,title:ie(d.eventId,d.title,me(s.run.opening.seed,d.day)),detail:ie(d.eventId,d.outcome,me(s.run.opening.seed,d.day)),tone:"shared"});return Nn(o)},[k,w,N,y,T,s.dailyLedger,s.run.opening.seed,an]),be=p.useMemo(()=>Ct(he),[he]),[rn,Re]=p.useState(14),ze=p.useRef(null),on=p.useMemo(()=>{const o=new Map;return be.forEach((d,v)=>{for(const L of d.entries)o.set(L.key,v)}),o},[be]);function tt(o){const d=on.get(o);d!==void 0&&(Re(v=>Math.max(v,d+1)),en(o),requestAnimationFrame(()=>requestAnimationFrame(()=>{const v=document.getElementById("story-"+o);v?.scrollIntoView({block:"center"}),v?.focus({preventScroll:!0})})))}const E=x.pending[0],ln=me(s.run.opening.seed,x.day),cn=E?ht(E.eventId):void 0,de=cn?{...ln,period:cn}:ln,fe=E?.eventId,dn=p.useRef(fe);p.useEffect(()=>{fe&&fe!==dn.current&&ee.play("event"),dn.current=fe},[fe]);const Ee=p.useMemo(()=>i.incidentOptions(s),[i,s]),un=Nt(s.receipts,x.day+1,k),je=Math.max(0,q-x.day),st=be.slice(0,rn),mn=be.length>rn;function hn(o){X(o)}function at(o){if("feature"in o)return C(L=>({text:o.feature,sequence:L.sequence+1})),!0;const d=i.reactClick(s,o.animalId),v=x.animals.find(L=>L.id===o.animalId);return!d||!v?!1:(hn(o.animalId),ee.play("catReact"),C(L=>({text:v.name+"听见了",target:d.animalId,sequence:L.sequence+1})),!0)}async function Te(o,d=b){h(await g(o,d))}async function fn(o){if(!G.current){G.current=!0,J(!0),W(""),j("");try{await o()}catch(d){W(te(d))}finally{G.current=!1,J(!1)}}}function ve(o){V(o);try{o?sessionStorage.setItem(D,String(o)):sessionStorage.removeItem(D)}catch{}}function De(o,d){G.current||P&&!d||fn(async()=>{const v=d??{...o,commandId:"resource:"+crypto.randomUUID(),transactionCount:s.transactions.length};if(!d){try{sessionStorage.setItem($,JSON.stringify(v))}catch{throw new Error("无法保留本次确认，请检查浏览器存储后重试。")}ne(v)}let L=!1;try{const R=d?await t.loadLife(A):m;if(!R.state||R.token===null)throw new Error("当前旅程无法读取，请刷新后查看进度。");const Y=R.state.transactions.some(_=>_.commandId===v.commandId);if(!Y&&R.state.transactions.length!==v.transactionCount)throw h({state:R.state,token:R.token}),new Error("生活进度已更新，请查看现在可用的操作。");const I=v.kind==="resolve"?i.resolvePending(R.state,v.targetId,v.choice,v.commandId):i.respondToIncident(R.state,v.targetId,v.commandId,v.kind);await Te(I,R.token),j(Y?"这次操作已保存。":v.kind==="resolve"?"已回应，生活可以继续。":v.kind==="respond"?"已为伙伴寻求帮助。":"已留下在身旁陪伴的记录。")}catch(R){throw L=["storage-unavailable","storage-conflict"].some(Y=>Vn(R)===Y),R}finally{if(!L){try{sessionStorage.removeItem($)}catch{}ne(null)}}})}function Fe(o){if(G.current||E||P)return;const d=o?x.day+o:q;if(d<=x.day)return;const v=q;W(""),j("正在翻过今天…"),ve(d),G.current=!0,J(!0),setTimeout(async()=>{let L=!1;try{let R=s,Y=!1,I=new Set(Ee.filter(Q=>Q.action==="respond").map(Q=>Q.animalId));for(let Q=x.day+1;Q<=d;Q++){const pn=i.advanceDay(R,Q);R=pn.state;const xn=i.incidentOptions(R).filter(pe=>pe.action==="respond").map(pe=>pe.animalId);if(Y=xn.some(pe=>!I.has(pe)),pn.blockedBy||Y)break;I=new Set(xn)}await Te(R),L=!0;const _=i.presentation(R).day;_>=d&&ve(0),j(Y?"有伙伴需要留意，请查看可用的求助或陪伴。":_>x.day?"已前进 "+(_-x.day)+" 天。":"")}catch(R){j(""),W(te(R)),L||ve(v)}finally{G.current=!1,J(!1)}},24)}return e.jsxs("main",{className:"life-layout",children:[e.jsxs("header",{className:"life-head",children:[e.jsx("button",{type:"button",className:"life-brand",onClick:l,children:"小兽来信"}),e.jsxs("span",{className:"life-candidate",children:[lt.displayVersion.split(" ")[0]," 候选试玩"]}),e.jsx("button",{type:"button",className:"life-link",onClick:l,children:"回到首页"}),e.jsx("span",{"aria-current":"page",className:"life-small",children:"我的旅程"}),e.jsx("button",{type:"button",className:"life-link",onClick:c,children:"设置"}),e.jsx("time",{className:"life-day",dateTime:ge(x.day)?.iso,children:ct(x.day)})]}),e.jsxs("div",{className:"life-scene-col",children:[e.jsx(Zt,{environment:de,animals:x.animals,plans:S,reduced:r.reduced,feedback:u,onHit:at}),e.jsxs("section",{className:"life-animal-card","aria-label":"当前动物与可用动作",children:[e.jsx(fs,{animal:B,animals:x.animals,ageText:B?ms(s,B):"",choose:hn,status:s.run.animals.find(o=>o.id===B?.id)?.status,enteredDay:s.run.animals.find(o=>o.id===B?.id)?.enteredDay,relations:T.currentRelations}),B?.scene&&e.jsx(ps,{animal:B}),e.jsx("div",{className:"life-scene-actions",children:e.jsx("button",{type:"button",className:"life-link","data-audio":"archive",onClick:()=>{Pe(B?.id??""),Le(""),le("archive")},children:"小兽档案馆"})}),un.length>0&&e.jsxs("div",{className:"life-care-queue","aria-label":"已安排但尚未结算的陪伴",children:[e.jsx("ul",{children:un.map(o=>e.jsx("li",{"data-day":o.day,"data-animal-id":o.animalId,children:o.text},o.id))}),e.jsx("p",{className:"life-small",children:"尚未结算，不计入相处时长。"})]})]})]}),e.jsxs("div",{className:"life-story-col",children:[e.jsx(us,{view:x,state:s,life:i,busy:O||!!P,update:o=>fn(async()=>{await Te(i.setPolicy(s,o)),j("生活策略已保存，从下一日开始采用。")})}),E&&e.jsxs("section",{className:"life-pending","aria-labelledby":"life-pending-title",children:[e.jsx("span",{className:"life-timeline-badge",children:"待回应 · 选择尚未记录"}),e.jsx("h2",{id:"life-pending-title",children:ie(E.eventId,E.title,de)}),e.jsxs("p",{className:"life-small",children:[we(x.day)," · ",On[de.weather]," · ",Bn[de.period]]}),e.jsx("p",{children:ie(E.eventId,E.scene,de)}),e.jsx("div",{className:"life-event-choices",children:E.choices.map(o=>e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"life-action","data-audio":"event",disabled:O||!!P||!!o.disabledReason,onClick:()=>De({kind:"resolve",targetId:E.eventId,choice:o.id}),children:ie(E.eventId,o.label,de)}),o.disabledReason&&e.jsx("span",{className:"life-small",children:o.disabledReason})]},o.id))}),e.jsx(Gn,{eventId:E.eventId,lookup:i.eventReferences},E.eventId)]},E.eventId),!!Ee.length&&e.jsxs("section",{className:"life-incident","aria-labelledby":"life-incident-title",children:[e.jsx("h2",{id:"life-incident-title",children:"伙伴近况"}),e.jsx("div",{className:"life-event-choices",children:Ee.map(o=>{const{action:d,animalId:v,cost:L,disabledReason:R}=o;if(!v||d!=="respond"&&d!=="comfort")return null;const Y=[L.money?"金额 "+oe.format(L.money):"",L.energy?"精力 "+oe.format(L.energy):"",L.timeHours?oe.format(L.timeHours)+" 小时":""].filter(Boolean).join(" · "),I=E?"请先回应当前事件":R;return e.jsxs("div",{children:[e.jsx("button",{type:"button",className:"life-action",disabled:O||!!P||!!I,onClick:()=>De({kind:d,targetId:v}),children:o.label}),Y&&e.jsx("span",{className:"life-small",children:Y}),I&&e.jsx("span",{className:"life-small",children:I})]},o.id)})})]}),e.jsxs("section",{className:"life-shared-story","aria-labelledby":"life-shared-title",children:[e.jsxs("header",{className:"life-timeline-head",children:[e.jsx("h2",{id:"life-shared-title",children:"共同生活时间线"}),!!he.length&&e.jsx("button",{type:"button",className:"life-link",onClick:()=>{Re(14),en(""),ze.current?.scrollTo({top:0}),ze.current?.focus({preventScroll:!0})},children:"回到最新"})]}),e.jsxs("div",{ref:ze,className:"life-timeline-scroll",tabIndex:0,role:"region","aria-label":"已记录的共同生活时间线",children:[st.map(o=>e.jsxs("section",{className:"life-day-group","aria-labelledby":"life-day-"+o.day,children:[e.jsxs("h3",{id:"life-day-"+o.day,className:"life-day-heading",children:[e.jsx("time",{dateTime:ge(o.day)?.iso,children:we(o.day)}),e.jsxs("span",{children:["第 ",o.day," 日 · 已记录"]})]}),e.jsx("ol",{className:"life-timeline-list",children:o.entries.map(d=>{const v=Z.find(R=>R.occurrenceId===d.key&&R.animalId===d.animalId),L=d.committedChoice?"已回应":d.source?.kind==="daily"&&d.tone==="daily"?"自主记录":d.tone==="care"?"":os[d.tone];return e.jsxs("li",{id:"story-"+d.key,tabIndex:-1,"data-tone":d.tone,"data-focused":nt===d.key||void 0,children:[e.jsxs("div",{className:"life-timeline-meta",children:[e.jsx("span",{children:d.animalId?k(d.animalId):"共同生活"}),L&&e.jsx("span",{className:"life-timeline-kind",children:L})]}),d.title&&e.jsx("h4",{children:d.title}),d.detail&&e.jsx("p",{children:d.detail}),e.jsx(He,{reaction:sn.get(d.key)}),v&&e.jsx("button",{type:"button",className:"life-link",onClick:()=>ye(v.animalId,v.occurrenceId),children:v.title})]},d.key)})})]},o.day)),!he.length&&e.jsx("p",{className:"life-small",children:"还没有生活记录。"}),mn&&e.jsx("button",{type:"button",className:"life-link life-timeline-more",onClick:()=>Re(o=>o+14),children:"查看更早的记录"}),!!he.length&&!mn&&e.jsx("p",{className:"life-small life-timeline-start",children:"已经到这段旅程最早的记录。"})]})]})]}),e.jsx("div",{className:"life-side-col",children:e.jsxs("aside",{className:"life-side",children:[e.jsxs("section",{className:"life-journal",children:[e.jsxs("button",{type:"button",className:"life-journal-toggle","aria-expanded":F,"aria-controls":"life-journal-panel",onClick:()=>K(o=>!o),children:[e.jsx("span",{children:"日历日记"}),e.jsx("span",{"aria-hidden":"true",children:F?"−":"+"})]}),e.jsx("div",{id:"life-journal-panel",children:F&&e.jsx(Ot,{state:s,daily:w,animalLabel:k,memoryReactions:sn,incidentResponses:N,getMonth:i.getMonth,eventReferences:i.eventReferences,milestones:Z,onMilestone:ye,canLocate:o=>on.has(o),onLocate:tt,eventDays:M})})]}),nn.length>0&&e.jsxs("section",{className:"life-notice","aria-label":"新里程碑",children:[nn.map(o=>e.jsxs("button",{type:"button",className:"life-link",onClick:()=>{ye(o.animalId,o.occurrenceId),Ae([])},children:[x.animals.find(d=>d.id===o.animalId)?.name," · ",o.title]},o.animalId+":"+o.achievementId)),e.jsx("button",{type:"button",className:"life-link",onClick:()=>Ae([]),children:"稍后查看"})]}),e.jsxs("section",{className:"life-controls","aria-label":"模拟时间和陪伴",children:[e.jsx("h2",{children:"推进时间"}),e.jsx("div",{className:"life-advance",children:ss.map(o=>e.jsxs("button",{type:"button",className:"life-action",disabled:O||!!E||!!P||je>0,onClick:()=>Fe(o),children:["推进 ",o," 天"]},o))}),e.jsxs("details",{className:"life-advanced life-long-advance",children:[e.jsx("summary",{children:"长期推进"}),e.jsx("div",{className:"life-advance",children:$e.map(o=>e.jsxs("button",{type:"button",className:"life-action",disabled:O||!!E||!!P||je>0,onClick:d=>{d.currentTarget.closest("details")?.removeAttribute("open"),Fe(o)},children:["推进 ",o," 天"]},o))})]}),je>0&&e.jsxs("div",{className:"life-resume",children:[e.jsxs("button",{type:"button",className:"life-action",disabled:O||!!E||!!P,onClick:()=>Fe(),children:["继续剩余 ",je," 天"]}),e.jsx("button",{type:"button",className:"life-link",disabled:O,onClick:()=>ve(0),children:"结束本次推进"})]}),P&&e.jsx("button",{type:"button",className:"life-action",disabled:O,onClick:()=>De(P,P),children:"重试上次确认"}),f&&e.jsx("p",{className:"life-small life-notice",role:"status",children:f}),z&&e.jsx("p",{className:"life-error",role:"alert",children:z})]}),e.jsx(kn,{onDetails:()=>le("knowledge")})]})}),ae&&e.jsxs(Ce,{title:ae==="archive"?"小兽档案馆":ae==="achievement"?"成就详情":"动物知识详情",onClose:()=>le(null),children:[ae==="knowledge"&&e.jsx(kn,{}),ae==="archive"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"life-filter",role:"group","aria-label":"本局动物档案",children:x.animals.map(o=>e.jsx("button",{type:"button",className:"life-link","aria-pressed":re?.id===o.id,onClick:()=>{Pe(o.id),Le("")},children:o.name},o.id))}),re?e.jsx(_n,{animal:re,state:s,life:i,milestones:Z.filter(o=>o.animalId===re.id),selected:Qe,onSelect:o=>ye(re.id,o)},re.id):e.jsx("p",{children:"这段旅程还没有动物档案。"})]}),ae==="achievement"&&Z.filter(o=>o.animalId===re?.id&&o.occurrenceId===Qe).map(o=>e.jsxs("article",{children:[e.jsxs("h3",{children:[re?.name," · ",o.title]}),e.jsxs("p",{children:["第 ",o.day," 日 · ",s.run.ledger.find(d=>d.id===o.occurrenceId)?.title??"已记录的旅程事实"]}),e.jsx("button",{type:"button",className:"life-link",onClick:()=>le("archive"),children:"查看本兽档案"})]},o.occurrenceId))]})]})}const Rn="(prefers-reduced-motion: reduce)",zn="fursona:v46:web:reduce-motion";function bs(){const[n,a]=p.useState(()=>{try{return localStorage.getItem(zn)==="on"}catch{return!1}}),[t,r]=p.useState(()=>matchMedia(Rn).matches);p.useEffect(()=>{const c=matchMedia(Rn),i=()=>r(c.matches);return c.addEventListener("change",i),()=>c.removeEventListener("change",i)},[]);function l(c){a(c);try{localStorage.setItem(zn,c?"on":"off")}catch{}}return{reduced:t||n,system:t,personal:n,change:l}}const js="fursona:v45:web:g3-experiment",vs="fursona:v45:web:0.5.0-g3",ks="fursona:v45:web:0.4.0-g2",Yn="fursona-ocgame-save",Hn=1,Xn={v46:"试玩旅程",g3:"G3 旅程",g2:"G2 旅程"};function Is(n){const a=[];for(let t=0;t<n.length;t++){const r=n.key(t);r!==null&&a.push(r)}return a}function Ue(n,a){return decodeURIComponent(n.slice(a.length))}function $n(n){if(n===null)return{data:null,ok:!1};try{return{data:JSON.parse(n),ok:!0}}catch{return{data:null,ok:!1}}}function H(n){return typeof n=="object"&&n!==null&&!Array.isArray(n)?n:null}function Ne(n){return typeof n=="number"&&Number.isFinite(n)?n:null}function se(n){return typeof n=="string"&&n.length>0?n:null}function En(n){const a=H(n)??{},t=H(a.opening)??{},r=H(a.person)??{},l=Array.isArray(a.animals)?a.animals:[];return{runId:se(t.runId),day:Ne(a.day),job:se(r.occupation)??"",animals:l.flatMap(c=>{const i=H(c);return i?[{id:se(i.id)??"",name:se(i.name)??"未命名",status:se(i.status)??"living",enteredDay:Ne(i.enteredDay),endedDay:Ne(i.endedDay),ageDays:Ne(i.ageDays),traits:Array.isArray(i.traits)?i.traits.flatMap(g=>se(g)??[]):[]}]:[]})}}function Tn(n,a){const{data:t,ok:r}=$n(n);if(!r||n===null)return{runId:null,day:null,job:"",animals:[],rules:"unknown",rulesVersion:null,broken:n!==null};const l=H(t);if(!l)return{runId:null,day:null,job:"",animals:[],rules:"unknown",rulesVersion:null,broken:!0};const c=se(l.rulesVersion);if(a==="v46"){const g=H(l.snapshot),m=g?H(g.run):null,h=En(m),s=pt(c)?"current":c===null?"unknown":"older";return{...h,rules:s,rulesVersion:c,broken:!1}}return{...En(l.snapshot),rules:"unknown",rulesVersion:null,broken:!1}}function Me(n,a){const t=new Map,r=(l,c,i,g,m)=>{const h=Tn(g,i),s=t.get(l);if(s){i==="v46"&&s.kind!=="v46"?t.set(l,{...s,kind:"v46",day:h.day,job:h.job,animals:h.animals,rules:h.rules,rulesVersion:h.rulesVersion,broken:h.broken,slots:[c,...s.slots],webSlot:s.webSlot??m}):s.slots.push(c);return}t.set(l,{runId:l,kind:i,day:h.day,job:h.job,animals:h.animals,rules:h.rules,rulesVersion:h.rulesVersion,slots:[c],webSlot:m,broken:h.broken,imported:!1,active:l===a})};for(const l of Is(n))if(l.startsWith(bn)){const c=Ue(l,bn);r(c,l,"v46",n.getItem(l),null)}else if(l.startsWith(Ke)){const c=Ue(l,Ke);r(c,l,"g3",n.getItem(l),null)}else if(l.startsWith(We)){const c=Ue(l,We);r(c,l,"g2",n.getItem(l),null)}for(const[l,c]of[[js,"g3"],[vs,"g3"],[ks,"g2"]]){const i=n.getItem(l);if(i===null)continue;const g=Tn(i,c);g.runId?r(g.runId,l,c,i,l):t.set("web:"+l,{runId:"web:"+l,kind:c,day:null,job:"",animals:[],rules:"unknown",rulesVersion:null,slots:[l],webSlot:l,broken:!0,imported:!1,active:!1})}for(const l of t.values())l.slots=[...new Set(l.slots)];return[...t.values()]}function Ns(n,a){const t=[];for(const r of a.slots)n.getItem(r)!==null&&(n.removeItem(r),t.push(r));return t}function ws(n,a){return JSON.stringify({format:Yn,version:Hn,kind:n.kind,runId:n.runId.startsWith("web:")?null:n.runId,exportedAt:new Date().toISOString(),save:a},null,2)}function Ss(n,a,t){let r;try{r=JSON.parse(a)}catch{return{status:"refused",message:"导入的文件不是有效的 JSON。"}}const l=H(r);if(!l||l.format!==Yn||l.version!==Hn||l.kind!=="v46"&&l.kind!=="g3"&&l.kind!=="g2"||typeof l.save!="string")return{status:"refused",message:"导入的文件不是本游戏的存档导出。"};const c=l.kind,{data:i,ok:g}=$n(l.save),m=H(i);if(!g||!m)return{status:"refused",message:"存档内容无法读取，未导入。"};const h=c==="v46"?H(H(m.snapshot)?.run):null,s=se(c==="v46"?h?.opening?(H(h.opening)??{}).runId:null:H(m.opening)?.runId);if(!s)return{status:"refused",message:"存档里缺少旅程标识，未导入。"};const b=c==="v46"?ft(s):c==="g3"?Ke+encodeURIComponent(s):We+encodeURIComponent(s);if(Me(n,t).find(y=>y.runId===s))return{status:"refused",message:"浏览器里已有一份相同旅程（"+s+"）的存档，为避免覆盖未导入。"};n.setItem(b,l.save);const[w]=Me(n,t).filter(y=>y.runId===s);return w?(w.imported=!0,{status:"imported",meta:w}):{status:"refused",message:"导入后未能找到新存档，未完成。"}}const Cs={living:"共同生活",deceased:"已离世 · 生命档案",departed:"已分别"},Ms={"river-district":"河湾区","old-town":"旧城区","hill-district":"山坡区",shopkeeper:"店员",illustrator:"插画师","library-worker":"图书馆职员","small-apartment":"小公寓","shared-home":"共同居住","quiet-apartment":"安静公寓","friend-nearby":"朋友住在附近","household-support":"同住者可帮忙","support-prepared":"已安排互助","lives-alone":"独居"},Zn=n=>n==="between-jobs"?"暂未就业":Ms[n]??n,Ps=[{id:"cover-cat",name:"窗边小猫",species:"cat",ageDays:365,status:"living",traits:["coat:ginger","pattern:tabby"],health:"unknown",environment:[],stage:"young_adult"}];function Qn(n){return n.broken?"无法读取的存档":n.job?Zn(n.job):"一段旅程"}function Ls(n,a){const t=new FormData(n.currentTarget),r=crypto.getRandomValues(new Uint32Array(1))[0],l=crypto.randomUUID(),c=String(t.get("cat")??"").trim(),i=bt(t.get("background"),l,r);if(t.get("wait"))return a.life.start({...i,animalMode:"wait"});const g=a.choices.resolve(t.get("origin"),r);return c?a.life.start({...i,animalMode:"custom",animal:{species:"cat",name:c,breed:null,profileId:null,ageDays:Number(t.get("ageDays")),traits:["coat:ginger","pattern:tabby"],health:"unknown",environment:[]}},g):a.life.start({...i,animalMode:"random"},g)}function As({error:n,start:a,choices:t,onHome:r}){const[l,c]=p.useState(!1);return e.jsxs("section",{className:"home-panel",children:[e.jsx("div",{className:"panel-head",children:e.jsx("button",{className:"life-link",type:"button",onClick:r,children:"← 首页"})}),e.jsx("h1",{children:"开始新的人生"}),e.jsx("p",{children:"打开家门，给一只小猫留个位子。已有旅程都会保留，互不覆盖。"}),n&&e.jsx("p",{role:"alert",className:"life-error",children:n}),e.jsxs("form",{onSubmit:a,className:"home-form",children:[e.jsxs("label",{children:["生活背景",e.jsxs("select",{name:"background",defaultValue:"",children:[e.jsx("option",{value:"",children:"随机背景"}),xt.map(i=>e.jsx("option",{value:i.id,children:Zn(i.occupation)},i.id))]})]}),e.jsxs("label",{children:["小猫的名字",e.jsx("input",{name:"cat",maxLength:48,placeholder:"留空随机相遇"})]}),e.jsxs("label",{children:["日龄",e.jsx("input",{name:"ageDays",type:"number",min:0,max:36500,defaultValue:730,required:!0})]}),e.jsxs("label",{className:"life-wait",children:[e.jsx("input",{name:"wait",type:"checkbox",checked:l,onChange:i=>c(i.target.checked)}),"先独自生活"]}),(t.known.length>0||t.partial.length>0||t.hasUnknown)&&e.jsxs("label",{children:["身世",e.jsxs("select",{"aria-label":"身世",name:"origin",disabled:l,defaultValue:"",children:[e.jsx("option",{value:"",children:"随机身世"}),["known","partial"].map(i=>t[i].length>0&&e.jsx("optgroup",{label:Ye[i],children:t[i].map(g=>e.jsx("option",{value:g.value,children:g.label},g.value))},i)),t.hasUnknown&&e.jsx("option",{value:"unknown",children:Ye.unknown})]})]}),e.jsx("button",{className:"life-action",type:"submit",children:"推开家门"})]})]})}function Rs({save:n,onContinue:a,onDelete:t,onExport:r}){const[l,c]=p.useState(!1),i=!n.broken&&n.rules!=="older"&&!n.runId.startsWith("web:");return e.jsxs("article",{className:"save-card","data-active":n.active||void 0,children:[e.jsxs("div",{className:"save-card-head",children:[e.jsx("strong",{children:Qn(n)}),e.jsxs("span",{className:"life-small",children:[Xn[n.kind],n.day!==null&&" · 第 "+n.day+" 日",n.active&&" · 当前旅程"]})]}),n.broken?e.jsx("p",{className:"life-small",children:"存档无法读取。原文件已保留，可导出副本交由集成负责人检查。"}):n.rules==="older"?e.jsxs("p",{className:"life-small",children:["这份试玩存档需要创建它时的规则版本（",n.rulesVersion,"）。原档已保留，可导出副本。"]}):n.animals.length>0?e.jsx("p",{className:"save-pets",children:n.animals.map(g=>e.jsx("span",{className:"save-chip","data-status":g.status,children:g.name},g.id))}):e.jsx("p",{className:"life-small",children:"还没有相遇的伙伴。"}),e.jsxs("div",{className:"save-tools",children:[e.jsx("button",{type:"button",className:"life-action",disabled:!i,onClick:a,children:"继续"}),e.jsx("button",{type:"button",className:"life-link",onClick:r,children:"导出 JSON"}),l?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"life-small",children:"删除后无法恢复，确定？"}),e.jsx("button",{type:"button",className:"life-link",onClick:t,children:"确认删除"}),e.jsx("button",{type:"button",className:"life-link",onClick:()=>c(!1),children:"取消"})]}):e.jsx("button",{type:"button",className:"life-link",onClick:()=>c(!0),children:"删除"})]})]})}function Ds({preview:n}){const[a,t]=p.useState("home"),[r,l]=p.useState(null),[c,i]=p.useState([]),[g,m]=p.useState(""),[h,s]=p.useState(""),[b,x]=p.useState(null),w=bs(),y=Et(a==="journey"&&r!==null),T=p.useRef(null);function N(){t("home"),s(""),x(null),window.scrollTo(0,0)}function M(f){s(""),x(null),t(f),window.scrollTo(0,0)}p.useEffect(()=>{let f=!0;return ce("readonly",j=>Me(j,n.activeRunId())).then(j=>{f&&i(j)}).catch(j=>{f&&s(te(j))}),()=>{f=!1}},[n]);async function k(){try{i(await ce("readonly",f=>Me(f,n.activeRunId())))}catch(f){s(te(f))}}const S=p.useRef(!1);async function A(f){if(f.preventDefault(),!S.current){S.current=!0,m("");try{l(await n.saveLife(Ls(f,n),null)),M("journey"),await k()}catch(j){m(te(j))}finally{S.current=!1}}}const[D,q]=p.useState(!1),[V,U]=p.useState(null),[X,F]=p.useState(""),K=V?n.life.presentation(V.state).animals.find(f=>f.id===V.animalId):void 0;async function O(f,j){x(null);try{const z=f.kind!=="v46"?f.webSlot:null,W=z===null?null:await ce("readonly",C=>C.getItem(z),z),u=W?n.life.migrate(W):(await n.loadLife(f.runId)).state;if(!u||!n.life.presentation(u).animals.some(C=>C.id===j))throw new Error("这只小兽的档案暂时无法读取。");U({state:u,animalId:j}),F("")}catch(z){x({message:te(z),raw:null})}}async function J(f){if(S.current)return;S.current=!0,s(""),x(null);let j=null;try{const z=f.kind!=="v46"?f.webSlot:null;j=await ce("readonly",u=>u.getItem(z??f.slots[0]),z??f.slots[0]);const W=z!==null&&j!==null?await n.openRaw(j):await n.openRun(f.runId);if(!W)throw new Error("找不到这份存档的槽位。");l(W),M("journey"),await k()}catch(z){x({message:yt(z,j),raw:j})}finally{S.current=!1}}async function $(f){try{const j=await ce("readonly",z=>z.getItem(f.slots[0]),f.slots[0]);if(j===null){s("这份存档暂时无法读取，未能导出。");return}Se("little-beast-save-"+f.kind+".json",ws(f,j)),s("已导出存档副本。")}catch(j){s(te(j))}}async function P(f){try{if(await ce("readwrite",j=>Ns(j,f)),n.activeRunId()===f.runId)try{localStorage.removeItem(gt)}catch{}s("已删除这份存档（其余存档未受影响）。"),await k()}catch(j){s(te(j))}}async function ne(f){try{const j=await f.text(),z=await ce("readwrite",W=>Ss(W,j,n.activeRunId()));z.status==="imported"?s("已导入旅程存档，可在列表中继续。"):s(z.message),await k()}catch(j){s(te(j))}}const G=c.length;return e.jsxs("div",{className:"life","data-reduced":w.reduced,onClickCapture:f=>Tt(f.nativeEvent),children:[a==="journey"&&r?e.jsx(gs,{preview:n,initial:r,motion:w,onHome:N,onSettings:()=>{k(),q(!0)}},r.state.run.opening.runId):e.jsxs("main",{className:"home-shell life-screen",children:[e.jsxs("header",{className:"life-head home-head",children:[e.jsx("span",{className:"life-brand",children:"小兽来信"}),e.jsx("span",{className:"life-candidate",children:"Little Beast's Life"})]}),a==="home"&&e.jsx(e.Fragment,{children:e.jsxs("section",{className:"home-hero",children:[e.jsxs("div",{className:"home-copy",children:[e.jsx("h1",{children:"窗边的日子"}),e.jsx("p",{children:"腾出一块地毯、一点时间。和一只动物相遇，慢慢把彼此写进生活。"}),e.jsxs("div",{className:"home-entries",children:[e.jsx("button",{type:"button",className:"life-action",onClick:()=>M("start"),children:"开始新的人生"}),e.jsxs("button",{type:"button",className:"life-link",onClick:()=>{M("saves"),k()},children:["继续旅程",G>0?"（"+G+" 份存档）":""]}),e.jsx("button",{type:"button",className:"life-link","data-audio":"archive",onClick:()=>{k(),M("archive")},children:"小兽档案馆"}),e.jsx("button",{type:"button",className:"life-link",onClick:()=>{k(),q(!0)},children:"设置"})]}),e.jsx("p",{className:"life-small",children:"每一段人生都是独立存档，互不覆盖；旧版旅程也已保留。"})]}),e.jsx("div",{className:"home-image",children:e.jsx(dt,{animals:Ps,still:!0})})]})}),a==="start"&&e.jsx(As,{error:g,start:A,choices:n.choices,onHome:N}),a==="saves"&&e.jsxs("section",{className:"home-panel",children:[e.jsx("div",{className:"panel-head",children:e.jsx("button",{className:"life-link",type:"button",onClick:N,children:"← 首页"})}),e.jsx("h1",{children:"继续旅程"}),e.jsx("p",{children:"这里收着浏览器里的每一段旅程。旧版存档会在继续时自动迁入当前版本，原档始终保留。"}),h&&e.jsx("p",{role:"status",className:"life-small life-notice",children:h}),b&&e.jsxs("div",{role:"alert",className:"life-error",children:[b.message,b.raw!==null&&e.jsx("button",{type:"button",className:"life-link",onClick:()=>Se("little-beast-save-original.json",b.raw),children:"下载原档副本"})]}),e.jsx("div",{className:"save-list",children:G?c.map(f=>e.jsx(Rs,{save:f,onContinue:()=>J(f),onDelete:()=>P(f),onExport:()=>$(f)},f.runId)):e.jsx("p",{className:"life-small",children:"还没有存档。开始一段新的人生，或从 JSON 文件导入。"})}),e.jsxs("div",{className:"save-import",children:[e.jsx("input",{ref:T,type:"file",accept:"application/json,.json",className:"save-file",onChange:f=>{const j=f.currentTarget.files?.[0];j&&ne(j),f.currentTarget.value=""}}),e.jsx("button",{type:"button",className:"life-link",onClick:()=>T.current?.click(),children:"导入存档 JSON"}),e.jsx("button",{type:"button",className:"life-link",onClick:()=>M("start"),children:"开始新的人生 →"})]})]}),a==="archive"&&e.jsxs("section",{className:"home-panel",children:[e.jsx("div",{className:"panel-head",children:e.jsx("button",{className:"life-link",type:"button","data-audio":"archive",onClick:N,children:"← 首页"})}),e.jsx("h1",{children:"小兽档案馆"}),b&&e.jsx("p",{className:"life-error",role:"alert",children:b.message}),e.jsx("p",{children:"每段旅程里相遇过的伙伴都收在这里；离世的伙伴以生命档案保存。"}),e.jsx("div",{className:"save-list",children:G?c.map(f=>e.jsxs("article",{className:"save-card",children:[e.jsxs("div",{className:"save-card-head",children:[e.jsx("strong",{children:Qn(f)}),e.jsxs("span",{className:"life-small",children:[Xn[f.kind],f.day!==null&&" · 第 "+f.day+" 日"]})]}),f.animals.length?e.jsx("ul",{className:"archive-animals",children:f.animals.map(j=>e.jsxs("li",{"data-status":j.status,children:[e.jsxs("button",{type:"button",className:"life-link",disabled:f.broken||f.rules==="older",onClick:()=>O(f,j.id),children:[j.name," · 查看档案"]}),e.jsx("span",{children:Cs[j.status]??j.status}),e.jsxs("span",{className:"life-small",children:["第 ",j.enteredDay??"?"," 日相遇",j.endedDay!==null?" – 第 "+j.endedDay+" 日道别":""]})]},j.id))}):e.jsx("p",{className:"life-small",children:f.broken?"存档无法读取，内容暂不可见。":"这段旅程里还没有相遇的伙伴。"})]},f.runId)):e.jsx("p",{className:"life-small",children:"档案馆还空着，相遇会记在这里。"})})]})]},a),D&&e.jsx(Ce,{title:"设置",onClose:()=>q(!1),children:e.jsxs("div",{className:"settings-list",children:[e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:w.personal,onChange:f=>w.change(f.target.checked)})," 减少动态效果"]}),w.system&&e.jsx("p",{className:"life-small",children:"系统已开启减少动效。"}),e.jsxs("fieldset",{className:"life-audio-settings",children:[e.jsx("legend",{children:"声音"}),e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:y.settings.muted,onChange:f=>y.change({muted:f.target.checked})})," 静音"]}),[["master","主音量"],["ui","界面音效"],["ambience","室内环境声"]].map(([f,j])=>e.jsxs("label",{className:"life-volume",children:[e.jsx("span",{children:j}),e.jsx("input",{type:"range","aria-label":j,min:0,max:100,value:Math.round(y.settings[f]*100),onChange:z=>y.change({[f]:z.target.valueAsNumber/100})}),e.jsxs("output",{children:[Math.round(y.settings[f]*100),"%"]})]},f))]}),e.jsxs("p",{className:"life-small",children:["存档：",G," 份旅程 （试玩存档 ",c.filter(f=>f.kind==="v46").length," · G3 ",c.filter(f=>f.kind==="g3").length," · G2 ",c.filter(f=>f.kind==="g2").length,"）。"]}),e.jsxs("p",{className:"life-small",children:["旧版技术实验与旧存档保留：",e.jsx("a",{href:"?life=g3",children:"打开 G3 实验"}),"（旧存档也可在「继续旅程」中继续）。"]})]})}),V&&K&&e.jsx(Ce,{title:K.name+"的档案",onClose:()=>U(null),children:e.jsx(_n,{animal:K,state:V.state,life:n.life,milestones:Jn(V.state.run,K.id),selected:X,onSelect:F})}),e.jsx("footer",{className:"life-experiments",children:e.jsx("span",{children:"小兽来信 · Little Beast's Life"})})]})}export{Ds as LifeHome};
