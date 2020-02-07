
import { Swiper, Navigation } from 'swiper/js/swiper.esm'

window.addEventListener('load', () => {

	Swiper.use([Navigation]);

	const aboutSwiper = new Swiper('.about .container .about__wrapperSwiper .about__swiper-container', {
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.about .container .about__wrapperSwiper .about__sliderButtons .about__chevron_right',
			prevEl: '.about .container .about__wrapperSwiper .about__sliderButtons .about__chevron_left',
		}
	})

	const miniSlides = document.querySelectorAll('.about .about__miniSlides .about__miniWrapper .about__miniSlide')
	for (let i = 0; i < miniSlides.length; i++) {
		miniSlides[i].addEventListener('click', () => {
			aboutSwiper.slideTo((miniSlides.length - 1) - i)
		})
	}

	//second slider in how it was
	const some = new Swiper('.howItWas .howItWas__wrapperSwiper .howItWas__swiper-container', {
		loop: true,
		slidesPerView: 1,
		// autoHeight: true,
		navigation: {
			nextEl: '.howItWas .howItWas__wrapperSwiper .howItWas__sliderButtons .howItWas__chevron_right',
			prevEl: '.howItWas .howItWas__wrapperSwiper .howItWas__sliderButtons .howItWas__chevron_left',
		}
	})
})