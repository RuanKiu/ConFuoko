//buttons and whatnot
try {
	var beatStart = document.getElementById('beat')
	var padOne = document.getElementById('pad1');
	var mainHeading = document.getElementById('main_heading');
	var pieceLabel = document.getElementById('piecelabel');
	var pieceNamePlate = document.getElementById('pieceNamePlate');
	var pauseButton = document.getElementById('pauseButton');
	var titleNamePlate = document.getElementById('titleNamePlate');
	var helpButton = document.getElementById('helpButton');
	var body = document.getElementById('body');
	var basicButtons = document.querySelectorAll('.basicButton');
	var mainApp = document.querySelector('.sectionsa');
	var loadingDiv = document.getElementById("loading");
	loadingDiv.classList.add('not-clear');
}
catch(err) {
	console.log("loading error")
}

//cursor shennanigaings
var mouseCursor = document.querySelector('.cursorMouse');
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
if(isMobile.any() ) {
	mouseCursor.remove()
}
else{
	console.log("not mobile")
};

//mouse shenanagains
window.addEventListener('mousemove', cursor);
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
function cursor(e) {
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
	if (e.clientY <= 70 || e.clientX <= 40 || e.clientX >= window.innerWidth - 40 || e.clientY >= window.innerHeight - 40 ){
		mouseCursor.classList.add('clear')
	} else {
		mouseCursor.classList.remove('clear')
	}

};
//mobile stuff
window.addEventListener('mouseleave', blank);
function blank(e) {
	mouseCursor.classList.add('clear')
}

//cursor shenanagains
for (i= 0; i < basicButtons.length; i++) {
	basicButtons[i].addEventListener('mouseover',  () => {
		mouseCursor.classList.add('hovering')
	});
	basicButtons[i].addEventListener('mouseleave',  () => {
		mouseCursor.classList.remove('hovering')
	});
}
pauseButton.addEventListener('mouseover',  () => {
	mouseCursor.classList.add('hovering')
});
pauseButton.addEventListener('mouseleave',  () => {
	mouseCursor.classList.remove('hovering')
});

