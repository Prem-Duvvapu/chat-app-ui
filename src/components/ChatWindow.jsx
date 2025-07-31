import React from "react";

// TickIcon component to visually represent message status
const TickIcon = ({ status }) => {
  if (status === "read") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-blue-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {/* Double check marks */}
        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
        <path d="M9.707 5.293a1 1 0 00-1.414 0L3 10.586 4.414 12l4.293-4.293a1 1 0 000-1.414z" />
      </svg>
    );
  }
  if (status === "delivered") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        {/* Double check marks (gray) */}
        <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
        <path d="M9.707 5.293a1 1 0 00-1.414 0L3 10.586 4.414 12l4.293-4.293a1 1 0 000-1.414z" />
      </svg>
    );
  }
  // Default: single gray check
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
};

// Helper to format timestamps (HH:MM AM/PM)
const formatTime = (timestamp) => {
  if (!timestamp) return "";
  return new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

function ChatWindow({ activeChat, currentUser }) {
  if (!activeChat) {
    return <div className="flex-1 p-4 text-center text-gray-500">Select a chat to begin.</div>;
  }

  const messages = activeChat.messages || [];

  // Find index of the last message sent by current user (for ticks)
  const lastMyMessageIndex =
    messages.length - 1 - [...messages].reverse().findIndex((msg) => msg.senderId === currentUser.id);

  return (
    <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-2">
      {messages.map((msg, i) => {
        const isMine = msg.senderId === currentUser.id;
        const isLastMyMessage = isMine && i === lastMyMessageIndex;

        return (
          <div
            key={msg.id}
            className={`flex ${isMine ? "justify-end" : "justify-start"}`}
          >
            <div className="max-w-xs">
              <div
                className={`inline-block px-4 py-2 rounded-lg break-words ${
                  isMine ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>

              <div
                className={`flex items-center space-x-1 mt-1 ${
                  isMine ? "justify-end" : "justify-start"
                } text-xs text-gray-400 select-none`}
              >
                <span>{formatTime(msg.timestamp)}</span>
                {isLastMyMessage && <TickIcon status={msg.status} />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatWindow;
