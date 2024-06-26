import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./Profile.css";
//import apiRequest from "../../lib/apiRequest";
//import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
//import { Suspense, useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  //const data = useLoaderData();

 // const { updateUser, currentUser } = useContext(AuthContext);

  //const navigate = useNavigate();

 // const handleLogout = async () => {
  //  try {
   //   await apiRequest.post("/auth/logout");
    //  updateUser(null);
   //   navigate("/");
  //  } catch (err) {
   //   console.log(err);
  //  }
 // };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          
              <button>Update Profile</button>
          
          </div>
         
          <div className="info">
            <span>
              Avatar:
              <img src="" alt="" />
            </span>
            <span>
              Username: <b>john Doe</b>
            </span>
            <span>
              E-mail: <b>John@gmail.com</b>
            </span>
            
          </div>
         
         
         
       
       
         {/*
           <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.userPosts} />}
            </Await>
          </Suspense>
         
         */}
          <div className="title">
            <h1>My List</h1>
            <button>create new post</button>
          </div>
          <List/>
          <div className="title">
            <h1>saved List</h1>
          
          </div>
          <List/>
          {/*
          
           <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={postResponse.data.savedPosts} />}
            </Await>
          </Suspense>

          */}
         
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
         {/*
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data}/>}
            </Await>
          </Suspense>
         */}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