//audio and whatnot
var audioFiles = document.querySelectorAll('.music')
var startPosition = Math.floor(Math.random() * audioFiles.length)
var audioNames = [
	'Ballade No.1 in G minor - Chopin - Frank Levy (2)',
	'Etudes Op.10 - Chopin - Alfred Cortot',
	'Etudes Op.25 - Chopin - Alfred Cortot',
	'Waltz in A minor, B.150 - Chopin - Aya Higuchi (3)',
	"Salut d'amour - Elgar - Emanuel Salvador (4)",
	"Symphony No.9 'From the New World' - II. Largo - Dvorak - Barbara Schubert (5)",
	"String Quartet No.12 in F major, Op.96 'American' - I. Allegro ma non troppo - Dvorak - Musopen String Quartet (6)", 
	"String Quartet No.12 in F major, Op.96 'American' - II. Largo - Dvorak - Musopen String Quartet (6)", 
	"String Quartet No.12 in F major, Op.96 'American' - III. Molto vivace - Dvorak - Musopen String Quartet (6)", 
	"String Quartet No.12 in F major, Op.96 'American' - IV. Finale. Vivace ma non troppo - Dvorak - Musopen String Quartet (6)", 
	"Un Sospiro - Liszt - Cziffra",
	"Hungarian Rhapsody No.2 - Liszt - Jean Laforge",
	"Three Preludes - I. Allegro ben ritmato e deciso - Gershwin - Played by composer (7)",
	"Three Preludes - II. Andante con moto e poco rubato - Gershwin - Played by composer (7)",
	"Three Preludes - III. Allegro ben ritmato e deciso - Gershwin - Played by composer(7)",
	"Liebesleid - Kreisler - Emanuel Salvador",
	"Hungarian dance No.5 - Brahms - Antal Dorati, London Symphony Orchesctra",
	"Hungarian dance No.6 - Brahms - Antal Dorati, London Symphony Orchesctra",
	"Piano concerto No.1, Op.23 - Tchaikovsky - Shura Cherkassky",
	"Romeo and Juliet overture - Tchaikovsky - DuPage Symphony Orchesctra (8)",
	"Romance Op.34 No.14 'Vocalise' - Rachmaninoff - Frasse-Sombet & Jean Dubé (9)",
	"Prelude in G minor, Op.23 No.5 - Rachmaninoff - Peter Bradley-Fulgoni (10)",
	"Pictures at an Exhibition - I. Promenade I - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - II. The Gnome - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - III. Promenade II - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - IV. The Old Castle - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - V. Promenade III - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - VI. The Tuileries - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - VII. Bydlo - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - VIII. Promenade IV - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - IX. Ballet of the unhatched chicks - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - X. The two Jews - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XII. The market at Limoges - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XIII. Roman Catacombs - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XIII. (Roman Catacombs) With the dead in a dead language - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XIV. Baba Yaga - Mussorgsky - Mikhail Arkadiev (11)",
	"Pictures at an Exhibition - XV. The Heroes Gate at Kiev - Mussorgsky - Mikhail Arkadiev (11)",
	"Liebestraume, S.541 - Liszt - Martha Goldstein (12)",
	"Polonaise brillante No.2, Op.21 - Weiniawski - Franz Marszalek (13)",
	"Maple leaf rag - Joplin - Stefano Ligoratti (14)",
	"Le petit negre - Debussy - Stefano Ligoratti (15)",
	"Suite Bergamasque - III. Clair de lune - Debussy - Jacopo Salvatori (16)",
	"Arabasque No.1 - Debussy - Simone Renzi (17)",
	"Introduction et rondo capriccioso, Op.28 - Saint-Saens - Elias Goldstein (18)",
	"Le carnaval des animaux - XIII. Le Cygne - Saint-Saens -  Stefano Ligoratti and Matilda Colliard (19)",
	"Reminiscences of New York, Book 1 - I. Overture - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - II. Subway Ragtime - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - III. Nocturne - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - IV. The Street Entertainer and the Homeless - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - V. Canzione - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - VII. Valse Triste - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - VIII. Coffe Bear - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - IX. Sunny Riverside - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - XI. Farewell - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 1 - XII. Finale - Shuwen Zhang - Played by composer (20)",
	"Little Blues, Op. 7a - Robin Schreiber - Played by composer (21)",
	"Jazz Sketch No. 1 in C major - Shuwen Zhang - Played by composer (22)",
	"Etude No.17 in A-flat major 'Autumn in New York' - Shuwen Zhang - Played by composer (23)",
	"Reminiscences of New York, Book 2 - I. Opening - Exotic Dream - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - II. Wandering in Sakura Park and Hudson Riverside - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - VII. Central Park Horse Carriage - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - X. New Year in China Town - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - XI. Floating Clouds in the Sky of NYC - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - XIII. A Noisy Night at a Club in Queens - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - XIV. Crazy Skilled Driver - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - XVI. Across the Brooklyn Bridge - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - XVII. Dim Sum Canteen in Brooklyn - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - XX. Habanera Sentimental - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - XXIII. Dinner in Grand Central - Shuwen Zhang - Played by composer (20)",
	"Reminiscences of New York, Book 2 - XXIX. Closing (Thematic Flashbacks) - Shuwen Zhang - Played by composer (20)",
	"Rhapsody in Blue - Gershwin - Jeff Manookian (24)",
	"Fantaisie-impromptu, Op.66 - Chopin - Frank Levy (25)",
	"Zigeunerweisen, Op.20 - Sarasate - Jean-Claude Feret, Christine Feret (26)",
	"Navarra, Op.33 - Sarasate - Roxana Pavel Goldstein, Elias Goldstein (27)",
	"Etudes d'exécution transcendante, S.139 - IV. Mazzepa - Liszt - Peter Bradley-Fulgoni (28)",
	"Etudes d'exécution transcendante, S.139 - VIII. Wilde Jagd - Liszt - Shuwen Zhang (29)",
	"Etude in D-sharp minor No.12 Op.8 - Scriabin - Stanislav Ossovsky (30)",
	"Symphony No. 6 in B minor, Op. 74 'Pathetique' - IV. Finale. Adagio lamentoso - Barbara Schubert (31)",
	"Paganini Variations on 'I Palpiti', Op. 13 - Paganini - Rika Masato (32)",
	"Humoresque no. 7 in Gb Op. 101/7 (Violin and Piano arr.) - Dvorak - Oliver Colbentson",
	"Nocturne in E minor, Op. posth. 72 - Chopin - Luke Faulkner",
	"Gymnopedie No.1 - Satie - Edward Rosser",
	"Ma Vlast - Vltava (The Moldau) - Smetana - Musopen Symphony",
	"Moonlight Sonata, Op. 27 No. 2 - I. Adagio sostenuto -  Paul Pitman - Beethoven",
	"Swan lake Op.20 - Act II Pt. I - European Archives - Tchaikovsky",
	"Violin Concerto No. I in E-flat major, Op. 6 - I. Allegro maestoso - Paganini - European Archives",
	"The Nutcracker Suite - Act I, No. II. March - Tchaikovsky - European Archives",
	"The Nutcracker Suite - Act I, No. VIII. Waltz of The Flowers - Tchaikovsky - European Archives",
	"Sonata No. 21, Op. 53 in C Major Waldstein - I. Allegro Con Brio - Beethoven - Paul Pitman",
];
try {
	if (audioFiles.length !== audioNames.length) {
		throw "numerror"
	}
}
catch(err) {
	console.log("Name and piece correlation error")
}
var pieceLabel = document.getElementById('piecelabel')



