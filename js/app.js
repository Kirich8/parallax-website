window.addEventListener('scroll', event => {
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.config({
    force3D: false
});
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
});