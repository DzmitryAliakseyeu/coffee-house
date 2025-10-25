import createProductsCartContainer from "./products-in-cart/products-in-cart";
import './cart-section.css'
import createTotal from "./total/total";
import createCartButtonsBlock from "./cart-buttons/cart-buttons";
import createOrderInfo from "./order-info/order-info";

export default function createCartSection(parent: HTMLElement){
    const sectionCart = document.createElement('section');
      sectionCart.classList.add('cart');
      parent.append(sectionCart);
    
      const containerSection = document.createElement('section');
      containerSection.classList.add('container-section');
      sectionCart.append(containerSection);

      const sectionTitle = document.createElement('h2');
      sectionTitle.classList.add('cart-title');
      sectionTitle.classList.add('heading-2');
      sectionTitle.classList.add('text-dark');
      sectionTitle.textContent = 'Cart';
      containerSection.append(sectionTitle)

      createProductsCartContainer(containerSection);
    //   createTotal(containerSection);
    createOrderInfo(containerSection)
    createCartButtonsBlock(containerSection)
    
    //   createMenuOfferContainer(containerSection);
    
    //   createMenuProductsGrid(containerSection);
    
    //   createButton({
    //     parent: containerSection,
    //     className: 'load',
    //     action: () => {
    //       loadProducts(filteredProducts);
    //     },
    //     text: '',
    //     hasIcon: true,
    //   });
}