import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
const LiveChat = () => {
  const [message, setMessage] = useState("");
  const [toggleChat, setToggleChat] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Hello how are you",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  const handleSendChat = (event) => {
    // setMessage(e.target.value);

    dispatch(
      addMessage({
        name: "Tarun",
        message: message,
      })
    );
    setMessage("");
  };

  const handleHideShowChat = () => {
    setToggleChat(!toggleChat)
  };

  const chatMessages = useSelector((store) => store.chat.messages);

  return (
    <>
      <div>

        { toggleChat && <div>
            <div className="h-[490px] border border-gray-300 p-2 flex flex-col-reverse overflow-x-auto">
            Live chat
            {chatMessages.map((c, i) => (
                <ChatMessage key={i} name={c.name} message={c.message} />
            ))}
            </div>
            <div className="flex border border-gray-300 p-3">
            <input
                type="text"
                value={message}
                className=" border border-gray-500 h-10 w-[370px] px-4 outline-none"
                placeholder="Start Chat"
                onChange={(e) => {
                setMessage(e.target.value);
                }}
            />
            <button
                className=" bg-sky-500 px-4 text-white"
                onClick={handleSendChat}
            >
                Send
            </button>
            </div>
        </div>}
        <div className="border border-gray-300 p-1 mb-3">
          <button
            className="hover:bg-gray-300 p-1 text-black font-normal w-[100%] rounded-xl"
            onClick={handleHideShowChat}
          >
            { toggleChat ? "Hide Chat" : "Show Chat" }
          </button>
        </div>
      </div>
    </>
  );
};

export default LiveChat;
