import './navigation.css';

export default function createNavigation(parent) {
  const navigation = document.createElement('nav');
  navigation.classList.add('navigation');
  parent.append(navigation);

  const navigationList = document.createElement('ul');
  navigationList.classList.add('navigation-list');
  navigation.append(navigationList);

  const menuItems = [
    { text: 'Favorite coffee', href: 'index.html#favorite' },
    { text: 'About', href: 'index.html#about' },
    { text: 'Mobile app', href: 'index.html#mobile-app' },
    { text: 'Contact us', href: '#contact-us' },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    const link = document.createElement('a');
    link.classList.add('item-link');
    link.classList.add('link-and-button');
    link.classList.add('text-dark');

    link.href = item.href;
    link.text = item.text;

    li.appendChild(link);
    navigationList.appendChild(li);
  });
}
