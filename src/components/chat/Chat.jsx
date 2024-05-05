import {  useState } from "react";
import "./Chat.css";
//import { AuthContext } from "../../context/AuthContext";
//import apiRequest from "../../lib/apiRequest";
//import { format } from "timeago.js";
//import { SocketContext } from "../../context/SocketContext";
//import { useNotificationStore } from "../../lib/notificationStore";

function Chat() {
  const [chat, setChat] = useState(null);
 // const { currentUser } = useContext(AuthContext);
  //const { socket } = useContext(SocketContext);

 // const messageEndRef = useRef();

 // const decrease = useNotificationStore((state) => state.decrease);

 // useEffect(() => {
  //  messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
 // }, [chat]);

  //const handleOpenChat = async (id, receiver) => {
   // try {
     // const res = await apiRequest("/chats/" + id);
    //  if (!res.data.seenBy.includes(currentUser.id)) {
    //    decrease();
    //  }
     // setChat({ ...res.data, receiver });
    //} catch (err) {
    //  console.log(err);
   // }
  //};

  //const handleSubmit = async (e) => {
   // e.preventDefault();

   // const formData = new FormData(e.target);
   // const text = formData.get("text");

   // if (!text) return;
    //try {
    //  const res = await apiRequest.post("/messages/" + chat.id, { text });
    //  setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
    //  e.target.reset();
     // socket.emit("sendMessage", {
      //  receiverId: chat.receiver.id,
      //  data: res.data,
     // });
    //} catch (err) {
     // console.log(err);
    //}
 // };

 // useEffect(() => {
   // const read = async () => {
    //  try {
    //    await apiRequest.put("/chats/read/" + chat.id);
     // } catch (err) {
    //    console.log(err);
     // }
   // };

   // if (chat && socket) {
    //  socket.on("getMessage", (data) => {
     //   if (chat.id === data.chatId) {
     //     setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
      //    read();
     //   }
    //  });
  //  }
  //  return () => {
   //   socket.off("getMessage");
  //  };
//  }, [socket, chat]);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
      
          <div className="message">
            
           
            
        <img src="" alt="" />
            <span>John Doe</span>
            <p>lore</p>
          </div>
       
      </div>
     
        <div className="chatBox">
      
          <div className="top">
            <div className="user">
              <img src="" alt="" />
             John doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            
              <div
                className="chatMessage" >
                
             
                <p>Lorem</p>
                <span>1 hour ago</span>
              </div>
              
              <div
                className="chatMessage own" >
                
             
                <p>Lorem</p>
                <span>1 hour ago</span>
              </div>
              
              <div
                className="chatMessage own" >
                
             
                <p>Lorem</p>
                <span>1 hour ago</span>
              </div>
              
              <div
                className="chatMessage own" >
                
             
                <p>Lorem</p>
                <span>1 hour ago</span>
              </div>

           
            <div className="bottom" ></div>
            <textarea name="" id=""></textarea>
            <button>send</button>
          </div>
        
        </div>
       
      
    </div>
   
  )
}

export default Chat;
