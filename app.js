//init scrollMagic

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// timeline.to(".bg1",3,{y:-300})
timeline
    .fromTo(".bg1",{y:-50},{y:0,duration:3})
    .to(".content",3,{top:"0%"})


let scene = new ScrollMagic.Scene({
    triggerElement:'section',
    duration:"100%",
    triggerHook:0,//defines where do u want to trigger the animation
})
.setTween(timeline)
.setPin("section")
.addTo(controller)