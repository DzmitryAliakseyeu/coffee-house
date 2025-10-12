import { contactsInfoData } from '../../../../data/contacts-info-data';
import './contacts-block.css';

export default function createContactsBlock(parent) {
  let contactLink;
  const contactsBlock = document.createElement('ul');
  contactsBlock.classList.add('contacts-list');
  parent.append(contactsBlock);

  contactsInfoData.forEach((info) => {
    const contactItem = document.createElement('li');
    contactItem.classList.add('contact-info');
    contactItem.classList.add(info.title);

    contactsBlock.append(contactItem);

    if (info.isLink) {
      contactLink = document.createElement('a');
      contactLink.classList.add('contact-link');
      contactItem.append(contactLink);
    }

    const contactIcon = document.createElement('span');
    contactIcon.classList.add(`contact-icon`);
    contactIcon.classList.add(`contact-${info.title}-icon`);
    if (info.isLink) {
      contactLink.append(contactIcon);
    } else {
      contactItem.append(contactIcon);
    }

    const contactContent = document.createElement('span');
    contactContent.classList.add(`link-and-button`);
    contactContent.classList.add(`text-light`);
    contactContent.classList.add(`contact-text`);
    contactContent.classList.add(`contact-${info.title}-text`);
    contactContent.textContent = info.content;
    if (info.isLink) {
      contactLink.append(contactContent);
       contactItem.addEventListener('click', () => {
        window.open(info.href, '_blank');
      });
    } else {
      contactItem.append(contactContent);
    }
  });
}
