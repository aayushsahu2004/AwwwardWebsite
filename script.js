const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("#nav a",{
    stagger:0.2,
    y:10,
    opacity:0,
    duration:1,
    ease:Power2
})

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anime2",{
    y:50,
    opacity:0,
    stagger:.3,
    ease: Expo,
    duration:1
})

Shery.imageEffect("#imgtext img",{
    style:3,
    config:{"uFrequencyX":{"value":11.57,"range":[0,100]},"uFrequencyY":{"value":4.96,"range":[0,100]},"uFrequencyZ":{"value":45.45,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.18},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999700097516},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.56,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

Shery.imageEffect(".imgff img",{
    style:5,
    config:{"a":{"value":1.98,"range":[0,30]},"b":{"value":-0.69,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7333478996615648},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
})

gsap.from("#imgtext img",{
    y:"70",
    opacity:0,
    duration:2,
    ease:Expo,
})

Shery.imageEffect("#bimg",{
    style: 5,
    config:{"a":{"value":0.74,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1706503263509624},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.74,"range":[1,15]},"durationOut":{"value":0.55,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.74,"range":[0,10]},"metaball":{"value":0.13,"range":[0,2]},"discard_threshold":{"value":0.42,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.43,"range":[0,2]},"noise_scale":{"value":10.74,"range":[0,100]}},
    gooey:true
})

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1,
        ease:Power4
    })
})

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1,
        ease:Power4
    })
})