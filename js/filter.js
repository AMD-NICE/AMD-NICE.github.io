function Filter(sIn, sValues, oIns, oValues, msIns, msValues) {
    var searchBool = false;
    var obsBool = true;
    var msBool = true;

    var sLen = sValues.length;
    for (var x = 0; x < sLen; x++) {
        if (sValues[x].includes(sIn)) {
            searchBool = true;

            break;
        }
    }

    var oLen = oValues.length;
    for (var y = 0; y < oLen; y++) {
        if ([" X ", "   "].includes(oIns[y]) && oIns[y] != oValues[y]) {
            obsBool = false;

            break;
        }
    }

    var msLen = msValues.length;
    for (var z = 0; z < msLen; z++) {
        if (msIns[z].length != 0 && !(msIns[z].includes(msValues[z].trim().replace("  ", " ")))) {
            msBool = false;

            break;
        }
    }


    return searchBool && obsBool && msBool;
}

function AWSFilter() {
  var searchIn = document.getElementById("Input").value.toUpperCase();

  var RBSN = document.getElementById("RBSN").value;
  var RBCN = document.getElementById("RBCN").value;
  var GSN = document.getElementById("GSN").value;
  var RCS = document.getElementById("RCS").value;
  var Coastal = document.getElementById("Coastal").value;
  var CRD = document.getElementById("CRD").value;

  var obsIn = [RBSN, RBCN, GSN, RCS, Coastal, CRD];

  var multipleIn = [];

  var multipleLen = MSs.length;
  for (var x = 0; x < multipleLen; x++) {
      var item = document.getElementById(MSs[x][0]);
      var itemsHold = [];

      var itemLen = item.length;
      for (var y = 0; y < itemLen; y++) {
        if (item[y].selected) {
            itemsHold.push(item[y].text);
        }
      }
      multipleIn.push(itemsHold);
  }

  var body1 = document.getElementById("body1");
  var trB1 = body1.getElementsByTagName("tr");
  var body2 = document.getElementById("body2");
  var trB2 = body2.getElementsByTagName("tr");

  var count = 0;

  var len = trB1.length;

  for (i = 0; i < len; i++) {
    var trLst1 = trB1[i].getElementsByTagName("td");
    var trLst2 = trB2[i].getElementsByTagName("td");

    //For search bar
    var search0 = trLst1[0].textContent || trLst1[0].innerText;
    var search1 = trLst1[1].textContent || trLst1[1].innerText;
    var search2 = trLst2[0].textContent || trLst2[0].innerText;
    var search3 = trLst2[1].textContent || trLst2[1].innerText;
    var search4 = trLst2[2].textContent || trLst2[2].innerText;

    var searchValues = [search0, search1, search2, search3, search4];

    //For observing network
    var obs0 = trLst2[5].innerHTML;
    var obs1 = trLst2[6].innerHTML;
    var obs2 = trLst2[7].innerHTML;
    var obs3 = trLst2[8].innerHTML;
    var obs4 = trLst2[9].innerHTML;
    var obs5 = trLst2[10].innerHTML;

    var obsValues = [obs0, obs1, obs2, obs3, obs4, obs5];

    //For multiple select
    var ms00 = trLst1[2].textContent || trLst1[2].innerText;
    var ms0 = trLst2[14].textContent || trLst2[14].innerText;
    var ms1 = trLst2[15].textContent || trLst2[15].innerText;
    var ms2 = trLst2[16].textContent || trLst2[16].innerText;
    var ms3 = trLst2[17].textContent || trLst2[17].innerText;
    var ms4 = trLst2[18].textContent || trLst2[18].innerText;
    var ms5 = trLst2[19].textContent || trLst2[19].innerText;
    var ms6 = trLst2[20].textContent || trLst2[20].innerText;
    var ms7 = trLst2[21].textContent || trLst2[21].innerText;
    var ms8 = trLst2[22].textContent || trLst2[22].innerText;
    var ms9 = trLst2[23].textContent || trLst2[23].innerText;
    var ms10 = trLst2[24].textContent || trLst2[24].innerText;
    var ms11 = trLst2[25].textContent || trLst2[25].innerText;
    var ms12 = trLst2[26].textContent || trLst2[26].innerText;
    var ms13 = trLst2[27].textContent || trLst2[27].innerText;
    var ms14 = trLst2[28].textContent || trLst2[28].innerText;

    var multipleValues = [ms00, ms0, ms1, ms2, ms3, ms4, ms5, ms6, ms7, ms8, ms9, ms10, ms11, ms12, ms13, ms14];

    if (Filter(searchIn, searchValues, obsIn, obsValues, multipleIn, multipleValues)) {
        count += 1;
        trB1[i].style.display = "";
        trB2[i].style.display = "";
    } else {
        trB1[i].style.display = "none";
        trB2[i].style.display = "none";
    }
  }
  document.getElementById("qCount").innerHTML = count;
}

