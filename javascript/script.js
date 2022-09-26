window.onload = ()=> {
  let notifications = document.querySelector('.notifications');

  notifications.addEventListener('mouseover', notificationHovered);
  notifications.addEventListener('mouseout', notificationNotHovered);

  function notificationHovered() {
    notifications.setAttribute('src', "./images/bell-ring-outline.png");
    notifications.style.cursor = "pointer";
  }

  function notificationNotHovered() {
    notifications.setAttribute('src', "./images/bell-outline.png");
  }
}