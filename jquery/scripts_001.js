var count = 0;
$(document).ready(function() {
						/* IMG CLICK */
	loadImgs();

	$("#zapatoImgID7").click(function() {
		$(".zapatoG7").fadeIn("fast");
		$(".zapatoGrande").fadeIn("fast");
		$(".fondo_zapatoGrande").css("display", "flex");
		$(".zapatoGrande").css('visibility', 'visible');
	});

	$("#zapatoImgID1").click(function() {
		$(".zapatoG1").fadeIn("fast");
		$("#blanca1").fadeIn("fast");
		$(".zapatoGrande").fadeIn("fast");
		$(".fondo_zapatoGrande").css("display", "flex");
		$(".zapatoGrande").css('visibility', 'visible');
	});

	$("#zapatoImgID2").click(function() {
		$(".zapatoG2").fadeIn("fast");
		$(".zapatoGrande").fadeIn("fast");
		$(".fondo_zapatoGrande").css("display", "flex");
		$(".zapatoGrande").css('visibility', 'visible');
	});

	$("#zapatoImgID3").click(function() {
		$(".zapatoG3").fadeIn("fast");
		$(".zapatoGrande").fadeIn("fast");
		$(".fondo_zapatoGrande").css("display", "flex");
		$(".zapatoGrande").css('visibility', 'visible');
	});

	$("#zapatoImgID4").click(function() {
		$(".zapatoG4").fadeIn("fast");
		$(".zapatoGrande").fadeIn("fast");
		$(".fondo_zapatoGrande").css("display", "flex");
		$(".zapatoGrande").css('visibility', 'visible');
	});

	$("#zapatoImgID5").click(function() {
		$(".zapatoG5").fadeIn("fast");
		$(".zapatoGrande").fadeIn("fast");
		$(".fondo_zapatoGrande").css("display", "flex");
		$(".zapatoGrande").css('visibility', 'visible');
	});

	$("#zapatoImgID6").click(function() {
		$(".zapatoG6").fadeIn("fast");
		$(".zapatoGrande").fadeIn("fast");
		$(".fondo_zapatoGrande").css("display", "flex");
		$(".zapatoGrande").css('visibility', 'visible');
	});

	$(".btn_cerrar").click(function() {
		$(".fondo_zapatoGrande").css("display", "none");
		$(".zapatoG1").fadeOut("fast");
		$(".zapatoG2").fadeOut("fast");
		$(".zapatoG3").fadeOut("fast");
		$(".zapatoG4").fadeOut("fast");
		$(".zapatoG5").fadeOut("fast");
		$(".zapatoG6").fadeOut("fast");
		$(".zapatoG7").fadeOut("fast");
		$(".zapatoGrande").fadeOut("fast");
		loadImgs();
	});

	$(".boton_submit").click(function() {
		$(".mensaje").fadeIn("fast");
		$(".mensaje").css('visibility', 'visible');
	});


});

$('form.form').on('submit', function() {
	var that = $(this),
				url = that.attr('action'),
				type = that.attr('method'),
				data = {};
	that.find('[name]').each( function(index, value) {
		that = $(this),
				name = that.attr('name'),
				value = that.val();

		data[name] = value;
	});

	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
			console.log(response);
		}
	});

	return false;
});

$(".boton_submit").click(function() {
	$(".mensaje").fadeIn("fast");
	$(".mensaje").css('visibility', 'visible');
});

/* ------------------------------------------------------------------------------------------------- */

var cambio_izquierda = document.getElementById('btn_cambio_izquierda');
var cambio_derecha = document.getElementById('btn_cambio_derecha');

cambio_izquierda.addEventListener("click", imagenAnterior);
cambio_derecha.addEventListener("click", imagenSiguiente);

function imagenAnterior() {
	let imgs = document.getElementsByName('img_zapato');
	if (count === 0) {

	}else if (count === 1) {
		imgs[0].attributes.src.value = "img/Blanca_1-01.jpeg";
		imgs[1].attributes.src.value = "img/Crucero_1-01.jpeg";
		imgs[2].attributes.src.value = "img/Titanic_1-01.jpeg";
		imgs[3].attributes.src.value = "img/Flor_1-01.jpeg";
		imgs[4].attributes.src.value = "img/Bota_Marron_1-01.jpeg";
		imgs[5].attributes.src.value = "img/Bota_Violeta_1-01.jpeg";
		imgs[6].attributes.src.value = "img/Fiesta_1.jpeg";
		count--;
	} else if (count === 2) {
		imgs[0].attributes.src.value = "img/Blanca_1-02.jpeg";
		imgs[1].attributes.src.value = "img/Crucero_1-02.jpeg";
		imgs[2].attributes.src.value = "img/Titanic_1-02.jpeg";
		imgs[3].attributes.src.value = "img/Flor_1-02.jpeg";
		imgs[4].attributes.src.value = "img/Bota_Marron_1-02.jpeg";
		imgs[5].attributes.src.value = "img/Bota_Violeta_1-02.jpeg";
		imgs[6].attributes.src.value = "img/Fiesta_2.jpg";
		count--;
	}
	
	console.log("boton de anterior");
}

function imagenSiguiente() {
	let imgs = document.getElementsByName('img_zapato');
	
	
	if (count === 0) {
		imgs[0].attributes.src.value = "img/Blanca_1-02.jpeg";
		imgs[1].attributes.src.value = "img/Crucero_1-02.jpeg";
		imgs[2].attributes.src.value = "img/Titanic_1-02.jpeg";
		imgs[3].attributes.src.value = "img/Flor_1-02.jpeg";
		imgs[4].attributes.src.value = "img/Bota_Marron_1-02.jpeg";
		imgs[5].attributes.src.value = "img/Bota_Violeta_1-02.jpeg";
		imgs[6].attributes.src.value = "img/Fiesta_2.jpg";
		count++;
	} else if (count === 1) {
		imgs[0].attributes.src.value = "img/Blanca_1-03.jpeg";
		imgs[1].attributes.src.value = "img/Crucero_1-03.jpeg";
		imgs[2].attributes.src.value = "img/Titanic_1-03.jpeg";
		imgs[3].attributes.src.value = "img/Flor_1-03.jpeg";
		imgs[4].attributes.src.value = "img/Bota_Marron_1-03.jpeg";
		imgs[5].attributes.src.value = "img/Bota_Violeta_1-03.jpeg";
		imgs[6].attributes.src.value = "img/Fiesta_3.jpg";
		count++;
	}

	console.log("boton de siguiente");
}


function loadImgs() {
	var imgs = document.getElementsByName('img_zapato');

	imgs[0].attributes.src.value = "img/Blanca_1-01.jpeg";
	imgs[1].attributes.src.value = "img/Crucero_1-01.jpeg";
	imgs[2].attributes.src.value = "img/Titanic_1-01.jpeg";
	imgs[3].attributes.src.value = "img/Flor_1-01.jpeg";
	imgs[4].attributes.src.value = "img/Bota_Marron_1-01.jpeg";
	imgs[5].attributes.src.value = "img/Bota_Violeta_1-01.jpeg";
	imgs[6].attributes.src.value = "img/Fiesta_1.jpeg";

	count = 0;
}