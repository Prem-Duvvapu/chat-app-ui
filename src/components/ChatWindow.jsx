function ChatWindow({ activeChat, currentUser }) {
    if (!activeChat) {
        return (
            <div className="flex-1 p-4">
                Select a chat to begin.
            </div>
        );
    }

    return (
        <div className="flex-1 p-4 overflow-y-auto">
            {activeChat.messages.map(msg => {
                const isMine = (msg.senderId === currentUser.id);

                return (
                    <div key={msg.id} className={`mb-2 flex ${
                        isMine
                        ? "justify-end"
                        : "justify-start"
                    }`}>
                        <span
                            className={`inline-block px-4 px-2 rounded-lg max-w-xs ${
                                isMine
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-900"
                            }`}
                        >
                            {msg.text}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default ChatWindow;