//functions and whatnot//////////////////
function pausePiece() {
	beatStart.currentTime = 0
	beatStart.play()
		for(i=0; i<audioFiles.length; i++) {
			if (audioFiles[i].currentTime > 0) {
				if (audioFiles[i].paused) {
					audioFiles[i].play()
					pauseButton.innerHTML = 'Pause'
				}
				else {
					audioFiles[i].pause()
					pauseButton.innerHTML = 'Play'
				}
		}
		else {
			audioFiles[i].pause()
		}
	}
}
function randomize() {
	beatStart.currentTime = 0
	beatStart.play()
	pauseButton.classList.add('basicButton')
	pauseButton.classList.remove('invisible')
	pauseButton.innerHTML = 'Pause'
	for(i=0; i<audioFiles.length; i++) {
		audioFiles[i].pause()
		audioFiles[i].currentTime = 0
	}
	var randomPosition = Math.floor(Math.random() * audioFiles.length)
	pieceLabel.innerHTML = audioNames[randomPosition]
	var randomPiece = audioFiles[randomPosition]
	//time for the stop button instance!!!!
	randomPiece.play()
	console.log(randomPiece)

};
function genNextPiece() {
	pauseButton.innerHTML = 'Pause'
	for(i=0; i<audioFiles.length; i++) {
		audioFiles[i].pause()
		audioFiles[i].currentTime = 0
	}	
	var randomPosition = Math.floor(Math.random() * audioFiles.length)
	var nextRandomPiece = audioFiles[randomPosition]
	nextRandomPiece.play()
	pieceLabel.innerHTML = audioNames[randomPosition]
	console.log(nextRandomPiece)
}
function openAtt() {
	beatStart.play()
	window.open('attributions.html')
}
function openHelp() {
	beatStart.play()
	window.open('help.html')
}
pieceNamePlate.addEventListener('click', randomize);
titleNamePlate.addEventListener('click', openAtt);
helpButton.addEventListener('click', openHelp);
pauseButton.addEventListener('click', pausePiece);
for(i=0; i<audioFiles.length; i++) {
	audioFiles[i].addEventListener('ended', genNextPiece)

};
if(isMobile.any() ) {
	loadingDiv.classList.add('loading-finished')
	console.log('loading procedure: mobile')
}
else{
	console.log("loading procedure: normal")
};



//cookie///////////////////
window.addEventListener('load', function() {
	loadingDiv.classList.add('loading-finished')

	
	var visit = getCookie("cookie");
    if (visit == null) {
		if(isMobile.any() ) {
			loadingDiv.classList.add('loading-finished')
			console.log('No alert')
		}
		else{
			alert("Welcome to Con Fuoko!\nMiddle button (Begin) => Genrate random piece (if piece ends, a random piece will be generated without you needing to click)\nTop button (Con Fuoko) => attributions\nLower button (Guide) => instructions and help\nSpacebar => hide mouse\n")
			console.log("normal alert")
		};
        var expire = new Date();
        expire = new Date(expire.getTime() + 7776000000);
        document.cookie = "cookie=here; expires=" + expire;
    }
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




//universal console testing

console.log(audioFiles.length)
console.log(audioNames.length)

