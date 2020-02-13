function Filter() {
  var count, table, tr, i, nameIn, RBSNIn, RBCNIn, GSNIn, RCSIn, CoastalIn, TempIn, RHIn, BARIn, WindIn, AWGIn, SDIn;
  var td0, td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, filter, prov;
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
    td1 = tr[i].getElementsByTagName("td")[6];
    td2 = tr[i].getElementsByTagName("td")[7];
    td3 = tr[i].getElementsByTagName("td")[8];
    td4 = tr[i].getElementsByTagName("td")[9];
    td5 = tr[i].getElementsByTagName("td")[10];
    td6 = tr[i].getElementsByTagName("td")[13];
    td7 = tr[i].getElementsByTagName("td")[14];
    td8 = tr[i].getElementsByTagName("td")[15];
    td9 = tr[i].getElementsByTagName("td")[16];
    td10 = tr[i].getElementsByTagName("td")[17];
    td11 = tr[i].getElementsByTagName("td")[18];
    try {
        prov = tr[i].getElementsByTagName("td")[1].innerHTML.split("-")[2];
    } catch {
        prov = tr[i].getElementsByTagName("td")[1];
    }

    if (td1 && td2 && td3 && td4 && td5 && td6 && td7 && td8 && td9 && td10 && td11 && prov) {
        txt0 = td0.textContent || td0.innerText;
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

        filter = txt0.toUpperCase().indexOf(nameIn) > -1 && txt1.indexOf(RBSNIn) > -1 && txt2.indexOf(RBCNIn) > -1 &&
txt3.indexOf(GSNIn) > -1 && txt4.indexOf(RCSIn) > -1 && txt5.indexOf(CoastalIn) > -1 &&
(TempIn == "" || txt6.trim() == TempIn) && (RHIn == "" || txt7.trim() == RHIn) &&
(BARIn == "" || txt8.trim() == BARIn) && (WindIn == "" || txt9.trim() == WindIn) &&
(AWGIn == "" || txt10.trim() == AWGIn) &&
(SDIn == "" || txt11.trim() == SDIn);
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
            width: '150px'
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
