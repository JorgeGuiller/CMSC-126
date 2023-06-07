const createNav = () => {
    let header = document.querySelector('.navbar');

    header.innerHTML = `
    <div class="items-container-bg">
    <div id="items-container">
        <img class="logo" src="http://localhost:3000/Images/baner.png.png">
        <div class="search-area">
                    <input type="text" placeholder="Search in Buy-lo" id="search-input">
                    <button id="searchbtn" class="toprightbtn">
                        <i class="material-symbols-outlined">search</i>
                    </button>
                </div>
        <div class="topright">
            <button class="toprightbtn" onclick="location.href='/wishlist.html'" class="toprightbtn">
                <span class="material-symbols-outlined">favorite</span>
                <p class="button-label">Wishlist</p>
            </button>
           
        </div>
        <div class="topright">
            <button class="toprightbtn" src="notif.png">
                <i class="material-symbols-outlined">notifications</i>
                <p class="button-label">Notifications</p>
            </button>
        </div>
        <div class="topright">
            <button onclick="location.href='/AccountPage.html'" class="toprightbtn">
                <i class="material-symbols-outlined">person</i>
                <p class="button-label">Account</p>
            </button>


        </div>
        <div class="topright">
            <button onclick="window.location.href='/homepage.html'" class="toprightbtn">
                <i class="material-symbols-outlined">home</i>
                <p class="button-label">Home</p>
            </button>
        </div>
    </div>
</div>


<div class="dropdown-container">

    <div class="dropdown">
        <button class="dropbtn">School Supplies</button>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Foods</button>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Clothes</button>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Gadgets</button>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Merchandise</button>
    </div>
</div>

`;

}

createNav();
document.getElementById("searchbtn").addEventListener("click", e =>{

    let searchInput = document.getElementById("search-input").value;
    console.log(searchInput);
    window.location.href = "/search.html?search=" + searchInput;
});

const categories = document.getElementsByClassName("dropbtn");

for(let category of categories){
    category.addEventListener("click", e => {
        const query = e.target.textContent;
        window.location.href = "/product-type.html?search=" + query;
    });
}

document.getElementsByClassName("logo")[0].addEventListener("click", e => {
    window.location.href = "/homepage.html";
});