export default function menuPage(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const foods = [
        {
            food: 'Gulash soup',
            price: 'EUR 7',
            description: 'Goulash (Hungarian: gulyás) is a soup or stew of meat and vegetables seasoned with paprika and other spices. Originating in Hungary, goulash is a common meal predominantly eaten in Central Europe but also in other parts of Europe.',
            class: 'gulash',
        },
        {
            food: 'Langos',
            price: 'EUR 6',
            description: 'Langos is a typical Hungarian food. Today it is a deep fried flatbread, but in the past it was made of the last bits of the bread-dough and baked at the front of the brick or clay oven, to be served hot as the breakfast of the bread-baking day.',
            class: 'langos',
        },
        {
            food: 'Paprikash',
            price: 'EUR 7',
            description: 'A Hungarian dish resembling goulash (a paprika-based potato stew), but without potatoes and using meat instead, often chicken and sometimes veal.',
            class: 'paprikash',
        },
        {
            food: 'Hungarian fish soup (Halászlé)',
            price: 'EUR 7',
            description: 'It is a hot soup prepared with mixed freshwater/river fish. Even though Hungary is not a “nation of fishermen”, the native fish soup is considered to be a national specialty.',
            class: 'fish-soup',
        },
        {
            food:'Lecho',
            price: 'EUR 7',
            description: 'Hungarian thick vegetable ragout or stew which traditionally contains yellow pointed peppers, tomato, onion, salt, and ground sweet and/or hot paprika.',
            class: 'lecso',
        },
    ]

    foods.forEach(food =>{
        const foodContainer = document.createElement('div');
        foodContainer.classList.add('food-container');
        const foodTitle = document.createElement('div')
        foodTitle.classList.add('food-title');
        foodTitle.innerText = food.food;
        const foodDescription = document.createElement('div')
        foodDescription.classList.add('food-description');
        foodDescription.innerHTML = food.description;
        const foodPics = document.createElement('div');
        foodPics.classList.add('food-pics', food.class)
        const foodPrice = document.createElement('div')
        foodPrice.classList.add('food-price');
        foodPrice.innerText = food.price;

        foodContainer.append(foodTitle, foodDescription,foodPics, foodPrice)
        menu.append(foodContainer)
    })

    return menu
}