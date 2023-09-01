import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";

export default function pageLoad(){
    const content = document.querySelector('#content');
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');


        if(home.classList.contains('active')) content.append(homePage());
        else if(menu.classList.contains('active')) content.append(menuPage());
        else if(contact.classList.contains('active')) content.append(contactPage());


}