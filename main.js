

function definirDispositivo() {
	var dispositivo = '';
	if (navigator.userAgent.indexOf('Android') != -1 || navigator.userAgent.indexOf('iOS iPad iPod iPhone') != -1) {
		dispositivo = 'movil';
	} else {
		dispositivo = 'escritorio';
		console.log('Estas navagando un un dispositivo de escritorio')
	}
	if ( dispositivo == 'movil') {
		window.location = 'phone/index-phone.html';
	}
}


window.addEventListener('scroll', () => {
	var scrollY = window.scrollY;
	var navbar = document.getElementById('nav');
	var navbarList = document.getElementById('nav-lista');
	console.log(scrollY)
	if (scrollY >= '100') {

		navbar.style.height = '40px';
		navbar.style.transition = '.3s';

		navbarList.style.paddingTop = '2px';
		navbarList.style.transition = '.3s';
	}
	if (scrollY < '100') {
		navbar.style.height = '80px';
		navbar.style.transition = '.18s';

		navbarList.style.paddingTop = '22px';
		navbarList.style.transition = '.18s';
	}
});

