import createFooter from './footer/footer';
import createHeader from './header/header';

import createMain from './main/main';

export default function renderPage() {
  const body = document.body;
  console.log(body);

  const app = document.createElement('div') as HTMLElement;
  app.classList.add('app');
  app.id = 'app';
  body.append(app);

  createHeader(app);
  createMain(app);
  createFooter(app);
}
