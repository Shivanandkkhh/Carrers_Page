const tabs = document.querySelectorAll('.tablinks');
const tabcontent = document.querySelectorAll('.position-grid');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        for (let j = 0; j < tabcontent.length; j++) {
            tabcontent[j].classList.remove('tab-content-active');
        }
        for (let k = 0; k < tabs.length; k++) {
            tabs[k].classList.remove('active');
        }
        tabcontent[i].classList.add('tab-content-active');
        tabs[i].classList.add('active');
    })
}