function SurfaceFilter() {
  var searchIn = document.getElementById("Input").value.toUpperCase();

  var RBSN = document.getElementById("RBSN").value;
  var RBCN = document.getElementById("RBCN").value;
  var GSN = document.getElementById("GSN").value;
  var RCS = document.getElementById("RCS").value;
  var Coastal = document.getElementById("Coastal").value;
  var CRD = document.getElementById("CRD").value;

  var obsIn = [RBSN, RBCN, GSN, RCS, Coastal, CRD];

  var multipleIn = [];

  var multipleLen = MSs.length;
  for (var x = 0; x < multipleLen; x++) {
      var item = document.getElementById(MSs[x][0]);
      var itemsHold = [];

      var itemLen = item.length;
      for (var y = 0; y < itemLen; y++) {
        if (item[y].selected) {
            itemsHold.push(item[y].text);
        }
      }
      multipleIn.push(itemsHold);
  }

  var body1 = document.getElementById("body1");
  var trB1 = body1.getElementsByTagName("tr");
  var body2 = document.getElementById("body2");
  var trB2 = body2.getElementsByTagName("tr");

  var count = 0;

  var len = trB1.length;

  for (i = 0; i < len; i++) {
    var trLst1 = trB1[i].getElementsByTagName("td");
    var trLst2 = trB2[i].getElementsByTagName("td");

    //For search bar
    var search0 = trLst1[0].textContent || trLst1[0].innerText;
    var search1 = trLst1[1].textContent || trLst1[1].innerText;
    var search2 = trLst2[0].textContent || trLst2[0].innerText;
    var search3 = trLst2[1].textContent || trLst2[1].innerText;
    var search4 = trLst2[2].textContent || trLst2[2].innerText;

    var searchValues = [search0, search1, search2, search3, search4];

    //For observing network
    var obs0 = trLst2[5].innerHTML;
    var obs1 = trLst2[6].innerHTML;
    var obs2 = trLst2[7].innerHTML;
    var obs3 = trLst2[8].innerHTML;
    var obs4 = trLst2[9].innerHTML;
    var obs5 = trLst2[10].innerHTML;

    var obsValues = [obs0, obs1, obs2, obs3, obs4, obs5];

    //For multiple select
    var ms0 = trLst1[2].textContent || trLst1[2].innerText;
    var ms1 = trLst2[14].textContent || trLst2[14].innerText;
    var ms2 = trLst2[15].textContent || trLst2[15].innerText;
    var ms3 = trLst2[16].textContent || trLst2[16].innerText;
    var ms4 = trLst2[17].textContent || trLst2[17].innerText;
    var ms5 = trLst2[18].textContent || trLst2[18].innerText;
    var ms6 = trLst2[19].textContent || trLst2[19].innerText;
    var ms7 = trLst2[20].textContent || trLst2[20].innerText;
    var ms8 = trLst2[21].textContent || trLst2[21].innerText;
    var ms9 = trLst2[22].textContent || trLst2[22].innerText;
    var ms10 = trLst2[23].textContent || trLst2[23].innerText;

    var multipleValues = [ms0, ms1, ms2, ms3, ms4, ms5, ms6, ms7, ms8, ms9, ms10];

    if (Filter(searchIn, searchValues, obsIn, obsValues, multipleIn, multipleValues)) {
        count += 1;
        trB1[i].style.display = "";
        trB2[i].style.display = "";
    } else {
        trB1[i].style.display = "none";
        trB2[i].style.display = "none";
    }
  }
  document.getElementById("qCount").innerHTML = count;
}

