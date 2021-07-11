import nightharvester from './itembuildimg/NightHarvester.png';
import shoe from './itembuildimg/sorcerershoes.png';
import hourglass from './itembuildimg/hourglass.png';
import voidstaff from './itembuildimg/voidstaff.png';
import lichbane from './itembuildimg/lichbane.png';
import deathcap from './itembuildimg/deathcap.png';



function itembuild(){

    let itemLibrary=[
        {
            Name: "Night Harvester",
            Cost: "3200",
            Description:"This is the go-to when running Electrocute. Allows for good stats and deals tremendous amounts of damage as soon as you get it.",
            Img: nightharvester,
        },
        {
            Name:"Sorcerer's Shoe",
            Cost:"1100",
            Description:"always complete boots right after buying a Mythic Item. You can't go wrong with Sorcerer's Shoes. The flat magic penetration is really good against squishy teams.",
            Img: shoe,
        },
         {
            Name:"Zhonya's Hourglass",
            Cost:"2600",
            Description:"Very useful stasis in teamfights as it allows you to gain some time when you get collapsed on by the enemy. Plus it's a great counter to some champions' abilities like Zed's ult or Morgana's ult. I usually build Zhonya's Hourglass as 2nd or sometimes 3rd item.",
            Img:hourglass,
        },
        {
            Name:"Lich Bane",
            Cost:"3000",
            Description:"Perfect for an Electrocute one-shot build. Lich Bane gives an incredible amount of damage, that you can very easily proc with any basic Akali combo.",
            Img: lichbane,
        },
        {
            Name:"Void Staff",
            Cost:"2700",
            Description:"Usually a late game item. By this point, enemy team surely has bought a good amount of magic resist to negate your damage, especially hypercarries, so Void Staff becomes necessary",
            Img: voidstaff,
        },
        {
            Name:"Rabadon's Deathcap",
            Cost:"3600",
            Description:"Even though Rabadon's Deathcap has been nerfed this pre-season (higher cost and lower bonus damage), it's still a must for most AP assassins. However it's quite pricey, and gives no defensive stats whatsoever. enerally build this as a 4th or 5th item.",
            Img: deathcap,
        },
    ];


    function itembuildContainer(){

        const itembuildContainer = document.createElement('div');
        itembuildContainer.classList.add('itembuildContainer')
        itembuildContainer.textContent = 'This the main item build, glasscannon play style';

    
        itemLibrary.forEach(eachItem => {
    
            const itembuildCard = document.createElement('div');
            const itembuildName = document.createElement('div');
            const itembuildCost = document.createElement('div');
            const itembuildDescription = document.createElement('div');
            const itembuildImg = new Image();

            itembuildImg.src = `${eachItem.Img}`;
            itembuildName.textContent = `${eachItem.Name}`;
            itembuildCost.textContent = `Cost: ${eachItem.Cost}`;
            itembuildDescription.textContent = `${eachItem.Description}`

            itembuildCard.classList.add('itembuildCard');
            itembuildName.classList.add('itembuildName');
            itembuildCost.classList.add('itembuildCost');
            itembuildImg.classList.add('itembuildImg');
            itembuildDescription.classList.add('itembuildDescription')

            itembuildCard.append(itembuildName, itembuildCost, itembuildImg, itembuildDescription);
            itembuildContainer.append(itembuildCard);
        })

        return itembuildContainer
    };

        return itembuildContainer();

};




    
  


export default itembuild