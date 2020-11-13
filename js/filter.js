var page = window.location.pathname.split('/');
page = page[page.length - 1];
var MSs = [];

if (["AWS.html", "CCN.html", "LH.html"].includes(page)) {
    MSs = [['Prov', 'Prov.'], ['PM21', 'Last Complete PM21'], ['PM22', 'Last Complete PM22'], ['Temp', 'Air Temp.'], ['RH', 'Relative Humidity'], ['BAR', 'Barometer'],
    ['Wind10M', '10M Wind'], ['Wind2M', '2M Wind'], ['AWG', 'AWPG'], ['Alter', 'AWPG Shield'], ['TB', 'Rate of Rainfall'], ['SG', 'Snow Depth'], ['Datalogger', 'Datalogger'], ['AWPGStatus', "AWPG Status"]];
}else if (page == "AVOS.html") {
    MSs = [['Reg', 'Region'], ['ShipType', 'Ship Type'], ['Route', 'Ship Route'], ['PM21', 'Last Complete PM21'], ['PM22', 'Last Complete PM22'], ['Payload', 'Payload'], ['Compass', 'Compass'], ['GPS', 'GPS'],
    ['Iridium', 'Iridium Transmitter'], ['Bridge', 'Bridge'], ['GPuc', 'GPuc'], ['ATemp', 'Air Temp.'],
    ['RH', 'Relative Humidity'], ['WTemp', 'Water Temp.'], ['BAR', 'Barometer'], ['Wind', 'Wind']];
} else if (page == "Moored.html") {
    MSs = [['Reg', 'Region'], ['Floc', 'FLOC Type'], ['Mooring', 'Mooring'], ['PM21', 'Last Complete PM21'], ['PM22', 'Last Complete PM22'], ['Buoy', 'Buoy Type'], ['Processor', 'Sensor Processor'],
    ['BAR', 'Barometer'], ['Compass', 'Compass'], ['PTrans', "Primary Transmitter"], ['STrans', 'Secondary Transmitter'],
    ['Trans', 'Transmitter'], ['SubTrans', 'Sub Transmitter'], ['Watchman', 'Watchman'], ['GOES', 'GOES Antenna'], ['Iridium', 'Iridium Beacon'],
    ['ATemp', 'Air Temp.'], ['WTemp', 'Water Temp.'], ['Wind', 'Wind'], ['WindUS', 'Wind (UltraSonic)'],
    ['Wave', 'Wave Module'], ['SubWave', 'Sub Wave']];
} else if (page == "Mobile.html") {
    MSs = [['Location', 'Storage Location'], ['Status', 'Station Status'], ['Method', 'Collection Method'], ['Type', 'Collection Type'], ['PM21', 'Last Complete PM21'], ['PM22', 'Last Complete PM22'],
    ['PrimaryTx', 'Primary Tx'], ['SecondaryTx', 'Secondary Tx'], ['Temp', 'Air Temp.'], ['RH', 'Relative Humidity'],
    ['BAR', 'Barometer'], ['Wind', 'Wind'], ['AWG', 'AWPG'], ['Alter', 'AWPG Shield'], ['SG', 'Snow Depth'], ['Datalogger', 'Datalogger']];
}


function compareDates(d1, d2) {
    if (d1[0] == d2[0]) {

        return "0"

    } else if (d1[0] - 1 == d2[0]) {
        if (d1[1] < d2[1] || (d1[1] == d2[1] && d1[2] <= d2[2])) {

            return "0"

        } else if (d1[1] > d2[1] || (d1[1] == d2[1] && d1[2] > d2[2])) {

            return "1"
        }
    } else if (d1[0] - 2 == d2[0]) {
        if (d1[1] < d2[1] || (d1[1] == d2[1] && d1[2] <= d2[2])) {

            return "1"

        } else if (d1[1] > d2[1] | (d1[1] == d2[1] && d1[2] > d2[2])) {

            return "2"

        }
    } else if (d1[0] - 2 > d2[0]) {

        return "2"

    }

    return "-1"
}


