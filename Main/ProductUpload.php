<?php
// this runs when user clicks submit button
//this creates a new php file with the name of the product

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/design2.css">
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"
        integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <title>Product Upload</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $("#upload-button").click(function () {
                var name = $("#product-name").val();
                $.post("ProductUpload.php", {
                    submit: name
                }, function (data, status) {
                })
            })
        })
    </script>

    <script defer src="JS/nav.js"></script>
</head>


<body>
    <nav class="navbar">
    </nav>

    <section>
        <h1 class="section-title">PRODUCT UPLOAD</h1>
        <div class="upload-form-container">

            <form class="upload-form" id="uploads-form" name="uploads-form" method="post">

                <label id="product-name-label">Enter Product Name</label>
                <input type="text" name="product-name" id="product-name" placeholder="Insert product name here">
                <label id="product-description-label">Enter Product Description</label>
                <input type="text" name="product-description" id="product-description"
                    placeholder="Insert product description here">
                <fieldset>

                    <legend>Choose Product Tag</legend>
                    <input type="radio" id="merchandise" name="tag" value="Merchandise">
                    <label for="merchandise">Merchandise</label>

                    <input type="radio" id="school-supplies" name="tag" value="School Supplies">
                    <label for="school-supplies">School Supplies</label>

                    <input type="radio" id="food" name="tag" value="Food/Beverages">
                    <label for="food">Food/Beverages</label>

                    <input type="radio" id="clothes" name="tag" value="Clothes">
                    <label for="clothes">Clothes</label>

                    <input type="radio" id="gadgets" name="tag" value="Gadgets">
                    <label for="gadgets">Gadgets</label>
                </fieldset>
                <button id="upload-button" type="button" name="submit">Upload
                    <img src="upload.png">
                </button>

                <script type="module">
                    import { Model } from "./JS/model.js";

                    const button = document.getElementById("upload-button");
                    button.addEventListener("click", async () => {
                        console.log("click");
                        const model = new Model();
                        const name = document.getElementById("product-name").value;
                        const tag = document.querySelector('input[name="tag"]:checked').value;
                        const description = document.getElementById("product-description").value;
                        const img = "nyanya.jpg";
                        const data = await model.addProduct(name, tag, description, img);
                    });
                </script>
            </form>
        </div>


    </section>
    <div id="footer"></div>

</body>



</html>