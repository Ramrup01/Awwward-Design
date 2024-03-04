gsap.from('.anim', {
    scrollTriger: {
        trigger: '.hof',
        marker: true,
        start: 'top 20%'
    },
    stagger: .2,
    y:10,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
})