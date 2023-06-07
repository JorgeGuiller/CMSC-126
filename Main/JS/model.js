/**
 * This file is the class responsible for communicating with the database
 */

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, or, orderBy, query, setDoc, updateDoc, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDownloadURL, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
import { db, storage } from "./connect.js";


class Product {
    constructor(id, name, tag, description, image, userId) {
        this.id  = id;
        this.name = name;
        this.tag = tag;
        this.description = description;
        this.image = image;
        this.userId = userId;
    }
}

export class Model {

    async createAccount(user){
        const userData = {
            name: user.displayName,
            email: user.email,
            products: [],
            transactions: [],
            wishlist: []
        };

        const account = await this.getAccountById(user.uid);
        
        if (account){
            return;
        }else{
            await setDoc(doc(db, "Accounts", user.uid), userData);
        }
    }


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

    async getProducts(){
        const products = [];

        const coll = collection(db, "Products");

        let q = query(coll, where("__name__", ">=", " "),orderBy("__name__"),limit(20));
        
        const snapshot = await getDocs(q);


        snapshot.forEach((doc) => {
            products.push(new Product(doc.id, doc.data()["name"], doc.data()["tag"], doc.data()["description"], doc.data()["image"]));
            
        });
        return products;
        
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

    async getProductById(id){
        const coll = doc(db, "Products", id);
        const snapshot = await getDoc(coll);
        return new Product(snapshot.id, snapshot.data()["name"], snapshot.data()["tag"], snapshot.data()["description"], snapshot.data()["image"]);
    }

    async getProductsByTag(tag){

        const products = [];
        const coll = collection(db, "Products");
        const q = query(coll, where("tag", "==", `${tag}`));
        const snap = await getDocs(q);


        snap.forEach((doc) => {
            products.push(new Product(doc.id, doc.data()["name"], doc.data()["tag"], doc.data()["description"], doc.data()["image"]));
            console.log(doc.id);
            
        });
        return products;
    }

    async deleteProduct(id){

        await deleteDoc(doc(db, "Products", id));
    }

    async getAccountById(id){
        const account = doc(db, "Accounts", id);
        const snap = await getDoc(account);
        const data= snap.data();
        return data;
    }
}

