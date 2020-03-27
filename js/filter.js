function IndexList(inputs, values) {
    var inLen = inputs.length;
    var valLen = values.length;

    var allEmpty = true;
    for (var ind = 0; ind < inLen; ind++) {
        if (inputs[ind] != "") {
            allEmpty = false;
        }
    }

    if (allEmpty) {

        return true;
    }

    for (var i = 0; i < valLen; i++) {
        txtHold = values[i].toUpperCase();
        if (inLen > 1) {
            if (i < (valLen -1)) {
                if (inputs[0] != "") {
                    if (txtHold.indexOf(inputs[0]) > -1) {

                        return true;
                    }
                }
            } else {
                if (inputs[1] != "") {
                    if (inputs[1].indexOf(txtHold) > -1) {

                        return true;
                    }
                }
            }
        } else {
            if (inputs[0] != "") {
                if (txtHold.indexOf(inputs[0]) > -1) {

                    return true;
                }
            }
        }
    }

    return false;
}

function MatchList(inputs, values) {
    var len = inputs.length;

    for (var j = 0; j < len; j++) {
        txtHold = values[j];

        if (txtHold != "  " && txtHold != "X") {
            txtHold = txtHold.trim()
        }

        if (inputs[j] != "" && inputs[j] != txtHold) {

            return false;
        }
    }

    return true;
}

function Filter(txtIns, txtValues, filterIns, filterValues) {

    return IndexList(txtIns, txtValues) && MatchList(filterIns, filterValues);
}

function SurfaceFilter() {
  var count, i, nameIn, RBSNIn, RBCNIn, GSNIn, RCSIn, CoastalIn, TempIn, RHIn, BARIn, WindIn, AWGIn, SDIn;
  var td00, td01, td02, td03, td04, td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, filter, prov;
  var txt00, txt01, txt02, txt03, txt04, txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11;
  var in1, val1, in2, val2;
  var body1, body2, trB1, trB2;

  nameIn = document.getElementById("Input").value.toUpperCase();

  RBSNIn = document.getElementById("RBSNList").value;
  RBCNIn = document.getElementById("RBCNList").value;
  GSNIn = document.getElementById("GSNList").value;
  RCSIn = document.getElementById("RCSList").value;
  CoastalIn = document.getElementById("CoastalList").value;
  TempIn = document.getElementById("TempList").value;
  RHIn = document.getElementById("RHList").value;
  BARIn = document.getElementById("BARList").value;
  WindIn = document.getElementById("10MList").value;
  AWGIn = document.getElementById("AWGList").value;
  SDIn = document.getElementById("SDList").value;

  body1 = document.getElementById("body1");
  trB1 = body1.getElementsByTagName("tr");
  body2 = document.getElementById("body2");
  trB2 = body2.getElementsByTagName("tr");

  var Provs = "";
  provList = document.getElementById("ProvList").options;

  for (var x = 0; x < provList.length; x++) {
    if (provList[x].selected) {
        Provs = Provs + provList[x].text;
    }
  }

  in1 = [nameIn, Provs];
  in2 = [RBSNIn, RBCNIn, GSNIn, RCSIn, CoastalIn, TempIn, RHIn, BARIn, WindIn, AWGIn, SDIn];

  count = 0;

  var len = trB1.length;

  for (i = 0; i < len; i++) {
    trLst1 = trB1[i].getElementsByTagName("td");
    trLst2 = trB2[i].getElementsByTagName("td");

    td00 = trLst1[0];
    td01 = trLst1[1];
    td02 = trLst1[2];
    td03 = trLst1[3];
    td04 = trLst1[4];

    td1 = trLst2[0];
    td2 = trLst2[1];
    td3 = trLst2[2];
    td4 = trLst2[3];
    td5 = trLst2[4];
    td6 = trLst2[8];
    td7 = trLst2[9];
    td8 = trLst2[10];
    td9 = trLst2[11];
    td10 = trLst2[12];
    td11 = trLst2[13];

    try {
        prov = td01.innerHTML.split("-")[2];
    } catch {
        prov = td01.innerHTML;
    }

    if (td00 && td01 && td02 && td03 && td04 && td1 && td2 && td3 && td4 && td5 && td6 && td7 && td8 && td9 && td10
&& td11 && prov) {
        txt00 = td00.textContent || td00.innerText;
        txt01 = td01.textContent || td01.innerText;
        txt02 = td02.textContent || td02.innerText;
        txt03 = td03.textContent || td03.innerText;
        txt04 = td04.textContent || td04.innerText;

        val1 = [txt00, txt01, txt02, txt03, txt04, prov];

        txt1 = td1.innerHTML;
        txt2 = td2.innerHTML;
        txt3 = td3.innerHTML;
        txt4 = td4.innerHTML;
        txt5 = td5.innerHTML;
        txt6 = td6.textContent || td6.innerText;
        txt7 = td7.textContent || td7.innerText;
        txt8 = td8.textContent || td8.innerText;
        txt9 = td9.textContent || td9.innerText;
        txt10 = td10.textContent || td10.innerText;
        txt11 = td11.textContent || td11.innerText;

        val2 = [txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11];

        if (Filter(in1, val1, in2, val2)) {
            count += 1;
            trB1[i].style.display = "";
            trB2[i].style.display = "";
        } else {
            trB1[i].style.display = "none";
            trB2[i].style.display = "none";
      }
    }
  }
  document.getElementById("qCount").innerHTML = count;
}


