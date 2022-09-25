import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import ChatHome from "./Components/Chat/chatHome/ChatHome";
import ChatApp from "./Components/Chat/chatApp/ChatApp";
import TopBar from "./Components/topBar/TopBar";
import AboutUsPage from "./Pages/aboutUsPage/AboutUsPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/loginPage/LoginPage"

const socket = io.connect("https://whispering-headland-00234.herokuapp.com");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
        <Route
          path="/chat"
          element={
            <>
              <TopBar />
              <ChatHome
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />
            </>
          }
        />
        <Route
          path="/chatapp"
          element={
            <>
              <TopBar />
              <ChatApp username={username} room={room} socket={socket} />
            </>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/sign-up" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
export default App;
