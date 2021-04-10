

function validate(){
    
    var email = document.getElementById("exampleInputEmail1").value;
    var pwd = document.getElementById("exampleInputPassword1").value;
    formvalid(email,pwd,callback);
    
}
function formvalid(email,pwd,callback){
    
    if (email.trim()==""||pwd.trim()==""){
            alert("Fields cannot be empty");
            return false;
        }
    else if(email=="admin"&& pwd=="12345"){
            alert("Validation approved");
            callback();
        }
   
}

function callback(){
    
    var formaccess = document.getElementById("shuu");
    formaccess.setAttribute("action","mainpage.html");
    
    return false;
}

    // if (email.value.trim()==""||pwd.value.trim()==""){
    //     alert("Fields cannot be empty");
    //     return false;
    // }
    // else if(email.value=="admin"&& pwd.value=="12345"){
    //     alert("Validation approved");
    //     callback();
    // }


