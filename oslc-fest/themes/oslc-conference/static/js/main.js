scrollToggle();

$(window).scroll(function () {
	scrollToggle();
});

//Helper
function scrollToggle() {
	if (pageYOffset > 100 && innerWidth > 768) {
		$('.main-header').addClass('scrolled');
	}
	else if (pageYOffset > 0 && innerWidth <= 768) {
		$('.main-header').addClass('scrolled');
	}
	else {
		$('.main-header').removeClass('scrolled');
	}

}
//END Helper

function openInfo(source) {
	presenter = $(source).attr('data-bio');
	$('#infoCard img').attr('src', bio[presenter].picturePath);
	$('#infoCard .item-title').html(bio[presenter].name);
	$('#infoCard .titles').html(bio[presenter].title);
	$('#infoCard .info--bio').children().remove();
	for (i = 0; i < bio[presenter].bio.length; i++) {
		$('#infoCard .info--bio').append('<p>' + bio[presenter].bio[i] + '</p>');
	}
	$('#infoCard .social-icons').children().remove();
	for (i = 0; i < bio[presenter].contact.length; i++) {
		$('#infoCard .social-icons').append($('<a href="' + bio[presenter].contact[i].link + '" target="_blank">' + bio[presenter].contact[i].icon + '</a>'))
	}
	$('#infoCard').css('top', (window.innerHeight - $('#infoCard').height()) / 2 + 'px');
	toggleElement('', '#infoCard');
}

function openPanel(source) {
	presentation = $(source).attr('data-bio');
	$('#infoPanel .item-title').html(presentations[presentation].title);
	$('#infoPanel .info--bio').children().remove();
	var description = ""
	for (i = 0; i < presentations[presentation].description.length; i++) {
		description = description + presentations[presentation].description[i];
	}
	$('#infoPanel .info--bio').append(description);
	$('#infoPanel .info--authors-wrap').children().remove();
	var authors = '';
	for (i = 0; i < presentations[presentation].authors.length; i++) {
		author = presentations[presentation].authors[i];
		var authors = authors + '<div class="gallery--item">'
		var authors = authors + '<div class="info--image-wrap">';
		var authors = authors + '<img class="round" src="' + author.picturePath + '" />';
		var authors = authors + '</div>';
		var authors = authors + '<h4 class="item-title">' + author.name + '</h4>';
		var authors = authors + '<p class="text-center titles">' + author.title + '</p>';
		var authors = authors + "</div>";
	}
	$('#infoPanel .info--authors-wrap').append(authors);
	$('#infoPanel').css('top', (window.innerHeight - $('#infoPanel').height()) / 2 + 'px');
	toggleElement('', '#infoPanel');
}

function toggleElement(target, selector) {
	if ($(target).hasClass('active')) {
		$(selector).add($(target)).removeClass('active');
		$('.overlay').remove();
	}
	else if ($(selector).hasClass('active')) {
		$(selector).removeClass('active');
		$('[data-select="' + selector + '"]').removeClass('active');
		$('.overlay').remove();
	} else {
		$(selector).add($(target)).addClass('active');
		if (!$(target).hasClass('no-overlay')) {
			$('<div class="overlay"></div>').click(function () {
				$(selector).add($(target)).removeClass('active');
				$(this).remove();
			}).appendTo($(document.body));
		}
	}
}

$(document).ready(function () {
	//Initialization

	//END Initialization

	//Event Handlers
	$('.menu-toggle').click(function () {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
		$('.main-header').addClass('scrolled');
		if (pageYOffset < 100 && !$(this).hasClass('active'))
			$('.main-header').removeClass('scrolled');
	});

	$('.menu').click(function () {
		$(this).toggleClass('active');
		$('.menu-toggle').toggleClass('active');
	});

	$('.toggle-btn').click(function () {
		var target = $(this);
		var selector = $(this).attr('data-select');

		toggleElement(target, selector);
	});
	//END Event Handlers

	//Helpers
});
