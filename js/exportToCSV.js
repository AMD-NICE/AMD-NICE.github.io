function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

function export_table_to_csv(html, filename) {
	var csv = [];

	var  table, tr, RBSNIn, RBCNIn, GSNIn, RCSIn, CoastalIn, TempIn, RHIn, BARIn, WindIn, AWGIn, SDIn;
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

    var head = []

    for (var h = 0; h < tr[0].getElementsByTagName("th").length; h++) {
       head.push(tr[0].getElementsByTagName("th")[h].innerHTML);
    }

    csv.push(head.join(","));

    for (var i = 0; i < tr.length; i++) {
		var row = [], cols = tr[i].querySelectorAll("td, th");

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

            filter = (txt0.toUpperCase().indexOf(nameIn) > -1 || txt01.toUpperCase().indexOf(nameIn) > -1 ||
txt02.toUpperCase().indexOf(nameIn) > -1 || txt03.toUpperCase().indexOf(nameIn) > -1) && txt1.indexOf(RBSNIn) > -1 &&
txt2.indexOf(RBCNIn) > -1 && txt3.indexOf(GSNIn) > -1 && txt4.indexOf(RCSIn) > -1 && txt5.indexOf(CoastalIn) > -1 &&
(TempIn == "" || txt6.trim() == TempIn) && (RHIn == "" || txt7.trim() == RHIn) &&
(BARIn == "" || txt8.trim() == BARIn) && (WindIn == "" || txt9.trim() == WindIn) &&
(AWGIn == "" || txt10.trim() == AWGIn) && (SDIn == "" || txt11.trim() == SDIn);
            if (filter && (Provs == "" || Provs.indexOf(prov) > -1)){
                for (var j = 0; j < cols.length; j++) {
                    row.push(cols[j].innerText);

            }
		    csv.push(row.join(","));
		  }
		}
	  }
    // Download CSV
    download_csv(csv.join("\n"), filename);
}

document.getElementById("Export").addEventListener("click", function () {
    var html = document.querySelector("Table").outerHTML;
	export_table_to_csv(html, "export.csv");
});
