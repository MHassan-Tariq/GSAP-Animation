function springanimation(){
    var path = "M 10 100 Q 500 100 1250 100"
var finalpath = "M 10 100 Q 500 100 1250 100"
var string = document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
 path = `M 10 100 Q ${dets.x} ${dets.y} 1250 100`
 gsap.to("svg path",{
    attr:{d: path},
    duration:0.3,
    ease:"power3.out"
 })

})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})


}
springanimation()