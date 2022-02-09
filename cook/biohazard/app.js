// gsap.to('.text', {y: 100, opacity: 0, duration: 22})
// gsap.fromTo('.text', {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 1})

const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}})


tl.fromTo('.hazard',{scale: 0}, {scale: 1})
tl.fromTo('#meel',{opacity: 0, x:-50, rotation:'-50deg'}, {opacity: 1, x:0, rotation:'0deg'})
tl.fromTo('.text', {x:30, opacity: 0}, {x:0, opacity: 1}, '<')

gsap.to('h1', { duration: 2.5, ease: "slow(0.1, 0.7, false)", x: -1000 }, {x:0, opacity: 1});

tl.fromTo('.icon', {y:0, rotation: '0deg'}, {y:-20, rotation: '40deg', yoyo: true, repeat: -2})
tl.fromTo('h1', {y:0}, {y:-20, yoyo: true, repeat: -2}, '<')

const button = document.querySelector('button');

button.addEventListener('click', () => {
  gsap.to('.hazard', {opacity: 0, y: 100, duration: 0.75, ease: 'power1.out'})
})