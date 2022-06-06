
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track =  document.querySelector('.slider-track');  
const item = document.querySelector('.slider-item');  
const btnPrev = document.querySelector('.btn-prev');  
const btnNext =  document.querySelector('.btn-next');  
const itemWidth = container.clientWidth / slidesToShow;

// item.each(function (index, item){
//   $(item).css({
//     minWidth: itemWidth,
//   });
// })

item.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;    
});

