
function displayUsers(){

    $table =   `<table class="table table-responsive">`;
    $table += `<thead><tr><th>User Name</th><th>User Email</th><th>Degree</th><th>Date Of Birth</th><th>Country</th><th>State</th><th>City</th></tr></thead>`;

    if(localStorage.getItem('userData')!=null){
        var userData = JSON.parse(localStorage.getItem('userData'));
        userData.forEach((user,index) =>{
            $table += `<tbody><tr><td scope=row>${user['userName']}</td><td>${user['userEmail']}</td><td>${user['userDegree']}</td><td>${user['userBday']}</td><td>${user['userCountry']}</td><td>${user['userState']}</td><td>${user['userCity']}</td></tr></tbody>`;
        })

    }
    
    $table += "</table>";

    document.getElementById('tableContent').innerHTML= $table;
}

displayUsers();