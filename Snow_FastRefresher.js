if (localStorage.getItem("counter") !== null){

    if(localStorage.getItem("counter") == 1){

        var stop = prompt("The Refresher Is Running, Do you Want To Stop It? (y/n) ");
        if(stop == 'y'){
            localStorage.removeItem("counter");
            location.reload();
        }else{
            
        }
    }


}else{
   


    var chooseTime= prompt("Please Enter a Timer from 13 to 100 in seconds");
    if(chooseTime > 12 && chooseTime<101){
         
        localStorage.setItem("counter" , 1);

        setInterval(myTimer, chooseTime * 1000); 
    
        
    
    
    
    }else{
    alert(("Please Enter a Timer from 12 to 100 in seconds"));
    }
    
        
     function myTimer() {
        
          var iframe = document.getElementById('gsft_main');//refresh the iframe only.
          iframe.src = iframe.src;
        }


}
