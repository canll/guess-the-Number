console.log("****project--One--*****")


let devam;
let sonuc = document.querySelector('#check');
let numbers =document.querySelector('#guess')
let baslik = document.querySelector('.guess')
let kalanHak = document.querySelector('.hak')
let hak = 6;
let reset = document.querySelector('.reset')
let higher = document.querySelector('.higher')
let lower = document.querySelector('.lower')



    

const guessingGame = Math.floor(Math.random()*100 +1);
    console.log(guessingGame);
   
   
        sonuc.addEventListener('click',(e) => {
        e.preventDefault();
        hak -=1
        if(hak < 0){
            baslik.innerHTML='GAME OVER'
            kalanHak.innerHTML=` 0 chances`
            
            
        }else{
            if(numbers.value == guessingGame){
                
                baslik.innerHTML= "✨✨Congratulations✨✨"
                kalanHak.innerHTML=`✨✨✨✨ ✨✨✨✨✨✨
                `
            }else{
                if(numbers.value > guessingGame){

                    // baslik.innerHTML=`enter a lower number`
                    
                    kalanHak.innerHTML=` ${hak} chances`
                }else{
                    // baslik.innerHTML=`enter a higher number`
                    
                    kalanHak.innerHTML=` ${hak} chances`
                }

            }
        }

        if(numbers.value > guessingGame ){
               higher.innerHTML= `${numbers.value}`
        }else{
            lower.innerHTML =` ${numbers.value}`
        }
        
        
       
        
    });
      
    reset.addEventListener("click", ()=>{
        window.location.reload()
    });
    


  
       
    
   
    















 