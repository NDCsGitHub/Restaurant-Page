import mapImg from './map.png'



function locationPage(){


    function createPageContent(){
        const pageContent = document.createElement('div'); 
        pageContent.textContent = "Mid or Top"
        pageContent.classList.add('locationPageContent');

        return pageContent
    }

    function  createPageImg(){
        const locationContentImg = new Image();
        locationContentImg.src = mapImg;
        locationContentImg.classList.add('locationContentImg');
        return locationContentImg;
    }

    function locationPageContainer(){
        const locationPageContainer = document.createElement('div');
        locationPageContainer.classList.add('locationPageContainer')
        locationPageContainer.append(createPageContent(), createPageImg())

        return locationPageContainer;
    }

    return locationPageContainer()

}


export default locationPage