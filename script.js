function sendRequest(){

    var request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:8000/api/users');
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200){
            var response = request.responseText;
            fillTable(JSON.parse(response));
        }
    }
}

function fillTable(data) {
    var table = document.getElementById("my-table");
    var tbody = table.querySelector("tbody");
    tbody.innerHTML = "<th>Id</th><th>Name</th><th>Address</th><th>Phone</th>";
    data.forEach(function(item) {
        var tr = document.createElement("tr");
        for (var key in  item) {
            var td = document.createElement("td");
            td.textContent = item[key];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
}

