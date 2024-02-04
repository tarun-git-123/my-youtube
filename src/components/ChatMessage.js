import React from "react";
const ChatMessage = ({name,message}) => {
  return (
    <>
      <div className="flex py-1">
        <img className="h-6 rounded-full mx-3"
          src="https://yt4.ggpht.com/ytc/AIf8zZRGbaHmiW13x4p1Npq1r1g2JlGKXfGrdwqIaXtY2TVqn2TALv2Ut_NLvlIPQ75V=s32-c-k-c0x00ffffff-no-rj"
          alt="cutomer_thumbnail"
        />
        <h1 className="font-normal text-sm text-gray-700">{name}</h1>
        <h1 className="font-normal text-sm font-sans ml-3 text-gray-600">{message}</h1>
      </div>
    </>
  );
};

export default ChatMessage;
