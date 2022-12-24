const animItems = document.querySelectorAll(`.ainim-items`)
if (animItems.length > 0) {
   window.addEventListener(`scroll`, animOnScroll)

   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index]
         const animItemHeight = animItem.offsetHeight
         const animItemOffSet = offset(animItem).top
         const animStart = 4
         let animItemPoint = window.innerHeight - animItemHeight / animStart
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart
         }
         if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
            animItem.classList.add(`activeAnim`)
         } else {
            if (!(animItem.classList.contains(`anim-no-hide`))) {
               animItem.classList.remove(`activeAnim`)
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }

   setTimeout(() => {
      animOnScroll()
   }, 300)
}