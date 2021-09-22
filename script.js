var slides = [];
for(var i=0;i<5;i++){
  slides.push($("#"+i));
}
var pos = 4;

setInterval(function(){
  if(pos > 0){
    slides[pos--].fadeOut(800); 
  }else{
    pos = 4;
    slides[4].fadeIn(800,function(){
      for(var i=0;i<5;i++){
        slides[i].show();
      }
    });
  }
},5000);