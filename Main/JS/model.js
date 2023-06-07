/**
 * This file is the class responsible for communicating with the database
 */

import { addDoc, collection, getDocs, or, query, where,doc,updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { ref, uploadBytes,getDownloadURL} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "./connect.js";


class Product {
    constructor(id, name, tag, description, image) {
        this.id  = id;
        this.name = name;
        this.tag = tag;
        this.description = description;
        this.image = image;
    }
}

export class Model {
    async search(searchQuery) {
        const products = [];
        const coll = collection(db, "Products");
        const q = query(coll, or(where("tag", "==", `${searchQuery}`), where("name", "==", `${searchQuery}`)));
        const snap = await getDocs(q);


        snap.forEach((doc) => {
            products.push(new Product(doc.id, doc.data()["name"], doc.data()["tag"], doc.data()["description"], doc.data()["image"]));
            console.log(doc.id);
            
        });
        return products;
    }

    
    async addProduct(name, tag, description, image) {
        const data = {
            name: name,
            tag: tag,
            description: description,
            image: image
        };
        const docRef = await addDoc(collection(db, "Products"), data);
        const accProd= doc(db, "Accounts", "PBJsvBVq1eNtGT22w8KYCoD8D3U2");



        console.log("Document written with ID: ", docRef.id);
        await updateDoc(accProd, {
			products: arrayUnion(docRef.id),
			});
    }

    async addPhoto(fileItem){


        const uniqueFileName = crypto.randomUUID();

        
        let storageRef = ref(storage);
        let imageRef = await ref(storageRef, 'images/'+uniqueFileName);

        

        await uploadBytes(imageRef, fileItem);

        let url = await getDownloadURL(imageRef)
        console.log(url);
        return (url);
    }
    
    async addWishlist(){
        const user_db=doc(db,"Accounts","7Wl4ixQrFWPiuNlxuUCEkCTwnRI2" );
            await updateDoc(user_db, {
                wishlist: window.location.href
            });
    }

    
}

