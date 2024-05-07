export default function closeMenu(scroll: any) {
  const menuCloseButton = document.querySelector(
    '#menuCloseButton'
  ) as HTMLButtonElement;

  if (menuCloseButton) {
    menuCloseButton.addEventListener('click', () => {
      const fullPageMenu = document.querySelector(
        '#fullPageMenu'
      ) as HTMLElement;
      fullPageMenu.style.display = 'none';
      document.body.style.overflow = 'auto';
      scroll.start();
    });
  }
}
