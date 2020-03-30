function setMode() {
    var modeButton = document.getElementById("mode");

    if (localStorage.getItem("modeType") === null) {
        localStorage.setItem("modeType", "dark");
        modeButton.innerText = "Light mode";

    } else {
        if (localStorage.getItem("modeType") == "dark") {
            modeButton.innerText = "Light mode";
        } else {
            var main = document.getElementById("main");
            main.style.background = "white";
            main.style.color = "black";

            var links = document.getElementsByTagName('a');
            var len = links.length;

            for (var i = 0; i < len; i++) {
                links[i].style.color = "black";
            }

            var filters = $('.filter');
            var filterLen = filters.length;

            for (var j = 0; j < filterLen; j++) {
                filters[j].style.background = 'url("/CSS/blackArrow.png") no-repeat right';
                filters[j].style.backgroundSize = '0.5vw 1vh';
            }

            modeButton.innerText = "Dark mode";
        }
    }
}

function toggleDark() {
    var main = document.getElementById("main");

    var mainLightBackground = "white";
    var mainLightColor = "black"

    var modeButton = document.getElementById("mode");

    var links = document.getElementsByTagName('a');
    var len = links.length;

    var filters = $('.filter');
    var filterLen = filters.length;

    var mainBackground = "";
    var mainColor = "";
    var linkColor = "";
    var filterColor = "";
    var modeText = "";

    if (localStorage.getItem("modeType") == "light") {
        mainBackground = "dimgrey";
        mainColor = "linen";
        linkColor = "linen";
        filterColor = "white";
        modeText = "Light Mode";

        localStorage.setItem("modeType", "dark");

    } else  {
        mainBackground = "white";
        mainColor = "black";
        linkColor = "black";
        filterColor = "black";
        modeText = "Dark Mode";

        localStorage.setItem("modeType", "light");
    }

    main.style.background = mainBackground;
    main.style.color = mainColor;

    for (var i = 0; i < len; i++) {
        links[i].style.color = linkColor;
    }

    for (var j = 0; j < filterLen; j++) {
        filters[j].style.background = ['url("/CSS/', filterColor, 'Arrow.png") no-repeat right'].join('');
        filters[j].style.backgroundSize = '0.5vw 1vh';
    }

    modeButton.innerText = modeText;
}

function setupPage() {
    setMode();

    var html = $('#main')[0];
    html.style.visibility = "visible";
}

var ignoreScrollEventsX = false
var ignoreScrollEventsY = false
function syncScroll(element1, element2, axis) {
    if (axis == "X") {
        element1.scroll(function (e) {
          var ignore = ignoreScrollEventsX;
          ignoreScrollEventsX = false;
          if (ignore) {
            return;
          }

          ignoreScrollEventsX = true;
          element2.scrollLeft(element1.scrollLeft());
        });
    }
    if (axis == "Y") {
        element1.scroll(function (e) {
            var ignore = ignoreScrollEventsY;
            ignoreScrollEventsY = false;
            if (ignore) {
                return;
            }

            ignoreScrollEventsY = true;
            element2.scrollTop(element1.scrollTop());
    });
    }
}
syncScroll($("#tablehead2"), $("#tablebody2"), "X");
syncScroll($("#tablebody2"), $("#tablehead2"), "X");

syncScroll($("#tablebody1"), $("#tablebody2"), "Y");
syncScroll($("#tablebody2"), $("#tablebody1"), "Y");
