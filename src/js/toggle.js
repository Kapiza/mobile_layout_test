// const burger = document.getElementById('burgerBtn');
// const drawer = document.getElementById('mobileDrawer');

// function toggleDrawer() {
//     const isOpen = drawer.classList.toggle('open');
//     burger.classList.toggle('open', isOpen);
//     burger.setAttribute('aria-expanded', isOpen);
//     document.body.classList.toggle('no-scroll', isOpen);
// }

// burger.addEventListener('click', toggleDrawer);

// drawer.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', () => {
//         if (drawer.classList.contains('open')) toggleDrawer();
//     });
// });

// window.addEventListener('resize', () => {
//     if (window.innerWidth > 600 && drawer.classList.contains('open')) {
//         toggleDrawer();
//     }
// });

const menuButton = document.querySelector('.Menu_Button');
const menu = document.querySelector('.Menu');

menuButton.addEventListener('click', () => {
    console.log('Menu button clicked');
    menu.classList.toggle('Active');
    menuButton.classList.toggle('Active');
    // document.body.classList.toggle('no-scroll', menu.classList.contains('Active'));
})