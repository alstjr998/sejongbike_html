let images = document.querySelectorAll("#images > img");
let current = 0;

let carousel = function(n){
  for(let i = 0; i < images.length; i++){
    images[i].style.display = "none";
  }
  images[n].style.display = "block";
}
carousel(current);

let nextimg = function(){
  current += 1;
  if(current >= images.length){
    current = 0;
  }
  carousel(current);
}
setInterval(nextimg, 4000);