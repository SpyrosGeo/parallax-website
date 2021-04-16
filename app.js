//init scrollMagic

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to(".bg1",3,{y:300})


let scene = new ScrollMagic.Scene({
    triggerElement:'section',
    duration:"100%",
    triggerHook:0,//defines where do u want to trigger the animation
})
.setTween(timeline)
// .setPin("section")
.addTo(controller)