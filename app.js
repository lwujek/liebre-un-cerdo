const nav = document.querySelectorAll('.navigationBtn');
const nav2 = document.querySelectorAll('.navigationBg');
const nav3 = document.querySelectorAll('.navigationIcon');
const logo = document.querySelectorAll('.logo');
const title = document.querySelectorAll('.title');
const letter = document.querySelectorAll('.dorada');


window.addEventListener('load', initAnim);

function initAnim() {
    const TLFADE = gsap.timeline();


    TLFADE
        .to(nav, { autoAlpha: 1, delay: 0.4 })
        .to(nav2, { autoAlpha: 1, delay: 0.9 }, 0)
        .to(nav3, { autoAlpha: 1, delay: 0.4 }, 0)
        .to(logo, { autoAlpha: 1, delay: 0.4 }, 0)
        .to(title, {
            autoAlpha: 1,
            y: -50
        })
        .to(letter, { autoAlpha: 1, delay: 0.2 })
        .to('.number1 .circle-btn .filled', {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: '.number1 .circle-btn .filled ',
                markers: true,
                start: 'top 50%',
                end: 'bottom 40%',
                toggleActions: 'play pause reverse reset',
            },
        })
        .to('.number2 .circle-btn .filled', {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: '.number2 .circle-btn .filled ',
                markers: true,
                start: 'top 50%',
                end: 'bottom 40%',
                toggleActions: 'play pause reverse reset',
            },
        })
        .to('.number3 .circle-btn .filled', {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: '.number3 .circle-btn .filled ',
                markers: true,
                start: 'top 50%',
                end: 'bottom 40%',
                toggleActions: 'play pause reverse reset',
            },
        })
        .to('.number4 .circle-btn .filled', {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: '.number4 .circle-btn .filled ',
                markers: true,
                start: 'top 50%',
                end: 'bottom 40%',
                toggleActions: 'play pause reverse reset',
            },
        })
        .to('.number5 .circle-btn .filled', {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: '.number5 .circle-btn .filled ',
                markers: true,
                start: 'top 50%',
                end: 'bottom 40%',
                toggleActions: 'play pause reverse reset',
            },
        })
        .to('.number6 .circle-btn .filled', {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: '.number6 .circle-btn .filled ',
                markers: true,
                start: 'top 50%',
                end: 'bottom 40%',
                toggleActions: 'play pause reverse reset',
            },
        })
        .to('.number7 .circle-btn .filled', {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: '.number7 .circle-btn .filled ',
                markers: true,
                start: 'top 50%',
                end: 'bottom 40%',
                toggleActions: 'play pause reverse reset',
            },
        })
        .to('.img1 img', {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: '.img1 img ',
                scrub: true
            },
        })

    .to('.img2 img', {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: '.img2 img ',
                scrub: true

            },
        })
        .to('.img3 img', {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: '.img3 img ',
                scrub: true

            },
        })
        .to('.img4 img', {
            autoAlpha: 1,
            scrollTrigger: {
                trigger: '.img4 img ',
                scrub: true

            },
        });


}