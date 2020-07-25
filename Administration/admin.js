const generateTable = (table, data) => {
    for (let element of data) {
        let now = table.insertRow()
        for (Key in element) {
            let cell = row.insertCell()
            let text = document.createTextNode(element[Key])
            cell.appendChild(text);
        }
        //Ajouter Button cell
        cell = row.insertCell(-1);
        var btnRemove = document.createElement("INPUT");
        btnRemove.type = "button";
        btnRemove.value = "Remove";
        btnRemove.setAttribute("onclick", "Remove(this);");
        cell.appendChild(btnRemove);
    }
}

function Remove(button) {
    //déterminer la référence de la ligne utiliser par le button
    var row = button.parentNode.parentNode;
    var tag = row.getElementsByTagName("TD")[0].innerHTML;
    if (confirm("Veux tu supprimer:" + tag)) {
        //avoir la référence de la table
        var table = document.getElementById("myTable");
        // delete the table row using it's Index
        table.deleteRow(row.rowIndex);

    }
}
const compare = function(ids, asc) {
    return function(row1, row2) {
        const tdValue = function(row, ids) {
            return row.children[ids].textContent;
        }
        const tri = function(v1, v2) {
            if (v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)) {
                return v1 - v2;
            } else {
                return v1.toString().localeCompare(v2);
            }
            return v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
        };
        return tri(tdValue(asc ? row1 : row2, ids), tdValue(asc ? row2 : row1, ids));
    }
}

const tbody = document.querySelector('tbody');
const thx = document.querySelectorAll('th');
const trxb = tbody.querySelectorAll('tr');
thx.forEach(function(th) {
    th.addEventListener('click', function() {
        let classe = Array.from(trxb).sort(compare(Array.from(thx).indexOf(th), this.asc = !this.asc));
        classe.forEach(function(tr) {
            tbody.appendChild(tr)
        });
    })
});