function AVOSFilter() {
  var searchIn = document.getElementById("Input").value.toUpperCase();

  var multipleIn = [];

  var multipleLen = MSs.length;
  for (var x = 0; x < multipleLen; x++) {
      var item = document.getElementById(MSs[x][0]);
      var itemsHold = [];

      var itemLen = item.length;
      for (var y = 0; y < itemLen; y++) {
        if (item[y].selected) {
            itemsHold.push(item[y].text);
        }
      }
      multipleIn.push(itemsHold);
  }

  var body1 = document.getElementById("body1");
  var trB1 = body1.getElementsByTagName("tr");
  var body2 = document.getElementById("body2");
  var trB2 = body2.getElementsByTagName("tr");

  var count = 0;

  var len = trB1.length;

  for (i = 0; i < len; i++) {
    var trLst1 = trB1[i].getElementsByTagName("td");
    var trLst2 = trB2[i].getElementsByTagName("td");

    //For search bar
    var search0 = trLst1[1].textContent || trLst1[1].innerText;
    var search1 = trLst1[2].textContent || trLst1[2].innerText;
    var search2 = trLst1[3].textContent || trLst1[3].innerText;
    var search3 = trLst1[4].textContent || trLst1[4].innerText;

    var searchValues = [search0, search1, search2, search3];

    //For multiple select
    var ms0 = trLst1[0].textContent || trLst1[0].innerText;
    var ms1 = trLst2[0].textContent || trLst2[0].innerText;
    var ms2 = trLst2[10].textContent || trLst2[10].innerText;
    var ms3 = trLst2[11].textContent || trLst2[11].innerText;
    var ms4 = trLst2[12].textContent || trLst2[12].innerText;
    var ms5 = trLst2[13].textContent || trLst2[13].innerText;
    var ms6 = trLst2[14].textContent || trLst2[14].innerText;
    var ms7 = trLst2[15].textContent || trLst2[15].innerText;
    var ms8 = trLst2[16].textContent || trLst2[16].innerText;
    var ms9 = trLst2[17].textContent || trLst2[17].innerText;
    var ms10 = trLst2[18].textContent || trLst2[18].innerText;
    var ms11 = trLst2[19].textContent || trLst2[19].innerText;
    var ms12 = trLst2[20].textContent || trLst2[20].innerText;

    var multipleValues = [ms0, ms1, ms2, ms3, ms4, ms5, ms6, ms7, ms8, ms9, ms10, ms11, ms12];

    if (Filter(searchIn, searchValues, [], [], multipleIn, multipleValues)) {
        count += 1;
        trB1[i].style.display = "";
        trB2[i].style.display = "";
    } else {
        trB1[i].style.display = "none";
        trB2[i].style.display = "none";
    }
  }
  document.getElementById("qCount").innerHTML = count;
}

function MobileFilter() {
  var searchIn = document.getElementById("Input").value.toUpperCase();

  var multipleIn = [];

  var multipleLen = MSs.length;
  for (var x = 0; x < multipleLen; x++) {
      var item = document.getElementById(MSs[x][0]);
      var itemsHold = [];

      var itemLen = item.length;
      for (var y = 0; y < itemLen; y++) {
        if (item[y].selected) {
            itemsHold.push(item[y].text);
        }
      }
      multipleIn.push(itemsHold);
  }

  var body1 = document.getElementById("body1");
  var trB1 = body1.getElementsByTagName("tr");
  var body2 = document.getElementById("body2");
  var trB2 = body2.getElementsByTagName("tr");

  var count = 0;

  var len = trB1.length;

  for (i = 0; i < len; i++) {
    var trLst1 = trB1[i].getElementsByTagName("td");
    var trLst2 = trB2[i].getElementsByTagName("td");

    //For search bar
    var search0 = trLst1[0].textContent || trLst1[0].innerText;
    var search1 = trLst1[1].textContent || trLst1[1].innerText;
    var search2 = trLst2[0].textContent || trLst2[0].innerText;
    var search3 = trLst2[1].textContent || trLst2[1].innerText;
    var search4 = trLst2[2].textContent || trLst2[2].innerText;

    var searchValues = [search0, search1, search2, search3, search4];

    //For multiple select
    var ms0 = trLst2[3].textContent || trLst2[3].innerText;
    var ms1 = trLst2[4].textContent || trLst2[4].innerText;
    var ms2 = trLst2[5].textContent || trLst2[5].innerText;
    var ms3 = trLst2[6].textContent || trLst2[6].innerText;
    var ms4 = trLst2[9].textContent || trLst2[9].innerText;
    var ms5 = trLst2[10].textContent || trLst2[10].innerText;
    var ms6 = trLst2[11].textContent || trLst2[11].innerText;
    var ms7 = trLst2[12].textContent || trLst2[12].innerText;
    var ms8 = trLst2[13].textContent || trLst2[13].innerText;
    var ms9 = trLst2[14].textContent || trLst2[14].innerText;
    var ms10 = trLst2[15].textContent || trLst2[15].innerText;
    var ms11 = trLst2[16].textContent || trLst2[16].innerText;

    var multipleValues = [ms0, ms1, ms2, ms3, ms4, ms5, ms6, ms7, ms8, ms9, ms10, ms11];

    if (Filter(searchIn, searchValues, [], [], multipleIn, multipleValues)) {
        count += 1;
        trB1[i].style.display = "";
        trB2[i].style.display = "";
    } else {
        trB1[i].style.display = "none";
        trB2[i].style.display = "none";
    }
  }
  document.getElementById("qCount").innerHTML = count;
}

