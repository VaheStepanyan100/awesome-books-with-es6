import InitLocalStorage from './modules/InitLocalStorage.js';
import BooksCollection from './modules/BooksCollection.js';
import NavBarEventListeners from './modules/NavBarEventListeners.js';

const booksCollection = new BooksCollection();

InitLocalStorage();
booksCollection.init();
booksCollection.displayBooks();
NavBarEventListeners();
