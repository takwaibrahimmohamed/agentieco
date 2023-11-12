let started = false
const slideContainer = document.querySelector('.testmonSlide');
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('header .logo img');
    const linksList=document.querySelectorAll(".linksListLi")
    const butonside=document.querySelectorAll(" .butonside .btn")
    const section = document.querySelector(".Achievement")
    const ratedProject = document.querySelectorAll(".ratedProject h2 span")

    console.log(section.offsetTop)
    if (window.scrollY > 100) {
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
    console.log(goal)
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