function MarineFilter() {
    var count, table1, table2, tr1, tr2, i;
    var nameIn, RegIn, BuoyIn, ProcessorIn, PrsIn, CompassIn, PTransIn, STransIn, TransIn, SubTransIn, GOESIn;
    var IridiumIn, ATempIn, WTempIn, WindIn, WindUSIn, WaveIn, SubWaveIn, MooringIn, FlocIn;
    var td00, td01, td02, td03, td04, td, td0, td01, td02, td03, td1, td2, td3, td4, td5, td6, td7, td8, td9, td10;
    var td11, td12, td13, td14, td15;
    var txt00, txt01, txt02, txt03, txt04, txt, txt0, txt01, txt02, txt03, txt1, txt2, txt3, txt4, txt5, txt6, txt7;
    var txt8, txt9, txt10, txt11;
    var tr1Lst, tr2Lst, in1, val1, in2, val2;

    nameIn = document.getElementById("Input").value.toUpperCase();

    RegIn = document.getElementById("RegList").value;

    BuoyIn = document.getElementById("BuoyList").value;
    ProcessorIn = document.getElementById("ProcessorList").value;
    PrsIn = document.getElementById("PrsList").value;
    CompassIn = document.getElementById("CompassList").value;
    PTransIn = document.getElementById("PTransList").value;
    STransIn = document.getElementById("STransList").value;
    TransIn = document.getElementById("TransList").value;
    SubTransIn = document.getElementById("SubTransList").value;
    GOESIn = document.getElementById("GOESList").value;
    IridiumIn = document.getElementById("IridiumList").value;
    ATempIn = document.getElementById("ATempList").value;
    WTempIn = document.getElementById("WTempList").value;
    WindIn = document.getElementById("WindList").value;
    WindUSIn = document.getElementById("WindUSList").value;
    WaveIn = document.getElementById("WaveList").value;
    SubWaveIn = document.getElementById("SubWaveList").value;
    MooringIn = document.getElementById("MooringList").value;
    FlocIn = document.getElementById("FlocList").value;

    in1 = [nameIn];
    in2 = [FlocIn, RegIn, MooringIn, BuoyIn, ProcessorIn, PrsIn, CompassIn, PTransIn, STransIn, TransIn, SubTransIn,
GOESIn, IridiumIn, ATempIn, WTempIn, WindIn, WindUSIn, WaveIn, SubWaveIn]

    body1 = document.getElementById("body1");
    body2 = document.getElementById("body2");
    trB1 = body1.getElementsByTagName("tr");
    trB2 = body2.getElementsByTagName("tr");

    count = 0;

    var len = trB1.length;

    for (i = 0; i < len; i++) {
        trB1Lst = trB1[i].getElementsByTagName("td")
        td00 = trB1Lst[0];
        td01 = trB1Lst[1];
        td02 = trB1Lst[2];
        td03 = trB1Lst[3];
        td04 = trB1Lst[4];

        trB2Lst = trB2[i].getElementsByTagName("td")
        td = trB2Lst[2]
        td0 = trB2Lst[7];
        td1 = trB2Lst[8];
        td2 = trB2Lst[9];
        td3 = trB2Lst[10];
        td4 = trB2Lst[11];
        td5 = trB2Lst[12];
        td6 = trB2Lst[13];
        td7 = trB2Lst[14];
        td8 = trB2Lst[15];
        td9 = trB2Lst[16];
        td10 = trB2Lst[17];
        td11 = trB2Lst[18];
        td12 = trB2Lst[19];
        td13 = trB2Lst[20];
        td14 = trB2Lst[21];
        td15 = trB2Lst[22];

        if (td00 && td01 && td02 && td03 && td04 && td && td0 && td1 && td2 && td3 && td4 && td5 && td6 && td7 &&
td8 && td9 && td10 && td11 && td12 && td13 && td14 && td15) {
            txt00 = td00.textContent || td00.innerText;
            txt01 = td01.textContent || td01.innerText;
            txt02 = td02.textContent || td02.innerText;
            txt03 = td03.textContent || td03.innerText;
            txt04 = td04.textContent || td04.innerText;

            txt = td.textContent || td.innerText;
            txt0 = td0.textContent || td0.innerText;
            txt1 = td1.textContent || td1.innerText;
            txt2 = td2.textContent || td2.innerText;
            txt3 = td3.textContent || td3.innerText;
            txt4 = td4.textContent || td4.innerText;
            txt5 = td5.textContent || td5.innerText;
            txt6 = td6.textContent || td6.innerText;
            txt7 = td7.textContent || td7.innerText;
            txt8 = td8.textContent || td8.innerText;
            txt9 = td9.textContent || td9.innerText;
            txt10 = td10.textContent || td10.innerText;
            txt11 = td11.textContent || td11.innerText;
            txt12 = td12.textContent || td12.innerText;
            txt13 = td13.textContent || td13.innerText;
            txt14 = td14.textContent || td14.innerText;
            txt15 = td15.textContent || td15.innerText;

            val1 = [txt01, txt02, txt04];
            val2 = [txt03, txt00, txt, txt0, txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11, txt12,
txt13, txt14, txt15];

            if (Filter(in1, val1, in2, val2)) {
                count += 1;
                trB1[i].style.display = "";
                trB2[i].style.display = "";
            } else {
                trB1[i].style.display = "none";
                trB2[i].style.display = "none";
            }
        }
    }
    document.getElementById("qCount").innerHTML = count;
}

