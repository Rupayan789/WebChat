import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
export const signUp=(user)=>{
    return async (dispatch)=>{
        const db=firebase.firestore();
        firebase.auth()
        .createUserWithEmailAndPassword(user.email,user.password)
        .then(console.log(user))
        .catch(error=>console.log(error.message))
    }
}