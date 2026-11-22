(function(){var d=document,h=d.documentElement;
function cur(){return h.classList.contains('rn')?'rn':'en'}
function apply(l){h.classList.toggle('rn',l==='rn');h.lang=l==='rn'?'ur-Latn':'en';
var t=h.getAttribute(l==='rn'?'data-t-rn':'data-t-en');if(t)d.title=t;
[].forEach.call(d.querySelectorAll('[data-set]'),function(b){b.setAttribute('aria-pressed',b.getAttribute('data-set')===l?'true':'false')});
try{d.dispatchEvent(new CustomEvent('langchange',{detail:l}))}catch(e){}}
[].forEach.call(d.querySelectorAll('[data-set]'),function(b){b.addEventListener('click',function(){var l=b.getAttribute('data-set');try{localStorage.setItem('nishaan_language',l==='rn'?'roman':'en')}catch(e){}apply(l)})});
window.RNLANG={get:cur,apply:apply};apply(cur());})();
