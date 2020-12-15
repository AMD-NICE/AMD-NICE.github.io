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

function export_table_to_csv(filename) {
	var csv = [];
	var head = [];

    var table1, table2, tr1, tr2, i;

    head1 = document.getElementById("head1");
    head2 = document.getElementById("head2");
    body1 = document.getElementById("body1");
    body2 = document.getElementById("body2");

    trH1 = head1.getElementsByTagName("tr");
    trH2 = head2.getElementsByTagName("tr");
    trB1 = body1.getElementsByTagName("tr");
    trB2 = body2.getElementsByTagName("tr");

    header1 = trH1[0].querySelectorAll("th");
    header2 = trH2[0].querySelectorAll("th");

    HLen1 = header1.length;
    HLen2 = header2.length;
    HLen = HLen1 + HLen2;

    for (var h = 0; h < HLen; h++) {
        if (h < HLen1) {
            element = header1[h];
        } else {
            element = header2[h - HLen1];
        }
        var childrenLen = element.children.length;
        if (childrenLen > 0) {
            if (childrenLen > 1) {
                head.push(element.children[1].getElementsByClassName('placeholder')[0].textContent);
            } else {
                head.push(element.children[0].options[0].value);
            }
        } else {
            head.push(element.innerText);
        }
    }

    csv.push(head.join(","));

    var len = trB1.length;

    for (i = 0; i < len; i++) {
        var row = [], cols1 = trB1[i].querySelectorAll("td"), cols2 = trB2[i].querySelectorAll("td");

        if (trB1[i].style.display == "") {
                for (var j = 0; j < cols1.length; j++) {
                    row.push('\"' + cols1[j].innerText + '\"');
                }
                for (var j = 0; j < cols2.length; j++) {
                    row.push('\"' + cols2[j].innerText + '\"');

                }
		    csv.push(row.join(","));
        }
    }
    // Download CSV
    download_csv(csv.join("\n"), filename);
}
