function Filter() {
  var count, table, tr, i, nameIn, RBSNIn, RBCNIn, GSNIn, RCSIn, CoastalIn, TempIn, RHIn, BARIn, WindIn, AWGIn, SDIn;
  var td0, td01, td02, td03, td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, filter, prov;
  var txt0, txt01, txt02, txt03, txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11;

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
  nameIn = document.getElementById("Input").value.toUpperCase();
  table = document.getElementById("Table");
  tr = table.getElementsByTagName("tr");

  var Provs = "";
  for (var x = 0; x < document.getElementById("ProvList").options.length; x++) {
    if (document.getElementById("ProvList").options[x].selected) {
        Provs = Provs + document.getElementById("ProvList").options[x].text;
    }
  }

  count = 0;

  var len = tr.length;

  for (i = 0; i < len; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td01 = tr[i].getElementsByTagName("td")[1];
    td02 = tr[i].getElementsByTagName("td")[2];
    td03 = tr[i].getElementsByTagName("td")[3];
    td1 = tr[i].getElementsByTagName("td")[7];
    td2 = tr[i].getElementsByTagName("td")[8];
    td3 = tr[i].getElementsByTagName("td")[9];
    td4 = tr[i].getElementsByTagName("td")[10];
    td5 = tr[i].getElementsByTagName("td")[11];
    td6 = tr[i].getElementsByTagName("td")[14];
    td7 = tr[i].getElementsByTagName("td")[15];
    td8 = tr[i].getElementsByTagName("td")[16];
    td9 = tr[i].getElementsByTagName("td")[17];
    td10 = tr[i].getElementsByTagName("td")[18];
    td11 = tr[i].getElementsByTagName("td")[19];
    try {
        prov = tr[i].getElementsByTagName("td")[1].innerHTML.split("-")[2];
    } catch {
        prov = tr[i].getElementsByTagName("td")[1];
    }

    if (td0 && td01 && td02 && td03 && td1 && td2 && td3 && td4 && td5 &&
td6 && td7 && td8 && td9 && td10 && td11 && prov) {
        txt0 = td0.textContent || td0.innerText;
        txt01 = td01.textContent || td01.innerText;
        txt02 = td02.textContent || td02.innerText;
        txt03 = td03.textContent || td03.innerText;
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

        filter = (txt0.toUpperCase().indexOf(nameIn) > -1 || txt01.toUpperCase().indexOf(nameIn) > -1 ||
txt02.toUpperCase().indexOf(nameIn) > -1 || txt03.toUpperCase().indexOf(nameIn) > -1)&& txt1.indexOf(RBSNIn) > -1 &&
txt2.indexOf(RBCNIn) > -1 && txt3.indexOf(GSNIn) > -1 && txt4.indexOf(RCSIn) > -1 && txt5.indexOf(CoastalIn) > -1 &&
(TempIn == "" || txt6.trim() == TempIn) && (RHIn == "" || txt7.trim() == RHIn) &&
(BARIn == "" || txt8.trim() == BARIn) && (WindIn == "" || txt9.trim() == WindIn) &&
(AWGIn == "" || txt10.trim() == AWGIn) && (SDIn == "" || txt11.trim() == SDIn);
        if (filter && (Provs == "" || Provs.indexOf(prov) > -1)) {
            count += 1;
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
      }
    }
  }

  document.getElementById("qCount").innerHTML = count;
}

function clearFilter(id, selected) {
    let element = document.getElementById(id);
    element.value = selected;
}

function clearFilters() {
    clearFilter("Input", "");
    clearFilter("ProvList", "");
    $(function() {
        $('#ProvList').change(function() {
            console.log($(this).val());
        }).multipleSelect({
            width: '8vw'
        });
    });
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

    Filter();
}

function setFilters() {
    var mark1 = $('#marker1');
    var left1 = mark1.position().left;

    var mark2 = $('#marker2');

    var left2 = mark2.position().left;

    var filter1 = $('#filter1')[0];
    var filter2 = $('#filter2')[0];

    filter1.style.position = "absolute";
    filter2.style.position = "absolute";

    var buttons = $("#buttons");
    var top = buttons.position().top;


    filter1.style.left = left1 + 1.5;
    filter1.style.top = top;

    filter2.style.left = left2 + 1.5;
    filter2.style.top = top;


    var width1 = document.getElementById("marker1").offsetWidth;
    var x = document.getElementsByClassName("form-control1");
    var len1 = x.length;

    filter1.style.width = width1 * len1;

    var width2 = document.getElementById("marker2").offsetWidth;
    var y = document.getElementsByClassName("form-control2");
    var len2 = y.length;

    filter2.style.width = width2 * len2;
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
    try {
        setFilters();
    } catch {
    }
    setMode();

    var html = $('#main')[0];
    html.style.visibility = "visible";
}