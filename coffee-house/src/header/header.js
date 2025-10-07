import createContainerHeader from './containerHeader/containerHeader';
import createEnjoySection from './enjoySection/enjoySection';
import './header.css';

export default function createHeader(parent, isMainPage = false) {
  const header = document.createElement('header');
  header.classList.add('header');
  parent.append(header);

  createContainerHeader(header);

  if (isMainPage) {
    const sectionHero = document.createElement('section');
    sectionHero.classList.add('hero');
    header.append(sectionHero);

    createEnjoySection(sectionHero);
  }
}
