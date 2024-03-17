

// counter section js
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
         let counterobj = document.getElementById(id),
         current = start,
         range = end - start,
         increment = end > start ? 1 :  -1,
         step = Math.abs(Math.floor(duration / range)),
         timer = setInterval(()=>{
              current += increment;
              counterobj.textContent = current;
              if(current == end){
                   clearInterval(timer);
              };
         },step)
    }
    counter("counter1", 0 , 3 , 3500);
    counter("counter2" , 0 , 84 , 6500);
    counter("counter3", 0 , 4 ,  3000);
    counter("counter4", 0 , 5 , 5500);
})




 var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      loop: true,
      autoplaySpeed:2000,
      autoplay: {
          delay: 3000
      },
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });