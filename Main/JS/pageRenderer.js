/**
 * Class that renders elements on the page
 */
export class PageRenderer {

    createCard(product){
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const productName = document.createElement('h1');
        const productImage = document.createElement('img');

        productName.innerText = product.name;
        productImage.src = product.image;

        productName.classList.add('card-product-name');
        productImage.classList.add('card-product-image');

        cardBody.appendChild(productName);
        cardBody.appendChild(productImage);

        card.appendChild(cardBody);

        return card;

    }
    /**
     * Renders the cards on the page
     */
    renderCards(div, productArray){
        console.log(div);
        productArray.forEach(product => {
            let card = this.createCard(product);
            div.appendChild(card);
        });
    }
}