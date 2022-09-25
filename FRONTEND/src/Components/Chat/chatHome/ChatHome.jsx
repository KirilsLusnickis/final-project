import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const ChatHome = ({ username, setUsername, room, setRoom, socket }) => {
  const navigate = useNavigate();

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
      navigate('/chatapp', { replace: true });
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
      <div className={styles.content}>
        <h1>{`CHAT`}</h1>
        <input
          className={styles.input}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>Select Room</option>
          <option value="latvia">Latvia</option>
          <option value="lithuania">Lithuania</option>
          <option value="estonia">Estonia</option>
        </select>

        <button
          className={styles.btn}
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
      </div>
    </div>
  );
};

export default ChatHome;
