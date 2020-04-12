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
	mouseCursor.classList.remove('lag')
};
window.addEventListener('keyup', event => {
	if(event.isComposing || event.which==32){
		if (mouseCursor.classList.contains('clear')) {
			mouseCursor.classList.remove('clear')
			mouseCursor.classList.add('not-clear')
		}
		else {
			mouseCursor.classList.add('clear')
		}
	}	
});
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if( isMobile.any() ) {
	mouseCursor.remove()
}
else{
	console.log("not mobile")
};
document.addEventListener('DOMContentLoaded', function() {
    var visit = getCookie("cookie");
    if (visit == null) {
        alert("This is a subpage! To enlarge the textboxes, click and hold on the area within each box.")        
        var expire = new Date();
        expire = new Date(expire.getTime() + 7776000000);
        document.cookie = "cookie=here; expires=" + expire;
    }
});
window.addEventListener('scroll', function() {
	mouseCursor.classList.add('clear')
	mouseCursor.classList.add('lag')
});
function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}
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
