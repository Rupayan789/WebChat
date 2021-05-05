import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../component/layout/layout.component';
import User from '../../component/layout/UI/user/user.component';
import { getRealtimeConversations, getRealtimeUsers, updateMessage } from '../../redux/action/user.action';
import './styles.scss';

const Homepage = (props) => {
  const dispatch=useDispatch();
  const auth=useSelector(state=>state.auth);
  const listUsers=useSelector(state=>state.user);
  let unsubscribe;
  const [chatStarted,setChatStarted]=useState(false);
  const [chatUser,setChatUser]=useState('');
  const [chatUserUid,setChatUserUid]=useState('');
  const [message,setMessage]=useState('');
 

  const initChat=user=>{
    setChatStarted(true);
    setChatUser(`${user.firstName} ${user.lastName}`)
    setChatUserUid(user.uid);
    dispatch(getRealtimeConversations({user_uid_1:auth.uid,user_uid_2:user.uid}))
  }
  const submitMessage=(e)=>{
    e.preventDefault();
        const msgObj={
            user_uid_1:auth.uid,
            user_uid_2:chatUserUid,
            message:message
          }
          if(message)
          dispatch(updateMessage(msgObj))
          setMessage('');
          // console.log(msgObj)

  }


  useEffect(()=>{
    unsubscribe= dispatch(getRealtimeUsers(auth.uid))
    .then(unsubscribe=>{
      return unsubscribe;
    }).catch(error=>console.log(error));
    console.log(auth);
    
  },[])
  //ComponentWillUnmount
  useEffect(()=>{
    return ()=>{
      unsubscribe.then(f=>f()).catch(error=>console.log(error))
    }
  },[])

  return (
    <Layout>
        <section className="containerBox">
    <div className="listOfUsers">
        {
          listUsers.users.length>0?
          listUsers.users.map(user=>{
            return (<User onClick={initChat} key={user.uid} user={user}/>);
          }):null
          
        }
      </div> 
                
    
    <div className="chatArea">
    
        <div className="chatHeader"> 
        {
          chatStarted?chatUser:null
        } </div>
        <div className="messageSections">
            {
              chatStarted?
              listUsers.conversations.map(con=><div style={{ textAlign: con.user_uid_1==auth.uid?'right':'left' }}>
                <p className="messageStyle" >{con.message}</p>
            </div>):null
              
            }
            

        </div>
        {
          chatStarted?
          <div className="chatControls">
            <textarea value={message} onChange={e=>setMessage(e.target.value) }
            placeholder='Send Message' />
            <button onClick={submitMessage}>Send</button>
        </div>
        :null
        }
        
    </div>
</section>
    </Layout>
    
  );
}

export default Homepage;