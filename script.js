let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .fromTo('.box-1', {x:-300, y: -400 ,rotation: 0},{x:0, y: 0, rotation:360, duration: 5})
    .fromTo('.box-2', {x:300, y: -400 ,rotation: 0}, {x:0, y: 0, rotation:360,}, '-=5')
    .fromTo('.box-3', {x:450, y: 400 ,rotation: 0},{x:0, y: 0, rotation:360,},'-=5')
    .fromTo('.box-4', {x:-450, y: 400 ,rotation: 0},{x:0, y: 0, rotation:360,}, '-=5');
    // .to()

    let scene = new ScrollMagic.Scene({
        triggerElement: '.front-cover',
        duration: '100%',
        triggerHook: 0,
    })
        .setTween(timeline)
        .setPin('.page')
        .addTo(controller)
