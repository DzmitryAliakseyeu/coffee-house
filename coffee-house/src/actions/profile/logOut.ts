export default function logOut() {
  let token = localStorage.getItem('token');
  if (token) {
    localStorage.removeItem('token');
  }

  window.open('/coffee-house/index.html', '_self');
}
