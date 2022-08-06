
import { authentication } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export function sign(email, password) {
    signInWithEmailAndPassword(authentication, email, password).then((response) => console.log(response)).catch((error) => console.log(error));
}