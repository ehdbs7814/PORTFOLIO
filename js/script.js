myAppendChild()
function myAppendChild() {

  let parent = document.querySelector(".c1");
  let childElement = null;

  for (let i = 1; i < 150; ++i) {
    childElement = document.createElement("div");
    childElement.className = "circle";
    parent.append(childElement);
  }
}


anime({
  targets: '.c1 .circle',
  scale: [
    { value: .1, easing: 'easeOutSine', duration: 500 },
    { value: 1, easing: 'easeInOutQuad', duration: 1200 }
  ],
  delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
  loop: true
});




// rotate circle

rotate()
function rotate() {

  let circle_parent2 = document.querySelector(".c2");
  let circle_child2 = null;
  let circle_parent3 = document.querySelector(".c3");
  let circle_child3 = null;
  let circle_parent4 = document.querySelector(".c4");
  let circle_child4 = null;
  let circle_parent5 = document.querySelector(".c5");
  let circle_child5 = null;
  let circle_parent6 = document.querySelector(".c6");
  let circle_child6 = null;
  let circle_parent7 = document.querySelector(".c7");
  let circle_child7 = null;

  for (let i = 1; i < 10; ++i) {
    circle_child2 = document.createElement("div");
    circle_child2.className = "circle" + i;
    circle_parent2.append(circle_child2);

    circle_child3 = document.createElement("div");
    circle_child3.className = "circle" + i;
    circle_parent3.append(circle_child3);

    circle_child4 = document.createElement("div");
    circle_child4.className = "circle" + i;
    circle_parent4.append(circle_child4);

    circle_child5 = document.createElement("div");
    circle_child5.className = "circle" + i;
    circle_parent5.append(circle_child5);

    circle_child6 = document.createElement("div");
    circle_child6.className = "circle" + i;
    circle_parent6.append(circle_child6);

    circle_child7 = document.createElement("div");
    circle_child7.className = "circle" + i;
    circle_parent7.append(circle_child7);
  }



}

gsap.to('.circle_wrap.c1>div', {
  opacity: .3,
  stagger: .2,
  repeat: -1,

})
gsap.to('.circle_wrap.c2>div', {
  opacity: .3,
  stagger: .2,
  repeat: -1,

})
gsap.to('.circle_wrap.c3>div', {
  opacity: .3,
  stagger: .2,
  repeat: -1,

})
gsap.to('.circle_wrap.c4>div', {
  opacity: .3,
  stagger: .2,
  repeat: -1,

})
gsap.to('.circle_wrap.c5>div', {
  opacity: .3,
  stagger: .2,
  repeat: -1,

})
gsap.to('.circle_wrap.c6>div', {
  opacity: .3,
  stagger: .2,
  duration: 4,
  repeat: -1,

})
gsap.to('.circle_wrap.c7>div', {
  opacity: .3,
  stagger: .2,
  duration: 4,
  repeat: -1,

})


// s6 list

$(function () {


  const bannerList = $('.banner li')
  const DESIGN = $('.design li')


  bannerList.on('click', function (e) {
    e.preventDefault()
    const i = $(this).index()//내가 누른 버튼의 순서값

    console.log(i);
    bannerList.removeClass('act')
    DESIGN.removeClass('on')

    bannerList.eq(i).addClass('act')
    DESIGN.eq(i).addClass('on')

  })

})


