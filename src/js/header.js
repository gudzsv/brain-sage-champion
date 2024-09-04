const contextMenu = document.querySelector('.context-menu-backdrop');
const menuBtn = document.querySelector('.nav-btn');
const closeContextBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', onMenuButtonClick);

function onMenuButtonClick() {
  contextMenu.classList.add('is-open');
  document.body.classList.add('screen-freeze');
}

closeContextBtn.addEventListener('click', onCloseContextButtonClick);

function onCloseContextButtonClick() {
  contextMenu.classList.remove('is-open');
  document.body.classList.remove('screen-freeze');
}

document
  .querySelector('.context-menu-backdrop')
  .addEventListener('click', onContextMenuLinkClick);

function onContextMenuLinkClick(e) {
  if (
    e.target.nodeName === 'A' ||
    e.target.classList.contains('context-menu-backdrop')
  ) {
    onCloseContextButtonClick();
  }
}
