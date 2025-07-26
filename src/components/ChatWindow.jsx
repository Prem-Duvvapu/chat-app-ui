function ChatWindow({ activeChat, currentUser }) {
    if (!activeChat) {
        return (
            <div>
                Select a chat to begin.
            </div>
        );
    }

    return (
        <div>
            {activeChat.messages.map(msg => {
                const isMine = (msg.senderId === currentUser.id);

                return (
                    <div>
                        <span>{msg.text}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default ChatWindow;