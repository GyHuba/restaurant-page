export default function homePage(){

    const main = document.createElement('div');
    main.classList.add('main');

    //ABOUT US
    const ourRestaurant = document.createElement('div');
    ourRestaurant.className = ('our-restaurant');
    const ourRestTitle = document.createElement('div');
    ourRestTitle.innerText = 'About us';
    const description = document.createElement('div');
    description.innerText = 'In Hungary we really like the fatty, yummy, spicy foods. Think about the langos, gulash, fish soup, paprikash. We make our food from traditional recipies and with fresh ingredients, with love. This is why we have so many chubby people in Hungary. Theese guys cant be wrong. If you wan to make your one of the best decision ever, lets try us!';
    ourRestaurant.append(ourRestTitle, description);
    
    //OPENING HOURS
    const openingHours = document.createElement('div');
    openingHours.className = ('opening-hours');
    const openingTitle = document.createElement('div');
    openingTitle.innerText = 'Opening hours';
    const openingHoursContainer = document.createElement('div');
    openingHours.classList.add('opening-container');
    openingHours.append(openingTitle, openingHoursContainer);

    const opening = {
        Monday: '11-22',
        Tuesday: '11-22',
        Wednesday: '11-22',
        Thursday: '11-22',
        Friday: '11-22',
        Saturday: '10-24',
        Sunday: '10-24'
    }
    for(let i = 0; i < Object.values(opening).length; i++){
        const openingHoursPerDay = document.createElement('div');
        openingHoursPerDay.innerText = `${Object.keys(opening)[i]} : ${Object.values(opening)[i]}`;
        openingHoursContainer.append(openingHoursPerDay);
    }

    const location = document.createElement('div');
    const locationTitle = document.createElement('div');
    locationTitle.innerText = 'Location';
    const locationText = document.createElement('div');
    locationText.innerText = '14050 W Andrew Johnson Hwy'
    location.append(locationTitle, locationText)

    location.className = ('location');


    const footer = document.createElement('div');

    main.append(ourRestaurant, openingHours, location);

    return main
}