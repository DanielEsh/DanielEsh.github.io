const tabs = () => {

    let tabNav = document.querySelectorAll('.line-item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
}
tabs();


const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    centeredSlides: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
    breakpoints: {
        900: {
            slidesPerView: 2,
        },
        1450: {
            slidesPerView: 3,
        }
    }

})

const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
const showMenu = () => {
    menu.classList.toggle('menu-active')
    toggle.classList.toggle('toggled')
}

toggle.addEventListener('click', showMenu)