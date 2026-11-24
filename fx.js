(function(){
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(rm||!('IntersectionObserver' in window))return;
var st=document.createElement('style');
st.textContent='.fx-r{opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}.fx-r.fx-in{opacity:1;transform:none}main a.cta,main button{transition:transform .2s ease,box-shadow .2s ease}main a.cta:hover{transform:translateY(-2px)}';
document.head.appendChild(st);
var els=[].slice.call(document.querySelectorAll('main h2,main table,main details,main .card,main .tool,main li'));
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('fx-in');io.unobserve(e.target)}})},{threshold:.08});
els.forEach(function(el){var b=el.getBoundingClientRect();if(b.top<innerHeight)return;el.classList.add('fx-r');io.observe(el)});
})();
