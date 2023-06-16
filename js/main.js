var inpt =document.querySelectorAll(".page");
var btn = document.getElementById("log");



btn.addEventListener("click",function(){
    inpt.forEach(function(e){
       var b=e.value;
        if(b==""){
            e.parentNode.nextElementSibling.classList.add("view");
         }
         else{
         e.parentNode.nextElementSibling.classList.remove("view");
        }
    })
     var pass = document.getElementById("pass");
     var cpass=document.getElementById("cpass");
     var names=cpass.value;
    var name =pass.value;
    var c=name.split("");
    var s=0;
    var len=c.length;
    c.forEach(function(element){
        
            if(element==" "){
             s++;  
            }})
            if(s>=1){
                pass.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("view");
            }
            else{
                pass.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove("view");
            }
           
            if(len<8){
                pass.parentNode.nextElementSibling.nextElementSibling.classList.add("view");
            }
            else{
                pass.parentNode.nextElementSibling.nextElementSibling.classList.remove("view");
            }
            if(name!==names){
                cpass.parentNode.nextElementSibling.nextElementSibling.classList.add("view");
            }
            else{
                cpass.parentNode.nextElementSibling.nextElementSibling.classList.remove("view");
            }


           
            var f=document.getElementById("n");
            var h=f.value;
            localStorage.setItem("Name",h);
            localStorage.setItem("password",name);

            var view =document.getElementsByClassName("view");
            var length=view.length;

            if(length==0){
                btn.nextElementSibling.classList.add("view");
            }
 
})


