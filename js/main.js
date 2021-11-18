//SCROLL
window.addEventListener("scroll", progresar);
var main = document.querySelector("main");

function progresar() {
  var progreso = document.documentElement.scrollTop;
  if (progreso >= 400) {
    var header = document.querySelector("header");

    header.style.background = "#d4dace";
  } else {
    var header = document.querySelector("header");
    header.style.background = "transparent";
  }
}

// Slider
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Google maps

function initMap() {
  const src = "../assets/icons/marker.svg";
  let zoom = 17;
  let center = {
    nombre: "olleros 3530",
    lat: -34.58128058046526,
    lng: -58.452245485820136,
  };
  let map = new google.maps.Map(document.getElementById("map"), {
    styles,
    zoom,
    center,
    gestureHandling: "cooperative",
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
  });
  let lugares = [
    {
      nombre: "olleros 3530",
      lat: -34.58128058046526,
      lng: -58.452245485820136,
    },
    {
      nombre: "alvares tomas 444",
      lat: -34.581208980465405,
      lng: -58.45179888581999,
    },
  ];

  for (i = 0; i < lugares.length; i++) {
    let marker = new google.maps.Marker({
      position: lugares[i],
      map,
      icon: src,
    });
  }
}
const styles = [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        weight: "2.00",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#9c9c9c",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f2f2f2",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d9e0d4",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
      {
        saturation: "0",
      },
      {
        lightness: "25",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d9e0d4",
      },
    ],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#d9e0d4",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#7b7b7b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#46bcec",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        lightness: "0",
      },
      {
        color: "#abb5a0",
      },
      {
        saturation: "0",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#070707",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
];

//wow Effects
new WOW().init();

$(window).on("load scroll", function () {
  "use strict";
  $(".wow").css("animation-play-state", "paused");
  $(".wow").each(function () {
    if (!$(this).data("wow-duration")) {
      $(this).data("wow-duration", "1s");
    }
    if (
      $(this).data("wow-offset") + $(this).offset().top <=
        $(window).scrollTop() + $(window).height() ||
      (!$(this).data("wow-offset") &&
        $(this).offset().top <= $(window).scrollTop() + $(window).height())
    ) {
      $(this).css("animation-play-state", "running ");
      $(this).css({
        animationDuration: $(this).data("wow-duration"),
        animationDelay: $(this).data("wow-delay"),
        animationIterationCount: $(this).data("wow-iteration"),
      });
    }
  });
});
