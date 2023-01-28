const icon = document.querySelector('.icon-menu')
const list= document.querySelector('.nav')
const iconClose = document.querySelector('.icon-close')


function openIcon() {
list.classList.add('nav')
list.classList.remove('list')
iconClose.classList.remove("icon-close")


  }

   
      function closeIcon(){
        list.classList.remove('nav')
        iconClose.classList.add("icon-close")
        list.classList.add('list')
      }
  
  
  icon.addEventListener("click", openIcon)
  iconClose.addEventListener("click", closeIcon)



