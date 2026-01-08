

gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
    trigger: ".cover",
    start: "top top",
    end: "bottom top",
    scrub: 0.5,
    pin: true,
    pinSpacing: false

});
gsap.to(".one, .two", {
    scrollTrigger: {
        trigger: ".cover",
        start: "top top",
        end: "center top",
        scrub: 1
    },
    opacity: 0,
    y: -50,
    filter: "blur(10px)"
});
gsap.to(".fahli", {
    scrollTrigger:{
        trigger: ".cover",
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    filter: "blur(10px)",
    scale: 1.1,
});

gsap.from(".sur, .tp, .histo", {
    scrollTrigger: {
        trigger: ".expl",
        start: "top 60%",
        end: "center center",
        scrub: 1,
    },
    y: 100,
    opacity: 0,
    filter: "blur(30px)",
    stagger: 0.2,
});
gsap.to(".tp, .histo", {
    scrollTrigger: {
        trigger: ".expl",
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    y: 100,
    opacity: 0,
    filter: "blur(30px)",
    stagger: 0.2,
});
gsap.to(".sur", {
    scrollTrigger:{
        trigger: ".expl",
        start: "top top",
        end: "bottom top",
        scrub: 1,
    },
    filter: "blur(10px)",
});
gsap.utils.toArray(".line").forEach((line, index) => {
    gsap.fromTo(
        line.querySelectorAll("span"),
        {y: 50, opacity: 0},
        {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.5,
            scrollTrigger: {
                trigger: ".run",
                start: "top 10%",
                toggleActions: "play none play reverse"
            },
            delay: index * 0.5
        }
    );
});