  var navclick = document.querySelector(".nav-click");
  var navlist = document.querySelector(".nav-list");
  
     navclick.addEventListener("click", function(){
        if(navlist.style.display == "none"){
            console.log(navlist.style.display)
            navlist.style.display = "block";}
            else {
                navlist.style.display= "none";
            }
    });
