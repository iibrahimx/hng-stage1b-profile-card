const userTime = document.querySelector('[data-testid="test-user-time"]');

function updateUserTime() {
  userTime.textContent = Date.now();
}

updateUserTime();

setInterval(updateUserTime, 1000);
