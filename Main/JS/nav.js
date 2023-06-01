const createNav = () => {
    let header = document.querySelector('.navbar');
  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "nav.html", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("navbar-placeholder").innerHTML = xhr.responseText;
  
        header.innerHTML = `
          <div id="items-container">
            <img class="logo" src="Images/baner.png.png">
            <a class="website-title-anchor" href="homepage.html">
                <h1 class="website-title">Project Buy-lo</h1>
            </a>
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
                    <a href="#" onclick="event.preventDefault();">Writing Materials</a>
                    <a href="#" onclick="event.preventDefault();">Paper Materials</a>
                    <a href="#" onclick="event.preventDefault();">Erasure Materials</a>
                </div>
            </div>
  
            <div class="dropdown">
                <button class="dropbtn">Foods</button>
                <div class="dropdown-content">
                    <a href="#" onclick="event.preventDefault();">Canned Goods</a>
                    <a href="#" onclick="event.preventDefault();">Snacks</a>
                    <a href="#" onclick="event.preventDefault();">Beverages</a>
                </div>
            </div>
  
            <div class="dropdown">
                <button class="dropbtn">Clothes</button>
                <div class="dropdown-content">
                    <a href="#" onclick="event.preventDefault();">Top</a>
                    <a href="#" onclick="event.preventDefault();">Bottom</a>
                    <a href="#" onclick="event.preventDefault();">Accessories</a>
                </div>
            </div>
  
            <div class="dropdown">
                <button class="dropbtn">Gadgets</button>
                <div class="dropdown-content">
                    <a href="#" onclick="event.preventDefault();">Writing Materials</a>
                    <a href="#" onclick="event.preventDefault();">Paper Materials</a>
                    <a href="#" onclick="event.preventDefault();">Erasure Materials</a>
                </div>
            </div>
  
            <div class="dropdown">
                <button class="dropbtn">Merchandise</button>
                <div class="dropdown-content">
                    <a href="#" onclick="event.preventDefault();">UP</a>
                    <a href="#" onclick="event.preventDefault();">K-pop</a>
                    <a href="#" onclick="event.preventDefault();">Anime</a>
                </div>
            </div>
          </div>
        `;
      }
    };
    xhr.send();
  }
  
  createNav();
  