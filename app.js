// 1- FROM
// gsap.from(".content", {
//   opacity: 0,
//   duration: 1,
//   y: -500
// });

//  2- TO
// gsap.to(".content", {
//   opacity: 0,
//   duration: 1,
//   y: -500
// });

const rule = CSSRulePlugin.getRule("span:after");
const cta = document.getElementById("cta");

/*gsap.from(".anim1", { duration: 1.5, opacity: 0, y: -50, stagger: 0.5 });
gsap.from("img", { duration: 0.75, opacity: 0, y: 50, delay: 1.4 });
gsap.to(rule, { cssRule: { scaleY: 0 }, duration: 1 });
gsap.from("aside", { duration: 0.75, opacity: 0, backgroundPosition: "200px 0px", delay: 1.1 });*/

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline.from(".anim1", { y: -50, stagger: 0.6, opacity: 0 })
  .to(rule, { duration: 1.8, cssRule: { scaleY: 0 }}, "-=2.2")
  .from("aside", { duration: 0.75, opacity: 0, backgroundPosition: "200px 0px" }, "-=1.5")
  .from(".swirl", { y: 50, opacity: 0}, "-=0.5");

cta.addEventListener("click", function (event) {
  event.preventDefault();
  timeline.reversed() ? timeline.play() : timeline.reverse();
});

