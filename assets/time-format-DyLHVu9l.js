import{a as pr}from"./legacy-g3-BiFu6mtU.js";var V={exports:{}},D={};var er;function hr(){if(er)return D;er=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function d(f,u,h){var x=null;if(h!==void 0&&(x=""+h),u.key!==void 0&&(x=""+u.key),"key"in u){h={};for(var b in u)b!=="key"&&(h[b]=u[b])}else h=u;return u=h.ref,{$$typeof:e,type:f,key:x,ref:u!==void 0?u:null,props:h}}return D.Fragment=t,D.jsx=d,D.jsxs=d,D}var tr;function fr(){return tr||(tr=1,V.exports=hr()),V.exports}var X=fr();const mr="V4.7-PAGES-1c1e1e126a63ef7b7d28b1066cb39cc5c3a6428d",_r={displayVersion:mr};var K={exports:{}},o={};var ar;function xr(){if(ar)return o;ar=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),x=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),M=Symbol.iterator;function J(r){return r===null||typeof r!="object"?null:(r=M&&r[M]||r["@@iterator"],typeof r=="function"?r:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,v={};function m(r,n,a){this.props=r,this.context=n,this.refs=v,this.updater=a||j}m.prototype.isReactComponent={},m.prototype.setState=function(r,n){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,n,"setState")},m.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function P(){}P.prototype=m.prototype;function w(r,n,a){this.props=r,this.context=n,this.refs=v,this.updater=a||j}var L=w.prototype=new P;L.constructor=w,U(L,m.prototype),L.isPureReactComponent=!0;var C=Array.isArray;function E(){}var c={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function q(r,n,a){var s=a.ref;return{$$typeof:e,type:r,key:n,ref:s!==void 0?s:null,props:a}}function W(r,n){return q(r.type,n,r.props)}function O(r){return typeof r=="object"&&r!==null&&r.$$typeof===e}function S(r){var n={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(a){return n[a]})}var F=/\/+/g;function H(r,n){return typeof r=="object"&&r!==null&&r.key!=null?S(""+r.key):n.toString(36)}function y(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(E,E):(r.status="pending",r.then(function(n){r.status==="pending"&&(r.status="fulfilled",r.value=n)},function(n){r.status==="pending"&&(r.status="rejected",r.reason=n)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function A(r,n,a,s,i){var l=typeof r;(l==="undefined"||l==="boolean")&&(r=null);var p=!1;if(r===null)p=!0;else switch(l){case"bigint":case"string":case"number":p=!0;break;case"object":switch(r.$$typeof){case e:case t:p=!0;break;case I:return p=r._init,A(p(r._payload),n,a,s,i)}}if(p)return i=i(r),p=s===""?"."+H(r,0):s,C(i)?(a="",p!=null&&(a=p.replace(F,"$&/")+"/"),A(i,n,a,"",function(dr){return dr})):i!=null&&(O(i)&&(i=W(i,a+(i.key==null||r&&r.key===i.key?"":(""+i.key).replace(F,"$&/")+"/")+p)),n.push(i)),1;p=0;var z=s===""?".":s+":";if(C(r))for(var g=0;g<r.length;g++)s=r[g],l=z+H(s,g),p+=A(s,n,a,l,i);else if(g=J(r),typeof g=="function")for(r=g.call(r),g=0;!(s=r.next()).done;)s=s.value,l=z+H(s,g++),p+=A(s,n,a,l,i);else if(l==="object"){if(typeof r.then=="function")return A(y(r),n,a,s,i);throw n=String(r),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}return p}function N(r,n,a){if(r==null)return r;var s=[],i=0;return A(r,s,"","",function(l){return n.call(a,l,i++)}),s}function G(r){if(r._status===-1){var n=r._result;n=n(),n.then(function(a){(r._status===0||r._status===-1)&&(r._status=1,r._result=a)},function(a){(r._status===0||r._status===-1)&&(r._status=2,r._result=a)}),r._status===-1&&(r._status=0,r._result=n)}if(r._status===1)return r._result.default;throw r._result}var B=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},$={map:N,forEach:function(r,n,a){N(r,function(){n.apply(this,arguments)},a)},count:function(r){var n=0;return N(r,function(){n++}),n},toArray:function(r){return N(r,function(n){return n})||[]},only:function(r){if(!O(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return o.Activity=T,o.Children=$,o.Component=m,o.Fragment=d,o.Profiler=u,o.PureComponent=w,o.StrictMode=f,o.Suspense=k,o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,o.__COMPILER_RUNTIME={__proto__:null,c:function(r){return c.H.useMemoCache(r)}},o.cache=function(r){return function(){return r.apply(null,arguments)}},o.cacheSignal=function(){return null},o.cloneElement=function(r,n,a){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var s=U({},r.props),i=r.key;if(n!=null)for(l in n.key!==void 0&&(i=""+n.key),n)!_.call(n,l)||l==="key"||l==="__self"||l==="__source"||l==="ref"&&n.ref===void 0||(s[l]=n[l]);var l=arguments.length-2;if(l===1)s.children=a;else if(1<l){for(var p=Array(l),z=0;z<l;z++)p[z]=arguments[z+2];s.children=p}return q(r.type,i,s)},o.createContext=function(r){return r={$$typeof:x,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:h,_context:r},r},o.createElement=function(r,n,a){var s,i={},l=null;if(n!=null)for(s in n.key!==void 0&&(l=""+n.key),n)_.call(n,s)&&s!=="key"&&s!=="__self"&&s!=="__source"&&(i[s]=n[s]);var p=arguments.length-2;if(p===1)i.children=a;else if(1<p){for(var z=Array(p),g=0;g<p;g++)z[g]=arguments[g+2];i.children=z}if(r&&r.defaultProps)for(s in p=r.defaultProps,p)i[s]===void 0&&(i[s]=p[s]);return q(r,l,i)},o.createRef=function(){return{current:null}},o.forwardRef=function(r){return{$$typeof:b,render:r}},o.isValidElement=O,o.lazy=function(r){return{$$typeof:I,_payload:{_status:-1,_result:r},_init:G}},o.memo=function(r,n){return{$$typeof:Y,type:r,compare:n===void 0?null:n}},o.startTransition=function(r){var n=c.T,a={};c.T=a;try{var s=r(),i=c.S;i!==null&&i(a,s),typeof s=="object"&&s!==null&&typeof s.then=="function"&&s.then(E,B)}catch(l){B(l)}finally{n!==null&&a.types!==null&&(n.types=a.types),c.T=n}},o.unstable_useCacheRefresh=function(){return c.H.useCacheRefresh()},o.use=function(r){return c.H.use(r)},o.useActionState=function(r,n,a){return c.H.useActionState(r,n,a)},o.useCallback=function(r,n){return c.H.useCallback(r,n)},o.useContext=function(r){return c.H.useContext(r)},o.useDebugValue=function(){},o.useDeferredValue=function(r,n){return c.H.useDeferredValue(r,n)},o.useEffect=function(r,n){return c.H.useEffect(r,n)},o.useEffectEvent=function(r){return c.H.useEffectEvent(r)},o.useId=function(){return c.H.useId()},o.useImperativeHandle=function(r,n,a){return c.H.useImperativeHandle(r,n,a)},o.useInsertionEffect=function(r,n){return c.H.useInsertionEffect(r,n)},o.useLayoutEffect=function(r,n){return c.H.useLayoutEffect(r,n)},o.useMemo=function(r,n){return c.H.useMemo(r,n)},o.useOptimistic=function(r,n){return c.H.useOptimistic(r,n)},o.useReducer=function(r,n,a){return c.H.useReducer(r,n,a)},o.useRef=function(r){return c.H.useRef(r)},o.useState=function(r){return c.H.useState(r)},o.useSyncExternalStore=function(r,n,a){return c.H.useSyncExternalStore(r,n,a)},o.useTransition=function(){return c.H.useTransition()},o.version="19.2.0",o}var or;function vr(){return or||(or=1,K.exports=xr()),K.exports}var R=vr();const yr=`/* ============================================================================\r
   Diorama Pixel kernel · one global \`Pixel\`, no dependency: a software\r
   rasterizer that draws into a small canvas 2D and lets the browser enlarge\r
   it with nearest-neighbour pixels.\r
\r
   A scene is a handful of convex solids (boxes, cylinders, cones, balls,\r
   wedges) and 1 px lines in a small scene graph, seen through a fixed\r
   orthographic camera (2:1 pixel isometric by default). Every frame the\r
   kernel transforms the solids, rasterizes their triangles into a depth\r
   buffer at the internal resolution (320 x 240 by default), rasterizes them\r
   again from the sun into a shadow map, and shades every pixel: a lambert\r
   term, the shadow, and a procedural texture per material (planks, thatch,\r
   stone, leaves, cloth, grass, water, paving), quantized to that material's\r
   ramp of four to six colours with an 8 x 8 Bayer matrix. The ground is not\r
   a mesh: it is the plane y = 0, cut by an irregular outline whose edge\r
   dissolves into the page through the same dither, and coloured by zones.\r
\r
   INDEX · what a scene may call.\r
\r
   Pixel.scene(spec)    declare a scene; spec is:\r
     name, title, means, hint strings shown by the page (hint: what to hover, what to tap)\r
     width, height            internal resolution (default 320 x 240)\r
     duration                 seconds in the loop (ctx.q = t / duration, 0..1)\r
     still                    seconds into the loop shown for reduced motion and thumbnails\r
     fps                      frame cap (default 24: pixel art moves in steps, and it halves the work)\r
     camera                   { az: 45, el: 30, scale (px per unit, default: fit), target: [x, y, z], height }\r
     sun                      { az: -40, el: 48, ambient: .34 }   az/el in degrees, the light comes from there\r
     outline                  true: one ramp step darker on silhouettes against farther things (default true)\r
     bayer                    8 (default) or 4. Anything else throws. 8 is the original picture; 4 is the smaller matrix\r
     shadow                   'soft' (default, 2 x 2, the shade still dithers) or 'hard' (one sample).\r
                              hard darkens ground pixels and keeps their texture and dither; it is not a flat ink\r
     rim                      false (default). true adds a warm tint on top-left edges of solids, never on the ground\r
     wind                     0 (default) or a step rate in frames per second for P.wind\r
     contact                  .32 (default): how hard the ground darkens under a foot\r
     ground                   { rx, rz, wobble: .3, fade: .45, rect: false, zone(x, z, P) -> material key or object }\r
                              rect: false keeps the irregular ellipse. rect: true cuts a rectangle; the edge still dissolves\r
     materials                { key: material } extra named materials\r
     build(P)                 build once; return parts; parts.hot = [groups the pointer may pick], each with a .name\r
     tick(ctx)                pose the parts from absolute time; never accumulate. ctx: t, q (0..1 in the loop), dt,\r
                              parts, P, hover (hot group under the pointer, lit one shade), pressed + pressedAt (last\r
                              press), active (a switch), pointer { x, y, inside }, read (set a line for the read-out)\r
\r
   P (toolkit given to build and tick):\r
     P.group(x, y, z, parent)                     a node; .position .rotation (radians, yaw-pitch-roll) .scale .visible\r
     P.box(w, h, d, mat, x, y, z, parent)          centred on x, y, z\r
     P.cyl(rTop, rBottom, h, mat, x, y, z, parent, seg)\r
     P.cone(r, h, mat, x, y, z, parent, seg)\r
     P.ball(r, mat, x, y, z, parent, seg)\r
     P.wedge(w, h, d, mat, x, y, z, parent)        a gable along x, base on y (thatch roofs)\r
     P.line(points, mat, parent)                   a polyline of 1 px, [[x, y, z], ...] in parent space\r
     P.person(x, z, parent, { shirt, pants, skin, hair, hat, shoes, sleeve, bare, yaw, h: 1.3 })\r
                                                    -> { root, hips, body, head, armL, armR, elbowL, elbowR, handL, handR, legL, legR, kneeL, kneeR }\r
     P.pose(person, 'stand'|'work'|'hold'|'carry'|'sit'|'wave', amount)   set every joint, then add motion on top\r
     P.tree(x, z, parent, { r, h, clusters, mat, trunk, yaw, seed })      a trunk and a crown of round leaf clumps\r
     P.bush(x, z, parent, { r, clusters, mat, flowers })                  a low clump, flowers a hex\r
     P.mat(spec)                                    a material: a hex colour, a key ('grass', 'water', 'wood', 'thatch',\r
                                                    'stone', 'paving', 'leaf', 'cloth', 'dirt', 'sand'), or\r
                                                    { color | ramp, tex, grain: 'x'|'y'|'z', plank, size, stripe, alt, rough, dither, glow, round, flat, figure }\r
     P.snap(v)                                  round a world offset to a whole screen pixel (0 when unused)\r
     P.wind(t, period, offset)                  P.wave on time stepped by spec.wind (plain P.wave when wind is 0)\r
     P.update()                                     compose every world matrix now, so tick can read node.worldPoint(x, y, z)\r
     P.wave(t, period, offset) P.phase(t, period, offset) P.pulse(t, period, width) P.smooth(t) P.lerp(a, b, t) P.clamp\r
     P.noise(x, y) P.fbm(x, y) P.hash(x, y)        the same noise the textures use (for zones and outlines)\r
\r
   Pixel.mount(spec, canvas, { reduced, still, onRead }) -> runtime { renderAt(t), start(), stop(), setCap(fps), hoverAt(x, y),\r
                                                       tap(x, y), stats(), destroy(), parts, ctx }\r
   ============================================================================ */\r
var Pixel = (function () {\r
  'use strict';\r
  var TAU = Math.PI * 2, DEG = Math.PI / 180;\r
  var scenes = [];\r
\r
  /* ---------- small maths and noise ---------- */\r
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };\r
  var lerp = function (a, b, t) { return a + (b - a) * t; };\r
  var smooth = function (t) { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };\r
  var phase = function (t, p, o) { var x = (t / p + (o || 0)) % 1; return x < 0 ? x + 1 : x; };\r
  var wave = function (t, p, o) { return Math.sin(phase(t, p, o) * TAU); };\r
  var pulse = function (t, p, w) { var x = phase(t, p); return x < w ? Math.sin(x / w * Math.PI) : 0; };\r
  function hash(x, y) {\r
    var h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263)) | 0;\r
    h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16;\r
    return (h >>> 0) / 4294967296;\r
  }\r
  function hash3(x, y, z) { return hash((x | 0) + Math.imul(z | 0, 1013), (y | 0) ^ Math.imul(z | 0, 7919)); }\r
  function noise(x, y) {\r
    var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;\r
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);\r
    var a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);\r
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;\r
  }\r
  function fbm(x, y) { return noise(x, y) * .57 + noise(x * 2.03 + 17.1, y * 2.03 + 5.3) * .29 + noise(x * 4.1 + 31.7, y * 4.1 + 11.9) * .14; }\r
  var BAYER = (function () {\r
    var b = [0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4, 36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22,\r
      3, 35, 11, 43, 1, 33, 9, 41, 51, 19, 59, 27, 49, 17, 57, 25, 15, 47, 7, 39, 13, 45, 5, 37, 63, 31, 55, 23, 61, 29, 53, 21];\r
    return new Float32Array(b.map(function (v) { return (v + .5) / 64; }));\r
  })();\r
  /* 4 x 4 ordered matrix, used only when a scene sets bayer: 4. The default path never reads it. */\r
  var BAYER4 = (function () {\r
    var b = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];\r
    return new Float32Array(b.map(function (v) { return (v + .5) / 16; }));\r
  })();\r
\r
  /* ---------- colour ramps ---------- */\r
  function rgb(h) { h = h.replace('#', ''); if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]; var n = parseInt(h, 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }\r
  function mix(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }\r
  function scl(a, k) { return [a[0] * k, a[1] * k, a[2] * k]; }\r
  function pack(c) { return (255 << 24) | (clamp(Math.round(c[2]), 0, 255) << 16) | (clamp(Math.round(c[1]), 0, 255) << 8) | clamp(Math.round(c[0]), 0, 255); }\r
  /* Hard cast on the ground only. Scale the colour that pixel already chose so\r
     grass stays grass and earth stays earth, a little cooler, and the dither\r
     pattern remains. Soft mode never calls this. */\r
  function veil(sample) {\r
    var c = [sample & 255, (sample >> 8) & 255, (sample >> 16) & 255];\r
    return pack(mix([c[0] * .74, c[1] * .7, c[2] * .72], [42, 36, 58], .08));\r
  }\r
  /* five shades of one colour, shifted the way a pixel artist shifts them: shadows toward cool violet, lights toward warm cream */\r
  function autoRamp(hex) {\r
    var c = rgb(hex);\r
    return [mix(scl(c, .42), [38, 36, 72], .38), mix(scl(c, .64), [58, 56, 96], .2), scl(c, .84), c, mix(scl(c, 1.08), [255, 246, 220], .32)];\r
  }\r
  function shade(hex, k) { var c = rgb(hex); return '#' + c.map(function (v) { return ('0' + clamp(Math.round(v * k), 0, 255).toString(16)).slice(-2); }).join(''); }\r
  /* joint rotations in radians [x, y, z]; negative x swings a limb forward */\r
  var POSES = {\r
    stand: { armL: [0, 0, -.08], armR: [0, 0, .08], elbowL: [-.15, 0, 0], elbowR: [-.15, 0, 0] },\r
    work: { armL: [-.55, 0, -.2], armR: [-.55, 0, .2], elbowL: [-.95, 0, 0], elbowR: [-.95, 0, 0], body: [.12, 0, 0], head: [.35, 0, 0] },\r
    hold: { armL: [-.3, 0, -.12], armR: [-.3, 0, .12], elbowL: [-1.25, 0, 0], elbowR: [-1.25, 0, 0], head: [.2, 0, 0] },\r
    carry: { armL: [0, 0, -.1], armR: [-.15, 0, .12], elbowL: [-.1, 0, 0], elbowR: [-1.4, 0, 0] },\r
    sit: { hips: .3, legL: [-1.5, 0, -.04], legR: [-1.5, 0, .04], kneeL: [1.45, 0, 0], kneeR: [1.45, 0, 0], armL: [-.35, 0, -.1], armR: [-.35, 0, .1], elbowL: [-.6, 0, 0], elbowR: [-.6, 0, 0] },\r
    wave: { armL: [0, 0, -.08], armR: [0, 0, 2.5], elbowR: [0, 0, .4], elbowL: [-.15, 0, 0] }\r
  };\r
  function packRamp(r) { return Uint32Array.from(r.map(function (c) { return pack(typeof c === 'string' ? rgb(c) : c); })); }\r
\r
  /* ---------- materials: a ramp, a texture, a grain ---------- */\r
  var RAMPS = {\r
    grass: ['#3c5530', '#4f6b36', '#65823f', '#7f984b', '#9cb062', '#bccb86'],\r
    water: ['#355f7a', '#44738f', '#5a8ca6', '#78a8bd', '#a3c8d4', '#d6ebee'],\r
    paving: ['#77705f', '#8f8874', '#a7a08a', '#bdb69e', '#d2cbb3', '#e6e1cf'],\r
    dirt: ['#6e5a43', '#86704f', '#a08861', '#b89f77', '#cdb791'],\r
    sand: ['#a08c68', '#b9a47b', '#cdb98e', '#ddcba2', '#ebdcb9'],\r
    wood: ['#4a3423', '#64472d', '#80603b', '#9c7a4c', '#b8965f', '#d0b07a'],\r
    darkwood: ['#2f2420', '#423128', '#574133', '#6e5440', '#86684f'],\r
    thatch: ['#6b5532', '#88703f', '#a58b4f', '#bfa462', '#d6bd7b', '#e8d59c'],\r
    stone: ['#5f5c58', '#77736c', '#8f8a80', '#a8a296', '#c1bbad'],\r
    leaf: ['#2c4126', '#3d5730', '#52703a', '#6b8a45', '#89a556', '#aac173'],\r
    cloth: ['#7a3b30', '#99503c', '#b5664a', '#cc8160', '#dfa07c'],\r
    canvas: ['#8b8572', '#a8a28c', '#c3bea6', '#d9d4bd', '#ebe7d4']\r
  };\r
  var TEX = {\r
    plain: function (m, x, y, z) { return (noise(x * 9 + y * 7, z * 9 - y * 5) - .5) * .08 * m.rough; },\r
    grass: function (m, x, y, z, al, ac, t, px, py) { return (fbm(x * 1.3, z * 1.3) - .5) * .5 + (noise(x * 6, z * 6) - .5) * .18 + (hash(px, py) - .5) * .34; },\r
    dirt: function (m, x, y, z, al, ac, t, px, py) { return (fbm(x * 2.2, z * 2.2) - .5) * .4 + (hash(px, py) - .5) * .22; },\r
    sand: function (m, x, y, z, al, ac, t, px, py) { return (fbm(x * 1.7, z * 1.7) - .5) * .24 + (hash(px, py) - .5) * .2; },\r
    water: function (m, x, y, z, al, ac, t, px, py) {\r
      var ca = Math.cos(t), sa = Math.sin(t), b = fbm(x * .9 + ca * .45, z * 1.4 + sa * .3), r = noise(x * 3.2 + ca * 1.2, z * 6 + sa * .9);\r
      return (b - .5) * .55 + (r > .7 ? (r - .7) * 1.4 : 0) - .04;\r
    },\r
    paving: function (m, x, y, z, al, ac, t, px, py) {\r
      var s = m.size, row = Math.floor(z / (s * .78)), off = (row & 1) * s * .5, col = Math.floor((x + off) / s);\r
      var fu = (x + off) / s - col, fv = z / (s * .78) - row;\r
      if (fu < .1 || fv < .12) return -.36;\r
      return (hash(col, row) - .5) * .26 + (noise(x * 7, z * 7) - .5) * .12 + (hash(px, py) - .5) * .08;\r
    },\r
    wood: function (m, x, y, z, al, ac) {\r
      var p = ac / m.plank, i = Math.floor(p), f = p - i;\r
      if (f < .14) return -.3;\r
      return (hash(i, 7) - .5) * .2 + (noise(al * 1.8 + i * 13.3, f * 3) - .5) * .2 + (noise(al * 12 + i * 7.1, ac * 30) - .5) * .14;\r
    },\r
    thatch: function (m, x, y, z, al, ac) {\r
      var rows = ac / .17, f = rows - Math.floor(rows);\r
      return (noise(al * 30 + Math.floor(rows) * 5.3, rows * 1.3) - .5) * .5 + (f < .22 ? -.2 : 0) + (noise(al * 3, ac * 3) - .5) * .12;\r
    },\r
    stone: function (m, x, y, z, al, ac) {\r
      var s = m.size, row = Math.floor(ac / (s * .55)), off = (row & 1) * s * .5, col = Math.floor((al + off) / s);\r
      var fu = (al + off) / s - col, fv = ac / (s * .55) - row;\r
      if (fu < .08 || fv < .14) return -.3;\r
      return (hash(col, row + 3) - .5) * .26 + (noise(al * 9, ac * 9) - .5) * .1;\r
    },\r
    leaf: function (m, x, y, z, al, ac, t, px, py) { return (fbm(x * 5 + y * 3, z * 5 - y * 4) - .5) * .7 + (hash3(x * 30, z * 30, y * 30) - .5) * .2; },\r
    cloth: function (m, x, y, z, al, ac) { return (noise(al * 2.5, ac * 9) - .5) * .14; }\r
  };\r
  var DEFAULTS = {\r
    grass: { ramp: 'grass', tex: 'grass', ground: true, blades: true }, water: { ramp: 'water', tex: 'water', ground: true, water: true },\r
    paving: { ramp: 'paving', tex: 'paving', size: .42, ground: true }, dirt: { ramp: 'dirt', tex: 'dirt', ground: true },\r
    sand: { ramp: 'sand', tex: 'sand', ground: true },\r
    wood: { ramp: 'wood', tex: 'wood', plank: .14, grain: 'x' }, darkwood: { ramp: 'darkwood', tex: 'wood', plank: .12, grain: 'x' },\r
    thatch: { ramp: 'thatch', tex: 'thatch', grain: 'x' }, stone: { ramp: 'stone', tex: 'stone', size: .3, grain: 'x' },\r
    leaf: { ramp: 'leaf', tex: 'leaf' }, leafLight: { ramp: ['#3d5a2e', '#557638', '#6f9243', '#8cab52', '#aac46a', '#c8d98f'], tex: 'leaf' }, cloth: { ramp: 'cloth', tex: 'cloth' }, canvas: { ramp: 'canvas', tex: 'cloth' }\r
  };\r
  function makeMaterial(spec, registry) {\r
    if (spec && spec.isMaterial) return spec;\r
    var key = typeof spec === 'string' ? spec : JSON.stringify(spec);\r
    if (registry.cache[key]) return registry.cache[key];\r
    var o = typeof spec === 'string' ? (registry.named[spec] || DEFAULTS[spec] || { color: spec }) : spec;\r
    if (o.isMaterial) return o;\r
    var m = { isMaterial: true, id: registry.list.length, tex: TEX[o.tex || 'plain'], grain: o.grain || 'x', plank: o.plank || .14, size: o.size || .4,\r
      rough: o.rough == null ? 1 : o.rough, blades: !!o.blades, dither: o.dither != null ? o.dither : (o.tex && o.tex !== 'plain' ? 1 : .55), stripe: o.stripe || 0, ground: !!o.ground, water: !!o.water, flat: !!o.flat, figure: !!o.figure, glow: o.glow || 0, round: o.round != null ? !!o.round : o.tex === 'leaf' };\r
    var r = o.ramp ? (typeof o.ramp === 'string' ? RAMPS[o.ramp] : o.ramp) : autoRamp(o.color || '#999999');\r
    m.ramp = packRamp(r); m.n = m.ramp.length;\r
    if (o.alt) { var ra = typeof o.alt === 'string' && RAMPS[o.alt] ? RAMPS[o.alt] : (Array.isArray(o.alt) ? o.alt : autoRamp(o.alt)); m.alt = packRamp(ra); }\r
    registry.list.push(m); registry.cache[key] = m;\r
    return m;\r
  }\r
\r
  /* ---------- scene graph ---------- */\r
  function V(x, y, z) { this.x = x || 0; this.y = y || 0; this.z = z || 0; }\r
  V.prototype.set = function (x, y, z) { this.x = x; this.y = y; this.z = z; return this; };\r
  function Node() { this.position = new V(); this.rotation = new V(); this.scale = new V(1, 1, 1); this.children = []; this.visible = true; this.m = new Float64Array(12); this.parent = null; this.geo = null; }\r
  Node.prototype.add = function (c) { if (c.parent) { var i = c.parent.children.indexOf(c); if (i >= 0) c.parent.children.splice(i, 1); } c.parent = this; this.children.push(c); return this; };\r
  /* world matrix, 3 x 4 row-major: R = Ry . Rx . Rz, then scale */\r
  function compose(n, pm) {\r
    var r = n.rotation, s = n.scale, p = n.position;\r
    var cy = Math.cos(r.y), sy = Math.sin(r.y), cx = Math.cos(r.x), sx = Math.sin(r.x), cz = Math.cos(r.z), sz = Math.sin(r.z);\r
    var a = cy * cz + sy * sx * sz, b = -cy * sz + sy * sx * cz, c = sy * cx;\r
    var d = cx * sz, e = cx * cz, f = -sx;\r
    var g = -sy * cz + cy * sx * sz, h = sy * sz + cy * sx * cz, k = cy * cx;\r
    var L = [a * s.x, b * s.y, c * s.z, p.x, d * s.x, e * s.y, f * s.z, p.y, g * s.x, h * s.y, k * s.z, p.z], m = n.m;\r
    if (!pm) { for (var i = 0; i < 12; i++) m[i] = L[i]; return; }\r
    for (var row = 0; row < 3; row++) {\r
      var o = row * 4;\r
      m[o] = pm[o] * L[0] + pm[o + 1] * L[4] + pm[o + 2] * L[8];\r
      m[o + 1] = pm[o] * L[1] + pm[o + 1] * L[5] + pm[o + 2] * L[9];\r
      m[o + 2] = pm[o] * L[2] + pm[o + 1] * L[6] + pm[o + 2] * L[10];\r
      m[o + 3] = pm[o] * L[3] + pm[o + 1] * L[7] + pm[o + 2] * L[11] + pm[o + 3];\r
    }\r
  }\r
  Node.prototype.worldPoint = function (x, y, z) { var m = this.m; return [m[0] * x + m[1] * y + m[2] * z + m[3], m[4] * x + m[5] * y + m[6] * z + m[7], m[8] * x + m[9] * y + m[10] * z + m[11]]; };\r
\r
  /* geometries: local vertices, triangles, a centre (every solid is convex, so normals are flipped away from it) */\r
  function geoBox(w, h, d) {\r
    var x = w / 2, y = h / 2, z = d / 2, v = [], t = [0, 1, 3, 0, 3, 2, 4, 6, 7, 4, 7, 5, 0, 4, 5, 0, 5, 1, 2, 3, 7, 2, 7, 6, 0, 2, 6, 0, 6, 4, 1, 5, 7, 1, 7, 3];\r
    for (var i = 0; i < 8; i++) v.push(i & 4 ? x : -x, i & 2 ? y : -y, i & 1 ? z : -z);\r
    return { v: v, t: t, c: [0, 0, 0] };\r
  }\r
  function geoCyl(rt, rb, h, seg) {\r
    var v = [], t = [], n = seg, i;\r
    for (i = 0; i < n; i++) { var a = i / n * TAU + Math.PI / n; v.push(Math.cos(a) * rb, -h / 2, Math.sin(a) * rb, Math.cos(a) * rt, h / 2, Math.sin(a) * rt); }\r
    v.push(0, -h / 2, 0, 0, h / 2, 0);\r
    var B = 2 * n, T = 2 * n + 1;\r
    for (i = 0; i < n; i++) { var j = (i + 1) % n; t.push(2 * i, 2 * j, 2 * j + 1, 2 * i, 2 * j + 1, 2 * i + 1, B, 2 * i, 2 * j); if (rt > 0) t.push(T, 2 * i + 1, 2 * j + 1); }\r
    return { v: v, t: t, c: [0, rt > 0 ? 0 : -h / 4, 0] };\r
  }\r
  function geoBall(r, seg) {\r
    var v = [], t = [], rings = Math.max(3, Math.round(seg * .6)), i, j;\r
    v.push(0, r, 0);\r
    for (i = 1; i < rings; i++) { var p = i / rings * Math.PI; for (j = 0; j < seg; j++) { var a = j / seg * TAU; v.push(Math.sin(p) * Math.cos(a) * r, Math.cos(p) * r, Math.sin(p) * Math.sin(a) * r); } }\r
    v.push(0, -r, 0);\r
    var last = v.length / 3 - 1;\r
    for (j = 0; j < seg; j++) { var k = (j + 1) % seg; t.push(0, 1 + j, 1 + k); t.push(last, 1 + (rings - 2) * seg + j, 1 + (rings - 2) * seg + k); }\r
    for (i = 0; i < rings - 2; i++) for (j = 0; j < seg; j++) { var k2 = (j + 1) % seg, a0 = 1 + i * seg + j, a1 = 1 + i * seg + k2, b0 = a0 + seg, b1 = a1 + seg; t.push(a0, b0, b1, a0, b1, a1); }\r
    return { v: v, t: t, c: [0, 0, 0] };\r
  }\r
  function geoWedge(w, h, d) {\r
    var x = w / 2, z = d / 2;\r
    return { v: [-x, 0, -z, -x, 0, z, -x, h, 0, x, 0, -z, x, 0, z, x, h, 0], t: [0, 1, 2, 3, 5, 4, 0, 3, 4, 0, 4, 1, 0, 2, 5, 0, 5, 3, 1, 4, 5, 1, 5, 2], c: [0, h / 3, 0] };\r
  }\r
\r
  /* ---------- the toolkit ---------- */\r
  function toolkit(root, registry) {\r
    function place(node, x, y, z, parent) { node.position.set(x || 0, y || 0, z || 0); (parent || root).add(node); return node; }\r
    function solid(g, mat, x, y, z, parent) { var n = new Node(); n.geo = g; n.mat = makeMaterial(mat, registry); return place(n, x, y, z, parent); }\r
    var P = {\r
      clamp: clamp, lerp: lerp, smooth: smooth, phase: phase, wave: wave, pulse: pulse, noise: noise, fbm: fbm, hash: hash, TAU: TAU,\r
      mat: function (s) { return makeMaterial(s, registry); },\r
      update: function () { (function walk(n, pm) { compose(n, pm); for (var i = 0; i < n.children.length; i++) walk(n.children[i], n.m); })(root, null); },\r
      group: function (x, y, z, parent) { return place(new Node(), x, y, z, parent); },\r
      box: function (w, h, d, mat, x, y, z, parent) { return solid(geoBox(w, h, d), mat, x, y, z, parent); },\r
      cyl: function (rt, rb, h, mat, x, y, z, parent, seg) { return solid(geoCyl(rt, rb, h, seg || 10), mat, x, y, z, parent); },\r
      cone: function (r, h, mat, x, y, z, parent, seg) { return solid(geoCyl(0, r, h, seg || 10), mat, x, y, z, parent); },\r
      ball: function (r, mat, x, y, z, parent, seg) { return solid(geoBall(r, seg || 8), mat, x, y, z, parent); },\r
      wedge: function (w, h, d, mat, x, y, z, parent) { return solid(geoWedge(w, h, d), mat, x, y, z, parent); },\r
      line: function (points, mat, parent) { var n = new Node(); n.line = points; n.mat = makeMaterial(mat, registry); return place(n, 0, 0, 0, parent); },\r
      person: function (x, z, parent, o) {\r
        o = o || {}; var k = o.h || 1.3, root2 = P.group(x, 0, z, parent); root2.rotation.y = o.yaw || 0;\r
        var shirt = o.shirt || '#a8644c', pants = o.pants || '#3f4a5a', skin = o.skin || '#e0b08a', sleeve = o.sleeve || (typeof shirt === 'string' ? shade(shirt, .8) : shirt), shoes = o.shoes || '#2b2624';\r
        var hips = P.group(0, .36 * k, 0, root2), legs = [], knees = [];\r
        [-1, 1].forEach(function (sd) {\r
          var leg = P.group(sd * .055 * k, 0, 0, hips); P.box(.09 * k, .19 * k, .11 * k, pants, 0, -.095 * k, 0, leg);\r
          var knee = P.group(0, -.18 * k, 0, leg); P.box(.08 * k, .17 * k, .1 * k, pants, 0, -.085 * k, 0, knee);\r
          P.box(.09 * k, .05 * k, .15 * k, shoes, 0, -.165 * k, .025 * k, knee); legs.push(leg); knees.push(knee);\r
        });\r
        var body = P.group(0, 0, 0, hips);\r
        P.box(.25 * k, .31 * k, .15 * k, shirt, 0, .165 * k, 0, body);\r
        var head = P.group(0, .32 * k, 0, body);\r
        P.box(.07 * k, .04 * k, .07 * k, skin, 0, .02 * k, 0, head);\r
        P.box(.18 * k, .17 * k, .17 * k, skin, 0, .125 * k, 0, head);\r
        var hair = o.hair || '#3b2a20';\r
        if (o.hair !== false) { P.box(.19 * k, .06 * k, .18 * k, hair, 0, .22 * k, -.01 * k, head); P.box(.19 * k, .12 * k, .05 * k, hair, 0, .15 * k, -.07 * k, head); }\r
        if (o.hat) { P.cyl(.17 * k, .17 * k, .025 * k, o.hat, 0, .235 * k, 0, head, 10); P.cyl(.095 * k, .1 * k, .08 * k, o.hat, 0, .28 * k, 0, head, 8); }\r
        var arms = [], elbows = [], hands = [];\r
        [-1, 1].forEach(function (sd) {\r
          var arm = P.group(sd * .165 * k, .29 * k, 0, body); P.box(.07 * k, .15 * k, .08 * k, sleeve, 0, -.07 * k, 0, arm);\r
          var elbow = P.group(0, -.145 * k, 0, arm); P.box(.065 * k, .13 * k, .07 * k, o.bare ? skin : sleeve, 0, -.06 * k, 0, elbow);\r
          var hand = P.group(0, -.14 * k, 0, elbow); P.box(.075 * k, .065 * k, .075 * k, skin, 0, 0, 0, hand);\r
          arms.push(arm); elbows.push(elbow); hands.push(hand);\r
        });\r
        return { root: root2, hips: hips, body: body, head: head, armL: arms[0], armR: arms[1], elbowL: elbows[0], elbowR: elbows[1], handL: hands[0], handR: hands[1],\r
          legL: legs[0], legR: legs[1], kneeL: knees[0], kneeR: knees[1], k: k };\r
      },\r
      /* a clear pose for an action; every joint is set, so a tick can call it and then add its own motion on top */\r
      pose: function (p, name, s) {\r
        s = s == null ? 1 : s; var J = POSES[name] || POSES.stand, k = p.k;\r
        ['armL', 'armR', 'elbowL', 'elbowR', 'legL', 'legR', 'kneeL', 'kneeR', 'body', 'head'].forEach(function (j) { var v = J[j] || [0, 0, 0]; p[j].rotation.set(v[0] * s, v[1] * s, v[2] * s); });\r
        p.hips.position.y = (J.hips == null ? .36 : J.hips) * k;\r
        return p;\r
      },\r
      tree: function (x, z, parent, o) {\r
        o = o || {}; var r = o.r || .7, h = o.h || r * 1.5, g = P.group(x, 0, z, parent), m = o.mat || 'leaf', seed = o.seed || (x * 7 + z * 13);\r
        g.rotation.y = o.yaw || 0;\r
        P.cyl(r * .11, r * .16, h, o.trunk || 'darkwood', 0, h / 2, 0, g, 7);\r
        P.cyl(r * .05, r * .07, r * .6, o.trunk || 'darkwood', r * .25, h * .82, 0, g, 5).rotation.z = -.7;\r
        var n = o.clusters || 11;\r
        for (var i = 0; i < n; i++) {\r
          var a = i * 2.39996 + seed, f = i / (n - 1), rr = r * (.42 + .22 * hash(i, seed | 0)), ring = r * .62 * Math.sin(Math.PI * (.25 + f * .6));\r
          P.ball(rr, m, Math.cos(a) * ring, h + r * (.15 + f * .9), Math.sin(a) * ring, g, 7).scale.y = .82;\r
        }\r
        return g;\r
      },\r
      bush: function (x, z, parent, o) {\r
        o = o || {}; var r = o.r || .35, g = P.group(x, 0, z, parent), m = o.mat || 'leaf', n = o.clusters || 5;\r
        for (var i = 0; i < n; i++) { var a = i * 2.39996 + x, d = i ? r * .55 : 0; P.ball(r * (i ? .62 : .8), m, Math.cos(a) * d, r * (i ? .45 : .62), Math.sin(a) * d, g, 7).scale.y = .8; }\r
        if (o.flowers) for (var j = 0; j < 7; j++) { var b = j * 2.1 + z; P.box(r * .14, r * .14, r * .14, o.flowers, Math.cos(b) * r * .62, r * (.75 + .3 * hash(j, 3)), Math.sin(b) * r * .62, g); }\r
        return g;\r
      }\r
    };\r
    return P;\r
  }\r
\r
  /* ---------- the renderer ---------- */\r
  function mount(spec, canvas, opts) {\r
    opts = opts || {};\r
    var W = spec.width || 320, H = spec.height || 240, N = W * H;\r
    canvas.width = W; canvas.height = H;\r
    var bg = spec.clearColor ? pack(rgb(spec.clearColor)) : 0xffffffff;\r
    var g2 = canvas.getContext('2d'), img = g2.createImageData(W, H), out = new Uint32Array(img.data.buffer);\r
    var registry = { list: [], cache: {}, named: {} };\r
    Object.keys(spec.materials || {}).forEach(function (k) { registry.named[k] = spec.materials[k]; });\r
    var root = new Node(), P = toolkit(root, registry);\r
    var parts = spec.build(P) || {};\r
\r
    /* camera basis: c points from the scene to the camera, r to screen right, u to screen up */\r
    var cam = spec.camera || {}, az = (cam.az == null ? 45 : cam.az) * DEG, el = (cam.el == null ? 30 : cam.el) * DEG;\r
    var C = [Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)], R = [Math.cos(az), 0, -Math.sin(az)], U = [-Math.sin(az) * Math.sin(el), Math.cos(el), -Math.cos(az) * Math.sin(el)];\r
    var sun = spec.sun || {}, saz = (sun.az == null ? -40 : sun.az) * DEG, sel = (sun.el == null ? 48 : sun.el) * DEG, AMB = sun.ambient == null ? .34 : sun.ambient;\r
    var L = [Math.sin(saz) * Math.cos(sel), Math.sin(sel), Math.cos(saz) * Math.cos(sel)], LR = [Math.cos(saz), 0, -Math.sin(saz)], LU = [-Math.sin(saz) * Math.sin(sel), Math.cos(sel), -Math.cos(saz) * Math.sin(sel)];\r
    var dot = function (a, x, y, z) { return a[0] * x + a[1] * y + a[2] * z; };\r
    var gr = spec.ground || { rx: 4, rz: 3 }, RX = gr.rx || 4, RZ = gr.rz || 3, TOP = cam.height || 3;\r
\r
    /* fit: the ground's box and the scene's height into the frame.\r
       A rectangle's corners sit outside the ellipse, so only that mode adds them. */\r
    var corners = [];\r
    for (var ca = 0; ca < 48; ca++) { var an = ca / 48 * TAU; corners.push([Math.cos(an) * RX, 0, Math.sin(an) * RZ], [Math.cos(an) * RX * .8, TOP, Math.sin(an) * RZ * .8]); }\r
    if (gr.rect) {\r
      var csx, csz;\r
      for (csx = -1; csx <= 1; csx += 2) for (csz = -1; csz <= 1; csz += 2) corners.push([csx * RX, 0, csz * RZ], [csx * RX * .92, TOP * .35, csz * RZ * .92]);\r
    }\r
    var minA = 1e9, maxA = -1e9, minB = 1e9, maxB = -1e9;\r
    corners.forEach(function (p) { var a = dot(R, p[0], p[1], p[2]), b = dot(U, p[0], p[1], p[2]); minA = Math.min(minA, a); maxA = Math.max(maxA, a); minB = Math.min(minB, b); maxB = Math.max(maxB, b); });\r
    var S = cam.scale || Math.min((W - 10) / (maxA - minA), (H - 10) / (maxB - minB));\r
    var T = cam.target || [0, 0, 0], OA = cam.target ? dot(R, T[0], T[1], T[2]) : (minA + maxA) / 2, OB = cam.target ? dot(U, T[0], T[1], T[2]) : (minB + maxB) / 2;\r
    var CX = W / 2, CY = H / 2;\r
    /* optional finish. Every default below is the value the original picture used.\r
       bayer is only 8 (the original matrix) or 4. Any other value is a mistake, not a silent 4. */\r
    var bayerN = spec.bayer == null ? 8 : spec.bayer, shadowMode = spec.shadow || 'soft', rimOn = !!spec.rim, windFps = spec.wind || 0, contactK = spec.contact == null ? .32 : spec.contact;\r
    var bayerShown = spec.bayer;\r
    if (typeof bayerShown === "number" && bayerShown !== bayerShown) bayerShown = "NaN";\r
    else if (bayerShown === Infinity || bayerShown === -Infinity) bayerShown = String(bayerShown);\r
    if (bayerN !== 8 && bayerN !== 4) throw new Error("Pixel: bayer must be 4 or 8 (got " + JSON.stringify(bayerShown) + ")");\r
    P.px = 1 / S;\r
    P.snap = function (v) { return Math.round(v * S) / S; };\r
    P.wind = function (t, period, offset) { var qt = windFps > 0 ? Math.floor(t * windFps + 1e-8) / windFps : t; return wave(qt, period, offset); };\r
\r
    /* shadow map over the same box, seen from the sun */\r
    var SM = 512, smin = [1e9, 1e9], smax = [-1e9, -1e9];\r
    corners.forEach(function (p) { var a = dot(LR, p[0], p[1], p[2]), b = dot(LU, p[0], p[1], p[2]); smin[0] = Math.min(smin[0], a); smax[0] = Math.max(smax[0], a); smin[1] = Math.min(smin[1], b); smax[1] = Math.max(smax[1], b); });\r
    var SS = (SM - 4) / Math.max(smax[0] - smin[0], smax[1] - smin[1]), shadow = new Float32Array(SM * SM);\r
    /* a top-down height map of the solids: where something stands close above the ground, the ground darkens (contact shadow) */\r
    var HMS = 160, HK = (HMS - 2) / (2 * Math.max(RX, RZ) + 1), hmap = new Float32Array(HMS * HMS), HOFF = Math.max(RX, RZ) + .5;\r
\r
    /* the ground, per screen pixel, once: where the pixel's ray meets y = 0, its zone and whether it survives the dissolve */\r
    var gx = new Float32Array(N), gz = new Float32Array(N), gdep = new Float32Array(N), gmat = new Int16Array(N), gfade = new Float32Array(N);\r
    var wob = gr.wobble == null ? .3 : gr.wobble, fade = gr.fade == null ? .45 : gr.fade, zone = gr.zone || function () { return 'grass'; };\r
    for (var py = 0; py < H; py++) for (var px = 0; px < W; px++) {\r
      var i = py * W + px, a = (px + .5 - CX) / S + OA, b = (CY - py - .5) / S + OB;\r
      var k = -(U[1] * b) / C[1], wx = R[0] * a + U[0] * b + C[0] * k, wz = R[2] * a + U[2] * b + C[2] * k;\r
      gx[i] = wx; gz[i] = wz; gdep[i] = dot(C, wx, 0, wz);\r
      var d, edge;\r
      if (gr.rect) edge = Math.min(RX - Math.abs(wx), RZ - Math.abs(wz)) + wob * (fbm(wx * .55 + 3, wz * .55 - 7) - .5) * 2.4 + (noise(wx * 3, wz * 3) - .5) * .25;\r
      else { d = Math.sqrt(wx * wx / (RX * RX) + wz * wz / (RZ * RZ)); edge = (1 - d) * Math.min(RX, RZ) + wob * (fbm(wx * .55 + 3, wz * .55 - 7) - .5) * 2.4 + (noise(wx * 3, wz * 3) - .5) * .25; }\r
      var al = clamp(edge / fade, 0, 1);\r
      var bv = bayerN === 8 ? BAYER[(py & 7) * 8 + (px & 7)] : BAYER4[(py & 3) * 4 + (px & 3)];\r
      if (al <= bv * .999 || al <= 0) { gmat[i] = -1; continue; }\r
      gfade[i] = 1 - al;\r
      var zm = makeMaterial(zone(wx, wz, P), registry); gmat[i] = zm.id;\r
    }\r
\r
    /* per-frame buffers */\r
    var depth = new Float32Array(N), tri = new Int32Array(N), wX = new Float32Array(N), wY = new Float32Array(N), wZ = new Float32Array(N), idx = new Int8Array(N), mid = new Int16Array(N), castPx = new Uint8Array(N);\r
    var triN = [], triMat = [], triD = [], triHot = [], triC = [], solids = [], lines = [], stats = { tris: 0, lines: 0, ms: 0, frames: 0, msSum: 0 };\r
    function collect() { solids.length = 0; lines.length = 0; (function walk(n, pm, h) { if (!n.visible) return; compose(n, pm); if (n._hot != null) h = n._hot; n._h = h; if (n.geo) solids.push(n); if (n.line) lines.push(n); for (var i = 0; i < n.children.length; i++) walk(n.children[i], n.m, h); })(root, null, -1); }\r
\r
    var vx = new Float64Array(4096), vy = new Float64Array(4096), vz = new Float64Array(4096);\r
    function rasterShadow(ax, ay, az2, bx, by, bz, cx, cy, cz) {\r
      var x0 = (dot(LR, ax, ay, az2) - smin[0]) * SS + 2, y0 = (smax[1] - dot(LU, ax, ay, az2)) * SS + 2, d0 = dot(L, ax, ay, az2);\r
      var x1 = (dot(LR, bx, by, bz) - smin[0]) * SS + 2, y1 = (smax[1] - dot(LU, bx, by, bz)) * SS + 2, d1 = dot(L, bx, by, bz);\r
      var x2 = (dot(LR, cx, cy, cz) - smin[0]) * SS + 2, y2 = (smax[1] - dot(LU, cx, cy, cz)) * SS + 2, d2 = dot(L, cx, cy, cz);\r
      var area = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0); if (Math.abs(area) < 1e-9) return;\r
      var mnx = Math.max(0, Math.floor(Math.min(x0, x1, x2))), mxx = Math.min(SM - 1, Math.ceil(Math.max(x0, x1, x2))), mny = Math.max(0, Math.floor(Math.min(y0, y1, y2))), mxy = Math.min(SM - 1, Math.ceil(Math.max(y0, y1, y2)));\r
      var inv = 1 / area;\r
      for (var y = mny; y <= mxy; y++) for (var x = mnx; x <= mxx; x++) {\r
        var qx = x + .5, qy = y + .5;\r
        var w0 = ((x1 - qx) * (y2 - qy) - (x2 - qx) * (y1 - qy)) * inv, w1 = ((x2 - qx) * (y0 - qy) - (x0 - qx) * (y2 - qy)) * inv, w2 = 1 - w0 - w1;\r
        if (w0 < -.001 || w1 < -.001 || w2 < -.001) continue;\r
        var dd = w0 * d0 + w1 * d1 + w2 * d2, j = y * SM + x; if (dd > shadow[j]) shadow[j] = dd;\r
      }\r
    }\r
    function rasterMain(id, ax, ay, az2, bx, by, bz, cx, cy, cz) {\r
      var x0 = (dot(R, ax, ay, az2) - OA) * S + CX, y0 = (OB - dot(U, ax, ay, az2)) * S + CY;\r
      var x1 = (dot(R, bx, by, bz) - OA) * S + CX, y1 = (OB - dot(U, bx, by, bz)) * S + CY;\r
      var x2 = (dot(R, cx, cy, cz) - OA) * S + CX, y2 = (OB - dot(U, cx, cy, cz)) * S + CY;\r
      var area = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0); if (Math.abs(area) < 1e-9) return;\r
      var d0 = dot(C, ax, ay, az2), d1 = dot(C, bx, by, bz), d2 = dot(C, cx, cy, cz);\r
      var mnx = Math.max(0, Math.floor(Math.min(x0, x1, x2))), mxx = Math.min(W - 1, Math.ceil(Math.max(x0, x1, x2))), mny = Math.max(0, Math.floor(Math.min(y0, y1, y2))), mxy = Math.min(H - 1, Math.ceil(Math.max(y0, y1, y2)));\r
      var inv = 1 / area;\r
      for (var y = mny; y <= mxy; y++) for (var x = mnx; x <= mxx; x++) {\r
        var qx = x + .5, qy = y + .5;\r
        var w0 = ((x1 - qx) * (y2 - qy) - (x2 - qx) * (y1 - qy)) * inv, w1 = ((x2 - qx) * (y0 - qy) - (x0 - qx) * (y2 - qy)) * inv, w2 = 1 - w0 - w1;\r
        if (w0 < -.0001 || w1 < -.0001 || w2 < -.0001) continue;\r
        var dd = w0 * d0 + w1 * d1 + w2 * d2, j = y * W + x;\r
        if (dd <= depth[j]) continue;\r
        depth[j] = dd; tri[j] = id; wX[j] = w0 * ax + w1 * bx + w2 * cx; wY[j] = w0 * ay + w1 * by + w2 * cy; wZ[j] = w0 * az2 + w1 * bz + w2 * cz;\r
      }\r
    }\r
    function rasterTop(ax, ay, az2, bx, by, bz, cx, cy, cz) {\r
      var x0 = (ax + HOFF) * HK, y0 = (az2 + HOFF) * HK, x1 = (bx + HOFF) * HK, y1 = (bz + HOFF) * HK, x2 = (cx + HOFF) * HK, y2 = (cz + HOFF) * HK;\r
      var area = (x1 - x0) * (y2 - y0) - (x2 - x0) * (y1 - y0); if (Math.abs(area) < 1e-9) return;\r
      var mnx = Math.max(0, Math.floor(Math.min(x0, x1, x2))), mxx = Math.min(HMS - 1, Math.ceil(Math.max(x0, x1, x2))), mny = Math.max(0, Math.floor(Math.min(y0, y1, y2))), mxy = Math.min(HMS - 1, Math.ceil(Math.max(y0, y1, y2)));\r
      var inv = 1 / area;\r
      for (var y = mny; y <= mxy; y++) for (var x = mnx; x <= mxx; x++) {\r
        var qx = x + .5, qy = y + .5;\r
        var w0 = ((x1 - qx) * (y2 - qy) - (x2 - qx) * (y1 - qy)) * inv, w1 = ((x2 - qx) * (y0 - qy) - (x0 - qx) * (y2 - qy)) * inv, w2 = 1 - w0 - w1;\r
        if (w0 < -.02 || w1 < -.02 || w2 < -.02) continue;\r
        var hh = Math.min(ay, by, cy), j = y * HMS + x; if (hh < hmap[j] || hmap[j] === 0) hmap[j] = Math.max(hh, .001);\r
      }\r
    }\r
    var AO = [[0, 0], [.16, 0], [-.16, 0], [0, .16], [0, -.16], [.3, .2], [-.3, -.2], [.2, -.3], [-.2, .3]];\r
    function occl(x, z) {\r
      var o = 0;\r
      for (var k = 0; k < AO.length; k++) {\r
        var u = Math.floor((x + AO[k][0] + HOFF) * HK), v = Math.floor((z + AO[k][1] + HOFF) * HK);\r
        if (u < 0 || v < 0 || u >= HMS || v >= HMS) continue;\r
        var h = hmap[v * HMS + u]; if (h > 0 && h < .5) o += (k < 5 ? 1.2 : .7) * (1 - h * 1.6);\r
      }\r
      return Math.min(1, o / 7);\r
    }\r
    function lit(x, y, z) {\r
      var u = (dot(LR, x, y, z) - smin[0]) * SS + 2, v = (smax[1] - dot(LU, x, y, z)) * SS + 2, d = dot(L, x, y, z) + .035, s = 0;\r
      if (shadowMode === 'hard') { var hu = clamp(Math.floor(u), 0, SM - 1), hv = clamp(Math.floor(v), 0, SM - 1); return shadow[hv * SM + hu] <= d ? 1 : 0; }\r
      var iu = Math.floor(u - .5), iv = Math.floor(v - .5);\r
      for (var oy = 0; oy < 2; oy++) for (var ox = 0; ox < 2; ox++) { var uu = clamp(iu + ox, 0, SM - 1), vv = clamp(iv + oy, 0, SM - 1); if (shadow[vv * SM + uu] <= d) s += .25; }\r
      return s;\r
    }\r
\r
    function renderAt(t) {\r
      var t0 = performance.now(), dur = spec.duration || 6;\r
      ctx.dt = lastT == null ? 0 : clamp(t - lastT, 0, .1); lastT = t; ctx.t = t; ctx.q = phase(t, dur);\r
      ctx.hover = hoverIdx >= 0 ? hot[hoverIdx] : null; ctx.active = activeIdx >= 0 ? hot[activeIdx] : null; ctx.read = '';\r
      if (spec.tick) spec.tick(ctx);\r
      if (opts.onRead) { var line = ctx.hover && ctx.hover.name ? ctx.hover.name : ctx.read || ''; if (line !== lastRead) { lastRead = line; opts.onRead(line); } }\r
      collect();\r
      depth.fill(-1e9); tri.fill(-1); shadow.fill(-1e9); hmap.fill(0);\r
      triN.length = 0; triMat.length = 0; triD.length = 0; triHot.length = 0; triC.length = 0;\r
      var id = 0, s, k, n;\r
      for (s = 0; s < solids.length; s++) {\r
        var node = solids[s], g = node.geo, m = node.m, nv = g.v.length / 3;\r
        for (k = 0; k < nv; k++) { var lx = g.v[k * 3], ly = g.v[k * 3 + 1], lz = g.v[k * 3 + 2]; vx[k] = m[0] * lx + m[1] * ly + m[2] * lz + m[3]; vy[k] = m[4] * lx + m[5] * ly + m[6] * lz + m[7]; vz[k] = m[8] * lx + m[9] * ly + m[10] * lz + m[11]; }\r
        var c = node.worldPoint(g.c[0], g.c[1], g.c[2]);\r
        for (k = 0; k < g.t.length; k += 3) {\r
          var a = g.t[k], b = g.t[k + 1], e = g.t[k + 2];\r
          var ux = vx[b] - vx[a], uy = vy[b] - vy[a], uz = vz[b] - vz[a], wx2 = vx[e] - vx[a], wy2 = vy[e] - vy[a], wz2 = vz[e] - vz[a];\r
          var nx = uy * wz2 - uz * wy2, ny = uz * wx2 - ux * wz2, nz = ux * wy2 - uy * wx2, nl = Math.sqrt(nx * nx + ny * ny + nz * nz); if (nl < 1e-12) continue;\r
          nx /= nl; ny /= nl; nz /= nl;\r
          var mx = (vx[a] + vx[b] + vx[e]) / 3 - c[0], my = (vy[a] + vy[b] + vy[e]) / 3 - c[1], mz = (vz[a] + vz[b] + vz[e]) / 3 - c[2];\r
          if (nx * mx + ny * my + nz * mz < 0) { nx = -nx; ny = -ny; nz = -nz; }\r
          var nd = dot(L, nx, ny, nz);\r
          if (nd > 0 || node.mat.flat) rasterShadow(vx[a], vy[a], vz[a], vx[b], vy[b], vz[b], vx[e], vy[e], vz[e]);\r
          if (ny < -.3) rasterTop(vx[a], vy[a], vz[a], vx[b], vy[b], vz[b], vx[e], vy[e], vz[e]);\r
          if (dot(C, nx, ny, nz) <= 0) continue;\r
          triN.push(nx, ny, nz); triMat.push(node.mat.id); triD.push(Math.max(0, nd)); triHot.push(node._h); triC.push(c[0], c[1], c[2]);\r
          rasterMain(id++, vx[a], vy[a], vz[a], vx[b], vy[b], vz[b], vx[e], vy[e], vz[e]);\r
        }\r
      }\r
      stats.tris = id;\r
      /* lines: 1 px, depth tested, shaded as if they faced up */\r
      for (s = 0; s < lines.length; s++) {\r
        var ln = lines[s], pts = ln.line, lid = id++;\r
        triN.push(0, 1, 0); triMat.push(ln.mat.id); triD.push(Math.max(0, L[1])); triHot.push(ln._h); triC.push(0, 0, 0);\r
        for (n = 0; n < pts.length - 1; n++) {\r
          var p0 = ln.worldPoint(pts[n][0], pts[n][1], pts[n][2]), p1 = ln.worldPoint(pts[n + 1][0], pts[n + 1][1], pts[n + 1][2]);\r
          var sx0 = (dot(R, p0[0], p0[1], p0[2]) - OA) * S + CX, sy0 = (OB - dot(U, p0[0], p0[1], p0[2])) * S + CY, sx1 = (dot(R, p1[0], p1[1], p1[2]) - OA) * S + CX, sy1 = (OB - dot(U, p1[0], p1[1], p1[2])) * S + CY;\r
          var steps = Math.max(1, Math.ceil(Math.max(Math.abs(sx1 - sx0), Math.abs(sy1 - sy0))));\r
          for (k = 0; k <= steps; k++) {\r
            var f = k / steps, X = Math.floor(lerp(sx0, sx1, f)), Y = Math.floor(lerp(sy0, sy1, f)); if (X < 0 || Y < 0 || X >= W || Y >= H) continue;\r
            var qx = lerp(p0[0], p1[0], f), qy = lerp(p0[1], p1[1], f), qz = lerp(p0[2], p1[2], f), dd = dot(C, qx, qy, qz) + .02, j = Y * W + X;\r
            if (dd <= depth[j]) continue; depth[j] = dd; tri[j] = lid; wX[j] = qx; wY[j] = qy; wZ[j] = qz;\r
          }\r
        }\r
      }\r
      shade(ctx.q * TAU, Math.floor(ctx.q * dur * 3));\r
      g2.putImageData(img, 0, 0);\r
      stats.ms = performance.now() - t0; stats.msSum += stats.ms; stats.frames++;\r
      return stats.ms;\r
    }\r
\r
    var mats = registry.list, outline = spec.outline !== false;\r
    /* textures take the loop's angle (0..2 pi), not seconds, so water comes back to where it started; tick is the sparkle step */\r
    function shade(t, tick) {\r
      var i, px, py;\r
      for (py = 0; py < H; py++) for (px = 0; px < W; px++) {\r
        i = py * W + px;\r
        var id = tri[i], b = bayerN === 8 ? BAYER[(py & 7) * 8 + (px & 7)] : BAYER4[(py & 3) * 4 + (px & 3)], m, x, y, z, nx, ny, nz, nd, tone, extra = 0;\r
        if (id < 0 || gdep[i] > depth[i] && gmat[i] >= 0) {\r
          if (gmat[i] < 0) { mid[i] = -1; castPx[i] = 0; continue; }\r
          m = mats[gmat[i]]; x = gx[i]; y = 0; z = gz[i]; nx = 0; ny = 1; nz = 0; nd = Math.max(0, L[1]); tri[i] = -1; depth[i] = gdep[i];\r
          extra = gfade[i] * .45 - occl(x, z) * contactK;\r
          if (m.blades && hash(px, py + 1) > .955 && !(hash(px, py) > .955)) extra += .22;\r
          else if (m.blades && hash(px, py) > .955) extra -= .1;\r
        } else {\r
          m = mats[triMat[id]]; x = wX[i]; y = wY[i]; z = wZ[i]; nx = triN[id * 3]; ny = triN[id * 3 + 1]; nz = triN[id * 3 + 2]; nd = triD[id];\r
          if (m.round) { var rx = x - triC[id * 3], ry = y - triC[id * 3 + 1], rz = z - triC[id * 3 + 2], rl = Math.sqrt(rx * rx + ry * ry + rz * rz) || 1; nx = rx / rl; ny = ry / rl; nz = rz / rl; nd = Math.max(0, dot(L, nx, ny, nz)); }\r
        }\r
        var l = AMB + (1 - AMB) * nd * (nd > 0 ? lit(x, y, z) : 0) + .08 * ny;\r
        if (m.glow) l = Math.max(l, m.glow);\r
        /* planar coordinates of the face, then along/across the grain */\r
        var ax2 = Math.abs(nx), ay2 = Math.abs(ny), az2 = Math.abs(nz), u, v, au, av;\r
        if (ay2 >= ax2 && ay2 >= az2) { u = x; v = z; au = 'x'; av = 'z'; } else if (ax2 >= az2) { u = z; v = y; au = 'z'; av = 'y'; } else { u = x; v = y; au = 'x'; av = 'y'; }\r
        var along = u, across = v;\r
        if (m.grain === av) { along = v; across = u; }\r
        tone = .08 + .84 * l + m.tex(m, x, y, z, along, across, t, px, py) + extra;\r
        var ramp = m.alt && m.stripe && (Math.floor(along / m.stripe) & 1) ? m.alt : m.ramp, nR = ramp.length;\r
        /* a flat figure ignores the texture and the dither and lands on whole ramp steps */\r
        if (m.figure) tone = Math.min(nR - 1, Math.floor(clamp(l, 0, .999) * nR)) / (nR - 1);\r
        /* hard shadow only marks the pixel. Dither stays on, so soft mode uses the same formula as before. */\r
        var cast = false;\r
        if (shadowMode === 'hard' && nd > 0) cast = lit(x, y, z) === 0;\r
        var f = tone * (nR - 1) + (b - .5) * (m.figure ? 0 : m.dither), k = Math.floor(f + .5);\r
        if (m.water && hash3(px, py, tick) > .993 && tone > .7) k = nR - 1;\r
        idx[i] = k < 0 ? 0 : k >= nR ? nR - 1 : k; mid[i] = m.id * 2 + (ramp === m.alt ? 1 : 0);\r
        castPx[i] = cast && tri[i] < 0 ? 1 : 0;\r
      }\r
      /* silhouettes: a solid pixel whose neighbour is far behind it, or the page, steps one shade darker */\r
      for (py = 0; py < H; py++) for (px = 0; px < W; px++) {\r
        i = py * W + px;\r
        if (mid[i] < 0) { out[i] = bg; continue; }\r
        var mm = mats[mid[i] >> 1], rr = mid[i] & 1 ? mm.alt : mm.ramp, kk = idx[i];\r
        if (castPx[i]) { out[i] = veil(rr[kk]); continue; }\r
        if (outline && tri[i] >= 0) {\r
          var dz = depth[i], far = .18;\r
          if ((px > 0 && (mid[i - 1] < 0 || dz - depth[i - 1] > far)) || (px < W - 1 && (mid[i + 1] < 0 || dz - depth[i + 1] > far)) || (py > 0 && (mid[i - W] < 0 || dz - depth[i - W] > far)) || (py < H - 1 && (mid[i + W] < 0 || dz - depth[i + W] > far))) kk = mm.figure ? 0 : Math.max(0, kk - 1);\r
        }\r
        if (hoverIdx >= 0 && tri[i] >= 0 && triHot[tri[i]] === hoverIdx) kk = Math.min(rr.length - 1, kk + 1);\r
        /* warm rim on a top-left edge whose face points that way. The ground is not a triangle, so it never takes a rim. */\r
        if (rimOn && tri[i] >= 0) {\r
          var rimL = px > 0 && (mid[i - 1] < 0 || depth[i] - depth[i - 1] > .18), rimU = py > 0 && (mid[i - W] < 0 || depth[i] - depth[i - W] > .18);\r
          if (rimL || rimU) {\r
            var rnx = triN[tri[i] * 3], rny = triN[tri[i] * 3 + 1], rnz = triN[tri[i] * 3 + 2];\r
            var face = (-R[0] + U[0]) * rnx + (-R[1] + U[1]) * rny + (-R[2] + U[2]) * rnz;\r
            if (face > .22) { var base = [rr[kk] & 255, (rr[kk] >> 8) & 255, (rr[kk] >> 16) & 255]; out[i] = pack(mix(base, [255, 214, 120], .48)); continue; }\r
          }\r
        }\r
        out[i] = rr[kk];\r
      }\r
    }\r
\r
    /* ---------- the pointer: the hot group under a pixel lights one shade, a press answers ---------- */\r
    var hot = parts.hot || [], hoverIdx = -1, activeIdx = -1, lastT = null, lastRead = null, ctx = { parts: parts, P: P, pointer: { x: 0, y: 0, inside: false }, hover: null, pressed: null, pressedAt: -1, active: null, read: '' };\r
    hot.forEach(function (g, i) { g._hot = i; });\r
    function pick(px, py) { if (px < 0 || py < 0 || px >= W || py >= H) return -1; var id = tri[py * W + px]; return id >= 0 ? triHot[id] : -1; }\r
    function point(nx, ny, down) {\r
      var px = Math.floor((nx + 1) / 2 * W), py = Math.floor((ny + 1) / 2 * H), h = pick(px, py);\r
      ctx.pointer.x = nx; ctx.pointer.y = ny; ctx.pointer.inside = true;\r
      var changed = h !== hoverIdx; hoverIdx = h;\r
      if (down) { ctx.pressed = h >= 0 ? hot[h] : null; ctx.pressedAt = ctx.t; activeIdx = h >= 0 && h !== activeIdx ? h : -1; changed = true; }\r
      if (changed && !running) renderAt(ctx.t || spec.still || 0);\r
      return h >= 0 ? hot[h] : null;\r
    }\r
    function norm(e) { var r = canvas.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * 2 - 1, (e.clientY - r.top) / r.height * 2 - 1]; }\r
    var onMove = function (e) { var q = norm(e); point(q[0], q[1], false); canvas.style.cursor = hoverIdx >= 0 ? 'pointer' : ''; };\r
    var onDown = function (e) { var q = norm(e); point(q[0], q[1], true); };\r
    var onLeave = function () { ctx.pointer.inside = false; if (hoverIdx >= 0) { hoverIdx = -1; if (!running) renderAt(ctx.t); } };\r
    if (opts.pointer !== false) {\r
      canvas.addEventListener('pointermove', onMove); canvas.addEventListener('pointerdown', onDown); canvas.addEventListener('pointerleave', onLeave);\r
    }\r
\r
    /* ---------- the clock: absolute time, a frame cap, asleep offscreen or hidden, still under reduced motion ---------- */\r
    var raf = 0, running = false, start = 0, lastDraw = -1e9, cap = spec.fps == null ? 24 : spec.fps, visible = true, onscreen = true;\r
    var reduced = opts.reduced != null ? opts.reduced : (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches);\r
    function frame(now) {\r
      raf = requestAnimationFrame(frame);\r
      if (cap) { var iv = 1000 / cap; if (now - lastDraw < iv - 1) return; lastDraw = now - lastDraw > iv * 3 ? now : lastDraw + iv; }\r
      renderAt((now - start) / 1000);\r
    }\r
    function sync() {\r
      var want = !reduced && !opts.still && visible && onscreen;\r
      if (want && !running) { running = true; if (!start) start = performance.now() - (spec.still || 0) * 1000; raf = requestAnimationFrame(frame); }\r
      else if (!want && running) { running = false; cancelAnimationFrame(raf); }\r
    }\r
    var io = typeof IntersectionObserver === 'function' ? new IntersectionObserver(function (es) { onscreen = es[es.length - 1].isIntersecting; sync(); }) : null;\r
    if (io) io.observe(canvas);\r
    var onVis = function () { visible = !document.hidden; sync(); };\r
    document.addEventListener('visibilitychange', onVis);\r
    var mq = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : null, onMq = function () { reduced = mq.matches; if (reduced) renderAt(spec.still || 0); sync(); };\r
    if (mq && mq.addEventListener && opts.reduced == null) mq.addEventListener('change', onMq);\r
    renderAt(spec.still || 0); sync();\r
    return {\r
      renderAt: renderAt, parts: parts, P: P,\r
      pickAt: function (x, y) { return hot[pick(Math.floor(x), Math.floor(y))] || null; },\r
      start: function () { opts.still = false; reduced = false; sync(); }, stop: function () { opts.still = true; sync(); },\r
      setCap: function (f) { cap = f; },\r
      hoverAt: function (x, y) { return point(x, y, false); }, tap: function (x, y) { return point(x, y, true); }, ctx: ctx,\r
      stats: function () { return { tris: stats.tris, ms: stats.ms, avgMs: stats.msSum / Math.max(1, stats.frames), frames: stats.frames, width: W, height: H, running: running, cap: cap }; },\r
      destroy: function () { running = false; cancelAnimationFrame(raf); if (io) io.disconnect(); document.removeEventListener('visibilitychange', onVis); if (mq && mq.removeEventListener) mq.removeEventListener('change', onMq); canvas.removeEventListener('pointermove', onMove); canvas.removeEventListener('pointerdown', onDown); canvas.removeEventListener('pointerleave', onLeave); }\r
    };\r
  }\r
\r
  function scene(spec) { scenes.push(spec); return spec; }\r
  return { scene: scene, scenes: scenes, mount: mount, RAMPS: RAMPS, TEX: TEX, noise: noise, fbm: fbm, hash: hash };\r
})();\r
if (typeof module !== 'undefined' && module.exports) module.exports = Pixel;\r
`,gr=`/* Little Beast — an independent living room, not an official game asset.\r
Ground: warm wood and a woven rug. Structure: window, walls, sofa and shelves.\r
Characters: independent articulated cat rig. Life: breathing, ears, tail and leaves.\r
*/\r
function createLegacyLivingCat(P, data) {\r
  var root=P.group(data.x||0,0,data.z||0), torso=P.group(0,.29,0,root);\r
  root.name='cat · '+data.name;\r
  var fur = data.fur || 'fur';\r
  var socks = data.pattern === 'solid' ? fur : '#eee0ca';\r
  var stripe = data.fur === '#77728a' ? '#504b63' : '#8f5439';\r
  P.box(.65,.32,.3,fur,0,0,0,torso);\r
  if (data.pattern === 'tabby') {\r
    [-.18,0,.18].forEach(function(x){P.box(.055,.015,.27,stripe,x,.16,0,torso);});\r
  } else if (data.pattern === 'tuxedo') {\r
    P.box(.13,.105,.014,'#eee0ca',.21,.025,.151,torso);\r
  }\r
  var head=P.group(.3,.13,0,torso);\r
  P.box(.3,.28,.29,fur,0,0,0,head);\r
  var ears=[-.1,.1].map(function(z){var e=P.group(0,.13,z,head); P.cone(.09,.16,fur,0,.04,0,e,4);P.box(.04,.06,.04,'#bd8478',.035,.07,0,e);return e;});\r
  [-.105,.105].forEach(function(z){P.box(.025,.04,.035,'#3d3939',.16,.025,z,head);});\r
  P.box(.035,.025,.05,'#c58c84',.175,-.04,0,head);\r
  P.box(.25,.08,.2,data.pattern ? socks : '#f3dfbd',.18,-.13,0,head);\r
  var tail=P.group(-.31,.04,0,torso); P.box(.34,.09,.1,fur,-.13,.02,0,tail);P.box(.09,.22,.1,fur,-.28,.1,0,tail);\r
  var feet=[];[-.22,.22].forEach(function(x){[-.12,.12].forEach(function(z){var f=P.group(x,.09,z,root);P.box(.11,.18,.1,fur,0,0,0,f);P.box(.14,.06,.12,socks,.02,-.07,0,f);feet.push(f);});});\r
  var scale=data.scale??1;\r
  root.scale.set(scale,scale,scale);\r
  return {root:root,torso:torso,head:head,ears:ears,tail:tail,feet:feet,data:data};\r
}\r
function poseLegacyLivingCat(cat,t,q,respond,mode) {\r
  var a=q*6.283185, walk=mode==='walk'||(!mode&&q>.5&&q<.85), sleeping=mode==='sleep'||(!mode&&q<.25);\r
  var travel=mode?(q*4)%1:(q-.5)/.35;\r
  var x=walk?Math.sin(travel*Math.PI)*(cat.data.walkLength??1.15):0;\r
  cat.root.position.set(cat.data.x+x,0,cat.data.z);\r
  cat.root.rotation.y=walk?(travel<.5?0:Math.PI):-.2;\r
  cat.torso.scale.y=(sleeping?.65:1)+.035*Math.sin(a*4);\r
  cat.head.rotation.z=sleeping?-.3:.08*Math.sin(a*2);\r
  cat.tail.rotation.y=.25*Math.sin(a*4)+(respond?.8:0);\r
  cat.tail.rotation.z=respond?-.7:0;\r
  cat.ears.forEach(function(e,i){e.rotation.x=.12*Math.sin(a*8+i);});\r
  cat.feet.forEach(function(f,i){f.rotation.z=walk?.35*Math.sin(a*24+i*Math.PI):0;});\r
  cat.head.rotation.y=respond?.5*Math.sin(t*Math.PI):0;\r
  return respond?'purr · hello, little friend':sleeping?'cat · dreaming in the afternoon':walk?'cat · exploring the room':'cat · watching the window';\r
}\r
\r
var livingRoomSpec=Pixel.scene({\r
 name:'living-room',title:'Little Beast — Pixel Living Room',\r
 means:'Afternoon light on a little room; a cat dreams, watches the window and takes a quiet stroll.',\r
 hint:'Hover the cat or plant; tap the cat to say hello.',\r
 width:320,height:240,duration:16,still:6,fps:24,\r
 camera:{az:45,el:30,height:2.9},sun:{az:-45,el:48,ambient:.48},\r
 ground:{rx:4.5,rz:3.8,wobble:.1,fade:.5,zone:function(x,z){return Math.abs(x)<3.1&&Math.abs(z)<2.5?'floor':'sand';}},\r
 materials:{floor:{color:'#b58a60',tex:'wood',grain:'x',plank:.25},wall:{color:'#d7c5a5',tex:'plain'},fur:{color:'#b97742',tex:'plain',dither:.3},sage:{color:'#758f7a',tex:'cloth'},rug:{color:'#b76f51',tex:'cloth',stripe:.14,alt:'cloth'},sunlit:{color:'#edd6a1',tex:'wood',grain:'x',plank:.25,glow:.8}},\r
 build:function(P,pets=[{id:'miso',name:'Miso',x:.2,z:.75}],motions=new Map(),rig=null,apartment=false){\r
  var parts={cats:[],leaves:[],motions:motions};\r
  /* Cutaway walls frame the room without hiding the animal. */\r
  P.box(6.1,2.6,.12,'wall',0,1.3,-2.5); P.box(.12,2.6,5,'wall',-3.05,1.3,0);\r
  P.box(6.1,.13,.13,'darkwood',0,.07,-2.4);P.box(.13,.13,4.8,'darkwood',-2.95,.07,0);\r
  /* Sky inset, wooden mullions, sill and curtains. */\r
  P.box(2.0,1.5,.04,'#a4c5c4',.15,1.67,-2.41);\r
  [-.9,1.2].forEach(function(x){P.box(.09,1.65,.14,'wood',x,1.67,-2.34);});\r
  P.box(2.2,.1,.28,'wood',.15,.88,-2.29);P.box(2.2,.09,.12,'wood',.15,2.46,-2.34);\r
  P.box(.06,1.5,.12,'wood',.15,1.67,-2.3);P.box(2,.06,.12,'wood',.15,1.65,-2.3);\r
  [-1.12,1.43].forEach(function(x){P.box(.32,1.65,.14,'canvas',x,1.65,-2.27);});\r
  /* Solid warm patch of window light, shaped as several floorboards. */\r
  for(var i=0;i<5;i++)P.box(.32,.008,1.7,'sunlit',.1+i*.32,.008,-.9+i*.13);\r
  var carpet=P.group(.15,.025,.75);\r
  P.box(2.5,.035,1.65,'rug',0,0,0,carpet);\r
  /* Sofa with arms, feet and two distinct cushions. */\r
  var sofa=P.group(apartment?-2.36:-1.9,0,apartment?.02:-.7);if(apartment)sofa.scale.z=.79;\r
  P.box(.85,.4,2.05,'sage',0,.4,0,sofa);P.box(.25,.85,2.1,'sage',-.4,.65,0,sofa);\r
  parts.furniture={sofa:sofa,rug:carpet};\r
  [-.95,.95].forEach(function(z){P.box(.95,.55,.18,'sage',0,.6,z,sofa);P.box(.11,.2,.11,'darkwood',.3,.1,z*.8,sofa);});\r
  [-.45,.45].forEach(function(z){P.box(.62,.15,.72,'#a4ae8a',.08,.66,z,sofa);});P.box(.2,.42,.46,'#cd9b70',-.13,.95,.35,sofa);\r
  /* Cabinet, books and a small framed print. */\r
  if(!apartment){\r
    P.box(1.2,.72,.65,'wood',1.95,.38,-1.92);P.box(1.3,.08,.72,'darkwood',1.95,.78,-1.92);\r
    for(i=0;i<5;i++)P.box(.1,.25+(i%2)*.12,.2,['#806855','#8d9b8b','#b67a61'][i%3],1.65+i*.12,.94,-1.9);\r
  }\r
  P.box(.75,.65,.06,'darkwood',-1.85,1.85,-2.38);P.box(.61,.51,.025,'canvas',-1.85,1.85,-2.33);P.ball(.15,'#b57d52',-1.85,1.86,-2.28);\r
  /* Plant, cat basket, bowls, scratching post and yarn. */\r
  var plant=P.group(apartment?.65:2.35,apartment?.925:0,apartment?-2.14:.05);\r
  if(apartment)plant.scale.set(.49,.49,.49);\r
  plant.name='plant · reaching for the sun';P.cyl(.28,.21,.48,'#ad6e51',0,.24,0,plant,10);\r
  parts.furniture.plant=plant;\r
  for(i=0;i<7;i++){var leaf=P.group(0,.45,0,plant);leaf.rotation.y=i*.9;P.box(.04,.75,.04,'leaf',0,.35,0,leaf);P.ball(.18,i%2?'leaf':'leafLight',.12,.65,0,leaf);parts.leaves.push(leaf);}\r
  var basket=P.group(-1.9,0,1.6);parts.furniture.basket=basket;\r
  P.cyl(.48,.4,.15,'wood',0,.09,0,basket,12);P.cyl(.39,.39,.08,'canvas',0,.19,0,basket,12);\r
  [1.6,2.2].forEach(function(x){P.cyl(.2,.16,.12,'#789a9b',x,.07,1.65);P.cyl(.15,.15,.012,x<2?'#795a3f':'#b7d9d8',x,.135,1.65);});\r
  P.box(.55,.08,.55,'wood',2.3,.05,.85);P.cyl(.1,.1,.85,'thatch',2.3,.48,.85);P.box(.6,.08,.55,'canvas',2.3,.95,.85);\r
  P.ball(.13,'#a4584f',-.6,.15,1.9);P.line([[-.6,.03,1.9],[-.3,.03,2.1],[0,.03,1.9]],'#a4584f');\r
  parts.cats=pets.map(function(pet){return rig ? rig.create(P,pet) : createLegacyLivingCat(P,pet);});\r
  parts.poseCat=rig ? rig.pose : poseLegacyLivingCat;\r
  parts.hot=parts.cats.map(function(cat){return cat.root;}).concat(plant);\r
  return parts;\r
 },\r
 tick:function(c){\r
  var p=c.parts;\r
  p.cats.forEach(function(cat,index){\r
    var pressAge=c.t-c.pressedAt, responding=c.pressed===cat.root&&pressAge>=0&&pressAge<2;\r
    var line=p.poseCat(cat,pressAge,c.q,responding,p.motions.get(cat.data.id));\r
    if(index===0||responding)c.read=line;\r
  });\r
  p.leaves.forEach(function(l,i){l.rotation.z=.035*Math.sin(c.q*6.283185*2+i);});\r
 }\r
});\r
\r
/* Presentation-only palettes: the same room, re-tuned for the current housing. */\r
var g3HousingPalettes = {\r
  apartment:{decorate:function(){}},\r
  shared:{\r
    materials:{\r
      floor:{color:'#a98a63',tex:'wood',grain:'x',plank:.25},\r
      wall:{color:'#cdc3a0',tex:'plain'},\r
      rug:{color:'#8b9a74',tex:'cloth',stripe:.14,alt:'cloth'},\r
      sage:{color:'#6d8a76',tex:'cloth'}\r
    },\r
    decorate:function(P){\r
      P.cyl(.24,.18,.36,'#ad6e51',2.6,.18,1.75);P.ball(.17,'leaf',2.6,.45,1.75);\r
      P.box(.42,.1,.34,'thatch',1.15,.05,1.6);P.box(.32,.09,.26,'#8d9b8b',1.15,.14,1.6);\r
      [-1.05,-.35].forEach(function(z,i){P.box(.46,.12,.5,i?'#b8a179':'#c9a24d',-1.86,.75,z);});\r
    }\r
  },\r
  quiet:{\r
    materials:{\r
      floor:{color:'#ab8d6b',tex:'wood',grain:'x',plank:.25},\r
      wall:{color:'#cfc7b4',tex:'plain'},\r
      rug:{color:'#7d8f96',tex:'cloth',stripe:.14,alt:'cloth'},\r
      sage:{color:'#6f7f8a',tex:'cloth'}\r
    },\r
    decorate:function(P){\r
      P.box(.09,.78,.09,'darkwood',2.55,.39,-1.45);P.box(.42,.14,.42,'canvas',2.55,.85,-1.45);\r
      P.box(.34,.32,.26,'#806855',2.55,.16,-1.02);P.box(.3,.26,.24,'#b67a61',2.55,.32,-1.02);\r
      P.box(.6,.05,.22,'#8d9b8b',-2.35,1.15,-2.36);\r
      P.box(.09,.16,.14,'#806855',-2.5,1.26,-2.34);P.box(.08,.13,.13,'#b67a61',-2.38,1.24,-2.34);\r
    }\r
  }\r
};\r
function housingPalette(housing) {\r
  var words = String(housing || '').toLowerCase();\r
  if (/shared|house|家庭|合住/.test(words) && !/apartment/.test(words)) return 'shared';\r
  if (/quiet|安静/.test(words)) return 'quiet';\r
  return 'apartment';\r
}\r
/* Projection owns its scene state. Core supplies a snapshot only. */\r
function createPresentedLivingRoom(snapshot, variant = 'legacy') {\r
  if (snapshot?.version !== '0.1.0-draft' || !Number.isSafeInteger(snapshot.day) ||\r
      snapshot.day < 0 || !Array.isArray(snapshot.animals)) {\r
    throw new TypeError('Expected a presentation snapshot with a nonnegative integer day');\r
  }\r
  var rig = variant === 'legacy' ? null : {create:createNaturalLivingCat,pose:poseNaturalLivingCat};\r
  var slots = [\r
    {x:.2,z:.75,walkLength:1.15,fur:'fur'},\r
    {x:-.68,z:-.7,walkLength:.9,fur:'#77728a'}\r
  ];\r
  var cats = snapshot.animals.filter(function(animal) {\r
    return animal.species === 'cat' && animal.status === 'living';\r
  }).sort(function(a,b) {return a.id < b.id ? -1 : Number(a.id > b.id);});\r
  var pets = cats.slice(0,slots.length).map(function(animal,index) {\r
    var traits = animal.traits || [];\r
    var coat = traits.find(function(trait) { return trait.startsWith('coat:'); });\r
    var pattern = traits.find(function(trait) { return trait.startsWith('pattern:'); });\r
    var coats = {'coat:ginger':'fur','coat:grey':'#77728a','coat:cream':'#d6b68e','coat:black':'#514649'};\r
    var stage = animal.stage || 'adult';\r
    var scale = {kitten:.73, young_adult:.92, adult:1, senior:.97}[stage] || 1;\r
    return {id:animal.id,name:animal.name,...slots[index],\r
      fur:coats[coat] || slots[index].fur, pattern:pattern?.slice(8), variant:variant,\r
      stage:stage, scale:scale, motion:animal.motion || 'observe'};\r
  });\r
  var motions = new Map(pets.map(function(pet) {return [pet.id,pet.motion];}));\r
  var palette = g3HousingPalettes[housingPalette(snapshot.housing)];\r
  var spec = {...livingRoomSpec, materials:{...livingRoomSpec.materials, ...palette.materials}};\r
  spec.build = function(P) {\r
    var parts = livingRoomSpec.build(P,pets,motions,rig);\r
    palette.decorate(P);\r
    return parts;\r
  };\r
  return {\r
    day:snapshot.day,\r
    pets:pets.map(function(pet){return {id:pet.id,name:pet.name};}),\r
    spec:spec,\r
    setMotion:function(id,mode) {\r
      if (!motions.has(id) || !['sleep','observe','walk'].includes(mode)) return false;\r
      motions.set(id,mode);\r
      return true;\r
    }\r
  };\r
}\r
\r
/* This optional standalone route demonstrates a synthetic snapshot. */\r
if (new URLSearchParams(location.search).has('mock')) {\r
  var mockSnapshot = Object.freeze({\r
    version:'0.1.0-draft', day:4, relations:Object.freeze([]),\r
    animals:Object.freeze([\r
      Object.freeze({id:'miso',species:'cat',name:'Miso',ageDays:750,status:'living',\r
        traits:Object.freeze([]),health:'unknown',environment:Object.freeze([])}),\r
      Object.freeze({id:'truffle',species:'cat',name:'Truffle',ageDays:390,status:'living',\r
        traits:Object.freeze([]),health:'unknown',environment:Object.freeze([])})\r
    ])\r
  });\r
  var mockRoom = createPresentedLivingRoom(mockSnapshot);\r
  mockRoom.setMotion('truffle','sleep');\r
  mockRoom.spec.means = 'Mock presentation · 两只猫的展示演示，与正式游戏状态独立。';\r
  mockRoom.spec.hint = 'Tap a cat to say hello, or choose its demo pose below.';\r
  Pixel.scenes[Pixel.scenes.length - 1] = mockRoom.spec;\r
  document.addEventListener('DOMContentLoaded',function() {\r
    var controls=document.createElement('fieldset');\r
    controls.style.cssText='display:flex;flex-wrap:wrap;justify-content:center;gap:6px 16px;max-width:100%;box-sizing:border-box';\r
    var label=document.createElement('legend');\r
    label.textContent='Mock 演示 · 模拟日 '+mockRoom.day;\r
    controls.append(label);\r
    mockRoom.pets.forEach(function(pet) {\r
      var field=document.createElement('label'), select=document.createElement('select');\r
      select.setAttribute('aria-label',pet.name);\r
      field.append(pet.name+' ');\r
      [['sleep','睡觉'],['observe','观察'],['walk','走动']].forEach(function(pair){\r
        select.add(new Option(pair[1],pair[0]));\r
      });\r
      select.value=pet.id==='truffle'?'sleep':'observe';\r
      select.addEventListener('change',function(){\r
        mockRoom.setMotion(pet.id,select.value);\r
        var rt=window.__pixel.runtime;\r
        if (!rt.stats().running) rt.renderAt(rt.ctx.t);\r
      });\r
      field.append(select);\r
      controls.append(field);\r
    });\r
    document.querySelector('main').append(controls);\r
  });\r
}\r
\r
// Module hosts register this classic scene once before mounting their own canvas.\r
window.createPresentedLivingRoom = createPresentedLivingRoom;\r
`,br=`function createNaturalLivingCat(P, data) {\r
  var root = P.group(data.x,0,data.z);\r
  root.name = 'cat · ' + data.name;\r
  var fur = data.fur || 'fur';\r
  var pale = data.pattern === 'solid' ? fur : '#eddfc6';\r
  var dark = data.fur === '#77728a' ? '#504b63' : '#89543b';\r
  var torso = P.group(0,.26,0,root);\r
  function oval(x,y,z,parent,sx,sy,sz,material) {\r
    var shape = P.group(x,y,z,parent);\r
    shape.scale.set(sx,sy,sz);\r
    P.ball(1,material,0,0,0,shape,6);\r
    return shape;\r
  }\r
  oval(-.045,0,0,torso,.36,.175,.172,fur);\r
  if (data.pattern === 'tuxedo') oval(.22,-.04,0,torso,.12,.115,.15,pale);\r
  if (data.pattern === 'tabby') {\r
    [-.18,-.05,.09].forEach(function(x){\r
      var y=.156-Math.abs(x+.045)*.16;\r
      var band=P.box(.038,.018,.20,dark,x,y,0,torso);\r
      band.rotation.z=-x*.75;\r
    });\r
  }\r
  var head = P.group(.24,.125,0,torso);\r
  var cheeks = data.variant === 'cheeks';\r
  oval(0,.025,0,head,cheeks?.192:.155,cheeks?.153:.174,cheeks?.192:.152,fur);\r
  if (cheeks) {\r
    [-.076,.076].forEach(function(z){oval(.125,-.047,z,head,.062,.05,.068,pale);});\r
  } else if(data.pattern !== 'solid') {\r
    oval(.121,-.065,0,head,.055,.056,.091,pale);\r
  }\r
  var nose=P.box(.022,.025,.043,'#a26869',cheeks?.175:.158,-.028,0,head);\r
  var openEyes=[], closedEyes=[];\r
  [-1,1].forEach(function(side){\r
    var socket=P.group(cheeks?.134:.114,.044,.093*side,head);\r
    socket.rotation.y=-side*.54;\r
    openEyes.push(P.box(.018,.042,.033,'#292729',.013,0,0,socket));\r
    var lid=P.box(.02,.012,.043,'#3c3539',.015,-.01,0,socket);\r
    lid.visible=false;\r
    closedEyes.push(lid);\r
  });\r
  var ears=[-.11,.11].map(function(z){\r
    var ear=P.group(-.03,.146,z,head);\r
    P.cone(.073,.151,fur,0,.047,0,ear,4);\r
    P.box(.02,.054,.058,'#c28880',.025,.055,0,ear);\r
    return ear;\r
  });\r
  var tail=P.group(-.32,.02,0,torso);\r
  P.box(.198,.072,.072,fur,-.08,0,0,tail);\r
  var tailEnd=P.group(-.17,0,0,tail);\r
  P.box(.135,.067,.07,fur,-.055,.006,0,tailEnd);\r
  var feet=[];\r
  [-.23,.19].forEach(function(x){\r
    [-.105,.105].forEach(function(z){\r
      var hip=P.group(x,.19,z,root);\r
      P.box(.096,.155,.088,fur,0,-.052,0,hip);\r
      var ankle=P.group(0,-.13,0,hip);\r
      P.box(.126,.065,.098,pale,.024,-.032,0,ankle);\r
      feet.push({hip:hip,ankle:ankle});\r
    });\r
  });\r
  var scale=data.scale??1;\r
  root.scale.set(scale,scale,scale);\r
  return {root:root,torso:torso,head:head,nose:nose,ears:ears,feet:feet,tail:tail,tailEnd:tailEnd,\r
    openEyes:openEyes,closedEyes:closedEyes,data:data};\r
}\r
\r
function easeCatMotion(fraction) {\r
  var value=Math.max(0,Math.min(1,fraction));\r
  return value*value*(3-2*value);\r
}\r
\r
function turnCat(from,to,progress) {\r
  var angle=to-from;\r
  return from+Math.atan2(Math.sin(angle),Math.cos(angle))*easeCatMotion(progress);\r
}\r
\r
function poseNaturalLivingCat(cat,t,q,respond,mode) {\r
  var seconds=q*16, phase=q*2*Math.PI;\r
  var prior=cat.motion;\r
  var delta=prior ? (seconds-prior.seconds+16)%16 : 0;\r
  if (!prior || prior.mode!==mode) {\r
    var start=prior?.x??0;\r
    var reach=(cat.data.walkLength??1.15)*.45*cat.data.scale;\r
    cat.motion={mode:mode,time:prior?0:seconds,seconds:seconds,start:start,x:start,\r
      end:start<reach/2 ? reach : 0, facing:prior?.yaw??-.24, rest:prior?.rest??Number(mode==='sleep')};\r
  }\r
  var motion=cat.motion;\r
  if (motion===prior) motion.time=(motion.time+delta)%16;\r
  motion.seconds=seconds;\r
  motion.rest+=Math.sign(Number(mode==='sleep')-motion.rest)*\r
    Math.min(delta/.55,Math.abs(Number(mode==='sleep')-motion.rest));\r
\r
  // A short stroll, time to look around, and a stroll back. Pauses belong to the cat's gait.\r
  var outbound=easeCatMotion((motion.time-1.6)/3.4);\r
  var inbound=easeCatMotion((motion.time-9.2)/3.4);\r
  var stepWeight=0, stride=0;\r
  motion.yaw=motion.facing;\r
  if (mode==='walk') {\r
    var outward=motion.end>motion.start ? -.06 : Math.PI-.06;\r
    var homeward=outward+Math.PI;\r
    motion.x=motion.start+(motion.end-motion.start)*(outbound-inbound);\r
    motion.yaw=motion.time<7.9 ? turnCat(motion.facing,outward,(motion.time-.45)/1.15)\r
      : motion.time<13.2 ? turnCat(outward,homeward,(motion.time-7.9)/1.3)\r
      : turnCat(homeward,motion.facing,(motion.time-13.2)/1.3);\r
    var leg=motion.time<7.9 ? outbound : inbound;\r
    var progress=(motion.time-(motion.time<7.9 ? 1.6 : 9.2))/3.4;\r
    stepWeight=1-Math.pow(1-easeCatMotion(6*progress)*easeCatMotion(6*(1-progress)),2);\r
    stride=leg*Math.abs(motion.end-motion.start)*2*Math.PI/(.163*cat.data.scale);\r
  }\r
  cat.root.position.set(cat.data.x+motion.x,0,cat.data.z);\r
  cat.root.rotation.y=motion.yaw;\r
\r
  var rest=easeCatMotion(motion.rest);\r
  var attending=mode==='observe' ? easeCatMotion((motion.time-2)/.9)*easeCatMotion((8.1-motion.time)/1.3) : 0;\r
  var blink=mode!=='sleep' && motion.time>4.7 && motion.time<4.85;\r
  var breath=.012*Math.sin(phase*4)*(1+rest*.48);\r
  cat.torso.position.y=.26-rest*.105+.013*stepWeight*Math.sin(stride*2);\r
  cat.torso.scale.set(1-rest*.12,1+breath,1+rest*.25);\r
  cat.torso.rotation.set(.038*stepWeight*Math.cos(stride),-.28*rest,.03*stepWeight*Math.sin(stride));\r
  cat.head.position.set(.244-.024*rest,.105+.035*attending-.11*rest,.12*rest);\r
  cat.head.rotation.set(.15*rest, respond?.56 : -.66*rest+.25*attending*Math.sin(phase*2),.02+.10*attending-.5*rest);\r
  cat.openEyes.forEach(function(eye){eye.visible=rest<.55&&!blink;});\r
  cat.closedEyes.forEach(function(eye){eye.visible=rest>=.55||blink;});\r
  cat.ears.forEach(function(ear,index){\r
    var outward=index===0 ? -1 : 1;\r
    ear.rotation.set(outward*(.06+.59*rest)+.045*attending*Math.sin(phase*9+index),0,.27*rest);\r
  });\r
  cat.feet.forEach(function(foot,index){\r
    var sweep=stride+[0,Math.PI,Math.PI*.68,Math.PI*1.68][index];\r
    var lift=Math.max(0,Math.sin(sweep))*stepWeight;\r
    foot.hip.visible=rest<.55;\r
    foot.hip.position.y=.19-.075*rest+.044*lift;\r
    foot.hip.rotation.z=.33*stepWeight*Math.cos(sweep);\r
    foot.ankle.rotation.z=-.19*lift;\r
  });\r
  cat.tail.rotation.set(0,1.2*rest+.26*stepWeight*Math.sin(stride-.9)+.14*attending*Math.sin(phase*3),\r
    respond?-.9 : -.42+.52*rest);\r
  cat.tailEnd.rotation.y=1.28*rest+.20*stepWeight*Math.sin(stride-1.5)+.13*attending*Math.sin(phase*3-1.5);\r
  cat.tailEnd.rotation.z=.10-.30*stepWeight;\r
\r
  if (cat.data.stage==='senior') {\r
    cat.torso.position.y-=.018;\r
    cat.head.position.y-=.006;\r
    cat.head.rotation.x+=.055;\r
    cat.head.rotation.z+=.09;\r
    cat.ears.forEach(function(ear,index){ear.rotation.z+=(index===0?-.075:.075);});\r
    cat.tail.rotation.z-=.055;\r
  }\r
  if (respond) return 'cat · saying hello';\r
  if (rest>.55) return 'cat · resting';\r
  if (stepWeight>.08) return 'cat · walking';\r
  return attending>.15 ? 'cat · watching' : 'cat · standing quietly';\r
}\r
`,Z=window;let sr=!1,ir=!1;function wr(){ir||(ur([yr,br].join(`
`)),ir=!0)}function ur(e){const t=document.createElement("script");t.text=e,document.head.append(t),t.remove()}function kr(){sr||(wr(),ur(gr),sr=!0)}const zr="(prefers-reduced-motion: reduce)",cr=24,Q=new URLSearchParams(location.search).get("face"),Mr=Q==="legacy"||Q==="cheeks"?Q:"oval";function Tr({animals:e=[],day:t=0,still:d=!1,version:f="0.1.0-draft",face:u=Mr,stillAt:h=6,crop:x=!1,housing:b=""}){const k=R.useRef(null),Y=R.useRef(null),I=R.useRef({animals:e,day:t,version:f,housing:b}),T=R.useRef(null),[M,J]=R.useState(!1),j=R.useRef(M);j.current=M;const U=JSON.stringify(e.filter(v=>v.species==="cat"&&v.status==="living").map(({id:v,name:m,traits:P,stage:w})=>[v,m,P,w]));return I.current={animals:e,day:t,version:f,housing:b},R.useEffect(()=>{if(!k.current)return;kr();const v=Z.createPresentedLivingRoom(I.current,u),m=Z.Pixel.mount(v.spec,k.current,{still:!0});m.stop();let P=!1,w=0,L=0,C=0,E=0,c=h;const _=matchMedia(zr),q=()=>P&&!document.hidden&&!d&&!j.current&&!_.matches,W=()=>{m.renderAt(c%16);const y=Y.current?.getContext("2d");y&&k.current&&(y.imageSmoothingEnabled=!1,y.drawImage(k.current,116,133,72,54,0,0,288,216))};function O(y){w=0,q()&&(L++,C&&(c+=Math.min(y-C,250)/1e3),C=y,y>=E&&(W(),E=Math.max(E+1e3/cr,y)),w=requestAnimationFrame(O))}function S(){q()?w||(w=requestAnimationFrame(O)):(cancelAnimationFrame(w),w=C=E=0)}const F=new IntersectionObserver(([y])=>{P=y.isIntersecting,S()});F.observe(k.current),document.addEventListener("visibilitychange",S),_.addEventListener("change",S),T.current={room:v,paint:W,schedule:S};const H=new URLSearchParams(location.search).has("metrics");return H&&(Z.v45Frames=async(y=4e3)=>{const A=performance.now(),N=m.stats().frames,G=L,B={visibility:document.visibilityState,focused:document.hasFocus(),intersecting:P,reduced:_.matches,paused:j.current,still:d,cadence:cr};await new Promise(a=>setTimeout(a,y));const $=performance.now()-A,r=m.stats(),n=r.frames-N;return{policy:B,endVisibility:document.visibilityState,endIntersecting:P,ua:navigator.userAgent,sampleMs:$,callbacks:L-G,draws:n,fps:n*1e3/$,stats:r}}),()=>{F.disconnect(),cancelAnimationFrame(w),document.removeEventListener("visibilitychange",S),_.removeEventListener("change",S),m.destroy(),T.current=null,H&&delete Z.v45Frames}},[U,d,f,u,h,x,b]),R.useEffect(()=>{T.current?.schedule()},[M]),R.useEffect(()=>{const v=T.current;if(v){for(const m of e)v.room.setMotion(m.id,m.motion??"observe");v.paint()}},[e,U,d,f,u,h,x,b]),X.jsxs("div",{className:"pixel-room",children:[X.jsx("canvas",{ref:k,height:240,width:320,hidden:x,role:"img","aria-label":"像素客厅，活猫会在房间内活动"}),x&&X.jsx("canvas",{ref:Y,width:288,height:216,role:"img","aria-label":"猫的像素细节"}),!d&&X.jsx("button",{className:"motion-toggle",type:"button","aria-pressed":M,onClick:()=>J(!M),children:M?"继续动画":"暂停动画"})]})}const Pr={"river-district":"河湾区","old-town":"旧城区","hill-district":"山坡区",shopkeeper:"店员",illustrator:"插画师","library-worker":"图书馆职员","small-apartment":"小公寓","shared-home":"共同居住","quiet-apartment":"安静公寓","friend-nearby":"朋友住在附近","household-support":"同住者可帮忙","support-prepared":"已安排互助","lives-alone":"独居",stable:"平稳",unknown:"暂无记录",home:"家中",deceased:"已离世",illness:"身体出现不适",accident:"发生意外",together:"共同生活",remembered:"留下回忆","getting-acquainted":"正在熟悉彼此",settled:"已经熟悉彼此"},Rr=e=>Pr[e]??e,lr={started:"新的日子开始了",advanced:"日历翻到下一页",worked:"完成了一份工作",rested:"给自己留了休息时间",prepared:"做好了互助安排",observed:"留意近况",cared:"留下持续照料的记录",responded:"为伙伴寻求帮助",comforted:"在身旁静静陪伴",encounter:"门外有一场新的相遇",declined:"和这次相遇道别",joined:"迎接新伙伴回家",settled:"渐渐熟悉彼此",incident:"生活出现变故",recovered:"渐渐恢复",event:"遇到一件事",chosen:"为这件事作出了选择",chapter:"翻到下一章",farewell:"为伙伴留下告别",deceased:"共处的日子走到了告别","adoption-frozen":"进入旅程尾声",summary:"收好这段旅程"};function Er(e,t){return t.filter(d=>d.name===e.name).length>1?e.name+"（第 "+(e.enteredDay??0)+" 日到家）":e.name}function jr(e,t){const d=t.find(u=>u.id===e.animalId),f=d&&Er(d,t);return f?f+" · "+lr[e.kind]:lr[e.kind]}function qr(e){if(e.kind==="incident"&&e.cause)return Rr(e.cause)+"。看看此刻能为它做些什么。";if(e.kind==="farewell")return"再留一段时间和它待在一起。";if(e.kind==="adoption-frozen")return"家里的伙伴会继续自己的日子。新的领养已结束。"}function Or(e){return e.animals.map(t=>({...t,motion:t.behavior,stage:t.stageBand==="young"?"young_adult":t.stageBand}))}function Hr(e,t){if(!(e.status!=="deceased"||!t.some(d=>d.kind==="deceased")))return"我们从第 "+e.enteredDay+" 日相遇，在第 "+e.endedDay+` 日道别。
`+(t.some(d=>d.kind==="cared"||d.kind==="comforted")?"谢谢你曾经为我留出照料和陪伴的时间。":"日记里留着这段一起生活的日子。")}const Sr=864e5,rr=30,nr=365;function Nr({ageDays:e,birthDay:t}){if(!Number.isFinite(e)||e<0)return"年龄未知";const f=t==null||t<0?"约 ":"",u=Math.floor(e);if(u<nr){const b=Math.floor(u/rr),k=u%rr;return b===0?`${f}${u} 天`:`${f}${b} 个月${k?` ${k} 天`:""}`}let h=Math.floor(u/nr),x=Math.floor(u%nr/rr);return x>=12&&(h+=1,x=0),`${f}${h} 岁 ${x} 个月`}function Ir(e){if(!Number.isFinite(e)||e<0)return"时长未知";if(e===0)return"0 分钟";if(e<60)return`${Math.round(e*10)/10} 分钟`;const t=Math.round(e),d=Math.floor(t/1440),f=Math.floor(t%1440/60),u=t%60,h=[];return d>0&&h.push(`${d} 天`),(f>0||d>0)&&h.push(`${f} 小时`),(u>0||h.length===0||d>0||f>0)&&h.push(`${u} 分钟`),h.join(" ")}function Ar(e){if(!Number.isInteger(e)||e<0)return null;const t=new Date(Date.parse(pr)+e*Sr);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,date:t.getUTCDate(),iso:t.toISOString().slice(0,10)}}function Lr(e){const t=Ar(e);return t?`${t.year} 年 ${t.month} 月 ${t.date} 日`:`第 ${e} 日`}function Ur(e){const t=Lr(e);return e===0?`${t} · 初次相遇`:`${t} · 共同生活第 ${e} 天`}export{Tr as P,R as a,_r as b,Rr as c,Er as d,jr as e,qr as f,Nr as g,Lr as h,Ar as i,X as j,Ir as k,Hr as l,wr as m,ur as n,Ur as o,vr as r,Or as s};
