import { DateTime } from '../node_modules/luxon/src/luxon.js';

export default () => {
  document.addEventListener('DOMContentLoaded', () => {
    const time = document.querySelector('.time');

    const updateTime = () => {
      const now = DateTime.now();
      const dateTime = now.toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      });
      time.textContent = dateTime;
    };
    updateTime();
    setInterval(updateTime, 1000);
  });
};
