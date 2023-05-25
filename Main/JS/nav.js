const createNav = () => {
    let header = document.querySelector('.navbar');

    header.innerHTML = `

    <div id="items-container">
    <h1 class="website-logo">Logo</h1>
    <h1 class="website-title">Project Buy-lo</h1>
    <ul class="icons">
        <li>
            <div class="search-area">
                <input type="text" placeholder="Search in Buy-lo" id="search-input">
                <button id="searchbtn" class="toprightbtn">
                    <i class="material-icons">search</i>
                </button>
            </div>
        </li>
        <li>

            <div class="topright">
                <button class="toprightbtn">
                    <i class="material-icons">favorite</i>
                </button>

                <div class="topright-content">
                    <a class="topright-links" href="#">Item 1</a>
                    <a class="topright-links" href="#">Item 2</a>
                    <a class="topright-links" href="#">Item 3</a>
                </div>
            </div>
        </li>
        <li>
            <div class="topright">
                <button class="toprightbtn" src="notif.png">
                    <i class="material-icons">notifications</i>
                </button>
                <div class="topright-content">
                    <a class="topright-links" href="#">Notif 1</a>
                    <a class="topright-links" href="#">Notif 2</a>
                    <a class="topright-links" href="#">Notif 3</a>
                </div>
            </div>
        </li>
        <li>
            <div class="topright">
                <button onclick="location.href='AccountPage.html'" class="toprightbtn">
                    <i class="material-icons">person</i>
                </button>
            </div>
        </li>
    </ul>
</div>

<div class="dropdown-container">
    <div class="dropdown">
        <button class="dropbtn">School Supplies</button>
        <div class="dropdown-content">
            <a href="#">Writing Materials</a>
            <a href="#">Paper Materials</a>
            <a href="#">Erasure Materials</a>
        </div>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Foods</button>
        <div class="dropdown-content">
            <a href="#">Canned Goods</a>
            <a href="#">Snacks</a>
            <a href="#">Beverages</a>
        </div>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Clothes</button>
        <div class="dropdown-content">
            <a href="#">Top</a>
            <a href="#">Bottom</a>
            <a href="#">Accessories</a>
        </div>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Gadgets</button>
        <div class="dropdown-content">
            <a href="#">Writing Materials</a>
            <a href="#">Paper Materials</a>
            <a href="#">Erasure Materials</a>
        </div>
    </div>

    <div class="dropdown">
        <button class="dropbtn">Merchandise</button>
        <div class="dropdown-content">
            <a href="#">UP</a>
            <a href="#">K-pop</a>
            <a href="#">Anime</a>
        </div>
    </div>
</div>

`;
}

createNav();