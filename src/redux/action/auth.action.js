import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { authConstant } from './constant';
export const signUp=(user)=>{
    return async (dispatch)=>{
        const db=firebase.firestore();
        dispatch({
            type:`${authConstant.USER_LOGIN}_REQUEST`
        });
        firebase.auth()
        .createUserWithEmailAndPassword(user.email,user.password)
        .then(data=>{
            console.log(data);
            const currentUser=firebase.auth().currentUser;
            const name=`${user.firstName} ${user.lastName}`
            currentUser.updateProfile({
                displayName:name
            }).then(()=>{
                db.collection('users')
                .doc(data.user.uid)
                .set({
                    firstName:user.firstName,
                    lastName:user.lastName,
                    createdAt:new Date(),
                    uid:data.user.uid,
                    isOnline:true
                }).then(()=>{
                    const loggedInUser={
                        firstName:user.firstName,
                        lastName:user.lastName,
                        uid:data.user.uid,
                        email:user.email
                    }
                    localStorage.setItem('user',JSON.stringify(loggedInUser));
                    console.log('User successfully logged in');
                    dispatch({
                        type:`${authConstant.USER_LOGIN}_SUCCESS`,
                        payload:{user:loggedInUser}
                    })
                })
                .catch(error=>{
                    console.log(error.message);
                    dispatch({
                        type:`${authConstant.USER_LOGIN}_FAILURE`,
                        payload:{error:error.message}
                    })});
            })
        })
        .catch(error=>console.log(error.message))
    }
}
export const signIn=(user)=>{
    return async (dispatch)=>{
        dispatch({
            type:`${authConstant.USER_LOGIN}_REQUEST`
        })
        

        firebase.auth()
        .signInWithEmailAndPassword(user.email,user.password)
        .then((data)=>{
            console.log(data);
            const db=firebase.firestore();

            db.collection('users')
            .doc(data.user.uid)
            .update({
                isOnline:true
            }).then(()=>{
                const name=data.user.displayName.split(" ");
            const firstName=name[0];
            const lastName=name[1];
            const loggedInUser={
                firstName,
                lastName,
                uid:data.user.uid,
                email:data.user.email
            }
            localStorage.setItem('user',JSON.stringify(loggedInUser));
            dispatch({
                type:`${authConstant.USER_LOGIN}_SUCCESS`,
                payload:{user:loggedInUser}
            })
            })
            .catch(error=>console.log(error))
            
        }).catch((error)=>{
            alert("Wrong Credentials entered");
            dispatch({
                type:`${authConstant.USER_LOGIN}_FAILURE`,
                payload:{error:error.message}
            })
        })
    }
}

export const isLoggedInUser=()=>{
    return async dispatch=>{
        const user=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null;
        if(user)
        {
            dispatch({
                type:`${authConstant.USER_LOGIN}_SUCCESS`,
                payload:{user}
            })
        }
        else
        {
            dispatch({
                type:`${authConstant.USER_LOGIN}_FAILURE`,
                payload:{error:"Login once again"}
            })
        }

    }
}

export const logOut=(uid)=>{
    return async dispatch=>{
        dispatch({
            type:`${authConstant.USER_LOGOUT}_REQUEST`
        })
        const db=firebase.firestore();
        db.collection('users')
        .doc(uid)
        .update({
            isOnline:false
        })
        .then(()=>{
            firebase.auth().
        signOut().then(()=>{
            localStorage.clear();
            dispatch({
                type:`${authConstant.USER_LOGOUT}_SUCCESS`
            })
        }).catch(error=>dispatch({
            type:`${authConstant.USER_LOGOUT}_FAILURE`,
            error:error.message
    }))
        })
        
    }
}