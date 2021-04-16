//init scrollMagic

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.to(".bg1",3,{y:-300})
timeline
    .fromTo(".bg1",{y:-50},{y:0,duration:6})
    .to(".content",4,{top:"0%"})
    .fromTo('.content-images',{opacity:0},{opacity:1,duration:1.5})
    .fromTo('.text',{opacity:0},{opacity:1,duration:1.5})


let scene = new ScrollMagic.Scene({
    triggerElement:'section',
    duration:"190%",
    triggerHook:0,//defines where do u want to trigger the animation
})
.setTween(timeline)
.setPin("section")
.addTo(controller)