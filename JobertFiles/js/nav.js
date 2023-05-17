const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        
        <div class="nav">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search in Buy-lo">
                    <button class="search-btn">Search</button>
                </div>
            </div>
            <div class="nav-dropdowns">
                <button>School Supplies</button>
                <button>Food/Beverage</button>
                <button>Clothes</button>
                <button>Gadgets</button>
                <button>Merchandise</button>
            </div>
        </div >
        `
        ;
}

createNav();