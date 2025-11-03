import './navigation.css';

export default function createNavigation(parent: HTMLElement) {
  const navigation = document.createElement('nav');
  navigation.classList.add('navigation');
  parent.append(navigation);

  const navigationList = document.createElement('ul');
  navigationList.classList.add('navigation-list');
  navigation.append(navigationList);

  const menuItems = [
    { text: 'Favorite coffee', href: '/coffee-house/index.html#favorite' },
    { text: 'About', href: '/coffee-house/index.html#about' },
    { text: 'Mobile app', href: '/coffee-house/index.html#mobile-app' },
    { text: 'Contact us', href: '#contact-us' },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    const link = document.createElement('a');
    link.classList.add('item-link');
    link.classList.add('link-and-button');
    link.classList.add('text-dark');

    link.addEventListener('click', () => {
      const navigationBox = document.querySelector(
        '.navigation-box',
      ) as HTMLElement;

      if (navigationBox.classList.contains('open')) {
        navigationBox.classList.remove('open');
        document.documentElement.classList.remove('no-scroll');
        const buttonBurger = document.querySelector(
          '.button-burger',
        ) as HTMLElement;
        const buttonBurgerText = document.querySelector(
          '.button-burger-text',
        ) as HTMLElement;
        buttonBurger.classList.remove('open');
        buttonBurgerText.classList.remove('open');
      }
    });

    link.href = item.href;
    link.text = item.text;

    li.appendChild(link);
    navigationList.appendChild(li);
  });
}
