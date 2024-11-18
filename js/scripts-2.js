function popUpWin(url, winName, features) {
  window.open(url, winName, features);
}

function showPic(whichpic) {
  if (document.getElementById) {
    document.getElementById("placeholder").src = whichpic.href;
    return false;
  } else {
    return true;
  }
}

function showhide(id) {
  if (
    document.getElementById(id).style.display == "none" ||
    !document.getElementById(id).style.display
  ) {
    document.getElementById(id).style.display = "block";
  } else {
    document.getElementById(id).style.display = "none";
  }
}

function showhideinline(id) {
  if (
    document.getElementById(id).style.display == "none" ||
    !document.getElementById(id).style.display
  ) {
    document.getElementById(id).style.display = "inline";
  } else {
    document.getElementById(id).style.display = "none";
  }
}

$(function () {
  $("#admin .nav-admin-link").mouseover(function () {
    $(".admin-options").hide();
    $(".admin-hover-li").removeClass("admin-hover-li");
    $(this).parent().addClass("admin-hover-li");
    $(this).siblings(".admin-options").show();
  });
  
  var randQuote = Math.floor(Math.random() * $(".quote-item").length);
  $(".quote-item:eq(" + randQuote + ")").fadeIn();

  $(".slideshow-photo-link a").click(function (e) {
    e.preventDefault();
    return false;
  });
});

var m = "art";
m += "o@d";
m += "irect.ca";
$('<a class="holla" href="mailto:' + m + '"></a>').appendTo("#footer-container");
