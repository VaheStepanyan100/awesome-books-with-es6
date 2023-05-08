const NavBarEventListeners = () => {
  const listButton = document.querySelector('.list');
  const addNewButton = document.querySelector('.add-new');
  const contactButton = document.querySelector('.contact');
  const awesomeBooksSection = document.querySelector('.awesome-books');
  const addNewSection = document.querySelector('.add-book-form');
  const contactInfo = document.querySelector('.contact-info');
  listButton.addEventListener('click', () => {
    awesomeBooksSection.classList.add('show');
    addNewSection.classList.add('hide');
    contactInfo.classList.add('hide');
  });
  addNewButton.addEventListener('click', () => {
    addNewSection.classList.remove('hide');
    awesomeBooksSection.classList.remove('show');
    contactInfo.classList.add('hide');
  });
  contactButton.addEventListener('click', () => {
    contactInfo.classList.remove('hide');
    awesomeBooksSection.classList.remove('show');
    addNewSection.classList.add('hide');
  });
};

export default NavBarEventListeners;
