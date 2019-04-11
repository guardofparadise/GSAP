
(function(){

	let projects = document.querySelectorAll('.projects'),
			project  = document.querySelector('.project'),
			projectImgBefore = CSSRulePlugin.getRule('.project-image:bofore'),
			projectImgAfter  = CSSRulePlugin.getRule('.project-image:after'),
			tlProject = new TimelineMax({repeat: -1, repeatDelay: 2}),
			projectClasses = project.getAttribute('class').split(' '),
			projectClass = projectClasses[1],
			pixel = project.querySelectorAll('.pixel'),
			pixels = project.querySelectorAll('.project-pixels'),
			projectTitle = project.querySelectorAll('.project-title'),
			projectSubtitle = project.querySelectorAll('.project-subtitle'),
			projectImage = project.querySelectorAll('.project-image');

			tlProject
				.set([projectTitle, projectSubtitle, pixel], { autoAlpha: 0 })
				.fromTo(projectImage, 0.4, { autoAlpha: 0, xPercent: '-200'}, { autoAlpha: 1, xPercent: '-10', ease: Power4.easeInOut})
				.add('imageIn')
				.staggerFromTo(pixel, 0.3, { autoAlpha: 0, x: '-=10' }, {autoAlpha: 1, x: '0', ease: Power4.easeInOut}, 0.02, '-=0.2')
				.add('pixelsIn')
				.fromTo(projectTitle, 0.7, { autoAlpha: 0, xPercent: '-50', yPercent: '12'}, {autoAlpha: 1, xPercent: '-5', yPercent: '0', ease: Power4.easeInOut}, '-=0.4')
				.fromTo(projectSubtitle, 0.7, { autoAlpha: 0, xPercent: '-50', yPercent: '12'}, {autoAlpha: 1, xPercent: '-5', yPercent: '0', ease: Power4.easeInOut}, '-=0.5')
				.add('titleIn')
				.to(projectTitle, 4.3, { xPercent: '+=5', ease: Linear.easeNone }, 'titleIn-=0.1')
				.to(projectSubtitle, 4.3, { xPercent: '+=2', ease: Linear.easeNone }, 'titleIn-=0.2')
				.add('titleOut')
				.to(projectImage, 5, { xPercent: '0', ease:Linear.easeNone }, 'imageIn')
				.add('imageOut')
				.to(pixels, 4.1, { x: '-5', ease: Linear.easeNone }, 'pixelsIn')
				.to([projectTitle, projectSubtitle], 0.5, {autoAlpha: 0, xPercent: '+=10', ease: Power4.easeInOut}, 'titleOut')
				.to(projectImage, 0.4, {autoAlpha: 0, xPercent: '+=80', ease: Power4.easeInOut}, 'imageOut')
})()
