gsap.resiterPlugin(ScrollTrigger);
gsap.resiterPlugin(ScrollToPlugin);
gsap.resiterPlugin(SplitText);

selcet = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const stage = select('.stage');
const slides = selectAll('.slide');
const links = selectAll('.slide__scroll-link');
const titles = selectAll('.col__content-title');
const introTitle = new SplitText('.intro__title', {type:"lines", ineClass: "intro-line"});
const splitTitles = new SplitText(titles, {type:"lines, chars", linesClass: "line", charsClass:"char", position:"relative"});
let slideID = 0;

function initHeader() {

  let tl = gsap.timeline({delay: 0.5});
  tl.from('.logo', {
    y: -40,
    opacity:0,
    duration:2,
    ease:'power4'
  })
  .from('.nav-btn__svg rect', {
    scale:0,
    transformOrigin: "center right",
    duration:0.6,
    ease:'power4',
    stagger:0.1
  }, 0.6)
  .to('.nav-rect', {
    scale:0.8,
    transformOrigin:"center left",
    duration:0.4,
    ease:'poswer2',
    stagger:0.1
  }, "-=0.6")


}