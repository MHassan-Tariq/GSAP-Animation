function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
    y:-40,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
tl.from(".centerpart1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
},"-=0.3")
tl.from(".centerpart1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from(".centerpart1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".centerpart2 img",{
    opacity:0,
    duration:0.5,
    x:200    
},"-=0.7")
tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger: 0.15,
    duration:0.6
})

}
page1animation()

function page2animation(){
    
var tl2 = gsap.timeline({
    scrollTrigger:{
        tigger:".section2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top -60%",
        scrub:2,
    }
})
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5
})
// line1
tl2.from(".elem.line1.left",{
    y:30,
    opacity:0,
    duration:1
},"anim1")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anim1")


// line2
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"anim2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"anim2")


}
page2animation()
// --------------------------------------

function textscroll(){
    gsap.to(".page2 h1",{
        transform:"translateX(-150%)",
        scrollTrigger:{
            trigger:".page2",
            scroll:"body",
            // markers:true,
            start:"top 0%",
            end:"top -150%",
            scrub:5,
            pin:true
        }
    })
}
textscroll()
// -----------------------------------
function textwheelanimation(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY > 0){
            gsap.to(".marque",{
                transform:'translateX(-200%)',
                repeat:-1,
                duration:4,
                ease:"none"
            })
            gsap.to(".marque img",{
                rotate:180
            })
        }else{
            gsap.to(".marque",{
                transform:'translateX(0%)',
                repeat:-1,
                duration:4,
                ease:"none"
            })  
            gsap.to(".marque img",{
                rotate:0
            })
        }
    })
    
}
textwheelanimation()
// -------------------------------

function springanimation(){
    var path = "M 10 100 Q 500 100 1250 100"
var finalpath = "M 10 100 Q 500 100 1250 100"
var string = document.querySelector("#string")
string.addEventListener("mousemove",function(dets){
 path = `M 10 100 Q ${dets.x} ${dets.y} 1250 100`
 gsap.to("svg path",{
    attr:{d: path},
    duration:0.2,
    ease:"power3.out"
 })

})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalpath},
        duration:1.2,
        ease:"elastic.out(0.4,0.2)"
    })
})


}
springanimation()



// ---------------------------------------------




function breakthetext() {
    var h1 = document.querySelector(".text h1")
var h1text = h1.textContent


gsap.to(".text h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:".text",
        scroll:"body",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:3,
        pin:true
    }
})

var splittedtext = h1text.split("")
var halfvalue = splittedtext.length/2
var clutter = "" 

 splittedtext.forEach(function(elem,idx){
     if(idx<halfvalue){
     clutter += `<span class="a">${elem}</span>`
    }else{
     clutter += `<span class="b">${elem}</span>`

    }
 })
h1.innerHTML = clutter
}
breakthetext()
gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})

// --------------------------------