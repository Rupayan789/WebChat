import { userConstant } from "./constant"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { userReducer } from "../rootreducer/user.reducer";


export const getRealtimeUsers=(uid)=>{
    return async dispatch=>{
        dispatch({type:`${userConstant.GET_REALTIME_USERS}_REQUEST`});
        const db=firebase.firestore();
        const unsubscribe=db.collection(`users`)
        .onSnapshot((querySnapshot)=>{
            const users=[];
            querySnapshot.forEach(function(doc){
                if(uid!=doc.data().uid)
                users.push(doc.data())
            });
            // console.log(users);
            dispatch({
                type:`${userConstant.GET_REALTIME_USERS}_SUCCESS`,
                payload:{users}
            })
        });
        return unsubscribe;
    
    }
}

export const updateMessage=(msgObj)=>{
    return async dispatch=>{
        const db=firebase.firestore();
        db.collection('conversations')
        .add({
            ...msgObj,
            isView:false,
            createdAt:new Date()
        })
        .then((data)=>{
            console.log(data);
            // dispatch({
            //     type:`${userConstant.GET_REALTIME_MESSAGES}`
            // })
        })
        .catch(error=>console.log(error))
    }
}
export const getRealtimeConversations=(user)=>{
    return async dispatch=>{
        const db=firebase.firestore();
        db.collection('conversations')
        .where('user_uid_1','in',[user.user_uid_1,user.user_uid_2])
        .orderBy('createdAt','asc')
        .onSnapshot(querySnapshot=>{
            const conversations=[]
            querySnapshot.forEach(doc=>{
                console.log(user.user_uid_2)
                if((doc.data().user_uid_1===user.user_uid_1 && doc.data().user_uid_2===user.user_uid_2) || (doc.data().user_uid_1===user.user_uid_2 && doc.data().user_uid_2===user.user_uid_1))
                {
                    conversations.push(doc.data());
                }
                
                // if(conversations.length>0)
                dispatch({
                    type:userConstant.GET_REALTIME_MESSAGES,
                    payload:{conversations}
                })
                // else
                // dispatch({
                //     type:`${userConstant.GET_REALTIME_MESSAGES}_FAILURE`,
                //     payload:{ coversations:[]}
                // })
            })
            console.log(conversations)
        })
    }
}