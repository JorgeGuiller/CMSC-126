<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/design2.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    <title>Product Upload</title>
    <script defer src="JS/nav.js"></script>
</head>

<body>
    <nav class="navbar">

    </nav>


    <table id="upload_table">
        <tr>
            <td>
                <button id="uploadbtn" name="submit"> Upload<img src="upload.png"></button>
                <script type="module">
                    import { Model } from "./JS/model.js";

                    document.getElementById("uploadbtn").addEventListener("click", async () => {
                        const model = new Model();
                        const name = document.getElementById("Product-name").value;
                        const tag = document.querySelector('input[name="filter"]:checked').value;
                        const description = document.getElementById("ProductDescription").value;
                        const img = "nyanya.jpg";

                        const data = await model.addProduct(name, tag, description, img);
                    });
                </script>
            </td>
        </tr>
        <tr>
            <td>
                <p id="Desc_title">Enter Product Description</p>
                <input type="text" name="Product-description" id="ProductDescription"
                    placeholder="Insert product description here">
                <input type="text" name="Product-name" id="Product-name" placeholder="Insert product name here">

            </td>

        </tr>
        <tr>
            <td><input type="radio" name="filter" value="School Supplies"><label for="SchoolSupplies">School
                    Supplies</label></td>
        </tr>
        <tr>
            <td><input type="radio" name="filter" value="Merchandise"><label for="Merchandise">Merchandise</label></td>
        </tr>
        <tr>
            <td><input type="radio" name="filter" value="Food/beverages"><label
                    for="Food/beverages">Food/beverages</label></td>
        </tr>
        <tr>
            <td><input type="radio" name="filter" value="Clothes"><label for="Clothes">Clothes</label></td>
        </tr>
        <tr>
            <td><input type="radio" name="filter" value="Gadgets"><label for="Gadgets">Gadgets</label></td>
        </tr>
        <tr>
            <td><input type="text" name="Barter description" id="BarterDescription"
                    placeholder="Insert Preferred Specific Barter"></td>
        </tr>
    </table>

    <div id="footer"></div>

</body>


<?php
if (isset($_POST['submit'])) {
    // $name = $_POST["Product-name"];
    // $slug = str_replace(' ', '-', strtolower($name));
    // $file = fopen("Products/$slug.php", "w");
    echo "haha";
} else {
    echo "huhu";
}
?>

</html>