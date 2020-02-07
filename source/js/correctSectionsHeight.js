window.addEventListener('load', () => {
	function getPropertyOfElement(element, property) {
		if (element.style[property] === '') {
			return element.currentStyle ? element.currentStyle[property] : getComputedStyle(element, null)[property]
		}
		else
			return element.style[property]
	}

	const headerChild = document.querySelector('.header .header__bgBlock .header__bgColor')
	const header = document.querySelector('.header')
	header.style.height = headerChild.getBoundingClientRect().height + 'px'

	const question = document.querySelector('.question')
	const questionChild = document.querySelector('.question .question__bgBuilding')
	// question.style.height = (questionChild.getBoundingClientRect().height + (questionChild.getBoundingClientRect().height / 100 * 20)) + 'px'
	// question.style.height = questionChild.getBoundingClientRect().height + 'px'

	const tasks = document.querySelector('.tasks')
	const tasksChild = document.querySelector('.tasks .tasks__blueBall')
	tasks.style.height = (parseFloat(getPropertyOfElement(tasksChild, 'top')) - parseFloat(getPropertyOfElement(tasks, 'top')) + tasksChild.getBoundingClientRect().height) + 'px'

	window.addEventListener('resize', () => {
		header.style.height = headerChild.getBoundingClientRect().height + 'px'
		// question.style.height = (questionChild.getBoundingClientRect().height + (questionChild.getBoundingClientRect().height / 100 * 20)) + 'px'
		tasks.style.height = (parseFloat(getPropertyOfElement(tasksChild, 'top')) - parseFloat(getPropertyOfElement(tasks, 'top')) + tasksChild.getBoundingClientRect().height) + 'px'
	})



	// const t = document.querySelector('#t')
	// console.log('font-size: ', getPropertyOfElement(t, 'font-size'))
	// console.log('width: ', getPropertyOfElement(t, 'width'))
})