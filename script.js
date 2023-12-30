document.addEventListener('DOMContentLoaded', function () {
  const countdownElements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };

  function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1); // Next year's January 1st

    const timeDifference = newYear - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElements.days.textContent = `${days}d`;
    countdownElements.hours.textContent = `${hours}h`;
    countdownElements.minutes.textContent = `${minutes}m`;
    countdownElements.seconds.textContent = `${seconds}s`;
  }

  // Initial call to set the countdown
  updateCountdown();

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
});
