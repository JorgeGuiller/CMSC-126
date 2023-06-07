<?php
// this runs when user clicks submit button
//this creates a new php file with the name of the product



if (isset($_POST["submit"])) {
    $name = $_POST["submit"];
    $slug = str_replace(' ', '-', strtolower($name));
    $file = fopen("products/$slug.php", "w");
    $command = "<?php
    include 'product.php';
    ?>";
    fwrite($file, $command);
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Upload</title>
    <link rel="stylesheet" href="CSS/design2.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"
        integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script defer src="JS/nav.js"></script>
    <script>
        // $(document).ready(function () {
        //     $("#upload-button").click(function () {
        //         var name = $("#product-name").val();
        //         $.post("ProductUpload.php", {
        //             submit: name
        //         }, function (data, status) {
        //         })
        //     })
        // })
    </script>
</head>


<body>
    <nav class="navbar">
    </nav>

    <section>
        <h1 class="section-title">PRODUCT UPLOAD</h1>
        <div class="upload-form-container">

            <form class="upload-form" id="uploads-form" name="uploads-form" method="post" enctype="multipart/form-data">

                <label id="product-upload-label">Enter Product Name</label>
                <input type="text" name="product-name" id="product-name" placeholder="Insert product name here">
                <label id="product-upload-label">Enter Product Description</label>
                <input type="text" name="product-description" id="product-description"
                    placeholder="Insert product description here"><br>
                <fieldset>

                    <legend id="product-upload-label">Choose Product Tag</legend>
                    <input type="radio" id="merchandise" name="tag" value="Merchandise">
                    <label for="merchandise" id="fieldset-label">Merchandise</label><br>

                    <input type="radio" id="school-supplies" name="tag" value="School Supplies">
                    <label for="school-supplies" id="fieldset-label">School Supplies</label><br>

                    <input type="radio" id="food" name="tag" value="Food/Beverages">
                    <label for="food" id="fieldset-label">Food/Beverages</label><br>

                    <input type="radio" id="clothes" name="tag" value="Clothes">
                    <label for="clothes" id="fieldset-label">Clothes</label><br>

                    <input type="radio" id="gadgets" name="tag" value="Gadgets">
                    <label for="gadgets" id="fieldset-label">Gadgets</label><br>
                </fieldset>
                
                <input type="file" id="myFile" name="filename"accept="image/png, image/jpeg"/>
                <button id="upload-button" type="button" name="submit">Upload</button>

                <button id="wishlist-button" type="button">Wishlist</button>
                <button id="wishlist-items" type="button">Wishlisted Items<a href=url></a></button>

                
                <script type="module">
                    import { Model } from "./JS/model.js";
                    var fileItem;
                    var fileName;
                    var img="";
                    const file = document.getElementById("myFile");
                    file.addEventListener("change", e => {
                        
                        fileItem=e.target.files[0];
                        fileName=fileItem.name;
                        console.log(fileItem);
                        console.log(fileName);
                    })

                    const button = document.getElementById("upload-button");
                    button.addEventListener("click", async () => {
                        console.log("click");
                       
                        const model = new Model();
                        const name = document.getElementById("product-name").value;
                        const tag = document.querySelector('input[name="tag"]:checked').value;
                        const description = document.getElementById("product-description").value;
                        
                        img =await model.addPhoto(fileItem,fileName,img);
                        console.log(img);
                        const data = await model.addProduct(name, tag, description, img);
                        
                    });

                    const wishlist_butt = document.getElementById("wishlist-button");
                    wishlist_butt.addEventListener("click", async () => {
                        console.log("click");
                        const model = new Model();
                        model.addWishlist();

                            
                        
                        
                    })


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
            </form>
        </div>


    </section>


    <div id="footer"></div>

</body>



</html>