gsap.registerPlugin(ScrollTrigger)









const scene1= gsap.timeline({
    duration: 1
})

ScrollTrigger.create({
    animation:scene1,
    trigger:'#s1 .rel',
    start:'top 30%',
    end:'top 50%',
    scrub:3
})
scene1.to('#s1 .s1_img_wrap',{
    opacity:1,
    x:10,
    stagger:.3
})
scene1.to('#s1 .s1_img_wrap .tit',{
    opacity:1,
    x:10,
    stagger:.3
})
scene1.to('.pf_con h3',{
    opacity:1,
    x:-10,
    stagger:.3
})
scene1.to('.pf_con > dl',{
    opacity:1,
    x:-10,
    stagger:.3,
    duration:.2
})
scene1.to('.pf_con > ul',{
    opacity:1,
    x:-10,
    stagger:.3,
    duration:.2
})
scene1.to('.skill_lst li',{
    opacity:1,
    x:-10,
    stagger:.3,
    duration:.2
})
scene1.to('.pg_wrap .pg1',{
    width:'80%',
    delay:-.5
})
scene1.to('.pg_wrap .pg2',{
    width:'80%',
    delay:-.5
})
scene1.to('.pg_wrap .pg3',{
    width:'60%',
    delay:-.5
})
scene1.to('.pg_wrap .pg4',{
    width:'90%',
    delay:-.5
})
scene1.to('.pf_con ul.key li',{
    opacity:1,
    x:-10,
    stagger:.3,
    duration:.2
})


const scene2= gsap.timeline()

ScrollTrigger.create({
    animation:scene2,
    trigger:'#s2 .rel',
    start:'top 30%',
    end:'top 50%',
    scrub:3
})

scene2.to('#s2 .tit_wrap', {
    opacity: 1,
    x:10,
    stagger:.3
})
scene2.to('#s2 .img_wrap', {
    opacity: 1,
    y:10,
    stagger:.3
})
scene2.to('#s2 .rel .eff', {
    opacity: 1,
    y:10,
    stagger:.3
})

const scene3= gsap.timeline()

ScrollTrigger.create({
    animation:scene3,
    trigger:'#s3 .rel',
    start:'top 30%',
    end:'top 50%',
    scrub:3
})
scene3.to('#s3 .left', {
    opacity: 1,
    x:10,
    stagger:.3
})
scene3.to('#s3 .right', {
    opacity: 1,
    x:10,
    stagger:.3
})

const scene4= gsap.timeline()

ScrollTrigger.create({
    animation:scene4,
    trigger:'#s4 .rel',
    start:'top 30%',
    end:'top 50%',
    scrub:3
})
scene4.to('#s4 .tit_wrap', {
    opacity: 1,
    x:10,
    stagger:.3
})
scene4.to('#s4 .img_wrap', {
    opacity: 1,
    x:10,
    stagger:.3
})

const scene5= gsap.timeline()

ScrollTrigger.create({
    animation:scene5,
    trigger:'#s5 .rel',
    start:'top 30%',
    end:'top 50%',
    scrub:3
})
scene5.to('#s5 h1.tit', {
    opacity: 1,
    x:10
})
scene5.to('#s5 .img_wrap', {
    opacity: 1,
    x:10,
    stagger:.3
})
scene5.to('#s5 .bottom', {
    opacity: 1,
    x:10,
    stagger:.3
})

const scene6= gsap.timeline()

ScrollTrigger.create({
    animation:scene6,
    trigger:'#s6 .rel',
    start:'top 30%',
    end:'top 50%',
    scrub:3
})
scene6.to('#s6 h1.tit', {
    opacity: 1,
    x:10,
    stagger:.3
})
scene6.to('#s6 .img_wrap .banner', {
    opacity: 1,
    x:10,
    stagger:.3
})
scene6.to('#s6 .img_wrap .design', {
    opacity: 1,
    x:10,
    stagger:.3
})

const scene7= gsap.timeline()

ScrollTrigger.create({
    animation:scene6,
    trigger:'#s7 .rel',
    start:'top 30%',
    end:'top 50%',
    scrub:3
})
scene7.to('#s7 .tit_wrap', {
    opacity: 1,
    x:10,
    stagger:.3
})
scene7.to('#s7 .s7_fish', {
    opacity: 1,
    x:10,
    stagger:.3
})




