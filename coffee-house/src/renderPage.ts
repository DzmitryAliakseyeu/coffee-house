import createFooter from './footer/footer';
import createHeader from './header/header';
import createMain from './main/main';
import getProfile from './requests/getProfile';

export default async function renderPage() {
  const body = document.body;


  const app = document.createElement('div') as HTMLElement;
  app.classList.add('app');
  app.id = 'app';
  body.append(app);

  createHeader(app);
  createMain(app, true, false, false);
  createFooter(app);
}
