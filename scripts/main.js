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

// let count = 1;
// document.getElementById("radio1").checked = true;

// setInterval(() => {
//   nextImage()
// }, 5000);

// function nextImage(){
//   count++;
//   if(count > 3){
//     count = 1;
//   }

//   document.getElementById("radio"+count).checked = true;
// }