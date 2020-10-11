import React,{useState,useEffect} from 'react';
import './App.css';
import { Button,Input,InputLabel,FormControl }from '@material-ui/core';
import Message from './Message'
import db from './firebase'
import firebase from 'firebase'
import Logo from './Screen Shot 2020-10-07 at 11.14.28 AM.png'

 function App() {
  const [input,setInput] = useState("")
  const [messages,setMessage] = useState([
    {username: "Vanessa", message:"Hello World"}
  ])
  const [username,setUsername] = useState([
  ])

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp","desc")
      .onSnapshot(snapshot => {
      setMessage(snapshot.docs.map(doc => doc.data()))
   })
  }, [])

  useEffect(() => {
    setUsername(prompt("Enter your name"))
  }, [])
  

  const sendMessage = (event) => {
    event.preventDefault()
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('')
  }
  return (
    <>
    <div className="App">
     <div>
       <img src={Logo} alt="" />
        <h1>Messenger App</h1>
        <h2>Welcome,{username}</h2>
     </div>
     
      <form>
      <FormControl>
       <InputLabel >Send Text</InputLabel>
        <Input value={input}  onChange={event => setInput (event.target.value)} />
        <Button variant="contained" color="primary" disabled={!input} type="submit" onClick={sendMessage} >send</Button>
       </FormControl>
    
      
      </form>
      {messages.map(message =>
        <Message message={message} username={username}/>
        
        )}
    </div>
    </>
  );
}

export default App;
