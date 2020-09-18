var page = window.location.pathname.split('/');
page = page[page.length - 1];
var MSs = [];

if (page == "AWS.html") {
    MSs = [['Prov', 'Prov.'], ['Temp1', 'Air Temp 1'], ['Temp2', 'Air Temp. 2'], ['Temp3', 'Air Temp. 3'],
    ['RH', 'Relative Humidity'], ['BAR', 'Barometer'], ['Wind1', 'Wind 1'], ['Wind2', 'Wind 2'], ['AWG1', 'AWPG 1'], ['AWG2', 'AWPG 2'], ['AWG3', 'AWPG 3'],
    ['Alter', 'AWPG Shield'], ['SG1', 'Snow Depth 1'], ['SG2', 'Snow Depth 2'], ['SG3', 'Snow Depth 3'], ['Logger', 'Datalogger']];
} else if (["CCN.html", "LH.html"].includes(page)) {
    MSs = [['Prov', 'Prov.'], ['Temp1', 'Air Temp. 1'], ['Temp2', 'Air Temp. 2'], ['Temp3', 'Air Temp. 3'], ['RH', 'Relative Humidity'],
    ['BAR', 'Barometer'], ['Wind', 'Wind'], ['AWG', 'AWPG'], ['Alter', 'AWPG Shield'], ['SG', 'Snow Depth'], ['Logger', 'Datalogger']];
}else if (page == "AVOS.html") {
    MSs = [['Reg', 'Region'], ['ShipType', 'Ship Type'], ['Payload', 'Payload'], ['Compass', 'Compass'], ['GPS', 'GPS'],
    ['Iridium', 'Iridium Transmitter'], ['Bridge', 'Bridge'], ['GPuc', 'GPuc'], ['ATemp', 'Air Temperature'],
    ['RH', 'Relative Humidity'], ['WTemp', 'Water Temperature'], ['BAR', 'Barometer'], ['Wind', 'Wind']];
} else if (page == "Moored.html") {
    MSs = [['Reg', 'Region'], ['Floc', 'FLOC Type'], ['Mooring', 'Mooring'], ['Buoy', 'Buoy Type'], ['Processor', 'Sensor Processor'],
    ['BAR', 'Barometer'], ['Compass', 'Compass'], ['PTrans', "Primary Transmitter"], ['STrans', 'Secondary Transmitter'],
    ['GOES', 'GOES Antenna'], ['Trans', 'Transmitter'], ['SubTrans', 'Sub Transmitter'], ['Iridium', 'Iridium Beacon'],
    ['ATemp', 'Air Temperature'], ['WTemp', 'Water Temperature'], ['Wind', 'Wind'], ['WindUS', 'Wind (Ultra Sonic)'],
    ['Wave', 'Wave Module'], ['SubWave', 'Sub Wave']];
} else if (page == "Mobile.html") {
    MSs = [['Location', 'Storage Location'], ['Status', 'Station Status'], ['Method', 'Collection Method'], ['Type', 'Collection Type'],
    ['PrimaryTx', 'Primary Tx'], ['SecondaryTx', 'Secondary Tx'], ['Temp', 'Air Temperature'], ['RH', 'Relative Humidity'],
    ['BAR', 'Barometer'], ['Wind', 'Wind'], ['AWG', 'AWPG'], ['Alter', 'AWPG Shield'], ['SG', 'Snow Depth'], ['Logger', 'DataLogger']];
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
                filters[j].style.backgroundSize = '0.5vw 0.75vh';
            }

            var MSs = document.getElementsByClassName('ms-choice');
            var MSsLen = MSs.length;

            for (var k = 0; k < MSsLen; k++) {
                MSs[k].childNodes[1].style.background = 'url("/CSS/blackArrow.png") no-repeat right';
                MSs[k].childNodes[1].style.backgroundSize = '0.5vw 0.75vh';
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

    var MSs = document.getElementsByClassName('ms-choice');
    var MSsLen = MSs.length;

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
        filters[j].style.backgroundSize = '0.5vw 0.75vh';
        filters[j].style.backgroundColor = "inherit";
    }

    for (var k = 0; k < MSsLen; k++) {
        MSs[k].childNodes[1].style.background = ['url("/CSS/', filterColor, 'Arrow.png") no-repeat right'].join('');
        MSs[k].childNodes[1].style.backgroundSize = '0.5vw 0.75vh';
    }


    modeButton.innerText = modeText;
}

function setupPage() {
    setMode();

    try {
        setMultipleSelects(MSs);
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
