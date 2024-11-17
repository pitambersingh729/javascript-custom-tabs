let tabList = document.querySelectorAll('.tabs .tab-link');
let tabContent = document.querySelectorAll('.tab');

tabList.forEach(function(tab){
  tab.addEventListener('click', function(){
    // Store the data-target attribute of the clicked tab
    let currentAtt = tab.getAttribute('data-target');

    // Store the clicked tab
    let currentTab = tab;

    for (let i = 0; i < tabContent.length; i++) {
      // Store the data-target attribute of the tab content
      let tabContAtt = tabContent[i].getAttribute('data-target');
      //console.log(tabContAtt);
      if(currentAtt === tabContAtt){

        // Remove the active class from the previous tab and tab content
        for (x = 0; x < tabList.length; x++) {
          tabList[x].classList.remove('active');
          tabContent[x].classList.remove('active');
        }

        // Add the active class to the current tab
        currentTab.classList.add('active');

        // ADD THE active class to the current tab
        tabContent[i].classList.add('active');
      }
    }
  })
});