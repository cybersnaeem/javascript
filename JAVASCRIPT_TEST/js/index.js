var userArray = [];


if(localStorage.getItem('userData')){
    userArray = JSON.parse(localStorage.getItem('userData'));
}


function register(){

    var userName = document.getElementById('uname').value;
    var userEmail = document.getElementById('uemail').value;
    var userConfirm = document.getElementById('ucemail').value;
    var userDegree = document.getElementById('udegree').value;
    var userBday = document.getElementById('userBday').value;
    var userCountry = document.getElementById('ucountry').value;
    var userState = document.getElementById('ustate').value;
    var userCity = document.getElementById('ucity').value;

    

    if(userName == null || userName ==""){
        document.getElementById('unameErr').style.display ="block";
        return false;
    }
    else{
        document.getElementById('unameErr').style.display ="none";
    }

    if(userEmail == null || userEmail =="" ){
        document.getElementById('uemailErr').style.display ="block";
        return false;
    }
    else{
        
        if (!/([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g.test(userEmail))
        {
            alert("Allow Only Gmail Emails!");
        }
        
    }

    if(userConfirm == null || userConfirm ==""){
        document.getElementById('uemailconfirmErr').style.display ="block";
        return false;
    }

    if(userEmail != userConfirm){
        alert("Email And Confirm Email Must Be Same..");
        return false;
    }


    if(userDegree == "Select Degree"){
        document.getElementById('udegreeErr').style.display ="block";
        return false;
    }
    else{
        document.getElementById('udegreeErr').style.display ="none";
    }
    
    if(userBday == null || userBday ==""){
        document.getElementById('ubdayErr').style.display ="block";
        return false;
    }
    else{
        document.getElementById('ubdayErr').style.display ="none";
    }

    if(userCountry == "Select Country"){
        document.getElementById('ucountryErr').style.display ="block";
        return false;
    }
    else{
        document.getElementById('ucountryErr').style.display ="none";
    }

    if(userState == "Select State"){
        document.getElementById('ustateErr').style.display ="block";
        return false;
    }
    else{
        document.getElementById('ustateErr').style.display ="none";
    }

    if(userCity == null || userCity ==""){
        document.getElementById('ucityErr').style.display ="block";
        return false;
    }
    else{
        document.getElementById('ucityErr').style.display ="none";
    }

    const userObj = {
        userName:userName,
        userEmail:userEmail,
        userDegree:userDegree,
        userBday:userBday,
        userCountry:userCountry,
        userState:userState,
        userCity:userCity
    }

    if(!localStorage.getItem('userData')){
        userArray.push(userObj); 
        localStorage.setItem('userData',JSON.stringify(userArray));
        document.getElementById('message').style.display = "block";
        document.getElementById('msg').innerHTML = "User Added SuccessFully!!.";
        fieldBlank();
     }
     else{
         //userArray[0].userEmail
         for(var i=0; i<userArray.length;i++){
            if(userEmail == userArray[i].userEmail){
                document.getElementById('message').style.display = "block";
                document.getElementById('msg').innerHTML = "User Email Already Exist !!.";
                return false;
            }
         }

        
         userArray.push(userObj); 
         localStorage.setItem('userData',JSON.stringify(userArray));
         document.getElementById('message').style.display = "block";
         document.getElementById('msg').innerHTML = "User Added SuccessFully !!.";
         fieldBlank();
    }

}

function fieldBlank(){
    document.getElementById('uname').value = null;
    document.getElementById('uemail').value = null;
    document.getElementById('ucemail').value = null;
    document.getElementById('udegree').value = null;
    document.getElementById('userBday').value = null;
    document.getElementById('ucountry').value = null;
    document.getElementById('ustate').value =null;
    document.getElementById('ucity').value = null;   
}