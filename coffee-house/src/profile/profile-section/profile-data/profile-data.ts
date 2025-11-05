import { hideErrorText, showErrorText } from '../../../error/error';
import createRadioGroup from '../../../input-radio/input-radio';
import createInputBlock from '../../../input/input-block';
import { hideLoader, showLoader } from '../../../loader/loader';
import getProfile from '../../../requests/getProfile';
import './profile-data.css';

export default async function createProfileDataGrid(parent: HTMLElement) {
  const profileDataGrid = document.createElement('div');
  profileDataGrid.classList.add('profile-data-grid');
  parent.append(profileDataGrid);

  hideErrorText('.profile');
  showLoader('.profile');

  let token = localStorage.getItem('token');

  if (token) {
    try {
      let response = await getProfile(token);

      let profileData = response.data;
      console.log(profileData);

      setTimeout(() => hideLoader('.profile'), 1000);

      createInputBlock(
        profileDataGrid,
        'login',
        'Login',
        'text',
        'Placeholder',
        profileData.login,
      );
      //   createInputBlock(
      //     profileDataGrid,
      //     'password',
      //     'Password',
      //     'password',
      //     'Placeholder',
      //   );
      //   createInputBlock(
      //     profileDataGrid,
      //     'confirm-password',
      //     'Confirm Password',
      //     'password',
      //     'Placeholder',
      //   );

      createInputBlock(
        profileDataGrid,
        'city',
        'City',
        'text',
        'Placeholder',
        profileData.city,
      );
      createInputBlock(
        profileDataGrid,
        'street',
        'Street',
        'text',
        'Placeholder',
        profileData.street,
      );
      //   createDropdownInput(profileDataGrid, 'city', 'City', profileData.city);
      //   createDropdownInput(profileDataGrid, 'street', 'Street', profileData.street);
      createInputBlock(
        profileDataGrid,
        'house-number',
        'House number',
        'text',
        'Placeholder',
        profileData.houseNumber,
      );

      createRadioGroup(profileDataGrid, 'pay-by', 'Pay by', [
        { value: 'Cash', text: 'Cash' },
        { value: 'Card', text: 'Card' },
      ]);

      // filteredProducts = filterProducts(tabActive.id, products);

      // filteredProducts.forEach((product) => {
      //   createPreviewCard({
      //     parent: menuProductsGrid,
      //     id: product.id,
      //     srcImg: `../products/${product.name}.png`,
      //     title: product.name,
      //     description: product.description,
      //     price: `$${product.price}`,
      //     ...(product.discountPrice
      //       ? { discountPrice: `$${product.discountPrice}` }
      //       : {}),
      //   });
      // });
    } catch {
      hideLoader('.profile');
      showErrorText('.profile');
    }
  }
}
