window.addEventListener("scroll", function(){
    let header = document.querySelector(".header");
  
    if (this.window.pageYOffset > 0){
      header.classList.add("sticky");
    }
  
    else{
      header.classList.remove("sticky");
    }
});

window.addEventListener("scroll", function(){
    let header = document.querySelector(".header-menu");
  
    if (this.window.pageYOffset > 0){
      header.classList.add("sticky");
    }
  
    else{
      header.classList.remove("sticky");
    }
});