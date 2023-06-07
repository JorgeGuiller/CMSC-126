import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { auth, db } from "./connect.js";


async function getAccountDetails(auth) {
    auth.onIdTokenChanged(async (user) => {
        if (user) {
            const account = doc(db, "Accounts", user.uid);
            const snap = await getDoc(account);
            const data= snap.data();
            addAccountDetails(data);
            return data;
        } else {
            return null;
        }
    });
}

function addAccountDetails(detailsArray) {
    document.getElementById("name").innerHTML = detailsArray["name"];
    document.getElementById("email").innerHTML = detailsArray["email"];
}

window.addEventListener("load", async () => {
    const array = await (getAccountDetails(auth));

});