const tabsBtn = document.querySelectorAll(".blog__tabs-item");
const tabsItems = document.querySelectorAll(".blog__tab-contents-item");
const tabsTitle = document.querySelectorAll(".blog__tabs-item-title");
tabsBtn.forEach(onTabClick);

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);
      let currentTitle = currentBtn.lastElementChild;

      if (!currentBtn.classList.contains('active')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('active');
         });

         tabsItems.forEach(function (item) {
            item.classList.remove('active');
         });

         tabsTitle.forEach(function (item) {
            item.classList.remove('active');
         });

         currentTitle.classList.add('active');
         currentBtn.classList.add('active');
         currentTab.classList.add('active');
      }
   });
};

document.querySelector(".blog__tabs-item:nth-child(1)").click();