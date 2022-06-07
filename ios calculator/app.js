const sonuc1 = document.querySelector(".sonuc1")
const sonuc2 = document.querySelector(".sonuc2")
let contents = document.querySelector(".contents")

 contents.addEventListener("click",(e) =>{
     
     if (e.target.classList.contains("numbers")) {
         sonuc2.innerHTML += e.target.innerHTML;

     }
     else if (e.target.classList.contains("op")){
      if(sonuc2.innerHTML == ""){
         sonuc2.innerHTML = "";
         }else{
         sonuc1.innerHTML = sonuc2.innerHTML + " " + e.target.innerHTML;
         sonuc2.innerHTML = "";
        }
     }
     else if(e.target.classList.contains("delete")){
        window.location.reload();
     }
     else if(e.target.classList.contains("percent")){
      if(sonuc2.innerHTML == ""){
         sonuc2.innerHTML = "";
         }else{
      sonuc2.innerHTML= (parseFloat(sonuc2.innerHTML)/100).toFixed(1)
        }
   }
      else if(e.target.classList.contains("changer")){
              if(sonuc2.innerHTML == ""){
              sonuc2.innerHTML = "";
              }else{
         sonuc2.innerHTML=sonuc2.innerHTML * -1
      }
      }
      else if(e.target.classList.contains("content18")){
         if(sonuc2.innerHTML == ""){
         sonuc2.innerHTML = "";
         }else{
            sonuc2.innerHTML += ".";
      }
      }
 
      else if (e.target.classList.contains("sonuc")){
         calc()
      }
});
 function calc(){
    if (sonuc1.innerHTML.slice(-1) == "/"){
        sonuc2.innerHTML= sonuc1.innerHTML.slice(0 , -1) / sonuc2.innerHTML;
        sonuc1.innerHTML="";
    }
    else if (sonuc1.innerHTML.slice(-1) == "x"){
      sonuc2.innerHTML= sonuc1.innerHTML.slice(0 , -1) * sonuc2.innerHTML;
      sonuc1.innerHTML="";
    }
    else if (sonuc1.innerHTML.slice(-1) == "-"){
      sonuc2.innerHTML= sonuc1.innerHTML.slice(0 , -1) - sonuc2.innerHTML;
      sonuc1.innerHTML="";
    }
    else if (sonuc1.innerHTML.slice(-1) == "+"){
      sonuc2.innerHTML= parseFloat(sonuc1.innerHTML.slice(0 , -1)) + parseFloat(sonuc2.innerHTML);
      sonuc1.innerHTML="";
    }
    
 }


