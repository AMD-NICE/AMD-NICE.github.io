var page = window.location.pathname.split('/');
page = page[page.length - 1];
var MSs = [];

if (["AWS.html", "CCN.html", "LH.html"].includes(page)) {
    MSs = [['Prov', 'Prov.'], ['PM21', 'Last Complete PM21'], ['PM22', 'Last Complete PM22'], ['Temp', 'Air Temp.'], ['RH', 'Relative Humidity'], ['BAR', 'Barometer'],
    ['Wind', '10M Wind'], ['AWG', 'AWPG'], ['Alter', 'AWPG Shield'], ['SG', 'Snow Depth'], ['Datalogger', 'Datalogger'], ['AWPGStatus', "AWPG Status"]];
}else if (page == "AVOS.html") {
    MSs = [['Reg', 'Region'], ['ShipType', 'Ship Type'], ['Route', 'Ship Route'], ['PM21', 'Last Complete PM21'], ['PM22', 'Last Complete PM22'], ['Payload', 'Payload'], ['Compass', 'Compass'], ['GPS', 'GPS'],
    ['Iridium', 'Iridium Transmitter'], ['Bridge', 'Bridge'], ['GPuc', 'GPuc'], ['ATemp', 'Air Temp.'],
    ['RH', 'Relative Humidity'], ['WTemp', 'Water Temp.'], ['BAR', 'Barometer'], ['Wind', 'Wind']];
} else if (page == "Moored.html") {
    MSs = [['Reg', 'Region'], ['Floc', 'FLOC Type'], ['Mooring', 'Mooring'], ['PM21', 'Last Complete PM21'], ['PM22', 'Last Complete PM22'], ['Buoy', 'Buoy Type'], ['Processor', 'Sensor Processor'],
    ['BAR', 'Barometer'], ['Compass', 'Compass'], ['PTrans', "Primary Transmitter"], ['STrans', 'Secondary Transmitter'],
    ['Trans', 'Transmitter'], ['SubTrans', 'Sub Transmitter'], ['GOES', 'GOES Antenna'], ['Iridium', 'Iridium Beacon'],
    ['ATemp', 'Air Temp.'], ['WTemp', 'Water Temp.'], ['Wind', 'Wind'], ['WindUS', 'Wind (UltraSonic)'],
    ['Wave', 'Wave Module'], ['SubWave', 'Sub Wave']];
} else if (page == "Mobile.html") {
    MSs = [['Location', 'Storage Location'], ['Status', 'Station Status'], ['Method', 'Collection Method'], ['Type', 'Collection Type'], ['PM21', 'Last Complete PM21'], ['PM22', 'Last Complete PM22'],
    ['PrimaryTx', 'Primary Tx'], ['SecondaryTx', 'Secondary Tx'], ['Temp', 'Air Temp.'], ['RH', 'Relative Humidity'],
    ['BAR', 'Barometer'], ['Wind', 'Wind'], ['AWG', 'AWPG'], ['Alter', 'AWPG Shield'], ['SG', 'Snow Depth'], ['Datalogger', 'Datalogger']];
}

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
                filters[j].style.backgroundSize = '10px 8px';
            }

            var multiples = document.getElementsByClassName('ms-choice');
            var MSsLen = multiples.length;

            for (var k = 0; k < MSsLen; k++) {
                multiples[k].childNodes[1].style.background = 'url("/CSS/blackArrow.png") no-repeat right';
                multiples[k].childNodes[1].style.backgroundSize = '10px 8px';
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

    var multiples = document.getElementsByClassName('ms-choice');
    var MSsLen = multiples.length;

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
        filters[j].style.backgroundSize = '10px 8px';
        filters[j].style.backgroundColor = "inherit";
    }

    for (var k = 0; k < MSsLen; k++) {
        multiples[k].childNodes[1].style.background = ['url("/CSS/', filterColor, 'Arrow.png") no-repeat right'].join('');
        multiples[k].childNodes[1].style.backgroundSize = '10px 8px';
    }


    modeButton.innerText = modeText;
}

function setupPage() {
    try {
        setMultipleSelects(MSs);
    } catch {
    }

    setMode();

    try {
        var rows1 = document.getElementById("body1").getElementsByTagName('tr');
        var rows2 = document.getElementById("body2").getElementsByTagName('tr');

        rowsLen = rows1.length;

        for (var r = 0; r < rowsLen; r++) {
            var height1 = rows1[r].clientHeight;
            var height2 = rows2[r].clientHeight;

            if (height1 < height2) {
                rows1[r].style.height = height2;
            } else {
                rows2[r].style.height = height1;
            }
        }
    } catch {
    }

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
