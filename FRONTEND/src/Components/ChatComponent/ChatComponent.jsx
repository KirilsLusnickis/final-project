import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./chatComponent.css";

function ChatComponent() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  useEffect(async() => {
    
  }, []);

  useEffect(async() => {

  }, []);
  return (
    <div className="wrapper">
      <div className="container">ChatComponent</div>
    </div>
  );
}

export default ChatComponent;
