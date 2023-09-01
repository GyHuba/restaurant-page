export default function loadHeader() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    const headerTitle = document.createElement('div');
    headerTitle.innerHTML = 'Keep It Hungarian';
    const headerUl = document.createElement('ul');
    const homeLi = document.createElement('li');
    homeLi.classList.add('active','home');
    homeLi.innerHTML = 'Home';
    const menuLi = document.createElement('li');
    menuLi.classList.add('active','menu');
    menuLi.innerHTML = 'Menu';
    const contactLi = document.createElement('li');
    contactLi.classList.add('active','contact');
    contactLi.innerHTML = 'Contact';
    headerUl.append(homeLi, menuLi, contactLi);
    header.append(headerTitle, headerUl);
    content.append(header);
}

