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
  const zoom = 17;

  const src = "../assets/icons/marker.svg";
  const lat1 = "-34.581204563813735";
  const lng1 = "-58.45015737324518";
  const lat2 = "-34.58127616381696";
  const lng2 = "-58.45224548532422";
  const url = "https://goo.gl/maps/QJ6FPPMYhuJdxL6u5";
  const center = {
    lat: parseFloat(lat1),
    lng: parseFloat(lng1),
  };
  const center2 = {
    lat2: parseFloat(lat2),
    lng2: parseFloat(lng2),
  };
  const bounds = new google.maps.LatLngBounds();
  const map = new google.maps.Map(document.getElementById("map"), {
    styles,
    zoom,
    center,
    center2,
    gestureHandling: "cooperative",
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
  });

  const latLng = new google.maps.LatLng(lat1, lng1);
  const marker = new google.maps.Marker({
    position: latLng,
    map,
    icon: src,
  });

  const latLng2 = new google.maps.LatLng(lat2, lng2);
  const marker2 = new google.maps.Marker({
    position: latLng2,
    map,
    icon: src,
  });

  google.maps.event.addListener(marker, "click", function () {
    window.open(url);
  });
  google.maps.event.addListener(marker2, "click", function () {
    window.open(url);
  });

  bounds.extend(latLng);
  bounds.extend(latLng2);

  // Marker to fit zoom
  map.panTo(center);
  map.panTo(center2);
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
