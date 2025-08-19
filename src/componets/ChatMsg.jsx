

function ChatMsg({ name, massage }) {



  return (
    <div className="flex items-center gap-1 shadow-sm rounded-lg">
      <img
        className="w-12 h-12 rounded-lg"
        src="https://thumbs.dreamstime.com/b/user-icon-vector-sign-symbol-isolated-white-background-logo-concept-your-web-mobile-app-design-134155783.jpg"
        alt="user-icon"
      />
      <span className="font-bold mr-1 px-1 ">{name}: </span>
      <span>{massage}</span>
    </div>
  );
}

export default ChatMsg;