function clearFilter(id, selected) {
    let element = document.getElementById(id);
    element.value = selected;
}

function clearSurfaceFilters() {
    clearFilter("Input", "");
    clearFilter("ProvList", "");
    clearFilter("RBSNList", "");
    clearFilter("RBCNList", "");
    clearFilter("GSNList", "");
    clearFilter("RCSList", "");
    clearFilter("CoastalList", "");
    clearFilter("TempList", "");
    clearFilter("RHList", "");
    clearFilter("BARList", "");
    clearFilter("10MList", "");
    clearFilter("AWGList", "");
    clearFilter("SDList", "");

    $(function() {
        $('#ProvList').change(function() {
            console.log($(this).val());
        }).multipleSelect({
        });
    });

    SurfaceFilter();
}

function clearMarineFilters() {
    clearFilter("Input", "");
    clearFilter("BuoyList", "");
    clearFilter("FlocList", "");
    clearFilter("RegList", "");
    clearFilter("ProcessorList", "");
    clearFilter("PrsList", "");
    clearFilter("CompassList", "");
    clearFilter("PTransList", "");
    clearFilter("STransList", "");
    clearFilter("TransList", "");
    clearFilter("SubTransList", "");
    clearFilter("GOESList", "");
    clearFilter("IridiumList", "");
    clearFilter("ATempList", "");
    clearFilter("WTempList", "");
    clearFilter("WindList", "");
    clearFilter("WindUSList", "");
    clearFilter("WaveList", "");
    clearFilter("SubWaveList", "");
    clearFilter("MooringList", "");

    MarineFilter();
}
