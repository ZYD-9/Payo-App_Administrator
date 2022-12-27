function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "./data.json");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var trHTML = '';
            const objects = JSON.parse(this.responseText);
            for (let object of objects) {
                trHTML += '<tr>';
                trHTML += '<td>' + object['id'] + '</td>';
                trHTML += '<td>' + object['username'] + '</td >';
                trHTML += '<td>' + object['password'] + '</td>';
                trHTML += '<td>' + object['fname'] + '</td>';
                trHTML += '<td>' + object['lname'] + '</td>';
                trHTML += '<td>' + object['email'] + '</td>';
                trHTML += '<td><button type="button" class="btn btn-outline-success " onclick="showUserEditBox(' + object['id'] + ')">Edit</button>';
                trHTML += '<button type="button" class="btn btn-outline-danger  " onclick="userDelete(' + object['id'] + ')">Delete</button></td>';
                trHTML += "</tr>";
            }
            document.getElementById("mytable").innerHTML = trHTML;
        }
    };
}



loadTable();


function showUserCreateBox() {
    Swal.fire({
        title: 'Create user',
        html:
            '<input id="id" type="hidden">' +
            '<input id="fname" class="swal2-input" placeholder="First">' +
            '<input id="lname" class="swal2-input" placeholder="Last">' +
            '<input id="username" class="swal2-input" placeholder="Username">' +
            '<input id="email" class="swal2-input" placeholder="Email">',
        focusConfirm: false,
        preConfirm: () => {
            userCreate();
        }
    })
}   
