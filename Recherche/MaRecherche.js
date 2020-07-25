let Mes_adhérents = [
    { name: "Alex", lastname: "Diment", tel: 0615556676 },
    { name: "Paul", lastname: "Benz", tel: 0615556677 },
    { name: "Marie", lastname: "Bari", tel: 0615556678 },
]

const generateTableHead = (table, data) => {
    let thead = table.createThead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}
const generateTable = (table, daata) => {
    let row = table.insertRow()
    for (key in Element) {
        let cell = row.interCell()
        let text = document.createTextNode(Element[key])
        cell.appendChild(text)
    }
}

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.querySelector("#myInput");
    filter = input.nodeValue.toUpperCase();
    table = document.querySelector("#myTable");

}