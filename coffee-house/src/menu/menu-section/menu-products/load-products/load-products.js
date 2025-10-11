export default function loadProducts(products){
    const previewCards = document.querySelectorAll('.preview-card');
    previewCards.forEach((card) => card.style.display = 'flex')
   

    if(previewCards.length === products.length){
        const loadButton = document.querySelector('.button-load');
        loadButton.classList.add('hidden')
        return
       
    } 

    


}