import styles from "./styles.module.css";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import RoomAndUsers from "./RoomAndUsers";

const ChatApp = ({ username, room, socket }) => {
  console.log(username);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.chatContainer}>
        <RoomAndUsers socket={socket} username={username} room={room} />
        <div>
          <Messages socket={socket} />

          <SendMessage socket={socket} username={username} room={room} />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
