window.onload = () => {
  let notifications = document.querySelector('.notifications');
  let project_container_buttons = Array.from(document.querySelectorAll('.project-container-buttons'));

  const github_links = [
    'Community-Project-Donation', 'Calculator',
    'tic-tac-toe-ruby', 'Hang-man',
    'mastermindruby', 'Random-Code-Landing-Page'
  ];

  notifications.addEventListener('mouseover', notificationHovered);
  notifications.addEventListener('mouseout', notificationNotHovered);


  for (let i = 0; i < project_container_buttons.length; i++) {
    let github_repo_image = createButtonIcons('./images/github-dark.png', 'github repo');
    let github_live_image = createButtonIcons('./images/play.png', 'github live');
    let favorite_image = createButtonIcons('./images/star-plus-outline.png', 'add to favourites');
    let github_repo_button = createProjectButtons(`https://github.com/lkatchutas-99/${github_links[i]}`, github_repo_image);
    let github_live_button = createProjectButtons(`https://lkatchutas-99.github.io/${github_links[i]}`, github_live_image);
    let favorite_button = createProjectButtons('#', favorite_image);

    project_container_buttons[i].appendChild(github_repo_button).cloneNode(true);
    project_container_buttons[i].appendChild(github_live_button).cloneNode(true);
    project_container_buttons[i].appendChild(favorite_button).cloneNode(true);
  }

  function createProjectButtons(href, icon) {
    let button = document.createElement('a');
    button.setAttribute('href', href);
    button.appendChild(icon);
    return button;
  }

  function createButtonIcons(src, alt) {
    let icon = document.createElement('img');
    icon.setAttribute('src', src);
    icon.setAttribute('alt', alt);
    return icon;
  }

  function notificationHovered() {
    notifications.setAttribute('src', "./images/bell-ring-outline.png");
    notifications.setAttribute('alt', "bell ringing");
    notifications.style.cursor = "pointer";
  }

  function notificationNotHovered() {
    notifications.setAttribute('src', "./images/bell-outline.png");
  }
}