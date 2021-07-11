import logoImage from './logo.png';
import gitLogoImage from './gitLogo.png';
import itembuild from './itembuild'
import homePage from './home';
import locationPage from './location';


function webpage(){
    const content = document.querySelector('#content')

    
    function createTitleElement(){
       const h1 = document.createElement('h1');
       h1.textContent="Akali's Ramen Build ";

       return h1
    }


    function createLogo(){
        const logo = document.createElement('img');
        logo.src = logoImage
        logo.classList.add('logoImg');

        return logo
    }


    function createTabs(){
        const tabs = document.createElement('div');
        const tabHome = document.createElement('div');
        const tabMenu = document.createElement('div');
        const tabContact = document.createElement('div');

        tabHome.textContent='Home';
        tabMenu.textContent='Item Build';
        tabContact.textContent='Location';

        tabs.classList.add('tabs');
        tabHome.classList.add('home');
        tabMenu.classList.add('menu');
        tabContact.classList.add('contact');

        tabMenu.addEventListener('click',()=>{
            content.innerHTML="";
            content.append(createTitleElement(), createLogo(), createTabs(), createFooter(), itembuild() )
        })
        tabHome.addEventListener('click', ()=>{
            content.innerHTML="";
            content.append(createTitleElement(), createLogo(), createTabs(), createFooter(), homePage() )
        })
        tabContact.addEventListener('click',()=>{
            content.innerHTML="";
            content.append(createTitleElement(), createLogo(), createTabs(), createFooter(), locationPage() )
        })

        tabs.append(tabHome, tabMenu, tabContact)

        
        return tabs
    }


    function createFooter(){
        const footerContainer = document.createElement('div');
        const gitLogo = new Image();
        const footer = document.createElement('div');

        gitLogo.src = gitLogoImage;
        footer.textContent = "Copyright © 2021 NDC";

        footerContainer.classList.add('footerBox')
        gitLogo.classList.add('gitLogoImage')
        footer.classList.add('footer');

        gitLogo.onclick = function(){
            window.location.href = 'https://github.com/NDCsGitHub';
        }

        footerContainer.append(footer, gitLogo)
        
        return footerContainer
    }

    function loadInitialPage(){
        content.append(createTitleElement(), createLogo(), createTabs(), createFooter(), homePage() )
    }




    return{
        loadpage: loadInitialPage(),
    }



}





export default webpage