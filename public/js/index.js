(()=>{"use strict";function t(t,e){let a=e.byDefaultTab,o=e.byDefaultTab;const s=document.querySelector(t);if(s){const t=s.querySelectorAll(".tab-header .tab-header-item"),l=s.querySelectorAll(".tab-content .tab-content-item"),c=t=>{l.forEach((e=>{e.style.display="none",e.getAttribute("data-tab-content")===t&&(e.style.display="block")}))};c(e.byDefaultTab),t.forEach((s=>{s.getAttribute("data-tab")===e.byDefaultTab&&s.classList.add("active"),s.addEventListener("click",(function(l){l.preventDefault();const n=s.getAttribute("data-tab");c(n),t.forEach((t=>{t.getAttribute("data-tab")===s.getAttribute("data-tab")?(t.classList.add("active"),a=o,o=s.getAttribute("data-tab"),e.onChange&&e.onChange(o,a)):t.classList.remove("active")}))}))}))}}t(".tabs-language",{byDefaultTab:"javascript",onChange:(t,e)=>{"html"===t?console.log("setupHTMLEditor"):"css"===t?console.log("setupCSSEditor"):"javascript"===t&&console.log("setupJavascriptEditor")}}),t(".tabs-menu",{byDefaultTab:"assets",onChange:(t,e)=>{console.log(t,e)}})})();