function MooredFilter() {
  var searchIn = document.getElementById("Input").value.toUpperCase();

  var multipleIn = [];

  var multipleLen = MSs.length;
  for (var x = 0; x < multipleLen; x++) {
      var item = document.getElementById(MSs[x][0]);
      var itemsHold = [];

      var itemLen = item.length;
      for (var y = 0; y < itemLen; y++) {
        if (item[y].selected) {
            itemsHold.push(item[y].text);
        }
      }
      multipleIn.push(itemsHold);
  }

  var body1 = document.getElementById("body1");
  var trB1 = body1.getElementsByTagName("tr");
  var body2 = document.getElementById("body2");
  var trB2 = body2.getElementsByTagName("tr");

  var count = 0;

  var len = trB1.length;

  for (i = 0; i < len; i++) {
    var trLst1 = trB1[i].getElementsByTagName("td");
    var trLst2 = trB2[i].getElementsByTagName("td");

    //For search bar
    var search0 = trLst1[1].textContent || trLst1[1].innerText;
    var search1 = trLst1[2].textContent || trLst1[2].innerText;
    var search2 = trLst1[4].textContent || trLst1[3].innerText;
    var search3 = trLst1[5].textContent || trLst1[4].innerText;

    var searchValues = [search0, search1, search2, search3];

    //For multiple select
    var ms0 = trLst1[0].textContent || trLst1[0].innerText;
    var ms1 = trLst1[3].textContent || trLst1[3].innerText;
    var ms2 = trLst2[2].textContent || trLst2[2].innerText;
    var ms3 = trLst2[7].textContent || trLst2[7].innerText;
    var ms4 = trLst2[8].textContent || trLst2[8].innerText;
    var ms5 = trLst2[9].textContent || trLst2[9].innerText;
    var ms6 = trLst2[10].textContent || trLst2[10].innerText;
    var ms7 = trLst2[11].textContent || trLst2[11].innerText;
    var ms8 = trLst2[12].textContent || trLst2[12].innerText;
    var ms9 = trLst2[13].textContent || trLst2[13].innerText;
    var ms10 = trLst2[14].textContent || trLst2[14].innerText;
    var ms11 = trLst2[15].textContent || trLst2[15].innerText;
    var ms12 = trLst2[16].textContent || trLst2[16].innerText;
    var ms13 = trLst2[17].textContent || trLst2[17].innerText;
    var ms14 = trLst2[18].textContent || trLst2[18].innerText;
    var ms15 = trLst2[19].textContent || trLst2[19].innerText;
    var ms16 = trLst2[20].textContent || trLst2[20].innerText;
    var ms17 = trLst2[21].textContent || trLst2[21].innerText;
    var ms18 = trLst2[22].textContent || trLst2[22].innerText;

    var multipleValues = [ms0, ms1, ms2, ms3, ms4, ms5, ms6, ms7, ms8, ms9, ms10, ms11, ms12, ms13, ms14, ms15, ms16, ms17, ms18];

    if (Filter(searchIn, searchValues, [], [], multipleIn, multipleValues)) {
        count += 1;
        trB1[i].style.display = "";
        trB2[i].style.display = "";
    } else {
        trB1[i].style.display = "none";
        trB2[i].style.display = "none";
    }
  }
  document.getElementById("qCount").innerHTML = count;
}

function clearSurfaceFilters() {
    document.getElementById("Input").value = "";

    var filters = ["RBSN", "RBCN", "GSN", "RCS", "Coastal", "CRD"];
    var filtersLen = filters.length;
    for (var i = 0; i < filtersLen; i++) {
        let element = document.getElementById(filters[i]);

        element.value = element.options[0].text;
    }

    var MSsLen = MSs.length;
    for (var j = 0; j < MSsLen; j++) {
        let element = document.getElementById(MSs[j][0]);
        element.value = "";
    }

    setMultipleSelects(MSs);

    SurfaceFilter();
}

function clearMooredFilters() {
    document.getElementById("Input").value = "";

    var MSsLen = MSs.length;
    for (var j = 0; j < MSsLen; j++) {
        let element = document.getElementById(MSs[j][0]);
        element.value = "";
    }

    setMultipleSelects(MSs);

    MooredFilter();
}

function clearAVOSFilters() {
    document.getElementById("Input").value = "";

    var MSsLen = MSs.length;
    for (var j = 0; j < MSsLen; j++) {
        let element = document.getElementById(MSs[j][0]);
        element.value = "";
    }

    setMultipleSelects(MSs);

    AVOSFilter();
}

function clearMobileFilters() {
    document.getElementById("Input").value = "";

    var MSsLen = MSs.length;
    for (var j = 0; j < MSsLen; j++) {
        let element = document.getElementById(MSs[j][0]);
        element.value = "";
    }

    setMultipleSelects(MSs);

    MobileFilter();
}
