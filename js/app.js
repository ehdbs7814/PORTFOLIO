    //ie foreach 대응 IE에서는 document.querySelectorAll()과 같은 노드 배열에 관해서는 forEach메소드를 지원을 하지 않는다.
    //  상단에 노드리스트에 관한 조건을 추가해준후 평소와 같이 사용한다.
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

const navList = document.querySelectorAll('nav li')
let section = document.querySelectorAll('#wrap > section')
let pageNum =0
let totalNum = section.length
const BODY = document.querySelector('body')
const navBtn = document.querySelector('.navBtn')
const modalBtn = document.querySelectorAll('.modalNav li')

navBtn.addEventListener('click',function(e){
    e.preventDefault()
    BODY.classList.toggle('full')
})



let funcObj = {
    f_0: function () {
        const tl = gsap.timeline({
            duration: 1
        })


        tl.to('#s0 .tit_wrap', {
            opacity: 1,
            stagger: .3,
            x: 10
        })
    },
    f_1: function () {
    },
    f_2: function () {
        console.log(2)
    },
    f_3: function () {
        console.log(3)
    },
    f_4: function () {
        console.log(4)
    },
    f_5: function () {
        console.log(5)
    },
    f_6: function () {
        console.log(6)
    },
}


navList.forEach(function(btn,index){

    btn.addEventListener('click',function(e){
        e.preventDefault()

        gsap.to(window,{
            scrollTo:{
                y:'#s'+index
            }
        })
    })
})
window.addEventListener('scroll',function(){
    let scroll = window.scrollY || window.pageYOffset

    for(let i=0;i<totalNum;i++){
        if(scroll > section[i].offsetTop - window.outerHeight / 3 &&
        scroll < section[i].offsetTop - window.outerHeight / 3 + section[i].offsetHeight){
            pageNum=i
            funcObj['f_'+i]()
        }
    }
    pageChangeFunc()
})

funcObj['f_0']()

function pageChangeFunc(){
    for(let i =0; i<totalNum;i++){
        BODY.classList.remove('bl')
        section[i].classList.remove('active')
        navList[i].classList.remove('active')
    }
    section[pageNum].classList.add('active')
    navList[pageNum].classList.add('active')

    if(pageNum==1 || pageNum==4||pageNum==7){
        BODY.classList.add('bl')
    }

}




modalBtn.forEach(function(btn,index){

    btn.addEventListener('click',function(e){
        e.preventDefault()

        BODY.classList.remove('full')
        gsap.to(window,{
            scrollTo:{
                y:'#s'+index
            }
        })
    })

})









