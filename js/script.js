// work experience calc
window.onload = function setTiming(element) {
  var timing = document.getElementById("timing");
  var diff = new Date(Date.now() - Date.parse(timing.getAttribute("from")));
  // diff is a seconds from Unix epoch, 01.01.1970. Need to deduct 70 years
  var diff_years = diff.getYear() - 70;
  var diff_month = diff.getMonth();
  timing.innerHTML = "(" + diff_years + " year" + (diff_years > 1 ? "s" : "");

  if (diff_month > 0) {
    timing.innerHTML +=
      ", " + diff_month + " month" + (diff_month > 1 ? "s" : "");
  }
  timing.innerHTML += ")";
  //console.log(diff_years, " years, ",  diff_month,  " months");
};

//toggle yellow line - ghost
$(document).ready(function () {
  $(".footer-yellowline").click(function () {
    $(this).find(".ghost-box").stop().slideToggle("slow");
  });
});
// Toggle for topics
function handleTopic() {
  $(this).find("~.topic-content").stop().slideToggle("slow");
}
// toggle yellow line - gamefield
$(document).ready(function () {
  $(".yellowline").click(function () {
    $(this).find("~.gamefield").stop().slideToggle("slow");
  });
});

//toggle somewords header
$(document).ready(function () {
  $(".header-somewords__end").click(function () {
    $(this).find("~.sd-head").stop().slideToggle("slow");
  });
});

//toggle somewords main

$(document).ready(function () {
  $(".block-some___grid__end").click(function () {
    $(this).find("~.sd-main").stop().slideToggle("slow");
  });
});

// Up buttom

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Game close button
$(".game-close").click(function () {
  $(this).closest(".gamefield").hide();
});

// Mobile version

function initMobile() {
  $(document).on("click", ".topic", handleTopic);

  console.log("is-mobile");
}

// desktop version
function initDesktop() {
  $(document).off("click", ".topic", handleTopic);

  console.log("is-desktop");
}

ssm.addState({
  id: "tablet",
  query: "(max-width: 768px)",
  onEnter: function () {
    initMobile();
  },
});

ssm.addState({
  id: "desktop",
  query: "(min-width: 768px)",
  onEnter: function () {
    initDesktop();
  },
});
