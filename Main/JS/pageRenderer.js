/**
 * Class that renders elements on the page
 */
export class PageRenderer {

    createCard(product){
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const productImageContainer = document.createElement('div');
        const productName = document.createElement('h1');
        const productTag = document.createElement('h2');
        const productImage = document.createElement('img');

        productName.innerText = product.name;
        productTag.innerText = product.tag;
        productImage.src = product.image;

        productName.classList.add('card-product-name');
        productImage.classList.add('card-product-image');
        productImageContainer.classList.add('card-product-image-container');
        productTag.classList.add('card-product-tags');
        card.classList.add('card');

        cardBody.appendChild(productImageContainer);
        productImageContainer.appendChild(productImage);
        cardBody.appendChild(productName);
        cardBody.appendChild(productTag);

        card.appendChild(cardBody);

        return card;

    }
    /**
     * Renders the cards on the page
     */
    renderCards(div, productArray){
        productArray.forEach(product => {
            let card = this.createCard(product);
            div.appendChild(card);
        });
    }
}