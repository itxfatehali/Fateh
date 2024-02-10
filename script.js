function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

var menu = document.querySelector(".nav-plus");
var menumain = document.querySelector(".menu");
var menuclose = document.querySelector(".menu-icon");
var main = document.querySelector('#main');

menu.addEventListener("click", function() {
  gsap.to(menumain , {
      height:'50vh',
      opacity:1,
      display: 'block',
  });
  gsap.to(main , {
      pointerEvents: "none",
      filter: "blur(14px)",
  });
});

menuclose.addEventListener("click", function() {
  gsap.to(menumain , {
      height:'0vh',
      opacity:0,
      display: 'none',
  });
  gsap.to(main , {
      pointerEvents: "auto",
      filter: "none",
  });
});

new Typed('#typed', {
  strings : ['Fateh Ali.','Website Developer.','Website Designer.' ,'Graphic Designer.'],
  typeSpeed : 50,
  delaySpeed : 400,
  loop : true
});
Shery.mouseFollower({
});

Shery.makeMagnet(".nav-plus , .menu-icon , .hero img", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
if (window.innerWidth <= 600) {
  Shery.removeMouseFollower();
}