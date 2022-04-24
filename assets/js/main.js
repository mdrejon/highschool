
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


$(document).ready(function() {

  $('.video-btn').magnificPopup({type:'video'});

 $('#maps')
      .gmap3({
        center:[22.9434491,91.1204403],
        zoom:12,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        },
        scrollwheel: false
      })
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#9C8B70"},{"lightness":40}]},
          //{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#9C8B70"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#FFFFFF"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#FFFFFF"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ECECEC"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ECECEC"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#ECECEC"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#C8D7D4"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      );

      

});
