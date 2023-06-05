/**
 * This file is the class responsible for communicating with the database
 */

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, or, orderBy, query, where } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

import { db } from "./connect.js";

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
        console.log("Document written with ID: ", docRef.id);
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
}
