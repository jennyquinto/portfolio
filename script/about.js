const homeNav = document.getElementById('home');
const porfolioNav = document.getElementById('portfolio');
const aboutNav = document.getElementById('about');
const contactNav = document.getElementById('contact');
const navigationMenu = document.getElementById('navigationMenu');
const homePage = document.getElementById('homePage');
const porfolioPage = document.getElementById('porfolioPage');
const aboutPage = document.getElementById('aboutPage');
const contactPage= document.getElementById('contactPage');

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const pageLocation = Document.currentScript;
console.log(document.location.href);
menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!menuOpen) {
        menuBtn.classList.add('open');        
        navigationMenu.classList.remove('hidden');       
        menuOpen = true;
        if(document.location.href=="http://127.0.0.1:5500/index.html"){
            homeNav.classList.remove('hidden');
        }
        if(document.location.href=="http://127.0.0.1:5500/pages/about.html"){
            aboutNav.classList.remove('hidden');
        }
        if(document.location.href=="http://127.0.0.1:5500/pages/contact.html"){
            contactNav.classList.remove('hidden');
        }
        if(document.location.href=="http://127.0.0.1:5500/pages/portfolio.html"){
            porfolioNav.classList.remove('hidden');
        }
        
    } else {
        menuBtn.classList.remove('open');
        navigationMenu.classList.add('hidden');
        menuOpen = false;
    }
});
homePage.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.assign("/index.html");
    
});

aboutPage.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.assign("/pages/about.html");
    
});
porfolioPage.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.assign("/pages/portfolio.html");
    
});
contactPage.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.assign("/pages/contact.html");   
});