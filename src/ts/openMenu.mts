export default function openMenu(scroll: any) {
  const menuIconButton = document.querySelector(
    '#menuIconButton'
  ) as HTMLButtonElement;
  const menuButton = document.querySelector('#menuButton') as HTMLButtonElement;

  const addEventListenerToMenuButton = () => {
    const fullPageMenu = document.querySelector('#fullPageMenu') as HTMLElement;
    fullPageMenu.style.display = 'block';
    document.body.style.overflow = 'hidden';
    scroll.stop();
  };

  if (menuButton && menuIconButton) {
    menuButton.addEventListener('click', addEventListenerToMenuButton);
    menuIconButton.addEventListener('click', addEventListenerToMenuButton);
  }
}
