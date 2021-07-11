import homeContentImage from './homeContent.jpg'

function homePage(){
    
    function createPageContent(){
        const pageContent = document.createElement('div');
        pageContent.textContent="Welcome, this mini project is suppose to be a simple website for a restaurant. However, this will instead be used as an attemp to make a mini guide for akali for patch 11.14";
        pageContent.classList.add('pageContent');

        return pageContent
    }


    function createPageImg(){
        const homeContentImg = new Image();
        homeContentImg.src = homeContentImage;
        homeContentImg.classList.add('homeContentImg')

        return homeContentImg
    }

    function homepageContainer(){
        const homepageContainer = document.createElement('div');
        homepageContainer.classList.add('homepageContainer')
        homepageContainer.append(createPageContent(), createPageImg());

        return homepageContainer
    }


    return homepageContainer()

};


export default homePage