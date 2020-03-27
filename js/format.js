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

            modeButton.innerText = "Dark mode";
        }
    }
}

function toggleDark() {
    var modeButton = document.getElementById("mode");

    if (localStorage.getItem("modeType") == "light") {
        var main = document.getElementById("main");
        main.style.background = "dimgrey";
        main.style.color = "linen";

        var links = document.getElementsByTagName('a');
        var len = links.length;

        for (var i = 0; i < len; i++) {
            links[i].style.color = "linen";
        }

        modeButton.innerText = "Light mode";
        localStorage.setItem("modeType", "dark");

    } else  {
        var main = document.getElementById("main");
        main.style.background = "white";
        main.style.color = "black";

        var links = document.getElementsByTagName('a');
        var len = links.length;

        for (var i = 0; i < len; i++) {
            links[i].style.color = "black";
        }

        modeButton.innerText = "Dark mode";
        localStorage.setItem("modeType", "light");
    }
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
