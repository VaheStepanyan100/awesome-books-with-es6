export default function InitLocalStorage() {
  if (localStorage.getItem('Added Books') == null) {
    localStorage.setItem('Added Books', JSON.stringify([]));
  }
}
