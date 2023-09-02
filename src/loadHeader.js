import pageLoad from "./pageLoad";

export default function loadHeader() {
    const content = document.querySelector('#content');

    function changeHeader(e){
        if(homeLi.classList.contains('active')) homeLi.classList.remove('active');
        else if(menuLi.classList.contains('active')) menuLi.classList.remove('active');
        else if(contactLi.classList.contains('active')) contactLi.classList.remove('active');
        e.target.classList.add('active');

        content.innerHTML = "";
        content.append(header)

        pageLoad();
    }

    const header = document.createElement('div');
    header.classList.add('header');
    const headerTitle = document.createElement('div');
    headerTitle.innerHTML = 'Keep It Hungarian';
    const headerUl = document.createElement('ul');
    const homeLi = document.createElement('li');
    homeLi.classList.add('active','home');
    homeLi.addEventListener('click', changeHeader);
    homeLi.innerHTML = 'Home';
    const menuLi = document.createElement('li');
    menuLi.classList.add('menu');
    menuLi.addEventListener('click', changeHeader);
    menuLi.innerHTML = 'Menu';
    const contactLi = document.createElement('li');
    contactLi.classList.add('contact');
    contactLi.addEventListener('click', changeHeader);
    contactLi.innerHTML = 'Contact';
    headerUl.append(homeLi, menuLi, contactLi);
    header.append(headerTitle, headerUl);
    content.append(header);
}

