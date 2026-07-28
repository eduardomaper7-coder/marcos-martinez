(function(){
  "use strict";
  var button=document.querySelector(".v3-menu-button");
  var menu=document.querySelector(".v3-menu");
  if(button&&menu){
    button.addEventListener("click",function(){
      var open=menu.classList.toggle("open");
      button.setAttribute("aria-expanded",String(open));
    });
    menu.querySelectorAll("a").forEach(function(link){link.addEventListener("click",function(){menu.classList.remove("open");button.setAttribute("aria-expanded","false")})});
  }
  var header=document.querySelector(".v3-header");
  window.addEventListener("scroll",function(){if(header)header.classList.toggle("scrolled",window.scrollY>20)},{passive:true});
  var nodes=document.querySelectorAll("[data-v3-reveal]");
  if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add("v3-visible");observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:"0px 0px -50px"});
    nodes.forEach(function(node,index){node.style.transitionDelay=Math.min(index%4,3)*70+"ms";observer.observe(node)});
  }else{nodes.forEach(function(node){node.classList.add("v3-visible")})}

  var slider=document.querySelector("[data-clinic-slider]");
  if(slider){
    var slides=Array.from(slider.querySelectorAll(".v3-slide"));
    var dotsWrap=slider.querySelector(".v3-slider-dots");
    var count=slider.querySelector(".v3-slider-count strong");
    var current=0;
    var timer;
    var startX=0;
    slides.forEach(function(_,index){
      var dot=document.createElement("button");
      dot.type="button";
      dot.className="v3-slider-dot"+(index===0?" is-active":"");
      dot.setAttribute("aria-label","Ver imagen "+(index+1));
      dot.addEventListener("click",function(){show(index);restart()});
      dotsWrap.appendChild(dot);
    });
    var dots=Array.from(dotsWrap.children);
    function show(index){
      current=(index+slides.length)%slides.length;
      slides.forEach(function(slide,i){slide.classList.toggle("is-active",i===current)});
      dots.forEach(function(dot,i){dot.classList.toggle("is-active",i===current);dot.setAttribute("aria-current",i===current?"true":"false")});
      count.textContent=String(current+1).padStart(2,"0");
    }
    function restart(){
      window.clearInterval(timer);
      if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
        timer=window.setInterval(function(){show(current+1)},5000);
      }
    }
    slider.querySelector("[data-slider-prev]").addEventListener("click",function(){show(current-1);restart()});
    slider.querySelector("[data-slider-next]").addEventListener("click",function(){show(current+1);restart()});
    slider.addEventListener("keydown",function(event){if(event.key==="ArrowLeft")show(current-1);if(event.key==="ArrowRight")show(current+1)});
    slider.addEventListener("mouseenter",function(){window.clearInterval(timer)});
    slider.addEventListener("mouseleave",restart);
    slider.addEventListener("touchstart",function(event){startX=event.changedTouches[0].clientX},{passive:true});
    slider.addEventListener("touchend",function(event){var delta=event.changedTouches[0].clientX-startX;if(Math.abs(delta)>45){show(current+(delta<0?1:-1));restart()}},{passive:true});
    restart();
  }
})();
