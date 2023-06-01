import { auth } from "./connect.js";


auth.onIdTokenChanged(async (user) => {
    if (user) {
        console.log("logged in")
    } else {
        window.location.assign("../login.html");
    }
});