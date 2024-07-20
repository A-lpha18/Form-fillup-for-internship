function number(){
    var a=document.getElementById("text").value;
    document.getElementById("print").innerHTML="You Have written character "+a.length+" Out of 200 characters";
    

}
function fillup(){      
    var mail=document.getElementById("Email").value;
    document.getElementById("mail").innerHTML=mail;
    
    var n1=document.getElementById("name").value;
    var number=document.getElementById("num1").value;
    var number1=document.getElementById("num2").value;
    var state=document.getElementById("s1").value;
    var branch=document.getElementById("bra").value;
    var file=document.getElementById("file").value;
    
    if(n1.length==null){
        alert("Write atleast 3 characters");
    }
    else if(n1.length<2){
        alert("Write atleast 3 characters");
    }
    else{
        if(number.length<9 || number.length>9){
            alert("Enter 10 digits numbers");
            return false;
            }
            // else{
            //     if(number1.length<9 || number1.length>9)
            //     {
            //       alert("Enter 10 digits numbers");
            //     }
            //     else{
            //         if(state==null){
            //          alert("Choose A option");
            //         }
            //         else{
            //           if(branch==null){
            //               alert("Choose A option");
            //          }
            //           else{
            //               if(file==null){
            //                   alert("Uplord your file");
            //               }
            //           }
            //          }
    //              }
    // }
            
}
}