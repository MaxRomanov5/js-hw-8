function e(e,t,o){var n,a=o||{},r=a.noTrailing,i=void 0!==r&&r,c=a.noLeading,u=void 0!==c&&c,f=a.debounceMode,l=void 0===f?void 0:f,m=!1,d=0;function v(){n&&clearTimeout(n)}function g(){for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];var c=this,f=Date.now()-d;function g(){d=Date.now(),t.apply(c,a)}function s(){n=void 0}m||(u||!l||n||g(),v(),void 0===l&&f>e?u?(d=Date.now(),i||(n=setTimeout(l?s:g,e))):g():!0!==i&&(n=setTimeout(l?s:g,void 0===l?e-f:e)))}return g.cancel=function(e){var t=(e||{}).upcomingOnly,o=void 0!==t&&t;v(),m=!o},g}const t={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector(".feedback-form textarea")},o={};t.form.addEventListener("input",e(500,(function(e){o[e.target.name]=e.target.value,localStorage.setItem("feedback-form",JSON.stringify(o))}))),t.form.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form")})),function(){const e=JSON.parse(localStorage.getItem("feedback-form"));null!==e&&(t.textarea.value=e.message||"",t.input.value=e.email||"")}();
//# sourceMappingURL=03-feedback.bd05c175.js.map
