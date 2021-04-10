// function ajax(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){
//         if(this.readyState==4&&this.status==200){
//             document.getElementById("demo").innerHTML=this.responseText;
//         }
//     }
//     xhttp.open("GET","todos.json",true); 
//     xhttp.send();
// }

$(document).ready(function(){
    $.getJSON("https://jsonplaceholder.typicode.com/todos", function(result){
      var item="";  

    $.each(result,function(key,value){
        item += "<tr>";
        item += "<td>"+value.userId+"</td>";
        item += "<td>"+value.id+"</td>";
        item += "<td>"+value.title+"</td>";
        item +="</tr>";
        
        if (value.completed == false){

            item += "<td>"+'<input type="checkbox" disabled=true name="checkbox-' + value + 'id ="checkbox"' + value + '" value="' + value + '" class="custom" />' +"</td>";
        }else {
            item += '<td>' + '<input type="checkbox" name="checkbox-' + value + 'id ="checkbox"' + value + '" value="' + value + '" class="custom" />' + '  </td>';
        }
        item +="</tr>";
    });

        $("#table").append(item);


        $('input[type="checkbox"]').click(function(){

            if (check = $("input:checkbox:checked").length) {
                if (check == 5) {
                    alert(" 5 task is completed");
                }
            } else {
    
                alert("less than 5 task is completed");
                // alert("5 task not completed");
            }
    
        });


        
        function myfun(y){
        var promise = new Promise(function (resolve){
            if(y == true){
                tasknum++;
                if(tasknum == 5){
                    resolve();
                }
            }
            else{
                tasknum--;
            }
        });
        promise
        .then(function(){
            alert("Congrats! You completed five Tasks.");
        })
    }
});
});




$("#title").click(function()
    {
$("#title").hide(2000);
    });