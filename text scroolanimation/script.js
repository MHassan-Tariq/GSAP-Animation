function textscroll(){
    gsap.to(".page2 h1",{
        transform:"translateX(-150%)",
        scrollTrigger:{
            trigger:".page2",
            scroll:"body",
            markers:true,
            start:"top 0%",
            end:"top -150%",
            scrub:5,
            pin:true
        }
    })
}
textscroll()