const InitLocalStorage = () => {
  if (localStorage.getItem('Added Books') == null) {
    localStorage.setItem('Added Books', JSON.stringify([]));
  }
};

export default InitLocalStorage;
