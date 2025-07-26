function ChatList({ chats, users, activeChat, setActiveChatId }) {
    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Chats</h2>
            <ul>
                {
                    chats.map(chat => {
                        const otherId = chat.participants.find(id => id != "u1");
                        const chatUser = users.find(u => u.id === otherId);

                        return (
                            <li
                                key={chat.id}
                                className={
                                    "py-2 px-3 rounded cursor-pointer flex items-center " +
                                    (activeChat?.id === chat.id ? "bg-blue-100" : "hover:bg-gray-200")
                                }
                                onClick={() => setActiveChatId(chat.id)}
                            >
                                <img src={chatUser.avatar} alt={chatUser.username}  className="w-8 h-8 rounded-full mr-3"/>
                                <span>{chatUser.username}</span>
                                <span
                                    className={`w-2 h-2 ml-2 rounded-full ${
                                        chatUser.status === "online"
                                        ? "bg-green-500" 
                                        : chatUser.status === "away" 
                                        ? "bg-yellow-400" 
                                        : "bg-gray-400"
                                    }`}
                                >
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default ChatList;