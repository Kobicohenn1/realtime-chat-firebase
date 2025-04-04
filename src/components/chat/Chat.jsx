import { useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleEmojiChoose = (emojiObject) => {
    setTextInput((prev) => prev + emojiObject.emoji);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            </p>
          </div>
        </div>

        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
              ullam itaque reiciendis veritatis consectetur dignissimos error
              sint repellat amet rem aliquid dicta quod at, expedita vero optio
              quia odio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
              ullam itaque reiciendis veritatis consectetur dignissimos error
              sint repellat amet rem aliquid dicta quod at, expedita vero optio
              quia odio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
              ullam itaque reiciendis veritatis consectetur dignissimos error
              sint repellat amet rem aliquid dicta quod at, expedita vero optio
              quia odio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
              ullam itaque reiciendis veritatis consectetur dignissimos error
              sint repellat amet rem aliquid dicta quod at, expedita vero optio
              quia odio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
              ullam itaque reiciendis veritatis consectetur dignissimos error
              sint repellat amet rem aliquid dicta quod at, expedita vero optio
              quia odio?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Typse a message..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setEmojiPickerVisible((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker
              open={emojiPickerVisible}
              onEmojiClick={(emojiObject) => handleEmojiChoose(emojiObject)}
            />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};
export default Chat;