function filter(searchIn, obsIn, msIn, lst1, lst2) {
    var sBool = false;
    var oBool = true;
    var msBool = true;

    var lst1Len = lst1.length;
    var lst2Len = lst2.length;

    var lstHold = [...lst1];

    if (["AWS.html", "CCN.html", "LH.html"].includes(page)) {
        lstHold = lstHold.concat(Array.from(lst2).slice(0, 3));
    }

    var lstHoldLen = lstHold.length;

    for (var l = 0; l < lstHoldLen; l++) {
        var hold = lstHold[l].textContent || lstHold[l].innerText;

        if (hold.includes(searchIn)) {
            sBool = true;

            break
        }
    }

    var oLen = obsIn.length;

    for (var o = 0; o < oLen; o++) {
        var hold = obsIn[o];

        if (hold[1][0] == '1') {
            var obsHold = lst1[hold[1][1]].innerHTML;
        } else if (hold[1][0] == '2') {
            var obsHold = lst2[hold[1][1]].innerHTML;
        }
        var valueHold = hold[0];

        if ([" X ", "   "].includes(valueHold) && obsHold != valueHold) {
            oBool = false;

            break;
        }
    }

    var msLen = msIn.length;

    for (var m = 0; m < msLen; m++) {
        var hold = msIn[m];

        if (hold[1][0] == '1') {
            var msHold = lst1[hold[1][1]].textContent || lst1[hold[1][1]].innerText;
        } else if (hold[1][0] == '2') {
            var msHold = lst2[hold[1][1]].textContent || lst2[hold[1][1]].innerText;
        }
        var lstHold = hold[0];
        var lstLen = lstHold.length;

        var msValuesHold = [];

        for (var i = 0; i < lstLen; i++) {
            msValuesHold.push(lstHold[i].value);
        }

        var holdLen = msValuesHold.length;

        if (hold[1][2] == "1") {
            var include = false;
            var level = msHold.split('%');

            if (level.length == 1) {
                msBool = false;

                break;

            } else {
                level = Number(level[0]);
            }

            var levels = [[-1, 25], [25, 50], [50, 75], [75, 101]];

            for (var n = 0; n < holdLen; n++) {
                var cutoffs = levels[Number(msValuesHold[n])];

                if (level > cutoffs[0] && level <= cutoffs[1]) {
                    include = true

                    break
                }

            } if (!(include)) {
                msBool = false;

                break;
            }


        } else if (hold[1][2] == "2") {
            for (var s = 0; s < holdLen; s++) {
                var sensorHold = msValuesHold[s].split('x ');
                var inLen = Number(msValuesHold[s][0]);
                var inValue = sensorHold[1];

                var match = false;

                var valueLen = msHold.split('; ').length;

                if (inLen == valueLen && msHold.includes(inValue)){
                    match = true;

                    break;
                }
            } if (match == false) {
                msBool = false;

                break;
            }
        } else if (hold[1][2] == "3") {
            var include = false;

            if (msHold == "   ") {
                msBool = false;

                break;
            } else {
                var WODate = msHold.trim().split('-');
            }

            var date = document.getElementsByTagName('footer')[0].textContent.split(": ")[1].split(';')[0].split('-');

            for (var d = 0; d < 3; d++) {
                date[d] = Number(date[d]);
                WODate[d] = Number(WODate[d]);
            }

            for (var n = 0; n < holdLen; n++) {
                var WOScenerio = msValuesHold[n];

                if (WOScenerio == compareDates(date, WODate)) {
                    include = true;

                    break;
                }

            } if (!(include)) {
                msBool = false;

                break;
            }


        } else {
            if (msValuesHold.length != 0 && !(msValuesHold.includes(msHold.trim()))) {
                msBool = false;

                break;
            }
        }
    }

    return sBool && oBool && msBool
}

function filterTable() {
    var header1 = document.getElementById('head1').getElementsByTagName('th');

    var header1Values = [];

    var header2 = document.getElementById('head2').getElementsByTagName('th');

    var header2Values = [];

    var h1Len = header1.length;
    var h2Len = header2.length;
    var hLen = h1Len + h2Len;

    for (var h = 0; h < hLen; h++) {
        if (h < h1Len) {
            var hold = header1[h];
            var valuesHold = header1Values;
        } else {
            var hold = header2[h-h1Len];
            var valuesHold = header2Values;
        }

        var childs = hold.children;

        if (childs.length >= 1) {
            valuesHold.push(childs[0].id);
        } else {
            valuesHold.push(hold.id);
        }
    }

    var search = document.getElementById('Input').value.toUpperCase();

    var obs = document.getElementsByClassName('obs');
    var obsLen = obs.length;
    var obsValues = [];

    for (var o = 0; o < obsLen; o++) {
        var id = obs[o].id;
        var hold = [obs[o].value];
        if (header1Values.includes(id)){
            hold.push(['1', header1Values.indexOf(id)]);

        } else if (header2Values.includes(id)) {
            hold.push(['2', header2Values.indexOf(id)]);
        } else {
        alert('Invalid Filter');

        return 0
        }
        obsValues.push(hold);
    }

    var ms = document.getElementsByClassName('ms');
    var msLen = ms.length;
    var msValues = [];

    for (var m = 0; m < msLen; m++) {
        var select = ms[m];
        var id = select.id;

        var selected = select.selectedOptions;

        if (select.type != "select-multiple" || selected.length == 0) {
            continue;
        }

        var hold = [selected];

        var table;
        var ind;

        var special = "0";

        if (header1Values.includes(id)){
            table = "1";

            ind = header1Values.indexOf(id);

        } else if (header2Values.includes(id)) {
            table = "2";

            ind = header2Values.indexOf(id);

        } else {
            alert('Invalid Filter');

            return 0
        }

        var classLst = select.classList;

        if (classLst.contains("AWGS")) {
            special = "1";
        } else if (classLst.contains('lst')) {
            special = "2";
        } else if (classLst.contains('WO')) {
            special = "3";
        }

        hold.push([table, ind, special]);

        msValues.push(hold);
    }

    var rows1 = document.getElementById("body1").getElementsByTagName("tr");
    var rows2 = document.getElementById("body2").getElementsByTagName("tr");

    var rowsLen = rows1.length;

    var count = 0

    for (var r = 0; r < rowsLen; r++) {
        var row1Hold = rows1[r].getElementsByTagName('td');
        var row2Hold = rows2[r].getElementsByTagName('td');


        if (filter(search, obsValues, msValues, row1Hold, row2Hold)) {
            rows1[r].style.display = "";
            rows2[r].style.display = "";

            count += 1;
        } else {
            rows1[r].style.display = "none";
            rows2[r].style.display = "none";
        }

    }
    document.getElementById("qCount").innerHTML = count;
}

function clearFilters() {
    document.getElementById("Input").value = "";

    var filters = document.getElementsByClassName("obs");
    var filtersLen = filters.length;
    for (var i = 0; i < filtersLen; i++) {
        let element = filters[i];

        element.value = element.options[0].text;
    }

    var MSsLen = MSs.length;
    for (var j = 0; j < MSsLen; j++) {
        var element = document.getElementById(MSs[j][0]);
        element.onchange = "";

        element.value = "";
    }

    setMultipleSelects(MSs);

    filterTable();
}