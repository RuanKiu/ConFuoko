titles = document.querySelectorAll('.titles');
directions = document.querySelectorAll('.directions');
attributes = document.querySelectorAll('.attribute');

console.log(attributes.length)
let mouseCursor = document.querySelector('.cursorMouse');
window.addEventListener('mousemove', cursor);
function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
	if (e.clientY <= '30') {
		mouseCursor.classList.add('clear')
	} else {
		mouseCursor.classList.remove('clear')
		mouseCursor.classList.add('not-clear')
	}	
};
window.addEventListener('dblclick', function() {

	if (mouseCursor.classList.contains('clear')) {
		mouseCursor.classList.remove('clear')
		mouseCursor.classList.add('not-clear')
	}
	else {
		mouseCursor.classList.add('clear')
	}
});
titles.forEach(title => {
	title.addEventListener('mouseover',  () => {
		mouseCursor.classList.add('hovering')
	});
	title.addEventListener('mouseleave',  () => {
		mouseCursor.classList.remove('hovering')
	});

});
directions.forEach(direction => {
	direction.addEventListener('mouseover',  () => {
		mouseCursor.classList.add('hovering')
	});
	direction.addEventListener('mouseleave',  () => {
		mouseCursor.classList.remove('hovering')
	});

});
attributes.forEach(attribute => {
	attribute.addEventListener('mouseleave',  () => {
		mouseCursor.classList.remove('hovering')
	});
	attribute.addEventListener('mouseover',  () => {
		mouseCursor.classList.add('hovering')
	});

});
