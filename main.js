let started = false
const slideContainer = document.querySelector('.testmonSlide');
const carousel = document.querySelector(".cartSlide")
const toggle = document.querySelector(".butonside .icon")
const  links =document.querySelector(" header .links")
const  linksLi =document.querySelector("header .links .linksList")
const  linksList =document.querySelectorAll("header .links .linksList .linksListLi")
const logo = document.querySelector('header .logo img');
const header = document.querySelector('header');


window.addEventListener('scroll', function() {
   
   
    const linksList=document.querySelectorAll(".linksListLi")
    const butonside=document.querySelectorAll(" .butonside .btn")
    const section = document.querySelector(".Achievement")
    const ratedProject = document.querySelectorAll(".ratedProject h2 span")



   
    if (window.scrollY >= header.offsetHeight) {
      header.classList.add('scrolled');
      logo.classList.add('scrolled');

    

        logo.src="https://agentieco.themetags.com/wp-content/uploads/2023/07/agentieco-logo-2-1.png"
   
     
      linksList.forEach((item)=>{
    item.classList.add('scrolled');
      })
      butonside[0].classList.add('scrolled');
    } else {
    
     
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        linksList.forEach((item)=>{
          item.classList.remove('scrolled');
            })
            logo.src="https://agentieco.themetags.com/wp-content/uploads/2023/07/agentieco-logo-2.png"
        
       
         console.log("h")
        butonside[0].classList.remove('scrolled');
      
     
    }
 
    if(window.scrollY >= section.offsetTop){
      if(!started){
        ratedProject.forEach((num)=>startCount(num))
       
      }
      started = true
    }
  });

 
  const startCount=(el)=>{
    let goal = el.dataset.goal
   const count = setInterval(()=>{
  el.textContent++
if(el.textContent == goal){
  clearInterval(count)
}
   },2000 / goal)
  }
 

function nextSlide() {
  slideContainer.style.transform = 'translateX(-100%)';
  slideContainer.appendChild(slideContainer.firstElementChild);
}
// 
setInterval(nextSlide, 4000);



const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;
let isDragging = false;
let startPosX = 0;
let currentTranslateX = 0;
let animationId = null;

function goToSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  currentTranslateX = -index * carousel.offsetWidth;
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
  goToSlide(currentIndex);
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % carousel.children.length;
  goToSlide(currentIndex);
}


carousel.addEventListener('mousedown', (event) => {
  isDragging = true;
  startPosX = event.clientX;
  currentTranslateX = -currentIndex * carousel.offsetWidth;

  cancelAnimationFrame(animationId);
});

carousel.addEventListener('mousemove', (event) => {
  if (!isDragging) return;

  const moveX = event.clientX - startPosX;
  const translateX = currentTranslateX + moveX;
  carousel.style.transform = `translateX(${translateX}px)`;
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;
  const moveX = -currentIndex * carousel.offsetWidth - currentTranslateX;

  if (moveX > 100) {
    showPrevSlide();
  } else if (moveX < -100) {
    showNextSlide();
  } else {
    goToSlide(currentIndex);
  }
});

carousel.addEventListener('mouseleave', () => {
  isDragging = false;
  goToSlide(currentIndex);
});
toggle.addEventListener(('click'),()=>{
// logo.style.display="none"

// console.log(header.classList)
 
  links.classList.toggle("active")
  if(links.classList.contains("active")){
    console.log("yes")
    document.querySelector(".toggleImg").classList.add("active")
  }
  else{
    console.log("no")
    document.querySelector(".toggleImg").classList.remove("active")
  }
  linksLi.classList.toggle("active")
})
// /console.log(linksList)
linksList.forEach((item)=>{
item.addEventListener(('click'),()=>{

})
})