function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function l(e,t){const n=Math.random()>.3,o={position:e,delay:t};return new Promise(((e,r)=>{setTimeout((()=>{n?e(o):r(o)}),t)}))}document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const n=t.currentTarget.elements;let o=parseInt(n.delay.value);const r=parseInt(n.step.value),s=parseInt(n.amount.value);for(let t=1;t<=s;t+=1)l(t,o).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),o+=r}));
//# sourceMappingURL=03-promises.ba8bb498.js.map
